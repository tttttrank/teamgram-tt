"use strict";
(self["webpackChunktelegram_t"] = self["webpackChunktelegram_t"] || []).push([["src_components_common_BadgeButton_tsx-src_components_common_gift_GiftMenuItems_tsx-src_compon-ad9759"],{

/***/ "./src/components/common/BadgeButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/BadgeButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BadgeButton.module.scss */ "./src/components/common/BadgeButton.module.scss");



const BadgeButton = ({
  children,
  className,
  onClick
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, onClick && _BadgeButton_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].clickable, className),
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeButton);

/***/ }),

/***/ "./src/components/common/MiniTable.tsx":
/*!*********************************************!*\
  !*** ./src/components/common/MiniTable.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniTable.module.scss */ "./src/components/common/MiniTable.module.scss");



const MiniTable = ({
  data,
  style,
  className,
  valueClassName,
  keyClassName
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
    style: style
  }, data.map(([key, value]) => /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].key, keyClassName)
  }, key), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_1__["default"])(_MiniTable_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].value, valueClassName)
  }, value))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(MiniTable));

/***/ }),

/***/ "./src/components/common/gift/GiftMenuItems.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/gift/GiftMenuItems.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _util_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/clipboard */ "./src/util/clipboard.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/MenuItem */ "./src/components/ui/MenuItem.tsx");







const GiftMenuItems = ({
  peerId,
  canManage,
  gift: typeGift,
  currentUserEmojiStatus,
  collectibleEmojiStatuses
}) => {
  const {
    showNotification,
    openChatWithDraft,
    openGiftTransferModal,
    openGiftStatusInfoModal,
    setEmojiStatus,
    toggleSavedGiftPinned,
    changeGiftVisibility
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const isSavedGift = typeGift && 'gift' in typeGift;
  const savedGift = isSavedGift ? typeGift : undefined;
  const gift = isSavedGift ? typeGift.gift : typeGift;
  const starGiftUniqueSlug = gift?.type === 'starGiftUnique' ? gift.slug : undefined;
  const starGiftUniqueLink = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return `${_config__WEBPACK_IMPORTED_MODULE_2__.TME_LINK_PREFIX}nft/${starGiftUniqueSlug}`;
  }, [starGiftUniqueSlug]);
  const userCollectibleStatus = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!starGiftUniqueSlug) return undefined;
    return collectibleEmojiStatuses?.find(status => status.type === 'collectible' && status.slug === starGiftUniqueSlug);
  }, [starGiftUniqueSlug, collectibleEmojiStatuses]);
  const currenUniqueEmojiStatusSlug = currentUserEmojiStatus?.type === 'collectible' ? currentUserEmojiStatus.slug : undefined;
  const isGiftUnique = gift && gift.type === 'starGiftUnique';
  const canTakeOff = isGiftUnique && currenUniqueEmojiStatusSlug === gift.slug;
  const canWear = userCollectibleStatus && !canTakeOff;
  const hasPinOptions = canManage && savedGift && !savedGift.isUnsaved && isGiftUnique;
  const handleTriggerVisibility = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const {
      inputGift,
      isUnsaved
    } = savedGift;
    changeGiftVisibility({
      gift: inputGift,
      shouldUnsave: !isUnsaved
    });
  });
  const handleCopyLink = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (!starGiftUniqueLink) return;
    (0,_util_clipboard__WEBPACK_IMPORTED_MODULE_3__.copyTextToClipboard)(starGiftUniqueLink);
    showNotification({
      message: lang('LinkCopied')
    });
  });
  const handleLinkShare = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (!starGiftUniqueLink) return;
    openChatWithDraft({
      text: {
        text: starGiftUniqueLink
      }
    });
  });
  const handleTransfer = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (savedGift?.gift.type !== 'starGiftUnique') return;
    openGiftTransferModal({
      gift: savedGift
    });
  });
  const handleWear = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (gift?.type !== 'starGiftUnique' || !userCollectibleStatus) return;
    openGiftStatusInfoModal({
      emojiStatus: userCollectibleStatus
    });
  });
  const handleTakeOff = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (canTakeOff) {
      setEmojiStatus({
        emojiStatus: {
          type: 'regular',
          documentId: _config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATUS_ICON_ID
        }
      });
    }
  });
  const handleTogglePin = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    toggleSavedGiftPinned({
      peerId,
      gift: savedGift
    });
  });
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, hasPinOptions && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: savedGift.isPinned ? 'unpin' : 'pin',
    onClick: handleTogglePin
  }, lang(savedGift.isPinned ? 'UnpinFromTop' : 'PinToTop')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "link-badge",
    onClick: handleCopyLink
  }, lang('CopyLink')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "forward",
    onClick: handleLinkShare
  }, lang('Share')), canManage && isGiftUnique && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "diamond",
    onClick: handleTransfer
  }, lang('GiftInfoTransfer')), canManage && savedGift && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: savedGift.isUnsaved ? 'eye-outline' : 'eye-crossed-outline',
    onClick: handleTriggerVisibility
  }, lang(savedGift.isUnsaved ? 'GiftActionShow' : 'GiftActionHide')), canWear && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "crown-wear",
    onClick: handleWear
  }, lang('GiftInfoWear')), canTakeOff && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "crown-take-off",
    onClick: handleTakeOff
  }, lang('GiftInfoTakeOff')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(GiftMenuItems));

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useUniqueId */ "./src/hooks/useUniqueId.ts");
/* harmony import */ var _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GiftRibbon.module.scss */ "./src/components/common/gift/GiftRibbon.module.scss");






const COLORS = {
  red: [['#FF5B54', '#ED1C26'], ['#653633', '#532224']],
  blue: [['#6ED2FF', '#34A4FC'], ['#344F5A', '#152E42']]
};
const COLOR_KEYS = new Set(Object.keys(COLORS));
const GiftRibbon = ({
  text,
  color,
  className,
  theme
}) => {
  const randomId = (0,_hooks_useUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const validSvgRandomId = `svg-${randomId}`; // ID must start with a letter

  const colorKey = COLOR_KEYS.has(color) ? color : undefined;
  const isDarkTheme = theme === 'dark';
  const gradientColor = colorKey ? COLORS[colorKey][isDarkTheme ? 1 : 0] : undefined;
  const startColor = gradientColor ? gradientColor[0] : color;
  const endColor = gradientColor ? gradientColor[1] : color;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root, className)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].ribbon,
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    d: "M52.4851 26.4853L29.5145 3.51472C27.2641 1.26428 24.2119 0 21.0293 0H2.82824C1.04643 0 0.154103 2.15429 1.41403 3.41422L52.5856 54.5858C53.8455 55.8457 55.9998 54.9534 55.9998 53.1716V34.9706C55.9998 31.788 54.7355 28.7357 52.4851 26.4853Z",
    fill: `url(#${validSvgRandomId})`
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("defs", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("linearGradient", {
    id: validSvgRandomId,
    x1: "27.9998",
    y1: "1",
    x2: "27.9998",
    y2: "55",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    "stop-color": startColor
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("stop", {
    offset: "1",
    "stop-color": endColor
  })))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _GiftRibbon_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].text
  }, text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)(global => {
  return {
    theme: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectTheme)(global)
  };
})(GiftRibbon)));

