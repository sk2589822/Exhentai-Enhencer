// ==UserScript==
// @name               Exhentai Enhancer
// @name:en            Exhentai Enhancer
// @name:zh-TW         Exhentai Enhancer
// @name:zh-CN         Exhentai Enhancer
// @namespace          https://github.com/sk2589822/Exhentai-Enhancer
// @version            1.11.1
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
// @require            https://cdn.jsdelivr.net/npm/vue@3.3.7/dist/vue.global.prod.js
// @grant              GM.getValue
// @grant              GM.registerMenuCommand
// @grant              GM.setValue
// @grant              GM_addStyle
// @grant              unsafeWindow
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const a=document.createElement("style");a.textContent=t,document.head.append(a)})(' @charset "UTF-8";.Vue-Toastification__container{z-index:9999;position:fixed;padding:4px;width:600px;box-sizing:border-box;display:flex;min-height:100%;color:#fff;flex-direction:column;pointer-events:none}@media only screen and (min-width : 600px){.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:1em}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:1em;flex-direction:column-reverse}.Vue-Toastification__container.top-left,.Vue-Toastification__container.bottom-left{left:1em}.Vue-Toastification__container.top-left .Vue-Toastification__toast,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast{margin-right:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl{margin-right:unset;margin-left:auto}}.Vue-Toastification__container.top-right,.Vue-Toastification__container.bottom-right{right:1em}.Vue-Toastification__container.top-right .Vue-Toastification__toast,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast{margin-left:auto}@supports not (-moz-appearance: none){.Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl,.Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl{margin-left:unset;margin-right:auto}}.Vue-Toastification__container.top-center,.Vue-Toastification__container.bottom-center{left:50%;margin-left:-300px}.Vue-Toastification__container.top-center .Vue-Toastification__toast,.Vue-Toastification__container.bottom-center .Vue-Toastification__toast{margin-left:auto;margin-right:auto}}@media only screen and (max-width : 600px){.Vue-Toastification__container{width:100vw;padding:0;left:0;margin:0}.Vue-Toastification__container .Vue-Toastification__toast{width:100%}.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right,.Vue-Toastification__container.top-center{top:0}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.bottom-center{bottom:0;flex-direction:column-reverse}}.Vue-Toastification__toast{display:inline-flex;position:relative;max-height:800px;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:22px 24px;border-radius:8px;box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d;justify-content:space-between;font-family:Lato,Helvetica,Roboto,Arial,sans-serif;max-width:600px;min-width:326px;pointer-events:auto;overflow:hidden;transform:translateZ(0);direction:ltr}.Vue-Toastification__toast--rtl{direction:rtl}.Vue-Toastification__toast--default{background-color:#1976d2;color:#fff}.Vue-Toastification__toast--info{background-color:#2196f3;color:#fff}.Vue-Toastification__toast--success{background-color:#4caf50;color:#fff}.Vue-Toastification__toast--error{background-color:#ff5252;color:#fff}.Vue-Toastification__toast--warning{background-color:#ffc107;color:#fff}@media only screen and (max-width : 600px){.Vue-Toastification__toast{border-radius:0;margin-bottom:.5rem}}.Vue-Toastification__toast-body{flex:1;line-height:24px;font-size:16px;word-break:break-word;white-space:pre-wrap}.Vue-Toastification__toast-component-body{flex:1}.Vue-Toastification__toast.disable-transition{animation:none!important}.Vue-Toastification__close-button{font-weight:700;font-size:24px;line-height:24px;background:transparent;outline:none;border:none;padding:0 0 0 10px;cursor:pointer;transition:.3s ease;align-items:center;color:#fff;opacity:.3;transition:visibility 0s,opacity .2s linear}.Vue-Toastification__close-button:hover,.Vue-Toastification__close-button:focus{opacity:1}.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover{opacity:0}.Vue-Toastification__toast--rtl .Vue-Toastification__close-button{padding-left:unset;padding-right:10px}@keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Vue-Toastification__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:10000;background-color:#ffffffb3;transform-origin:left;animation:scale-x-frames linear 1 forwards}.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar{right:0;left:unset;transform-origin:right}.Vue-Toastification__icon{margin:auto 18px auto 0;background:transparent;outline:none;border:none;padding:0;transition:.3s ease;align-items:center;width:20px;height:100%}.Vue-Toastification__toast--rtl .Vue-Toastification__icon{margin:auto 0 auto 18px}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceOutRight{40%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(1000px,0,0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Vue-Toastification__bounce-enter-active.top-left,.Vue-Toastification__bounce-enter-active.bottom-left{animation-name:bounceInLeft}.Vue-Toastification__bounce-enter-active.top-right,.Vue-Toastification__bounce-enter-active.bottom-right{animation-name:bounceInRight}.Vue-Toastification__bounce-enter-active.top-center{animation-name:bounceInDown}.Vue-Toastification__bounce-enter-active.bottom-center{animation-name:bounceInUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left{animation-name:bounceOutLeft}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right,.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right{animation-name:bounceOutRight}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center{animation-name:bounceOutUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center{animation-name:bounceOutDown}.Vue-Toastification__bounce-leave-active,.Vue-Toastification__bounce-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__bounce-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes fadeOutTop{0%{transform:translateY(0);opacity:1}to{transform:translateY(-50px);opacity:0}}@keyframes fadeOutLeft{0%{transform:translate(0);opacity:1}to{transform:translate(-50px);opacity:0}}@keyframes fadeOutBottom{0%{transform:translateY(0);opacity:1}to{transform:translateY(50px);opacity:0}}@keyframes fadeOutRight{0%{transform:translate(0);opacity:1}to{transform:translate(50px);opacity:0}}@keyframes fadeInLeft{0%{transform:translate(-50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInRight{0%{transform:translate(50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes fadeInTop{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fadeInBottom{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}.Vue-Toastification__fade-enter-active.top-left,.Vue-Toastification__fade-enter-active.bottom-left{animation-name:fadeInLeft}.Vue-Toastification__fade-enter-active.top-right,.Vue-Toastification__fade-enter-active.bottom-right{animation-name:fadeInRight}.Vue-Toastification__fade-enter-active.top-center{animation-name:fadeInTop}.Vue-Toastification__fade-enter-active.bottom-center{animation-name:fadeInBottom}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left{animation-name:fadeOutLeft}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right,.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right{animation-name:fadeOutRight}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center{animation-name:fadeOutTop}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center{animation-name:fadeOutBottom}.Vue-Toastification__fade-leave-active,.Vue-Toastification__fade-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__fade-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}@keyframes slideInBlurredLeft{0%{transform:translate(-1000px) scaleX(2.5) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredTop{0%{transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredRight{0%{transform:translate(1000px) scaleX(2.5) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}to{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideInBlurredBottom{0%{transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}to{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}}@keyframes slideOutBlurredTop{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0%;filter:blur(0);opacity:1}to{transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredBottom{0%{transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%;filter:blur(240px);opacity:0}}@keyframes slideOutBlurredLeft{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(-1000px) scaleX(2) scaleY(.2);transform-origin:100% 50%;filter:blur(40px);opacity:0}}@keyframes slideOutBlurredRight{0%{transform:translate(0) scaleY(1) scaleX(1);transform-origin:50% 50%;filter:blur(0);opacity:1}to{transform:translate(1000px) scaleX(2) scaleY(.2);transform-origin:0% 50%;filter:blur(40px);opacity:0}}.Vue-Toastification__slideBlurred-enter-active.top-left,.Vue-Toastification__slideBlurred-enter-active.bottom-left{animation-name:slideInBlurredLeft}.Vue-Toastification__slideBlurred-enter-active.top-right,.Vue-Toastification__slideBlurred-enter-active.bottom-right{animation-name:slideInBlurredRight}.Vue-Toastification__slideBlurred-enter-active.top-center{animation-name:slideInBlurredTop}.Vue-Toastification__slideBlurred-enter-active.bottom-center{animation-name:slideInBlurredBottom}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left{animation-name:slideOutBlurredLeft}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right{animation-name:slideOutBlurredRight}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center{animation-name:slideOutBlurredTop}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center{animation-name:slideOutBlurredBottom}.Vue-Toastification__slideBlurred-leave-active,.Vue-Toastification__slideBlurred-enter-active{animation-duration:.75s;animation-fill-mode:both}.Vue-Toastification__slideBlurred-move{transition-timing-function:ease-in-out;transition-property:all;transition-duration:.4s}.itg.gld.is-fetching:after{grid-column:1/-1;display:flex;align-items:center;justify-content:center;margin:0 auto 864px;width:30px;height:30px;line-height:30px;content:"\u231B";animation:spin ease-in-out 1s infinite}.popup[data-v-0f43299d]{padding:20px;text-align:center;background-color:inherit;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-0f43299d]{text-decoration:underline}.fade-enter-active[data-v-0f43299d],.fade-leave-active[data-v-0f43299d]{transition:opacity .3s ease}.fade-enter-from[data-v-0f43299d],.fade-leave-to[data-v-0f43299d]{opacity:0}.popup[data-v-6ae53e87]{padding:20px;text-align:center;background-color:inherit;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-6ae53e87]{text-decoration:underline}.fade-enter-active[data-v-6ae53e87],.fade-leave-active[data-v-6ae53e87]{transition:opacity .3s ease}.fade-enter-from[data-v-6ae53e87],.fade-leave-to[data-v-6ae53e87]{opacity:0}.popup[data-v-f8bd8db2]{padding:20px;text-align:center;background-color:inherit;border:white solid 3px;border-radius:20px;z-index:100;transition:opacity .3s}.popup a[data-v-f8bd8db2]{text-decoration:underline}.fade-enter-active[data-v-f8bd8db2],.fade-leave-active[data-v-f8bd8db2]{transition:opacity .3s ease}.fade-enter-from[data-v-f8bd8db2],.fade-leave-to[data-v-f8bd8db2]{opacity:0}@keyframes spin{0%{rotate:0}to{rotate:360deg}}div#gmid,div#gd5{width:auto}.popup{position:absolute}.is-ready:after{content:" \u2714\uFE0F"}.is-fetching{font-size:0;pointer-events:none;text-decoration:none}.is-fetching:after{content:"\u231B";display:inline-block;font-size:8px;line-height:8px;animation:spin ease-in-out 1s infinite}input[name=dltype]+.is-fetching{position:relative}input[name=dltype]+.is-fetching:after{position:absolute;top:0;left:50%;font-size:12px;line-height:27px}input[name=dltype]+.is-fetching input{color:transparent}.is-finished{font-size:0;pointer-events:none;text-decoration:none}.is-finished:after{content:"\u2714\uFE0F";display:inline-block;font-size:8px;line-height:8px}.page-elevator[data-v-8b2bf6b6]{display:flex;flex-direction:column;gap:10px;width:40px;opacity:1}.page-elevator__input[data-v-8b2bf6b6]{display:flex;margin:0;padding:0;width:100%;height:30px;text-align:center;border:#777 solid 1px;box-sizing:border-box}.page-elevator__slash[data-v-8b2bf6b6]{line-height:100%}:fullscreen .page-elevator[data-v-8b2bf6b6]{opacity:0}:fullscreen .page-elevator[data-v-8b2bf6b6]:hover{opacity:1}div#pane_images .mimg{width:min-content!important;min-width:unset;max-height:calc(var(--image-size) + 24px)!important}div#pane_images .mimg>a{-webkit-user-select:none;user-select:none}div#pane_images .mimg>a>img{width:auto!important;max-height:var(--image-size);pointer-events:none}.image-resizer[data-v-572fe08a]{display:flex;flex-direction:column;gap:16px;width:40px}.image-resizer__button[data-v-572fe08a]{padding:0;width:100%;height:30px;text-align:center;background-color:transparent;border:#777 solid 1px;border-radius:5px;box-sizing:border-box;cursor:pointer}.image-resizer__button[data-v-572fe08a]:hover{background-color:#ffa50033}.image-resizer__button--active[data-v-572fe08a],.image-resizer__button--active[data-v-572fe08a]:hover{background-color:orange}html,body{padding:0;width:100%!important;height:100%!important}div#bar3{display:none}.hide-cursor,.hide-cursor *{cursor:none}.original-functions{position:absolute;top:0;right:0;display:block;width:35px;height:270px;opacity:0;transition:opacity .3s ease}.original-functions:hover{opacity:1}.original-functions>img{cursor:pointer}div#pane_thumbs{display:block;opacity:0;z-index:1;transition:opacity .3s}.enhancer-features{position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;padding-right:5px;z-index:100;flex-direction:row-reverse;gap:16px;box-sizing:border-box}.enhancer-features__feature{padding:10px 5px;background:rgba(119,119,119,.4666666667);border-radius:10px;opacity:0;transition:opacity .3s ease;box-sizing:border-box}.enhancer-features__feature:hover{opacity:1}.switch[data-v-894c8e09]{position:relative;display:inline-block;width:50px;height:24px}.switch__input[data-v-894c8e09]{width:0;height:0;opacity:0}.switch__slider[data-v-894c8e09]{position:absolute;top:0;bottom:0;right:0;left:0;background-color:#ccc;border-radius:9999px;transition:.4s;cursor:pointer}.switch__slider[data-v-894c8e09]:before{position:absolute;top:2px;left:2px;height:calc(100% - 4px);aspect-ratio:1/1;background-color:#fff;border-radius:50%;transition:.4s;content:""}.switch__input:checked+.switch__slider[data-v-894c8e09]{background-color:#34353b}.switch__input:checked+.switch__slider[data-v-894c8e09]:before{transform:translate(26px)}.popup[data-v-ddd293d0]{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:#00000080;z-index:99999}.settings-panel[data-v-ddd293d0]{position:relative;display:flex;margin:32px;padding:32px;width:80%;max-width:1000px;height:90%;background-color:#34353b;border-radius:4px;flex-direction:column;row-gap:16px}.settings-panel__inner[data-v-ddd293d0]{overflow-y:auto;padding-right:16px;height:100%}.settings-panel__section[data-v-ddd293d0]{background-color:#4f535b;border-radius:4px}.settings-panel__section-name[data-v-ddd293d0]{margin:16px 32px;padding-top:16px;font-size:20px;text-align:left;line-height:100%}.settings-panel__close-button[data-v-ddd293d0]{position:absolute;top:4px;right:4px;padding:8px;cursor:pointer}.settings-panel__close-button[data-v-ddd293d0] svg{width:16px;height:16px}.settings[data-v-ddd293d0]{display:flex;flex-wrap:wrap;align-items:center;justify-content:start;padding:8px 16px;column-gap:8px}.settings__name[data-v-ddd293d0]{font-size:16px}.settings__notice[data-v-ddd293d0]{font-size:12px}.settings__intro[data-v-ddd293d0]{margin-left:60px;width:100%;font-size:14px;text-align:left}.actions[data-v-ddd293d0]{display:flex;align-items:center;justify-content:flex-end}.actions__button[data-v-ddd293d0]{padding:8px 16px;color:#fff;background-color:#4f535b;border:none;border-radius:4px;cursor:pointer}.v-enter-active[data-v-ddd293d0],.v-leave-active[data-v-ddd293d0]{transition:opacity .2s ease}.v-enter-from[data-v-ddd293d0],.v-leave-to[data-v-ddd293d0]{opacity:0} ');

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var _a;
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
  var isFunction = (value) => typeof value === "function";
  var isString = (value) => typeof value === "string";
  var isNonEmptyString = (value) => isString(value) && value.trim().length > 0;
  var isNumber = (value) => typeof value === "number";
  var isUndefined = (value) => typeof value === "undefined";
  var isObject$2 = (value) => typeof value === "object" && value !== null;
  var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
  var isTouchEvent = (event) => window.TouchEvent && event instanceof TouchEvent;
  var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
  var isVueComponent = (c) => isFunction(c) || isObject$2(c);
  var isToastContent = (obj) => !isUndefined(obj) && (isString(obj) || isVueComponent(obj) || isToastComponent(obj));
  var isDOMRect = (obj) => isObject$2(obj) && ["height", "width", "right", "left", "top", "bottom"].every((p) => isNumber(obj[p]));
  var hasProp = (obj, propKey) => (isObject$2(obj) || isFunction(obj)) && propKey in obj;
  var getId = ((i) => () => i++)(0);
  function getX(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
  }
  function getY(event) {
    return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
  }
  var removeElement = (el) => {
    if (!isUndefined(el.remove)) {
      el.remove();
    } else if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };
  var getVueComponentFromObj = (obj) => {
    if (isToastComponent(obj)) {
      return getVueComponentFromObj(obj.component);
    }
    if (isJSX(obj)) {
      return vue.defineComponent({
        render() {
          return obj;
        }
      });
    }
    return typeof obj === "string" ? obj : vue.toRaw(vue.unref(obj));
  };
  var normalizeToastComponent = (obj) => {
    if (typeof obj === "string") {
      return obj;
    }
    const props = hasProp(obj, "props") && isObject$2(obj.props) ? obj.props : {};
    const listeners = hasProp(obj, "listeners") && isObject$2(obj.listeners) ? obj.listeners : {};
    return { component: getVueComponentFromObj(obj), props, listeners };
  };
  var isBrowser = () => typeof window !== "undefined";
  var EventBus = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(eventType) {
      return this.allHandlers[eventType] || [];
    }
    on(eventType, handler) {
      const handlers2 = this.getHandlers(eventType);
      handlers2.push(handler);
      this.allHandlers[eventType] = handlers2;
    }
    off(eventType, handler) {
      const handlers2 = this.getHandlers(eventType);
      handlers2.splice(handlers2.indexOf(handler) >>> 0, 1);
    }
    emit(eventType, event) {
      const handlers2 = this.getHandlers(eventType);
      handlers2.forEach((handler) => handler(event));
    }
  };
  var isEventBusInterface = (e) => ["on", "off", "emit"].every((f) => hasProp(e, f) && isFunction(e[f]));
  var TYPE;
  (function(TYPE2) {
    TYPE2["SUCCESS"] = "success";
    TYPE2["ERROR"] = "error";
    TYPE2["WARNING"] = "warning";
    TYPE2["INFO"] = "info";
    TYPE2["DEFAULT"] = "default";
  })(TYPE || (TYPE = {}));
  var POSITION;
  (function(POSITION2) {
    POSITION2["TOP_LEFT"] = "top-left";
    POSITION2["TOP_CENTER"] = "top-center";
    POSITION2["TOP_RIGHT"] = "top-right";
    POSITION2["BOTTOM_LEFT"] = "bottom-left";
    POSITION2["BOTTOM_CENTER"] = "bottom-center";
    POSITION2["BOTTOM_RIGHT"] = "bottom-right";
  })(POSITION || (POSITION = {}));
  var EVENTS;
  (function(EVENTS2) {
    EVENTS2["ADD"] = "add";
    EVENTS2["DISMISS"] = "dismiss";
    EVENTS2["UPDATE"] = "update";
    EVENTS2["CLEAR"] = "clear";
    EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
  })(EVENTS || (EVENTS = {}));
  var VT_NAMESPACE = "Vue-Toastification";
  var COMMON = {
    type: {
      type: String,
      default: TYPE.DEFAULT
    },
    classNames: {
      type: [String, Array],
      default: () => []
    },
    trueBoolean: {
      type: Boolean,
      default: true
    }
  };
  var ICON = {
    type: COMMON.type,
    customIcon: {
      type: [String, Boolean, Object, Function],
      default: true
    }
  };
  var CLOSE_BUTTON = {
    component: {
      type: [String, Object, Function, Boolean],
      default: "button"
    },
    classNames: COMMON.classNames,
    showOnHover: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: "close"
    }
  };
  var PROGRESS_BAR = {
    timeout: {
      type: [Number, Boolean],
      default: 5e3
    },
    hideProgressBar: {
      type: Boolean,
      default: false
    },
    isRunning: {
      type: Boolean,
      default: false
    }
  };
  var TRANSITION = {
    transition: {
      type: [Object, String],
      default: `${VT_NAMESPACE}__bounce`
    }
  };
  var CORE_TOAST = {
    position: {
      type: String,
      default: POSITION.TOP_RIGHT
    },
    draggable: COMMON.trueBoolean,
    draggablePercent: {
      type: Number,
      default: 0.6
    },
    pauseOnFocusLoss: COMMON.trueBoolean,
    pauseOnHover: COMMON.trueBoolean,
    closeOnClick: COMMON.trueBoolean,
    timeout: PROGRESS_BAR.timeout,
    hideProgressBar: PROGRESS_BAR.hideProgressBar,
    toastClassName: COMMON.classNames,
    bodyClassName: COMMON.classNames,
    icon: ICON.customIcon,
    closeButton: CLOSE_BUTTON.component,
    closeButtonClassName: CLOSE_BUTTON.classNames,
    showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({
        toastRole: "alert",
        closeButtonLabel: "close"
      })
    },
    rtl: {
      type: Boolean,
      default: false
    },
    eventBus: {
      type: Object,
      required: false,
      default: () => new EventBus()
    }
  };
  var TOAST = {
    id: {
      type: [String, Number],
      required: true,
      default: 0
    },
    type: COMMON.type,
    content: {
      type: [String, Object, Function],
      required: true,
      default: ""
    },
    onClick: {
      type: Function,
      default: void 0
    },
    onClose: {
      type: Function,
      default: void 0
    }
  };
  var CONTAINER = {
    container: {
      type: [
        Object,
        Function
      ],
      default: () => document.body
    },
    newestOnTop: COMMON.trueBoolean,
    maxToasts: {
      type: Number,
      default: 20
    },
    transition: TRANSITION.transition,
    toastDefaults: Object,
    filterBeforeCreate: {
      type: Function,
      default: (toast2) => toast2
    },
    filterToasts: {
      type: Function,
      default: (toasts) => toasts
    },
    containerClassName: COMMON.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object]
  };
  var propValidators_default = {
    CORE_TOAST,
    TOAST,
    CONTAINER,
    PROGRESS_BAR,
    ICON,
    TRANSITION,
    CLOSE_BUTTON
  };
  var VtProgressBar_default = vue.defineComponent({
    name: "VtProgressBar",
    props: propValidators_default.PROGRESS_BAR,
    data() {
      return {
        hasClass: true
      };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1
        };
      },
      cpClass() {
        return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
      }
    },
    watch: {
      timeout() {
        this.hasClass = false;
        this.$nextTick(() => this.hasClass = true);
      }
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      }
    }
  });
  function render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.style),
      class: vue.normalizeClass(_ctx.cpClass)
    }, null, 6);
  }
  VtProgressBar_default.render = render;
  var VtProgressBar_default2 = VtProgressBar_default;
  var VtCloseButton_default = vue.defineComponent({
    name: "VtCloseButton",
    props: propValidators_default.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        if (this.component !== false) {
          return getVueComponentFromObj(this.component);
        }
        return "button";
      },
      classes() {
        const classes = [`${VT_NAMESPACE}__close-button`];
        if (this.showOnHover) {
          classes.push("show-on-hover");
        }
        return classes.concat(this.classNames);
      }
    }
  });
  var _hoisted_1$9 = /* @__PURE__ */ vue.createTextVNode(" × ");
  function render2(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.buttonComponent), vue.mergeProps({
      "aria-label": _ctx.ariaLabel,
      class: _ctx.classes
    }, _ctx.$attrs), {
      default: vue.withCtx(() => [
        _hoisted_1$9
      ]),
      _: 1
    }, 16, ["aria-label", "class"]);
  }
  VtCloseButton_default.render = render2;
  var VtCloseButton_default2 = VtCloseButton_default;
  var VtSuccessIcon_default = {};
  var _hoisted_12$1 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_2$5 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
  }, null, -1);
  var _hoisted_3$3 = [
    _hoisted_2$5
  ];
  function render3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_12$1, _hoisted_3$3);
  }
  VtSuccessIcon_default.render = render3;
  var VtSuccessIcon_default2 = VtSuccessIcon_default;
  var VtInfoIcon_default = {};
  var _hoisted_13$1 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_22$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
  }, null, -1);
  var _hoisted_32$1 = [
    _hoisted_22$1
  ];
  function render4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_13$1, _hoisted_32$1);
  }
  VtInfoIcon_default.render = render4;
  var VtInfoIcon_default2 = VtInfoIcon_default;
  var VtWarningIcon_default = {};
  var _hoisted_14$1 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  };
  var _hoisted_23$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_33$1 = [
    _hoisted_23$1
  ];
  function render5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_14$1, _hoisted_33$1);
  }
  VtWarningIcon_default.render = render5;
  var VtWarningIcon_default2 = VtWarningIcon_default;
  var VtErrorIcon_default = {};
  var _hoisted_15$1 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  };
  var _hoisted_24$1 = /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }, null, -1);
  var _hoisted_34$1 = [
    _hoisted_24$1
  ];
  function render6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_15$1, _hoisted_34$1);
  }
  VtErrorIcon_default.render = render6;
  var VtErrorIcon_default2 = VtErrorIcon_default;
  var VtIcon_default = vue.defineComponent({
    name: "VtIcon",
    props: propValidators_default.ICON,
    computed: {
      customIconChildren() {
        return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
      },
      customIconClass() {
        if (isString(this.customIcon)) {
          return this.trimValue(this.customIcon);
        } else if (hasProp(this.customIcon, "iconClass")) {
          return this.trimValue(this.customIcon.iconClass);
        }
        return "";
      },
      customIconTag() {
        if (hasProp(this.customIcon, "iconTag")) {
          return this.trimValue(this.customIcon.iconTag, "i");
        }
        return "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        if (this.hasCustomIcon) {
          return this.customIconTag;
        }
        if (isToastContent(this.customIcon)) {
          return getVueComponentFromObj(this.customIcon);
        }
        return this.iconTypeComponent;
      },
      iconTypeComponent() {
        const types = {
          [TYPE.DEFAULT]: VtInfoIcon_default2,
          [TYPE.INFO]: VtInfoIcon_default2,
          [TYPE.SUCCESS]: VtSuccessIcon_default2,
          [TYPE.ERROR]: VtErrorIcon_default2,
          [TYPE.WARNING]: VtWarningIcon_default2
        };
        return types[this.type];
      },
      iconClasses() {
        const classes = [`${VT_NAMESPACE}__icon`];
        if (this.hasCustomIcon) {
          return classes.concat(this.customIconClass);
        }
        return classes;
      }
    },
    methods: {
      trimValue(value, empty = "") {
        return isNonEmptyString(value) ? value.trim() : empty;
      }
    }
  });
  function render7(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.component), {
      class: vue.normalizeClass(_ctx.iconClasses)
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.customIconChildren), 1)
      ]),
      _: 1
    }, 8, ["class"]);
  }
  VtIcon_default.render = render7;
  var VtIcon_default2 = VtIcon_default;
  var VtToast_default = vue.defineComponent({
    name: "VtToast",
    components: { ProgressBar: VtProgressBar_default2, CloseButton: VtCloseButton_default2, Icon: VtIcon_default2 },
    inheritAttrs: false,
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
    data() {
      const data = {
        isRunning: true,
        disableTransitions: false,
        beingDragged: false,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {}
      };
      return data;
    },
    computed: {
      classes() {
        const classes = [
          `${VT_NAMESPACE}__toast`,
          `${VT_NAMESPACE}__toast--${this.type}`,
          `${this.position}`
        ].concat(this.toastClassName);
        if (this.disableTransitions) {
          classes.push("disable-transition");
        }
        if (this.rtl) {
          classes.push(`${VT_NAMESPACE}__toast--rtl`);
        }
        return classes;
      },
      bodyClasses() {
        const classes = [
          `${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`
        ].concat(this.bodyClassName);
        return classes;
      },
      draggableStyle() {
        if (this.dragStart === this.dragPos.x) {
          return {};
        } else if (this.beingDragged) {
          return {
            transform: `translateX(${this.dragDelta}px)`,
            opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
          };
        } else {
          return {
            transition: "transform 0.2s, opacity 0.2s",
            transform: "translateX(0)",
            opacity: 1
          };
        }
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        if (isDOMRect(this.dragRect)) {
          return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
        }
        return 0;
      }
    },
    mounted() {
      if (this.draggable) {
        this.draggableSetup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusSetup();
      }
    },
    beforeUnmount() {
      if (this.draggable) {
        this.draggableCleanup();
      }
      if (this.pauseOnFocusLoss) {
        this.focusCleanup();
      }
    },
    methods: {
      hasProp,
      getVueComponentFromObj,
      closeToast() {
        this.eventBus.emit(EVENTS.DISMISS, this.id);
      },
      clickHandler() {
        if (this.onClick) {
          this.onClick(this.closeToast);
        }
        if (this.closeOnClick) {
          if (!this.beingDragged || this.dragStart === this.dragPos.x) {
            this.closeToast();
          }
        }
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        if (this.pauseOnHover) {
          this.isRunning = false;
        }
      },
      hoverPlay() {
        if (this.pauseOnHover) {
          this.isRunning = true;
        }
      },
      focusPause() {
        this.isRunning = false;
      },
      focusPlay() {
        this.isRunning = true;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause);
        addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause);
        removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const element = this.$el;
        element.addEventListener("touchstart", this.onDragStart, {
          passive: true
        });
        element.addEventListener("mousedown", this.onDragStart);
        addEventListener("touchmove", this.onDragMove, { passive: false });
        addEventListener("mousemove", this.onDragMove);
        addEventListener("touchend", this.onDragEnd);
        addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const element = this.$el;
        element.removeEventListener("touchstart", this.onDragStart);
        element.removeEventListener("mousedown", this.onDragStart);
        removeEventListener("touchmove", this.onDragMove);
        removeEventListener("mousemove", this.onDragMove);
        removeEventListener("touchend", this.onDragEnd);
        removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(event) {
        this.beingDragged = true;
        this.dragPos = { x: getX(event), y: getY(event) };
        this.dragStart = getX(event);
        this.dragRect = this.$el.getBoundingClientRect();
      },
      onDragMove(event) {
        if (this.beingDragged) {
          event.preventDefault();
          if (this.isRunning) {
            this.isRunning = false;
          }
          this.dragPos = { x: getX(event), y: getY(event) };
        }
      },
      onDragEnd() {
        if (this.beingDragged) {
          if (Math.abs(this.dragDelta) >= this.removalDistance) {
            this.disableTransitions = true;
            this.$nextTick(() => this.closeToast());
          } else {
            setTimeout(() => {
              this.beingDragged = false;
              if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
                this.isRunning = false;
              } else {
                this.isRunning = true;
              }
            });
          }
        }
      }
    }
  });
  var _hoisted_16$1 = ["role"];
  function render8(_ctx, _cache) {
    const _component_Icon = vue.resolveComponent("Icon");
    const _component_CloseButton = vue.resolveComponent("CloseButton");
    const _component_ProgressBar = vue.resolveComponent("ProgressBar");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.classes),
      style: vue.normalizeStyle(_ctx.draggableStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
    }, [
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_Icon, {
        key: 0,
        "custom-icon": _ctx.icon,
        type: _ctx.type
      }, null, 8, ["custom-icon", "type"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        role: _ctx.accessibility.toastRole || "alert",
        class: vue.normalizeClass(_ctx.bodyClasses)
      }, [
        typeof _ctx.content === "string" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
        ], 2112)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.getVueComponentFromObj(_ctx.content)), vue.mergeProps({
          key: 1,
          "toast-id": _ctx.id
        }, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, vue.toHandlers(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))
      ], 10, _hoisted_16$1),
      !!_ctx.closeButton ? (vue.openBlock(), vue.createBlock(_component_CloseButton, {
        key: 1,
        component: _ctx.closeButton,
        "class-names": _ctx.closeButtonClassName,
        "show-on-hover": _ctx.showCloseButtonOnHover,
        "aria-label": _ctx.accessibility.closeButtonLabel,
        onClick: vue.withModifiers(_ctx.closeToast, ["stop"])
      }, null, 8, ["component", "class-names", "show-on-hover", "aria-label", "onClick"])) : vue.createCommentVNode("v-if", true),
      _ctx.timeout ? (vue.openBlock(), vue.createBlock(_component_ProgressBar, {
        key: 2,
        "is-running": _ctx.isRunning,
        "hide-progress-bar": _ctx.hideProgressBar,
        timeout: _ctx.timeout,
        onCloseToast: _ctx.timeoutHandler
      }, null, 8, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"])) : vue.createCommentVNode("v-if", true)
    ], 38);
  }
  VtToast_default.render = render8;
  var VtToast_default2 = VtToast_default;
  var VtTransition_default = vue.defineComponent({
    name: "VtTransition",
    props: propValidators_default.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp,
      leave(el) {
        if (el instanceof HTMLElement) {
          el.style.left = el.offsetLeft + "px";
          el.style.top = el.offsetTop + "px";
          el.style.width = getComputedStyle(el).width;
          el.style.position = "absolute";
        }
      }
    }
  });
  function render9(_ctx, _cache) {
    return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
      tag: "div",
      "enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
      "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
      "leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
      onLeave: _ctx.leave
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]);
  }
  VtTransition_default.render = render9;
  var VtTransition_default2 = VtTransition_default;
  var VtToastContainer_default = vue.defineComponent({
    name: "VueToastification",
    devtools: {
      hide: true
    },
    components: { Toast: VtToast_default2, VtTransition: VtTransition_default2 },
    props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
    data() {
      const data = {
        count: 0,
        positions: Object.values(POSITION),
        toasts: {},
        defaults: {}
      };
      return data;
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      }
    },
    beforeMount() {
      const events = this.eventBus;
      events.on(EVENTS.ADD, this.addToast);
      events.on(EVENTS.CLEAR, this.clearToasts);
      events.on(EVENTS.DISMISS, this.dismissToast);
      events.on(EVENTS.UPDATE, this.updateToast);
      events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
      this.defaults = this.$props;
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(container) {
        if (isFunction(container)) {
          container = await container();
        }
        removeElement(this.$el);
        container.appendChild(this.$el);
      },
      setToast(props) {
        if (!isUndefined(props.id)) {
          this.toasts[props.id] = props;
        }
      },
      addToast(params) {
        params.content = normalizeToastComponent(params.content);
        const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
        const toast2 = this.defaults.filterBeforeCreate(props, this.toastArray);
        toast2 && this.setToast(toast2);
      },
      dismissToast(id) {
        const toast2 = this.toasts[id];
        if (!isUndefined(toast2) && !isUndefined(toast2.onClose)) {
          toast2.onClose();
        }
        delete this.toasts[id];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((id) => {
          this.dismissToast(id);
        });
      },
      getPositionToasts(position) {
        const toasts = this.filteredToasts.filter((toast2) => toast2.position === position).slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? toasts.reverse() : toasts;
      },
      updateDefaults(update) {
        if (!isUndefined(update.container)) {
          this.setup(update.container);
        }
        this.defaults = Object.assign({}, this.defaults, update);
      },
      updateToast({
        id,
        options,
        create
      }) {
        if (this.toasts[id]) {
          if (options.timeout && options.timeout === this.toasts[id].timeout) {
            options.timeout++;
          }
          this.setToast(Object.assign({}, this.toasts[id], options));
        } else if (create) {
          this.addToast(Object.assign({}, { id }, options));
        }
      },
      getClasses(position) {
        const classes = [`${VT_NAMESPACE}__container`, position];
        return classes.concat(this.defaults.containerClassName);
      }
    }
  });
  function render10(_ctx, _cache) {
    const _component_Toast = vue.resolveComponent("Toast");
    const _component_VtTransition = vue.resolveComponent("VtTransition");
    return vue.openBlock(), vue.createElementBlock("div", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.positions, (pos) => {
        return vue.openBlock(), vue.createElementBlock("div", { key: pos }, [
          vue.createVNode(_component_VtTransition, {
            transition: _ctx.defaults.transition,
            class: vue.normalizeClass(_ctx.getClasses(pos))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.getPositionToasts(pos), (toast2) => {
                return vue.openBlock(), vue.createBlock(_component_Toast, vue.mergeProps({
                  key: toast2.id
                }, toast2), null, 16);
              }), 128))
            ]),
            _: 2
          }, 1032, ["transition", "class"])
        ]);
      }), 128))
    ]);
  }
  VtToastContainer_default.render = render10;
  var VtToastContainer_default2 = VtToastContainer_default;
  var buildInterface = (globalOptions = {}, mountContainer = true) => {
    const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();
    if (mountContainer) {
      vue.nextTick(() => {
        const app2 = vue.createApp(VtToastContainer_default2, __spreadValues({}, globalOptions));
        const component = app2.mount(document.createElement("div"));
        const onMounted2 = globalOptions.onMounted;
        if (!isUndefined(onMounted2)) {
          onMounted2(component, app2);
        }
        if (globalOptions.shareAppContext) {
          const baseApp = globalOptions.shareAppContext;
          if (baseApp === true) {
            console.warn(`[${VT_NAMESPACE}] App to share context with was not provided.`);
          } else {
            app2._context.components = baseApp._context.components;
            app2._context.directives = baseApp._context.directives;
            app2._context.mixins = baseApp._context.mixins;
            app2._context.provides = baseApp._context.provides;
            app2.config.globalProperties = baseApp.config.globalProperties;
          }
        }
      });
    }
    const toast2 = (content, options) => {
      const props = Object.assign({}, { id: getId(), type: TYPE.DEFAULT }, options, {
        content
      });
      events.emit(EVENTS.ADD, props);
      return props.id;
    };
    toast2.clear = () => events.emit(EVENTS.CLEAR, void 0);
    toast2.updateDefaults = (update) => {
      events.emit(EVENTS.UPDATE_DEFAULTS, update);
    };
    toast2.dismiss = (id) => {
      events.emit(EVENTS.DISMISS, id);
    };
    function updateToast(id, { content, options }, create = false) {
      const opt = Object.assign({}, options, { content });
      events.emit(EVENTS.UPDATE, {
        id,
        options: opt,
        create
      });
    }
    toast2.update = updateToast;
    toast2.success = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.SUCCESS }));
    toast2.info = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.INFO }));
    toast2.error = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.ERROR }));
    toast2.warning = (content, options) => toast2(content, Object.assign({}, options, { type: TYPE.WARNING }));
    return toast2;
  };
  var createMockToastInterface = () => {
    const toast2 = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
    return new Proxy(toast2, {
      get() {
        return toast2;
      }
    });
  };
  function createToastInterface(optionsOrEventBus) {
    if (!isBrowser()) {
      return createMockToastInterface();
    }
    if (isEventBusInterface(optionsOrEventBus)) {
      return buildInterface({ eventBus: optionsOrEventBus }, false);
    }
    return buildInterface(optionsOrEventBus, true);
  }
  var toastInjectionKey = Symbol("VueToastification");
  var globalEventBus = new EventBus();
  var VueToastificationPlugin = (App, options) => {
    if ((options == null ? void 0 : options.shareAppContext) === true) {
      options.shareAppContext = App;
    }
    const inter = createToastInterface(__spreadValues({
      eventBus: globalEventBus
    }, options));
    App.provide(toastInjectionKey, inter);
  };
  var useToast = (eventBus) => {
    if (eventBus) {
      return createToastInterface(eventBus);
    }
    const toast2 = vue.getCurrentInstance() ? vue.inject(toastInjectionKey, void 0) : void 0;
    return toast2 ? toast2 : createToastInterface(globalEventBus);
  };
  var src_default = VueToastificationPlugin;
  var _GM = /* @__PURE__ */ (() => typeof GM != "undefined" ? GM : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var GMKey = /* @__PURE__ */ ((GMKey2) => {
    GMKey2["InfiniteScroll"] = "InfiniteScroll";
    GMKey2["ScrollByRow"] = "ScrollByRow";
    GMKey2["BetterPopup"] = "BetterPopup";
    GMKey2["QuickDownloadMethod"] = "QuickDownloadMethod";
    GMKey2["LoadAllGalleryImages"] = "LoadAllGalleryImages";
    GMKey2["MultipageViewerEnhancer"] = "MultipageViewerEnhancer";
    GMKey2["AutoRedirect"] = "AutoRedirect";
    GMKey2["PreventImageRemoval"] = "PreventImageRemoval";
    GMKey2["ShowJapaneseTitle"] = "ShowJapaneseTitle";
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
      _GM.setValue(this._key, this._value);
    }
    async initialize() {
      this._value = await _GM.getValue(this._key, this._value);
    }
  }
  const infiniteScrollSwitch = vue.reactive(new GMVariable(GMKey.InfiniteScroll, true));
  const scrollByRowSwitch = vue.reactive(new GMVariable(GMKey.ScrollByRow, true));
  const betterPopupSwitch = vue.reactive(new GMVariable(GMKey.BetterPopup, true));
  const quickDownloadMethod = vue.reactive(new GMVariable(GMKey.QuickDownloadMethod, DownloadMethod.Manual));
  const loadAllGalleryImagesSwitch = vue.reactive(new GMVariable(GMKey.LoadAllGalleryImages, true));
  const multipageViewerEnhancerSwitch = vue.reactive(new GMVariable(GMKey.MultipageViewerEnhancer, true));
  const autoRedirectSwitch = vue.reactive(new GMVariable(GMKey.AutoRedirect, false));
  const preventImageRemovalSwitch = vue.reactive(new GMVariable(GMKey.PreventImageRemoval, false));
  const showJapaneseTitle = vue.reactive(new GMVariable(GMKey.ShowJapaneseTitle, true));
  async function initializeMonkeySwitches() {
    await Promise.all([
      infiniteScrollSwitch.initialize(),
      scrollByRowSwitch.initialize(),
      betterPopupSwitch.initialize(),
      quickDownloadMethod.initialize(),
      loadAllGalleryImagesSwitch.initialize(),
      multipageViewerEnhancerSwitch.initialize(),
      preventImageRemovalSwitch.initialize(),
      autoRedirectSwitch.initialize(),
      showJapaneseTitle.initialize()
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
        } else if (Math.sign(event.deltaY) === -1 && boundingTop >= -1) {
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
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
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
        var _a2, _b;
        const galleryContainer = getElement(".itg.gld");
        const bottomPagination = (_a2 = getElements(".searchnav")) == null ? void 0 : _a2[1];
        let nextPageUrl = (_b = getElement("#dnext")) == null ? void 0 : _b.getAttribute("href");
        let isFetching = false;
        const intersectionObserver = new IntersectionObserver(async ([bottomPagination2]) => {
          var _a3;
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
          nextPageUrl = (_a3 = getElement("#dnext", doc)) == null ? void 0 : _a3.getAttribute("href");
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
  function useElements$1() {
    const infoDiv = getElement(".gm");
    const archiveLinkAnchor2 = getElement("#gd5 > p:nth-child(2) a");
    const torrentLinkAnchor2 = getElement("#gd5 > p:nth-child(3) a");
    const favoritesLinkAnchor = getElement("#favoritelink");
    const favoritesLinkDiv = getElement("#gdf");
    return {
      infoDiv,
      archiveLinkAnchor: archiveLinkAnchor2,
      torrentLinkAnchor: torrentLinkAnchor2,
      favoritesLinkAnchor,
      favoritesLinkDiv
    };
  }
  const torrentInnerHtml = vue.ref("");
  const archiveInnerHtml = vue.ref("");
  const favoritesInnerHtml = vue.ref("");
  const {
    archiveLinkAnchor,
    torrentLinkAnchor
  } = useElements$1();
  function usePreloadLinks() {
    return {
      torrentInnerHtml,
      archiveInnerHtml,
      favoritesInnerHtml
    };
  }
  async function preloadLinks() {
    [
      archiveInnerHtml.value,
      torrentInnerHtml.value,
      favoritesInnerHtml.value
    ] = await Promise.all([
      preloadArchiveLink(),
      preloadTorrentLink(),
      preloadFavoritesLink()
    ]);
  }
  async function preloadTorrentLink() {
    const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Torrent");
    logger.log("Start");
    const link = getDownloadLink(torrentLinkAnchor);
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
    const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Archive");
    logger.log("Start");
    const link = getDownloadLink(archiveLinkAnchor);
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
  async function preloadFavoritesLink() {
    const logger = new LoggerScopeDecorator(new Logger("Preload Links"), "Favorites");
    logger.log("Start");
    const link = getFavoritesLink();
    if (!link) {
      logger.error("link not found.");
      return "";
    }
    const doc = await getDoc(link);
    const popupContent = getPopupContent(doc, ".stuffbox");
    if (!popupContent) {
      logger.error("popup content not found.");
      return "";
    }
    logger.log("End");
    return popupContent.innerHTML;
  }
  function getDownloadLink(linkElement) {
    var _a2;
    const onClick = linkElement.getAttribute("onclick");
    if (!onClick) {
      return null;
    }
    return (_a2 = onClick.match(/(https:\/\/\S+)',\d+,\d+/)) == null ? void 0 : _a2[1];
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
  function getFavoritesLink() {
    return `${location.origin}/gallerypopups.php?gid=${getGID()}&t=${getGalleryVersion()}&act=addfav`;
  }
  function getGID() {
    return location.pathname.split("/")[2];
  }
  function getGalleryVersion() {
    return location.pathname.split("/")[3];
  }
  function usePosition() {
    const { archiveLinkAnchor: archiveLinkAnchor2, torrentLinkAnchor: torrentLinkAnchor2, favoritesLinkAnchor, infoDiv } = useElements$1();
    function getDownloadPopupRight() {
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
    function getFavoritesPosition() {
      const { top, height, left } = favoritesLinkAnchor.getBoundingClientRect();
      return {
        top: `${top + height + window.scrollY + 5}px`,
        left: `${left}px`
      };
    }
    return {
      archive: {
        top: `${getArchiveTop()}px`,
        right: `${getDownloadPopupRight()}px`
      },
      torrent: {
        top: `${getTorrentTop()}px`,
        right: `${getDownloadPopupRight()}px`
      },
      favorites: getFavoritesPosition()
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
      var _a2;
      return ((_a2 = getElement(".ptds")) == null ? void 0 : _a2.innerText) === "1";
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
      var _a2;
      (_a2 = getElement("#gdt > .c")) == null ? void 0 : _a2.before(...elements);
    }
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function toValue(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  const toString = Object.prototype.toString;
  const isObject$1 = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  const isIOS = /* @__PURE__ */ getIsIOS();
  function getIsIOS() {
    var _a2;
    return isClient && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
  }
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
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
    return { isActive: vue.readonly(isActive), pause, resume, eventFilter };
  }
  function objectEntries(obj) {
    return Object.entries(obj);
  }
  function watchWithFilter(source, cb, options = {}) {
    const {
      eventFilter = bypassFilter,
      ...watchOptions
    } = options;
    return vue.watch(
      source,
      createFilterWrapper(
        eventFilter,
        cb
      ),
      watchOptions
    );
  }
  function watchPausable(source, cb, options = {}) {
    const {
      eventFilter: filter,
      ...watchOptions
    } = options;
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(
      source,
      cb,
      {
        ...watchOptions,
        eventFilter
      }
    );
    return { stop, pause, resume, isActive };
  }
  function unrefElement(elRef) {
    var _a2;
    const plain = toValue(elRef);
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  const defaultDocument = isClient ? window.document : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
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
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = vue.watch(
      () => [unrefElement(target), toValue(options)],
      ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        const optionsClone = isObject$1(options2) ? { ...options2 } : options2;
        cleanups.push(
          ...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, optionsClone));
          })
        );
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  let _iOSWorkaround = false;
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window2)
      return;
    if (isIOS && !_iOSWorkaround) {
      _iOSWorkaround = true;
      Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
      window2.document.documentElement.addEventListener("click", noop);
    }
    let shouldListen = true;
    const shouldIgnore = (event) => {
      return ignore.some((target2) => {
        if (typeof target2 === "string") {
          return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
        } else {
          const el = unrefElement(target2);
          return el && (event.target === el || event.composedPath().includes(el));
        }
      });
    };
    const listener = (event) => {
      const el = unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el))
        return;
      if (event.detail === 0)
        shouldListen = !shouldIgnore(event);
      if (!shouldListen) {
        shouldListen = true;
        return;
      }
      handler(event);
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e) => {
        const el = unrefElement(target);
        if (el)
          shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        setTimeout(() => {
          var _a2;
          const el = unrefElement(target);
          if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
            handler(event);
        }, 0);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  function useMounted() {
    const isMounted = vue.ref(false);
    if (vue.getCurrentInstance()) {
      vue.onMounted(() => {
        isMounted.value = true;
      });
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return vue.computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  const WRITABLE_PROPERTIES = [
    "hash",
    "host",
    "hostname",
    "href",
    "pathname",
    "port",
    "protocol",
    "search"
  ];
  function useBrowserLocation(options = {}) {
    const { window: window2 = defaultWindow } = options;
    const refs = Object.fromEntries(
      WRITABLE_PROPERTIES.map((key) => [key, vue.ref()])
    );
    for (const [key, ref2] of objectEntries(refs)) {
      vue.watch(ref2, (value) => {
        if (!(window2 == null ? void 0 : window2.location) || window2.location[key] === value)
          return;
        window2.location[key] = value;
      });
    }
    const buildState = (trigger) => {
      var _a2;
      const { state: state2, length } = (window2 == null ? void 0 : window2.history) || {};
      const { origin } = (window2 == null ? void 0 : window2.location) || {};
      for (const key of WRITABLE_PROPERTIES)
        refs[key].value = (_a2 = window2 == null ? void 0 : window2.location) == null ? void 0 : _a2[key];
      return vue.reactive({
        trigger,
        state: state2,
        length,
        origin,
        ...refs
      });
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
  const handlers = /* @__PURE__ */ getHandlers();
  function getHandlers() {
    if (!(globalKey in _global))
      _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
  }
  function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
  }
  function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  }
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
  const customStorageEventName = "vueuse-storage";
  function useStorage(key, defaults, storage, options = {}) {
    var _a2;
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
    const rawInit = toValue(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
      data,
      () => write(data.value),
      { flush, deep, eventFilter }
    );
    if (window2 && listenToStorageChanges) {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
    }
    update();
    return data;
    function write(v) {
      try {
        if (v == null) {
          storage.removeItem(key);
        } else {
          const serialized = serializer.write(v);
          const oldValue = storage.getItem(key);
          if (oldValue !== serialized) {
            storage.setItem(key, serialized);
            if (window2) {
              window2.dispatchEvent(new CustomEvent(customStorageEventName, {
                detail: {
                  key,
                  oldValue,
                  newValue: serialized,
                  storageArea: storage
                }
              }));
            }
          }
        }
      } catch (e) {
        onError(e);
      }
    }
    function read(event) {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (typeof mergeDefaults === "function")
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return { ...rawInit, ...value };
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    }
    function updateFromCustomEvent(event) {
      update(event.detail);
    }
    function update(event) {
      if (event && event.storageArea !== storage)
        return;
      if (event && event.key == null) {
        data.value = rawInit;
        return;
      }
      if (event && event.key !== key)
        return;
      pauseWatch();
      try {
        if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
          data.value = read(event);
      } catch (e) {
        onError(e);
      } finally {
        if (event)
          vue.nextTick(resumeWatch);
        else
          resumeWatch();
      }
    }
  }
  const eventHandlers = [
    "fullscreenchange",
    "webkitfullscreenchange",
    "webkitendfullscreen",
    "mozfullscreenchange",
    "MSFullscreenChange"
  ];
  function useFullscreen(target, options = {}) {
    const {
      document: document2 = defaultDocument,
      autoExit = false
    } = options;
    const targetRef = vue.computed(() => {
      var _a2;
      return (_a2 = unrefElement(target)) != null ? _a2 : document2 == null ? void 0 : document2.querySelector("html");
    });
    const isFullscreen = vue.ref(false);
    const requestMethod = vue.computed(() => {
      return [
        "requestFullscreen",
        "webkitRequestFullscreen",
        "webkitEnterFullscreen",
        "webkitEnterFullScreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen"
      ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
    });
    const exitMethod = vue.computed(() => {
      return [
        "exitFullscreen",
        "webkitExitFullscreen",
        "webkitExitFullScreen",
        "webkitCancelFullScreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
      ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
    });
    const fullscreenEnabled = vue.computed(() => {
      return [
        "fullScreen",
        "webkitIsFullScreen",
        "webkitDisplayingFullscreen",
        "mozFullScreen",
        "msFullscreenElement"
      ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
    });
    const fullscreenElementMethod = [
      "fullscreenElement",
      "webkitFullscreenElement",
      "mozFullScreenElement",
      "msFullscreenElement"
    ].find((m) => document2 && m in document2);
    const isSupported = useSupported(() => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
    const isCurrentElementFullScreen = () => {
      if (fullscreenElementMethod)
        return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
      return false;
    };
    const isElementFullScreen = () => {
      if (fullscreenEnabled.value) {
        if (document2 && document2[fullscreenEnabled.value] != null) {
          return document2[fullscreenEnabled.value];
        } else {
          const target2 = targetRef.value;
          if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
            return Boolean(target2[fullscreenEnabled.value]);
          }
        }
      }
      return false;
    };
    async function exit() {
      if (!isSupported.value || !isFullscreen.value)
        return;
      if (exitMethod.value) {
        if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
          await document2[exitMethod.value]();
        } else {
          const target2 = targetRef.value;
          if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
            await target2[exitMethod.value]();
        }
      }
      isFullscreen.value = false;
    }
    async function enter() {
      if (!isSupported.value || isFullscreen.value)
        return;
      if (isElementFullScreen())
        await exit();
      const target2 = targetRef.value;
      if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
        await target2[requestMethod.value]();
        isFullscreen.value = true;
      }
    }
    async function toggle() {
      await (isFullscreen.value ? exit() : enter());
    }
    const handlerCallback = () => {
      const isElementFullScreenValue = isElementFullScreen();
      if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
        isFullscreen.value = isElementFullScreenValue;
    };
    useEventListener(document2, eventHandlers, handlerCallback, false);
    useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
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
  const _hoisted_1$8 = ["innerHTML"];
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupTorrent",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const { torrentLinkAnchor: torrentLinkAnchor2 } = useElements$1();
      const isShow = vue.ref(false);
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
          var _a2;
          event.preventDefault();
          (_a2 = getElement("a", popup.value)) == null ? void 0 : _a2.click();
        });
      }
      function setToggleEvent() {
        torrentLinkAnchor2.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          isShow.value = !isShow.value;
        });
        onClickOutside(popup, (event) => {
          if (event.target === torrentLinkAnchor2) {
            return;
          }
          isShow.value = false;
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$8), [
              [vue.vShow, isShow.value]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PopupTorrent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-0f43299d"]]);
  const toast = useToast();
  function useDownloadEvent() {
    function setHentaiAtHomeEvent() {
      var _a2, _b, _c;
      const logger = new Logger("Hentai At Home Event");
      const hentaiAtHomeLinks = getElements(".popup--archive table td a");
      if (!(hentaiAtHomeLinks == null ? void 0 : hentaiAtHomeLinks.length)) {
        logger.error("hentai@Home Links not found.");
        return;
      }
      const postUrl = (_a2 = getElement("#hathdl_form")) == null ? void 0 : _a2.getAttribute("action");
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
          var _a2;
          event.preventDefault();
          const form = (_a2 = button == null ? void 0 : button.parentElement) == null ? void 0 : _a2.parentElement;
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
  const _hoisted_1$7 = ["innerHTML"];
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupArchive",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const toast2 = useToast();
      const { archiveLinkAnchor: archiveLinkAnchor2 } = useElements$1();
      const { setHentaiAtHomeEvent, setDirectDownloadEvent } = useDownloadEvent();
      const isShow = vue.ref(false);
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
          isShow.value = false;
        });
      });
      function setToggleEvent() {
        archiveLinkAnchor2.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          isShow.value = !isShow.value;
        });
      }
      function setQuickDownloadEvent() {
        archiveLinkAnchor2.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (!popup.value || isShow.value) {
            isShow.value = false;
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
                isShow.value = true;
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
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup popup--archive",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$7), [
              [vue.vShow, isShow.value]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupArchive = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6ae53e87"]]);
  const _hoisted_1$6 = ["innerHTML"];
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "PopupFavorites",
    props: {
      innerHTML: {
        type: String,
        required: true
      }
    },
    setup(__props) {
      const popup = vue.ref();
      const { favoritesLinkAnchor, favoritesLinkDiv } = useElements$1();
      const { favoritesInnerHtml: favoritesInnerHtml2 } = usePreloadLinks();
      const isShow = vue.ref(false);
      vue.onMounted(() => {
        favoritesLinkDiv.removeAttribute("onclick");
        favoritesLinkAnchor.classList.add("is-ready");
        setToggleEvent();
        setRequestEvents();
        onClickOutside(popup, (event) => {
          if (event.target === favoritesLinkAnchor) {
            return;
          }
          isShow.value = false;
        });
      });
      function setToggleEvent() {
        favoritesLinkAnchor.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          isShow.value = !isShow.value;
        });
      }
      function setRequestEvents() {
        var _a2, _b;
        const submitButton = (_a2 = popup.value) == null ? void 0 : _a2.querySelector("input[type=submit]");
        submitButton == null ? void 0 : submitButton.addEventListener("click", async (event) => {
          var _a3;
          event.preventDefault();
          const favoriteCategory = (_a3 = getElement("[name=favcat]:checked")) == null ? void 0 : _a3.value;
          await setFavorite(favoriteCategory);
        });
        const categoryOptions = (_b = popup.value) == null ? void 0 : _b.querySelectorAll("#galpop .nosel > div");
        if (categoryOptions == null ? void 0 : categoryOptions.length) {
          for (const option of categoryOptions) {
            option.addEventListener("dblclick", async (event) => {
              var _a3;
              event.preventDefault();
              console.log(123);
              const category = (_a3 = option.querySelector("[name=favcat]")) == null ? void 0 : _a3.value;
              await setFavorite(category);
            });
          }
        }
        _unsafeWindow.clicked_fav = () => null;
      }
      async function setFavorite(category) {
        var _a2, _b;
        const formData = new FormData();
        const favoriteNote = (_a2 = getElement("[name=favnote]")) == null ? void 0 : _a2.value;
        const apply = category === "favdel" ? "Apply Changes" : "Add to Favorites";
        formData.append("favcat", category);
        formData.append("favnote", favoriteNote);
        formData.append("apply", apply);
        formData.append("update", "1");
        const response = await fetch(getFavoritesLink(), {
          method: "POST",
          body: formData
        });
        const html = await response.text();
        const originalScript = (_b = html.match(/(if\(window\.opener\.document\.getElementById\("favoritelink"\)).*/)) == null ? void 0 : _b[0];
        const script = originalScript == null ? void 0 : originalScript.replaceAll(".opener", "");
        Function(script)();
        isShow.value = false;
        favoritesInnerHtml2.value = await preloadFavoritesLink();
        await vue.nextTick();
        setRequestEvents();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "popup",
              ref: popup,
              class: "popup",
              innerHTML: __props.innerHTML
            }, null, 8, _hoisted_1$6), [
              [vue.vShow, isShow.value]
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PopupFavorites = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f8bd8db2"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "GalleryEnhancer",
    setup(__props) {
      if (loadAllGalleryImagesSwitch.value) {
        fetchAllImages({ delayInMs: 1e3 });
      }
      const {
        archiveInnerHtml: archiveInnerHtml2,
        torrentInnerHtml: torrentInnerHtml2,
        favoritesInnerHtml: favoritesInnerHtml2
      } = usePreloadLinks();
      if (betterPopupSwitch.value) {
        preloadLinks();
      }
      if (scrollByRowSwitch.value) {
        useWheelStep({
          containerSelector: "#gdt",
          itemsSelector: ".gdtl"
        });
      }
      const {
        archive: archivePosition,
        torrent: torrentPosition,
        favorites: favoritesPosition
      } = usePosition();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(archiveInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupArchive, {
            key: 0,
            style: vue.normalizeStyle(vue.unref(archivePosition)),
            "inner-h-t-m-l": vue.unref(archiveInnerHtml2)
          }, null, 8, ["style", "inner-h-t-m-l"])) : vue.createCommentVNode("", true),
          vue.unref(torrentInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupTorrent, {
            key: 1,
            style: vue.normalizeStyle(vue.unref(torrentPosition)),
            "inner-h-t-m-l": vue.unref(torrentInnerHtml2)
          }, null, 8, ["style", "inner-h-t-m-l"])) : vue.createCommentVNode("", true),
          vue.unref(favoritesInnerHtml2) ? (vue.openBlock(), vue.createBlock(PopupFavorites, {
            key: 2,
            style: vue.normalizeStyle(vue.unref(favoritesPosition)),
            "inner-h-t-m-l": vue.unref(favoritesInnerHtml2)
          }, null, 8, ["style", "inner-h-t-m-l"])) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
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
  const currentPage$1 = vue.ref(Number((_a = location$1.value.hash) == null ? void 0 : _a.replace("#page", "")) || 1);
  function usePages() {
    const pageCount2 = _unsafeWindow.pagecount;
    function appendPageIndex() {
      const imageContainers = getElements(".mimg");
      const pageCount22 = imageContainers.length;
      const mutationObserver = new MutationObserver(([mutation]) => {
        const target = mutation.target;
        const index2 = target.id.split("image_")[1];
        const captionElement = getElement(".mbar > *:nth-child(3)", target);
        const captionText = captionElement == null ? void 0 : captionElement.innerText;
        if (!captionText || (captionText == null ? void 0 : captionText.includes(" ／ "))) {
          return;
        }
        captionElement.innerText = `${captionText}　-　${index2} ／ ${pageCount22}`;
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
        _unsafeWindow.preload_scroll_images();
      };
    }
    function getCurrentImage2() {
      return getElement(`img[id^=imgsrc_${currentPage$1.value}]`);
    }
    function syncCurrentImageOnScroll() {
      const imageContainers = getElements(".mimg");
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
            var _a2;
            (_a2 = entry.target) == null ? void 0 : _a2.dispatchEvent(new CustomEvent("reflow"));
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
              _unsafeWindow.action_reload(currentPage.value);
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
      setThumbsClickEvent();
      function setChangePageClickEvent() {
        const config = {
          click: goToNextPage,
          contextmenu: goToPrevPage
        };
        for (const [event, action] of Object.entries(config)) {
          paneImagesDiv.addEventListener(event, (event2) => {
            const target = event2.target;
            if (target.closest(".mbar")) {
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
      function setThumbsClickEvent() {
        paneThumbsDiv.addEventListener("click", (event) => {
          var _a2;
          const index2 = Number(
            (_a2 = event.target.closest("div")) == null ? void 0 : _a2.id.replace("thumb_", "")
          );
          currentPage.value = index2;
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
      const page = currentPage.value;
      document.body.addEventListener("reflow", () => {
        if (relativeToViewport) {
          setTimeout(() => {
            goToPage(page);
            setTimeout(() => {
              scrollToProperPosition(relativeToViewport);
            }, 0);
          }, 100);
        }
      }, {
        once: true
      });
      await toggle();
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
  const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "page-elevator__slash" }, "／", -1));
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
            var _a2;
            const relativeToViewport = getRelativeToViewport2();
            const isCtrlPressed = event.ctrlKey;
            if (isCtrlPressed) {
              const regex = /Numpad(?<index>[1-5])/;
              const matchResult = event.code.match(regex);
              if (!matchResult) {
                return;
              }
              const index2 = Number((_a2 = matchResult.groups) == null ? void 0 : _a2.index);
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
  const ImageResizer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-572fe08a"]]);
  const _hoisted_1$3 = ["innerHTML"];
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "MultiPageViewerEnhancer",
    setup(__props) {
      const {
        currentPage: currentPage2,
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
        var _a2;
        const originalFunctions = getElement("#bar3");
        const closeButton = originalFunctions.querySelector("img:first-child");
        if (!closeButton) {
          return "";
        }
        const link = document.createElement("a");
        link.href = window.location.origin + window.location.pathname.replace("mpv", "g");
        (_a2 = closeButton.parentNode) == null ? void 0 : _a2.insertBefore(link, closeButton);
        link.append(closeButton);
        return originalFunctions.innerHTML;
      }
      vue.onMounted(() => {
        vue.watch(() => preventImageRemovalSwitch.value, (value) => {
          if (!value) {
            return;
          }
          _unsafeWindow.preload_generic = Function("a", "b", "c", `
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
        vue.watch(currentPage2, (index2) => {
          var _a2;
          (_a2 = getElement(`#thumb_${index2}`)) == null ? void 0 : _a2.scrollIntoView({
            block: "center"
          });
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "enhancer-features",
          onWheel: _cache[0] || (_cache[0] = vue.withModifiers(
            //@ts-ignore
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
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
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
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValueProxy.value = $event),
            type: "checkbox",
            class: "switch__input"
          }, null, 512), [
            [vue.vModelCheckbox, modelValueProxy.value]
          ]),
          _hoisted_2$1
        ]);
      };
    }
  });
  const ToggleSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-894c8e09"]]);
  const _withScopeId = (n) => (vue.pushScopeId("data-v-ddd293d0"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "popup" };
  const _hoisted_2 = { class: "settings-panel" };
  const _hoisted_3 = { class: "settings-panel__inner" };
  const _hoisted_4 = { class: "settings-panel__section" };
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Common ", -1));
  const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_7 = { class: "settings" };
  const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Change page title to Japanese (effect on browser/tab title) ", -1));
  const _hoisted_9 = { class: "settings-panel__section" };
  const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Gallery Enhancer ", -1));
  const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_12 = { class: "settings" };
  const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Scroll by Row ", -1));
  const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "settings__notice" }, ' *sync with "Front Page Enhancer - Scroll by Row" ', -1));
  const _hoisted_15 = { class: "settings" };
  const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Better Popup ", -1));
  const _hoisted_17 = { class: "settings__intro" };
  const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", null, ' Action when clicking "Archive Download": ', -1));
  const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(' *Notice: If you had changed the Archiver Settings, you have to change it back to "Manual Select, Manual Start (Default)" in the setting page: '),
    /* @__PURE__ */ vue.createElementVNode("a", {
      target: "_blank",
      href: "https://e-hentai.org/uconfig.php",
      rel: "noreferrer noopener"
    }, " e-hentai "),
    /* @__PURE__ */ vue.createTextVNode(" , "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      target: "_blank",
      href: "https://exhentai.org/uconfig.php",
      rel: "noreferrer noopener"
    }, " exhentai ")
  ], -1));
  const _hoisted_20 = { class: "settings" };
  const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Load All Gallery Images ", -1));
  const _hoisted_22 = { class: "settings-panel__section" };
  const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Multi-Page Viewer Enhancer ", -1));
  const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_25 = { class: "settings" };
  const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Multi-Page Viewer Enhancer ", -1));
  const _hoisted_27 = { class: "settings" };
  const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Prevent Image Removal ", -1));
  const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "settings__intro" }, [
    /* @__PURE__ */ vue.createElementVNode("p", null, " The original script of exhentai would remove the images which are too far from your current scroll. "),
    /* @__PURE__ */ vue.createElementVNode("p", null, " So if you scroll back to the images that have been removed. It might be flashing because although your browser has cached the image but still have to re-render it. ")
  ], -1));
  const _hoisted_30 = { class: "settings" };
  const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Auto Redirect to Multi-Page Viewer ", -1));
  const _hoisted_32 = { class: "settings-panel__section" };
  const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h2", { class: "settings-panel__section-name" }, " Front Page Enhancer ", -1));
  const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("hr", null, null, -1));
  const _hoisted_35 = { class: "settings" };
  const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Infinite Scroll ", -1));
  const _hoisted_37 = { class: "settings" };
  const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", { class: "settings__name" }, " Scroll by Row ", -1));
  const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "settings__notice" }, ' *sync with "Gallery Enhancer - Scroll by Row" ', -1));
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "SettingsPanel",
    setup(__props) {
      const isShow = vue.ref(false);
      vue.onMounted(() => {
        _GM.registerMenuCommand("Open settings panel", () => isShow.value = !isShow.value);
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
                  vue.createElementVNode("div", _hoisted_3, [
                    vue.createElementVNode("section", _hoisted_4, [
                      _hoisted_5,
                      _hoisted_6,
                      vue.createElementVNode("div", _hoisted_7, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(showJapaneseTitle).value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(showJapaneseTitle).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_8
                      ])
                    ]),
                    vue.createElementVNode("section", _hoisted_9, [
                      _hoisted_10,
                      _hoisted_11,
                      vue.createElementVNode("div", _hoisted_12, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(scrollByRowSwitch).value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(scrollByRowSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_13,
                        _hoisted_14
                      ]),
                      vue.createElementVNode("div", _hoisted_15, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(betterPopupSwitch).value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(betterPopupSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_16,
                        vue.createElementVNode("div", _hoisted_17, [
                          _hoisted_18,
                          vue.withDirectives(vue.createElementVNode("select", {
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(quickDownloadMethod).value = $event)
                          }, [
                            vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Manual), 1),
                            vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).HaH_Original), 1),
                            vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).HaH_2400), 1),
                            vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Direct_Origin), 1),
                            vue.createElementVNode("option", null, vue.toDisplayString(vue.unref(DownloadMethod).Direct_Resample), 1)
                          ], 512), [
                            [vue.vModelSelect, vue.unref(quickDownloadMethod).value]
                          ]),
                          _hoisted_19
                        ])
                      ]),
                      vue.createElementVNode("div", _hoisted_20, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(loadAllGalleryImagesSwitch).value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(loadAllGalleryImagesSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_21
                      ])
                    ]),
                    vue.createElementVNode("section", _hoisted_22, [
                      _hoisted_23,
                      _hoisted_24,
                      vue.createElementVNode("div", _hoisted_25, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(multipageViewerEnhancerSwitch).value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(multipageViewerEnhancerSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_26
                      ]),
                      vue.createElementVNode("div", _hoisted_27, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(preventImageRemovalSwitch).value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(preventImageRemovalSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_28,
                        _hoisted_29
                      ]),
                      vue.createElementVNode("div", _hoisted_30, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(autoRedirectSwitch).value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.unref(autoRedirectSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_31
                      ])
                    ]),
                    vue.createElementVNode("section", _hoisted_32, [
                      _hoisted_33,
                      _hoisted_34,
                      vue.createElementVNode("div", _hoisted_35, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(infiniteScrollSwitch).value,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vue.unref(infiniteScrollSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_36
                      ]),
                      vue.createElementVNode("div", _hoisted_37, [
                        vue.createVNode(ToggleSwitch, {
                          modelValue: vue.unref(scrollByRowSwitch).value,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => vue.unref(scrollByRowSwitch).value = $event)
                        }, null, 8, ["modelValue"]),
                        _hoisted_38,
                        _hoisted_39
                      ])
                    ])
                  ]),
                  vue.createElementVNode("span", {
                    class: "settings-panel__close-button",
                    onClick: _cache[10] || (_cache[10] = ($event) => isShow.value = false)
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
  const SettingsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ddd293d0"]]);
  function getGalleryMetadataBody(id, token) {
    return JSON.stringify({
      "method": "gdata",
      "gidlist": [
        [id, token]
      ],
      "namespace": 1
    });
  }
  function getGalleryIDandToken() {
    var _a2;
    const groups = (_a2 = _unsafeWindow.location.pathname.match(/(mpv|g)\/(?<id>\d+)\/(?<token>\w+)/)) == null ? void 0 : _a2.groups;
    if (!groups) {
      return {
        id: null,
        token: null
      };
    }
    const { id, token } = groups;
    return {
      id: Number(id),
      token
    };
  }
  function fetchGalleryData() {
    const apiURL = "https://api.e-hentai.org/api.php";
    const { id, token } = getGalleryIDandToken();
    if (!id || !token) {
      return null;
    }
    return fetch(
      apiURL,
      {
        method: "POST",
        body: getGalleryMetadataBody(id, token)
      }
    ).then((response) => response.json());
  }
  async function changeTitleToJapanese() {
    const galleryData = await fetchGalleryData();
    if (galleryData) {
      const japaneseTitle = galleryData.gmetadata[0].title_jpn;
      if (japaneseTitle) {
        document.title = japaneseTitle;
      }
    }
  }
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const { href } = window.location;
      const { enhancer } = useEnhancer();
      const { redirectIfSinglePageViewer } = useRedirect();
      if (autoRedirectSwitch.value) {
        redirectIfSinglePageViewer();
      }
      if (showJapaneseTitle.value) {
        changeTitleToJapanese();
      }
      function useEnhancer() {
        const enhancer2 = vue.computed(() => {
          if (/https:\/\/e[-x]hentai\.org\/(watched|popular)?(\?.+)?$/.test(href) || /https:\/\/e[-x]hentai\.org\/(tag)\/\w+/.test(href)) {
            return _sfc_main$b;
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
          const isSinglePageViewer = /https:\/\/e[-x]hentai\.org\/s\/\w+\/\w+/.test(href);
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
  app.use(src_default, {
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

})(Vue);