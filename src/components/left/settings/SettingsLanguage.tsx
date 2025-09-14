import type { FC } from '../../../lib/teact/teact';
import React, {
  memo, useEffect, useMemo, useState,
} from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { ApiLanguage } from '../../../api/types';
import type { ISettings, LangCode } from '../../../types';
import { SettingsScreens } from '../../../types';

import { selectIsCurrentUserPremium } from '../../../global/selectors';
import { oldSetLanguage } from '../../../util/oldLangProvider';
import { IS_TRANSLATION_SUPPORTED } from '../../../util/windowEnvironment';

import useFlag from '../../../hooks/useFlag';
import useHistoryBack from '../../../hooks/useHistoryBack';
import useLastCallback from '../../../hooks/useLastCallback';
import useOldLang from '../../../hooks/useOldLang';

import ItemPicker, { type ItemPickerOption } from '../../common/pickers/ItemPicker';
import Checkbox from '../../ui/Checkbox';
import ListItem from '../../ui/ListItem';
import Loading from '../../ui/Loading';

type OwnProps = {
  isActive?: boolean;
  onReset: () => void;
  onScreenSelect: (screen: SettingsScreens) => void;
};

type StateProps = {
  isCurrentUserPremium: boolean;
  languages?: ApiLanguage[];
} & Pick<ISettings, | 'language' | 'canTranslate' | 'canTranslateChats' | 'doNotTranslate'>;

const SettingsLanguage: FC<OwnProps & StateProps> = ({
  isActive,
  isCurrentUserPremium,
  languages,
  language,
  canTranslate,
  canTranslateChats,
  doNotTranslate,
  onScreenSelect,
  onReset,
}) => {
  const {
    loadLanguages,
    setSettingOption,
    openPremiumModal,
  } = getActions();

  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);
  const [isLoading, markIsLoading, unmarkIsLoading] = useFlag();

  const canTranslateChatsEnabled = isCurrentUserPremium && canTranslateChats;

  const lang = useOldLang();

  useEffect(() => {
    if (!languages?.length) {
      loadLanguages();
    }
  }, [languages]);

  const handleChange = useLastCallback((langCode: string) => {
    setSelectedLanguage(langCode);
    markIsLoading();

    void oldSetLanguage(langCode as LangCode, () => {
      unmarkIsLoading();

      setSettingOption({ language: langCode as LangCode });
    });
  });

  const options = useMemo(() => {
    if (!languages) return undefined;
    const currentLangCode = (window.navigator.language || 'zh').toLowerCase();
    const shortLangCode = currentLangCode.substr(0, 2);

    const mapped = languages.map(({ langCode, nativeName, name }) => ({
      value: langCode,
      // 强制转为 string，避免 nativeName/name 被推断为 TeactNode/number
      label: String(nativeName),
      subLabel: String(name),
      isLoading: langCode === selectedLanguage && isLoading,
    } as ItemPickerOption));

    // 如果 languages 中没有明确的中文项，添加一个快速切换的中文选项（'zh'）
    const chineseCodes = ['zh', 'zh-cn', 'zh-hans', 'zh-hant', 'zh-tw'];
    const hasChinese = mapped.some((o) => chineseCodes.includes(o.value.toLowerCase()));
    if (!hasChinese) {
      mapped.unshift({
        value: 'zh',
        label: '中文',
        subLabel: 'Chinese',
        isLoading: selectedLanguage === 'zh' && isLoading,
      } as ItemPickerOption);
    }

    return mapped.sort((a) => {
      return currentLangCode && (a.value === currentLangCode || a.value === shortLangCode) ? -1 : 0;
    });
  }, [isLoading, languages, selectedLanguage]);

  const handleShouldTranslateChange = useLastCallback((newValue: boolean) => {
    setSettingOption({ canTranslate: newValue });
  });

  const handleShouldTranslateChatsChange = useLastCallback((newValue: boolean) => {
    setSettingOption({ canTranslateChats: newValue });
  });

  const handleShouldTranslateChatsClick = useLastCallback(() => {
    if (!isCurrentUserPremium) {
      openPremiumModal({
        initialSection: 'translations',
      });
    }
  });

  const doNotTranslateText = useMemo(() => {
    if (!IS_TRANSLATION_SUPPORTED || !doNotTranslate.length) {
      return undefined;
    }

    if (doNotTranslate.length === 1) {
      const originalNames = new Intl.DisplayNames([language], { type: 'language' });
      return originalNames.of(doNotTranslate[0])!;
    }

    return lang('Languages', doNotTranslate.length);
  }, [doNotTranslate, lang, language]);

  const handleDoNotSelectOpen = useLastCallback(() => {
    onScreenSelect(SettingsScreens.DoNotTranslate);
  });

  useHistoryBack({
    isActive,
    onBack: onReset,
  });

  return (
    <div className="settings-content settings-language custom-scroll">
      {IS_TRANSLATION_SUPPORTED && (
        <div className="settings-item">
          <Checkbox
            label={lang('ShowTranslateButton')}
            checked={canTranslate}
            onCheck={handleShouldTranslateChange}
          />
          <Checkbox
            label={lang('ShowTranslateChatButton')}
            checked={canTranslateChatsEnabled}
            disabled={!isCurrentUserPremium}
            rightIcon={!isCurrentUserPremium ? 'lock' : undefined}
            onClickLabel={handleShouldTranslateChatsClick}
            onCheck={handleShouldTranslateChatsChange}
          />
          {(canTranslate || canTranslateChatsEnabled) && (
            <ListItem
              narrow
              onClick={handleDoNotSelectOpen}
            >
              {lang('DoNotTranslate')}
              <span className="settings-item__current-value">{doNotTranslateText}</span>
            </ListItem>
          )}
          <p className="settings-item-description mb-0 mt-1">
            {lang('lng_translate_settings_about')}
          </p>
        </div>
      )}
      <div className="settings-item settings-item-picker">
        <h4 className="settings-item-header">
          {lang('Localization.InterfaceLanguage')}
        </h4>
        {options ? (
          <ItemPicker
            items={options}
            selectedValue={selectedLanguage}
            forceRenderAllItems
            onSelectedValueChange={handleChange}
            itemInputType="radio"
            className="settings-picker"
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    const {
      language, canTranslate, canTranslateChats, doNotTranslate,
    } = global.settings.byKey;
    const languages = global.settings.languages;

    const isCurrentUserPremium = selectIsCurrentUserPremium(global);

    return {
      isCurrentUserPremium,
      languages,
      language,
      canTranslate,
      canTranslateChats,
      doNotTranslate,
    };
  },
)(SettingsLanguage));