/***/ }),

/***/ "./src/components/middle/message/ActionMessage.tsx":
/*!*********************************************************!*\
  !*** ./src/components/middle/message/ActionMessage.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types */ "./src/types/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/helpers/replies */ "./src/global/helpers/replies.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_keys_messageKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/keys/messageKey */ "./src/util/keys/messageKey.ts");
/* harmony import */ var _util_visibility_isElementInViewport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/visibility/isElementInViewport */ "./src/util/visibility/isElementInViewport.ts");
/* harmony import */ var _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/windowEnvironment */ "./src/util/windowEnvironment.ts");
/* harmony import */ var _helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/preventMessageInputBlur */ "./src/components/middle/helpers/preventMessageInputBlur.ts");
/* harmony import */ var _hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useAppLayout */ "./src/hooks/useAppLayout.ts");
/* harmony import */ var _hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../hooks/useContextMenuHandlers */ "./src/hooks/useContextMenuHandlers.ts");
/* harmony import */ var _hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../hooks/useEnsureMessage */ "./src/hooks/useEnsureMessage.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../hooks/useIntersectionObserver */ "./src/hooks/useIntersectionObserver.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../hooks/useResizeMessageObserver */ "./src/hooks/useResizeMessageObserver.ts");
/* harmony import */ var _hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../hooks/useShowTransition */ "./src/hooks/useShowTransition.ts");
/* harmony import */ var _hooks_useFluidBackgroundFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useFluidBackgroundFilter */ "./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx");
/* harmony import */ var _hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hooks/useFocusMessage */ "./src/components/middle/message/hooks/useFocusMessage.ts");
/* harmony import */ var _ActionMessageText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ActionMessageText */ "./src/components/middle/message/ActionMessageText.tsx");
/* harmony import */ var _actions_ChannelPhoto__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions/ChannelPhoto */ "./src/components/middle/message/actions/ChannelPhoto.tsx");
/* harmony import */ var _actions_Gift__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actions/Gift */ "./src/components/middle/message/actions/Gift.tsx");
/* harmony import */ var _actions_GiveawayPrize__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actions/GiveawayPrize */ "./src/components/middle/message/actions/GiveawayPrize.tsx");
/* harmony import */ var _actions_StarGift__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actions/StarGift */ "./src/components/middle/message/actions/StarGift.tsx");
/* harmony import */ var _actions_StarGiftUnique__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./actions/StarGiftUnique */ "./src/components/middle/message/actions/StarGiftUnique.tsx");
/* harmony import */ var _actions_SuggestedPhoto__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./actions/SuggestedPhoto */ "./src/components/middle/message/actions/SuggestedPhoto.tsx");
/* harmony import */ var _ContextMenuContainer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ContextMenuContainer */ "./src/components/middle/message/ContextMenuContainer.tsx");
/* harmony import */ var _reactions_Reactions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reactions/Reactions */ "./src/components/middle/message/reactions/Reactions.tsx");
/* harmony import */ var _SimilarChannels__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SimilarChannels */ "./src/components/middle/message/SimilarChannels.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");


































