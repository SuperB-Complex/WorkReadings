(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{131:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(9),i=t(51);function c(e,n,t,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void t(u)}a.done?n(s):Promise.resolve(s).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){c(i,r,o,a,s,"next",e)}function s(e){c(i,r,o,a,s,"throw",e)}a(void 0)}))}}var s=document.getElementsByClassName("js-fullscreen-code-action");s&&Object(i.a)(s);var u=document.getElementById("snack-zone");u&&Object(r.render)(Object(r.h)(o.a,{lifespan:"3"}),u),top.addSnackbarItem=o.b;var l=setInterval(a((function*(){var e=document.body.dataset,n=e.user,i=void 0===n?null:n,c=e.userStatus;if("logged-out"!==c){if("logged-in"===c&&null!==i){clearInterval(l);var s=document.getElementById("comment-subscription");try{var u=yield t.e(96).then(t.bind(null,268)),d=u.getCommentSubscriptionStatus,f=u.setCommentSubscriptionStatus,m=u.CommentSubscription,y=document.getElementById("article-body").dataset.articleId,v=(yield d(y)).config,b=function(){var e=a((function*(e){var n=yield f(y,e);Object(o.b)({message:n,addCloseButton:!0})}));return function(n){return e.apply(this,arguments)}}();Object(r.render)(Object(r.h)(m,{subscriptionType:v,positionType:"static",onSubscribe:b,onUnsubscribe:b}),s)}catch(p){document.getElementById("comment-subscription").innerHTML='<p className="color-accent-danger">Unable to load Comment Subscription component.<br />Try refreshing the page.</p>'}}}else clearInterval(l)})))},51:function(e,n,t){"use strict";function r(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,c=e},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw c}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return f}));var i=!1,c=0,a=document.getElementsByClassName("js-fullscreen-code")[0],s=document.body;function u(e){"Escape"==e.key&&m(e)}function l(e){e?document.body.addEventListener("keyup",u):document.body.removeEventListener("keyup",u)}function d(e){s.style.overflow=e?"hidden":""}function f(e){if(e){var n,t=r(e);try{for(t.s();!(n=t.n()).done;){n.value.addEventListener("click",m)}}catch(o){t.e(o)}finally{t.f()}}}function m(e){var n=e.currentTarget.closest(".js-code-highlight")?e.currentTarget.closest(".js-code-highlight").cloneNode(!0):null,t=n?n.getElementsByClassName("js-fullscreen-code-action"):null;i?(d(!1),window.scrollTo(0,c),l(!1),function(e){if(e){var n,t=r(e);try{for(t.s();!(n=t.n()).done;)n.value.removeEventListener("click",m)}catch(o){t.e(o)}finally{t.f()}}}(t),a.classList.remove("is-open"),a.removeChild(a.childNodes[0]),i=!1):(d(!0),c=window.scrollY,l(!0),n.classList.add("is-fullscreen"),a.appendChild(n),a.classList.add("is-open"),f(t),i=!0)}}},[[131,49,85,2]]]);
//# sourceMappingURL=articlePage-3846b4e4aef01f993551.chunk.js.map