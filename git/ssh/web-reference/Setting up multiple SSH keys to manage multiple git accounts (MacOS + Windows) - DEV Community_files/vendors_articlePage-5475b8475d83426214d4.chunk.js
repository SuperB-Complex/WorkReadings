/*! For license information please see vendors~articlePage-5475b8475d83426214d4.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[85,7,86,87],{0:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return U})),n.d(t,"hydrate",(function(){return j})),n.d(t,"createElement",(function(){return d})),n.d(t,"h",(function(){return d})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return h})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return G})),n.d(t,"createContext",(function(){return R})),n.d(t,"toChildArray",(function(){return C})),n.d(t,"options",(function(){return r}));var r,o,i,u,c,a,_={},l=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o,i,u=arguments,c={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(u[i]);if(null!=n&&(c.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===c[i]&&(c[i]=e.defaultProps[i]);return v(e,c,r,o,null)}function v(e,t,n,o,i){var u={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++r.__v:i};return null!=r.vnode&&r.vnode(u),u}function h(){return{current:null}}function y(e){return e.children}function b(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!E.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||u)(E)}function E(){for(var e;E.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,o,i,u;e.__d&&(i=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=f({},o)).__v=o.__v+1,N(u,o,r,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?m(o):i,o.__h),A(n,o),o.__e!=i&&g(o)))}))}function w(e,t,n,r,o,i,u,c,a,s){var f,p,d,h,b,g,k,E=r&&r.__k||l,w=E.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(h=n.__k[f]=null==(h=t[f])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h?v(null,h,null,null,h):Array.isArray(h)?v(y,{children:h},null,null,null):h.__b>0?v(h.type,h.props,h.key,null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(d=E[f])||d&&h.key==d.key&&h.type===d.type)E[f]=void 0;else for(p=0;p<w;p++){if((d=E[p])&&h.key==d.key&&h.type===d.type){E[p]=void 0;break}d=null}N(e,h,d=d||_,o,i,u,c,a,s),b=h.__e,(p=h.ref)&&d.ref!=p&&(k||(k=[]),d.ref&&k.push(d.ref,null,h),k.push(p,h.__c||b,h)),null!=b?(null==g&&(g=b),"function"==typeof h.type&&null!=h.__k&&h.__k===d.__k?h.__d=a=S(h,a,e):a=O(e,h,d,E,b,a),s||"option"!==n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&d.__e==a&&a.parentNode!=e&&(a=m(d))}for(n.__e=g,f=w;f--;)null!=E[f]&&("function"==typeof n.type&&null!=E[f].__e&&E[f].__e==n.__d&&(n.__d=m(r,f+1)),L(E[f],E[f]));if(k)for(f=0;f<k.length;f++)H(k[f],k[++f],k[++f])}function S(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?S(o,t,n):O(n,o,o,e.__k,o.__e,t));return t}function C(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){C(e,t)})):t.push(e)),t}function O(e,t,n,r,o,i){var u,c,a;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(c=i,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function T(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function D(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||T(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||T(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?P:x,i):e.removeEventListener(t,i?P:x,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function x(e){this.l[e.type+!1](r.event?r.event(e):e)}function P(e){this.l[e.type+!0](r.event?r.event(e):e)}function N(e,t,n,o,i,u,c,a,_){var l,s,p,d,v,h,m,g,k,E,S,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(_=n.__h,a=t.__e=n.__e,t.__h=null,u=[a]),(l=r.__b)&&l(t);try{e:if("function"==typeof C){if(g=t.props,k=(l=C.contextType)&&o[l.__c],E=l?k?k.props.value:l.__:o,n.__c?m=(s=t.__c=n.__c).__=s.__E:("prototype"in C&&C.prototype.render?t.__c=s=new C(g,E):(t.__c=s=new b(g,E),s.constructor=C,s.render=I),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=E,s.__n=o,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=C.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=f({},s.__s)),f(s.__s,C.getDerivedStateFromProps(g,s.__s))),d=s.props,v=s.state,p)null==C.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,E),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,E)||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&c.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,E),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,v,h)}))}s.context=E,s.props=g,s.state=s.__s,(l=r.__r)&&l(t),s.__d=!1,s.__v=t,s.__P=e,l=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(o=f(f({},o),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(h=s.getSnapshotBeforeUpdate(d,v)),S=null!=l&&l.type===y&&null==l.key?l.props.children:l,w(e,Array.isArray(S)?S:[S],t,n,o,i,u,c,a,_),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),m&&(s.__E=s.__=null),s.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=F(n.__e,t,n,o,i,u,c,_);(l=r.diffed)&&l(t)}catch(e){t.__v=null,(_||null!=u)&&(t.__e=a,t.__h=!!_,u[u.indexOf(a)]=null),r.__e(e,t,n)}}function A(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function F(e,t,n,r,o,i,u,c){var a,s,f,d,v=n.props,h=t.props,y=t.type,b=0;if("svg"===y&&(o=!0),null!=i)for(;b<i.length;b++)if((a=i[b])&&(a===e||(y?a.localName==y:3==a.nodeType))){e=a,i[b]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,c=!1}if(null===y)v===h||c&&e.data===h||(e.data=h);else{if(i=i&&l.slice.call(e.childNodes),s=(v=n.props||_).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!c){if(null!=i)for(v={},d=0;d<e.attributes.length;d++)v[e.attributes[d].name]=e.attributes[d].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||D(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||D(e,i,t[i],n[i],r)}(e,h,v,o,c),f)t.__k=[];else if(b=t.props.children,w(e,Array.isArray(b)?b:[b],t,n,r,o&&"foreignObject"!==y,i,u,e.firstChild,c),null!=i)for(b=i.length;b--;)null!=i[b]&&p(i[b]);c||("value"in h&&void 0!==(b=h.value)&&(b!==e.value||"progress"===y&&!b)&&D(e,"value",b,v.value,!1),"checked"in h&&void 0!==(b=h.checked)&&b!==e.checked&&D(e,"checked",b,v.checked,!1))}return e}function H(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function L(e,t,n){var o,i,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||H(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&L(o[u],t,n);null!=i&&p(i)}function I(e,t,n){return this.constructor(e,n)}function U(e,t,n){var o,i,u;r.__&&r.__(e,t),i=(o="function"==typeof n)?null:n&&n.__k||t.__k,u=[],N(t,e=(!o&&n||t).__k=d(y,null,[e]),i||_,_,void 0!==t.ownerSVGElement,!o&&n?[n]:i?null:t.firstChild?l.slice.call(t.childNodes):null,u,!o&&n?n:i?i.__e:t.firstChild,o),A(u,e)}function j(e,t){U(e,t,j)}function G(e,t,n){var r,o,i,u=arguments,c=f({},e.props);for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(u[i]);return null!=n&&(c.children=n),v(e.type,c,r||e.key,o||e.ref,null)}function R(e,t){var n={__c:t="__cC"+a++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(k)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}r={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},o=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},b.prototype.render=y,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E.__r=0,a=0},1:function(e,t,n){e.exports=n(16)()},16:function(e,t,n){"use strict";var r=n(17);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},17:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return S}));var r,o,i,u=n(0),c=0,a=[],_=u.options.__b,l=u.options.__r,s=u.options.diffed,f=u.options.__c,p=u.options.unmount;function d(e,t){u.options.__h&&u.options.__h(o,e,c||t),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function v(e){return c=1,h(P,e)}function h(e,t,n){var i=d(r++,2);return i.t=e,i.__c||(i.__=[n?n(t):P(void 0,t),function(e){var t=i.t(i.__[0],e);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function y(e,t){var n=d(r++,3);!u.options.__s&&x(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function b(e,t){var n=d(r++,4);!u.options.__s&&x(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function m(e){return c=5,k((function(){return{current:e}}),[])}function g(e,t,n){c=6,b((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function k(e,t){var n=d(r++,7);return x(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function E(e,t){return c=8,k((function(){return e}),t)}function w(e){var t=o.context[e.__c],n=d(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function S(e,t){u.options.useDebugValue&&u.options.useDebugValue(t?t(e):e)}function C(){a.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(T),e.__H.__h.forEach(D),e.__H.__h=[]}catch(o){e.__H.__h=[],u.options.__e(o,e.__v)}})),a=[]}u.options.__b=function(e){o=null,_&&_(e)},u.options.__r=function(e){l&&l(e),r=0;var t=(o=e.__c).__H;t&&(t.__h.forEach(T),t.__h.forEach(D),t.__h=[])},u.options.diffed=function(e){s&&s(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==a.push(t)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),O&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);O&&(t=requestAnimationFrame(n))})(C)),o=void 0},u.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(T),e.__h=e.__h.filter((function(e){return!e.__||D(e)}))}catch(i){t.some((function(e){e.__h&&(e.__h=[])})),t=[],u.options.__e(i,e.__v)}})),f&&f(e,t)},u.options.unmount=function(e){p&&p(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(T)}catch(e){u.options.__e(e,t.__v)}};var O="function"==typeof requestAnimationFrame;function T(e){var t=o;"function"==typeof e.__c&&e.__c(),o=t}function D(e){var t=o;e.__c=e.__(),o=t}function x(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function P(e,t){return"function"==typeof t?t(e):t}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),u="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i));return t&&u.call(e,i)&&r.unshift(e),r=r.filter(n)},a=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},_=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},s=function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},f=function(e){return!(e.disabled||function(e){return l(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=u.call(e,"details>summary:first-of-type")?e.parentElement:e;if(u.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},p=function(e){return!(!f(e)||s(e)||a(e)<0)},d=o.concat("iframe").join(","),v=function(e){if(!e)throw new Error("No node provided");return!1!==u.call(e,d)&&f(e)};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b,m=(b=[],{activateTrap:function(e){if(b.length>0){var t=b[b.length-1];t!==e&&t.pause()}var n=b.indexOf(e);-1===n||b.splice(n,1),b.push(e)},deactivateTrap:function(e){var t=b.indexOf(e);-1!==t&&b.splice(t,1),b.length>0&&b[b.length-1].unpause()}}),g=function(e){return setTimeout(e,0)},k=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"===typeof e?e.apply(void 0,n):e},w=function(e,t){var n,o=document,i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),u={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},l=function(e){return u.containers.some((function(t){return t.contains(e)}))},s=function(e){var t=i[e];if(!t)return null;var n=t;if("string"===typeof t&&!(n=o.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"===typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},f=function(){var e;if(null!==s("initialFocus"))e=s("initialFocus");else if(l(o.activeElement))e=o.activeElement;else{var t=u.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},d=function(){if(u.tabbableGroups=u.containers.map((function(e){var t,n,r,o=(n=[],r=[],c(e,(t=t||{}).includeContainer,p).forEach((function(e,t){var o=a(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(_).map((function(e){return e.node})).concat(n));if(o.length>0)return{container:e,firstTabbableNode:o[0],lastTabbableNode:o[o.length-1]}})).filter((function(e){return!!e})),u.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},b=function e(t){t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),u.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(f()))},w=function(e){l(e.target)||(E(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate&&!v(e.target)}):E(i.allowOutsideClick,e)||e.preventDefault())},S=function(e){var t=l(e.target);t||e.target instanceof Document?t&&(u.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),b(u.mostRecentlyFocusedNode||f()))},C=function(e){if(!1!==i.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){d();var t=null;if(u.tabbableGroups.length>0)if(k(u.tabbableGroups,(function(t){return t.container.contains(e.target)}))<0)t=e.shiftKey?u.tabbableGroups[u.tabbableGroups.length-1].lastTabbableNode:u.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var n=k(u.tabbableGroups,(function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?u.tabbableGroups.length-1:n-1;t=u.tabbableGroups[r].lastTabbableNode}}else{var o=k(u.tabbableGroups,(function(t){var n=t.lastTabbableNode;return e.target===n}));if(o>=0){var i=o===u.tabbableGroups.length-1?0:o+1;t=u.tabbableGroups[i].firstTabbableNode}}else t=s("fallbackFocus");t&&(e.preventDefault(),b(t))}(e)},O=function(e){E(i.clickOutsideDeactivates,e)||l(e.target)||E(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},T=function(){if(u.active)return m.activateTrap(n),r=i.delayInitialFocus?g((function(){b(f())})):b(f()),o.addEventListener("focusin",S,!0),o.addEventListener("mousedown",w,{capture:!0,passive:!1}),o.addEventListener("touchstart",w,{capture:!0,passive:!1}),o.addEventListener("click",O,{capture:!0,passive:!1}),o.addEventListener("keydown",C,{capture:!0,passive:!1}),n},D=function(){if(u.active)return o.removeEventListener("focusin",S,!0),o.removeEventListener("mousedown",w,!0),o.removeEventListener("touchstart",w,!0),o.removeEventListener("click",O,!0),o.removeEventListener("keydown",C,!0),n};return(n={activate:function(e){if(u.active)return this;d(),u.active=!0,u.paused=!1,u.nodeFocusedBeforeActivation=o.activeElement;var t=e&&e.onActivate?e.onActivate:i.onActivate;return t&&t(),T(),this},deactivate:function(e){if(!u.active)return this;clearTimeout(r),D(),u.active=!1,u.paused=!1,m.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:i.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:i.returnFocusOnDeactivate)&&g((function(){var e;b((e=u.nodeFocusedBeforeActivation,s("setReturnFocus")||e))})),this},pause:function(){return u.paused||!u.active||(u.paused=!0,D()),this},unpause:function(){return u.paused&&u.active?(u.paused=!1,d(),T(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return u.containers=t.map((function(e){return"string"===typeof e?o.querySelector(e):e})),u.active&&d(),this}}).updateContainerElements(e),n}}}]);
//# sourceMappingURL=vendors~articlePage-5475b8475d83426214d4.chunk.js.map