const SINGLE_LINE_ACTIONS = new Set(['pinMessage', 'chatEditPhoto', 'chatDeletePhoto', 'unsupported']);
const HIDDEN_TEXT_ACTIONS = new Set(['giftCode', 'prizeStars', 'suggestProfilePhoto']);
const ActionMessage = ({
  message,
  threadId,
  sender,
  currentUserId,
  appearanceOrder,
  isJustAdded,
  isLastInList,
  memoFirstUnreadIdRef,
  getIsMessageListReady,
  isInsideTopic,
  isFocused,
  focusDirection,
  noFocusHighlight,
  replyMessage,
  patternColor,
  isCurrentUserPremium,
  isInSelectMode,
  hasUnreadReaction,
  isResizingContainer,
  scrollTargetPosition,
  onIntersectPinnedMessage,
  observeIntersectionForBottom,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  const {
    requestConfetti,
    openMediaViewer,
    getReceipt,
    checkGiftCode,
    openPrizeStarsTransactionFromGiveaway,
    openPremiumModal,
    openStarsTransactionFromGift,
    openGiftInfoModalFromMessage,
    toggleChannelRecommendations,
    animateUnreadReaction,
    markMentionsRead
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    id,
    chatId
  } = message;
  const action = message.content.action;
  const isLocal = (0,_util_keys_messageKey__WEBPACK_IMPORTED_MODULE_9__.isLocalMessageId)(id);
  const isTextHidden = HIDDEN_TEXT_ACTIONS.has(action.type);
  const isSingleLine = SINGLE_LINE_ACTIONS.has(action.type);
  const isFluidMultiline = _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_11__.IS_FLUID_BACKGROUND_SUPPORTED && !isSingleLine;
  const messageReplyInfo = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__.getMessageReplyInfo)(message);
  const {
    replyToMsgId,
    replyToPeerId
  } = messageReplyInfo || {};
  const withServiceReactions = Boolean(message.areReactionsPossible && message?.reactions?.results?.length);
  const shouldSkipRender = isInsideTopic && action.type === 'topicCreate';
  const {
    isTouchScreen
  } = (0,_hooks_useAppLayout__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_hooks_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_17__.useOnIntersect)(ref, !shouldSkipRender ? observeIntersectionForBottom : undefined);
  (0,_hooks_useResizeMessageObserver__WEBPACK_IMPORTED_MODULE_19__["default"])(ref, !shouldSkipRender && isLastInList && action.type !== 'channelJoined');
  (0,_hooks_useEnsureMessage__WEBPACK_IMPORTED_MODULE_15__["default"])(replyToPeerId || chatId, replyToMsgId, replyMessage, id);
  (0,_hooks_useFocusMessage__WEBPACK_IMPORTED_MODULE_22__["default"])({
    elementRef: ref,
    chatId,
    isFocused,
    focusDirection,
    noFocusHighlight,
    isResizingContainer,
    isJustAdded,
    scrollTargetPosition
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useUnmountCleanup)(() => {
    if (message.isPinned) {
      onIntersectPinnedMessage?.({
        viewportPinnedIdsToRemove: [message.id]
      });
    }
  });
  const {
    isContextMenuOpen,
    contextMenuAnchor,
    handleBeforeContextMenu,
    handleContextMenu,
    handleContextMenuClose,
    handleContextMenuHide
  } = (0,_hooks_useContextMenuHandlers__WEBPACK_IMPORTED_MODULE_14__["default"])(ref, isTouchScreen && isInSelectMode, !_util_windowEnvironment__WEBPACK_IMPORTED_MODULE_11__.IS_ELECTRON, _util_windowEnvironment__WEBPACK_IMPORTED_MODULE_11__.IS_ANDROID, getIsMessageListReady);
  const isContextMenuShown = contextMenuAnchor !== undefined;
  const handleMouseDown = e => {
    (0,_helpers_preventMessageInputBlur__WEBPACK_IMPORTED_MODULE_12__.preventMessageInputBlur)(e);
    handleBeforeContextMenu(e);
  };
  const noAppearanceAnimation = appearanceOrder <= 0;
  const [isShown, markShown] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_16__["default"])(noAppearanceAnimation);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (noAppearanceAnimation) {
      return;
    }
    setTimeout(markShown, appearanceOrder * _config__WEBPACK_IMPORTED_MODULE_4__.MESSAGE_APPEARANCE_DELAY);
  }, [appearanceOrder, markShown, noAppearanceAnimation]);
  const {
    ref: refWithTransition
  } = (0,_hooks_useShowTransition__WEBPACK_IMPORTED_MODULE_20__["default"])({
    isOpen: isShown,
    noOpenTransition: noAppearanceAnimation,
    noCloseTransition: true,
    className: false,
    ref
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const bottomMarker = ref.current;
    if (!bottomMarker || !(0,_util_visibility_isElementInViewport__WEBPACK_IMPORTED_MODULE_10__.isElementInViewport)(bottomMarker)) return;
    if (hasUnreadReaction) {
      animateUnreadReaction({
        messageIds: [id]
      });
    }
    if (message.hasUnreadMention) {
      markMentionsRead({
        chatId,
        messageIds: [id]
      });
    }
  }, [hasUnreadReaction, chatId, id, animateUnreadReaction, message.hasUnreadMention]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (action.type !== 'giftPremium') return;
    if (memoFirstUnreadIdRef?.current && id >= memoFirstUnreadIdRef.current || isLocal) {
      requestConfetti({});
    }
  }, [action.type, id, isLocal, memoFirstUnreadIdRef]);
  const fluidBackgroundStyle = (0,_hooks_useFluidBackgroundFilter__WEBPACK_IMPORTED_MODULE_21__["default"])(isFluidMultiline ? patternColor : undefined);
  const handleClick = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_18__["default"])(() => {
    switch (action.type) {
      case 'paymentSent':
      case 'paymentRefunded':
        {
          getReceipt({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'chatEditPhoto':
        {
          openMediaViewer({
            chatId: message.chatId,
            messageId: message.id,
            threadId,
            origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.ChannelAvatar
          });
          break;
        }
      case 'giftCode':
        {
          checkGiftCode({
            slug: action.slug,
            message: {
              chatId: message.chatId,
              messageId: message.id
            }
          });
          break;
        }
      case 'prizeStars':
        {
          openPrizeStarsTransactionFromGiveaway({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'giftPremium':
        {
          openPremiumModal({
            isGift: true,
            fromUserId: sender?.id,
            toUserId: sender && sender.id === currentUserId ? chatId : currentUserId,
            monthsAmount: action.months
          });
          break;
        }
      case 'giftStars':
        {
          openStarsTransactionFromGift({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'starGift':
      case 'starGiftUnique':
        {
          openGiftInfoModalFromMessage({
            chatId: message.chatId,
            messageId: message.id
          });
          break;
        }
      case 'channelJoined':
        {
          toggleChannelRecommendations({
            chatId
          });
          break;
        }
    }
  });
  const fullContent = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (action.type) {
      case 'chatEditPhoto':
        {
          if (!action.photo) return undefined;
          return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_ChannelPhoto__WEBPACK_IMPORTED_MODULE_24__["default"], {
            action: action,
            observeIntersection: observeIntersectionForLoading,
            onClick: handleClick
          });
        }
      case 'suggestProfilePhoto':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_SuggestedPhoto__WEBPACK_IMPORTED_MODULE_29__["default"], {
          message: message,
          action: action,
          observeIntersection: observeIntersectionForLoading
        });
      case 'prizeStars':
      case 'giftCode':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_GiveawayPrize__WEBPACK_IMPORTED_MODULE_26__["default"], {
          action: action,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'giftPremium':
      case 'giftStars':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_Gift__WEBPACK_IMPORTED_MODULE_25__["default"], {
          action: action,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'starGift':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_StarGift__WEBPACK_IMPORTED_MODULE_27__["default"], {
          action: action,
          message: message,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'starGiftUnique':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_actions_StarGiftUnique__WEBPACK_IMPORTED_MODULE_28__["default"], {
          action: action,
          message: message,
          observeIntersectionForLoading: observeIntersectionForLoading,
          observeIntersectionForPlaying: observeIntersectionForPlaying,
          onClick: handleClick
        });
      case 'channelJoined':
        return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_SimilarChannels__WEBPACK_IMPORTED_MODULE_32__["default"], {
          chatId: message.chatId
        });
      default:
        return undefined;
    }
  }, [action, observeIntersectionForLoading, message, observeIntersectionForPlaying]);
  if (isInsideTopic && action.type === 'topicCreate' || action.type === 'phoneCall') {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: refWithTransition,
    id: (0,_global_helpers__WEBPACK_IMPORTED_MODULE_5__.getMessageHtmlId)(id),
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_8__["default"])('ActionMessage', 'message-list-item', _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].root, isSingleLine && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].singleLine, isFluidMultiline && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].fluidMultiline, fullContent && _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].hasFullContent, isFocused && !noFocusHighlight && 'focused', isContextMenuShown && 'has-menu-open', isLastInList && 'last-in-list'),
    "data-message-id": message.id,
    "data-is-pinned": message.isPinned || undefined,
    "data-has-unread-mention": message.hasUnreadMention || undefined,
    "data-has-unread-reaction": hasUnreadReaction || undefined,
    onMouseDown: handleMouseDown,
    onContextMenu: handleContextMenu
  }, !isTextHidden && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, isFluidMultiline && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].inlineWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].fluidBackground,
    style: fluidBackgroundStyle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ActionMessageText__WEBPACK_IMPORTED_MODULE_23__["default"], {
    message: message,
    isInsideTopic: isInsideTopic
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].inlineWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].textContent,
    onClick: handleClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ActionMessageText__WEBPACK_IMPORTED_MODULE_23__["default"], {
    message: message,
    isInsideTopic: isInsideTopic
  })))), fullContent, contextMenuAnchor && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ContextMenuContainer__WEBPACK_IMPORTED_MODULE_30__["default"], {
    isOpen: isContextMenuOpen,
    anchor: contextMenuAnchor,
    message: message,
    messageListType: "thread",
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_33__["default"].contextContainer,
    onClose: handleContextMenuClose,
    onCloseAnimationEnd: handleContextMenuHide
  }), withServiceReactions && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_reactions_Reactions__WEBPACK_IMPORTED_MODULE_31__["default"], {
    isOutside: true,
    message: message,
    threadId: threadId,
    observeIntersection: observeIntersectionForPlaying,
    isCurrentUserPremium: isCurrentUserPremium
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  threadId
}) => {
  const {
    settings: {
      themes
    }
  } = global;
  const tabState = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTabState)(global);
  const chat = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectChat)(global, message.chatId);
  const sender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectSender)(global, message);
  const isInsideTopic = chat?.isForum && threadId !== _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID;
  const {
    replyToMsgId,
    replyToPeerId
  } = (0,_global_helpers_replies__WEBPACK_IMPORTED_MODULE_6__.getMessageReplyInfo)(message) || {};
  const replyMessage = replyToMsgId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectChatMessage)(global, replyToPeerId || message.chatId, replyToMsgId) : undefined;
  const isFocused = threadId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsMessageFocused)(global, message, threadId) : false;
  const {
    direction: focusDirection,
    noHighlight: noFocusHighlight,
    isResizingContainer,
    scrollTargetPosition
  } = isFocused && tabState.focusedMessage || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsCurrentUserPremium)(global);
  const hasUnreadReaction = chat?.unreadReactions?.includes(message.id);
  return {
    sender,
    currentUserId: global.currentUserId,
    isCurrentUserPremium,
    isFocused,
    focusDirection,
    noFocusHighlight,
    isInsideTopic,
    replyMessage,
    isInSelectMode: (0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectIsInSelectMode)(global),
    patternColor: themes[(0,_global_selectors__WEBPACK_IMPORTED_MODULE_7__.selectTheme)(global)]?.patternColor,
    hasUnreadReaction,
    isResizingContainer,
    scrollTargetPosition
  };
})(ActionMessage)));

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.tsx":
/*!***********************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/schedulers/useTimeout */ "./src/hooks/schedulers/useTimeout.ts");
/* harmony import */ var _hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useAverageColor */ "./src/hooks/useAverageColor.ts");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useHorizontalScroll */ "./src/hooks/useHorizontalScroll.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/useOldLang */ "./src/hooks/useOldLang.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _common_icons_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/icons/Icon */ "./src/components/common/icons/Icon.tsx");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/placeholder/Skeleton */ "./src/components/ui/placeholder/Skeleton.tsx");
/* harmony import */ var _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SimilarChannels.module.scss */ "./src/components/middle/message/SimilarChannels.module.scss");

















