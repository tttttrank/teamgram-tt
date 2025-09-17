import type {
  ApiUpdateAuthorizationState,
  ApiUpdateAuthorizationStateType,
  ApiUser,
  ApiUserFullInfo,
} from '../../types';

import { wrapError } from '../helpers/misc';
import { sendApiUpdate } from '../updates/apiUpdateEmitter';

const authController: {
  resolve?: Function;
  reject?: Function;
} = {};

// 新增：用于请求/接收运行时配置的控制器（与 authController 分离，避免冲突）
const appConfigController: {
  resolve?: Function;
  reject?: Function;
} = {};

export function onWebAuthTokenFailed() {
  sendApiUpdate({
    '@type': 'updateWebAuthTokenFailed',
  });
}

export function onRequestPhoneNumber() {
  sendApiUpdate(buildAuthStateUpdate('authorizationStateWaitPhoneNumber'));

  return new Promise<string>((resolve, reject) => {
    authController.resolve = resolve;
    authController.reject = reject;
  });
}

export function onRequestCode(isCodeViaApp = false) {
  sendApiUpdate({
    ...buildAuthStateUpdate('authorizationStateWaitCode'),
    isCodeViaApp,
  });

  return new Promise<string>((resolve, reject) => {
    authController.resolve = resolve;
    authController.reject = reject;
  });
}

export function onRequestPassword(hint?: string, noReset?: boolean) {
  sendApiUpdate({
    ...buildAuthStateUpdate('authorizationStateWaitPassword'),
    hint,
    noReset,
  });

  return new Promise<string>((resolve) => {
    authController.resolve = resolve;
  });
}

export function onRequestRegistration() {
  sendApiUpdate(buildAuthStateUpdate('authorizationStateWaitRegistration'));

  return new Promise<[string, string?]>((resolve) => {
    authController.resolve = resolve;
  });
}

export function onRequestQrCode(qrCode: { token: Buffer; expires: number }) {
  sendApiUpdate({
    ...buildAuthStateUpdate('authorizationStateWaitQrCode'),
    qrCode: {
      token: btoa(String.fromCharCode(...qrCode.token)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
      expires: qrCode.expires,
    },
  });

  return new Promise<void>((resolve, reject) => {
    authController.reject = reject;
  });
}

// 新增：请求设备指纹登录（UI 进入等待设备指纹的授权状态）
// 返回一个 Promise，resolve 时会传回前端提供的 deviceId（string）
export function onRequestDeviceLogin() {
  sendApiUpdate(buildAuthStateUpdate('authorizationStateWaitDeviceLogin'));

  return new Promise<string>((resolve, reject) => {
    authController.resolve = resolve;
    authController.reject = reject;
  });
}

// 新增：前端提供设备指纹 ID（由 UI 调用）
export function provideAuthDeviceId(deviceId: string) {
  if (!authController.resolve) {
    return;
  }

  authController.resolve(deviceId);
}

// 新增：重启设备指纹登录流程（由服务器或外部触发）
export function restartAuthWithDevice() {
  if (!authController.reject) {
    return;
  }

  authController.reject(new Error('RESTART_AUTH_WITH_DEVICE'));
}

export function onAuthError(err: Error) {
  const { messageKey } = wrapError(err);

  sendApiUpdate({
    '@type': 'updateAuthorizationError',
    errorKey: messageKey,
  });
}

export function onAuthReady() {
  sendApiUpdate(buildAuthStateUpdate('authorizationStateReady'));
}

export function onCurrentUserUpdate(currentUser: ApiUser, currentUserFullInfo: ApiUserFullInfo) {
  sendApiUpdate({
    '@type': 'updateCurrentUser',
    currentUser,
    currentUserFullInfo,
  });
}

export function buildAuthStateUpdate(authorizationState: ApiUpdateAuthorizationStateType): ApiUpdateAuthorizationState {
  return {
    '@type': 'updateAuthorizationState',
    authorizationState,
  };
}

export function provideAuthPhoneNumber(phoneNumber: string) {
  if (!authController.resolve) {
    return;
  }

  authController.resolve(phoneNumber);
}

export function provideAuthCode(code: string) {
  if (!authController.resolve) {
    return;
  }

  authController.resolve(code);
}

export function provideAuthPassword(password: string) {
  if (!authController.resolve) {
    return;
  }

  authController.resolve(password);
}

export function provideAuthRegistration(registration: { firstName: string; lastName: string }) {
  const { firstName, lastName } = registration;

  if (!authController.resolve) {
    return;
  }

  authController.resolve([firstName, lastName]);
}

export function restartAuth() {
  if (!authController.reject) {
    return;
  }

  authController.reject(new Error('RESTART_AUTH'));
}

export function restartAuthWithQr() {
  if (!authController.reject) {
    return;
  }

  authController.reject(new Error('RESTART_AUTH_WITH_QR'));
}

// 新增：worker 端向前端请求运行时配置（UI 应当在收到 updateRequestAppConfig 后调用 provideAppConfig）
export function onRequestAppConfig() {
  sendApiUpdate({
    '@type': 'updateRequestAppConfig',
  });

  return new Promise<any>((resolve, reject) => {
    appConfigController.resolve = resolve;
    appConfigController.reject = reject;
  });
}

// 新增：前端回传运行时配置到 worker（前端通过消息桥接调用此函数）
export function provideAppConfig(config: any) {
  if (!appConfigController.resolve) return;
  appConfigController.resolve(config);
}

// 可选：如果需要让前端显式拒绝/重试请求
export function rejectAppConfig(reason?: any) {
  if (!appConfigController.reject) return;
  appConfigController.reject(reason ?? new Error('REJECT_APP_CONFIG'));
}
