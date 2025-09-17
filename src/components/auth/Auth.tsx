import '../../global/actions/initial';

import type { FC } from '../../lib/teact/teact';
import React, { memo, useRef, useEffect, useState } from '../../lib/teact/teact';
import { getActions, withGlobal } from '../../global';
import { AUTO_LOGIN_WITH_FINGERPRINT_DEFAULT } from '../../config';
import Loading from '../ui/Loading';

import type { GlobalState } from '../../global/types';

import { PLATFORM_ENV } from '../../util/windowEnvironment';

import useCurrentOrPrev from '../../hooks/useCurrentOrPrev';
import useElectronDrag from '../../hooks/useElectronDrag';
import useHistoryBack from '../../hooks/useHistoryBack';

import Transition from '../ui/Transition';
import AuthCode from './AuthCode.async';
import AuthPassword from './AuthPassword.async';
import AuthPhoneNumber from './AuthPhoneNumber';
import AuthQrCode from './AuthQrCode';
import AuthRegister from './AuthRegister.async';

import './Auth.scss';

type StateProps = Pick<GlobalState, 'authState'>;

const Auth: FC<StateProps> = ({
  authState,
}) => {
  // 是否已尝试自动登录（在尝试完成前阻止渲染登录 UI，避免先展示二维码）
  const [autoLoginAttempted, setAutoLoginAttempted] = useState<boolean>(!AUTO_LOGIN_WITH_FINGERPRINT_DEFAULT);
  // 是否允许手机号注册（从远端配置读取，影响渲染）
  const [allowPhoneRegistration, setAllowPhoneRegistration] = useState<boolean>(true);
  // 是否开启指纹自动登录（从远端配置读取，作为默认回退值）
  const [autoLoginWithFingerprint, setAutoLoginWithFingerprint] = useState<boolean>(AUTO_LOGIN_WITH_FINGERPRINT_DEFAULT);

  useEffect(() => {
    let cancelled = false;
    const actions = getActions() as any;

    const genDeviceId = (): string => {
      const key = '__device_fingerprint_id';
      try {
        let id = localStorage.getItem(key);
        if (!id) {
          if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
            const arr = new Uint8Array(16);
            crypto.getRandomValues(arr);
            id = Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
          } else {
            id = Math.random().toString(36).slice(2) + Date.now().toString(36);
          }
          try { localStorage.setItem(key, id); } catch {}
        }
        return id!;
      } catch {
        return (Math.random().toString(36).slice(2) + Date.now().toString(36));
      }
    };

    const run = async () => {
      try {
        // 1. 优先通过 actions.loadAppConfig 获取配置
        let cfg: any = undefined;
        if (actions && typeof actions.loadAppConfig === 'function') {
          try { cfg = await actions.loadAppConfig(); } catch { /* ignore */ }
        }

        // 2. fallback 到全局注入（不再请求 /config.json，避免 404）
        if (!cfg && (window as any).APP_CONFIG) cfg = (window as any).APP_CONFIG;
        // 如果仍无 cfg，后面使用默认值回退

        if (!cancelled) {
          setAllowPhoneRegistration(cfg?.allowPhoneRegistration ?? true);
          setAutoLoginWithFingerprint(cfg?.autoLoginWithFingerprint ?? AUTO_LOGIN_WITH_FINGERPRINT_DEFAULT);
        }

        // 3. 若允许自动登录则尝试一次 deviceId 登录（优先使用远端 cfg，回退到本地 state）
        const shouldAuto = cfg?.autoLoginWithFingerprint ?? autoLoginWithFingerprint;
        if (shouldAuto && !cancelled) {
          const deviceId = genDeviceId();
          if (deviceId && actions) {
            try {
              if (typeof actions.autoLoginWithDeviceId === 'function') {
                const ok = await actions.autoLoginWithDeviceId(deviceId);
                if (ok) {
                  // 成功：假定全局 action 已处理后续导航/状态更新
                  return;
                }
              }
              // 兼容旧名
              if (typeof actions.loginWithDeviceId === 'function') {
                const ok2 = await actions.loginWithDeviceId(deviceId);
                if (ok2) return;
              }
            } catch (e) {
              // eslint-disable-next-line no-console
              console.warn('auto-login action error', e);
            }
          }
        }
      } finally {
        if (!cancelled) setAutoLoginAttempted(true);
      }
    };

    void run();
    return () => { cancelled = true; };
  }, []);

  const {
    returnToAuthPhoneNumber, goToAuthQrCode,
  } = getActions();

  const isMobile = PLATFORM_ENV === 'iOS' || PLATFORM_ENV === 'Android';

  const handleChangeAuthorizationMethod = () => {
    if (!isMobile) {
      goToAuthQrCode();
    } else {
      returnToAuthPhoneNumber();
    }
  };

  useHistoryBack({
    isActive: (!isMobile && authState === 'authorizationStateWaitPhoneNumber')
      || (isMobile && authState === 'authorizationStateWaitQrCode'),
    onBack: handleChangeAuthorizationMethod,
  });

  // eslint-disable-next-line no-null/no-null
  const containerRef = useRef<HTMLDivElement>(null);
  useElectronDrag(containerRef);

  // For animation purposes
  const renderingAuthState = useCurrentOrPrev(
    authState !== 'authorizationStateReady' ? authState : undefined,
    true,
  );

  function getScreen() {
    // 在自动登录尝试完成前显示 Loading，避免先展示二维码/其它登录 UI
    if (!autoLoginAttempted) {
      return (
        <div className="Auth Auth--loading">
          <Loading />
        </div>
      );
    }

    switch (renderingAuthState) {
      case 'authorizationStateWaitCode':
        return <AuthCode />;
      case 'authorizationStateWaitPassword':
        return <AuthPassword />;
      case 'authorizationStateWaitRegistration':
        return <AuthRegister />;
      case 'authorizationStateWaitPhoneNumber':
        // 根据远端配置决定是否展示手机号注册页面
        return allowPhoneRegistration ? <AuthPhoneNumber /> : <AuthQrCode />;
      case 'authorizationStateWaitQrCode':
        return <AuthQrCode />;
      default:
        return isMobile ? <AuthPhoneNumber /> : <AuthQrCode />;
    }
  }

  function getActiveKey() {
    switch (renderingAuthState) {
      case 'authorizationStateWaitCode':
        return 0;
      case 'authorizationStateWaitPassword':
        return 1;
      case 'authorizationStateWaitRegistration':
        return 2;
      case 'authorizationStateWaitPhoneNumber':
        return 3;
      case 'authorizationStateWaitQrCode':
        return 4;
      default:
        return isMobile ? 3 : 4;
    }
  }

  return (
    <Transition activeKey={getActiveKey()} name="fade" className="Auth" ref={containerRef}>
      {getScreen()}
    </Transition>
  );
};

export default memo(withGlobal(
  (global): StateProps => {
    return {
      authState: global.authState,
    };
  },
)(Auth));