const DEFAULT_BADGE_COLOR = '#3C3C4399';
const SHOW_CHANNELS_NUMBER = 10;
const ANIMATION_DURATION = 150;
const MIN_SKELETON_DELAY = 300;
const MAX_SKELETON_DELAY = 2000;
const AUTO_EXPAND_TIME = 10; // Seconds from joining

const SimilarChannels = ({
  chatId,
  similarChannelIds,
  isExpanded,
  count,
  isCurrentUserPremium,
  channelJoinInfo
}) => {
  const {
    toggleChannelRecommendations,
    loadChannelRecommendations
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [isShowing, markShowing, markNotShowing] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])(false);
  const [isHiding, markHiding, markNotHiding] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])(false);

  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ignoreAutoScrollRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const similarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!similarChannelIds) {
      return undefined;
    }
    const global = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getGlobal)();
    return similarChannelIds.map(id => (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChat)(global, id)).filter(Boolean);
  }, [similarChannelIds]);
  // Show skeleton while loading similar channels
  const [shouldRenderSkeleton, setShouldRenderSkeleton] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const firstSimilarChannels = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => similarChannels?.slice(0, SHOW_CHANNELS_NUMBER), [similarChannels]);
  const areSimilarChannelsPresent = Boolean(firstSimilarChannels?.length);
  const isAnimating = isHiding || isShowing;
  const shouldRenderChannels = Boolean(!shouldRenderSkeleton && (isExpanded || isAnimating) && areSimilarChannelsPresent);
  (0,_hooks_useHorizontalScroll__WEBPACK_IMPORTED_MODULE_9__["default"])(ref, !shouldRenderChannels, true);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!similarChannelIds) {
      loadChannelRecommendations({
        chatId
      });
    }
  }, [chatId, similarChannelIds]);
  (0,_hooks_schedulers_useTimeout__WEBPACK_IMPORTED_MODULE_6__["default"])(() => setShouldRenderSkeleton(false), MAX_SKELETON_DELAY);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldRenderSkeleton && similarChannels && isExpanded) {
      const id = setTimeout(() => {
        setShouldRenderSkeleton(false);
      }, MIN_SKELETON_DELAY);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [similarChannels, isExpanded, shouldRenderSkeleton]);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isExpanded) {
      markShowing();
      markNotHiding();
      setShouldRenderSkeleton(!similarChannelIds);
      if (!ignoreAutoScrollRef.current) {
        setTimeout(() => {
          ref.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }, ANIMATION_DURATION);
      }
    } else {
      markNotShowing();
      markHiding();
    }
  }, [isExpanded, similarChannelIds]);
  const handleToggle = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    toggleChannelRecommendations({
      chatId
    });
  });
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!channelJoinInfo?.joinedDate || isExpanded) return;
    if ((0,_util_serverTime__WEBPACK_IMPORTED_MODULE_4__.getServerTime)() - channelJoinInfo.joinedDate <= AUTO_EXPAND_TIME) {
      handleToggle();
      ignoreAutoScrollRef.current = true;
    }
  }, [channelJoinInfo, isExpanded]);
  if (!shouldRenderChannels && !shouldRenderSkeleton) {
    return undefined;
  }
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].root)
  }, shouldRenderSkeleton && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_placeholder_Skeleton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].skeleton
  }), shouldRenderChannels && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(isShowing && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].isAppearing, isHiding && _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].isHiding)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].notch
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    width: "19",
    height: "7",
    viewBox: "0 0 19 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].notchPath,
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19 7C16.8992 7 13.59 3.88897 11.5003 1.67424C10.7648 0.894688 10.397 0.50491 10.0434 0.385149C9.70568 0.270811 9.4225 0.270474 9.08456 0.38401C8.73059 0.50293 8.36133 0.892443 7.62279 1.67147C5.52303 3.88637 2.18302 7 0 7L19 7Z",
    fill: "white"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].inner
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].header
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].title
  }, lang('SimilarChannels')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].close,
    color: "translucent",
    onClick: handleToggle
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "close"
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].channelList, 'no-scrollbar')
  }, firstSimilarChannels?.map((channel, i) => {
    return i === SHOW_CHANNELS_NUMBER - 1 ? /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(MoreChannels, {
      channel: channel,
      chatId: chatId,
      channelsCount: count - SHOW_CHANNELS_NUMBER + 1,
      isCurrentUserPremium: isCurrentUserPremium
    }) : /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SimilarChannel, {
      channel: channel
    });
  })))));
};
function SimilarChannel({
  channel
}) {
  const {
    openChat
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const color = (0,_hooks_useAverageColor__WEBPACK_IMPORTED_MODULE_7__["default"])(channel, DEFAULT_BADGE_COLOR);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].item,
    onClick: () => openChat({
      id: channel.id
    })
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    style: `background: ${color}`,
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "user-filled",
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].membersCount
  }, (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_5__.formatIntegerCompact)(channel?.membersCount || 0))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].channelTitle
  }, channel.title));
}
function MoreChannels({
  channel,
  chatId,
  channelsCount,
  isCurrentUserPremium
}) {
  const {
    openPremiumModal,
    openChatWithInfo
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const lang = (0,_hooks_useOldLang__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const handleClickMore = () => {
    if (isCurrentUserPremium) {
      openChatWithInfo({
        id: chatId,
        shouldReplaceHistory: true,
        profileTab: 'similarChannels',
        forceScrollProfileTab: true
      });
    } else {
      openPremiumModal();
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].item, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].lastItem),
    onClick: () => handleClickMore()
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].avatar,
    key: channel.id,
    size: "large",
    peer: channel
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].fakeAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_3__["default"])(_SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].fakeAvatar, _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].lastFakeAvatar)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].fakeAvatarInner
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].badge
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].membersCount
  }, `+${channelsCount}`), !isCurrentUserPremium && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_icons_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: "lock-badge",
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].icon
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
    className: _SimilarChannels_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].channelTitle
  }, lang('MoreSimilar')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  chatId
}) => {
  const {
    similarChannelIds,
    isExpanded,
    count
  } = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSimilarChannelIds)(global, chatId) || {};
  const isCurrentUserPremium = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsCurrentUserPremium)(global);
  const chatFullInfo = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectChatFullInfo)(global, chatId);
  return {
    similarChannelIds,
    isExpanded,
    count,
    isCurrentUserPremium,
    channelJoinInfo: chatFullInfo?.joinInfo
  };
})(SimilarChannels)));

