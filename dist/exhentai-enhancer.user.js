// ==UserScript==
// @name               Exhentai Enhancer
// @name:en            Exhentai Enhancer
// @name:zh-TW         Exhentai Enhancer
// @name:zh-CN         Exhentai Enhancer
// @namespace          https://github.com/sk2589822/Exhentai-Enhancer
// @version            1.8.0
// @author             sk2589822
// @description        improve UX of Gallery Page, Multi-Page Viewer and Front Page
// @description:en     improve UX of Gallery Page, Multi-Page Viewer and Front Page
// @description:zh-TW  改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗
// @description:zh-CN  改善 Gallery Page、Multi-Page Viewer 和 Front Page 的使用者體驗
// @license            MIT
// @icon               https://vitejs.dev/logo.svg
// @supportURL         https://github.com/sk2589822/Exhentai-Enhancer/issues
// @match              https://exhentai.org/*
// @match              https://e-hentai.org/*
// @require            https://cdn.jsdelivr.net/npm/vue@3.2.45/dist/vue.global.prod.js
// @require            https://unpkg.com/pkg-cdn/dist/vue-toastification/v2.0.0-rc.5.iife.js
// @grant              GM.getValue
// @grant              GM.registerMenuCommand
// @grant              GM.setValue
// @grant              unsafeWindow
// ==/UserScript==

