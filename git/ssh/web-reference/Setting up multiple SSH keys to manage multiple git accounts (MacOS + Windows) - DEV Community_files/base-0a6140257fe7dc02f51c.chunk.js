(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{260:function(t,n,e){"use strict";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}function c(t,n){n&&n.setAttribute("aria-expanded","false"),t&&setTimeout((function(){t.classList.remove("showing")}),5)}function u(t,n,e){setTimeout((function(){document.activeElement!==e&&c(t,n)}),10)}function l(t,n){if(t&&n){var e=t.classList;if(e.contains("showing"))e.remove("showing"),n.setAttribute("aria-expanded","false");else{e.add("showing"),n.setAttribute("aria-expanded","true");var r=document.getElementById("first-nav-link");r&&setTimeout((function(){r.focus()}),100)}}}function s(){var t=document.body.dataset.leftNavState,n=void 0===t?"closed":t;document.body.dataset.leftNavState="open"===n?"closed":"open"}function d(t){var n=t.target;n.nextElementSibling.classList.remove("hidden"),n.classList.add("hidden")}function f(){return(f=a((function*(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return new Promise((function(n,e){var r=setTimeout((function(){clearInterval(o),e(new Error("Unable to resolve InstantClick"))}),t),o=setInterval((function(){"undefined"!==typeof InstantClick&&(clearTimeout(r),clearInterval(o),n(InstantClick))}))}))}))).apply(this,arguments)}function m(t,n){n.filter((function(t){return r(t,2)[1]})).forEach((function(n){var e=r(n,2),o=e[0],i=e[1];t===o?(i.blur(),i.classList.add("crayons-header__link--current")):i.classList.remove("crayons-header__link--current")}))}function v(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,n)||h(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){if(t){if("string"===typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function b(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?n(u):Promise.resolve(u).then(r,o)}function p(){return Object.entries({"notifications-index":document.getElementById("notifications-link"),"chat_channels-index":document.getElementById("connect-link"),"moderations-index":document.getElementById("moderation-link"),"stories-search":document.getElementById("search-link")})}e.r(n),window.showModal=function(){var t,n=(t=function*(t){var n=t.title,r=t.contentSelector,o=t.overlay,i=void 0!==o&&o,a=t.size,c=void 0===a?"s":a,u=y(yield Promise.all([e.e(4).then(e.bind(null,21)),e.e(7).then(e.bind(null,0))]),2),l=u[0].Modal,s=u[1],d=s.render,f=s.h,m=document.createElement("div");document.body.appendChild(m),d(f(l,{overlay:i,title:n,onClose:function(){d(null,m)},size:c},f("div",{dangerouslySetInnerHTML:{__html:document.querySelector(r).innerHTML}})),m)},function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){b(i,r,o,a,c,"next",t)}function c(t){b(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();var w=v(document.querySelectorAll(".js-hamburger-trigger, .hamburger a:not(.js-nav-more-trigger)")),E=v(document.getElementsByClassName("js-nav-more-trigger"));(function(){return f.apply(this,arguments)})().then((function(t){t.on("change",(function(){m(document.getElementById("page-content").dataset.currentPage,p())}))}));var I=document.getElementById("page-content").dataset.currentPage,k=document.getElementById("crayons-header__menu"),S=document.getElementById("member-menu-button");m(I,p()),function(t,n){t.forEach((function(t){t.addEventListener("click",s)})),n.forEach((function(t){t.addEventListener("click",d)}))}(w,E),function(t,n){if("DEV-Native-ios"===navigator.userAgent&&document.body.classList.add("dev-ios-native-body"),t){var e=t.classList;setTimeout((function(){c(t,n),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|DEV-Native-ios/i.test(navigator.userAgent)?(n.addEventListener("click",(function(e){l(t,n)})),window.InstantClick.on("change",(function(){t.classList.remove("showing")}))):(e.add("desktop"),n.addEventListener("click",(function(e){l(t,n)})),t.addEventListener("keyup",(function(t){"Escape"===t.key&&e.contains("showing")&&(e.remove("showing"),n.focus())})),document.getElementById("last-nav-link").addEventListener("blur",(function(e){u(t,n,document.getElementById("second-last-nav-link"))})),document.addEventListener("click",(function(e){t.contains(document.activeElement)||u(t,n,document.getElementById("first-nav-link"))})))}),10)}}(k,S)}},[[260,50]]]);
//# sourceMappingURL=base-0a6140257fe7dc02f51c.chunk.js.map