/***/ }),

/***/ "./src/components/middle/message/actions/ChannelPhoto.tsx":
/*!****************************************************************!*\
  !*** ./src/components/middle/message/actions/ChannelPhoto.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/helpers/mediaDimensions */ "./src/components/common/helpers/mediaDimensions.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");




const AVATAR_SIZE = 15 * _common_helpers_mediaDimensions__WEBPACK_IMPORTED_MODULE_1__.REM;
const ChannelPhotoAction = ({
  action,
  onClick,
  observeIntersection
}) => {
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].channelPhoto,
    photo: action.photo,
    loopIndefinitely: true,
    withVideo: true,
    observeIntersection: observeIntersection,
    onClick: onClick,
    size: AVATAR_SIZE
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)(ChannelPhotoAction));

/***/ }),

/***/ "./src/components/middle/message/actions/Gift.tsx":
/*!********************************************************!*\
  !*** ./src/components/middle/message/actions/Gift.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");








const STICKER_SIZE = 150;
const GiftAction = ({
  action,
  sticker,
  canPlayAnimatedEmojis,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  // eslint-disable-next-line no-null/no-null
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const message = action.type === 'giftPremium' ? action.message : undefined;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: stickerRef,
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].stickerWrapper,
    style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`
  }, sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_StickerView__WEBPACK_IMPORTED_MODULE_6__["default"], {
    containerRef: stickerRef,
    sticker: sticker,
    size: STICKER_SIZE,
    observeIntersectionForLoading: observeIntersectionForLoading,
    observeIntersectionForPlaying: observeIntersectionForPlaying,
    noLoad: !canPlayAnimatedEmojis
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title
  }, action.type === 'giftPremium' ? lang('ActionGiftPremiumTitle', {
    months: action.months
  }, {
    pluralValue: action.months
  }) : lang('ActionGiftStarsTitle', {
    amount: action.stars
  }, {
    pluralValue: action.stars
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, message && (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_3__.renderTextWithEntities)(message), !message && lang(action.type === 'giftPremium' ? 'ActionGiftPremiumText' : 'ActionGiftStarsText'))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].actionButton
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    preset: "button"
  }), lang('ActionViewButton')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  action
}) => {
  const sticker = action.type === 'giftPremium' ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForDuration)(global, action.months) : (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectGiftStickerForStars)(global, action.stars);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCanPlayAnimatedEmojis)(global);
  return {
    sticker,
    canPlayAnimatedEmojis
  };
})(GiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/GiveawayPrize.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/middle/message/actions/GiveawayPrize.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");









const STICKER_SIZE = 150;
const GiveawayPrizeAction = ({
  action,
  sticker,
  canPlayAnimatedEmojis,
  channel,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  // eslint-disable-next-line no-null/no-null
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const channelLink = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const channelTitle = channel && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, channel);
    const channelFallbackText = lang('ActionFallbackChannel');
    return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_4__.renderPeerLink)(channel?.id, channelTitle || channelFallbackText);
  }, [channel, lang]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: stickerRef,
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].stickerWrapper,
    style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`
  }, sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_StickerView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    containerRef: stickerRef,
    sticker: sticker,
    size: STICKER_SIZE,
    observeIntersectionForLoading: observeIntersectionForLoading,
    observeIntersectionForPlaying: observeIntersectionForPlaying,
    noLoad: !canPlayAnimatedEmojis
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title
  }, lang('ActionGiveawayResultTitle')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, action.type === 'giftCode' && lang(action.isViaGiveaway ? 'ActionGiveawayResultPremiumText' : 'ActionGiftCodePremiumText', {
    months: action.months,
    channel: channelLink
  }, {
    withNodes: true,
    withMarkdown: true,
    pluralValue: action.months,
    renderTextFilters: ['br']
  }), action.type === 'prizeStars' && lang('ActionGiveawayResultStarsText', {
    amount: action.stars,
    channel: channelLink
  }, {
    withNodes: true,
    withMarkdown: true,
    pluralValue: action.stars,
    renderTextFilters: ['br']
  }))), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].actionButton
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    preset: "button"
  }), lang(action.type === 'giftCode' ? 'ActionOpenGiftButton' : 'ActionViewButton')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  action
}) => {
  const sticker = action.type === 'giftCode' ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectGiftStickerForDuration)(global, action.months) : (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectGiftStickerForStars)(global, action.stars);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanPlayAnimatedEmojis)(global);
  const channel = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectChat)(global, action.boostPeerId);
  return {
    sticker,
    canPlayAnimatedEmojis,
    channel
  };
})(GiveawayPrizeAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/StarGift.tsx":
/*!************************************************************!*\
  !*** ./src/components/middle/message/actions/StarGift.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/helpers/peers */ "./src/global/helpers/peers.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_localization_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/localization/format */ "./src/util/localization/format.tsx");
/* harmony import */ var _util_serverTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/serverTime */ "./src/util/serverTime.ts");
/* harmony import */ var _util_textFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/textFormat */ "./src/util/textFormat.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/helpers/renderTextWithEntities */ "./src/components/common/helpers/renderTextWithEntities.tsx");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hooks/stickers/useDynamicColorListener */ "./src/hooks/stickers/useDynamicColorListener.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");


