(a=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.innerText=a,document.head.appendChild(t)})('@charset "UTF-8";.Vue-Toastification__container{z-index:9999;position:fixed;padding:4px;width:600px;box-sizing:border-box;display:flex;min-height:100%;color:#fff;flex-direction:column;pointer-events:none}@media only screen and (min-width : 600px){.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:1em}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:1em;flex-direction:column-reverse}.Vue-Toastification__container.top-left,.Vue-Toastification__container.bottom-left{left:1em}.Vue-Toastification__container.top-left .Vue-Toastification__toast,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast{margin-right:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl{margin-right:unset;margin-left:auto}}.Vue-Toastification__container.top-right,.Vue-Toastification__container.bottom-right{right:1em}.Vue-Toastification__container.top-right .Vue-Toastification__toast,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast{margin-left:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl{margin-left:unset;margin-right:auto}}.Vue-Toastification__container.top-center,.Vue-Toastification__container.bottom-center{left:50%;margin-left:-300px}.Vue-Toastification__container.top-center .Vue-Toastification__toast,.Vue-Toastification__container.bottom-center .Vue-Toastification__toast{margin-left:auto;margin-right:auto}}@media only screen and (max-width : 600px){.Vue-Toastification__container{width:100vw;padding:0;left:0;margin:0}.Vue-Toastification__container .Vue-Toastification__toast{width:100%}.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:0}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:0;flex-direction:column-reverse}}.Vue-Toastification__toast{display:inline-flex;position:relative;max-height:800px;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:22px 24px;border-radius:8px;box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d;justify-content:space-between;font-family:Lato,Helvetica,Roboto,Arial,sans-serif;max-width:600px;min-width:326px;pointer-events:auto;overflow:hidden;transform:translateZ(0);direction:ltr}.Vue-Toastification__toast--rtl{direction:rtl}.Vue-Toastification__toast--default{background-color:#1976d2;color:#fff}.Vue-Toastification__toast--info{background-color:#2196f3;color:#fff}.Vue-Toastification__toast--success{background-color:#4caf50;color:#fff}.Vue-Toastification__toast--error{background-color:#ff5252;color:#fff}.Vue-Toastification__toast--warning{background-color:#ffc107;color:#fff}@media only screen and (max-width : 600px){.Vue-Toastification__toast{border-radius:0;margin-bottom:.5rem}}.Vue-Toastification__toast-body{flex:1;line-height:24px;font-size:16px;word-break:break-word;white-space:pre-wrap}.Vue-Toastification__toast-component-body{flex:1}.Vue-Toastification__toast.disable-transition{animation:none!important}.Vue-Toastification__close-button{font-weight:700;font-size:24px;line-height:24px;background:transparent;outline:none;border:none;padding:0 0 0 10px;cursor:pointer;transition:.3s ease;align-items:center;color:#fff;opacity:.3;transition:visibility 0s,opacity .2s linear}.Vue-Toastification__close-button:hover,.Vue-Toastification__close-button:focus{opacity:1}.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover{opacity:0}.Vue-Toastification__toast--rtl .Vue-Toastification__close-button{padding-left:unset;padding-right:10px}@keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Vue-Toastification__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:10000;background-color:#ffffffb3;transform-origin:left;animation:scale-x-frames linear 1 forwards}.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar{right:0;left:unset;transform-origin:right}.Vue-Toastification__icon{margin:auto 18px auto 0;background:transparent;outline:none;border:none;padding:0;transition:.3s ease;align-items:center;width:20px;height:100%}.Vue-Toastification__toast--rtl .Vue-Toastification__icon{margin:auto 0 auto 18px}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceOutRight{40%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(1000px,0,0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Vue-Toastification__bounce-enter-active.top-left,.Vue-Toastification__bounce-enter-active.bottom-left{animation-name:bounceInLeft}.Vue-Toastification__bounce-enter-active.top-right,.Vue-Toastification__bounce-enter-active.bottom-right{animation-name:bounceInRight}.Vue-Toastification__bounce-enter-active.top-center{animation-name:bounceInDown}.Vue-Toastification__bounce-enter-active.bottom-center{animation-name:bounceInUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left{animation-name:bounceOutLeft}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right{animation-name:bounceOutRight}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center{animation-name:bounceOutUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center{animation-name:bounceOutDown}.Vue-Toastification__bounce-leave-active,.Vue-Toastification__bounce-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__bounce-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes fadeOutTop{0%{transform:translateY(0);opacity:1}to{transform:translateY(-50px);opacity:0}}@keyframes fadeOutLeft{0%{transform:translate(0);opacity:1}to{transform:translate(-50px);opacity:0}}@keyframes fadeOutBottom{0%{transform:translateY(0);opacity:1}to{transform:translateY(50px);opacity:0}}@keyframes fadeOutRight{0%{transform:translate(0);opacity:1}to{transform:translate(50px);opacity:0}}@keyframes fadeInLeft{0%{transform:translate(-50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInRight{0%{transform:translate(50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInTop{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fadeInBottom{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}.Vue-Toastification__fade-enter-active.top-left,.Vue-Toastification__fade-enter-active.bottom-left{animation-name:fadeInLeft}.Vue-Toastification__fade-enter-active.top-right,.Vue-Toastification__fade-enter-active.bottom-right{animation-name:fadeInRight}.Vue-Toastification__fade-enter-active.top-center{animation-name:fadeInTop}.Vue-Toastification__fade-enter-active.bottom-center{animation-name:fadeInBottom}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left{animation-name:fadeOutLeft}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right{animation-name:fadeOutRight}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center{animation-name:fadeOutTop}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center{animation-name:fadeOutBottom}.Vue-Toastification__fade-leave-active,.Vue-Toastification__fade-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__fade-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes slideInBlurredLeft{0%{transform:translate(-1000px) scaleX(2.5) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredTop{0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredRight{0%{transform:translate(1000px) scaleX(2.5) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredBottom{0%{transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideOutBlurredTop{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0%;filter:blur(0);opacity:1}to{transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredBottom{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredLeft{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(-1000px) scaleX(2) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}}@keyframes slideOutBlurredRight{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(1000px) scaleX(2) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}}.Vue-Toastification__slideBlurred-enter-active.top-left,.Vue-Toastification__slideBlurred-enter-active.bottom-left{animation-name:slideInBlurredLeft}.Vue-Toastification__slideBlurred-enter-active.top-right,.Vue-Toastification__slideBlurred-enter-active.bottom-right{animation-name:slideInBlurredRight}.Vue-Toastification__slideBlurred-enter-active.top-center{animation-name:slideInBlurredTop}.Vue-Toastification__slideBlurred-enter-active.bottom-center{animation-name:slideInBlurredBottom}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left{animation-name:slideOutBlurredLeft}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right{animation-name:slideOutBlurredRight}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center{animation-name:slideOutBlurredTop}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center{animation-name:slideOutBlurredBottom}.Vue-Toastification__slideBlurred-leave-active,.Vue-Toastification__slideBlurred-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__slideBlurred-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}.itg.gld.is-fetching:after{grid-column:1/-1;display:flex;align-items:center;justify-content:center;margin:auto;width:30px;height:30px;line-height:30px;content:"\\231b";animation:spin ease-in-out 1s infinite}.popup[data-v-1f3b346f]{padding:20px;text-align:center;background-color:inherit;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-1f3b346f]{text-decoration:underline}.fade-enter-active[data-v-1f3b346f],.fade-leave-active[data-v-1f3b346f]{transition:opacity .3s ease}.fade-enter-from[data-v-1f3b346f],.fade-leave-to[data-v-1f3b346f]{opacity:0}.popup[data-v-d6502b26]{padding:20px;text-align:center;background-color:inherit;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-d6502b26]{text-decoration:underline}.fade-enter-active[data-v-d6502b26],.fade-leave-active[data-v-d6502b26]{transition:opacity .3s ease}.fade-enter-from[data-v-d6502b26],.fade-leave-to[data-v-d6502b26]{opacity:0}@keyframes spin{0%{rotate:0}to{rotate:360deg}}div#gmid{width:931px}div#gd5{width:158px}.popup{position:absolute;right:calc(var(--e837c04e) * 1px)}.popup--archive{top:calc(var(--0f6a6788) * 1px)}.popup--torrent{top:calc(var(--7ce3892e) * 1px)}.is-ready:after{content:"\\2714\\fe0f"}.is-fetching{font-size:0;pointer-events:none;text-decoration:none}.is-fetching:after{content:"\\231b";display:inline-block;font-size:8px;line-height:8px;animation:spin ease-in-out 1s infinite}input[name=dltype]+.is-fetching{position:relative}input[name=dltype]+.is-fetching:after{position:absolute;top:0;left:50%;font-size:12px;line-height:27px}input[name=dltype]+.is-fetching input{color:transparent}.is-finished{font-size:0;pointer-events:none;text-decoration:none}.is-finished:after{content:"\\2714\\fe0f";display:inline-block;font-size:8px;line-height:8px}.page-elevator[data-v-8b2bf6b6]{display:flex;flex-direction:column;gap:10px;width:40px;opacity:1}.page-elevator__input[data-v-8b2bf6b6]{display:flex;margin:0;padding:0;width:100%;height:30px;text-align:center;border:#777 solid 1px;box-sizing:border-box}.page-elevator__slash[data-v-8b2bf6b6]{line-height:100%}:fullscreen .page-elevator[data-v-8b2bf6b6]{opacity:0}:fullscreen .page-elevator[data-v-8b2bf6b6]:hover{opacity:1}div#pane_images .mi0{width:max-content!important;min-width:unset;max-height:calc(var(--image-size) + 24px)!important}div#pane_images img[id^=imgsrc_]{width:auto!important;max-height:var(--image-size)}.image-resizer[data-v-4ba11677]{display:flex;flex-direction:column;gap:16px;width:40px}.image-resizer__button[data-v-4ba11677]{padding:0;width:100%;height:30px;text-align:center;background-color:transparent;border:#777 solid 1px;border-radius:5px;box-sizing:border-box;cursor:pointer}.image-resizer__button[data-v-4ba11677]:hover{background-color:#ffa50033}.image-resizer__button--active[data-v-4ba11677],.image-resizer__button--active[data-v-4ba11677]:hover{background-color:orange}html,body,div#pane_outer,div#pane_images{padding:0;width:100%!important;height:100%!important}div#bar3{display:none}.hide-cursor,.hide-cursor *{cursor:none}.original-functions{position:absolute;top:0;right:0;display:block;width:35px;height:270px;opacity:0;transition:opacity .3s ease}.original-functions:hover{opacity:1}.original-functions>img{cursor:pointer}.mi0>a{user-select:none}.mi0>a>img{pointer-events:none}div.mi1{display:flex}div.mi1 img{display:block;margin:0}div.mi2{display:flex;flex-direction:row;float:initial;margin-top:initial}div.mi3{display:flex;flex-direction:row;float:initial;margin-top:initial;order:3}div.mi4{position:initial}div#pane_thumbs{display:block;opacity:0;z-index:1;transition:opacity .3s}.enhancer-features{position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;padding-right:5px;z-index:100;flex-direction:row-reverse;gap:16px;box-sizing:border-box}.enhancer-features__feature{padding:10px 5px;background:rgba(119,119,119,.4666666667);border-radius:10px;opacity:0;transition:opacity .3s ease;box-sizing:border-box}.enhancer-features__feature:hover{opacity:1}.switch[data-v-894c8e09]{position:relative;display:inline-block;width:50px;height:24px}.switch__input[data-v-894c8e09]{width:0;height:0;opacity:0}.switch__slider[data-v-894c8e09]{position:absolute;inset:0;background-color:#ccc;border-radius:9999px;transition:.4s;cursor:pointer}.switch__slider[data-v-894c8e09]:before{position:absolute;top:2px;left:2px;height:calc(100% - 4px);aspect-ratio:1/1;background-color:#fff;border-radius:50%;transition:.4s;content:""}.switch__input:checked+.switch__slider[data-v-894c8e09]{background-color:#34353b}.switch__input:checked+.switch__slider[data-v-894c8e09]:before{transform:translate(26px)}.popup[data-v-309fd430]{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:#00000080;z-index:99999}.settings-panel[data-v-309fd430]{position:relative;display:flex;flex-direction:column;row-gap:16px;margin:32px;padding:32px;width:50%;height:auto;background-color:#34353b;border-radius:4px}.settings-panel__section[data-v-309fd430]{background-color:#4f535b;border-radius:4px}.settings-panel__section-name[data-v-309fd430]{margin:16px 32px;font-size:20px;text-align:left;line-height:100%}.settings-panel__close-button[data-v-309fd430]{position:absolute;top:4px;right:4px;padding:8px;cursor:pointer}.settings-panel__close-button[data-v-309fd430] svg{width:16px;height:16px}.settings[data-v-309fd430]{display:flex;flex-wrap:wrap;align-items:center;justify-content:start;padding:8px 16px;column-gap:8px}.settings__name[data-v-309fd430]{font-size:16px}.settings__notice[data-v-309fd430]{font-size:12px}.settings__intro[data-v-309fd430]{margin-left:60px;font-size:14px;text-align:left}.actions[data-v-309fd430]{display:flex;align-items:center;justify-content:flex-end}.actions__button[data-v-309fd430]{padding:8px 16px;color:#fff;background-color:#4f535b;border:none;border-radius:4px;cursor:pointer}.v-enter-active[data-v-309fd430],.v-leave-active[data-v-309fd430]{transition:opacity .2s ease}.v-enter-from[data-v-309fd430],.v-leave-to[data-v-309fd430]{opacity:0}');

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(vue, Toast) {
  var _a2;
  "use strict";
  const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
  const Toast__default = /* @__PURE__ */ _interopDefaultLegacy(Toast);
  const index = "";
  var monkeyWindow = window;
  var GM = /* @__PURE__ */ (() => monkeyWindow.GM)();
  var unsafeWindow = /* @__PURE__ */ (() => {
    return monkeyWindow.unsafeWindow;
  })();
  var GMKey = /* @__PURE__ */ ((GMKey2) => {
    GMKey2["InfiniteScroll"] = "InfiniteScroll";
    GMKey2["ScrollByRow"] = "ScrollByRow";
    GMKey2["BetterDownloadPopup"] = "BetterDownloadPopup";
    GMKey2["QuickDownloadMethod"] = "QuickDownloadMethod";
    GMKey2["LoadAllGalleryImages"] = "LoadAllGalleryImages";
    GMKey2["MultipageViewerEnhancer"] = "MultipageViewerEnhancer";
    GMKey2["AutoRedirect"] = "AutoRedirect";
    GMKey2["PreventImageRemoval"] = "PreventImageRemoval";
    return GMKey2;
  })(GMKey || {});
  var DownloadMethod = /* @__PURE__ */ ((DownloadMethod2) => {
    DownloadMethod2["Manual"] = "Manual";
    DownloadMethod2["HaH_Original"] = "download Original Resolution with H@H";
    DownloadMethod2["HaH_2400"] = "download 2400x Resolution with H@H";
    DownloadMethod2["Direct_Origin"] = "download Original Resolution directly";
    DownloadMethod2["Direct_Resample"] = "download Resample Resolution directly";
    return DownloadMethod2;
  })(DownloadMethod || {});
  class GMVariable {
    constructor(key, defaultValue) {
      __publicField(this, "_key");
      __publicField(this, "_value");
      this._key = key;
      this._value = defaultValue;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
      GM.setValue(this._key, this._value);
    }
    async initialize() {
      this._value = await GM.getValue(this._key, this._value);
    }
  }
  const infiniteScrollSwitch = vue.reactive(new GMVariable(GMKey.InfiniteScroll, true));
  const scrollByRowSwitch = vue.reactive(new GMVariable(GMKey.ScrollByRow, true));
  const betterDownloadPopupSwitch = vue.reactive(new GMVariable(GMKey.BetterDownloadPopup, true));
  const quickDownloadMethod = vue.reactive(new GMVariable(GMKey.QuickDownloadMethod, DownloadMethod.Manual));
  const loadAllGalleryImagesSwitch = vue.reactive(new GMVariable(GMKey.LoadAllGalleryImages, true));
  const multipageViewerEnhancerSwitch = vue.reactive(new GMVariable(GMKey.MultipageViewerEnhancer, true));
  const autoRedirectSwitch = vue.reactive(new GMVariable(GMKey.AutoRedirect, true));
  const preventImageRemovalSwitch = vue.reactive(new GMVariable(GMKey.PreventImageRemoval, false));
  async function initializeMonkeySwitches() {
    await Promise.all([
      infiniteScrollSwitch.initialize(),
      scrollByRowSwitch.initialize(),
      betterDownloadPopupSwitch.initialize(),
      quickDownloadMethod.initialize(),
      loadAllGalleryImagesSwitch.initialize(),
      multipageViewerEnhancerSwitch.initialize(),
      preventImageRemovalSwitch.initialize(),
      autoRedirectSwitch.initialize()
    ]);
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getElement(selector, root2 = document) {
    return root2.querySelector(selector);
  }
  function getElements(selector, root2 = document) {
    return root2.querySelectorAll(selector);
  }
  async function getDoc(url, options) {
    const response = await fetch(url, options);
    const html = await response.text();
    return new DOMParser().parseFromString(html, "text/html");
  }
  function scrollElement(element, { offset, absolute }) {
    if (offset) {
      element.scrollTop += offset;
      return;
    }
    if (absolute) {
      element.scrollTop = absolute;
    }
  }
  function useWheelStep({
    containerSelector,
    itemsSelector
  }) {
    const container = getElement(containerSelector);
    let firstItemOfRows = getFirstItemOfRows();
    const mutationObserver = new MutationObserver(() => {
      firstItemOfRows = getFirstItemOfRows();
    });
    mutationObserver.observe(container, {
      childList: true,
      characterData: true
    });
    setContainerWheelEvent();
    function setContainerWheelEvent() {
      if (!container) {
        return;
      }
      container.addEventListener("mousewheel", (event) => {
        if (!firstItemOfRows) {
          return;
        }
        const firstVisibleItemIndex = firstItemOfRows.findIndex((item) => Math.floor(item.getBoundingClientRect().bottom) > 0);
        const firstVisibleItem = firstItemOfRows[firstVisibleItemIndex];
        const boundingTop = Math.floor(firstVisibleItem.getBoundingClientRect().top);
        let nextIndex = firstVisibleItemIndex;
        if (Math.sign(event.deltaY) === 1 && boundingTop <= 0) {
          nextIndex++;
        } else if (Math.sign(event.deltaY) === -1 && boundingTop >= 0) {
          nextIndex--;
        }
        if (nextIndex >= 0 && nextIndex < firstItemOfRows.length) {
          event.preventDefault();
          event.stopPropagation();
          firstItemOfRows[nextIndex].scrollIntoView();
        }
      });
    }
    function getFirstItemOfRows() {
      const item = getElement(itemsSelector);
      const itemsPerRow = Math.floor(container.clientWidth / item.clientWidth);
      const firstItemOfRows2 = getElements(`${itemsSelector}:nth-child(${itemsPerRow}n + 1)`);
      if (!firstItemOfRows2) {
        return [];
      }
      return [...firstItemOfRows2];
    }
    return;
  }
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "FrontPageEnhancer",
    setup(__props) {
      if (scrollByRowSwitch.value) {
        useWheelStep({
          containerSelector: ".itg.gld",
          itemsSelector: ".gl1t"
        });
      }
      if (infiniteScrollSwitch.value) {
        useInfiniteScroll();
      }
      function useInfiniteScroll() {
        var _a3, _b;
        const galleryContainer = getElement(".itg.gld");
        const bottomPagination = (_a3 = getElements(".searchnav")) == null ? void 0 : _a3[1];
        let nextPageUrl = (_b = getElement("#dnext")) == null ? void 0 : _b.getAttribute("href");
        let isFetching = false;
        const intersectionObserver = new IntersectionObserver(async ([bottomPagination2]) => {
          var _a4;
          if (!bottomPagination2.isIntersecting || isFetching) {
            return;
          }
          if (!nextPageUrl) {
            return;
          }
          isFetching = true;
          galleryContainer == null ? void 0 : galleryContainer.classList.add("is-fetching");
          const doc = await getDoc(nextPageUrl);
          const galleriesOfNextPage = getElements(".itg.gld > .gl1t", doc);
          if (!galleriesOfNextPage) {
            return;
          }
          galleryContainer == null ? void 0 : galleryContainer.append(...galleriesOfNextPage);
          isFetching = false;
          galleryContainer == null ? void 0 : galleryContainer.classList.remove("is-fetching");
          nextPageUrl = (_a4 = getElement("#dnext", doc)) == null ? void 0 : _a4.getAttribute("href");
          history.pushState(void 0, doc.title, nextPageUrl);
        });
        if (bottomPagination) {
          intersectionObserver.observe(bottomPagination);
        }
      }
      return (_ctx, _cache) => {
        return null;
      };
    }
  });
  const FrontPageEnhancer_vue_vue_type_style_index_0_lang = "";
  class Logger {
    constructor(feature, scope) {
      __publicField(this, "_feature");
      __publicField(this, "_featureStyle");
      __publicField(this, "_scope");
      __publicField(this, "_scopeStyle");
      this._feature = feature;
      this._scope = scope;
      this._featureStyle = "background: #777; border-radius: 5px;";
      this._scopeStyle = "background: #555; border-radius: 5px;";
    }
    set scope(scope) {
      this._scope = scope;
    }
    get prefix() {
      let prefix = `%c ${this._feature} `;
      if (this._scope) {
        prefix += `%c ${this._scope} `;
      }
      return prefix;
    }
    get style() {
      const style = [this._featureStyle];
      if (this._scope) {
        style.push(this._scopeStyle);
      }
      return style;
    }
    log(message) {
      console.log(
        this.prefix,
        ...this.style,
        message
      );
    }
    error(message, error) {
      console.error(
        this.prefix,
        ...this.style,
        message,
        error
      );
    }
  }
  class LoggerScopeDecorator {
    constructor(baseLogger2, scope) {
      __publicField(this, "_logger");
      this._logger = baseLogger2;
      this._logger.scope = scope;
    }
    log(message) {
      this._logger.log(message);
    }
    error(message, error) {
      this._logger.error(message, error);
    }
  }
  function useElement() {
    const infoDiv = getElement(".gm");
    const archiveLinkAnchor2 = getElement("#gd5 > p:nth-child(2) a");
    const torrentLinkAnchor2 = getElement("#gd5 > p:nth-child(3) a");
    return {
      infoDiv,
      archiveLinkAnchor: archiveLinkAnchor2,
      torrentLinkAnchor: torrentLinkAnchor2
    };
  }
  const baseLogger$1 = new Logger("Preload Download Links");
  const torrentInnerHtml = vue.ref("");
  const archiveInnerHtml = vue.ref("");
  const { archiveLinkAnchor, torrentLinkAnchor } = useElement();
  function usePreloadDownloadLinks() {
    async function preloadDownloadLinks() {
      [archiveInnerHtml.value, torrentInnerHtml.value] = await Promise.all([
        preloadArchiveLink(),
        preloadTorrentLink()
      ]);
    }
    async function preloadTorrentLink() {
      const logger = new LoggerScopeDecorator(baseLogger$1, "Torrent");
      logger.log("Start");
      const link = getLink(torrentLinkAnchor);
      if (!link) {
        logger.error("link not found.");
        return "";
      }
      const doc = await getDoc(link);
      const popupContent = getPopupContent(doc, "#torrentinfo > div:first-child");
      if (!popupContent) {
        logger.error("popup content not found.");
        return "";
      }
      logger.log("End");
      return popupContent.innerHTML;
    }
    async function preloadArchiveLink() {
      const logger = new Logger("Archive");
      logger.log("Start");
      const link = getLink(archiveLinkAnchor);
      if (!link) {
        logger.error("link not found.");
        return "";
      }
      const doc = await getDoc(link);
      const popupContent = getPopupContent(doc, "#db");
      if (!popupContent) {
        logger.error("popup content not found.");
        return "";
      }
      logger.log("End");
      return popupContent.innerHTML;
    }
    function getLink(linkElement) {
      var _a3;
      const onClick = linkElement.getAttribute("onclick");
      if (!onClick) {
        return null;
      }
      return (_a3 = onClick.match(/(https:\/\/\S+)',\d+,\d+/)) == null ? void 0 : _a3[1];
    }
    function getPopupContent(doc, selector) {
      const content = getElement(selector, doc);
      if (!content) {
        return null;
      }
      content.removeAttribute("style");
      content.classList.add("popup");
      return content;
    }
    return {
      preloadDownloadLinks,
      torrentInnerHtml,
      archiveInnerHtml
    };
  }
  function usePosition() {
    const { archiveLinkAnchor: archiveLinkAnchor2, torrentLinkAnchor: torrentLinkAnchor2, infoDiv } = useElement();
    const popupRight = vue.ref(getPopupRight());
    const archiveTop = vue.ref(getArchiveTop());
    const torrentTop = vue.ref(getTorrentTop());
    function getPopupRight() {
      return (document.documentElement.clientWidth - infoDiv.clientWidth) / 2;
    }
    function getArchiveTop() {
      const { top, height } = archiveLinkAnchor2.getBoundingClientRect();
      return top + height + window.scrollY + 5;
    }
    function getTorrentTop() {
      const { top, height } = torrentLinkAnchor2.getBoundingClientRect();
      return top + height + window.scrollY + 5;
    }
    return {
      popupRight,
      archiveTop,
      torrentTop
    };
  }
  const baseLogger = new Logger("Images");
  async function fetchAllImages({ delayInMs = 3e3 }) {
    const logger = new LoggerScopeDecorator(baseLogger, "Fetch All");
    if (!isFirstPage()) {
      logger.log("Not first page, do nothing");
      return;
    }
    logger.log("Start");
    const pageUrls = getPageUrls();
    if (!pageUrls) {
      return;
    }
    if (pageUrls.length === 0) {
      logger.log("Only one page, do nothing");
      return;
    }
    for (const url of pageUrls) {
      try {
        await delay(delayInMs);
        logger.log(`fetching ${url}`);
        const doc = await getDoc(url);
        const imageElements = getImageElements(doc);
        if (!imageElements) {
          return;
        }
        appendImages(imageElements);
      } catch (error) {
        if (error instanceof Error) {
          logger.error(`fetch ${url} failed`, error);
        }
      }
    }
    logger.log("Done");
    function isFirstPage() {
      var _a3;
      return ((_a3 = getElement(".ptds")) == null ? void 0 : _a3.innerText) === "1";
    }
    function getImageElements(doc) {
      return getElements(".gdtl", doc);
    }
    function getPageUrls() {
      const lastPageElement = getElement(".ptt td:nth-last-child(2)");
      if (!lastPageElement) {
        logger.error("Get last page element failed");
        return;
      }
      const pageCount2 = Number(lastPageElement.innerText);
      if (pageCount2 === 1) {
        return [];
      }
      const { href } = window.location;
      return Array(pageCount2 - 1).fill("").map((_, index2) => `${href}?p=${index2 + 1}`);
    }
    function appendImages(elements) {
      var _a3;
      (_a3 = getElement("#gdt > .c")) == null ? void 0 : _a3.before(...elements);
    }
  }
  var _a;
  const isClient = typeof window !== "undefined";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const noop = () => {
  };
  isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      filter(() => fn.apply(this, args), { fn, thisArg: this, args });
    }
    return wrapper;
  }
  const bypassFilter = (invoke) => {
    return invoke();
  };
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = vue.ref(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive, pause, resume, eventFilter };
  }
  function identity(arg) {
    return arg;
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function tryOnMounted(fn, sync = true) {
    if (vue.getCurrentInstance())
      vue.onMounted(fn);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }
  var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
  var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
  var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
  var __objRest$5 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$6)
      for (var prop of __getOwnPropSymbols$6(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchWithFilter(source, cb, options = {}) {
    const _a3 = options, {
      eventFilter = bypassFilter
    } = _a3, watchOptions = __objRest$5(_a3, [
      "eventFilter"
    ]);
    return vue.watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
  }
  var __defProp$2 = Object.defineProperty;
  var __defProps$2 = Object.defineProperties;
  var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(b)) {
        if (__propIsEnum$2.call(b, prop))
          __defNormalProp$2(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
  var __objRest$1 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchPausable(source, cb, options = {}) {
    const _a3 = options, {
      eventFilter: filter
    } = _a3, watchOptions = __objRest$1(_a3, [
      "eventFilter"
    ]);
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
      eventFilter
    }));
    return { stop, pause, resume, isActive };
  }
  function unrefElement(elRef) {
    var _a3;
    const plain = resolveUnref(elRef);
    return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  const defaultDocument = isClient ? window.document : void 0;
  isClient ? window.navigator : void 0;
  isClient ? window.location : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (isString(args[0]) || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener) => {
      el.addEventListener(event, listener, options);
      return () => el.removeEventListener(event, listener, options);
    };
    const stopWatch = vue.watch(() => unrefElement(target), (el) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(...events.flatMap((event) => {
        return listeners.map((listener) => register(el, event, listener));
      }));
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore, capture = true, detectIframe = false } = options;
    if (!window2)
      return;
    let shouldListen = true;
    let fallback;
    const listener = (event) => {
      window2.clearTimeout(fallback);
      const el = unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el))
        return;
      if (!shouldListen) {
        shouldListen = true;
        return;
      }
      handler(event);
    };
    const shouldIgnore = (event) => {
      return ignore && ignore.some((target2) => {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      });
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e) => {
        const el = unrefElement(target);
        if (el)
          shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
      }, { passive: true }),
      useEventListener(window2, "pointerup", (e) => {
        if (e.button === 0) {
          const path = e.composedPath();
          e.composedPath = () => path;
          fallback = window2.setTimeout(() => listener(e), 50);
        }
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        var _a3;
        const el = unrefElement(target);
        if (((_a3 = window2.document.activeElement) == null ? void 0 : _a3.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
          handler(event);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  function useSupported(callback, sync = false) {
    const isSupported = vue.ref();
    const update = () => isSupported.value = Boolean(callback());
    update();
    tryOnMounted(update, sync);
    return isSupported;
  }
  function useBrowserLocation({ window: window2 = defaultWindow } = {}) {
    const buildState = (trigger) => {
      const { state: state2, length } = (window2 == null ? void 0 : window2.history) || {};
      const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window2 == null ? void 0 : window2.location) || {};
      return {
        trigger,
        state: state2,
        length,
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search
      };
    };
    const state = vue.ref(buildState("load"));
    if (window2) {
      useEventListener(window2, "popstate", () => state.value = buildState("popstate"), { passive: true });
      useEventListener(window2, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
    }
    return state;
  }
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  const globalKey = "__vueuse_ssr_handlers__";
  _global[globalKey] = _global[globalKey] || {};
  const handlers = _global[globalKey];
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }
  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }
  var __defProp$j = Object.defineProperty;
  var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
  var __hasOwnProp$l = Object.prototype.hasOwnProperty;
  var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$j = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    if (__getOwnPropSymbols$l)
      for (var prop of __getOwnPropSymbols$l(b)) {
        if (__propIsEnum$l.call(b, prop))
          __defNormalProp$j(a, prop, b[prop]);
      }
    return a;
  };
  const StorageSerializers = {
    boolean: {
      read: (v) => v === "true",
      write: (v) => String(v)
    },
    object: {
      read: (v) => JSON.parse(v),
      write: (v) => JSON.stringify(v)
    },
    number: {
      read: (v) => Number.parseFloat(v),
      write: (v) => String(v)
    },
    any: {
      read: (v) => v,
      write: (v) => String(v)
    },
    string: {
      read: (v) => v,
      write: (v) => String(v)
    },
    map: {
      read: (v) => new Map(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v.entries()))
    },
    set: {
      read: (v) => new Set(JSON.parse(v)),
      write: (v) => JSON.stringify(Array.from(v))
    },
    date: {
      read: (v) => new Date(v),
      write: (v) => v.toISOString()
    }
  };
  function useStorage(key, defaults, storage, options = {}) {
    var _a3;
    const {
      flush = "pre",
      deep = true,
      listenToStorageChanges = true,
      writeDefaults = true,
      mergeDefaults = false,
      shallow,
      window: window2 = defaultWindow,
      eventFilter,
      onError = (e) => {
        console.error(e);
      }
    } = options;
    const data = (shallow ? vue.shallowRef : vue.ref)(defaults);
    if (!storage) {
      try {
        storage = getSSRHandler("getDefaultStorage", () => {
          var _a22;
          return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
        })();
      } catch (e) {
        onError(e);
      }
    }
    if (!storage)
      return data;
    const rawInit = resolveUnref(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a3 = options.serializer) != null ? _a3 : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
    if (window2 && listenToStorageChanges)
      useEventListener(window2, "storage", update);
    update();
    return data;
    function write(v) {
      try {
        if (v == null)
          storage.removeItem(key);
        else
          storage.setItem(key, serializer.write(v));
      } catch (e) {
        onError(e);
      }
    }
    function read(event) {
      pauseWatch();
      try {
        const rawValue = event ? event.newValue : storage.getItem(key);
        if (rawValue == null) {
          if (writeDefaults && rawInit !== null)
            storage.setItem(key, serializer.write(rawInit));
          return rawInit;
        } else if (!event && mergeDefaults) {
          const value = serializer.read(rawValue);
          if (isFunction(mergeDefaults))
            return mergeDefaults(value, rawInit);
          else if (type === "object" && !Array.isArray(value))
            return __spreadValues$j(__spreadValues$j({}, rawInit), value);
          return value;
        } else if (typeof rawValue !== "string") {
          return rawValue;
        } else {
          return serializer.read(rawValue);
        }
      } catch (e) {
        onError(e);
      } finally {
        resumeWatch();
      }
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key === null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== key)
        return;
      data.value = read(event);
    }
  }
  const functionsMap = [
    [
      "requestFullscreen",
      "exitFullscreen",
      "fullscreenElement",
      "fullscreenEnabled",
      "fullscreenchange",
      "fullscreenerror"
    ],
    [
      "webkitRequestFullscreen",
      "webkitExitFullscreen",
      "webkitFullscreenElement",
      "webkitFullscreenEnabled",
      "webkitfullscreenchange",
      "webkitfullscreenerror"
    ],
    [
      "webkitRequestFullScreen",
      "webkitCancelFullScreen",
      "webkitCurrentFullScreenElement",
      "webkitCancelFullScreen",
      "webkitfullscreenchange",
      "webkitfullscreenerror"
    ],
    [
      "mozRequestFullScreen",
      "mozCancelFullScreen",
      "mozFullScreenElement",
      "mozFullScreenEnabled",
      "mozfullscreenchange",
      "mozfullscreenerror"
    ],
    [
      "msRequestFullscreen",
      "msExitFullscreen",
      "msFullscreenElement",
      "msFullscreenEnabled",
      "MSFullscreenChange",
      "MSFullscreenError"
    ]
  ];
  function useFullscreen(target, options = {}) {
    const { document: document2 = defaultDocument, autoExit = false } = options;
    const targetRef = target || (document2 == null ? void 0 : document2.querySelector("html"));
    const isFullscreen = vue.ref(false);
    let map = functionsMap[0];
    const isSupported = useSupported(() => {
      if (!document2) {
        return false;
      } else {
        for (const m of functionsMap) {
          if (m[1] in document2) {
            map = m;
            return true;
          }
        }
      }
      return false;
    });
    const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
    async function exit() {
      if (!isSupported.value)
        return;
      if (document2 == null ? void 0 : document2[ELEMENT])
        await document2[EXIT]();
      isFullscreen.value = false;
    }
    async function enter() {
      if (!isSupported.value)
        return;
      await exit();
      const target2 = unrefElement(targetRef);
      if (target2) {
        await target2[REQUEST]();
        isFullscreen.value = true;
      }
    }
    async function toggle() {
      if (isFullscreen.value)
        await exit();
      else
        await enter();
    }
    if (document2) {
      useEventListener(document2, EVENT, () => {
        isFullscreen.value = !!(document2 == null ? void 0 : document2[ELEMENT]);
      }, false);
    }
    if (autoExit)
      tryOnScopeDispose(exit);
    return {
      isSupported,
      isFullscreen,
      enter,
      exit,
      toggle
    };
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp2 = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  const _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  __spreadValues({
    linear: identity
  }, _TransitionPresets);
  const _hoisted_1$7 = ["innerHTML"];
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupTorrent",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const { torrentLinkAnchor: torrentLinkAnchor2 } = useElement();
      const { isShow } = useDownloadTorrent();
      function useDownloadTorrent() {
        const isShow2 = vue.ref(false);
        vue.onMounted(() => {
          torrentLinkAnchor2.removeAttribute("onclick");
          torrentLinkAnchor2.classList.add("is-ready");
          if (torrentLinkAnchor2.innerText === "Torrent Download (1)") {
            setDownloadEvent();
          } else {
            setToggleEvent();
          }
        });
        function setDownloadEvent() {
          torrentLinkAnchor2.addEventListener("click", (event) => {
            var _a3;
            event.preventDefault();
            (_a3 = getElement("a", popup.value)) == null ? void 0 : _a3.click();
          });
        }
        function setToggleEvent() {
          torrentLinkAnchor2.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isShow2.value = !isShow2.value;
          });
          onClickOutside(popup, (event) => {
            if (event.target === torrentLinkAnchor2) {
              return;
            }
            isShow2.value = false;
          });
        }
        return {
          isShow: isShow2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup popup--torrent",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$7), [
              [vue.vShow, vue.unref(isShow)]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const popup_scss_vue_type_style_index_0_src_1f3b346f_scoped_1f3b346f_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PopupTorrent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1f3b346f"]]);
  const toast = Toast.useToast();
  function useDownloadEvent() {
    function setHentaiAtHomeEvent() {
      var _a3, _b, _c;
      const logger = new Logger("Hentai At Home Event");
      const hentaiAtHomeLinks = getElements(".popup--archive table td a");
      if (!(hentaiAtHomeLinks == null ? void 0 : hentaiAtHomeLinks.length)) {
        logger.error("hentai@Home Links not found.");
        return;
      }
      const postUrl = (_a3 = getElement("#hathdl_form")) == null ? void 0 : _a3.getAttribute("action");
      if (!postUrl) {
        logger.error("postUrl not found.");
        return;
      }
      for (const link of hentaiAtHomeLinks) {
        const ORIGINAL_SIZE = "org";
        const resolution = ((_c = (_b = link.getAttribute("onclick")) == null ? void 0 : _b.split("'")) == null ? void 0 : _c[1]) || ORIGINAL_SIZE;
        link.removeAttribute("onclick");
        link.addEventListener("click", async (event) => {
          event.preventDefault();
          link.classList.add("is-fetching");
          const doc = await sendDownloadRequest(postUrl, resolution);
          const response = getElement("#db", doc);
          logger.log(response);
          const parsedResponse = parseResponse(response, logger);
          if (parsedResponse) {
            link.classList.remove("is-fetching");
            if (/download has been queued/.test(parsedResponse)) {
              toast.success(parsedResponse);
              link.classList.add("is-finished");
            } else {
              toast.error(parsedResponse);
            }
          }
        });
      }
    }
    async function sendDownloadRequest(postUrl, resolution) {
      const formData = new FormData();
      formData.append("hathdl_xres", resolution);
      const doc = await getDoc(postUrl, {
        method: "POST",
        body: formData
      });
      return doc;
    }
    function parseResponse(response, logger) {
      if (!response) {
        logger.error("Failed to get response.");
        return null;
      }
      if (!response.innerHTML) {
        logger.error("Failed to get response innerHTML.");
        return null;
      }
      const result = response.innerHTML.match(new RegExp("(?<=<p>)(.*?)(?=<\\/p>)", "g"));
      if (!result) {
        logger.error("Failed to parse response.");
        return null;
      }
      return result.join("\n").replace(/<strong>#\d+<\/strong>/, "");
    }
    function setDirectDownloadEvent() {
      const logger = new Logger("Archive Event");
      const downloadButtons = getElements('form input[name="dlcheck"]');
      if (!downloadButtons) {
        logger.error("archive download buttons not found.");
        return;
      }
      for (const button of downloadButtons) {
        button.addEventListener("click", async (event) => {
          var _a3;
          event.preventDefault();
          const form = (_a3 = button == null ? void 0 : button.parentElement) == null ? void 0 : _a3.parentElement;
          if (!form) {
            logger.error("form not found.");
            return;
          }
          const url = form.getAttribute("action");
          if (!url) {
            logger.error("url not found.");
            return;
          }
          const resolution = button.getAttribute("value");
          button.parentElement.classList.add("is-fetching");
          await sendDownloadRequest2(url, resolution);
          button.parentElement.classList.remove("is-fetching");
        });
      }
      async function sendDownloadRequest2(url, resolution) {
        const resolutionParams = resolution === "Download Original Archive" ? "dlcheck=Download Original Archive&dltype=org" : "dlcheck=Download Resample Archive&dltype=res";
        const response = await fetch(url, {
          method: "POST",
          body: resolutionParams,
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        });
        const html = await response.text();
        if (!html.includes("Locating archive server and preparing file for download...")) {
          toast.error("something went wrong. Open your console to see the response");
          console.warn("Download failed, response HTML:", html);
          return;
        }
        const matches = html.match(/document\.location = "(.*)"/);
        if (!matches || (matches == null ? void 0 : matches.length) !== 2) {
          toast.error("something went wrong. Open your console to see the response");
          console.warn("Download failed, response HTML:", html);
          return;
        }
        const downloadLink = `${matches[1]}?start=1`;
        window.location.href = downloadLink;
      }
    }
    return {
      setHentaiAtHomeEvent,
      setDirectDownloadEvent
    };
  }
  const _hoisted_1$6 = ["innerHTML"];
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupArchive",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const toast2 = Toast.useToast();
      const { archiveLinkAnchor: archiveLinkAnchor2 } = useElement();
      const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent();
      const { isShow } = useDownloadArchive();
      function useDownloadArchive() {
        const isShow2 = vue.ref(false);
        vue.onMounted(() => {
          archiveLinkAnchor2.removeAttribute("onclick");
          archiveLinkAnchor2.classList.add("is-ready");
          setHentaiAtHomeEvent();
          setDirectDownloadEvent();
          if (quickDownloadMethod.value === DownloadMethod.Manual) {
            setToggleEvent();
          } else {
            setQuickDownloadEvent();
          }
          onClickOutside(popup, (event) => {
            if (event.target === archiveLinkAnchor2) {
              return;
            }
            isShow2.value = false;
          });
        });
        function setToggleEvent() {
          archiveLinkAnchor2.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            isShow2.value = !isShow2.value;
          });
        }
        function setQuickDownloadEvent() {
          archiveLinkAnchor2.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!popup.value || isShow2.value) {
              isShow2.value = false;
              return;
            }
            switch (quickDownloadMethod.value) {
              case DownloadMethod.HaH_Original:
              case DownloadMethod.HaH_2400: {
                const downloadLinkElement = getHaHDownloadLinkElement(quickDownloadMethod.value);
                if (downloadLinkElement) {
                  downloadLinkElement.click();
                } else {
                  toast2.warning(`Failed ${quickDownloadMethod.value}. The link might not exists.
 Open popup`);
                  isShow2.value = true;
                }
                break;
              }
              case DownloadMethod.Direct_Origin:
                getElement('input[value="Download Original Archive"]', popup.value).click();
                break;
              case DownloadMethod.Direct_Resample:
                getElement('input[value="Download Resample Archive"]', popup.value).click();
                break;
            }
          });
        }
        function getHaHDownloadLinkElement(downloadMethod) {
          const indexMap = {
            [DownloadMethod.HaH_Original]: 6,
            [DownloadMethod.HaH_2400]: 5
          };
          const index2 = indexMap[downloadMethod];
          return getElement(`td:nth-child(${index2}) > p > a`, popup.value);
        }
        return {
          isShow: isShow2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup popup--archive",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$6), [
              [vue.vShow, vue.unref(isShow)]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const popup_scss_vue_type_style_index_0_src_d6502b26_scoped_d6502b26_lang = "";
  const PopupArchive = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d6502b26"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "GalleryEnhancer",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "e837c04e": vue.unref(popupRight),
        "0f6a6788": vue.unref(archiveTop),
        "7ce3892e": vue.unref(torrentTop)
      }));
      if (loadAllGalleryImagesSwitch.value) {
        fetchAllImages({ delayInMs: 1e3 });
      }
      const {
        preloadDownloadLinks,
        archiveInnerHtml: archiveInnerHtml2,
        torrentInnerHtml: torrentInnerHtml2
      } = usePreloadDownloadLinks();
      if (betterDownloadPopupSwitch.value) {
        preloadDownloadLinks();
      }
      if (scrollByRowSwitch.value) {
        useWheelStep({
          containerSelector: "#gdt",
          itemsSelector: ".gdtl"
        });
      }
      const {
        popupRight,
        archiveTop,
        torrentTop
      } = usePosition();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(archiveInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupArchive, {
            key: 0,
            "inner-h-t-m-l": vue.unref(archiveInnerHtml2)
          }, null, 8, ["inner-h-t-m-l"])) : vue.createCommentVNode("", true),
          vue.unref(torrentInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupTorrent, {
            key: 1,
            "inner-h-t-m-l": vue.unref(torrentInnerHtml2)
          }, null, 8, ["inner-h-t-m-l"])) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const GalleryEnhancer_vue_vue_type_style_index_0_lang = "";
  function useElements() {
    const paneImagesDiv2 = getElement("#pane_images");
    const paneThumbsDiv2 = getElement("#pane_thumbs");
    return {
      paneImagesDiv: paneImagesDiv2,
      paneThumbsDiv: paneThumbsDiv2
    };
  }
  const { paneImagesDiv: paneImagesDiv$1 } = useElements();
  const location$1 = useBrowserLocation();
  const currentPage$1 = vue.ref(Number((_a2 = location$1.value.hash) == null ? void 0 : _a2.replace("#page", "")));
  function usePages() {
    const pageCount2 = unsafeWindow.pagecount;
    function appendPageIndex() {
      const imageContainers = getElements(".mi0");
      const pageCount22 = imageContainers.length;
      const mutationObserver = new MutationObserver(([mutation]) => {
        const target = mutation.target;
        const index2 = target.id.split("image_")[1];
        const captionElement = getElement(".mi4", target);
        const captionText = captionElement == null ? void 0 : captionElement.innerText;
        if (!captionText || (captionText == null ? void 0 : captionText.includes(" \uFF0F "))) {
          return;
        }
        captionElement.innerText = `${captionText}\u3000-\u3000${index2} \uFF0F ${pageCount22}`;
      });
      const config = { attributes: true };
      imageContainers.forEach((container) => {
        mutationObserver.observe(container, config);
      });
    }
    function goToNextPage2() {
      goToPageByOffset2(1);
    }
    function goToPrevPage2() {
      goToPageByOffset2(-1);
    }
    function goToCurrentPage() {
      goToPage2(currentPage$1.value);
    }
    function goToPageByOffset2(offset) {
      let index2 = currentPage$1.value + offset;
      index2 = Math.min(index2, pageCount2);
      index2 = Math.max(index2, 1);
      goToPage2(index2);
    }
    function goToPage2(index2) {
      currentPage$1.value = index2;
      const target = getElement(`#image_${index2}`);
      target.scrollIntoView();
    }
    function scrollToImageTop() {
      getCurrentImage2().scrollIntoView();
    }
    function scrollToRelativePosition(relativeToViewport) {
      const currentImage = getCurrentImage2();
      const { height: imageHeight } = currentImage.getBoundingClientRect();
      const top = currentImage.offsetTop + relativeToViewport * imageHeight - window.innerHeight / 2 - 1;
      paneImagesDiv$1.scrollTo({ top });
    }
    function getRelativeToViewport2() {
      const currentImage = getCurrentImage2();
      if (!currentImage) {
        return null;
      }
      const { top: imageTop, height: imageHeight } = currentImage.getBoundingClientRect();
      return 1 - (imageHeight - 1 + imageTop - window.innerHeight / 2) / imageHeight;
    }
    function scrollToProperPosition2(relativeToViewport, currentSize) {
      const currentImage = getCurrentImage2();
      if (currentSize === 100) {
        scrollToImageTop();
      } else {
        scrollToRelativePosition(relativeToViewport);
      }
      if (currentImage.getBoundingClientRect().top > 1) {
        scrollToImageTop();
      }
    }
    function changePageOnWheel(event) {
      if (event.deltaY < 0) {
        goToPrevPage2();
      } else {
        goToNextPage2();
      }
    }
    function setPreloadImagesEvent() {
      paneImagesDiv$1.onscroll = () => {
        unsafeWindow.preload_scroll_images();
      };
    }
    function getCurrentImage2() {
      return getElement(`img[id^=imgsrc_${currentPage$1.value}]`);
    }
    function syncCurrentImageOnScroll() {
      const imageContainers = getElements(".mi0");
      let firstIntersectingIndex = 1;
      const observer = new IntersectionObserver((entries) => {
        firstIntersectingIndex = Number(entries[0].target.id.replace("image_", ""));
      });
      imageContainers.forEach((container) => {
        observer.observe(container);
      });
      paneImagesDiv$1.addEventListener("scroll", () => {
        const visibleImageContainers = [];
        for (let index2 = Math.max(firstIntersectingIndex - 1, 1); index2 < imageContainers.length; index2++) {
          const percentage = getVisiblePercentageInViewport(imageContainers[index2 - 1]);
          if (percentage > 0) {
            visibleImageContainers.push({
              index: index2,
              percentage,
              element: imageContainers[index2]
            });
          }
        }
        if (visibleImageContainers.length === 0) {
          return;
        } else if (visibleImageContainers.length === 1) {
          currentPage$1.value = visibleImageContainers[0].index;
        } else {
          visibleImageContainers.sort((elem1, elem2) => elem2.percentage - elem1.percentage);
          const [largest, secondLargest] = visibleImageContainers;
          if (largest.percentage / secondLargest.percentage >= 2) {
            currentPage$1.value = largest.index;
          }
        }
      });
    }
    function getVisiblePercentageInViewport(element) {
      const viewportHeight = window.innerHeight;
      const { top, bottom } = element.getBoundingClientRect();
      if (top > viewportHeight || bottom < 0) {
        return 0;
      }
      const visibleBottom = Math.min(viewportHeight, bottom);
      const visibleTop = Math.max(top, 0);
      return (visibleBottom - visibleTop) / viewportHeight;
    }
    return {
      appendPageIndex,
      pageCount: pageCount2,
      currentPage: currentPage$1,
      getCurrentImage: getCurrentImage2,
      goToNextPage: goToNextPage2,
      goToPrevPage: goToPrevPage2,
      goToPageByOffset: goToPageByOffset2,
      goToPage: goToPage2,
      goToCurrentPage,
      scrollToImageTop,
      scrollToRelativePosition,
      getRelativeToViewport: getRelativeToViewport2,
      scrollToProperPosition: scrollToProperPosition2,
      changePageOnWheel,
      syncCurrentImageOnScroll,
      setPreloadImagesEvent
    };
  }
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  const freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function("return this")();
  const root$1 = root;
  var Symbol$1 = root$1.Symbol;
  const Symbol$2 = Symbol$1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var now = function() {
    return root$1.Date.now();
  };
  const now$1 = now;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  const {
    pageCount,
    currentPage,
    getCurrentImage,
    goToPage,
    goToPageByOffset,
    goToNextPage,
    goToPrevPage,
    getRelativeToViewport,
    scrollToProperPosition
  } = usePages();
  const {
    paneImagesDiv,
    paneThumbsDiv
  } = useElements();
  setReflowTrigger();
  function setReflowTrigger() {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            var _a3;
            (_a3 = entry.target) == null ? void 0 : _a3.dispatchEvent(new CustomEvent("reflow"));
          });
        });
      }
    });
    observer.observe(document.body);
  }
  function useEvents() {
    function setKeyBoardEvent() {
      document.onkeydown = null;
      window.addEventListener("keydown", async (event) => {
        const isCtrlPressed = event.ctrlKey;
        if (isCtrlPressed) {
          switch (event.code) {
            case "ArrowLeft":
              goToPageByOffset(-10);
              break;
            case "ArrowRight":
              goToPageByOffset(10);
              break;
          }
        } else {
          const currentImage = getCurrentImage();
          switch (event.code) {
            case "Numpad8":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop
                });
              }
              break;
            case "Numpad5":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop + (currentImage.offsetHeight - window.innerHeight) / 2
                });
              }
              break;
            case "Numpad2":
              if (currentImage) {
                scrollElement(paneImagesDiv, {
                  absolute: currentImage.offsetTop + currentImage.offsetHeight - window.innerHeight
                });
              }
              break;
            case "ArrowUp":
              scrollElement(paneImagesDiv, { offset: -50 });
              break;
            case "ArrowDown":
              scrollElement(paneImagesDiv, { offset: 50 });
              break;
            case "ArrowLeft":
            case "Numpad1":
            case "Numpad4":
              goToPrevPage();
              break;
            case "Backspace":
              event.preventDefault();
              goToPrevPage();
              break;
            case "ArrowRight":
            case "Numpad3":
            case "Numpad6":
            case "Space":
              goToNextPage();
              break;
            case "PageUp":
              goToPageByOffset(-10);
              break;
            case "PageDown":
              goToPageByOffset(10);
              break;
            case "Home":
              goToPage(1);
              break;
            case "End":
              goToPage(pageCount);
              break;
            case "KeyF":
            case "Enter": {
              toggleFullScreen();
              break;
            }
            case "KeyR":
              unsafeWindow.action_reload(currentPage.value);
              break;
            case "Numpad7":
              rotate(-90);
              break;
            case "Numpad9":
              rotate(90);
              break;
          }
        }
      });
    }
    function setClickEvent() {
      setChangePageClickEvent();
      setFullscreenToggleEvent();
      function setChangePageClickEvent() {
        const config = {
          click: goToNextPage,
          contextmenu: goToPrevPage
        };
        for (const [event, action] of Object.entries(config)) {
          paneImagesDiv.addEventListener(event, (event2) => {
            const target = event2.target;
            if (target.closest(".mi1")) {
              return;
            }
            event2.preventDefault();
            event2.stopPropagation();
            action();
            hideCursor(event2);
          });
        }
      }
      function setFullscreenToggleEvent() {
        document.body.addEventListener("mousedown", (event) => {
          if (event.button !== 1) {
            return;
          }
          const target = event.target;
          if (target.closest(".original-functions")) {
            return;
          }
          document.body.addEventListener("mouseup", () => {
            toggleFullScreen();
          }, {
            once: true
          });
        });
      }
    }
    function setShowCursorEvent() {
      document.body.addEventListener("mousemove", (event) => {
        if (!checkMouseDelta(event)) {
          return;
        }
        showCursor();
      });
    }
    function setHideCursorEvent() {
      document.body.addEventListener("mousewheel", (event) => {
        hideCursor(event);
      }, true);
      const debouncedHideCursor = debounce(hideCursor, 1e3);
      document.body.addEventListener("mousemove", (event) => {
        debouncedHideCursor(event);
      }, true);
    }
    const prevMousePoint = {
      x: 0,
      y: 0
    };
    function checkMouseDelta({ clientX, clientY }) {
      const threshold = 50;
      return Math.abs(clientX - prevMousePoint.x) >= threshold || Math.abs(clientY - prevMousePoint.y) >= threshold;
    }
    function showCursor() {
      document.body.classList.remove("hide-cursor");
    }
    function hideCursor({ clientX, clientY }) {
      prevMousePoint.x = clientX;
      prevMousePoint.y = clientY;
      document.body.classList.add("hide-cursor");
    }
    function setShowThumbsEvent() {
      document.addEventListener("mousemove", (event) => {
        const threshold = 15;
        const shouldShowThumbs = event.clientX < paneThumbsDiv.offsetWidth + threshold;
        paneThumbsDiv.style.opacity = shouldShowThumbs ? "1" : "0";
      });
    }
    const { toggle } = useFullscreen(document.body);
    async function toggleFullScreen() {
      const relativeToViewport = getRelativeToViewport();
      await toggle();
      document.body.addEventListener("reflow", () => {
        if (relativeToViewport) {
          scrollToProperPosition(relativeToViewport);
        }
      }, {
        once: true
      });
    }
    function rotate(degree) {
      const currentImage = getCurrentImage();
      const currentDegree = Number(currentImage.style.rotate.replace("deg", ""));
      const newDegree = (currentDegree + degree) % 360;
      currentImage.style.rotate = `${newDegree}deg`;
      if (newDegree % 180 == 0) {
        currentImage.style.scale = "initial";
      } else {
        const { width, height } = currentImage.getBoundingClientRect();
        currentImage.style.scale = (width / height).toString();
      }
    }
    return {
      setKeyBoardEvent,
      setClickEvent,
      setShowCursorEvent,
      setHideCursorEvent,
      setShowThumbsEvent
    };
  }
  const _withScopeId$2 = (n) => (vue.pushScopeId("data-v-8b2bf6b6"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$5 = { class: "page-elevator" };
  const _hoisted_2$4 = ["value"];
  const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "page-elevator__slash" }, "\uFF0F", -1));
  const _hoisted_4$1 = ["textContent"];
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "PageElevator",
    setup(__props) {
      const {
        pageCount: pageCount2,
        currentPage: currentPage2,
        goToPage: goToPage2
      } = usePages();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("input", {
            type: "text",
            class: "page-elevator__input",
            value: vue.unref(currentPage2),
            onKeydown: [
              _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"])),
              _cache[1] || (_cache[1] = vue.withKeys(($event) => vue.unref(goToPage2)(Number($event.target.value)), ["enter"]))
            ]
          }, null, 40, _hoisted_2$4),
          _hoisted_3$2,
          vue.createElementVNode("span", {
            textContent: vue.toDisplayString(vue.unref(pageCount2))
          }, null, 8, _hoisted_4$1)
        ]);
      };
    }
  });
  const PageElevator_vue_vue_type_style_index_0_scoped_8b2bf6b6_lang = "";
  const PageElevator = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8b2bf6b6"]]);
  const _hoisted_1$4 = { class: "image-resizer" };
  const _hoisted_2$3 = ["onClick", "textContent"];
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "ImageResizer",
    setup(__props) {
      const {
        goToCurrentPage,
        getRelativeToViewport: getRelativeToViewport2,
        scrollToProperPosition: scrollToProperPosition2
      } = usePages();
      const { paneImagesDiv: paneImagesDiv2 } = useElements();
      const {
        sizeList,
        currentIndex,
        setImageSize,
        onResizerClick,
        setResizeShortcuts
      } = useImageResizer();
      setResizeShortcuts();
      setTimeout(() => {
        setImageSize(currentIndex.value);
        goToCurrentPage();
      }, 0);
      function useImageResizer() {
        const sizeList2 = [100, 125, 150, 175, 200];
        const storedIndex = useStorage("image-resizer-index", 0);
        const currentIndex2 = vue.ref(storedIndex.value);
        vue.watch(currentIndex2, (index2) => {
          storedIndex.value = index2;
        });
        const currentSize = vue.computed(() => {
          if (currentIndex2.value < 0) {
            return void 0;
          }
          return sizeList2[currentIndex2.value];
        });
        function onResizerClick2(index2) {
          const relativeToViewport = getRelativeToViewport2();
          if (index2 === currentIndex2.value) {
            clearImageSize();
          } else {
            setImageSize2(index2);
          }
          if (relativeToViewport) {
            scrollToProperPosition2(relativeToViewport);
          }
        }
        function setImageSize2(index2) {
          currentIndex2.value = index2;
          paneImagesDiv2.style.setProperty("--image-size", `${currentSize.value}vh`);
        }
        function clearImageSize() {
          currentIndex2.value = -1;
          paneImagesDiv2.style.removeProperty("--image-size");
        }
        function increaseImageSize() {
          const index2 = Math.min(currentIndex2.value + 1, sizeList2.length - 1);
          setImageSize2(index2);
        }
        function decreaseImageSize() {
          const index2 = currentIndex2.value === -1 ? sizeList2.length - 1 : Math.max(currentIndex2.value - 1, 0);
          setImageSize2(index2);
        }
        function setResizeShortcuts2() {
          window.addEventListener("keydown", (event) => {
            var _a3;
            const relativeToViewport = getRelativeToViewport2();
            const isCtrlPressed = event.ctrlKey;
            if (isCtrlPressed) {
              const regex = /Numpad(?<index>[1-5])/;
              const matchResult = event.code.match(regex);
              if (!matchResult) {
                return;
              }
              const index2 = Number((_a3 = matchResult.groups) == null ? void 0 : _a3.index);
              setImageSize2(index2 - 1);
            } else {
              switch (event.code) {
                case "NumpadAdd":
                  increaseImageSize();
                  break;
                case "NumpadSubtract":
                  decreaseImageSize();
                  break;
                case "Numpad0":
                  if (currentIndex2.value === 0) {
                    clearImageSize();
                  } else {
                    setImageSize2(0);
                  }
                  break;
                case "NumpadDecimal": {
                  const index2 = Math.floor(sizeList2.length / 2);
                  if (currentIndex2.value === index2) {
                    clearImageSize();
                  } else {
                    setImageSize2(index2);
                  }
                  break;
                }
                case "NumpadEnter":
                  clearImageSize();
                  break;
                default:
                  return;
              }
            }
            if (relativeToViewport) {
              scrollToProperPosition2(relativeToViewport, currentSize.value);
            }
          });
        }
        return {
          sizeList: sizeList2,
          currentIndex: currentIndex2,
          currentSize,
          setImageSize: setImageSize2,
          onResizerClick: onResizerClick2,
          setResizeShortcuts: setResizeShortcuts2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(sizeList), (size, index2) => {
            return vue.openBlock(), vue.createElementBlock("button", {
              key: size,
              class: vue.normalizeClass(["image-resizer__button", { "image-resizer__button--active": index2 === vue.unref(currentIndex) }]),
              onClick: ($event) => vue.unref(onResizerClick)(index2),
              textContent: vue.toDisplayString(size)
            }, null, 10, _hoisted_2$3);
          }), 128))
        ]);
      };
    }
  });
  const ImageResizer_vue_vue_type_style_index_0_lang = "";
  const ImageResizer_vue_vue_type_style_index_1_scoped_4ba11677_lang = "";
  const ImageResizer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4ba11677"]]);
  const _hoisted_1$3 = ["innerHTML"];
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "MultiPageViewerEnhancer",
    setup(__props) {
      const {
        appendPageIndex,
        changePageOnWheel,
        setPreloadImagesEvent,
        syncCurrentImageOnScroll
      } = usePages();
      const {
        setKeyBoardEvent,
        setClickEvent,
        setShowCursorEvent,
        setHideCursorEvent,
        setShowThumbsEvent
      } = useEvents();
      appendPageIndex();
      setPreloadImagesEvent();
      syncCurrentImageOnScroll();
      setKeyBoardEvent();
      setClickEvent();
      setShowCursorEvent();
      setHideCursorEvent();
      setShowThumbsEvent();
      useWheelStep({
        containerSelector: "#pane_thumbs_inner",
        itemsSelector: "[id^=thumb_]"
      });
      const exhentaiButtons = vue.ref("");
      vue.onMounted(() => {
        exhentaiButtons.value = replaceOriginalFunctions();
      });
      function replaceOriginalFunctions() {
        var _a3;
        const originalFunctions = getElement("#bar3");
        const closeButton = originalFunctions.querySelector("img:first-child");
        if (!closeButton) {
          return "";
        }
        const link = document.createElement("a");
        link.href = window.location.origin + window.location.pathname.replace("mpv", "g");
        (_a3 = closeButton.parentNode) == null ? void 0 : _a3.insertBefore(link, closeButton);
        link.append(closeButton);
        return originalFunctions.innerHTML;
      }
      vue.onMounted(() => {
        vue.watch(() => preventImageRemovalSwitch.value, (value) => {
          if (!value) {
            return;
          }
          unsafeWindow.preload_generic = Function("a", "b", "c", `
      var d = a.scrollTop;
      a = d + a.offsetHeight;
      for (var e = "image" == b, f = 1; f <= pagecount; f++) {
          var g = document.getElementById(b + "_" + f)
            , h = g.offsetTop
            , k = h + g.offsetHeight;
          if ("hidden" == g.style.visibility && k >= d && h <= a + c)
              e ? load_image(f) : load_thumb(f),
              g.style.visibility = "visible";
      }
    `);
        }, { immediate: true });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "enhancer-features",
          onWheel: _cache[0] || (_cache[0] = vue.withModifiers(
            (...args) => vue.unref(changePageOnWheel) && vue.unref(changePageOnWheel)(...args),
            ["stop"]
          ))
        }, [
          vue.createVNode(PageElevator, { class: "enhancer-features__feature" }),
          vue.createVNode(ImageResizer, { class: "enhancer-features__feature" }),
          vue.createElementVNode("div", {
            class: "original-functions",
            innerHTML: exhentaiButtons.value
          }, null, 8, _hoisted_1$3)
        ], 32);
      };
    }
  });
  const MultiPageViewerEnhancer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    fill: "#FFF",
    version: "1.1",
    width: "800px",
    height: "800px",
    viewBox: "0 0 94.926 94.926",
    "xml:space": "preserve"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("g", null, [
    /* @__PURE__ */ vue.createElementVNode("path", { d: "M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0   c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096   c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476   c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62   s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" })
  ], -1);
  const _hoisted_3$1 = [
    _hoisted_2$2
  ];
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
  }
  const CrossButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-894c8e09"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = { class: "switch" };
  const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "switch__slider" }, null, -1));
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ToggleSwitch",
    props: {
      modelValue: { type: Boolean }
    },
    emits: ["update:modelValue", "toggle"],
    setup(__props, { emit }) {
      const props = __props;
      const modelValueProxy = vue.computed({
        get: () => props.modelValue,
        set: (value) => {
          emit("update:modelValue", value);
          emit("toggle", value);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("label", _hoisted_1$1, [
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(modelValueProxy) ? modelValueProxy.value = $event : null),
            type: "checkbox",
            class: "switch__input"
          }, null, 512), [
            [vue.vModelCheckbox, vue.unref(modelValueProxy)]
          ]),
          _hoisted_2$1
        ]);
      };
    }
  });
  const ToggleSwitch_vue_vue_type_style_index_0_scoped_894c8e09_lang = "";
  const ToggleSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-894c8e09"]]);
  const _withScopeId = (n) => (vue.pushScopeId("data-v-309fd430"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "popup" };
  const _hoisted_2 = { class: "settings-panel" };
  const _hoisted_3 = { class: "settings-panel__section" };
  const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Gallery Enhancer ", -1));
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_6 = { class: "settings" };
  const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Scroll by Row ", -1));
  const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "settings__notice" }, ' *sync with "Front Page Enhancer - Scroll by Row" ', -1));
  const _hoisted_9 = { class: "settings" };
  const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Better Download Popup ", -1));
  const _hoisted_11 = { class: "settings" };
  const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Load All Gallery Images ", -1));
  const _hoisted_13 = { class: "settings-panel__section" };
  const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Multi-Page Viewer Enhancer ", -1));
  const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_16 = { class: "settings" };
  const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Multi-Page Viewer Enhancer ", -1));
  const _hoisted_18 = { class: "settings" };
  const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Prevent Image Removal ", -1));
  const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "settings__intro" }, [
    /* @__PURE__ */ vue.createElementVNode("p", null, " The original script of exhentai would remove the images which are too far from your current scroll. "),
    /* @__PURE__ */ vue.createElementVNode("p", null, " So if you scroll back to the images that have been removed. It might be flashing because although your browser has cached the image but still have to re-render it. ")
  ], -1));
  const _hoisted_21 = { class: "settings" };
  const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Auto Redirect to Multi-Page Viewer ", -1));
  const _hoisted_23 = { class: "settings-panel__section" };
  const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Front Page Enhancer ", -1));
  const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_26 = { class: "settings" };
  const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Infinite Scroll ", -1));
  const _hoisted_28 = { class: "settings" };
  const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Scroll by Row ", -1));
  const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "settings__notice" }, ' *sync with "Gallery Enhancer - Scroll by Row" ', -1));
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "SettingsPanel",
    setup(__props) {
      const isShow = vue.ref(false);
      vue.onMounted(() => {
        GM.registerMenuCommand("Open settings panel", () => isShow.value = !isShow.value);
      });
      function reload() {
        location.reload();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", _hoisted_1, [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createElementVNode("section", _hoisted_3, [
                    _hoisted_4,
                    _hoisted_5,
                    vue.createElementVNode("div", _hoisted_6, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(scrollByRowSwitch).value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(scrollByRowSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_7,
                      _hoisted_8
                    ]),
                    vue.createElementVNode("div", _hoisted_9, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(betterDownloadPopupSwitch).value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(betterDownloadPopupSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_10,
                      vue.withDirectives(vue.createElementVNode("select", {
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(quickDownloadMethod).value = $event)
                      }, [
                        vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Manual), 1),
                        vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).HaH_Original), 1),
                        vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).HaH_2400), 1),
                        vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Direct_Origin), 1),
                        vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Direct_Resample), 1)
                      ], 512), [
                        [vue.vModelSelect, vue.unref(quickDownloadMethod).value]
                      ])
                    ]),
                    vue.createElementVNode("div", _hoisted_11, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(loadAllGalleryImagesSwitch).value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(loadAllGalleryImagesSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_12
                    ])
                  ]),
                  vue.createElementVNode("section", _hoisted_13, [
                    _hoisted_14,
                    _hoisted_15,
                    vue.createElementVNode("div", _hoisted_16, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(multipageViewerEnhancerSwitch).value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(multipageViewerEnhancerSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_17
                    ]),
                    vue.createElementVNode("div", _hoisted_18, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(preventImageRemovalSwitch).value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(preventImageRemovalSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_19,
                      _hoisted_20
                    ]),
                    vue.createElementVNode("div", _hoisted_21, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(autoRedirectSwitch).value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(autoRedirectSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_22
                    ])
                  ]),
                  vue.createElementVNode("section", _hoisted_23, [
                    _hoisted_24,
                    _hoisted_25,
                    vue.createElementVNode("div", _hoisted_26, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(infiniteScrollSwitch).value,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.unref(infiniteScrollSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_27
                    ]),
                    vue.createElementVNode("div", _hoisted_28, [
                      vue.createVNode(ToggleSwitch, {
                        modelValue: vue.unref(scrollByRowSwitch).value,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vue.unref(scrollByRowSwitch).value = $event)
                      }, null, 8, ["modelValue"]),
                      _hoisted_29,
                      _hoisted_30
                    ])
                  ]),
                  vue.createElementVNode("span", {
                    class: "settings-panel__close-button",
                    onClick: _cache[9] || (_cache[9] = ($event) => isShow.value = false)
                  }, [
                    vue.createVNode(CrossButton)
                  ]),
                  vue.createElementVNode("div", { class: "actions" }, [
                    vue.createElementVNode("button", {
                      class: "actions__button",
                      onClick: reload
                    }, " Apply and Reload ")
                  ])
                ])
              ], 512), [
                [vue.vShow, isShow.value]
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const SettingsPanel_vue_vue_type_style_index_0_scoped_309fd430_lang = "";
  const SettingsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-309fd430"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const { href } = window.location;
      const { enhancer } = useEnhancer();
      const { redirectIfSinglePageViewer } = useRedirect();
      if (autoRedirectSwitch.value) {
        redirectIfSinglePageViewer();
      }
      function useEnhancer() {
        const enhancer2 = vue.computed(() => {
          if (/https:\/\/e[-x]hentai\.org\/(watched|popular)?(\?.+)?$/.test(href) || /https:\/\/e[-x]hentai\.org\/(tag)\/\w+/.test(href)) {
            return _sfc_main$a;
          }
          if (/https:\/\/e[-x]hentai\.org\/g\/\w+\/\w+/.test(href)) {
            return _sfc_main$7;
          }
          if (multipageViewerEnhancerSwitch.value && /https:\/\/e[-x]hentai\.org\/mpv\/\w+\/\w+/.test(href)) {
            return _sfc_main$4;
          }
          return null;
        });
        return {
          enhancer: enhancer2
        };
      }
      function useRedirect() {
        function redirectIfSinglePageViewer2() {
          const isSinglePageViewer = /https:\/\/exhentai\.org\/s\/\w+\/\w+/.test(href);
          if (isSinglePageViewer) {
            vue.onMounted(() => {
              const page = location.pathname.split("-")[1];
              const url = getElement(".sb > a").href.replace("/g/", "/mpv/");
              location.href = `${url}#page${page}`;
            });
          }
        }
        return {
          redirectIfSinglePageViewer: redirectIfSinglePageViewer2
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(enhancer)))),
          vue.createVNode(SettingsPanel)
        ], 64);
      };
    }
  });
  const app = vue.createApp(_sfc_main);
  app.use(Toast__default.default, {
    transition: "Vue-Toastification__fade",
    maxToasts: 2,
    newestOnTop: true,
    pauseOnFocusLoss: true,
    hideProgressBar: true,
    closeButton: false
  });
  (async () => {
    await initializeMonkeySwitches();
    app.mount(
      (() => {
        const app2 = document.createElement("div");
        app2.classList.add("enhancer-container");
        app2.style.backgroundColor = "inherit";
        document.body.append(app2);
        return app2;
      })()
    );
  })();
})(Vue, VueToastification);