const STICKER_SIZE = 120;
const StarGiftAction = ({
  action,
  message,
  canPlayAnimatedEmojis,
  sender,
  recipient,
  starGiftMaxConvertPeriod,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // eslint-disable-next-line no-null/no-null
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    isOutgoing
  } = message;
  const sticker = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_9__.getStickerFromGift)(action.gift);
  const peer = isOutgoing ? recipient : sender;
  const isChannel = peer && (0,_global_helpers_peers__WEBPACK_IMPORTED_MODULE_3__.isApiPeerChat)(peer) && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.isChatChannel)(peer);
  const backgroundColor = (0,_hooks_stickers_useDynamicColorListener__WEBPACK_IMPORTED_MODULE_12__["default"])(ref, 'background-color', !action.gift.availabilityTotal);
  const fallbackPeerTitle = lang('ActionFallbackSomeone');
  const peerTitle = peer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, peer);
  const isSelf = sender?.id === recipient?.id;
  const giftDescription = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const peerLink = (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle);
    const starsAmount = action.starsToConvert !== undefined ? (0,_util_localization_format__WEBPACK_IMPORTED_MODULE_6__.formatStarsAsText)(lang, action.starsToConvert) : undefined;
    if (action.isUpgraded) {
      return lang('ActionStarGiftUpgraded');
    }
    if (action.alreadyPaidUpgradeStars) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftUpgradeText', !isOutgoing || isSelf, {
        peer: peerLink
      });
    }
    if (action.isConverted) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftConvertedText', !isOutgoing || isSelf, {
        peer: peerLink,
        amount: starsAmount
      });
    }
    if (starGiftMaxConvertPeriod && (0,_util_serverTime__WEBPACK_IMPORTED_MODULE_7__.getServerTime)() < message.date + starGiftMaxConvertPeriod) {
      return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftConvertText', !isOutgoing || isSelf, {
        peer: peerLink,
        amount: starsAmount
      });
    }
    if (isChannel) {
      return lang('ActionStarGiftChannelText', {
        amount: starsAmount
      }, {
        withNodes: true
      });
    }
    return (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.translateWithYou)(lang, 'ActionStarGiftNoConvertText', !isOutgoing || isSelf, {
      peer: peerLink
    });
  }, [action, fallbackPeerTitle, isChannel, isOutgoing, lang, message.date, peer?.id, peerTitle, starGiftMaxConvertPeriod, isSelf]);
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: ref,
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(_ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].contentBox, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].starGift),
    tabIndex: 0,
    role: "button",
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: stickerRef,
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].stickerWrapper,
    style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`
  }, sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_StickerView__WEBPACK_IMPORTED_MODULE_16__["default"], {
    containerRef: stickerRef,
    sticker: sticker,
    size: STICKER_SIZE,
    observeIntersectionForLoading: observeIntersectionForLoading,
    observeIntersectionForPlaying: observeIntersectionForPlaying,
    noLoad: !canPlayAnimatedEmojis
  })), action.gift.availabilityTotal && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: backgroundColor || 'blue',
    text: lang('ActionStarGiftLimitedRibbon', {
      total: (0,_util_textFormat__WEBPACK_IMPORTED_MODULE_8__.formatIntegerCompact)(action.gift.availabilityTotal)
    })
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].title
  }, isSelf ? lang('ActionStarGiftSelf') : lang(isOutgoing ? 'ActionStarGiftTo' : 'ActionStarGiftFrom', {
    peer: (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_11__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle)
  }, {
    withNodes: true
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].subtitle
  }, action.message && (0,_common_helpers_renderTextWithEntities__WEBPACK_IMPORTED_MODULE_10__.renderTextWithEntities)(action.message), !action.message && giftDescription)), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_17__["default"].actionButton
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_15__["default"], {
    preset: "button"
  }), action.alreadyPaidUpgradeStars && !action.isUpgraded && !isOutgoing ? lang('ActionStarGiftUnpack') : lang('ActionViewButton')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  action
}) => {
  const currentUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)(global, global.currentUserId);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCanPlayAnimatedEmojis)(global);
  const messageSender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectSender)(global, message);
  const giftSender = action.fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, action.fromId) : undefined;
  const messageRecipient = message.isOutgoing ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, message.chatId) : currentUser;
  const giftRecipient = action.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_4__.selectPeer)(global, action.peerId) : undefined;
  return {
    canPlayAnimatedEmojis,
    sender: giftSender || messageSender,
    recipient: giftRecipient || messageRecipient,
    starGiftMaxConvertPeriod: global.appConfig?.starGiftMaxConvertPeriod
  };
})(StarGiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/StarGiftUnique.tsx":
/*!******************************************************************!*\
  !*** ./src/components/middle/message/actions/StarGiftUnique.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_buildClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/buildClassName */ "./src/util/buildClassName.ts");
/* harmony import */ var _util_buildStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/buildStyle */ "./src/util/buildStyle.ts");
/* harmony import */ var _common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/gifts */ "./src/components/common/helpers/gifts.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/gift/GiftRibbon */ "./src/components/common/gift/GiftRibbon.tsx");
/* harmony import */ var _common_MiniTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/MiniTable */ "./src/components/common/MiniTable.tsx");
/* harmony import */ var _common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/profile/RadialPatternBackground */ "./src/components/common/profile/RadialPatternBackground.tsx");
/* harmony import */ var _common_Sparkles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/Sparkles */ "./src/components/common/Sparkles.tsx");
/* harmony import */ var _common_StickerView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/StickerView */ "./src/components/common/StickerView.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");















const STICKER_SIZE = 120;
const StarGiftAction = ({
  action,
  message,
  canPlayAnimatedEmojis,
  sender,
  recipient,
  onClick,
  observeIntersectionForLoading,
  observeIntersectionForPlaying
}) => {
  // eslint-disable-next-line no-null/no-null
  const stickerRef = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    isOutgoing
  } = message;
  const sticker = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__.getStickerFromGift)(action.gift);
  const attributes = (0,_common_helpers_gifts__WEBPACK_IMPORTED_MODULE_6__.getGiftAttributes)(action.gift);
  const model = attributes.model;
  const pattern = attributes.pattern;
  const backdrop = attributes.backdrop;
  const backgroundColors = [backdrop.centerColor, backdrop.edgeColor];
  const adaptedPatternColor = `${backdrop.patternColor.slice(0, 7)}55`;
  const tableData = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [[lang('ActionStarGiftUniqueModel'), model.name], [lang('ActionStarGiftUniqueBackdrop'), backdrop.name], [lang('ActionStarGiftUniqueSymbol'), pattern.name]], [lang, model, pattern, backdrop]);
  const shouldShowFrom = !isOutgoing || action.isUpgrade;
  const peer = shouldShowFrom && !action.isUpgrade ? sender : recipient;
  const fallbackPeerTitle = lang('ActionFallbackSomeone');
  const peerTitle = peer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getPeerTitle)(lang, peer);
  const isSelf = sender?.id === recipient?.id;
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: (0,_util_buildClassName__WEBPACK_IMPORTED_MODULE_4__["default"])(_ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].contentBox, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].starGift, _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueGift),
    tabIndex: 0,
    role: "button",
    onClick: onClick
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueBackgroundWrapper
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_profile_RadialPatternBackground__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueBackground,
    backgroundColors: backgroundColors,
    patternColor: backdrop.patternColor,
    patternIcon: pattern.sticker,
    clearBottomSector: true
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    ref: stickerRef,
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].stickerWrapper,
    style: `width: ${STICKER_SIZE}px; height: ${STICKER_SIZE}px`
  }, sticker && /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_StickerView__WEBPACK_IMPORTED_MODULE_13__["default"], {
    containerRef: stickerRef,
    sticker: sticker,
    size: STICKER_SIZE,
    observeIntersectionForLoading: observeIntersectionForLoading,
    observeIntersectionForPlaying: observeIntersectionForPlaying,
    noLoad: !canPlayAnimatedEmojis
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_gift_GiftRibbon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: adaptedPatternColor,
    text: lang('ActionStarGiftUniqueRibbon')
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].info
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].title
  }, isSelf ? lang('ActionStarGiftSelf') : lang(shouldShowFrom ? 'ActionStarGiftFrom' : 'ActionStarGiftTo', {
    peer: (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__.renderPeerLink)(peer?.id, peerTitle || fallbackPeerTitle)
  }, {
    withNodes: true
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].subtitle,
    style: `color: ${backdrop.textColor}`
  }, lang('GiftUnique', {
    title: action.gift.title,
    number: action.gift.number
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_MiniTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: tableData,
    style: `color: ${backdrop.textColor}`,
    valueClassName: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].uniqueValue
  })), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actionButton,
    style: (0,_util_buildStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(adaptedPatternColor && `background-color: ${adaptedPatternColor}`)
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Sparkles__WEBPACK_IMPORTED_MODULE_12__["default"], {
    preset: "button"
  }), lang('ActionViewButton')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message,
  action
}) => {
  const currentUser = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUser)(global, global.currentUserId);
  const canPlayAnimatedEmojis = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCanPlayAnimatedEmojis)(global);
  const messageSender = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSender)(global, message);
  const giftSender = action.fromId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, action.fromId) : undefined;
  const messageRecipient = message.isOutgoing ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, message.chatId) : currentUser;
  const giftRecipient = action.peerId ? (0,_global_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPeer)(global, action.peerId) : undefined;
  return {
    canPlayAnimatedEmojis,
    sender: giftSender || messageSender,
    recipient: giftRecipient || messageRecipient
  };
})(StarGiftAction)));

/***/ }),

/***/ "./src/components/middle/message/actions/SuggestedPhoto.tsx":
/*!******************************************************************!*\
  !*** ./src/components/middle/message/actions/SuggestedPhoto.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global */ "./src/global/index.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../types */ "./src/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/selectors */ "./src/global/selectors/index.ts");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/files */ "./src/util/files.ts");
/* harmony import */ var _helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/messageActions */ "./src/components/middle/message/helpers/messageActions.tsx");
/* harmony import */ var _hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useFlag */ "./src/hooks/useFlag.ts");
/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLang */ "./src/hooks/useLang.ts");
/* harmony import */ var _hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useLastCallback */ "./src/hooks/useLastCallback.ts");
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/Avatar */ "./src/components/common/Avatar.tsx");
/* harmony import */ var _ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/ConfirmDialog */ "./src/components/ui/ConfirmDialog.tsx");
/* harmony import */ var _ui_CropModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/CropModal */ "./src/components/ui/CropModal.tsx");
/* harmony import */ var _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ActionMessage.module.scss */ "./src/components/middle/message/ActionMessage.module.scss");
















const SuggestedPhotoAction = ({
  message,
  action,
  peer,
  observeIntersection
}) => {
  const {
    openMediaViewer,
    uploadProfilePhoto,
    showNotification
  } = (0,_global__WEBPACK_IMPORTED_MODULE_1__.getActions)();
  const {
    isOutgoing
  } = message;
  const photo = action.photo;
  const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const [cropModalBlob, setCropModalBlob] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isVideoModalOpen, openVideoModal, closeVideoModal] = (0,_hooks_useFlag__WEBPACK_IMPORTED_MODULE_8__["default"])(false);
  const suggestedPhotoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPhotoMediaHash)(photo, 'full'));
  const suggestedVideoUrl = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getVideoProfilePhotoMediaHash)(photo));
  const isVideo = photo.isVideo;
  const text = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const peerName = peer && (0,_global_helpers__WEBPACK_IMPORTED_MODULE_4__.getPeerTitle)(lang, peer) || lang('ActionFallbackUser');
    const peerLink = (0,_helpers_messageActions__WEBPACK_IMPORTED_MODULE_7__.renderPeerLink)(peer?.id, peerName);
    if (isOutgoing) {
      return lang('ActionSuggestedPhotoYou', {
        user: peerLink
      }, {
        withNodes: true
      });
    }
    return lang('ActionSuggestedPhoto', {
      user: peerLink
    }, {
      withNodes: true
    });
  }, [lang, isOutgoing, peer]);
  const showAvatarNotification = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    showNotification({
      title: lang('ActionSuggestedPhotoUpdatedTitle'),
      message: lang('ActionSuggestedPhotoUpdatedDescription'),
      action: {
        action: 'requestNextSettingsScreen',
        payload: {
          screen: _types__WEBPACK_IMPORTED_MODULE_3__.SettingsScreens.Main
        }
      },
      actionText: lang('Open')
    });
  });
  const handleSetSuggestedAvatar = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(file => {
    setCropModalBlob(undefined);
    uploadProfilePhoto({
      file
    });
    showAvatarNotification();
  });
  const handleCloseCropModal = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    setCropModalBlob(undefined);
  });
  const handleSetVideo = (0,_hooks_useLastCallback__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
    if (!suggestedVideoUrl) return;
    closeVideoModal();
    showAvatarNotification();

    // TODO Once we support uploading video avatars, add crop/trim modal here
    const blob = await (0,_util_files__WEBPACK_IMPORTED_MODULE_6__.fetchBlob)(suggestedVideoUrl);
    uploadProfilePhoto({
      file: new File([blob], 'avatar.mp4'),
      isVideo: true,
      videoTs: photo.videoSizes?.find(l => l.videoStartTs !== undefined)?.videoStartTs
    });
  });
  const handleViewSuggestedAvatar = async () => {
    if (!isOutgoing && suggestedPhotoUrl) {
      if (isVideo) {
        openVideoModal();
      } else {
        setCropModalBlob(await (0,_util_files__WEBPACK_IMPORTED_MODULE_6__.fetchBlob)(suggestedPhotoUrl));
      }
    } else {
      openMediaViewer({
        chatId: message.chatId,
        messageId: message.id,
        threadId: _api_types__WEBPACK_IMPORTED_MODULE_2__.MAIN_THREAD_ID,
        origin: _types__WEBPACK_IMPORTED_MODULE_3__.MediaViewerOrigin.SuggestedAvatar
      });
    }
  };
  return /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].contentBox,
    tabIndex: 0,
    role: "button",
    onClick: handleViewSuggestedAvatar
  }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_common_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].suggestedAvatar,
    photo: action.photo,
    loopIndefinitely: true,
    withVideo: true,
    observeIntersection: observeIntersection,
    size: "jumbo"
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].suggestedText
  }, text), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
    className: _ActionMessage_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].actionButton
  }, lang('ActionSuggestedPhotoButton')), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_CropModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    file: cropModalBlob,
    onClose: handleCloseCropModal,
    onChange: handleSetSuggestedAvatar
  }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ui_ConfirmDialog__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isOpen: isVideoModalOpen,
    title: lang('ActionSuggestedVideoTitle'),
    confirmHandler: handleSetVideo,
    onClose: closeVideoModal,
    text: lang('ActionSuggestedVideoText')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.memo)((0,_global__WEBPACK_IMPORTED_MODULE_1__.withGlobal)((global, {
  message
}) => {
  const peer = (0,_global_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPeer)(global, message.chatId);
  return {
    peer
  };
})(SuggestedPhotoAction)));

/***/ }),

/***/ "./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/middle/message/hooks/useFluidBackgroundFilter.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFluidBackgroundFilter)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config */ "./src/config.ts");
/* harmony import */ var _util_svgController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/svgController */ "./src/util/svgController.ts");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const SVG_MAP = new Map();
class SvgFluidBackgroundFilter {
  constructor(color) {
    this.color = color;
    _defineProperty(this, "filterId", void 0);
    _defineProperty(this, "referenceCount", 0);
    this.filterId = `fluid-background-filter-${color.slice(1)}`;
    (0,_util_svgController__WEBPACK_IMPORTED_MODULE_2__.addSvgDefinition)( /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("filter", {
      "color-interpolation-filters": "sRGB",
      xmlns: _config__WEBPACK_IMPORTED_MODULE_1__.SVG_NAMESPACE
    }, /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("feGaussianBlur", {
      in: "SourceAlpha",
      stdDeviation: "4",
      result: "blur"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("feColorMatrix", {
      in: "blur",
      mode: "matrix",
      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15",
      result: "goo"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("feComposite", {
      in: "SourceAlpha",
      in2: "goo",
      operator: "over",
      result: "outline"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("feFlood", {
      "flood-color": color,
      result: "color"
    }), /*#__PURE__*/_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("feComposite", {
      in: "color",
      in2: "outline",
      operator: "in"
    })), this.filterId);
  }
  getFilterId() {
    this.referenceCount += 1;
    return this.filterId;
  }
  removeReference() {
    this.referenceCount -= 1;
    if (this.referenceCount === 0) {
      (0,_util_svgController__WEBPACK_IMPORTED_MODULE_2__.removeSvgDefinition)(this.filterId);
    }
  }
  isUsed() {
    return this.referenceCount > 0;
  }
}
function useFluidBackgroundFilter(color, asValue) {
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!color) return undefined;
    return () => {
      const colorFilter = SVG_MAP.get(color);
      if (colorFilter) {
        colorFilter.removeReference();
        if (!colorFilter.isUsed()) {
          SVG_MAP.delete(colorFilter.color);
        }
      }
    };
  }, [color]);
  if (!color) return undefined;
  if (SVG_MAP.has(color)) {
    const svg = SVG_MAP.get(color);
    return prepareStyle(svg.getFilterId(), asValue);
  }
  const svg = new SvgFluidBackgroundFilter(color);
  SVG_MAP.set(color, svg);
  return prepareStyle(svg.getFilterId(), asValue);
}
function prepareStyle(filterId, asValue) {
  if (asValue) {
    return `url(#${filterId})`;
  }
  return `filter: url(#${filterId});`;
}

/***/ }),

/***/ "./src/hooks/useAverageColor.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAverageColor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/teact/teact */ "./src/lib/teact/teact.ts");
/* harmony import */ var _api_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/types */ "./src/api/types/index.ts");
/* harmony import */ var _global_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/helpers */ "./src/global/helpers/index.ts");
/* harmony import */ var _util_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/colors */ "./src/util/colors.ts");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMedia */ "./src/hooks/useMedia.ts");





function useAverageColor(peer, fallbackColor = '#00000000') {
  const [color, setColor] = (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useState)(fallbackColor);
  const imgBlobUrl = (0,_useMedia__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_global_helpers__WEBPACK_IMPORTED_MODULE_2__.getChatAvatarHash)(peer), false, _api_types__WEBPACK_IMPORTED_MODULE_1__.ApiMediaFormat.BlobUrl);
  (0,_lib_teact_teact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (!imgBlobUrl) {
        return;
      }
      const averageColor = await (0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.getAverageColor)(imgBlobUrl);
      setColor(`#${(0,_util_colors__WEBPACK_IMPORTED_MODULE_3__.rgb2hex)(averageColor)}`);
    })();
  }, [imgBlobUrl]);
  return color;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAverageColor);

/***/ }),

/***/ "./src/components/common/BadgeButton.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/common/BadgeButton.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"hJUqHi4B","clickable":"hjDEmFaT"});

/***/ }),

/***/ "./src/components/common/MiniTable.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/common/MiniTable.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"cKr8J5k_","key":"c9RLLvfs","value":"QEuGpzIc"});

/***/ }),

/***/ "./src/components/common/gift/GiftRibbon.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/common/gift/GiftRibbon.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"AmQSvxpZ","text":"pQW7dcwr"});

/***/ }),

/***/ "./src/components/middle/message/SimilarChannels.module.scss":
/*!*******************************************************************!*\
  !*** ./src/components/middle/message/SimilarChannels.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"V3RHiOJR","notch":"tfG_BSDt","notch-path":"HVbeGv4t","notchPath":"HVbeGv4t","header":"s7QOi22Q","title":"JstcOhAN","close":"meewH7t_","icon":"d8axZxyN","skeleton":"xKVZv7KE","inner":"njAC8dR9","is-appearing":"eb8rX09E","isAppearing":"eb8rX09E","channels-appear":"AL2cLQ4i","channelsAppear":"AL2cLQ4i","is-hiding":"XR6_qLCc","isHiding":"XR6_qLCc","channels-disappear":"TwwnoiuD","channelsDisappear":"TwwnoiuD","channel-list":"h4gWlNen","channelList":"h4gWlNen","item":"glDpC2av","last-item":"MBChXyXk","lastItem":"MBChXyXk","avatar":"gqCs9fSo","badge":"gnYhwnvf","members-count":"HWgwnKui","membersCount":"HWgwnKui","channel-title":"BTNQ4KBH","channelTitle":"BTNQ4KBH","fake-avatar":"Xl9MVMTn","fakeAvatar":"Xl9MVMTn","fake-avatar-inner":"Qizai7yv","fakeAvatarInner":"Qizai7yv","last-fake-avatar":"JxSmtOFi","lastFakeAvatar":"JxSmtOFi"});

/***/ })

}]);
//# sourceMappingURL=src_components_common_BadgeButton_tsx-src_components_common_gift_GiftMenuItems_tsx-src_compon-ad9759.9de351b54fdb1d9cae56.js.map