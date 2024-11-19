function Rw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),Lw=Symbol.for("react.portal"),Nw=Symbol.for("react.fragment"),Aw=Symbol.for("react.strict_mode"),Dw=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Ow=Symbol.for("react.context"),Mw=Symbol.for("react.forward_ref"),Fw=Symbol.for("react.suspense"),$w=Symbol.for("react.memo"),Uw=Symbol.for("react.lazy"),A5=Symbol.iterator;function Vw(t){return t===null||typeof t!="object"?null:(t=A5&&t[A5]||t["@@iterator"],typeof t=="function"?t:null)}var w3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E3=Object.assign,C3={};function mo(t,e,n){this.props=t,this.context=e,this.refs=C3,this.updater=n||w3}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S3(){}S3.prototype=mo.prototype;function O1(t,e,n){this.props=t,this.context=e,this.refs=C3,this.updater=n||w3}var M1=O1.prototype=new S3;M1.constructor=O1;E3(M1,mo.prototype);M1.isPureReactComponent=!0;var D5=Array.isArray,T3=Object.prototype.hasOwnProperty,F1={current:null},I3={key:!0,ref:!0,__self:!0,__source:!0};function k3(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T3.call(e,r)&&!I3.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:F1.current}}function Bw(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $1(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function jw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var P5=/\/+/g;function Pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jw(""+t.key):e.toString(36)}function Mu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case Lw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pd(o,0):r,D5(i)?(n="",t!=null&&(n=t.replace(P5,"$&/")+"/"),Mu(i,e,n,"",function(u){return u})):i!=null&&($1(i)&&(i=Bw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(P5,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",D5(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pd(s,a);o+=Mu(s,e,n,l,i)}else if(l=Vw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pd(s,a++),o+=Mu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lu(t,e,n){if(t==null)return t;var r=[],i=0;return Mu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Fu={transition:null},Ww={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:F1};ae.Children={map:lu,forEach:function(t,e,n){lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lu(t,function(){e++}),e},toArray:function(t){return lu(t,function(e){return e})||[]},only:function(t){if(!$1(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=mo;ae.Fragment=Nw;ae.Profiler=Dw;ae.PureComponent=O1;ae.StrictMode=Aw;ae.Suspense=Fw;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ww;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E3({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=F1.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)T3.call(e,l)&&!I3.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Ow,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pw,_context:t},t.Consumer=t};ae.createElement=k3;ae.createFactory=function(t){var e=k3.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Mw,render:t}};ae.isValidElement=$1;ae.lazy=function(t){return{$$typeof:Uw,_payload:{_status:-1,_result:t},_init:zw}};ae.memo=function(t,e){return{$$typeof:$w,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return At.current.useCallback(t,e)};ae.useContext=function(t){return At.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ae.useEffect=function(t,e){return At.current.useEffect(t,e)};ae.useId=function(){return At.current.useId()};ae.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return At.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};ae.useRef=function(t){return At.current.useRef(t)};ae.useState=function(t){return At.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return At.current.useTransition()};ae.version="18.2.0";(function(t){t.exports=ae})(O);const x3=bw(O.exports),V0=Rw({__proto__:null,default:x3},[O.exports]);var B0={},R3={exports:{}},Zt={},b3={exports:{}},L3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,X){var K=A.length;A.push(X);e:for(;0<K;){var xe=K-1>>>1,Ue=A[xe];if(0<i(Ue,X))A[xe]=X,A[K]=Ue,K=xe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var X=A[0],K=A.pop();if(K!==X){A[0]=K;e:for(var xe=0,Ue=A.length,si=Ue>>>1;xe<si;){var Wn=2*(xe+1)-1,No=A[Wn],Hn=Wn+1,In=A[Hn];if(0>i(No,K))Hn<Ue&&0>i(In,No)?(A[xe]=In,A[Hn]=K,xe=Hn):(A[xe]=No,A[Wn]=K,xe=Wn);else if(Hn<Ue&&0>i(In,K))A[xe]=In,A[Hn]=K,xe=Hn;else break e}}return X}function i(A,X){var K=A.sortIndex-X.sortIndex;return K!==0?K:A.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,g=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=A)r(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function w(A){if(v=!1,_(A),!g)if(n(l)!==null)g=!0,$e(k);else{var X=n(u);X!==null&&zn(w,X.startTime-A)}}function k(A,X){g=!1,v&&(v=!1,m(M),M=-1),f=!0;var K=h;try{for(_(X),d=n(l);d!==null&&(!(d.expirationTime>X)||A&&!Fe());){var xe=d.callback;if(typeof xe=="function"){d.callback=null,h=d.priorityLevel;var Ue=xe(d.expirationTime<=X);X=t.unstable_now(),typeof Ue=="function"?d.callback=Ue:d===n(l)&&r(l),_(X)}else r(l);d=n(l)}if(d!==null)var si=!0;else{var Wn=n(u);Wn!==null&&zn(w,Wn.startTime-X),si=!1}return si}finally{d=null,h=K,f=!1}}var L=!1,N=null,M=-1,de=5,Q=-1;function Fe(){return!(t.unstable_now()-Q<de)}function jn(){if(N!==null){var A=t.unstable_now();Q=A;var X=!0;try{X=N(!0,A)}finally{X?ii():(L=!1,N=null)}}else L=!1}var ii;if(typeof p=="function")ii=function(){p(jn)};else if(typeof MessageChannel<"u"){var nu=new MessageChannel,kd=nu.port2;nu.port1.onmessage=jn,ii=function(){kd.postMessage(null)}}else ii=function(){E(jn,0)};function $e(A){N=A,L||(L=!0,ii())}function zn(A,X){M=E(function(){A(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,$e(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var K=h;h=X;try{return A()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,X){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var K=h;h=A;try{return X()}finally{h=K}},t.unstable_scheduleCallback=function(A,X,K){var xe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xe+K:xe):K=xe,A){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=K+Ue,A={id:c++,callback:X,priorityLevel:A,startTime:K,expirationTime:Ue,sortIndex:-1},K>xe?(A.sortIndex=K,e(u,A),n(l)===null&&A===n(u)&&(v?(m(M),M=-1):v=!0,zn(w,K-xe))):(A.sortIndex=Ue,e(l,A),g||f||(g=!0,$e(k))),A},t.unstable_shouldYield=Fe,t.unstable_wrapCallback=function(A){var X=h;return function(){var K=h;h=X;try{return A.apply(this,arguments)}finally{h=K}}}})(L3);(function(t){t.exports=L3})(b3);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=O.exports,Yt=b3.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A3=new Set,ka={};function Yi(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(ka[t]=e,t=0;t<e.length;t++)A3.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j0=Object.prototype.hasOwnProperty,Hw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O5={},M5={};function qw(t){return j0.call(M5,t)?!0:j0.call(O5,t)?!1:Hw.test(t)?M5[t]=!0:(O5[t]=!0,!1)}function Kw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gw(t,e,n,r){if(e===null||typeof e>"u"||Kw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var U1=/[\-:]([a-z])/g;function V1(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(U1,V1);ht[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(U1,V1);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(U1,V1);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function B1(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gw(e,n,i,r)&&(n=null),r||i===null?qw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),ds=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),z0=Symbol.for("react.profiler"),D3=Symbol.for("react.provider"),P3=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),H0=Symbol.for("react.suspense_list"),W1=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),O3=Symbol.for("react.offscreen"),F5=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=F5&&t[F5]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Od;function Qo(t){if(Od===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+t}var Md=!1;function Fd(t,e){if(!t||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function Qw(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Fd(t.type,!1),t;case 11:return t=Fd(t.type.render,!1),t;case 1:return t=Fd(t.type,!0),t;default:return""}}function q0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case ds:return"Portal";case z0:return"Profiler";case j1:return"StrictMode";case W0:return"Suspense";case H0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P3:return(t.displayName||"Context")+".Consumer";case D3:return(t._context.displayName||"Context")+".Provider";case z1:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W1:return e=t.displayName||null,e!==null?e:q0(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return q0(t(e))}catch{}}return null}function Yw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q0(e);case 8:return e===j1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M3(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xw(t){var e=M3(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){t._valueTracker||(t._valueTracker=Xw(t))}function F3(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=M3(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function K0(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function $5(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $3(t,e){e=e.checked,e!=null&&B1(t,"checked",e,!1)}function G0(t,e){$3(t,e);var n=Wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Q0(t,e.type,n):e.hasOwnProperty("defaultValue")&&Q0(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function U5(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Q0(t,e,n){(e!=="number"||sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function bs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Y0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V5(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Yo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function U3(t,e){var n=Wr(e.value),r=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function B5(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V3(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function X0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V3(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hu,B3=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hu=hu||document.createElement("div"),hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jw=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){Jw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function j3(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function z3(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j3(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zw=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function J0(t,e){if(e){if(Zw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Z0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ef=null;function H1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tf=null,Ls=null,Ns=null;function j5(t){if(t=wl(t)){if(typeof tf!="function")throw Error(I(280));var e=t.stateNode;e&&(e=wh(e),tf(t.stateNode,t.type,e))}}function W3(t){Ls?Ns?Ns.push(t):Ns=[t]:Ls=t}function H3(){if(Ls){var t=Ls,e=Ns;if(Ns=Ls=null,j5(t),e)for(t=0;t<e.length;t++)j5(e[t])}}function q3(t,e){return t(e)}function K3(){}var $d=!1;function G3(t,e,n){if($d)return t(e,n);$d=!0;try{return q3(t,e,n)}finally{$d=!1,(Ls!==null||Ns!==null)&&(K3(),H3())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var r=wh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var nf=!1;if(sr)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){nf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{nf=!1}function eE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var aa=!1,oc=null,ac=!1,rf=null,tE={onError:function(t){aa=!0,oc=t}};function nE(t,e,n,r,i,s,o,a,l){aa=!1,oc=null,eE.apply(tE,arguments)}function rE(t,e,n,r,i,s,o,a,l){if(nE.apply(this,arguments),aa){if(aa){var u=oc;aa=!1,oc=null}else throw Error(I(198));ac||(ac=!0,rf=u)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q3(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z5(t){if(Xi(t)!==t)throw Error(I(188))}function iE(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return z5(i),t;if(s===r)return z5(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Y3(t){return t=iE(t),t!==null?X3(t):null}function X3(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X3(t);if(e!==null)return e;t=t.sibling}return null}var J3=Yt.unstable_scheduleCallback,W5=Yt.unstable_cancelCallback,sE=Yt.unstable_shouldYield,oE=Yt.unstable_requestPaint,Oe=Yt.unstable_now,aE=Yt.unstable_getCurrentPriorityLevel,q1=Yt.unstable_ImmediatePriority,Z3=Yt.unstable_UserBlockingPriority,lc=Yt.unstable_NormalPriority,lE=Yt.unstable_LowPriority,e6=Yt.unstable_IdlePriority,gh=null,An=null;function uE(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(gh,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:dE,cE=Math.log,hE=Math.LN2;function dE(t){return t>>>=0,t===0?32:31-(cE(t)/hE|0)|0}var du=64,fu=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xo(a):(s&=o,s!==0&&(r=Xo(s)))}else o=n&~i,o!==0?r=Xo(o):s!==0&&(r=Xo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function fE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=fE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t6(){var t=du;return du<<=1,(du&4194240)===0&&(du=64),t}function Ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function mE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function K1(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function n6(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var r6,G1,i6,s6,o6,of=!1,pu=[],Ar=null,Dr=null,Pr=null,ba=new Map,La=new Map,Ir=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function H5(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&G1(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yE(t,e,n,r,i){switch(e){case"focusin":return Ar=Mo(Ar,t,e,n,r,i),!0;case"dragenter":return Dr=Mo(Dr,t,e,n,r,i),!0;case"mouseover":return Pr=Mo(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ba.set(s,Mo(ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,La.set(s,Mo(La.get(s)||null,t,e,n,r,i)),!0}return!1}function a6(t){var e=pi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=Q3(n),e!==null){t.blockedOn=e,o6(t.priority,function(){i6(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ef=r,n.target.dispatchEvent(r),ef=null}else return e=wl(n),e!==null&&G1(e),t.blockedOn=n,!1;e.shift()}return!0}function q5(t,e,n){$u(t)&&n.delete(e)}function vE(){of=!1,Ar!==null&&$u(Ar)&&(Ar=null),Dr!==null&&$u(Dr)&&(Dr=null),Pr!==null&&$u(Pr)&&(Pr=null),ba.forEach(q5),La.forEach(q5)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,of||(of=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,vE)))}function Na(t){function e(i){return Fo(i,t)}if(0<pu.length){Fo(pu[0],t);for(var n=1;n<pu.length;n++){var r=pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&Fo(Ar,t),Dr!==null&&Fo(Dr,t),Pr!==null&&Fo(Pr,t),ba.forEach(e),La.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)a6(n),n.blockedOn===null&&Ir.shift()}var As=mr.ReactCurrentBatchConfig,cc=!0;function _E(t,e,n,r){var i=ge,s=As.transition;As.transition=null;try{ge=1,Q1(t,e,n,r)}finally{ge=i,As.transition=s}}function wE(t,e,n,r){var i=ge,s=As.transition;As.transition=null;try{ge=4,Q1(t,e,n,r)}finally{ge=i,As.transition=s}}function Q1(t,e,n,r){if(cc){var i=af(t,e,n,r);if(i===null)Qd(t,e,r,hc,n),H5(t,r);else if(yE(i,t,e,n,r))r.stopPropagation();else if(H5(t,r),e&4&&-1<gE.indexOf(t)){for(;i!==null;){var s=wl(i);if(s!==null&&r6(s),s=af(t,e,n,r),s===null&&Qd(t,e,r,hc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qd(t,e,r,null,n)}}var hc=null;function af(t,e,n,r){if(hc=null,t=H1(r),t=pi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q3(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function l6(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aE()){case q1:return 1;case Z3:return 4;case lc:case lE:return 16;case e6:return 536870912;default:return 16}default:return 16}}var Lr=null,Y1=null,Uu=null;function u6(){if(Uu)return Uu;var t,e=Y1,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uu=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function K5(){return!1}function en(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:K5,this.isPropagationStopped=K5,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},X1=en(go),_l=Le({},go,{view:0,detail:0}),EE=en(_l),Vd,Bd,$o,yh=Le({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:J1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$o&&($o&&t.type==="mousemove"?(Vd=t.screenX-$o.screenX,Bd=t.screenY-$o.screenY):Bd=Vd=0,$o=t),Vd)},movementY:function(t){return"movementY"in t?t.movementY:Bd}}),G5=en(yh),CE=Le({},yh,{dataTransfer:0}),SE=en(CE),TE=Le({},_l,{relatedTarget:0}),jd=en(TE),IE=Le({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=en(IE),xE=Le({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RE=en(xE),bE=Le({},go,{data:0}),Q5=en(bE),LE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AE[t])?!!e[t]:!1}function J1(){return DE}var PE=Le({},_l,{key:function(t){if(t.key){var e=LE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:J1,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OE=en(PE),ME=Le({},yh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Y5=en(ME),FE=Le({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:J1}),$E=en(FE),UE=Le({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=en(UE),BE=Le({},yh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=en(BE),zE=[9,13,27,32],Z1=sr&&"CompositionEvent"in window,la=null;sr&&"documentMode"in document&&(la=document.documentMode);var WE=sr&&"TextEvent"in window&&!la,c6=sr&&(!Z1||la&&8<la&&11>=la),X5=String.fromCharCode(32),J5=!1;function h6(t,e){switch(t){case"keyup":return zE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d6(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function HE(t,e){switch(t){case"compositionend":return d6(e);case"keypress":return e.which!==32?null:(J5=!0,X5);case"textInput":return t=e.data,t===X5&&J5?null:t;default:return null}}function qE(t,e){if(ps)return t==="compositionend"||!Z1&&h6(t,e)?(t=u6(),Uu=Y1=Lr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c6&&e.locale!=="ko"?null:e.data;default:return null}}var KE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z5(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KE[t.type]:e==="textarea"}function f6(t,e,n,r){W3(r),e=dc(e,"onChange"),0<e.length&&(n=new X1("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,Aa=null;function GE(t){T6(t,0)}function vh(t){var e=ys(t);if(F3(e))return t}function QE(t,e){if(t==="change")return e}var p6=!1;if(sr){var zd;if(sr){var Wd="oninput"in document;if(!Wd){var e4=document.createElement("div");e4.setAttribute("oninput","return;"),Wd=typeof e4.oninput=="function"}zd=Wd}else zd=!1;p6=zd&&(!document.documentMode||9<document.documentMode)}function t4(){ua&&(ua.detachEvent("onpropertychange",m6),Aa=ua=null)}function m6(t){if(t.propertyName==="value"&&vh(Aa)){var e=[];f6(e,Aa,t,H1(t)),G3(GE,e)}}function YE(t,e,n){t==="focusin"?(t4(),ua=e,Aa=n,ua.attachEvent("onpropertychange",m6)):t==="focusout"&&t4()}function XE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vh(Aa)}function JE(t,e){if(t==="click")return vh(e)}function ZE(t,e){if(t==="input"||t==="change")return vh(e)}function eC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:eC;function Da(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!j0.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function n4(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function r4(t,e){var n=n4(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n4(n)}}function g6(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g6(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y6(){for(var t=window,e=sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sc(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tC(t){var e=y6(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g6(n.ownerDocument.documentElement,n)){if(r!==null&&ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=r4(n,s);var o=r4(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nC=sr&&"documentMode"in document&&11>=document.documentMode,ms=null,lf=null,ca=null,uf=!1;function i4(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uf||ms==null||ms!==sc(r)||(r=ms,"selectionStart"in r&&ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Da(ca,r)||(ca=r,r=dc(lf,"onSelect"),0<r.length&&(e=new X1("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}function gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Hd={},v6={};sr&&(v6=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function _h(t){if(Hd[t])return Hd[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v6)return Hd[t]=e[n];return t}var _6=_h("animationend"),w6=_h("animationiteration"),E6=_h("animationstart"),C6=_h("transitionend"),S6=new Map,s4="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){S6.set(t,e),Yi(e,[t])}for(var qd=0;qd<s4.length;qd++){var Kd=s4[qd],rC=Kd.toLowerCase(),iC=Kd[0].toUpperCase()+Kd.slice(1);Xr(rC,"on"+iC)}Xr(_6,"onAnimationEnd");Xr(w6,"onAnimationIteration");Xr(E6,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(C6,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function o4(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rE(r,e,void 0,t),t.currentTarget=null}function T6(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;o4(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;o4(i,a,u),s=l}}}if(ac)throw t=rf,ac=!1,rf=null,t}function Ee(t,e){var n=e[pf];n===void 0&&(n=e[pf]=new Set);var r=t+"__bubble";n.has(r)||(I6(e,t,2,!1),n.add(r))}function Gd(t,e,n){var r=0;e&&(r|=4),I6(n,t,r,e)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[yu]){t[yu]=!0,A3.forEach(function(n){n!=="selectionchange"&&(sC.has(n)||Gd(n,!1,t),Gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yu]||(e[yu]=!0,Gd("selectionchange",!1,e))}}function I6(t,e,n,r){switch(l6(e)){case 1:var i=_E;break;case 4:i=wE;break;default:i=Q1}n=i.bind(null,e,n,t),i=void 0,!nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}G3(function(){var u=s,c=H1(n),d=[];e:{var h=S6.get(t);if(h!==void 0){var f=X1,g=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":f=OE;break;case"focusin":g="focus",f=jd;break;case"focusout":g="blur",f=jd;break;case"beforeblur":case"afterblur":f=jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=G5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=$E;break;case _6:case w6:case E6:f=kE;break;case C6:f=VE;break;case"scroll":f=EE;break;case"wheel":f=jE;break;case"copy":case"cut":case"paste":f=RE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Y5}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,_;p!==null;){_=p;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,m!==null&&(w=Ra(p,m),w!=null&&v.push(Oa(p,w,_)))),E)break;p=p.return}0<v.length&&(h=new f(h,g,null,n,c),d.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==ef&&(g=n.relatedTarget||n.fromElement)&&(pi(g)||g[or]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?pi(g):null,g!==null&&(E=Xi(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(v=G5,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Y5,w="onPointerLeave",m="onPointerEnter",p="pointer"),E=f==null?h:ys(f),_=g==null?h:ys(g),h=new v(w,p+"leave",f,n,c),h.target=E,h.relatedTarget=_,w=null,pi(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=_,v.relatedTarget=E,w=v),E=w,f&&g)t:{for(v=f,m=g,p=0,_=v;_;_=ls(_))p++;for(_=0,w=m;w;w=ls(w))_++;for(;0<p-_;)v=ls(v),p--;for(;0<_-p;)m=ls(m),_--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ls(v),m=ls(m)}v=null}else v=null;f!==null&&a4(d,h,f,v,!1),g!==null&&E!==null&&a4(d,E,g,v,!0)}}e:{if(h=u?ys(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var k=QE;else if(Z5(h))if(p6)k=ZE;else{k=XE;var L=YE}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=JE);if(k&&(k=k(t,u))){f6(d,k,n,c);break e}L&&L(t,h,u),t==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&Q0(h,"number",h.value)}switch(L=u?ys(u):window,t){case"focusin":(Z5(L)||L.contentEditable==="true")&&(ms=L,lf=u,ca=null);break;case"focusout":ca=lf=ms=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,i4(d,n,c);break;case"selectionchange":if(nC)break;case"keydown":case"keyup":i4(d,n,c)}var N;if(Z1)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ps?h6(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(c6&&n.locale!=="ko"&&(ps||M!=="onCompositionStart"?M==="onCompositionEnd"&&ps&&(N=u6()):(Lr=c,Y1="value"in Lr?Lr.value:Lr.textContent,ps=!0)),L=dc(u,M),0<L.length&&(M=new Q5(M,t,null,n,c),d.push({event:M,listeners:L}),N?M.data=N:(N=d6(n),N!==null&&(M.data=N)))),(N=WE?HE(t,n):qE(t,n))&&(u=dc(u,"onBeforeInput"),0<u.length&&(c=new Q5("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}T6(d,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ra(t,n),s!=null&&r.unshift(Oa(t,s,i)),s=Ra(t,e),s!=null&&r.push(Oa(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function a4(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ra(n,s),l!=null&&o.unshift(Oa(n,l,a))):i||(l=Ra(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oC=/\r\n?/g,aC=/\u0000|\uFFFD/g;function l4(t){return(typeof t=="string"?t:""+t).replace(oC,`
`).replace(aC,"")}function vu(t,e,n){if(e=l4(e),l4(t)!==e&&n)throw Error(I(425))}function fc(){}var cf=null,hf=null;function df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,lC=typeof clearTimeout=="function"?clearTimeout:void 0,u4=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof u4<"u"?function(t){return u4.resolve(null).then(t).catch(cC)}:ff;function cC(t){setTimeout(function(){throw t})}function Yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Na(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function c4(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),bn="__reactFiber$"+yo,Ma="__reactProps$"+yo,or="__reactContainer$"+yo,pf="__reactEvents$"+yo,hC="__reactListeners$"+yo,dC="__reactHandles$"+yo;function pi(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=c4(t);t!==null;){if(n=t[bn])return n;t=c4(t)}return e}t=n,n=t.parentNode}return null}function wl(t){return t=t[bn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function wh(t){return t[Ma]||null}var mf=[],vs=-1;function Jr(t){return{current:t}}function Se(t){0>vs||(t.current=mf[vs],mf[vs]=null,vs--)}function _e(t,e){vs++,mf[vs]=t.current,t.current=e}var Hr={},Tt=Jr(Hr),Vt=Jr(!1),Ai=Hr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return Hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function pc(){Se(Vt),Se(Tt)}function h4(t,e,n){if(Tt.current!==Hr)throw Error(I(168));_e(Tt,e),_e(Vt,n)}function k6(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Yw(t)||"Unknown",i));return Le({},n,r)}function mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,Ai=Tt.current,_e(Tt,t),_e(Vt,Vt.current),!0}function d4(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=k6(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Se(Vt),Se(Tt),_e(Tt,t)):Se(Vt),_e(Vt,n)}var Qn=null,Eh=!1,Xd=!1;function x6(t){Qn===null?Qn=[t]:Qn.push(t)}function fC(t){Eh=!0,x6(t)}function Zr(){if(!Xd&&Qn!==null){Xd=!0;var t=0,e=ge;try{var n=Qn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Eh=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),J3(q1,Zr),i}finally{ge=e,Xd=!1}}return null}var _s=[],ws=0,gc=null,yc=0,tn=[],nn=0,Di=null,Yn=1,Xn="";function li(t,e){_s[ws++]=yc,_s[ws++]=gc,gc=t,yc=e}function R6(t,e,n){tn[nn++]=Yn,tn[nn++]=Xn,tn[nn++]=Di,Di=t;var r=Yn;t=Xn;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-En(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function tp(t){t.return!==null&&(li(t,1),R6(t,1,0))}function np(t){for(;t===gc;)gc=_s[--ws],_s[ws]=null,yc=_s[--ws],_s[ws]=null;for(;t===Di;)Di=tn[--nn],tn[nn]=null,Xn=tn[--nn],tn[nn]=null,Yn=tn[--nn],tn[nn]=null}var Kt=null,Ht=null,Te=!1,gn=null;function b6(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function f4(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function gf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yf(t){if(Te){var e=Ht;if(e){var n=e;if(!f4(t,e)){if(gf(t))throw Error(I(418));e=Or(n.nextSibling);var r=Kt;e&&f4(t,e)?b6(r,n):(t.flags=t.flags&-4097|2,Te=!1,Kt=t)}}else{if(gf(t))throw Error(I(418));t.flags=t.flags&-4097|2,Te=!1,Kt=t}}}function p4(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function _u(t){if(t!==Kt)return!1;if(!Te)return p4(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!df(t.type,t.memoizedProps)),e&&(e=Ht)){if(gf(t))throw L6(),Error(I(418));for(;e;)b6(t,e),e=Or(e.nextSibling)}if(p4(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Or(t.stateNode.nextSibling):null;return!0}function L6(){for(var t=Ht;t;)t=Or(t.nextSibling)}function qs(){Ht=Kt=null,Te=!1}function rp(t){gn===null?gn=[t]:gn.push(t)}var pC=mr.ReactCurrentBatchConfig;function pn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vc=Jr(null),_c=null,Es=null,ip=null;function sp(){ip=Es=_c=null}function op(t){var e=vc.current;Se(vc),t._currentValue=e}function vf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){_c=t,ip=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ft=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(_c===null)throw Error(I(308));Es=t,_c.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var mi=null;function ap(t){mi===null?mi=[t]:mi.push(t)}function N6(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A6(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,K1(t,n)}}function m4(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(h=e,f=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(f,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(f,d,h):g,h==null)break e;d=Le({},d,h);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Oi|=o,t.lanes=o,t.memoizedState=d}}function g4(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var D6=new N3.Component().refs;function _f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ch={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=$r(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(Cn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=$r(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(Cn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=$r(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(Cn(e,t,r,n),Bu(e,t,r))}};function y4(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,r)||!Da(i,s):!0}function P6(t,e,n){var r=!1,i=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Bt(e)?Ai:Tt.current,r=e.contextTypes,s=(r=r!=null)?Hs(t,i):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function v4(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ch.enqueueReplaceState(e,e.state,null)}function wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=D6,lp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Bt(e)?Ai:Tt.current,i.context=Hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_f(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ch.enqueueReplaceState(i,i.state,null),wc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===D6&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function wu(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _4(t){var e=t._init;return e(t._payload)}function O6(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ur(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,w){return p===null||p.tag!==6?(p=i0(_,m.mode,w),p.return=m,p):(p=i(p,_),p.return=m,p)}function l(m,p,_,w){var k=_.type;return k===fs?c(m,p,_.props.children,w,_.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&_4(k)===p.type)?(w=i(p,_.props),w.ref=Uo(m,p,_),w.return=m,w):(w=Ku(_.type,_.key,_.props,null,m.mode,w),w.ref=Uo(m,p,_),w.return=m,w)}function u(m,p,_,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=s0(_,m.mode,w),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function c(m,p,_,w,k){return p===null||p.tag!==7?(p=Ti(_,m.mode,w,k),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=i0(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case uu:return _=Ku(p.type,p.key,p.props,null,m.mode,_),_.ref=Uo(m,null,p),_.return=m,_;case ds:return p=s0(p,m.mode,_),p.return=m,p;case Sr:var w=p._init;return d(m,w(p._payload),_)}if(Yo(p)||Po(p))return p=Ti(p,m.mode,_,null),p.return=m,p;wu(m,p)}return null}function h(m,p,_,w){var k=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return k!==null?null:a(m,p,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case uu:return _.key===k?l(m,p,_,w):null;case ds:return _.key===k?u(m,p,_,w):null;case Sr:return k=_._init,h(m,p,k(_._payload),w)}if(Yo(_)||Po(_))return k!==null?null:c(m,p,_,w,null);wu(m,_)}return null}function f(m,p,_,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(_)||null,a(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case uu:return m=m.get(w.key===null?_:w.key)||null,l(p,m,w,k);case ds:return m=m.get(w.key===null?_:w.key)||null,u(p,m,w,k);case Sr:var L=w._init;return f(m,p,_,L(w._payload),k)}if(Yo(w)||Po(w))return m=m.get(_)||null,c(p,m,w,k,null);wu(p,w)}return null}function g(m,p,_,w){for(var k=null,L=null,N=p,M=p=0,de=null;N!==null&&M<_.length;M++){N.index>M?(de=N,N=null):de=N.sibling;var Q=h(m,N,_[M],w);if(Q===null){N===null&&(N=de);break}t&&N&&Q.alternate===null&&e(m,N),p=s(Q,p,M),L===null?k=Q:L.sibling=Q,L=Q,N=de}if(M===_.length)return n(m,N),Te&&li(m,M),k;if(N===null){for(;M<_.length;M++)N=d(m,_[M],w),N!==null&&(p=s(N,p,M),L===null?k=N:L.sibling=N,L=N);return Te&&li(m,M),k}for(N=r(m,N);M<_.length;M++)de=f(N,m,M,_[M],w),de!==null&&(t&&de.alternate!==null&&N.delete(de.key===null?M:de.key),p=s(de,p,M),L===null?k=de:L.sibling=de,L=de);return t&&N.forEach(function(Fe){return e(m,Fe)}),Te&&li(m,M),k}function v(m,p,_,w){var k=Po(_);if(typeof k!="function")throw Error(I(150));if(_=k.call(_),_==null)throw Error(I(151));for(var L=k=null,N=p,M=p=0,de=null,Q=_.next();N!==null&&!Q.done;M++,Q=_.next()){N.index>M?(de=N,N=null):de=N.sibling;var Fe=h(m,N,Q.value,w);if(Fe===null){N===null&&(N=de);break}t&&N&&Fe.alternate===null&&e(m,N),p=s(Fe,p,M),L===null?k=Fe:L.sibling=Fe,L=Fe,N=de}if(Q.done)return n(m,N),Te&&li(m,M),k;if(N===null){for(;!Q.done;M++,Q=_.next())Q=d(m,Q.value,w),Q!==null&&(p=s(Q,p,M),L===null?k=Q:L.sibling=Q,L=Q);return Te&&li(m,M),k}for(N=r(m,N);!Q.done;M++,Q=_.next())Q=f(N,m,M,Q.value,w),Q!==null&&(t&&Q.alternate!==null&&N.delete(Q.key===null?M:Q.key),p=s(Q,p,M),L===null?k=Q:L.sibling=Q,L=Q);return t&&N.forEach(function(jn){return e(m,jn)}),Te&&li(m,M),k}function E(m,p,_,w){if(typeof _=="object"&&_!==null&&_.type===fs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case uu:e:{for(var k=_.key,L=p;L!==null;){if(L.key===k){if(k=_.type,k===fs){if(L.tag===7){n(m,L.sibling),p=i(L,_.props.children),p.return=m,m=p;break e}}else if(L.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Sr&&_4(k)===L.type){n(m,L.sibling),p=i(L,_.props),p.ref=Uo(m,L,_),p.return=m,m=p;break e}n(m,L);break}else e(m,L);L=L.sibling}_.type===fs?(p=Ti(_.props.children,m.mode,w,_.key),p.return=m,m=p):(w=Ku(_.type,_.key,_.props,null,m.mode,w),w.ref=Uo(m,p,_),w.return=m,m=w)}return o(m);case ds:e:{for(L=_.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=s0(_,m.mode,w),p.return=m,m=p}return o(m);case Sr:return L=_._init,E(m,p,L(_._payload),w)}if(Yo(_))return g(m,p,_,w);if(Po(_))return v(m,p,_,w);wu(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=i0(_,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return E}var Ks=O6(!0),M6=O6(!1),El={},Dn=Jr(El),Fa=Jr(El),$a=Jr(El);function gi(t){if(t===El)throw Error(I(174));return t}function up(t,e){switch(_e($a,e),_e(Fa,t),_e(Dn,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:X0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=X0(e,t)}Se(Dn),_e(Dn,e)}function Gs(){Se(Dn),Se(Fa),Se($a)}function F6(t){gi($a.current);var e=gi(Dn.current),n=X0(e,t.type);e!==n&&(_e(Fa,t),_e(Dn,n))}function cp(t){Fa.current===t&&(Se(Dn),Se(Fa))}var Re=Jr(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jd=[];function hp(){for(var t=0;t<Jd.length;t++)Jd[t]._workInProgressVersionPrimary=null;Jd.length=0}var ju=mr.ReactCurrentDispatcher,Zd=mr.ReactCurrentBatchConfig,Pi=0,be=null,He=null,tt=null,Cc=!1,ha=!1,Ua=0,mC=0;function pt(){throw Error(I(321))}function dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function fp(t,e,n,r,i,s){if(Pi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?_C:wC,t=n(r,i),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(I(301));s+=1,tt=He=null,e.updateQueue=null,ju.current=EC,t=n(r,i)}while(ha)}if(ju.current=Sc,e=He!==null&&He.next!==null,Pi=0,tt=He=be=null,Cc=!1,e)throw Error(I(300));return t}function pp(){var t=Ua!==0;return Ua=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?be.memoizedState=tt=t:tt=tt.next=t,tt}function an(){if(He===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=tt===null?be.memoizedState:tt.next;if(e!==null)tt=e,He=t;else{if(t===null)throw Error(I(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},tt===null?be.memoizedState=tt=t:tt=tt.next=t}return tt}function Va(t,e){return typeof e=="function"?e(t):e}function e0(t){var e=an(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,be.lanes|=c,Oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function t0(t){var e=an(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $6(){}function U6(t,e){var n=be,r=an(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,mp(j6.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,B6.bind(null,n,r,i,e),void 0,null),it===null)throw Error(I(349));(Pi&30)!==0||V6(n,e,i)}return i}function V6(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B6(t,e,n,r){e.value=n,e.getSnapshot=r,z6(e)&&W6(t)}function j6(t,e,n){return n(function(){z6(e)&&W6(t)})}function z6(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function W6(t){var e=ar(t,1);e!==null&&Cn(e,t,1,-1)}function w4(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=vC.bind(null,be,t),[e.memoizedState,t]}function Ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function H6(){return an().memoizedState}function zu(t,e,n,r){var i=Rn();be.flags|=t,i.memoizedState=Ba(1|e,n,void 0,r===void 0?null:r)}function Sh(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&dp(r,o.deps)){i.memoizedState=Ba(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ba(1|e,n,s,r)}function E4(t,e){return zu(8390656,8,t,e)}function mp(t,e){return Sh(2048,8,t,e)}function q6(t,e){return Sh(4,2,t,e)}function K6(t,e){return Sh(4,4,t,e)}function G6(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q6(t,e,n){return n=n!=null?n.concat([t]):null,Sh(4,4,G6.bind(null,e,t),n)}function gp(){}function Y6(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X6(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J6(t,e,n){return(Pi&21)===0?(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n):(Tn(n,e)||(n=t6(),be.lanes|=n,Oi|=n,t.baseState=!0),e)}function gC(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Zd.transition;Zd.transition={};try{t(!1),e()}finally{ge=n,Zd.transition=r}}function Z6(){return an().memoizedState}function yC(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e9(t))t9(e,n);else if(n=N6(t,e,n,r),n!==null){var i=Lt();Cn(n,t,r,i),n9(n,e,r)}}function vC(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e9(t))t9(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(i.next=i,ap(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=N6(t,e,i,r),n!==null&&(i=Lt(),Cn(n,t,r,i),n9(n,e,r))}}function e9(t){var e=t.alternate;return t===be||e!==null&&e===be}function t9(t,e){ha=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n9(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,K1(t,n)}}var Sc={readContext:on,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},_C={readContext:on,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:E4,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zu(4194308,4,G6.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zu(4194308,4,t,e)},useInsertionEffect:function(t,e){return zu(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yC.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:w4,useDebugValue:gp,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=w4(!1),e=t[0];return t=gC.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Rn();if(Te){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),it===null)throw Error(I(349));(Pi&30)!==0||V6(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,E4(j6.bind(null,r,s,t),[t]),r.flags|=2048,Ba(9,B6.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=it.identifierPrefix;if(Te){var n=Xn,r=Yn;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wC={readContext:on,useCallback:Y6,useContext:on,useEffect:mp,useImperativeHandle:Q6,useInsertionEffect:q6,useLayoutEffect:K6,useMemo:X6,useReducer:e0,useRef:H6,useState:function(){return e0(Va)},useDebugValue:gp,useDeferredValue:function(t){var e=an();return J6(e,He.memoizedState,t)},useTransition:function(){var t=e0(Va)[0],e=an().memoizedState;return[t,e]},useMutableSource:$6,useSyncExternalStore:U6,useId:Z6,unstable_isNewReconciler:!1},EC={readContext:on,useCallback:Y6,useContext:on,useEffect:mp,useImperativeHandle:Q6,useInsertionEffect:q6,useLayoutEffect:K6,useMemo:X6,useReducer:t0,useRef:H6,useState:function(){return t0(Va)},useDebugValue:gp,useDeferredValue:function(t){var e=an();return He===null?e.memoizedState=t:J6(e,He.memoizedState,t)},useTransition:function(){var t=t0(Va)[0],e=an().memoizedState;return[t,e]},useMutableSource:$6,useSyncExternalStore:U6,useId:Z6,unstable_isNewReconciler:!1};function Qs(t,e){try{var n="",r=e;do n+=Qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function n0(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function r9(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ic||(Ic=!0,Nf=r),Ef(t,e)},n}function i9(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ef(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function C4(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MC.bind(null,t,e,n),e.then(t,t))}function S4(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function T4(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var SC=mr.ReactCurrentOwner,Ft=!1;function Rt(t,e,n,r){e.child=t===null?M6(e,null,n,r):Ks(e,t.child,n,r)}function I4(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=fp(t,e,n,r,s,i),n=pp(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Te&&n&&tp(e),e.flags|=1,Rt(t,e,r,i),e.child)}function k4(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s9(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function s9(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Da(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ft=!0);else return e.lanes=t.lanes,lr(t,e,i)}return Cf(t,e,n,r,i)}function o9(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ss,Wt),Wt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ss,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ss,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ss,Wt),Wt|=r;return Rt(t,e,i,n),e.child}function a9(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,r,i){var s=Bt(n)?Ai:Tt.current;return s=Hs(e,s),Ds(e,i),n=fp(t,e,n,r,s,i),r=pp(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Te&&r&&tp(e),e.flags|=1,Rt(t,e,n,i),e.child)}function x4(t,e,n,r,i){if(Bt(n)){var s=!0;mc(e)}else s=!1;if(Ds(e,i),e.stateNode===null)Wu(t,e),P6(e,n,r),wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Bt(n)?Ai:Tt.current,u=Hs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&v4(e,o,r,u),Tr=!1;var h=e.memoizedState;o.state=h,wc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Vt.current||Tr?(typeof c=="function"&&(_f(e,n,c,r),l=e.memoizedState),(a=Tr||y4(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,A6(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:pn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Bt(n)?Ai:Tt.current,l=Hs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&v4(e,o,r,l),Tr=!1,h=e.memoizedState,o.state=h,wc(e,r,o,i);var g=e.memoizedState;a!==d||h!==g||Vt.current||Tr?(typeof f=="function"&&(_f(e,n,f,r),g=e.memoizedState),(u=Tr||y4(e,n,u,r,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Sf(t,e,n,r,s,i)}function Sf(t,e,n,r,i,s){a9(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&d4(e,n,!1),lr(t,e,s);r=e.stateNode,SC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&d4(e,n,!0),e.child}function l9(t){var e=t.stateNode;e.pendingContext?h4(t,e.pendingContext,e.pendingContext!==e.context):e.context&&h4(t,e.context,!1),up(t,e.containerInfo)}function R4(t,e,n,r,i){return qs(),rp(i),e.flags|=256,Rt(t,e,n,r),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function u9(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Re,i&1),t===null)return yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=Tf,t):yp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=kh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Eu(t,e,n,r){return r!==null&&rp(r),Ks(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=n0(Error(I(422))),Eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ks(e,t.child,null,o),e.child.memoizedState=If(o),e.memoizedState=Tf,s);if((e.mode&1)===0)return Eu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=n0(s,r,void 0),Eu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),Cn(r,t,i,-1))}return Sp(),r=n0(Error(I(421))),Eu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Or(i.nextSibling),Kt=e,Te=!0,gn=null,t!==null&&(tn[nn++]=Yn,tn[nn++]=Xn,tn[nn++]=Di,Yn=t.id,Xn=t.overflow,Di=e),e=yp(e,r.children),e.flags|=4096,e)}function b4(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vf(t.return,e,n)}function r0(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c9(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b4(t,n,e);else if(t.tag===19)b4(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Re,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),r0(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}r0(e,!0,n,null,s);break;case"together":r0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IC(t,e,n){switch(e.tag){case 3:l9(e),qs();break;case 5:F6(e);break;case 1:Bt(e.type)&&mc(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Re,Re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?u9(t,e,n):(_e(Re,Re.current&1),t=lr(t,e,n),t!==null?t.sibling:null);_e(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return c9(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,o9(t,e,n)}return lr(t,e,n)}var h9,kf,d9,f9;h9=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kf=function(){};d9=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Dn.current);var s=null;switch(n){case"input":i=K0(t,i),r=K0(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Y0(t,i),r=Y0(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fc)}J0(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ka.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};f9=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vo(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kC(t,e,n){var r=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Bt(e.type)&&pc(),mt(e),null;case 3:return r=e.stateNode,Gs(),Se(Vt),Se(Tt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_u(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,gn!==null&&(Pf(gn),gn=null))),kf(t,e),mt(e),null;case 5:cp(e);var i=gi($a.current);if(n=e.type,t!==null&&e.stateNode!=null)d9(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return mt(e),null}if(t=gi(Dn.current),_u(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bn]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)Ee(Jo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":$5(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":V5(r,s),Ee("invalid",r)}J0(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,a,t),i=["children",""+a]):ka.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":cu(r),U5(r,s,!0);break;case"textarea":cu(r),B5(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V3(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[Ma]=r,h9(t,e,!1,!1),e.stateNode=t;e:{switch(o=Z0(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)Ee(Jo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":$5(t,r),i=K0(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":V5(t,r),i=Y0(t,r),Ee("invalid",t);break;default:i=r}J0(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?z3(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B3(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&B1(t,s,l,o))}switch(n){case"input":cu(t),U5(t,r,!1);break;case"textarea":cu(t),B5(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bs(t,!!r.multiple,s,!1):r.defaultValue!=null&&bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)f9(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=gi($a.current),gi(Dn.current),_u(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:vu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return mt(e),null;case 13:if(Se(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Ht!==null&&(e.mode&1)!==0&&(e.flags&128)===0)L6(),qs(),e.flags|=98560,s=!1;else if(s=_u(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[bn]=e}else qs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else gn!==null&&(Pf(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Re.current&1)!==0?Ge===0&&(Ge=3):Sp())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Gs(),kf(t,e),t===null&&Pa(e.stateNode.containerInfo),mt(e),null;case 10:return op(e.type._context),mt(e),null;case 17:return Bt(e.type)&&pc(),mt(e),null;case 19:if(Se(Re),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vo(s,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Ys&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return mt(e),null}else 2*Oe()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Re.current,_e(Re,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Wt&1073741824)!==0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function xC(t,e){switch(np(e),e.tag){case 1:return Bt(e.type)&&pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Se(Vt),Se(Tt),hp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(Se(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Re),null;case 4:return Gs(),null;case 10:return op(e.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var Cu=!1,yt=!1,RC=typeof WeakSet=="function"?WeakSet:Set,D=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var L4=!1;function bC(t,e){if(cf=cc,t=y6(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},cc=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,E=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:pn(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){Ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return g=L4,L4=!1,g}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function Th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p9(t){var e=t.alternate;e!==null&&(t.alternate=null,p9(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[Ma],delete e[pf],delete e[hC],delete e[dC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m9(t){return t.tag===5||t.tag===3||t.tag===4}function N4(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m9(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var ot=null,mn=!1;function wr(t,e,n){for(n=n.child;n!==null;)g9(t,e,n),n=n.sibling}function g9(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(gh,n)}catch{}switch(n.tag){case 5:yt||Cs(n,e);case 6:var r=ot,i=mn;ot=null,wr(t,e,n),ot=r,mn=i,ot!==null&&(mn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(mn?(t=ot,n=n.stateNode,t.nodeType===8?Yd(t.parentNode,n):t.nodeType===1&&Yd(t,n),Na(t)):Yd(ot,n.stateNode));break;case 4:r=ot,i=mn,ot=n.stateNode.containerInfo,mn=!0,wr(t,e,n),ot=r,mn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&xf(n,e,o),i=i.next}while(i!==r)}wr(t,e,n);break;case 1:if(!yt&&(Cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,wr(t,e,n),yt=r):wr(t,e,n);break;default:wr(t,e,n)}}function A4(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RC),e.forEach(function(r){var i=$C.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,mn=!1;break e;case 3:ot=a.stateNode.containerInfo,mn=!0;break e;case 4:ot=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(ot===null)throw Error(I(160));g9(s,o,i),ot=null,mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y9(e,t),e=e.sibling}function y9(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),xn(t),r&4){try{da(3,t,t.return),Th(3,t)}catch(v){Ae(t,t.return,v)}try{da(5,t,t.return)}catch(v){Ae(t,t.return,v)}}break;case 1:fn(e,t),xn(t),r&512&&n!==null&&Cs(n,n.return);break;case 5:if(fn(e,t),xn(t),r&512&&n!==null&&Cs(n,n.return),t.flags&32){var i=t.stateNode;try{xa(i,"")}catch(v){Ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$3(i,s),Z0(a,o);var u=Z0(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?z3(i,d):c==="dangerouslySetInnerHTML"?B3(i,d):c==="children"?xa(i,d):B1(i,c,d,u)}switch(a){case"input":G0(i,s);break;case"textarea":U3(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?bs(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?bs(i,!!s.multiple,s.defaultValue,!0):bs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(v){Ae(t,t.return,v)}}break;case 6:if(fn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ae(t,t.return,v)}}break;case 3:if(fn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(v){Ae(t,t.return,v)}break;case 4:fn(e,t),xn(t);break;case 13:fn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=Oe())),r&4&&A4(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,fn(e,t),yt=u):fn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(h=D,f=h.child,h.tag){case 0:case 11:case 14:case 15:da(4,h,h.return);break;case 1:Cs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ae(r,n,v)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){P4(d);continue}}f!==null?(f.return=h,D=f):P4(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j3("display",o))}catch(v){Ae(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ae(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:fn(e,t),xn(t),r&4&&A4(t);break;case 21:break;default:fn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m9(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xa(i,""),r.flags&=-33);var s=N4(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=N4(t);bf(t,a,o);break;default:throw Error(I(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LC(t,e,n){D=t,v9(t)}function v9(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Cu;var u=yt;if(Cu=o,(yt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?O4(i):l!==null?(l.return=o,D=l):O4(i);for(;s!==null;)D=s,v9(s),s=s.sibling;D=i,Cu=a,yt=u}D4(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):D4(t)}}function D4(t){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:yt||Th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&g4(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}g4(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}yt||e.flags&512&&Rf(e)}catch(h){Ae(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function P4(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function O4(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Th(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{Rf(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{Rf(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var NC=Math.ceil,Tc=mr.ReactCurrentDispatcher,vp=mr.ReactCurrentOwner,sn=mr.ReactCurrentBatchConfig,he=0,it=null,ze=null,ut=0,Wt=0,Ss=Jr(0),Ge=0,ja=null,Oi=0,Ih=0,_p=0,fa=null,Pt=null,wp=0,Ys=1/0,Kn=null,Ic=!1,Nf=null,Fr=null,Su=!1,Nr=null,kc=0,pa=0,Af=null,Hu=-1,qu=0;function Lt(){return(he&6)!==0?Oe():Hu!==-1?Hu:Hu=Oe()}function $r(t){return(t.mode&1)===0?1:(he&2)!==0&&ut!==0?ut&-ut:pC.transition!==null?(qu===0&&(qu=t6()),qu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:l6(t.type)),t)}function Cn(t,e,n,r){if(50<pa)throw pa=0,Af=null,Error(I(185));vl(t,n,r),((he&2)===0||t!==it)&&(t===it&&((he&2)===0&&(Ih|=n),Ge===4&&kr(t,ut)),jt(t,r),n===1&&he===0&&(e.mode&1)===0&&(Ys=Oe()+500,Eh&&Zr()))}function jt(t,e){var n=t.callbackNode;pE(t,e);var r=uc(t,t===it?ut:0);if(r===0)n!==null&&W5(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&W5(n),e===1)t.tag===0?fC(M4.bind(null,t)):x6(M4.bind(null,t)),uC(function(){(he&6)===0&&Zr()}),n=null;else{switch(n6(r)){case 1:n=q1;break;case 4:n=Z3;break;case 16:n=lc;break;case 536870912:n=e6;break;default:n=lc}n=k9(n,_9.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _9(t,e){if(Hu=-1,qu=0,(he&6)!==0)throw Error(I(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=uc(t,t===it?ut:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=xc(t,r);else{e=r;var i=he;he|=2;var s=E9();(it!==t||ut!==e)&&(Kn=null,Ys=Oe()+500,Si(t,e));do try{PC();break}catch(a){w9(t,a)}while(1);sp(),Tc.current=s,he=i,ze!==null?e=0:(it=null,ut=0,e=Ge)}if(e!==0){if(e===2&&(i=sf(t),i!==0&&(r=i,e=Df(t,i))),e===1)throw n=ja,Si(t,0),kr(t,r),jt(t,Oe()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!AC(i)&&(e=xc(t,r),e===2&&(s=sf(t),s!==0&&(r=s,e=Df(t,s))),e===1))throw n=ja,Si(t,0),kr(t,r),jt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:ui(t,Pt,Kn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=wp+500-Oe(),10<e)){if(uc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ff(ui.bind(null,t,Pt,Kn),e);break}ui(t,Pt,Kn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NC(r/1960))-r,10<r){t.timeoutHandle=ff(ui.bind(null,t,Pt,Kn),r);break}ui(t,Pt,Kn);break;case 5:ui(t,Pt,Kn);break;default:throw Error(I(329))}}}return jt(t,Oe()),t.callbackNode===n?_9.bind(null,t):null}function Df(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&Pf(e)),t}function Pf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function AC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~_p,e&=~Ih,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function M4(t){if((he&6)!==0)throw Error(I(327));Ps();var e=uc(t,0);if((e&1)===0)return jt(t,Oe()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var r=sf(t);r!==0&&(e=r,n=Df(t,r))}if(n===1)throw n=ja,Si(t,0),kr(t,e),jt(t,Oe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Pt,Kn),jt(t,Oe()),null}function Ep(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ys=Oe()+500,Eh&&Zr())}}function Mi(t){Nr!==null&&Nr.tag===0&&(he&6)===0&&Ps();var e=he;he|=1;var n=sn.transition,r=ge;try{if(sn.transition=null,ge=1,t)return t()}finally{ge=r,sn.transition=n,he=e,(he&6)===0&&Zr()}}function Cp(){Wt=Ss.current,Se(Ss)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lC(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pc();break;case 3:Gs(),Se(Vt),Se(Tt),hp();break;case 5:cp(r);break;case 4:Gs();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:op(r.type._context);break;case 22:case 23:Cp()}n=n.return}if(it=t,ze=t=Ur(t.current,null),ut=Wt=e,Ge=0,ja=null,_p=Ih=Oi=0,Pt=fa=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function w9(t,e){do{var n=ze;try{if(sp(),ju.current=Sc,Cc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Pi=0,tt=He=be=null,ha=!1,Ua=0,vp.current=null,n===null||n.return===null){Ge=1,ja=e,ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=S4(o);if(f!==null){f.flags&=-257,T4(f,o,a,s,e),f.mode&1&&C4(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){C4(s,u,e),Sp();break e}l=Error(I(426))}}else if(Te&&a.mode&1){var E=S4(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),T4(E,o,a,s,e),rp(Qs(l,a));break e}}s=l=Qs(l,a),Ge!==4&&(Ge=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=r9(s,l,e);m4(s,m);break e;case 1:a=l;var p=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Fr===null||!Fr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=i9(s,a,e);m4(s,w);break e}}s=s.return}while(s!==null)}S9(n)}catch(k){e=k,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(1)}function E9(){var t=Tc.current;return Tc.current=Sc,t===null?Sc:t}function Sp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),it===null||(Oi&268435455)===0&&(Ih&268435455)===0||kr(it,ut)}function xc(t,e){var n=he;he|=2;var r=E9();(it!==t||ut!==e)&&(Kn=null,Si(t,e));do try{DC();break}catch(i){w9(t,i)}while(1);if(sp(),he=n,Tc.current=r,ze!==null)throw Error(I(261));return it=null,ut=0,Ge}function DC(){for(;ze!==null;)C9(ze)}function PC(){for(;ze!==null&&!sE();)C9(ze)}function C9(t){var e=I9(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?S9(t):ze=e,vp.current=null}function S9(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=kC(n,e,Wt),n!==null){ze=n;return}}else{if(n=xC(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,ze=null;return}}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Ge===0&&(Ge=5)}function ui(t,e,n){var r=ge,i=sn.transition;try{sn.transition=null,ge=1,OC(t,e,n,r)}finally{sn.transition=i,ge=r}return null}function OC(t,e,n,r){do Ps();while(Nr!==null);if((he&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mE(t,s),t===it&&(ze=it=null,ut=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Su||(Su=!0,k9(lc,function(){return Ps(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=sn.transition,sn.transition=null;var o=ge;ge=1;var a=he;he|=4,vp.current=null,bC(t,n),y9(n,t),tC(hf),cc=!!cf,hf=cf=null,t.current=n,LC(n),oE(),he=a,ge=o,sn.transition=s}else t.current=n;if(Su&&(Su=!1,Nr=t,kc=i),s=t.pendingLanes,s===0&&(Fr=null),uE(n.stateNode),jt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ic)throw Ic=!1,t=Nf,Nf=null,t;return(kc&1)!==0&&t.tag!==0&&Ps(),s=t.pendingLanes,(s&1)!==0?t===Af?pa++:(pa=0,Af=t):pa=0,Zr(),null}function Ps(){if(Nr!==null){var t=n6(kc),e=sn.transition,n=ge;try{if(sn.transition=null,ge=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,kc=0,(he&6)!==0)throw Error(I(331));var i=he;for(he|=4,D=t.current;D!==null;){var s=D,o=s.child;if((D.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:da(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var h=c.sibling,f=c.return;if(p9(c),c===u){D=null;break}if(h!==null){h.return=f,D=h;break}D=f}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,D=_;else e:for(o=p;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Th(9,a)}}catch(k){Ae(a,a.return,k)}if(a===o){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(he=i,Zr(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(gh,t)}catch{}r=!0}return r}finally{ge=n,sn.transition=e}}return!1}function F4(t,e,n){e=Qs(n,e),e=r9(t,e,1),t=Mr(t,e,1),e=Lt(),t!==null&&(vl(t,1,e),jt(t,e))}function Ae(t,e,n){if(t.tag===3)F4(t,t,n);else for(;e!==null;){if(e.tag===3){F4(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Qs(n,t),t=i9(e,t,1),e=Mr(e,t,1),t=Lt(),e!==null&&(vl(e,1,t),jt(e,t));break}}e=e.return}}function MC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ut&n)===n&&(Ge===4||Ge===3&&(ut&130023424)===ut&&500>Oe()-wp?Si(t,0):_p|=n),jt(t,e)}function T9(t,e){e===0&&((t.mode&1)===0?e=1:(e=fu,fu<<=1,(fu&130023424)===0&&(fu=4194304)));var n=Lt();t=ar(t,e),t!==null&&(vl(t,e,n),jt(t,n))}function FC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T9(t,n)}function $C(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),T9(t,n)}var I9;I9=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ft=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ft=!1,IC(t,e,n);Ft=(t.flags&131072)!==0}else Ft=!1,Te&&(e.flags&1048576)!==0&&R6(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wu(t,e),t=e.pendingProps;var i=Hs(e,Tt.current);Ds(e,n),i=fp(null,e,r,t,i,n);var s=pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,mc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=Ch,e.stateNode=i,i._reactInternals=e,wf(e,r,t,n),e=Sf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&tp(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=VC(r),t=pn(r,t),i){case 0:e=Cf(null,e,r,t,n);break e;case 1:e=x4(null,e,r,t,n);break e;case 11:e=I4(null,e,r,t,n);break e;case 14:e=k4(null,e,r,pn(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),x4(t,e,r,i,n);case 3:e:{if(l9(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,A6(t,e),wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qs(Error(I(423)),e),e=R4(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(I(424)),e),e=R4(t,e,r,n,i);break e}else for(Ht=Or(e.stateNode.containerInfo.firstChild),Kt=e,Te=!0,gn=null,n=M6(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===i){e=lr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return F6(e),t===null&&yf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,df(r,i)?o=null:s!==null&&df(r,s)&&(e.flags|=32),a9(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&yf(e),null;case 13:return u9(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),I4(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(vc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Vt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=on(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),k4(t,e,r,i,n);case 15:return s9(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Wu(t,e),e.tag=1,Bt(r)?(t=!0,mc(e)):t=!1,Ds(e,n),P6(e,r,i),wf(e,r,i,n),Sf(null,e,r,!0,t,n);case 19:return c9(t,e,n);case 22:return o9(t,e,n)}throw Error(I(156,e.tag))};function k9(t,e){return J3(t,e)}function UC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new UC(t,e,n,r)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VC(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===z1)return 11;if(t===W1)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Ti(n.children,i,s,e);case j1:o=8,i|=8;break;case z0:return t=rn(12,n,e,i|2),t.elementType=z0,t.lanes=s,t;case W0:return t=rn(13,n,e,i),t.elementType=W0,t.lanes=s,t;case H0:return t=rn(19,n,e,i),t.elementType=H0,t.lanes=s,t;case O3:return kh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D3:o=10;break e;case P3:o=9;break e;case z1:o=11;break e;case W1:o=14;break e;case Sr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function kh(t,e,n,r){return t=rn(22,t,r,e),t.elementType=O3,t.lanes=n,t.stateNode={isHidden:!1},t}function i0(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function s0(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,r,i,s,o,a,l){return t=new BC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function jC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x9(t){if(!t)return Hr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Bt(n))return k6(t,n,e)}return e}function R9(t,e,n,r,i,s,o,a,l){return t=Ip(n,r,!0,t,i,s,o,a,l),t.context=x9(null),n=t.current,r=Lt(),i=$r(n),s=nr(r,i),s.callback=e!=null?e:null,Mr(n,s,i),t.current.lanes=i,vl(t,i,r),jt(t,r),t}function xh(t,e,n,r){var i=e.current,s=Lt(),o=$r(i);return n=x9(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(Cn(t,i,o,s),Bu(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $4(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kp(t,e){$4(t,e),(t=t.alternate)&&$4(t,e)}function zC(){return null}var b9=typeof reportError=="function"?reportError:function(t){console.error(t)};function xp(t){this._internalRoot=t}Rh.prototype.render=xp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));xh(t,e,null,null)};Rh.prototype.unmount=xp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mi(function(){xh(null,t,null,null)}),e[or]=null}};function Rh(t){this._internalRoot=t}Rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=s6();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&a6(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function U4(){}function WC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rc(o);s.call(u)}}var o=R9(e,r,t,0,null,!1,!1,"",U4);return t._reactRootContainer=o,t[or]=o.current,Pa(t.nodeType===8?t.parentNode:t),Mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=Ip(t,0,!1,null,null,!1,!1,"",U4);return t._reactRootContainer=l,t[or]=l.current,Pa(t.nodeType===8?t.parentNode:t),Mi(function(){xh(e,l,n,r)}),l}function Lh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rc(o);a.call(l)}}xh(e,o,t,i)}else o=WC(n,e,t,i,r);return Rc(o)}r6=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(K1(e,n|1),jt(e,Oe()),(he&6)===0&&(Ys=Oe()+500,Zr()))}break;case 13:Mi(function(){var r=ar(t,1);if(r!==null){var i=Lt();Cn(r,t,1,i)}}),kp(t,1)}};G1=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Lt();Cn(e,t,134217728,n)}kp(t,134217728)}};i6=function(t){if(t.tag===13){var e=$r(t),n=ar(t,e);if(n!==null){var r=Lt();Cn(n,t,e,r)}kp(t,e)}};s6=function(){return ge};o6=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};tf=function(t,e,n){switch(e){case"input":if(G0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wh(r);if(!i)throw Error(I(90));F3(r),G0(r,i)}}}break;case"textarea":U3(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};q3=Ep;K3=Mi;var HC={usingClientEntryPoint:!1,Events:[wl,ys,wh,W3,H3,Ep]},Bo={findFiberByHostInstance:pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qC={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y3(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||zC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{gh=Tu.inject(qC),An=Tu}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HC;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(I(200));return jC(t,e,null,n)};Zt.createRoot=function(t,e){if(!Rp(t))throw Error(I(299));var n=!1,r="",i=b9;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,Pa(t.nodeType===8?t.parentNode:t),new xp(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Y3(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return Mi(t)};Zt.hydrate=function(t,e,n){if(!bh(e))throw Error(I(200));return Lh(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=b9;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R9(e,null,t,1,n!=null?n:null,i,!1,s,o),t[or]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rh(e)};Zt.render=function(t,e,n){if(!bh(e))throw Error(I(200));return Lh(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!bh(t))throw Error(I(40));return t._reactRootContainer?(Mi(function(){Lh(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Zt.unstable_batchedUpdates=Ep;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bh(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Lh(t,e,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Zt})(R3);var V4=R3.exports;B0.createRoot=V4.createRoot,B0.hydrateRoot=V4.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L9={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw vo(e)},vo=function(t){return new Error("Firebase Database ("+L9.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N9=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N9(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},A9=function(t){const e=N9(t);return bp.encodeByteArray(e,!0)},bc=function(t){return A9(t).replace(/\./g,"")},Lc=function(t){try{return bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){return D9(void 0,t)}function D9(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!QC(n)||(t[n]=D9(t[n],e[n]));return t}function QC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=()=>YC().__FIREBASE_DEFAULTS__,JC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lc(t[1]);return e&&JSON.parse(e)},Lp=()=>{try{return XC()||JC()||ZC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},P9=t=>{var e,n;return(n=(e=Lp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eS=t=>{const e=P9(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tS=()=>{var t;return(t=Lp())===null||t===void 0?void 0:t.config},O9=t=>{var e;return(e=Lp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bc(JSON.stringify(n)),bc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function rS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M9(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iS(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F9(){return L9.NODE_ADMIN===!0}function $9(){try{return typeof indexedDB=="object"}catch{return!1}}function sS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oS,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function aS(t,e){return t.replace(lS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U9=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=za(Lc(s[0])||""),n=za(Lc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},uS=function(t){const e=U9(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cS=function(t){const e=U9(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(B4(s)&&B4(o)){if(!Ac(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B4(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function dS(t,e){const n=new fS(t,e);return n.subscribe.bind(n)}class fS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=o0),i.error===void 0&&(i.error=o0),i.complete===void 0&&(i.complete=o0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function o0(){}function V9(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=1e3,yS=2,vS=4*60*60*1e3,_S=.5;function wS(t,e=gS,n=yS){const r=e*Math.pow(n,t),i=Math.round(_S*r*(Math.random()-.5)*2);return Math.min(vS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Np;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SS(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(t){return t===ci?void 0:t}function SS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ES(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const IS={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},kS=ce.INFO,xS={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},RS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=RS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const bS=(t,e)=>e.some(n=>t instanceof n);let j4,z4;function LS(){return j4||(j4=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NS(){return z4||(z4=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B9=new WeakMap,Mf=new WeakMap,j9=new WeakMap,a0=new WeakMap,Dp=new WeakMap;function AS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B9.set(n,t)}).catch(()=>{}),Dp.set(e,t),e}function DS(t){if(Mf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mf.set(t,e)}let Ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||j9.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PS(t){Ff=t(Ff)}function OS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(l0(this),e,...n);return j9.set(r,e.sort?e.sort():[e]),Vr(r)}:NS().includes(t)?function(...e){return t.apply(l0(this),e),Vr(B9.get(this))}:function(...e){return Vr(t.apply(l0(this),e))}}function MS(t){return typeof t=="function"?OS(t):(t instanceof IDBTransaction&&DS(t),bS(t,LS())?new Proxy(t,Ff):t)}function Vr(t){if(t instanceof IDBRequest)return AS(t);if(a0.has(t))return a0.get(t);const e=MS(t);return e!==t&&(a0.set(t,e),Dp.set(e,t)),e}const l0=t=>Dp.get(t);function z9(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FS=["get","getKey","getAll","getAllKeys","count"],$S=["put","add","delete","clear"],u0=new Map;function W4(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(u0.get(e))return u0.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return u0.set(e,s),s}PS(t=>({...t,get:(e,n,r)=>W4(e,n)||t.get(e,n,r),has:(e,n)=>!!W4(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $f="@firebase/app",H4="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Cl("@firebase/app"),BS="@firebase/app-compat",jS="@firebase/analytics-compat",zS="@firebase/analytics",WS="@firebase/app-check-compat",HS="@firebase/app-check",qS="@firebase/auth",KS="@firebase/auth-compat",GS="@firebase/database",QS="@firebase/database-compat",YS="@firebase/functions",XS="@firebase/functions-compat",JS="@firebase/installations",ZS="@firebase/installations-compat",eT="@firebase/messaging",tT="@firebase/messaging-compat",nT="@firebase/performance",rT="@firebase/performance-compat",iT="@firebase/remote-config",sT="@firebase/remote-config-compat",oT="@firebase/storage",aT="@firebase/storage-compat",lT="@firebase/firestore",uT="@firebase/firestore-compat",cT="firebase",hT="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="[DEFAULT]",dT={[$f]:"fire-core",[BS]:"fire-core-compat",[zS]:"fire-analytics",[jS]:"fire-analytics-compat",[HS]:"fire-app-check",[WS]:"fire-app-check-compat",[qS]:"fire-auth",[KS]:"fire-auth-compat",[GS]:"fire-rtdb",[QS]:"fire-rtdb-compat",[YS]:"fire-fn",[XS]:"fire-fn-compat",[JS]:"fire-iid",[ZS]:"fire-iid-compat",[eT]:"fire-fcm",[tT]:"fire-fcm-compat",[nT]:"fire-perf",[rT]:"fire-perf-compat",[iT]:"fire-rc",[sT]:"fire-rc-compat",[oT]:"fire-gcs",[aT]:"fire-gcs-compat",[lT]:"fire-fst",[uT]:"fire-fst-compat","fire-js":"fire-js",[cT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,Vf=new Map;function fT(t,e){try{t.container.addComponent(e)}catch(n){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(Vf.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of Wa.values())fT(n,t);return!0}function Sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Br=new Ji("app","Firebase",pT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=hT;function W9(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Br.create("bad-app-name",{appName:String(i)});if(n||(n=tS()),!n)throw Br.create("no-options");const s=Wa.get(i);if(s){if(Ac(n,s.options)&&Ac(r,s.config))return s;throw Br.create("duplicate-app",{appName:i})}const o=new TS(i);for(const l of Vf.values())o.addComponent(l);const a=new mT(n,r,o);return Wa.set(i,a),a}function H9(t=Uf){const e=Wa.get(t);if(!e&&t===Uf)return W9();if(!e)throw Br.create("no-app",{appName:t});return e}function gT(){return Array.from(Wa.values())}function We(t,e,n){var r;let i=(r=dT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(a.join(" "));return}ln(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="firebase-heartbeat-database",vT=1,Ha="firebase-heartbeat-store";let c0=null;function q9(){return c0||(c0=z9(yT,vT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ha)}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),c0}async function _T(t){try{return(await q9()).transaction(Ha).objectStore(Ha).get(K9(t))}catch(e){if(e instanceof cn)Fi.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fi.warn(n.message)}}}async function q4(t,e){try{const r=(await q9()).transaction(Ha,"readwrite");return await r.objectStore(Ha).put(e,K9(t)),r.done}catch(n){if(n instanceof cn)Fi.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(r.message)}}}function K9(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=1024,ET=30*24*60*60*1e3;class CT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=K4();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ET}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=K4(),{heartbeatsToSend:n,unsentEntries:r}=ST(this._heartbeatsCache.heartbeats),i=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function K4(){return new Date().toISOString().substring(0,10)}function ST(t,e=wT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),G4(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),G4(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $9()?sS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _T(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q4(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q4(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function G4(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){ln(new Xt("platform-logger",e=>new US(e),"PRIVATE")),ln(new Xt("heartbeat",e=>new CT(e),"PRIVATE")),We($f,H4,t),We($f,H4,"esm2017"),We("fire-js","")}IT("");function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function G9(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kT=G9,Q9=new Ji("auth","Firebase",G9());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4=new Cl("@firebase/auth");function Gu(t,...e){Q4.logLevel<=ce.ERROR&&Q4.error(`Auth (${ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Op(t,...e)}function Pn(t,...e){return Op(t,...e)}function Y9(t,e,n){const r=Object.assign(Object.assign({},kT()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function xT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),Y9(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q9.create(t,...e)}function q(t,e,...n){if(!t)throw Op(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gu(e),new Error(e)}function ur(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=new Map;function Zn(t){ur(t instanceof Function,"Expected a class definition");let e=Y4.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Y4.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e){const n=Sl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ac(s,e!=null?e:{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function bT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LT(){return X4()==="http:"||X4()==="https:"}function X4(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LT()||rS()||"connection"in navigator)?navigator.onLine:!0}function AT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||M9()}get(){return NT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new Tl(3e4,6e4);function Il(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kl(t,e,n,r,i={}){return J9(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),X9.fetch()(Z9(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function J9(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DT),e);try{const i=new OT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Iu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Iu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Y9(t,c,u);un(t,c)}}catch(i){if(i instanceof cn)throw i;un(t,"network-request-failed")}}async function xl(t,e,n,r,i={}){const s=await kl(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Z9(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mp(t.config,i):`${t.config.apiScheme}://${i}`}class OT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),PT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return kl(t,"POST","/v1/accounts:delete",e)}async function FT(t,e){return kl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $T(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Fp(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ma(h0(i.auth_time)),issuedAtTime:ma(h0(i.iat)),expirationTime:ma(h0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function h0(t){return Number(t)*1e3}function Fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lc(n);return i?JSON.parse(i):(Gu("Failed to decode base64 JWT payload"),null)}catch(i){return Gu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UT(t){const e=Fp(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&VT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qa(t,FT(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WT(s.providerUserInfo):[],a=zT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ey(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function jT(t){const e=Me(t);await Dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WT(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(t,e){const n=await J9(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Z9(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",X9.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ka;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ey(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qa(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $T(this,e)}reload(){return jT(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qa(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:w,isAnonymous:k,providerData:L,stsTokenManager:N}=n;q(_&&N,e,"internal-error");const M=Ka.fromJSON(this.name,N);q(typeof _=="string",e,"internal-error"),Er(d,e.name),Er(h,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof k=="boolean",e,"internal-error"),Er(f,e.name),Er(g,e.name),Er(v,e.name),Er(E,e.name),Er(m,e.name),Er(p,e.name);const de=new Ii({uid:_,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:k,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:M,createdAt:m,lastLoginAt:p});return L&&Array.isArray(L)&&(de.providerData=L.map(Q=>Object.assign({},Q))),E&&(de._redirectEventId=E),de}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ka;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dc(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const J4=ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(Zn(J4),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zn(J4);const o=Qu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Ii._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if($p(e))return"Safari";if((e.includes("chrome/")||ry(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=It()){return/firefox\//i.test(t)}function $p(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ry(t=It()){return/crios\//i.test(t)}function iy(t=It()){return/iemobile/i.test(t)}function sy(t=It()){return/android/i.test(t)}function oy(t=It()){return/blackberry/i.test(t)}function ay(t=It()){return/webos/i.test(t)}function Ah(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qT(t=It()){var e;return Ah(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KT(){return iS()&&document.documentMode===10}function ly(t=It()){return Ah(t)||sy(t)||ay(t)||oy(t)||/windows phone/i.test(t)||iy(t)}function GT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e=[]){let n;switch(t){case"Browser":n=Z4(It());break;case"Worker":n=`${Z4(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new em(this),this.idTokenSubscription=new em(this),this.beforeStateQueue=new QT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q9,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wo(t){return Me(t)}class em{constructor(e){this.auth=e,this.observer=null,this.addObserver=dS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XT(t,e,n){const r=wo(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cy(e),{host:o,port:a}=JT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZT()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JT(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tm(o)}}}function tm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}async function eI(t,e){return kl(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return xl(t,"POST","/v1/accounts:signInWithPassword",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Il(t,e))}async function rI(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Up{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nI(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return xl(t,"POST","/v1/accounts:signInWithIdp",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="http://localhost";class $i extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oI(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class Vp{constructor(e){var n,r,i,s,o,a;const l=Zo(ea(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=sI((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oI(e);try{return new Vp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return Ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vp.parseLink(n);return q(r,"argument-error"),Ga._fromEmailAndCode(e,r.code,r.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Bp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Rl{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $i._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Rl{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Rl{constructor(){super("twitter.com")}static credential(e,n){return $i._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return xl(t,"POST","/v1/accounts:signUp",Il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=nm(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nm(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pc(e,n,r,i)}}function hy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pc._fromErrorAndOperation(t,s,e,r):s})}async function lI(t,e,n=!1){const r=await qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await qa(t,hy(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Fp(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e,n=!1){const r="signIn",i=await hy(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cI(t,e){return dy(wo(t),e)}async function hI(t,e,n){const r=wo(t),i=await aI(r,{returnSecureToken:!0,email:e,password:n}),s=await Ui._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function dI(t,e,n){return cI(Me(t),Eo.credential(e,n))}function fy(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function fI(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}const Oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){const t=It();return $p(t)||Ah(t)}const mI=1e3,gI=10;class my extends py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pI()&&GT(),this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}my.type="LOCAL";const yI=my;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gy.type="SESSION";const yy=gy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await vI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=jp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function wI(t){On().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function EI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SI(){return vy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firebaseLocalStorageDb",TI=1,Mc="firebaseLocalStorage",wy="fbase_key";class bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(t,e){return t.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function II(){const t=indexedDB.deleteDatabase(_y);return new bl(t).toPromise()}function jf(){const t=indexedDB.open(_y,TI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mc,{keyPath:wy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mc)?e(r):(r.close(),await II(),e(await jf()))})})}async function rm(t,e,n){const r=Ph(t,!0).put({[wy]:e,value:n});return new bl(r).toPromise()}async function kI(t,e){const n=Ph(t,!1).get(e),r=await new bl(n).toPromise();return r===void 0?null:r.value}function im(t,e){const n=Ph(t,!0).delete(e);return new bl(n).toPromise()}const xI=800,RI=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dh._getInstance(SI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EI(),!this.activeServiceWorker)return;this.sender=new _I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await rm(e,Oc,"1"),await im(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ph(i,!1).getAll();return new bl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const bI=Ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LI().appendChild(r)})}function AI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){return e?Zn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DI(t){return dy(t.auth,new zp(t),t.bypassAuthState)}function PI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uI(n,new zp(t),t.bypassAuthState)}async function OI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lI(n,new zp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DI;case"linkViaPopup":case"linkViaRedirect":return OI;case"reauthViaPopup":case"reauthViaRedirect":return PI;default:un(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Tl(2e3,1e4);class Ts extends Sy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MI.get())};e()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="pendingRedirect",Yu=new Map;class $I extends Sy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const r=await UI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UI(t,e){const n=Iy(e),r=Ty(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function VI(t,e){return Ty(t)._set(Iy(e),"true")}function BI(t,e){Yu.set(t._key(),e)}function Ty(t){return Zn(t._redirectPersistence)}function Iy(t){return Qu(FI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e,n){return jI(t,e,n)}async function jI(t,e,n){const r=wo(t);xT(t,e,Bp),await r._initializationPromise;const i=Cy(r,n);return await VI(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function zI(t,e,n=!1){const r=wo(t),i=Cy(r,e),o=await new $I(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=10*60*1e3;class HI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))}saveEventToCache(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()}}function sm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e={}){return kl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QI=/^https?/;async function YI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KI(t);for(const n of e)try{if(XI(n))return}catch{}un(t,"unauthorized-domain")}function XI(t){const e=Bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QI.test(n))return!1;if(GI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Tl(3e4,6e4);function om(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZI(t){return new Promise((e,n)=>{var r,i,s;function o(){om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{om(),n(Pn(t,"network-request-failed"))},timeout:JI.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=AI("iframefcb");return On()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},NI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function ek(t){return Xu=Xu||ZI(t),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Tl(5e3,15e3),nk="__/auth/iframe",rk="emulator/auth/iframe",ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ok(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,rk):`https://${t.config.authDomain}/${nk}`,r={apiKey:e.apiKey,appName:t.name,v:ei},i=sk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function ak(t){const e=await ek(t),n=On().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:ok(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ik,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},tk.get());function l(){On().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,ck=600,hk="_blank",dk="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fk(t,e,n,r=uk,i=ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=It().toLowerCase();n&&(a=ry(u)?hk:n),ny(u)&&(e=e||dk,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(qT(u)&&a!=="_self")return pk(e||"",a),new am(null);const d=window.open(e||"",a,c);q(d,t,"popup-blocked");try{d.focus()}catch{}return new am(d)}function pk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="__/auth/handler",gk="emulator/auth/handler";function lm(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(e instanceof Bp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Rl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${yk(t)}?${_o(a).slice(1)}`}function yk({config:t}){return t.emulator?Mp(t,gk):`https://${t.authDomain}/${mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yy,this._completeRedirectFn=zI,this._overrideRedirectResult=BI}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=lm(e,n,r,Bf(),i);return fk(e,o,jp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wI(lm(e,n,r,Bf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ak(e),r=new HI(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(d0,{type:d0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[d0];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ly()||$p()||Ah()}}const _k=vk;var um="@firebase/auth",cm="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ck(t){ln(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(t)},c=new YT(a,l,u);return bT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new Xt("auth-internal",e=>{const n=wo(e.getProvider("auth").getImmediate());return(r=>new wk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(um,cm,Ek(t)),We(um,cm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=5*60,Tk=O9("authIdTokenMaxAge")||Sk;let hm=null;const Ik=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tk)return;const i=n==null?void 0:n.token;hm!==i&&(hm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kk(t=H9()){const e=Sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RT(t,{popupRedirectResolver:_k,persistence:[bI,yI,yy]}),r=O9("authTokenSyncURL");if(r){const s=Ik(r);fI(n,s,()=>s(n.currentUser)),fy(n,o=>s(o))}const i=P9("auth");return i&&XT(n,`http://${i}`),n}Ck("Browser");const dm="@firebase/database",fm="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ry="";function xk(t){Ry=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rk(e)}}catch{}return new bk},yi=by("localStorage"),zf=by("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Cl("@firebase/database"),Lk=function(){let t=1;return function(){return t++}}(),Ly=function(t){const e=mS(t),n=new hS;n.update(e);const r=n.digest();return bp.encodeByteArray(r)},Ll=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ll.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let ki=null,pm=!0;const Nk=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fs.logLevel=ce.VERBOSE,ki=Fs.log.bind(Fs),e&&zf.set("logging_enabled",!0)):typeof t=="function"?ki=t:(ki=null,zf.remove("logging_enabled"))},vt=function(...t){if(pm===!0&&(pm=!1,ki===null&&zf.get("logging_enabled")===!0&&Nk(!0)),ki){const e=Ll.apply(null,t);ki(e)}},Nl=function(t){return function(...e){vt(t,...e)}},Wf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ll(...t);Fs.error(e)},Vi=function(...t){const e=`FIREBASE FATAL ERROR: ${Ll(...t)}`;throw Fs.error(e),new Error(e)},Gt=function(...t){const e="FIREBASE WARNING: "+Ll(...t);Fs.warn(e)},Ak=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ny=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Dk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Js="[MIN_NAME]",Bi="[MAX_NAME]",Co=function(t,e){if(t===e)return 0;if(t===Js||e===Bi)return-1;if(e===Js||t===Bi)return 1;{const n=mm(t),r=mm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Pk=function(t,e){return t===e?0:t<e?-1:1},jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},Wp=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=Wp(t[e[r]]);return n+="}",n},Ay=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Dy=function(t){b(!Ny(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Ok=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $k=new RegExp("^-?(0*)\\d{1,10}$"),Uk=-2147483648,Vk=2147483647,mm=function(t){if($k.test(t)){const e=Number(t);if(e>=Uk&&e<=Vk)return e}return null},Al=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ga=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}}class Hf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="5",Py="v",Oy="s",My="r",Fy="f",$y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uy="ls",Vy="p",qf="ac",By="websocket",jy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Hk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zy(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===By)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hk(t)&&(n.ns=t.namespace);const i=[];return zt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return GC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0={},p0={};function qp(t){const e=t.toString();return f0[e]||(f0[e]=new qk),f0[e]}function Kk(t,e){const n=t.toString();return p0[n]||(p0[n]=e()),p0[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Al(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="start",Qk="close",Yk="pLPCommand",Xk="pRTLPCB",Wy="id",Hy="pw",qy="ser",Jk="cb",Zk="seg",ex="ts",tx="d",nx="dframe",Ky=1870,Gy=30,rx=Ky-Gy,ix=25e3,sx=3e4;class Is{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nl(e),this.stats_=qp(n),this.urlFn=l=>(this.appCheckToken&&(l[qf]=this.appCheckToken),zy(n,jy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Gk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sx)),Dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gm)this.id=a,this.password=l;else if(o===Qk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gm]="t",r[qy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Jk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Py]=Hp,this.transportSessionId&&(r[Oy]=this.transportSessionId),this.lastSessionId&&(r[Uy]=this.lastSessionId),this.applicationId&&(r[Vy]=this.applicationId),this.appCheckToken&&(r[qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&$y.test(location.hostname)&&(r[My]=Fy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Is.forceAllow_=!0}static forceDisallow(){Is.forceDisallow_=!0}static isAvailable(){return Is.forceAllow_?!0:!Is.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ok()&&!Mk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=A9(n),i=Ay(r,rx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nx]="t",r[Wy]=e,r[Hy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lk(),window[Yk+this.uniqueCallbackIdentifier]=e,window[Xk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wy]=this.myID,e[Hy]=this.myPW,e[qy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gy+r.length<=Ky;){const o=this.pendingSegs.shift();r=r+"&"+Zk+i+"="+o.seg+"&"+ex+i+"="+o.ts+"&"+tx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ix)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=16384,ax=45e3;let Fc=null;typeof MozWebSocket<"u"?Fc=MozWebSocket:typeof WebSocket<"u"&&(Fc=WebSocket);class yn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nl(this.connId),this.stats_=qp(n),this.connURL=yn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Py]=Hp,typeof location<"u"&&location.hostname&&$y.test(location.hostname)&&(o[My]=Fy),n&&(o[Oy]=n),r&&(o[Uy]=r),i&&(o[qf]=i),s&&(o[Vy]=s),zy(e,By,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yi.set("previous_websocket_failure",!0);try{let r;F9(),this.mySock=new Fc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fc!==null&&!yn.forceDisallow_}static previouslyFailed(){return yi.isInMemoryStorage||yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){yi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ay(n,ox);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ax))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Is,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yn&&yn.isAvailable();let r=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[yn];else{const i=this.transports_=[];for(const s of Qa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=6e4,ux=5e3,cx=10*1024,hx=100*1024,m0="t",ym="d",dx="s",vm="r",fx="e",_m="o",wm="a",Em="n",Cm="p",px="h";class mx{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nl("c:"+this.id+":"),this.transportManager_=new Qa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ga(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(m0 in e){const n=e[m0];n===wm?this.upgradeIfSecondaryHealthy_():n===vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_m&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Em,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=jo(m0,e);if(ym in e){const r=e[ym];if(n===px){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Em){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dx?this.onConnectionShutdown_(r):n===vm?this.onReset_(r):n===fx?Wf("Server Error: "+r):n===_m?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ga(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ga(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ux))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Yy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $c}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=32,Tm=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ye("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Xy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return $t(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gp(t,e){if(qr(t)!==qr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qr(t)>qr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yx{constructor(e,n){this.errorPrefix_=n,this.parts_=Jy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nh(this.parts_[r]);e8(this)}}function vx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nh(e),e8(t)}function _x(t){const e=t.parts_.pop();t.byteLength_-=Nh(e),t.parts_.length>0&&(t.byteLength_-=1)}function e8(t){if(t.byteLength_>Tm)throw new Error(t.errorPrefix_+"has a key path longer than "+Tm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sm+") or object contains a cycle "+hi(t))}function hi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Yy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qp}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=1e3,wx=60*5*1e3,Im=30*1e3,Ex=1.3,Cx=3e4,Sx="server_kill",km=3;class rr extends Qy{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rr.nextPersistentConnectionId_++,this.log_=Nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=wx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!F9())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(rt(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Np,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;rr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Im)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=uS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wf("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cx&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ex)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new mx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Gt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Gt(d),l())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Of(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Wp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=km&&(this.reconnectDelay_=Im,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=km&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ry.replace(/\./g,"-")]=1,Ap()?e["framework.cordova"]=1:M9()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$c.getInstance().currentlyOnline();return Of(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(Js,e),i=new ne(Js,n);return this.compare(r,i)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku;class t8 extends Oh{static get __EMPTY_NODE(){return ku}static set __EMPTY_NODE(e){ku=e}compare(e,n){return Co(e.name,n.name)}isDefinedOn(e){throw vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Bi,ku)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,ku)}toString(){return".key"}}const $s=new t8;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:nt.RED,this.left=i!=null?i:Ut.EMPTY_NODE,this.right=s!=null?s:Ut.EMPTY_NODE}copy(e,n,r,i,s){return new nt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class Tx{copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(e,n=Ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xu(this.root_,null,this.comparator_,!0,e)}}Ut.EMPTY_NODE=new Tx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t,e){return Co(t.name,e.name)}function Yp(t,e){return Co(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;function kx(t){Kf=t}const n8=function(t){return typeof t=="number"?"number:"+Dy(t):"string:"+t},r8=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else b(t===Kf||t.isEmpty(),"priority of unexpected type.");b(t===Kf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),r8(this.priorityNode_)}static set __childrenNodeConstructor(e){xm=e}static get __childrenNodeConstructor(){return xm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ie(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||qr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n8(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Dy(this.value_):e+=this.value_,this.lazyHash_=Ly(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),s=Ze.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i8,s8;function xx(t){i8=t}function Rx(t){s8=t}class bx extends Oh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Co(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Bi,new Ze("[PRIORITY-POST]",s8))}makePost(e,n){const r=i8(e);return new ne(n,new Ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new bx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=Math.log(2);class Nx{constructor(e){const n=s=>parseInt(Math.log(s)/Lx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Uc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new nt(h,d.node,nt.BLACK,null,null);{const f=parseInt(c/2,10)+l,g=i(l,f),v=i(f+1,u);return d=t[f],h=n?n(d):d,new nt(h,d.node,nt.BLACK,g,v)}},s=function(l){let u=null,c=null,d=t.length;const h=function(g,v){const E=d-g,m=d;d-=g;const p=i(E+1,m),_=t[E],w=n?n(_):_;f(new nt(w,_.node,v,null,p))},f=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));v?h(E,nt.BLACK):(h(E,nt.BLACK),h(E,nt.RED))}return c},o=new Nx(t.length),a=s(o);return new Ut(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g0;const us={};class er{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(us&&De,"ChildrenNode.ts has not been loaded"),g0=g0||new er({".priority":us},{".priority":De}),g0}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ut?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){b(e!==$s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ne.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Uc(r,e.getCompare()):a=us;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new er(c,u)}addToIndexes(e,n){const r=Nc(this.indexes_,(i,s)=>{const o=Xs(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===us)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Uc(a,o.getCompare())}else return us;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new er(r,this.indexSet_)}removeFromIndexes(e,n){const r=Nc(this.indexes_,i=>{if(i===us)return i;{const s=n.get(e.name);return s?i.remove(new ne(e.name,s)):i}});return new er(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&r8(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wo||(Wo=new W(new Ut(Yp),null,er.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wo}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wo:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wo:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{b(ie(e)!==".priority"||qr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n8(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ly(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ne(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dl?-1:0}withIndex(e){if(e===$s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$s?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ax extends W{constructor(){super(new Ut(Yp),W.EMPTY_NODE,er.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Dl=new Ax;Object.defineProperties(ne,{MIN:{value:new ne(Js,W.EMPTY_NODE)},MAX:{value:new ne(Bi,Dl)}});t8.__EMPTY_NODE=W.EMPTY_NODE;Ze.__childrenNodeConstructor=W;kx(Dl);Rx(Dl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=!0;function _t(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,_t(e))}if(!(t instanceof Array)&&Dx){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_t(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return W.EMPTY_NODE;const s=Uc(n,Ix,o=>o.name,Yp);if(r){const o=Uc(n,De.getCompare());return new W(s,_t(e),new er({".priority":o},{".priority":De}))}else return new W(s,_t(e),er.Default)}else{let n=W.EMPTY_NODE;return zt(t,(r,i)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const s=_t(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_t(e))}}xx(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px extends Oh{constructor(e){super(),this.indexPath_=e,b(!se(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Co(e.name,n.name):s}makePost(e,n){const r=_t(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Dl);return new ne(Bi,e)}toString(){return Jy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox extends Oh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Co(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=_t(e);return new ne(n,r)}toString(){return".value"}}const Mx=new Ox;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o8(t){return{type:"value",snapshotNode:t}}function Zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ya(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Fx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ya(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zs(n,r)):o.trackChildChange(Xa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ya(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Xa(i,s,o))}else r.trackChildChange(Zs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.indexedFilter_=new Xp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ja.getStartPost_(e),this.endPost_=Ja.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ne(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new ne(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ja(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ne(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new ne(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(c&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Xa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ya(n,d));const v=a.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Zs(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ya(u.name,u.node)),s.trackChildChange(Zs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Js}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Jp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ux(t){return t.loadsAllData()?new Xp(t.getIndex()):t.hasLimit()?new $x(t):new Ja(t)}function Rm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===Mx?n="$value":t.index_===$s?n="$key":(b(t.index_ instanceof Px,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Qy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Nl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Rm(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Xs(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Rm(e._queryParams),r=e._path.toString(),i=new Np;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=za(a.responseText)}catch{Gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return{value:null,children:new Map}}function a8(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Bc());const i=t.children.get(r);e=ve(e),a8(i,e,n)}}function Gf(t,e,n){t.value!==null?n(e,t.value):Bx(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);Gf(i,s,n)})}function Bx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=10*1e3,zx=30*1e3,Wx=5*60*1e3;class Hx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jx(e);const r=Lm+(zx-Lm)*Math.random();ga(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(i,s)=>{s>0&&gr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ga(this.reportStats_.bind(this),Math.floor(Math.random()*2*Wx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_n||(_n={}));function l8(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function e2(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_n.ACK_USER_WRITE,this.source=l8()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new jc(pe(),n,this.revert)}}else return b(ie(this.path)===e,"operationForChild called for unrelated child."),new jc(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.source=e,this.path=n,this.type=_n.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Za(this.source,pe()):new Za(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_n.OVERWRITE}operationForChild(e){return se(this.path)?new ji(this.source,pe(),this.snap.getImmediateChild(e)):new ji(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_n.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new ji(this.source,pe(),n.value):new el(this.source,pe(),n)}else return b(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new el(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Fx(o.childName,o.snapshotNode))}),Ho(t,i,"child_removed",e,r,n),Ho(t,i,"child_added",e,r,n),Ho(t,i,"child_moved",s,r,n),Ho(t,i,"child_changed",e,r,n),Ho(t,i,"value",e,r,n),i}function Ho(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Qx(t,a,l)),o.forEach(a=>{const l=Gx(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Gx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qx(t,e,n){if(e.childName==null||n.childName==null)throw vo("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t,e){return{eventCache:t,serverCache:e}}function ya(t,e,n,r){return Mh(new zi(e,n,r),t.serverCache)}function u8(t,e,n,r){return Mh(t.eventCache,new zi(e,n,r))}function Qf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y0;const Yx=()=>(y0||(y0=new Ut(Pk)),y0);class Ce{constructor(e,n=Yx()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return zt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(se(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:qe(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new Ce(null)}}set(e,n){if(se(e))return new Ce(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Ce(null)).set(ve(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(se(e))return n;{const r=ie(e),s=(this.children.get(r)||new Ce(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),qe(n,i),r):new Ce(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.writeTree_=e}static empty(){return new Sn(new Ce(null))}}function va(t,e,n){if(se(e))return new Sn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$t(i,e);return s=s.updateChild(o,n),new Sn(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new Sn(s)}}}function Nm(t,e,n){let r=t;return zt(n,(i,s)=>{r=va(r,qe(e,i),s)}),r}function Am(t,e){if(se(e))return Sn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Sn(n)}}function Yf(t,e){return Zi(t,e)!=null}function Zi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function Dm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new ne(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ne(r,i.value))}),e}function jr(t,e){if(se(e))return t;{const n=Zi(t,e);return n!=null?new Sn(new Ce(n)):new Sn(t.writeTree_.subtree(e))}}function Xf(t){return t.writeTree_.isEmpty()}function eo(t,e){return c8(pe(),t.writeTree_,e)}function c8(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=c8(qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){return p8(e,t)}function Xx(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=va(t.visibleWrites,e,n)),t.lastWriteId=r}function Jx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Zx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&eR(a,r.path)?i=!1:vn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return tR(t),!0;if(r.snap)t.visibleWrites=Am(t.visibleWrites,r.path);else{const a=r.children;zt(a,l=>{t.visibleWrites=Am(t.visibleWrites,qe(r.path,l))})}return!0}else return!1}function eR(t,e){if(t.snap)return vn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vn(qe(t.path,n),e))return!0;return!1}function tR(t){t.visibleWrites=h8(t.allWrites,nR,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nR(t){return t.visible}function h8(t,e,n){let r=Sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)vn(n,o)?(a=$t(n,o),r=va(r,a,s.snap)):vn(o,n)&&(a=$t(o,n),r=va(r,pe(),s.snap.getChild(a)));else if(s.children){if(vn(n,o))a=$t(n,o),r=Nm(r,a,s.children);else if(vn(o,n))if(a=$t(o,n),se(a))r=Nm(r,pe(),s.children);else{const l=Xs(s.children,ie(a));if(l){const u=l.getChild(ve(a));r=va(r,pe(),u)}}}else throw vo("WriteRecord should have .snap or .children")}}return r}function d8(t,e,n,r,i){if(!r&&!i){const s=Zi(t.visibleWrites,e);if(s!=null)return s;{const o=jr(t.visibleWrites,e);if(Xf(o))return n;if(n==null&&!Yf(o,pe()))return null;{const a=n||W.EMPTY_NODE;return eo(o,a)}}}else{const s=jr(t.visibleWrites,e);if(!i&&Xf(s))return n;if(!i&&n==null&&!Yf(s,pe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(vn(u.path,e)||vn(e,u.path))},a=h8(t.allWrites,o,e),l=n||W.EMPTY_NODE;return eo(a,l)}}}function rR(t,e,n){let r=W.EMPTY_NODE;const i=Zi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=jr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=eo(jr(s,new ye(o)),a);r=r.updateImmediateChild(o,l)}),Dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=jr(t.visibleWrites,e);return Dm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iR(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=qe(e,n);if(Yf(t.visibleWrites,s))return null;{const o=jr(t.visibleWrites,s);return Xf(o)?i.getChild(n):eo(o,i.getChild(n))}}function sR(t,e,n,r){const i=qe(e,n),s=Zi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=jr(t.visibleWrites,i);return eo(o,r.getNode().getImmediateChild(n))}else return null}function oR(t,e){return Zi(t.visibleWrites,e)}function aR(t,e,n,r,i,s,o){let a;const l=jr(t.visibleWrites,e),u=Zi(l,pe());if(u!=null)a=u;else if(n!=null)a=eo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&c.length<i;)d(f,r)!==0&&c.push(f),f=h.getNext();return c}else return[]}function lR(){return{visibleWrites:Sn.empty(),allWrites:[],lastWriteId:-1}}function zc(t,e,n,r){return d8(t.writeTree,t.treePath,e,n,r)}function n2(t,e){return rR(t.writeTree,t.treePath,e)}function Pm(t,e,n,r){return iR(t.writeTree,t.treePath,e,n,r)}function Wc(t,e){return oR(t.writeTree,qe(t.treePath,e))}function uR(t,e,n,r,i,s){return aR(t.writeTree,t.treePath,e,n,r,i,s)}function r2(t,e,n){return sR(t.writeTree,t.treePath,e,n)}function f8(t,e){return p8(qe(t.treePath,e),t.writeTree)}function p8(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Xa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ya(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Xa(r,e.snapshotNode,i.oldSnap));else throw vo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const m8=new hR;class i2{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return r2(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wi(this.viewCache_),s=uR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){return{filter:t}}function fR(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pR(t,e,n,r,i){const s=new cR;let o,a;if(n.type===_n.OVERWRITE){const u=n;u.source.fromUser?o=Jf(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!se(u.path),o=Hc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===_n.MERGE){const u=n;u.source.fromUser?o=gR(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===_n.ACK_USER_WRITE){const u=n;u.revert?o=_R(t,e,u.path,r,i,s):o=yR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===_n.LISTEN_COMPLETE)o=vR(t,e,n.path,r,s);else throw vo("Unknown operation type: "+n.type);const l=s.getChanges();return mR(e,o,l),{viewCache:o,changes:l}}function mR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(o8(Qf(e)))}}function g8(t,e,n,r,i,s){const o=e.eventCache;if(Wc(r,n)!=null)return e;{let a,l;if(se(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Wi(e),c=u instanceof W?u:W.EMPTY_NODE,d=n2(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=zc(r,Wi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ie(n);if(u===".priority"){b(qr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Pm(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ve(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Pm(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=r2(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ya(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Hc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(se(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),f,null)}else{const f=ie(n);if(!l.isCompleteForPath(n)&&qr(n)>1)return e;const g=ve(n),E=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),f,E,g,m8,null)}const d=u8(e,u,l.isFullyInitialized()||se(n),c.filtersNodes()),h=new i2(i,d,s);return g8(t,d,n,i,h,a)}function Jf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new i2(i,e,s);if(se(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ya(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ya(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ve(n),f=a.getNode().getImmediateChild(d);let g;if(se(h))g=r;else{const v=c.getCompleteChild(d);v!=null?Xy(h)===".priority"&&v.getChild(Zy(h)).isEmpty()?g=v:g=v.updateChild(h,r):g=W.EMPTY_NODE}if(f.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),d,g,h,c,o);l=ya(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Om(t,e){return t.eventCache.isCompleteForChild(e)}function gR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=qe(n,l);Om(e,ie(c))&&(a=Jf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=qe(n,l);Om(e,ie(c))||(a=Jf(t,a,c,u,i,s,o))}),a}function Mm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;se(n)?u=r:u=new Ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),g=Mm(t,f,h);l=Hc(t,l,new ye(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const g=e.serverCache.getNode().getImmediateChild(d),v=Mm(t,g,h);l=Hc(t,l,new ye(d),v,i,s,o,a)}}),l}function yR(t,e,n,r,i,s,o){if(Wc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(se(n)){let u=new Ce(null);return l.getNode().forEachChild($s,(c,d)=>{u=u.set(new ye(c),d)}),Zf(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((c,d)=>{const h=qe(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Zf(t,e,n,u,i,s,a,o)}}function vR(t,e,n,r,i){const s=e.serverCache,o=u8(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return g8(t,o,n,r,m8,i)}function _R(t,e,n,r,i,s){let o;if(Wc(r,n)!=null)return e;{const a=new i2(r,e,i),l=e.eventCache.getNode();let u;if(se(n)||ie(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=zc(r,Wi(e));else{const d=e.serverCache.getNode();b(d instanceof W,"serverChildren would be complete if leaf node"),c=n2(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ie(n);let d=r2(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ve(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,W.EMPTY_NODE,ve(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zc(r,Wi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Wc(r,pe())!=null,ya(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xp(r.getIndex()),s=Ux(r);this.processor_=dR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),c=new zi(l,o.isFullyInitialized(),i.filtersNodes()),d=new zi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Mh(d,c),this.eventGenerator_=new qx(this.query_)}get query(){return this.query_}}function ER(t){return t.viewCache_.serverCache.getNode()}function CR(t,e){const n=Wi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Fm(t){return t.eventRegistrations_.length===0}function SR(t,e){t.eventRegistrations_.push(e)}function $m(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Um(t,e,n,r){e.type===_n.MERGE&&e.source.queryId!==null&&(b(Wi(t.viewCache_),"We should always have a full cache before handling merges"),b(Qf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pR(t.processor_,i,e,n,r);return fR(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,y8(t,s.changes,s.viewCache.eventCache.getNode(),null)}function TR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(Zs(s,o))}),n.isFullyInitialized()&&r.push(o8(n.getNode())),y8(t,r,n.getNode(),e)}function y8(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Kx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc;class IR{constructor(){this.views=new Map}}function kR(t){b(!qc,"__referenceConstructor has already been defined"),qc=t}function xR(){return b(qc,"Reference.ts has not been loaded"),qc}function RR(t){return t.views.size===0}function s2(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),Um(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Um(o,e,n,r));return s}}function bR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=zc(n,i?r:null),l=!1;a?l=!0:r instanceof W?(a=n2(n,r),l=!1):(a=W.EMPTY_NODE,l=!1);const u=Mh(new zi(a,l,!1),new zi(r,i,!1));return new wR(e,u)}return o}function LR(t,e,n,r,i,s){const o=bR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),SR(o,n),TR(o,n)}function NR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Kr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat($m(u,n,r)),Fm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat($m(l,n,r)),Fm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Kr(t)&&s.push(new(xR())(e._repo,e._path)),{removed:s,events:o}}function v8(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Us(t,e){let n=null;for(const r of t.views.values())n=n||CR(r,e);return n}function _8(t,e){if(e._queryParams.loadsAllData())return Fh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function w8(t,e){return _8(t,e)!=null}function Kr(t){return Fh(t)!=null}function Fh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;function AR(t){b(!Kc,"__referenceConstructor has already been defined"),Kc=t}function DR(){return b(Kc,"Reference.ts has not been loaded"),Kc}let PR=1;class Vm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=lR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OR(t,e,n,r,i){return Xx(t.pendingWriteTree_,e,n,r,i),i?Pl(t,new ji(l8(),e,n)):[]}function ks(t,e,n=!1){const r=Jx(t.pendingWriteTree_,e);if(Zx(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(pe(),!0):zt(r.children,o=>{s=s.set(new ye(o),!0)}),Pl(t,new jc(r.path,s,n))}else return[]}function $h(t,e,n){return Pl(t,new ji(Zp(),e,n))}function MR(t,e,n){const r=Ce.fromObject(n);return Pl(t,new el(Zp(),e,r))}function FR(t,e){return Pl(t,new Za(Zp(),e))}function $R(t,e,n){const r=o2(t,n);if(r){const i=a2(r),s=i.path,o=i.queryId,a=$t(s,e),l=new Za(e2(o),a);return l2(t,s,l)}else return[]}function e1(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||w8(o,e))){const l=NR(o,e,n,r);RR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Kr(f));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=BR(h);for(let g=0;g<f.length;++g){const v=f[g],E=v.query,m=T8(t,v);t.listenProvider_.startListening(_a(E),Gc(t,E),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(_a(e),null):u.forEach(h=>{const f=t.queryToTagMap.get(Uh(h));t.listenProvider_.stopListening(_a(h),f)}))}jR(t,u)}return a}function UR(t,e,n,r){const i=o2(t,r);if(i!=null){const s=a2(i),o=s.path,a=s.queryId,l=$t(o,e),u=new ji(e2(a),l,n);return l2(t,o,u)}else return[]}function VR(t,e,n,r){const i=o2(t,r);if(i){const s=a2(i),o=s.path,a=s.queryId,l=$t(o,e),u=Ce.fromObject(n),c=new el(e2(a),l,u);return l2(t,o,c)}else return[]}function Bm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const g=$t(h,i);s=s||Us(f,g),o=o||Kr(f)});let a=t.syncPointTree_.get(i);a?(o=o||Kr(a),s=s||Us(a,pe())):(a=new IR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const v=Us(g,pe());v&&(s=s.updateImmediateChild(f,v))}));const u=w8(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Uh(e);b(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=zR();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const c=t2(t.pendingWriteTree_,i);let d=LR(a,e,n,c,s,l);if(!u&&!o&&!r){const h=_8(a,e);d=d.concat(WR(t,e,h))}return d}function E8(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),u=Us(a,l);if(u)return u});return d8(i,e,s,n,!0)}function Pl(t,e){return C8(e,t.syncPointTree_,null,t2(t.pendingWriteTree_,pe()))}function C8(t,e,n,r){if(se(t.path))return S8(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=Us(i,pe()));let s=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=f8(r,o);s=s.concat(C8(a,l,u,c))}return i&&(s=s.concat(s2(i,t,r,n))),s}}function S8(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=Us(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=f8(r,o),c=t.operationForChild(o);c&&(s=s.concat(S8(c,a,l,u)))}),i&&(s=s.concat(s2(i,t,r,n))),s}function T8(t,e){const n=e.query,r=Gc(t,n);return{hashFn:()=>(ER(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$R(t,n._path,r):FR(t,n._path);{const s=Fk(i,n);return e1(t,n,null,s)}}}}function Gc(t,e){const n=Uh(e);return t.queryToTagMap.get(n)}function Uh(t){return t._path.toString()+"$"+t._queryIdentifier}function o2(t,e){return t.tagToQueryMap.get(e)}function a2(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function l2(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=t2(t.pendingWriteTree_,e);return s2(r,n,i,null)}function BR(t){return t.fold((e,n,r)=>{if(n&&Kr(n))return[Fh(n)];{let i=[];return n&&(i=v8(n)),zt(r,(s,o)=>{i=i.concat(o)}),i}})}function _a(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DR())(t._repo,t._path):t}function jR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Uh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zR(){return PR++}function WR(t,e,n){const r=e._path,i=Gc(t,e),s=T8(t,n),o=t.listenProvider_.startListening(_a(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!Kr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!se(u)&&c&&Kr(c))return[Fh(c).query];{let h=[];return c&&(h=h.concat(v8(c).map(f=>f.query))),zt(d,(f,g)=>{h=h.concat(g)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(_a(c),Gc(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new u2(n)}node(){return this.node_}}class c2{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new c2(this.syncTree_,n)}node(){return E8(this.syncTree_,this.path_)}}const HR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jm=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KR(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},KR=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},GR=function(t,e,n,r){return h2(e,new c2(n,t),r)},QR=function(t,e,n){return h2(t,new u2(e),n)};function h2(t,e,n){const r=t.getPriority().val(),i=jm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,_t(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ze(i))),o.forEachChild(De,(a,l)=>{const u=h2(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function f2(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=ie(n);for(;i!==null;){const s=Xs(r.node.children,i)||{children:{},childCount:0};r=new d2(i,r,s),n=ve(n),i=ie(n)}return r}function So(t){return t.node.value}function I8(t,e){t.node.value=e,t1(t)}function k8(t){return t.node.childCount>0}function YR(t){return So(t)===void 0&&!k8(t)}function Vh(t,e){zt(t.node.children,(n,r)=>{e(new d2(n,t,r))})}function x8(t,e,n,r){n&&!r&&e(t),Vh(t,i=>{x8(i,e,!0,r)}),n&&r&&e(t)}function XR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ol(t){return new ye(t.parent===null?t.name:Ol(t.parent)+"/"+t.name)}function t1(t){t.parent!==null&&JR(t.parent,t.name,t)}function JR(t,e,n){const r=YR(n),i=gr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,t1(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,t1(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=/[\[\].#$\/\u0000-\u001F\u007F]/,eb=/[\[\].#$\u0000-\u001F\u007F]/,v0=10*1024*1024,R8=function(t){return typeof t=="string"&&t.length!==0&&!ZR.test(t)},b8=function(t){return typeof t=="string"&&t.length!==0&&!eb.test(t)},tb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),b8(t)},L8=function(t,e,n){const r=n instanceof ye?new yx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hi(r));if(typeof e=="function")throw new Error(t+"contains a function "+hi(r)+" with contents = "+e.toString());if(Ny(e))throw new Error(t+"contains "+e.toString()+" "+hi(r));if(typeof e=="string"&&e.length>v0/3&&Nh(e)>v0)throw new Error(t+"contains a string greater than "+v0+" utf8 bytes "+hi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!R8(o)))throw new Error(t+" contains an invalid key ("+o+") "+hi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vx(r,o),L8(t,a,r),_x(r)}),i&&s)throw new Error(t+' contains ".value" child '+hi(r)+" in addition to actual children.")}},N8=function(t,e,n,r){if(!(r&&n===void 0)&&!b8(n))throw new Error(V9(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N8(t,e,n,r)},rb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R8(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tb(n))throw new Error(V9(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A8(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function D8(t,e,n){A8(t,n),P8(t,r=>Gp(r,e))}function es(t,e,n){A8(t,n),P8(t,r=>vn(r,e)||vn(e,r))}function P8(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ki&&vt("event: "+n.toString()),Al(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="repo_interrupt",ab=25;class lb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ib,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bc(),this.transactionQueueTree_=new d2,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ub(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||Bk())t.server_=new Vc(t.repoInfo_,(r,i,s,o)=>{zm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,i,s,o)=>{zm(t,r,i,s,o)},r=>{Wm(t,r)},r=>{hb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Kk(t.repoInfo_,()=>new Hx(t.stats_,t.server_)),t.infoData_=new Vx,t.infoSyncTree_=new Vm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$h(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),p2(t,"connected",!1),t.serverSyncTree_=new Vm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);es(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cb(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function O8(t){return HR({timestamp:cb(t)})}function zm(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Nc(n,u=>_t(u));o=VR(t.serverSyncTree_,s,l,i)}else{const l=_t(n);o=UR(t.serverSyncTree_,s,l,i)}else if(r){const l=Nc(n,u=>_t(u));o=MR(t.serverSyncTree_,s,l)}else{const l=_t(n);o=$h(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=g2(t,s)),es(t.eventQueue_,a,o)}function Wm(t,e){p2(t,"connected",e),e===!1&&fb(t)}function hb(t,e){zt(e,(n,r)=>{p2(t,n,r)})}function p2(t,e,n){const r=new ye("/.info/"+e),i=_t(n);t.infoData_.updateSnapshot(r,i);const s=$h(t.infoSyncTree_,r,i);es(t.eventQueue_,r,s)}function db(t){return t.nextWriteId_++}function fb(t){M8(t,"onDisconnectEvents");const e=O8(t),n=Bc();Gf(t.onDisconnect_,pe(),(i,s)=>{const o=GR(i,s,t.serverSyncTree_,e);a8(n,i,o)});let r=[];Gf(n,pe(),(i,s)=>{r=r.concat($h(t.serverSyncTree_,i,s));const o=vb(t,i);g2(t,o)}),t.onDisconnect_=Bc(),es(t.eventQueue_,pe(),r)}function pb(t,e,n){let r;ie(e._path)===".info"?r=Bm(t.infoSyncTree_,e,n):r=Bm(t.serverSyncTree_,e,n),D8(t.eventQueue_,e._path,r)}function Hm(t,e,n){let r;ie(e._path)===".info"?r=e1(t.infoSyncTree_,e,n):r=e1(t.serverSyncTree_,e,n),D8(t.eventQueue_,e._path,r)}function mb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ob)}function M8(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function F8(t,e,n){return E8(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function m2(t,e=t.transactionQueueTree_){if(e||Bh(t,e),So(e)){const n=U8(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gb(t,Ol(e),n)}else k8(e)&&Vh(e,n=>{m2(t,n)})}function gb(t,e,n){const r=n.map(u=>u.currentWriteId),i=F8(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=$t(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{M8(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(ks(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Bh(t,f2(t.transactionQueueTree_,e)),m2(t,t.transactionQueueTree_),es(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Al(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Gt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}g2(t,e)}},o)}function g2(t,e){const n=$8(t,e),r=Ol(n),i=U8(t,n);return yb(t,i,r),r}function yb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=$t(n,l.path);let c=!1,d;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ab)c=!0,d="maxretry",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0));else{const h=F8(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){L8("transaction failed: Data returned ",f,l.path);let g=_t(f);typeof f=="object"&&f!=null&&gr(f,".priority")||(g=g.updatePriority(h.getPriority()));const E=l.currentWriteId,m=O8(t),p=QR(g,h,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=db(t),o.splice(o.indexOf(E),1),i=i.concat(OR(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(ks(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(ks(t.serverSyncTree_,l.currentWriteId,!0))}es(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Bh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Al(r[a]);m2(t,t.transactionQueueTree_)}function $8(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&So(r)===void 0;)r=f2(r,n),e=ve(e),n=ie(e);return r}function U8(t,e){const n=[];return V8(t,e,n),n.sort((r,i)=>r.order-i.order),n}function V8(t,e,n){const r=So(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vh(e,i=>{V8(t,i,n)})}function Bh(t,e){const n=So(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,I8(e,n.length>0?n:void 0)}Vh(e,r=>{Bh(t,r)})}function vb(t,e){const n=Ol($8(t,e)),r=f2(t.transactionQueueTree_,e);return XR(r,i=>{_0(t,i)}),_0(t,r),x8(r,i=>{_0(t,i)}),n}function _0(t,e){const n=So(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ks(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?I8(e,void 0):n.length=s+1,es(t.eventQueue_,Ol(e),i);for(let o=0;o<r.length;o++)Al(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const qm=function(t,e){const n=Eb(t),r=n.namespace;n.domain==="firebase.com"&&Vi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ak();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wk(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},Eb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=_b(t.substring(c,d)));const h=wb(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B8{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class j8{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:Xy(this._path)}get ref(){return new yr(this._repo,this._path)}get _queryIdentifier(){const e=bm(this._queryParams),n=Wp(e);return n==="{}"?"default":n}get _queryObject(){return bm(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof y2))return!1;const n=this._repo===e._repo,r=Gp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gx(this._path)}}class yr extends y2{constructor(e,n){super(e,n,new Jp,!1)}get parent(){const e=Zy(this._path);return e===null?null:new yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class tl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=n1(this.ref,e);return new tl(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new tl(i,n1(this.ref,r),De)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function n1(t,e){return t=Me(t),ie(t._path)===null?nb("child","path",e,!1):N8("child","path",e,!1),new yr(t._repo,qe(t._path,e))}class v2{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new B8("value",this,new tl(e.snapshotNode,new yr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new j8(this,e,n):null}matches(e){return e instanceof v2?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class _2{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new j8(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const r=n1(new yr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new B8(e.type,this,new tl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof _2?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ml(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Hm(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Cb(n,s||void 0),a=e==="value"?new v2(o):new _2(e,o);return pb(t._repo,t,a),()=>Hm(t._repo,t,a)}function Sb(t,e,n,r){return Ml(t,"value",e,n,r)}function Tb(t,e,n,r){return Ml(t,"child_added",e,n,r)}function Ib(t,e,n,r){return Ml(t,"child_changed",e,n,r)}function kb(t,e,n,r){return Ml(t,"child_moved",e,n,r)}function xb(t,e,n,r){return Ml(t,"child_removed",e,n,r)}kR(yr);AR(yr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="FIREBASE_DATABASE_EMULATOR_HOST",r1={};let bb=!1;function Lb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qm(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Rb]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=qm(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Hf(Hf.OWNER):new zk(t.name,t.options,e);rb("Invalid Firebase Database URL",o),se(o.path)||Vi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ab(a,t,c,new jk(t.name,n));return new Db(d,t)}function Nb(t,e){const n=r1[e];(!n||n[t.key]!==t)&&Vi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mb(t),delete n[t.key]}function Ab(t,e,n,r){let i=r1[e.name];i||(i={},r1[e.name]=i);let s=i[t.toURLString()];return s&&Vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new lb(t,bb,n,r),i[t.toURLString()]=s,s}class Db{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ub(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yr(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){xk(ei),ln(new Xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Lb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),We(dm,fm,t),We(dm,fm,"esm2017")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pb();var Ob="firebase",Mb="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Ob,Mb,"app");var Fb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,w2=w2||{},Y=Fb||self;function Qc(){}function jh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $b(t){return Object.prototype.hasOwnProperty.call(t,w0)&&t[w0]||(t[w0]=++Ub)}var w0="closure_uid_"+(1e9*Math.random()>>>0),Ub=0;function Vb(t,e,n){return t.call.apply(t.bind,arguments)}function Bb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=Vb:Ct=Bb,Ct.apply(null,arguments)}function Ru(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ti(){this.s=this.s,this.o=this.o}var jb=0;ti.prototype.s=!1;ti.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jb!=0)&&$b(this)};ti.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const z8=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E2(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Km(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var zb=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Qc,e),Y.removeEventListener("test",Qc,e)}catch{}return t}();function Yc(t){return/^[\s\xa0]*$/.test(t)}var Gm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function E0(t,e){return t<e?-1:t>e?1:0}function zh(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return zh().indexOf(t)!=-1}function C2(t){return C2[" "](t),t}C2[" "]=Qc;function Wb(t){var e=Kb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Hb=Nn("Opera"),to=Nn("Trident")||Nn("MSIE"),W8=Nn("Edge"),i1=W8||to,H8=Nn("Gecko")&&!(zh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),qb=zh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function q8(){var t=Y.document;return t?t.documentMode:void 0}var Xc;e:{var C0="",S0=function(){var t=zh();if(H8)return/rv:([^\);]+)(\)|;)/.exec(t);if(W8)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qb)return/WebKit\/(\S+)/.exec(t);if(Hb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(S0&&(C0=S0?S0[1]:""),to){var T0=q8();if(T0!=null&&T0>parseFloat(C0)){Xc=String(T0);break e}}Xc=C0}var Kb={};function Gb(){return Wb(function(){let t=0;const e=Gm(String(Xc)).split("."),n=Gm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=E0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||E0(i[2].length==0,s[2].length==0)||E0(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var s1;if(Y.document&&to){var Qm=q8();s1=Qm||parseInt(Xc,10)||void 0}else s1=void 0;var Qb=s1;function nl(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H8){e:{try{C2(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.X.h.call(this)}}dt(nl,St);var Yb={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $l="closure_listenable_"+(1e6*Math.random()|0),Xb=0;function Jb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++Xb,this.ba=this.ea=!1}function Wh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function S2(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function K8(t){const e={};for(const n in t)e[n]=t[n];return e}const Ym="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G8(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ym.length;s++)n=Ym[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hh(t){this.src=t,this.g={},this.h=0}Hh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=a1(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Jb(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function o1(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=z8(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Wh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function a1(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var T2="closure_lm_"+(1e6*Math.random()|0),I0={};function Q8(t,e,n,r,i){if(r&&r.once)return X8(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Q8(t,e[s],n,r,i);return null}return n=x2(n),t&&t[$l]?t.N(e,n,Fl(r)?!!r.capture:!!r,i):Y8(t,e,n,!1,r,i)}function Y8(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fl(i)?!!i.capture:!!i,a=k2(t);if(a||(t[T2]=a=new Hh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Zb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Z8(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zb(){function t(n){return e.call(t.src,t.listener,n)}const e=eL;return t}function X8(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)X8(t,e[s],n,r,i);return null}return n=x2(n),t&&t[$l]?t.O(e,n,Fl(r)?!!r.capture:!!r,i):Y8(t,e,n,!0,r,i)}function J8(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)J8(t,e[s],n,r,i);else r=Fl(r)?!!r.capture:!!r,n=x2(n),t&&t[$l]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=a1(s,n,r,i),-1<n&&(Wh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=k2(t))&&(e=t.g[e.toString()],t=-1,e&&(t=a1(e,n,r,i)),(n=-1<t?e[t]:null)&&I2(n))}function I2(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[$l])o1(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Z8(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=k2(e))?(o1(n,t),n.h==0&&(n.src=null,e[T2]=null)):Wh(t)}}}function Z8(t){return t in I0?I0[t]:I0[t]="on"+t}function eL(t,e){if(t.ba)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&I2(t),t=n.call(r,e)}return t}function k2(t){return t=t[T2],t instanceof Hh?t:null}var k0="__closure_events_fn_"+(1e9*Math.random()>>>0);function x2(t){return typeof t=="function"?t:(t[k0]||(t[k0]=function(e){return t.handleEvent(e)}),t[k0])}function st(){ti.call(this),this.i=new Hh(this),this.P=this,this.I=null}dt(st,ti);st.prototype[$l]=!0;st.prototype.removeEventListener=function(t,e,n,r){J8(this,t,e,n,r)};function ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),G8(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=bu(o,r,!0,e)&&i}if(o=e.g=t,i=bu(o,r,!0,e)&&i,i=bu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=bu(o,r,!1,e)&&i}st.prototype.M=function(){if(st.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Wh(n[r]);delete t.g[e],t.h--}}this.I=null};st.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&o1(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var R2=Y.JSON.stringify;function tL(){var t=nv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nL{constructor(){this.h=this.g=null}add(e,n){const r=ev.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ev=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rL,t=>t.reset());class rL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iL(t){Y.setTimeout(()=>{throw t},0)}function tv(t,e){l1||sL(),u1||(l1(),u1=!0),nv.add(t,e)}var l1;function sL(){var t=Y.Promise.resolve(void 0);l1=function(){t.then(oL)}}var u1=!1,nv=new nL;function oL(){for(var t;t=tL();){try{t.h.call(t.g)}catch(n){iL(n)}var e=ev;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}u1=!1}function qh(t,e){st.call(this),this.h=t||1,this.g=e||Y,this.j=Ct(this.lb,this),this.l=Date.now()}dt(qh,st);$=qh.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(b2(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function b2(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){qh.X.M.call(this),b2(this),delete this.g};function L2(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function rv(t){t.g=L2(()=>{t.g=null,t.i&&(t.i=!1,rv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aL extends ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rv(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rl(t){ti.call(this),this.h=t,this.g={}}dt(rl,ti);var Xm=[];function iv(t,e,n,r){Array.isArray(n)||(n&&(Xm[0]=n.toString()),n=Xm);for(var i=0;i<n.length;i++){var s=Q8(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sv(t){S2(t.g,function(e,n){this.g.hasOwnProperty(n)&&I2(e)},t),t.g={}}rl.prototype.M=function(){rl.X.M.call(this),sv(this)};rl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kh(){this.g=!0}Kh.prototype.Aa=function(){this.g=!1};function lL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hL(t,n)+(r?" "+r:"")})}function cL(t,e){t.info(function(){return"TIMEOUT: "+e})}Kh.prototype.info=function(){};function hL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return R2(n)}catch{return e}}var ts={},Jm=null;function Gh(){return Jm=Jm||new st}ts.Pa="serverreachability";function ov(t){St.call(this,ts.Pa,t)}dt(ov,St);function il(t){const e=Gh();ct(e,new ov(e))}ts.STAT_EVENT="statevent";function av(t,e){St.call(this,ts.STAT_EVENT,t),this.stat=e}dt(av,St);function bt(t){const e=Gh();ct(e,new av(e,t))}ts.Qa="timingevent";function lv(t,e){St.call(this,ts.Qa,t),this.size=e}dt(lv,St);function Ul(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Qh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function N2(){}N2.prototype.h=null;function Zm(t){return t.h||(t.h=t.i())}function cv(){}var Vl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function A2(){St.call(this,"d")}dt(A2,St);function D2(){St.call(this,"c")}dt(D2,St);var c1;function Yh(){}dt(Yh,N2);Yh.prototype.g=function(){return new XMLHttpRequest};Yh.prototype.i=function(){return{}};c1=new Yh;function Bl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new rl(this),this.O=dL,t=i1?125:void 0,this.T=new qh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hv}function hv(){this.i=null,this.g="",this.h=!1}var dL=45e3,h1={},Jc={};$=Bl.prototype;$.setTimeout=function(t){this.O=t};function d1(t,e,n){t.K=1,t.v=Jh(cr(e)),t.s=n,t.P=!0,dv(t,null)}function dv(t,e){t.F=Date.now(),jl(t),t.A=cr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),wv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new hv,t.g=Bv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aL(Ct(t.La,t,t.g),t.N)),iv(t.S,t.g,"readystatechange",t.ib),e=t.H?K8(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),il(),lL(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&tr(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=tr(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||i1||this.g&&(this.h.h||this.g.fa()||rg(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?il(3):il(2)),Xh(this);var n=this.g.aa();this.Y=n;t:if(fv(this)){var r=rg(this.g);t="";var i=r.length,s=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),wa(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,uL(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yc(a)){var u=a;break t}}u=null}if(n=u)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,f1(this,n);else{this.i=!1,this.o=3,bt(12),vi(this),wa(this);break e}}this.P?(pv(this,c,o),i1&&this.i&&c==3&&(iv(this.S,this.T,"tick",this.hb),this.T.start())):(xs(this.j,this.m,o,null),f1(this,o)),c==4&&vi(this),this.i&&!this.I&&(c==4?Fv(this.l,this):(this.i=!1,jl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),vi(this),wa(this)}}}catch{}finally{}};function fv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function pv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=fL(t,n),i==Jc){e==4&&(t.o=4,bt(14),r=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==h1){t.o=4,bt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xs(t.j,t.m,i,null),f1(t,i);fv(t)&&i!=Jc&&i!=h1&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),V2(e),e.K=!0,bt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),vi(t),wa(t))}$.hb=function(){if(this.g){var t=tr(this.g),e=this.g.fa();this.C<e.length&&(Xh(this),pv(this,t,e),this.i&&t!=4&&jl(this))}};function fL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Jc:(n=Number(e.substring(n,r)),isNaN(n)?h1:(r+=1,r+n>e.length?Jc:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,vi(this)};function jl(t){t.V=Date.now()+t.O,mv(t,t.O)}function mv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ul(Ct(t.gb,t),e)}function Xh(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cL(this.j,this.A),this.K!=2&&(il(),bt(17)),vi(this),this.o=2,wa(this)):mv(this,this.V-t)};function wa(t){t.l.G==0||t.I||Fv(t.l,t)}function vi(t){Xh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,b2(t.T),sv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function f1(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||p1(n.h,t))){if(!t.J&&p1(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)th(n),td(n);else break e;U2(n),bt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ul(Ct(n.cb,n),6e3));if(1>=Sv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _i(n,11)}else if((t.J||n.g==t)&&th(n),!Yc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(P2(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Vv(r,r.H?r.ka:null,r.V),o.J){Tv(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Xh(a),jl(a)),r.g=o}else Ov(r);0<n.i.length&&nd(n)}else u[0]!="stop"&&u[0]!="close"||_i(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_i(n,7):$2(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}il(4)}catch{}}function pL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mL(t),r=pL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xi){this.h=e!==void 0?e:t.h,Zc(this,t.j),this.s=t.s,this.g=t.g,eh(this,t.m),this.l=t.l,e=t.i;var n=new sl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),eg(this,n),this.o=t.o}else t&&(n=String(t).match(yv))?(this.h=!!e,Zc(this,n[1]||"",!0),this.s=ta(n[2]||""),this.g=ta(n[3]||"",!0),eh(this,n[4]),this.l=ta(n[5]||"",!0),eg(this,n[6]||"",!0),this.o=ta(n[7]||"")):(this.h=!!e,this.i=new sl(null,this.h))}xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(na(e,tg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(na(e,tg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(na(n,n.charAt(0)=="/"?_L:vL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",na(n,EL)),t.join("")};function cr(t){return new xi(t)}function Zc(t,e,n){t.j=n?ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function eg(t,e,n){e instanceof sl?(t.i=e,CL(t.i,t.h)):(n||(e=na(e,wL)),t.i=new sl(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function Jh(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function na(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tg=/[#\/\?@]/g,vL=/[#\?:]/g,_L=/[#\?]/g,wL=/[#\?@]/g,EL=/#/g;function sl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ni(t){t.g||(t.g=new Map,t.h=0,t.i&&gL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=sl.prototype;$.add=function(t,e){ni(this),this.i=null,t=To(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vv(t,e){ni(t),e=To(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _v(t,e){return ni(t),e=To(t,e),t.g.has(e)}$.forEach=function(t,e){ni(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){ni(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){ni(this);let e=[];if(typeof t=="string")_v(this,t)&&(e=e.concat(this.g.get(To(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return ni(this),this.i=null,t=To(this,t),_v(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function wv(t,e,n){vv(t,e),0<n.length&&(t.i=null,t.g.set(To(t,e),E2(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function To(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CL(t,e){e&&!t.j&&(ni(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vv(this,r),wv(this,i,n))},t)),t.j=e}var SL=class{constructor(t,e){this.h=t,this.g=e}};function Ev(t){this.l=t||TL,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TL=10;function Cv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Sv(t){return t.h?1:t.g?t.g.size:0}function p1(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function P2(t,e){t.g?t.g.add(e):t.h=e}function Tv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ev.prototype.cancel=function(){if(this.i=Iv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Iv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E2(t.i)}function O2(){}O2.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};O2.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function IL(){this.g=new O2}function kL(t,e,n){const r=n||"";try{gv(t,function(i,s){let o=i;Fl(i)&&(o=R2(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xL(t,e){const n=new Kh;if(Y.Image){const r=new Image;r.onload=Ru(Lu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ru(Lu,n,r,"TestLoadImage: error",!1,e),r.onabort=Ru(Lu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ru(Lu,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function zl(t){this.l=t.ac||null,this.j=t.jb||!1}dt(zl,N2);zl.prototype.g=function(){return new Zh(this.l,this.j)};zl.prototype.i=function(t){return function(){return t}}({});function Zh(t,e){st.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=M2,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Zh,st);var M2=0;$=Zh.prototype;$.open=function(t,e){if(this.readyState!=M2)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ol(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wl(this)),this.readyState=M2};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ol(this)),this.g&&(this.readyState=3,ol(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function kv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wl(this):ol(this),this.readyState==3&&kv(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Wl(this))};$.Ua=function(t){this.g&&(this.response=t,Wl(this))};$.ga=function(){this.g&&Wl(this)};function Wl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ol(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ol(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RL=Y.JSON.parse;function Pe(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xv,this.K=this.L=!1}dt(Pe,st);var xv="",bL=/^https?$/i,LL=["POST","PUT"];$=Pe.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():c1.g(),this.C=this.u?Zm(this.u):Zm(c1),this.g.onreadystatechange=Ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){ng(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=z8(LL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Lv(this),0<this.B&&((this.K=NL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.qa,this)):this.A=L2(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ng(this,s)}};function NL(t){return to&&Gb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof w2<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function ng(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rv(t),ed(t)}function Rv(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),ed(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ed(this,!0)),Pe.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?bv(this):this.fb())};$.fb=function(){bv(this)};function bv(t){if(t.h&&typeof w2<"u"&&(!t.C[1]||tr(t)!=4||t.aa()!=2)){if(t.v&&tr(t)==4)L2(t.Ha,0,t);else if(ct(t,"readystatechange"),tr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(yv)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!bL.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<tr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rv(t)}}finally{ed(t)}}}}function ed(t,e){if(t.g){Lv(t);const n=t.g,r=t.C[0]?Qc:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function tr(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RL(e)}};function rg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nv(t){let e="";return S2(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function F2(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Nv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Av(t){this.Ca=0,this.i=[],this.j=new Kh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qo("baseRetryDelayMs",5e3,t),this.bb=qo("retryDelaySeedMs",1e4,t),this.$a=qo("forwardChannelMaxRetries",2,t),this.ta=qo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ev(t&&t.concurrentRequestLimit),this.Fa=new IL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=Av.prototype;$.ma=8;$.G=1;function $2(t){if(Dv(t),t.G==3){var e=t.U++,n=cr(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Hl(t,n),e=new Bl(t,t.j,e,void 0),e.K=2,e.v=Jh(cr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Bv(e.l,null),e.g.da(e.v)),e.F=Date.now(),jl(e)}Uv(t)}function td(t){t.g&&(V2(t),t.g.cancel(),t.g=null)}function Dv(t){td(t),t.u&&(Y.clearTimeout(t.u),t.u=null),th(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function nd(t){Cv(t.h)||t.m||(t.m=!0,tv(t.Ja,t),t.C=0)}function AL(t,e){return Sv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ul(Ct(t.Ja,t,e),$v(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=K8(s),G8(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pv(this,i,e),n=cr(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),Hl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Nv(s)))+"&"+e:this.o&&F2(n,this.o,s)),P2(this.h,i),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),i.Z=!0,d1(i,n,null)):d1(i,n,e),this.G=2}}else this.G==3&&(t?ig(this,t):this.i.length==0||Cv(this.h)||ig(this))};function ig(t,e){var n;e?n=e.m:n=t.U++;const r=cr(t.F);Ie(r,"SID",t.I),Ie(r,"RID",n),Ie(r,"AID",t.T),Hl(t,r),t.o&&t.s&&F2(r,t.o,t.s),n=new Bl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Pv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),P2(t.h,n),d1(n,r,e)}function Hl(t,e){t.ia&&S2(t.ia,function(n,r){Ie(e,r,n)}),t.l&&gv({},function(n,r){Ie(e,r,n)})}function Pv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ct(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{kL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Ov(t){t.g||t.u||(t.Z=1,tv(t.Ia,t),t.A=0)}function U2(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ul(Ct(t.Ia,t),$v(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,Mv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ul(Ct(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,bt(10),td(this),Mv(this))};function V2(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Mv(t){t.g=new Bl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=cr(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),Hl(t,e),t.o&&t.s&&F2(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Jh(cr(e)),n.s=null,n.P=!0,dv(n,t)}$.cb=function(){this.v!=null&&(this.v=null,td(this),U2(this),bt(19))};function th(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Fv(t,e){var n=null;if(t.g==e){th(t),V2(t),t.g=null;var r=2}else if(p1(t.h,e))n=e.D,Tv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Gh(),ct(r,new lv(r,n)),nd(t)}else Ov(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&AL(t,e)||r==2&&U2(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:_i(t,5);break;case 4:_i(t,10);break;case 3:_i(t,6);break;default:_i(t,2)}}}function $v(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function _i(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ct(t.kb,t);n||(n=new xi("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Zc(n,"https"),Jh(n)),xL(n.toString(),r)}else bt(2);t.G=0,t.l&&t.l.va(e),Uv(t),Dv(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Uv(t){if(t.G=0,t.la=[],t.l){const e=Iv(t.h);(e.length!=0||t.i.length!=0)&&(Km(t.la,e),Km(t.la,t.i),t.h.i.length=0,E2(t.i),t.i.length=0),t.l.ua()}}function Vv(t,e,n){var r=n instanceof xi?cr(n):new xi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),eh(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new xi(null,void 0);r&&Zc(s,r),e&&(s.g=e),i&&eh(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ma),Hl(t,r),r}function Bv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new zl({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function jv(){}$=jv.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function nh(){if(to&&!(10<=Number(Qb)))throw Error("Environmental error: no available transport.")}nh.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){st.call(this),this.g=new Av(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Io(this)}dt(Jt,st);Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vv(t,null,t.V),nd(t)};Jt.prototype.close=function(){$2(this.g)};Jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=R2(t),t=n);e.i.push(new SL(e.ab++,t)),e.G==3&&nd(e)};Jt.prototype.M=function(){this.g.l=null,delete this.j,$2(this.g),delete this.g,Jt.X.M.call(this)};function zv(t){A2.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(zv,A2);function Wv(){D2.call(this),this.status=1}dt(Wv,D2);function Io(t){this.g=t}dt(Io,jv);Io.prototype.xa=function(){ct(this.g,"a")};Io.prototype.wa=function(t){ct(this.g,new zv(t))};Io.prototype.va=function(t){ct(this.g,new Wv)};Io.prototype.ua=function(){ct(this.g,"b")};nh.prototype.createWebChannel=nh.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;Qh.NO_ERROR=0;Qh.TIMEOUT=8;Qh.HTTP_ERROR=6;uv.COMPLETE="complete";cv.EventType=Vl;Vl.OPEN="a";Vl.CLOSE="b";Vl.ERROR="c";Vl.MESSAGE="d";st.prototype.listen=st.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var DL=function(){return new nh},PL=function(){return Gh()},x0=Qh,OL=uv,ML=ts,sg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},FL=zl,Nu=cv,$L=Pe;const og="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Cl("@firebase/firestore");function ag(){return Hi.logLevel}function V(t,...e){if(Hi.logLevel<=ce.DEBUG){const n=e.map(B2);Hi.debug(`Firestore (${ko}): ${t}`,...n)}}function hr(t,...e){if(Hi.logLevel<=ce.ERROR){const n=e.map(B2);Hi.error(`Firestore (${ko}): ${t}`,...n)}}function m1(t,...e){if(Hi.logLevel<=ce.WARN){const n=e.map(B2);Hi.warn(`Firestore (${ko}): ${t}`,...n)}}function B2(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+t;throw hr(e),new Error(e)}function we(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class VL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BL{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ri,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ri)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new Hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new gt(e)}}class jL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(we(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class zL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new jL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.A=n.token,new WL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Qe(0,0))}static max(){return new Z(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return al.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof al?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends al{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const KL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends al{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return KL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ke.fromString(e))}static fromName(e){return new B(ke.fromString(e).popFirst(5))}static empty(){return new B(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ke(e.slice()))}}function GL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Gr(i,B.empty(),e)}function QL(t){return new Gr(t.readTime,t.key,-1)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(Z.min(),B.empty(),-1)}static max(){return new Gr(Z.max(),B.empty(),-1)}}function YL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==XL)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Kl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}j2.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){return t==null}function rh(t){return t===0&&1/t==-1/0}function eN(t){return typeof t=="number"&&Number.isInteger(t)&&!rh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new kt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const tN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(we(!!t),typeof t=="string"){let e=0;const n=tN.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ro(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qv(t){const e=t.mapValue.fields.__previous_value__;return Gv(e)?Qv(e):e}function ul(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gv(t)?4:nN(t)?9007199254740991:10:G()}function $n(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ul(t).isEqual(ul(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Qr(r.timestampValue),o=Qr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ro(r.bytesValue).isEqual(ro(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return je(r.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(r.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return je(r.integerValue)===je(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=je(r.doubleValue),o=je(i.doubleValue);return s===o?rh(s)===rh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(lg(s)!==lg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!$n(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function cl(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=je(i.integerValue||i.doubleValue),a=je(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ug(t.timestampValue,e.timestampValue);case 4:return ug(ul(t),ul(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ro(i),a=ro(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=me(o[l],a[l]);if(u!==0)return u}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=me(je(i.latitude),je(s.latitude));return o!==0?o:me(je(i.longitude),je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=io(o[l],a[l]);if(u)return u}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Au.mapValue&&s===Au.mapValue)return 0;if(i===Au.mapValue)return 1;if(s===Au.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=me(a[c],u[c]);if(d!==0)return d;const h=io(o[a[c]],l[u[c]]);if(h!==0)return h}return me(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Qr(t),r=Qr(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function so(t){return g1(t)}function g1(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Qr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ro(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=g1(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${g1(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function y1(t){return!!t&&"integerValue"in t}function z2(t){return!!t&&"arrayValue"in t}function cg(t){return!!t&&"nullValue"in t}function hg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ju(t){return!!t&&"mapValue"in t}function Ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.position=e,this.inclusive=n}}function dg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{}class Ke extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iN(e,n,r):n==="array-contains"?new aN(e,r):n==="in"?new lN(e,r):n==="not-in"?new uN(e,r):n==="array-contains-any"?new cN(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sN(e,r):new oN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Un extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Un(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xv(t){return t.op==="and"}function Jv(t){return rN(t)&&Xv(t)}function rN(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function v1(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+so(t.value);if(Jv(t))return t.filters.map(e=>v1(e)).join(",");{const e=t.filters.map(n=>v1(n)).join(",");return`${t.op}(${e})`}}function Zv(t,e){return t instanceof Ke?function(n,r){return r instanceof Ke&&n.op===r.op&&n.field.isEqual(r.field)&&$n(n.value,r.value)}(t,e):t instanceof Un?function(n,r){return r instanceof Un&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Zv(s,r.filters[o]),!0):!1}(t,e):void G()}function e_(t){return t instanceof Ke?function(e){return`${e.field.canonicalString()} ${e.op} ${so(e.value)}`}(t):t instanceof Un?function(e){return e.op.toString()+" {"+e.getFilters().map(e_).join(" ,")+"}"}(t):"Filter"}class iN extends Ke{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class sN extends Ke{constructor(e,n){super(e,"in",n),this.keys=t_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oN extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=t_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class aN extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return z2(n)&&cl(n.arrayValue,this.value)}}class lN extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cl(this.value.arrayValue,n)}}class uN extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cl(this.value.arrayValue,n)}}class cN extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!z2(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function hN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:at.RED,this.left=i!=null?i:at.EMPTY,this.right=s!=null?s:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pg(this.data.getIterator())}getIteratorFrom(e){return new pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Ye(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ju(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ju(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ju(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(Ea(this.value))}}function n_(t){const e=[];return ns(t.fields,(n,r)=>{const i=new Et([n]);if(Ju(r)){const s=n_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,Z.min(),Z.min(),Z.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,Z.min(),Z.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,Z.min(),Z.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dN(t,e,n,r,i,s,o)}function W2(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>v1(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.ft=n}return e.ft}function H2(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fg(t.startAt,e.startAt)&&fg(t.endAt,e.endAt)}function _1(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function fN(t,e,n,r,i,s,o,a){return new id(t,e,n,r,i,s,o,a)}function q2(t){return new id(t)}function gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gN(t){return t.collectionGroup!==null}function Vs(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=mN(e),r=pN(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ca(n)),e.dt.push(new Ca(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ca(Et.keyField(),s))}}}return e.dt}function dr(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=mg(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ca(s.field,o))}const r=e.endAt?new ih(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ih(e.startAt.position,e.startAt.inclusive):null;e._t=mg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function w1(t,e,n){return new id(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return H2(dr(t),dr(e))&&t.limitType===e.limitType}function r_(t){return`${W2(dr(t))}|lt:${t.limitType}`}function E1(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>e_(r)).join(", ")}]`),rd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),`Target(${n})`}(dr(t))}; limitType=${t.limitType})`}function sd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Vs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=dg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vs(n),r)||n.endAt&&!function(i,s,o){const a=dg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vs(n),r))}(t,e)}function yN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i_(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=vN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vN(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?io(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rh(e)?"-0":e}}function o_(t){return{integerValue:""+t}}function _N(t,e){return eN(e)?o_(e):s_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this._=void 0}}function wN(t,e,n){return t instanceof sh?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof hl?l_(t,e):t instanceof dl?u_(t,e):function(r,i){const s=a_(r,i),o=yg(s)+yg(r.gt);return y1(s)&&y1(r.gt)?o_(o):s_(r.yt,o)}(t,e)}function EN(t,e,n){return t instanceof hl?l_(t,e):t instanceof dl?u_(t,e):n}function a_(t,e){return t instanceof oh?y1(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class sh extends od{}class hl extends od{constructor(e){super(),this.elements=e}}function l_(t,e){const n=c_(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends od{constructor(e){super(),this.elements=e}}function u_(t,e){let n=c_(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class oh extends od{constructor(e,n){super(),this.yt=e,this.gt=n}}function yg(t){return je(t.integerValue||t.doubleValue)}function c_(t){return z2(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof hl&&r instanceof hl||n instanceof dl&&r instanceof dl?no(n.elements,r.elements,$n):n instanceof oh&&r instanceof oh?$n(n.gt,r.gt):n instanceof sh&&r instanceof sh}(t.transform,e.transform)}class SN{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ad{}function h_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new f_(t.key,Mn.none()):new Ql(t.key,t.data,Mn.none());{const n=t.data,r=Ot.empty();let i=new Ye(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new qt(i.toArray()),Mn.none())}}function TN(t,e,n){t instanceof Ql?function(r,i,s){const o=r.value.clone(),a=_g(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(r,i,s){if(!Zu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=_g(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(d_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sa(t,e,n,r){return t instanceof Ql?function(i,s,o,a){if(!Zu(i.precondition,s))return o;const l=i.value.clone(),u=wg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(i,s,o,a){if(!Zu(i.precondition,s))return o;const l=wg(i.fieldTransforms,a,s),u=s.data;return u.setAll(d_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Zu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function IN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=a_(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>CN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ql extends ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function d_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _g(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EN(o,a,n[i]))}return r}function wg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wN(s,o,e))}return r}class f_ extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ue;function RN(t){switch(t){default:return G();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function p_(t){if(t===void 0)return hr("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ve.OK:return x.OK;case Ve.CANCELLED:return x.CANCELLED;case Ve.UNKNOWN:return x.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return x.INTERNAL;case Ve.UNAVAILABLE:return x.UNAVAILABLE;case Ve.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ve.NOT_FOUND:return x.NOT_FOUND;case Ve.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ve.ABORTED:return x.ABORTED;case Ve.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ve.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(ue=Ve||(Ve={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new Je(B.comparator);function fr(){return bN}const m_=new Je(B.comparator);function ra(...t){let e=m_;for(const n of t)e=e.insert(n.key,n);return e}function g_(t){let e=m_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wi(){return Ta()}function y_(){return Ta()}function Ta(){return new xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const LN=new Je(B.comparator),NN=new Ye(B.comparator);function oe(...t){let e=NN;for(const n of t)e=e.add(n);return e}const AN=new Ye(me);function v_(){return AN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ld(Z.min(),i,v_(),fr(),oe())}}class Yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yl(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class __{constructor(e,n){this.targetId=e,this.Et=n}}class w_{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Eg{constructor(){this.At=0,this.Rt=Sg(),this.bt=kt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=oe(),n=oe(),r=oe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Yl(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Sg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class DN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=fr(),this.qt=Cg(),this.Ut=new Ye(me)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(_1(s))if(r===0){const o=new B(s.path);this.Qt(n,o,wt.newNoDocument(o,Z.min()))}else we(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&_1(a.target)){const l=new B(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,wt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=oe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new ld(e,n,this.Ut,this.Lt,r);return this.Lt=fr(),this.qt=Cg(),this.Ut=new Ye(me),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Eg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ye(me),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Eg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Cg(){return new Je(B.comparator)}function Sg(){return new Je(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ON=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MN=(()=>({and:"AND",or:"OR"}))();class FN{constructor(e,n){this.databaseId=e,this.wt=n}}function ah(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E_(t,e){return t.wt?e.toBase64():e.toUint8Array()}function $N(t,e){return ah(t,e.toTimestamp())}function Fn(t){return we(!!t),Z.fromTimestamp(function(e){const n=Qr(e);return new Qe(n.seconds,n.nanos)}(t))}function K2(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function C_(t){const e=ke.fromString(t);return we(k_(e)),e}function C1(t,e){return K2(t.databaseId,e.path)}function R0(t,e){const n=C_(e);if(n.get(1)!==t.databaseId.projectId)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(S_(n))}function S1(t,e){return K2(t.databaseId,e)}function UN(t){const e=C_(t);return e.length===4?ke.emptyPath():S_(e)}function T1(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function S_(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tg(t,e,n){return{name:C1(t,e),fields:n.value.mapValue.fields}}function VN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(we(u===void 0||typeof u=="string"),kt.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?x.UNKNOWN:p_(l.code);return new j(u,l.message||"")}(o);n=new w_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=R0(t,r.document.name),s=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):Z.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ec(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=R0(t,r.document),s=r.readTime?Fn(r.readTime):Z.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=R0(t,r.document),s=r.removedTargetIds||[];n=new ec([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new xN(i),o=r.targetId;n=new __(o,s)}}return n}function BN(t,e){let n;if(e instanceof Ql)n={update:Tg(t,e.key,e.value)};else if(e instanceof f_)n={delete:C1(t,e.key)};else if(e instanceof ri)n={update:Tg(t,e.key,e.data),updateMask:YN(e.fieldMask)};else{if(!(e instanceof kN))return G();n={verify:C1(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof sh)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof oh)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:$N(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function jN(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Fn(r.updateTime):Fn(i);return s.isEqual(Z.min())&&(s=Fn(i)),new SN(s,r.transformResults||[])}(n,e))):[]}function zN(t,e){return{documents:[S1(t,e.path)]}}function WN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=S1(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=S1(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return I_(Un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:cs(c.field),direction:KN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||rd(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function HN(t){let e=UN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=T_(c);return d instanceof Un&&Jv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Ca(hs(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,rd(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new ih(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new ih(h,d)}(n.endAt)),fN(e,i,o,s,a,"F",l,u)}function qN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function T_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=hs(e.unaryFilter.field);return Ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=hs(e.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(e.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hs(e.unaryFilter.field);return Ke.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Ke.create(hs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Un.create(e.compositeFilter.filters.map(n=>T_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function KN(t){return PN[t]}function GN(t){return ON[t]}function QN(t){return MN[t]}function cs(t){return{fieldPath:t.canonicalString()}}function hs(t){return Et.fromServerFormat(t.fieldPath)}function I_(t){return t instanceof Ke?function(e){if(e.op==="=="){if(hg(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NAN"}};if(cg(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hg(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NAN"}};if(cg(e.value))return{unaryFilter:{field:cs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(e.field),op:GN(e.op),value:e.value}}}(t):t instanceof Un?function(e){const n=e.getFilters().map(r=>I_(r));return n.length===1?n[0]:{compositeFilter:{op:QN(e.op),filters:n}}}(t):G()}function YN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function k_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=y_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=h_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>vg(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>vg(n,r))}}class G2{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=LN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new G2(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=kt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.ie=e}}function eA(t){const e=HN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?w1(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.Je=new nA}addToCollectionParentIndex(e,n){return this.Je.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Gr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class nA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new oo(0)}static vn(){return new oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sa(r.mutation,i,qt.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=Ta(),a=Ta();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ri)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Sa(c.mutation,u,c.mutation.getFieldMask(),Qe.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new iA(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ta();let i=new Je((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=y_();c.forEach(h=>{if(!s.has(h)){const f=h_(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(wi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,oe())).next(c=>({batchId:a,changes:g_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ra();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new id(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,wt.newInvalidDocument(u)))});let o=ra();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Sa(u.mutation,l,qt.empty(),Qe.now()),sd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Fn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:eA(r.bundledQuery),readTime:Fn(r.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.overlays=new Je(B.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=wi(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=wi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JN(n,r));let s=this.es.get(n);s===void 0&&(s=oe(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.ns=new Ye(et.ss),this.rs=new Ye(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new et(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new B(new ke([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new ke([])),r=new et(n,e),i=new et(n,e+1);let s=oe();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||me(e._s,n._s)}static os(e,n){return me(e._s,n._s)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ye(et.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(me);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),R.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new et(new B(s),0);let a=new Ye(me);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return R.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new et(n,0),i=this.gs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.Es=e,this.docs=new Je(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YL(QL(c),r)<=0||(i.has(c.key)||sd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}As(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cA(this)}getSize(e){return R.resolve(this.size)}}class cA extends rA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.persistence=e,this.Rs=new xo(n=>W2(n),H2),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Q2,this.targetCount=0,this.vs=oo.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new j2(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new hA(this),this.indexManager=new tA,this.remoteDocumentCache=function(r){return new uA(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new ZN(n),this.Ns=new oA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new lA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new fA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return R.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class fA extends JL{constructor(e){super(),this.currentSequenceNumber=e}}class Y2{constructor(e){this.persistence=e,this.Fs=new Q2,this.$s=null}static Bs(e){return new Y2(e)}get Ls(){if(this.$s)return this.$s;throw G()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,r=>{const i=B.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new X2(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(gg(n))return R.resolve(null);let r=dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=w1(n,null,"F"),r=dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,w1(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return gg(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(ag()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),E1(n)),this.Bi(e,o,n,GL(i,-1)))})}Fi(e,n){let r=new Ye(i_(e));return n.forEach((i,s)=>{sd(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return ag()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",E1(n)),this.Ni.getDocumentsMatchingQuery(e,n,Gr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Je(me),this.Ui=new xo(s=>W2(s),H2),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function gA(t,e,n,r){return new mA(t,e,n,r)}async function x_(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function yA(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=R.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(g=>{const v=l.docVersions.get(f);we(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function R_(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function vA(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(kt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(g,v,E){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let l=fr(),u=oe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_A(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(d=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function _A(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function wA(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EA(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new bi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function I1(t,e,n){const r=ee(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kl(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Ig(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ee(a),d=c.Ui.get(u);return d!==void 0?R.resolve(c.qi.get(d)):c.Cs.getTargetData(l,u)}(r,o,dr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(CA(r,yN(e),a),{documents:a,Hi:s})))}function CA(t,e,n){let r=t.Ki.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class kg{constructor(){this.activeTargetIds=v_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SA{constructor(){this.Lr=new kg,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(V("RestConnection","Received: ",l),l),l=>{throw m1("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ko,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=IA[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new $L;a.setWithCredentials(!0),a.listenOnce(OL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case x0.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),s(u);break;case x0.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new j(x.DEADLINE_EXCEEDED,"Request time out"));break;case x0.HTTP_ERROR:const c=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const f=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(h.status);o(new j(f,h.message))}else o(new j(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=DL(),o=PL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new FL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");V("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const h=new kA({Hr:g=>{d?V("Connection","Not sending because WebChannel is closed:",g):(c||(V("Connection","Opening WebChannel transport."),u.open(),c=!0),V("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,E)=>{g.listen(v,m=>{try{E(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,Nu.EventType.OPEN,()=>{d||V("Connection","WebChannel transport opened.")}),f(u,Nu.EventType.CLOSE,()=>{d||(d=!0,V("Connection","WebChannel transport closed"),h.io())}),f(u,Nu.EventType.ERROR,g=>{d||(d=!0,m1("Connection","WebChannel transport errored:",g),h.io(new j(x.UNAVAILABLE,"The operation could not be completed")))}),f(u,Nu.EventType.MESSAGE,g=>{var v;if(!d){const E=g.data[0];we(!!E);const m=E,p=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(p){V("Connection","WebChannel received error:",p);const _=p.status;let w=function(L){const N=Ve[L];if(N!==void 0)return p_(N)}(_),k=p.message;w===void 0&&(w=x.INTERNAL,k="Unknown error status: "+_+" with message "+p.message),d=!0,h.io(new j(w,k)),u.close()}else V("Connection","WebChannel received:",E),h.ro(E)}}),f(o,ML.STAT_EVENT,g=>{g.stat===sg.PROXY?V("Connection","Detected buffering proxy"):g.stat===sg.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function b0(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){return new FN(t,!0)}class b_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new b_(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new j(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RA extends L_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=VN(this.yt,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Fn(s.readTime):Z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=T1(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=_1(a)?{documents:zN(i,a)}:{query:WN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=E_(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=ah(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=qN(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=T1(this.yt),n.removeTarget=e,this.Bo(n)}}class bA extends L_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=jN(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.Zo(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=T1(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BN(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(x.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(x.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class NA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(hr(n),this.ou=!1):V("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{rs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l._u.add(4),await Xl(l),l.gu.set("Unknown"),l._u.delete(4),await cd(l)}(this))})}),this.gu=new NA(r,i)}}async function cd(t){if(rs(t))for(const e of t.wu)await e(!0)}async function Xl(t){for(const e of t.wu)await e(!1)}function N_(t,e){const n=ee(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),e5(n)?Z2(n):Ro(n).ko()&&J2(n,e))}function A_(t,e){const n=ee(t),r=Ro(n);n.du.delete(e),r.ko()&&D_(n,e),n.du.size===0&&(r.ko()?r.Fo():rs(n)&&n.gu.set("Unknown"))}function J2(t,e){t.yu.Ot(e.targetId),Ro(t).zo(e)}function D_(t,e){t.yu.Ot(e),Ro(t).Ho(e)}function Z2(t){t.yu=new DN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ro(t).start(),t.gu.uu()}function e5(t){return rs(t)&&!Ro(t).No()&&t.du.size>0}function rs(t){return ee(t)._u.size===0}function P_(t){t.yu=void 0}async function DA(t){t.du.forEach((e,n)=>{J2(t,e)})}async function PA(t,e){P_(t),e5(t)?(t.gu.hu(e),Z2(t)):t.gu.set("Unknown")}async function OA(t,e,n){if(t.gu.set("Online"),e instanceof w_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lh(t,r)}else if(e instanceof ec?t.yu.Kt(e):e instanceof __?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Z.min()))try{const r=await R_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(kt.EMPTY_BYTE_STRING,l.snapshotVersion)),D_(i,a);const u=new bi(l.target,a,1,l.sequenceNumber);J2(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await lh(t,r)}}async function lh(t,e,n){if(!Kl(e))throw e;t._u.add(1),await Xl(t),t.gu.set("Offline"),n||(n=()=>R_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await cd(t)})}function O_(t,e){return e().catch(n=>lh(t,n,e))}async function hd(t){const e=ee(t),n=Yr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;MA(e);)try{const i=await wA(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,FA(e,i)}catch(i){await lh(e,i)}M_(e)&&F_(e)}function MA(t){return rs(t)&&t.fu.length<10}function FA(t,e){t.fu.push(e);const n=Yr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function M_(t){return rs(t)&&!Yr(t).No()&&t.fu.length>0}function F_(t){Yr(t).start()}async function $A(t){Yr(t).eu()}async function UA(t){const e=Yr(t);for(const n of t.fu)e.Xo(n.mutations)}async function VA(t,e,n){const r=t.fu.shift(),i=G2.from(r,e,n);await O_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hd(t)}async function BA(t,e){e&&Yr(t).Yo&&await async function(n,r){if(i=r.code,RN(i)&&i!==x.ABORTED){const s=n.fu.shift();Yr(n).Mo(),await O_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await hd(n)}var i}(t,e),M_(t)&&F_(t)}async function Rg(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=rs(n);n._u.add(3),await Xl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await cd(n)}async function jA(t,e){const n=ee(t);e?(n._u.delete(2),await cd(n)):e||(n._u.add(2),await Xl(n),n.gu.set("Unknown"))}function Ro(t){return t.pu||(t.pu=function(e,n,r){const i=ee(e);return i.su(),new RA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:DA.bind(null,t),Zr:PA.bind(null,t),Wo:OA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),e5(t)?Z2(t):t.gu.set("Unknown")):(await t.pu.stop(),P_(t))})),t.pu}function Yr(t){return t.Iu||(t.Iu=function(e,n,r){const i=ee(e);return i.su(),new bA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:$A.bind(null,t),Zr:BA.bind(null,t),tu:UA.bind(null,t),Zo:VA.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await hd(t)):(await t.Iu.stop(),t.fu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new t5(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function n5(t,e){if(hr("AsyncQueue",`${e}: ${t}`),Kl(t))return new j(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Tu=new Je(B.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):G():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.Au=void 0,this.listeners=[]}}class WA{constructor(){this.queries=new xo(e=>r_(e),Gl),this.onlineState="Unknown",this.Ru=new Set}}async function HA(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zA),i)try{s.Au=await n.onListen(r)}catch(o){const a=n5(o,`Initialization of query '${E1(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&r5(n)}async function qA(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KA(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&r5(n)}function GA(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function r5(t){t.Ru.forEach(e=>{e.next()})}class QA{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.key=e}}class U_{constructor(e){this.key=e}}class YA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=oe(),this.mutatedKeys=oe(),this.Gu=i_(e),this.Qu=new Bs(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new bg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=sd(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;h&&f?h.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),E=!0):this.Hu(h,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.Gu(f,l)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),E=!0):h&&!f&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(d,h){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return f(d)-f(h)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ao(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new bg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=oe(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new U_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new $_(r))}),n}tc(e){this.qu=e.Hi,this.Ku=oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ao.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class XA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JA{constructor(e){this.key=e,this.nc=!1}}class ZA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new xo(a=>r_(a),Gl),this.rc=new Map,this.oc=new Set,this.uc=new Je(B.comparator),this.cc=new Map,this.ac=new Q2,this.hc={},this.lc=new Map,this.fc=oo.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function eD(t,e){const n=cD(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await EA(n.localStore,dr(e));n.isPrimaryClient&&N_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await tD(n,e,r,a==="current",o.resumeToken)}return i}async function tD(t,e,n,r,i){t._c=(d,h,f)=>async function(g,v,E,m){let p=v.view.Wu(E);p.$i&&(p=await Ig(g.localStore,v.query,!1).then(({documents:k})=>v.view.Wu(k,p)));const _=m&&m.targetChanges.get(v.targetId),w=v.view.applyChanges(p,g.isPrimaryClient,_);return Ng(g,v.targetId,w.Xu),w.snapshot}(t,d,h,f);const s=await Ig(t.localStore,e,!0),o=new YA(e,s.Hi),a=o.Wu(s.documents),l=Yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ng(t,n,u.Xu);const c=new XA(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function nD(t,e){const n=ee(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Gl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await I1(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),A_(n.remoteStore,r.targetId),k1(n,r.targetId)}).catch(ql)):(k1(n,r.targetId),await I1(n.localStore,r.targetId,!0))}async function rD(t,e,n){const r=hD(t);try{const i=await function(s,o){const a=ee(s),l=Qe.now(),u=o.reduce((h,f)=>h.add(f.key),oe());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=fr(),g=oe();return a.Gi.getEntries(h,u).next(v=>{f=v,f.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(v=>{c=v;const E=[];for(const m of o){const p=IN(m,c.get(m.key).overlayedDocument);p!=null&&E.push(new ri(m.key,p,n_(p.value.mapValue),Mn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,E,o)}).next(v=>{d=v;const E=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(h,v.batchId,E)})}).then(()=>({batchId:d.batchId,changes:g_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Je(me)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Jl(r,i.changes),await hd(r.remoteStore)}catch(i){const s=n5(i,"Failed to persist write");n.reject(s)}}async function V_(t,e){const n=ee(t);try{const r=await vA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?we(o.nc):i.removedDocuments.size>0&&(we(o.nc),o.nc=!1))}),await Jl(n,r,e)}catch(r){await ql(r)}}function Lg(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&r5(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Je(B.comparator);o=o.insert(s,wt.newNoDocument(s,Z.min()));const a=oe().add(s),l=new ld(Z.min(),new Map,new Ye(me),o,a);await V_(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),i5(r)}else await I1(r.localStore,e,!1).then(()=>k1(r,e,n)).catch(ql)}async function sD(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await yA(n.localStore,e);j_(n,r,null),B_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jl(n,i)}catch(i){await ql(i)}}async function oD(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(we(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);j_(r,e,n),B_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jl(r,i)}catch(i){await ql(i)}}function B_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function j_(t,e,n){const r=ee(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function k1(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||z_(t,r)})}function z_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(A_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),i5(t))}function Ng(t,e,n){for(const r of n)r instanceof $_?(t.ac.addReference(r.key,e),aD(t,r)):r instanceof U_?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||z_(t,r.key)):G()}function aD(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(r),i5(t))}function i5(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(ke.fromString(e)),r=t.fc.next();t.cc.set(r,new JA(n)),t.uc=t.uc.insert(n,r),N_(t.remoteStore,new bi(dr(q2(n.path)),r,2,j2.at))}}async function Jl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=X2.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,d=>R.forEach(d.Si,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>R.forEach(d.Di,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Kl(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.qi.get(d),f=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(d,g)}}}(r.localStore,s))}async function lD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await x_(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new j(x.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jl(n,r.ji)}}function uD(t,e){const n=ee(t),r=n.cc.get(e);if(r&&r.nc)return oe().add(r.key);{let i=oe();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function cD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=V_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iD.bind(null,e),e.sc.Wo=KA.bind(null,e.eventManager),e.sc.wc=GA.bind(null,e.eventManager),e}function hD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oD.bind(null,e),e}class dD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ud(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return gA(this.persistence,new pA,e.initialUser,this.yt)}yc(e){return new dA(Y2.Bs,this.yt)}gc(e){return new SA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lD.bind(null,this.syncEngine),await jA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WA}createDatastore(e){const n=ud(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xA(i));var i;return function(s,o,a,l){return new LA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Lg(this.syncEngine,a,0),o=xg.C()?new xg:new TA,new AA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ZA(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Xl(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e,n){if(!n)throw new j(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pD(t,e,n,r){if(e===!0&&r===!0)throw new j(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ag(t){if(!B.isDocumentKey(t))throw new j(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dg(t){if(B.isDocumentKey(t))throw new j(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function s5(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Li(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=s5(t);throw new j(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;class Og{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Og({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Og(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UL;switch(n.type){case"gapi":const r=n.client;return new zL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pg.get(e);n&&(V("ComponentProvider","Removing Datastore"),Pg.delete(e),n.terminate())}(this),Promise.resolve()}}function mD(t,e,n,r={}){var i;const s=(t=Li(t,dd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&m1("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=gt.MOCK_USER;else{o=nS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new gt(l)}t._authCredentials=new VL(new Hv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class lo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class zr extends lo{constructor(e,n,r){super(e,n,q2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new B(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function H_(t,e,...n){if(t=Me(t),W_("collection","path",e),t instanceof dd){const r=ke.fromString(e,...n);return Dg(r),new zr(t,null,r)}{if(!(t instanceof Qt||t instanceof zr))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Dg(r),new zr(t.firestore,null,r)}}function q_(t,e,...n){if(t=Me(t),arguments.length===1&&(e=qv.R()),W_("doc","path",e),t instanceof dd){const r=ke.fromString(e,...n);return Ag(r),new Qt(t,null,new B(r))}{if(!(t instanceof Qt||t instanceof zr))throw new j(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Ag(r),new Qt(t.firestore,t instanceof zr?t.converter:null,new B(r))}}function gD(t,e){return t=Me(t),e=Me(e),t instanceof lo&&e instanceof lo&&t.firestore===e.firestore&&Gl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=qv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=n5(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _D(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await x_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ED(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Rg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Rg(e.remoteStore,s)),t.onlineComponents=e}async function ED(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await _D(t,new dD)),t.offlineComponents}async function K_(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await wD(t,new fD)),t.onlineComponents}function CD(t){return K_(t).then(e=>e.syncEngine)}async function Mg(t){const e=await K_(t),n=e.eventManager;return n.onListen=eD.bind(null,e.syncEngine),n.onUnlisten=nD.bind(null,e.syncEngine),n}class SD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new b_(this,"async_queue_retry"),this.Wc=()=>{const n=b0();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=b0();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=b0();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Ri;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Kl(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw hr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=t5.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&G()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Fg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class fl extends dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Q_(this),this._firestoreClient.terminate()}}function TD(t,e){const n=typeof t=="object"?t:H9(),r=typeof t=="string"?t:e||"(default)",i=Sl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eS("firestore");s&&mD(i,...s)}return i}function G_(t){return t._firestoreClient||Q_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Q_(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ZL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new vD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(kt.fromBase64String(e))}catch(n){throw new j(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/^__.*__$/;class kD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ql(e,this.data,n,this.fieldTransforms)}}class Y_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function X_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class l5{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new l5(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return uh(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(X_(this.sa)&&ID.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class xD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||ud(e)}da(e,n,r,i=!1){return new l5({sa:e,methodName:n,fa:r,path:Et.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function J_(t){const e=t._freezeSettings(),n=ud(t._databaseId);return new xD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);u5("Data must be an object, but it was:",o,r);const a=Z_(r,o);let l,u;if(s.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=x1(e,d,n);if(!o.contains(h))throw new j(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);t7(c,h)||c.push(h)}l=new qt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new kD(new Ot(a),l,u)}class pd extends o5{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pd}}function bD(t,e,n,r){const i=t.da(1,e,n);u5("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();ns(r,(l,u)=>{const c=c5(e,l,n);u=Me(u);const d=i.ca(c);if(u instanceof pd)s.push(c);else{const h=md(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new qt(s);return new Y_(o,a,i.fieldTransforms)}function LD(t,e,n,r,i,s){const o=t.da(1,e,n),a=[x1(e,r,n)],l=[i];if(s.length%2!=0)throw new j(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(x1(e,s[h])),l.push(s[h+1]);const u=[],c=Ot.empty();for(let h=a.length-1;h>=0;--h)if(!t7(u,a[h])){const f=a[h];let g=l[h];g=Me(g);const v=o.ca(f);if(g instanceof pd)u.push(f);else{const E=md(g,v);E!=null&&(u.push(f),c.set(f,E))}}const d=new qt(u);return new Y_(c,d,o.fieldTransforms)}function md(t,e){if(e7(t=Me(t)))return u5("Unsupported field value:",e,t),Z_(t,e);if(t instanceof o5)return function(n,r){if(!X_(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=md(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _N(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:ah(r.yt,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ah(r.yt,i)}}if(n instanceof a5)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof uo)return{bytesValue:E_(r.yt,n._byteString)};if(n instanceof Qt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:K2(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${s5(n)}`)}(t,e)}function Z_(t,e){const n={};return Kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,i)=>{const s=md(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function e7(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof a5||t instanceof uo||t instanceof Qt||t instanceof o5)}function u5(t,e,n){if(!e7(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=s5(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function x1(t,e,n){if((e=Me(e))instanceof fd)return e._internalPath;if(typeof e=="string")return c5(t,e);throw uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const ND=new RegExp("[~\\*/\\[\\]]");function c5(t,e,n){if(e.search(ND)>=0)throw uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fd(...e.split("."))._internalPath}catch{throw uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(x.INVALID_ARGUMENT,a+t+l)}function t7(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(r7("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AD extends n7{data(){return super.data()}}function r7(t,e){return typeof e=="string"?c5(t,e):e instanceof fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PD{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return ns(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new a5(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);we(k_(r));const i=new ll(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class i7 extends n7{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(r7("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tc extends i7{data(e={}){return super.data(e)}}class MD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tc(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new tc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ia(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new tc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ia(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:FD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class s7 extends PD{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function $D(t,e,n,...r){t=Li(t,Qt);const i=Li(t.firestore,fl),s=J_(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof fd?LD(s,"updateDoc",t._key,e,n,r):bD(s,"updateDoc",t._key,e),o7(i,[o.toMutation(t._key,Mn.exists(!0))])}function UD(t,e){const n=Li(t.firestore,fl),r=q_(t),i=OD(t.converter,e);return o7(n,[RD(J_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function VD(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Fg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Fg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Qt)u=Li(t.firestore,fl),c=q2(t._key.path),l={next:d=>{e[o]&&e[o](BD(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Li(t,lo);u=Li(d.firestore,fl),c=d._query;const h=new s7(u);l={next:f=>{e[o]&&e[o](new MD(u,h,d,f))},error:e[o+1],complete:e[o+2]},DD(t._query)}return function(d,h,f,g){const v=new yD(g),E=new QA(h,v,f);return d.asyncQueue.enqueueAndForget(async()=>HA(await Mg(d),E)),()=>{v.bc(),d.asyncQueue.enqueueAndForget(async()=>qA(await Mg(d),E))}}(G_(u),c,a,l)}function o7(t,e){return function(n,r){const i=new Ri;return n.asyncQueue.enqueueAndForget(async()=>rD(await CD(n),r,i)),i.promise}(G_(t),e)}function BD(t,e,n){const r=n.docs.get(e._key),i=new s7(t);return new i7(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ko=n})(ei),ln(new Xt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new fl(new BL(n.getProvider("auth-internal")),new HL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),We(og,"3.8.3",t),We(og,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="us-central1";class WD{constructor(e,n,r,i,s=$g,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new zD(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=$g}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const Ug="@firebase/functions",Vg="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD="auth-internal",qD="app-check-internal",KD="messaging-internal";function GD(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(HD),a=r.getProvider(KD),l=r.getProvider(qD);return new WD(s,o,a,l,i,t)};ln(new Xt(jD,n,"PUBLIC").setMultipleInstances(!0)),We(Ug,Vg,e),We(Ug,Vg,"esm2017")}GD(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a7="firebasestorage.googleapis.com",QD="storageBucket",YD=2*60*1e3,XD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends cn{constructor(e,n,r=0){super(L0(e),`Firebase Storage: ${n} (${L0(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return L0(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function L0(t){return"storage/"+t}function JD(){const t="An unknown error occurred, please check the error payload for server response.";return new Bn(Vn.UNKNOWN,t)}function ZD(){return new Bn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eP(){return new Bn(Vn.CANCELED,"User canceled the upload/download.")}function tP(t){return new Bn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function nP(t){return new Bn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Bg(t){return new Bn(Vn.INVALID_ARGUMENT,t)}function l7(){return new Bn(Vn.APP_DELETED,"The Firebase app was deleted.")}function rP(t){return new Bn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(r.path==="")return r;throw nP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},v=n===a7?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<_.length;w++){const k=_[w],L=k.regex.exec(e);if(L){const N=L[k.indices.bucket];let M=L[k.indices.path];M||(M=""),r=new wn(N,M),k.postModify(r);break}}if(r==null)throw tP(e);return r}}class iP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(f,l())},E)}function h(){s&&clearTimeout(s)}function f(E,...m){if(u){h();return}if(E){h(),c.call(null,E,...m);return}if(l()||o){h(),c.call(null,E,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let g=!1;function v(E){g||(g=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function oP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){return t!==void 0}function jg(t,e,n,r){if(r<e)throw Bg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bg(`Invalid value for '${t}'. Expected ${n} or less.`)}function lP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ch;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ch||(ch={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Pu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ch.NO_ERROR,l=s.getStatus();if(!a||uP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ch.ABORT;r(!1,new Pu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Pu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=JD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?l7():eP();o(l)}else{const l=ZD();o(l)}};this.canceled_?n(!1,new Pu(!1,null,!0)):this.backoffId_=sP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function fP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,r,i,s,o=!0){const a=lP(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return fP(u,e),hP(u,n),dP(u,s),pP(u,r),new cP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hh(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yP(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new hh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rP(e)}}function zg(t,e){const n=e==null?void 0:e[QD];return n==null?null:wn.makeFromBucketSpec(n,t)}class vP{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=a7,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YD,this._maxUploadRetryTime=XD,this._requests=new Set,i!=null?this._bucket=wn.makeFromBucketSpec(i,this._host):this._bucket=zg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=zg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new iP(l7());{const o=mP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Wg="@firebase/storage",Hg="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="storage";function wP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vP(n,r,i,e,ei)}function EP(){ln(new Xt(_P,wP,"PUBLIC").setMultipleInstances(!0)),We(Wg,Hg,""),We(Wg,Hg,"esm2017")}EP();const u7="@firebase/installations",h5="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c7=1e4,h7=`w:${h5}`,d7="FIS_v2",CP="https://firebaseinstallations.googleapis.com/v1",SP=60*60*1e3,TP="installations",IP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ki=new Ji(TP,IP,kP);function f7(t){return t instanceof cn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p7({projectId:t}){return`${CP}/projects/${t}/installations`}function m7(t){return{token:t.token,requestStatus:2,expiresIn:RP(t.expiresIn),creationTime:Date.now()}}async function g7(t,e){const r=(await e.json()).error;return Ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function y7({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xP(t,{refreshToken:e}){const n=y7(t);return n.append("Authorization",bP(e)),n}async function v7(t){const e=await t();return e.status>=500&&e.status<600?t():e}function RP(t){return Number(t.replace("s","000"))}function bP(t){return`${d7} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=p7(t),i=y7(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:d7,appId:t.appId,sdkVersion:h7},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await v7(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:m7(u.authToken)}}else throw await g7("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _7(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/^[cdef][\w-]{21}$/,R1="";function DP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PP(t);return AP.test(n)?n:R1}catch{return R1}}function PP(t){return NP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w7=new Map;function E7(t,e){const n=gd(t);C7(n,e),OP(n,e)}function C7(t,e){const n=w7.get(t);if(!!n)for(const r of n)r(e)}function OP(t,e){const n=MP();n&&n.postMessage({key:t,fid:e}),FP()}let Ei=null;function MP(){return!Ei&&"BroadcastChannel"in self&&(Ei=new BroadcastChannel("[Firebase] FID Change"),Ei.onmessage=t=>{C7(t.data.key,t.data.fid)}),Ei}function FP(){w7.size===0&&Ei&&(Ei.close(),Ei=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="firebase-installations-database",UP=1,Gi="firebase-installations-store";let N0=null;function d5(){return N0||(N0=z9($P,UP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}})),N0}async function dh(t,e){const n=gd(t),i=(await d5()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&E7(t,e.fid),e}async function S7(t){const e=gd(t),r=(await d5()).transaction(Gi,"readwrite");await r.objectStore(Gi).delete(e),await r.done}async function yd(t,e){const n=gd(t),i=(await d5()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&E7(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f5(t){let e;const n=await yd(t.appConfig,r=>{const i=VP(r),s=BP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===R1?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VP(t){const e=t||{fid:DP(),registrationStatus:0};return T7(e)}function BP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zP(t)}:{installationEntry:e}}async function jP(t,e){try{const n=await LP(t,e);return dh(t.appConfig,n)}catch(n){throw f7(n)&&n.customData.serverCode===409?await S7(t.appConfig):await dh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zP(t){let e=await qg(t.appConfig);for(;e.registrationStatus===1;)await _7(100),e=await qg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await f5(t);return r||n}return e}function qg(t){return yd(t,e=>{if(!e)throw Ki.create("installation-not-found");return T7(e)})}function T7(t){return WP(t)?{fid:t.fid,registrationStatus:0}:t}function WP(t){return t.registrationStatus===1&&t.registrationTime+c7<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP({appConfig:t,heartbeatServiceProvider:e},n){const r=qP(t,n),i=xP(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:h7,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await v7(()=>fetch(r,a));if(l.ok){const u=await l.json();return m7(u)}else throw await g7("Generate Auth Token",l)}function qP(t,{fid:e}){return`${p7(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p5(t,e=!1){let n;const r=await yd(t.appConfig,s=>{if(!I7(s))throw Ki.create("not-registered");const o=s.authToken;if(!e&&QP(o))return s;if(o.requestStatus===1)return n=KP(t,e),s;{if(!navigator.onLine)throw Ki.create("app-offline");const a=XP(s);return n=GP(t,a),a}});return n?await n:r.authToken}async function KP(t,e){let n=await Kg(t.appConfig);for(;n.authToken.requestStatus===1;)await _7(100),n=await Kg(t.appConfig);const r=n.authToken;return r.requestStatus===0?p5(t,e):r}function Kg(t){return yd(t,e=>{if(!I7(e))throw Ki.create("not-registered");const n=e.authToken;return JP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function GP(t,e){try{const n=await HP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await dh(t.appConfig,r),n}catch(n){if(f7(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await S7(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dh(t.appConfig,r)}throw n}}function I7(t){return t!==void 0&&t.registrationStatus===2}function QP(t){return t.requestStatus===2&&!YP(t)}function YP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SP}function XP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function JP(t){return t.requestStatus===1&&t.requestTime+c7<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t){const e=t,{installationEntry:n,registrationPromise:r}=await f5(e);return r?r.catch(console.error):p5(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e=!1){const n=t;return await tO(n),(await p5(n,e)).token}async function tO(t){const{registrationPromise:e}=await f5(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){if(!t||!t.options)throw A0("App Configuration");if(!t.name)throw A0("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw A0(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function A0(t){return Ki.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k7="installations",rO="installations-internal",iO=t=>{const e=t.getProvider("app").getImmediate(),n=nO(e),r=Sl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sO=t=>{const e=t.getProvider("app").getImmediate(),n=Sl(e,k7).getImmediate();return{getId:()=>ZP(n),getToken:i=>eO(n,i)}};function oO(){ln(new Xt(k7,iO,"PUBLIC")),ln(new Xt(rO,sO,"PRIVATE"))}oO();We(u7,h5);We(u7,h5,"esm2017");const D0="@firebase/remote-config",Gg="0.4.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Mt=new Ji("remoteconfig","Remote Config",lO);function uO(t){const e=Me(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){const[n,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:hO()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(s,l),c=new Promise((E,m)=>{e.signal.addEventListener(()=>{const p=new Error("The operation was aborted.");p.name="AbortError",m(p)})});let d;try{await Promise.race([u,c]),d=await u}catch(E){let m="fetch-client-network";throw(E==null?void 0:E.name)==="AbortError"&&(m="fetch-timeout"),Mt.create(m,{originalErrorMessage:E==null?void 0:E.message})}let h=d.status;const f=d.headers.get("ETag")||void 0;let g,v;if(d.status===200){let E;try{E=await d.json()}catch(m){throw Mt.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}g=E.entries,v=E.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?h=500:v==="NO_CHANGE"?h=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(g={}),h!==304&&h!==200)throw Mt.create("fetch-status",{httpStatus:h});return{status:h,eTag:f,config:g}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pO(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mO{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await fO(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!pO(i))throw i;const s={throttleEndTimeMillis:Date.now()+wS(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=60*1e3,yO=12*60*60*1e3;class vO{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:gO,minimumFetchIntervalMillis:yO},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e){const n=t.target.error||void 0;return Mt.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const di="app_namespace_store",_O="firebase_remote_config",wO=1;function EO(){return new Promise((t,e)=>{try{const n=indexedDB.open(_O,wO);n.onerror=r=>{e(nc(r,"storage-open"))},n.onsuccess=r=>{t(r.target.result)},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(di,{keyPath:"compositeKey"})}}}catch(n){e(Mt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class CO{constructor(e,n,r,i=EO()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([di],"readonly").objectStore(di),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{i(nc(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;r(c?c.value:void 0)}}catch(l){i(Mt.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{const a=r.transaction([di],"readwrite").objectStore(di),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{s(nc(c,"storage-set"))},u.onsuccess=()=>{i()}}catch(u){s(Mt.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{const o=n.transaction([di],"readwrite").objectStore(di),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{i(nc(u,"storage-delete"))},l.onsuccess=()=>{r()}}catch(l){i(Mt.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(){ln(new Xt(aO,t,"PUBLIC").setMultipleInstances(!0)),We(D0,Gg),We(D0,Gg,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Mt.create("registration-window");if(!$9())throw Mt.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Mt.create("registration-project-id");if(!o)throw Mt.create("registration-api-key");if(!a)throw Mt.create("registration-app-id");n=n||"firebase";const l=new CO(a,r.name,n),u=new SO(l),c=new Cl(D0);c.logLevel=ce.ERROR;const d=new dO(i,ei,n,s,o,a),h=new mO(d,l),f=new cO(h,l,u,c),g=new vO(r,f,u,l,c);return uO(g),g}}TO();var vd={exports:{}},_d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IO=O.exports,kO=Symbol.for("react.element"),xO=Symbol.for("react.fragment"),RO=Object.prototype.hasOwnProperty,bO=IO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LO={key:!0,ref:!0,__self:!0,__source:!0};function x7(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RO.call(e,r)&&!LO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kO,type:t,key:s,ref:o,props:i,_owner:bO.current}}_d.Fragment=xO;_d.jsx=x7;_d.jsxs=x7;(function(t){t.exports=_d})(vd);const Qi=vd.exports.Fragment,y=vd.exports.jsx,F=vd.exports.jsxs;var b1=function(t,e){return b1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},b1(t,e)};function vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");b1(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function NO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function R7(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function co(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ho(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function fo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function js(t){return this instanceof js?(this.v=t,this):new js(t)}function AO(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(h){r[h]&&(i[h]=function(f){return new Promise(function(g,v){s.push([h,f,g,v])>1||a(h,f)})})}function a(h,f){try{l(r[h](f))}catch(g){d(s[0][3],g)}}function l(h){h.value instanceof js?Promise.resolve(h.value.v).then(u,c):d(s[0][2],h)}function u(h){a("next",h)}function c(h){a("throw",h)}function d(h,f){h(f),s.shift(),s.length&&a(s[0][0],s[0][1])}}function DO(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof co=="function"?co(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){o=t[s](o),i(a,l,o.done,o.value)})}}function i(s,o,a,l){Promise.resolve(l).then(function(u){s({value:u,done:a})},o)}}function Xe(t){return typeof t=="function"}function m5(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var P0=m5(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function fh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Zl=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=co(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(Xe(c))try{c()}catch(v){s=v instanceof P0?v.errors:[v]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var h=co(d),f=h.next();!f.done;f=h.next()){var g=f.value;try{Qg(g)}catch(v){s=s!=null?s:[],v instanceof P0?s=fo(fo([],ho(s)),ho(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}if(s)throw new P0(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Qg(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&fh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&fh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),b7=Zl.EMPTY;function L7(t){return t instanceof Zl||t&&"closed"in t&&Xe(t.remove)&&Xe(t.add)&&Xe(t.unsubscribe)}function Qg(t){Xe(t)?t():t.unsubscribe()}var N7={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},PO={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,fo([t,e],ho(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function A7(t){PO.setTimeout(function(){throw t})}function Yg(){}function rc(t){t()}var g5=function(t){vr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,L7(n)&&n.add(r)):r.destination=$O,r}return e.create=function(n,r,i){return new pl(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Zl),OO=Function.prototype.bind;function O0(t,e){return OO.call(t,e)}var MO=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Ou(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Ou(r)}else Ou(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Ou(n)}},t}(),pl=function(t){vr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(Xe(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&N7.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&O0(n.next,a),error:n.error&&O0(n.error,a),complete:n.complete&&O0(n.complete,a)}):o=n}return s.destination=new MO(o),s}return e}(g5);function Ou(t){A7(t)}function FO(t){throw t}var $O={closed:!0,next:Yg,error:FO,complete:Yg},y5=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function D7(t){return t}function UO(t){return t.length===0?D7:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Nt=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=BO(e)?e:new pl(e,n,r);return rc(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Xg(n),new n(function(i,s){var o=new pl({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[y5]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return UO(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Xg(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function Xg(t){var e;return(e=t!=null?t:N7.Promise)!==null&&e!==void 0?e:Promise}function VO(t){return t&&Xe(t.next)&&Xe(t.error)&&Xe(t.complete)}function BO(t){return t&&t instanceof g5||VO(t)&&L7(t)}function jO(t){return Xe(t==null?void 0:t.lift)}function is(t){return function(e){if(jO(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function po(t,e,n,r,i){return new zO(t,e,n,r,i)}var zO=function(t){vr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(g5),WO=m5(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),wd=function(t){vr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Jg(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new WO},e.prototype.next=function(n){var r=this;rc(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=co(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;rc(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;rc(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?b7:(this.currentObservers=null,a.push(n),new Zl(function(){r.currentObservers=null,fh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Nt;return n.source=this,n},e.create=function(n,r){return new Jg(n,r)},e}(Nt),Jg=function(t){vr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:b7},e}(wd),v5={now:function(){return(v5.delegate||Date).now()},delegate:void 0},HO=function(t){vr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=v5);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e}(wd),qO=function(t){vr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Zl),L1={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=L1.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,fo([t,e],ho(n))):setInterval.apply(void 0,fo([t,e],ho(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},KO=function(t){vr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),L1.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;L1.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,fh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(qO),Zg=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=v5.now,t}(),GO=function(t){vr(e,t);function e(n,r){r===void 0&&(r=Zg.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(Zg);new GO(KO);var QO=new Nt(function(t){return t.complete()});function YO(t){return t?XO(t):QO}function XO(t){return new Nt(function(e){return t.schedule(function(){return e.complete()})})}function JO(t){return t&&Xe(t.schedule)}function ZO(t){return t[t.length-1]}function eM(t){return JO(ZO(t))?t.pop():void 0}var P7=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function O7(t){return Xe(t==null?void 0:t.then)}function M7(t){return Xe(t[y5])}function F7(t){return Symbol.asyncIterator&&Xe(t==null?void 0:t[Symbol.asyncIterator])}function $7(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function tM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var U7=tM();function V7(t){return Xe(t==null?void 0:t[U7])}function B7(t){return AO(this,arguments,function(){var e,n,r,i;return R7(this,function(s){switch(s.label){case 0:e=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,js(e.read())];case 3:return n=s.sent(),r=n.value,i=n.done,i?[4,js(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,js(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function j7(t){return Xe(t==null?void 0:t.getReader)}function bo(t){if(t instanceof Nt)return t;if(t!=null){if(M7(t))return nM(t);if(P7(t))return rM(t);if(O7(t))return iM(t);if(F7(t))return z7(t);if(V7(t))return sM(t);if(j7(t))return oM(t)}throw $7(t)}function nM(t){return new Nt(function(e){var n=t[y5]();if(Xe(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function rM(t){return new Nt(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function iM(t){return new Nt(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,A7)})}function sM(t){return new Nt(function(e){var n,r;try{for(var i=co(t),s=i.next();!s.done;s=i.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function z7(t){return new Nt(function(e){aM(t,e).catch(function(n){return e.error(n)})})}function oM(t){return z7(B7(t))}function aM(t,e){var n,r,i,s;return NO(this,void 0,void 0,function(){var o,a;return R7(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=DO(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(s=n.return)?[4,s.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Ni(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function W7(t,e){return e===void 0&&(e=0),is(function(n,r){n.subscribe(po(r,function(i){return Ni(r,t,function(){return r.next(i)},e)},function(){return Ni(r,t,function(){return r.complete()},e)},function(i){return Ni(r,t,function(){return r.error(i)},e)}))})}function H7(t,e){return e===void 0&&(e=0),is(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function lM(t,e){return bo(t).pipe(H7(e),W7(e))}function uM(t,e){return bo(t).pipe(H7(e),W7(e))}function cM(t,e){return new Nt(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function hM(t,e){return new Nt(function(n){var r;return Ni(n,e,function(){r=t[U7](),Ni(n,e,function(){var i,s,o;try{i=r.next(),s=i.value,o=i.done}catch(a){n.error(a);return}o?n.complete():n.next(s)},0,!0)}),function(){return Xe(r==null?void 0:r.return)&&r.return()}})}function q7(t,e){if(!t)throw new Error("Iterable cannot be null");return new Nt(function(n){Ni(n,e,function(){var r=t[Symbol.asyncIterator]();Ni(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function dM(t,e){return q7(B7(t),e)}function fM(t,e){if(t!=null){if(M7(t))return lM(t,e);if(P7(t))return cM(t,e);if(O7(t))return uM(t,e);if(F7(t))return q7(t,e);if(V7(t))return hM(t,e);if(j7(t))return dM(t,e)}throw $7(t)}function K7(t,e){return e?fM(t,e):bo(t)}function e3(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=eM(t);return K7(t,n)}m5(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function pM(t,e){return is(function(n,r){var i=0;n.subscribe(po(r,function(s){r.next(t.call(e,s,i++))}))})}function G7(t){return is(function(e,n){var r=null,i=!1,s;r=e.subscribe(po(n,void 0,void 0,function(o){s=bo(t(o,G7(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}function mM(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new wd}:e,r=t.resetOnError,i=r===void 0?!0:r,s=t.resetOnComplete,o=s===void 0?!0:s,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,d,h,f=0,g=!1,v=!1,E=function(){d==null||d.unsubscribe(),d=void 0},m=function(){E(),c=h=void 0,g=v=!1},p=function(){var _=c;m(),_==null||_.unsubscribe()};return is(function(_,w){f++,!v&&!g&&E();var k=h=h!=null?h:n();w.add(function(){f--,f===0&&!v&&!g&&(d=M0(p,l))}),k.subscribe(w),!c&&f>0&&(c=new pl({next:function(L){return k.next(L)},error:function(L){v=!0,E(),d=M0(m,i,L),k.error(L)},complete:function(){g=!0,E(),d=M0(m,o),k.complete()}}),bo(_).subscribe(c))})(u)}}function M0(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(e===!0){t();return}if(e!==!1){var i=new pl({next:function(){i.unsubscribe(),t()}});return e.apply(void 0,fo([],ho(n))).subscribe(i)}}function gM(t,e,n){var r,i,s,o,a=!1;return t&&typeof t=="object"?(r=t.bufferSize,o=r===void 0?1/0:r,i=t.windowTime,e=i===void 0?1/0:i,s=t.refCount,a=s===void 0?!1:s,n=t.scheduler):o=t!=null?t:1/0,mM({connector:function(){return new HO(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function yM(t,e){return is(function(n,r){var i=null,s=0,o=!1,a=function(){return o&&!i&&r.complete()};n.subscribe(po(r,function(l){i==null||i.unsubscribe();var u=0,c=s++;bo(t(l,c)).subscribe(i=po(r,function(d){return r.next(e?e(l,d,c,u++):d)},function(){i=null,a()}))},function(){o=!0,a()}))})}function vM(t,e,n){var r=Xe(t)||e||n?{next:t,error:e,complete:n}:t;return r?is(function(i,s){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;i.subscribe(po(s,function(l){var u;(u=r.next)===null||u===void 0||u.call(r,l),s.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),s.complete()},function(l){var u;a=!1,(u=r.error)===null||u===void 0||u.call(r,l),s.error(l)},function(){var l,u;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(u=r.finalize)===null||u===void 0||u.call(r)}))}):D7}function Q7(t){return new Nt(function(e){var n=fy(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const _M="[DEFAULT]",Y7=O.exports.createContext(void 0),X7=O.exports.createContext(!1),wM="4.2.2",EM=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function CM(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=O.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=gT().find(o=>o.name===(n||_M));if(s){if(e&&EM(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=O.exports.version||"unknown";return We("react",o),We("reactfire",wM),W9(e,n)}},[t.firebaseApp,e,n]);return O.exports.createElement(Y7.Provider,{value:i},y(X7.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}function SM(t){let e=O.exports.useContext(X7);return t!==void 0?t:e}function J7(){const t=O.exports.useContext(Y7);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function eu(t){var e;const n=Lo(),r=`auth:user:${n.name}`,i=Q7(n),s=(e=Object.assign({},t))!==null&&e!==void 0?e:{};return n.currentUser!==void 0&&(s.initialData=n.currentUser,s.startWithValue=n.currentUser),_5(r,i,s)}function TM(t){if((t==null?void 0:t.hasOwnProperty("requiredClaims"))&&(t==null?void 0:t.hasOwnProperty("validateCustomClaims")))throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');const e=Lo();let n=`auth:signInCheck:${e.name}::forceRefresh:${!!(t!=null&&t.forceRefresh)}`;t!=null&&t.forceRefresh&&(n=`${n}:forceRefresh:${t.forceRefresh}`),t!=null&&t.hasOwnProperty("requiredClaims")?n=`${n}:requiredClaims:${JSON.stringify(t.requiredClaims)}`:t!=null&&t.hasOwnProperty("validateCustomClaims")&&(n=`${n}:validateCustomClaims:${JSON.stringify(t.validateCustomClaims)}`);const r=Q7(e).pipe(yM(i=>{var s;return i?t&&(t.hasOwnProperty("requiredClaims")||t.hasOwnProperty("validateCustomClaims"))?K7(i.getIdTokenResult((s=t==null?void 0:t.forceRefresh)!==null&&s!==void 0?s:!1)).pipe(pM(o=>{let a;t.hasOwnProperty("requiredClaims")?a=IM(t.requiredClaims):a=t.validateCustomClaims;const{hasRequiredClaims:l,errors:u}=a(o.claims);return{signedIn:!0,hasRequiredClaims:l,errors:u,user:i}})):e3({signedIn:!0,hasRequiredClaims:!0,errors:{},user:i}):e3({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})}));return _5(n,r)}function IM(t){return function(e){const n={};return Object.keys(t).forEach(r=>{t[r]!==e[r]&&(n[r]=[new w5("auth/missing-claim",`Expected "${t[r]}", but user has "${e[r]}" instead`)])}),{hasRequiredClaims:Object.keys(n).length===0,errors:n}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai,fi;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(fi||(fi={}));Object.freeze((ai={},ai[fi.added]=Tb,ai[fi.removed]=xb,ai[fi.changed]=Ib,ai[fi.moved]=kb,ai[fi.value]=Sb,ai));const kM=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=kM);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xM={includeMetadataChanges:!1};function RM(t,e){return e===void 0&&(e=xM),new Nt(function(n){var r=VD(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:r}})}class bM extends wd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(r=>this._resolveFirstEmission=r),this._innerObservable=e.pipe(vM({next:r=>{this._next(r)},error:r=>{this._error=r,this._resolveFirstEmission()}}),G7(()=>YO()),gM(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const LM=3e4,ic=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=ic);function NM(t,e){if(ic.has(e))return ic.get(e);{const n=new bM(t,LM);return ic.set(e,n),n}}function AM(t){return function(e,n){const r=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(r.data=t.value),n){case"value":return r.status="success",r;case"error":return r.status="error",r;case"complete":return r.isComplete=!0,r;default:throw new Error(`invalid action "${n}"`)}}}function _5(t,e,n={}){var r;if(!t)throw new Error("cannot call useObservable without an observableId");const i=NM(e,t),s=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=i.hasValue||s;if(SM(n.suspense)===!0&&!o)throw i.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:i.hasValue?i.value:(r=n==null?void 0:n.initialData)!==null&&r!==void 0?r:n==null?void 0:n.startWithValue,error:i.ourError,firstValuePromise:i.firstEmission},[l,u]=O.exports.useReducer(AM(i),a);return O.exports.useEffect(()=>{const c=i.subscribe({next:()=>{u("value")},error:d=>{throw u("error"),d},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[i]),l}const N1=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=N1);function DM(t){const e=N1.findIndex(n=>gD(n,t));return e>-1?e:N1.push(t)-1}function PM(t,e){const n=`firestore:collection:${DM(t)}`,r=RM(t);return _5(n,r,e)}O.exports.createContext(void 0);const Z7=O.exports.createContext(void 0);O.exports.createContext(void 0);O.exports.createContext(void 0);const ew=O.exports.createContext(void 0);O.exports.createContext(void 0);O.exports.createContext(void 0);O.exports.createContext(void 0);O.exports.createContext(void 0);function tw(t){return function(e){var n,r;if(!e.sdk)throw new Error("no sdk provided");const i=J7().name;if(((r=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||r===void 0?void 0:r.name)!==i)throw new Error("sdk was initialized with a different firebase app");return O.exports.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function nw(t){const e=O.exports.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const OM=tw(Z7),MM=tw(ew),Lo=()=>nw(Z7),rw=()=>nw(ew);class w5 extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="ReactFireError",Object.setPrototypeOf(this,w5.prototype)}}/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fe.apply(this,arguments)}var Be;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Be||(Be={}));const t3="popstate";function FM(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ml("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:pr(i)}return UM(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $M(){return Math.random().toString(36).substr(2,8)}function n3(t,e){return{usr:t.state,key:t.key,idx:e}}function ml(t,e,n,r){return n===void 0&&(n=null),fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_r(e):e,{state:n,key:e&&e.key||r||$M()})}function pr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function UM(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Be.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Be.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:m})}function h(E,m){a=Be.Push;let p=ml(v.location,E,m);n&&n(p,E),u=c()+1;let _=n3(p,u),w=v.createHref(p);try{o.pushState(_,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function f(E,m){a=Be.Replace;let p=ml(v.location,E,m);n&&n(p,E),u=c();let _=n3(p,u),w=v.createHref(p);o.replaceState(_,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function g(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:pr(E);return te(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(t3,d),l=E,()=>{i.removeEventListener(t3,d),l=null}},createHref(E){return e(i,E)},createURL:g,encodeLocation(E){let m=g(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(E){return o.go(E)}};return v}var lt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lt||(lt={}));function VM(t){return t.index===!0}function iw(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,i)=>{let s=[...e,i],o=typeof r.id=="string"?r.id:s.join("-");return te(r.index!==!0||!r.children,"Cannot specify children on an index route"),te(!n.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),n.add(o),VM(r)?fe({},r,{id:o}):fe({},r,{id:o,children:r.children?iw(r.children,s,n):void 0})})}function sa(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_r(e):e,i=aw(r.pathname||"/",n);if(i==null)return null;let s=sw(t);BM(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=YM(s[a],ZM(i));return o}function sw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ir([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:GM(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ow(s.path))i(s,o,l)}),e}function ow(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ow(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function BM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jM=/^:\w+$/,zM=3,WM=2,HM=1,qM=10,KM=-2,r3=t=>t==="*";function GM(t,e){let n=t.split("/"),r=n.length;return n.some(r3)&&(r+=KM),e&&(r+=WM),n.filter(i=>!r3(i)).reduce((i,s)=>i+(jM.test(s)?zM:s===""?HM:qM),r)}function QM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function YM(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=XM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ir([i,c.pathname]),pathnameBase:rF(ir([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ir([i,c.pathnameBase]))}return s}function XM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=JM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=eF(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function JM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZM(t){try{return decodeURI(t)}catch(e){return gl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function eF(t,e){try{return decodeURIComponent(t)}catch(n){return gl(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function aw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tF(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:nF(n,e):e,search:iF(r),hash:sF(i)}}function nF(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function F0(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ed(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function E5(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_r(t):(i=fe({},t),te(!i.pathname||!i.pathname.includes("?"),F0("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),F0("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),F0("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=tF(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ir=t=>t.join("/").replace(/\/\/+/g,"/"),rF=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),iF=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sF=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class i3 extends Error{}class oF{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],te(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((s,o)=>r=o),this.controller=new AbortController;let i=()=>r(new i3("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(e).reduce((s,o)=>{let[a,l]=o;return Object.assign(s,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,e,null,i),i=>this.onSettle(r,e,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,i){return this.controller.signal.aborted&&r instanceof i3?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(e,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(e,n){this.subscribers.forEach(r=>r(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(s=>{e.removeEventListener("abort",r),(s||this.done)&&i(s)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return te(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,i]=n;return Object.assign(e,{[r]:lF(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function aF(t){return t instanceof Promise&&t._tracked===!0}function lF(t){if(!aF(t))return t;if(t._error)throw t._error;return t._data}class C5{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function lw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uw=["post","put","patch","delete"],uF=new Set(uw),cF=["get",...uw],hF=new Set(cF),dF=new Set([301,302,303,307,308]),fF=new Set([307,308]),$0={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pF={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},s3={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mF=!hw;function gF(t){te(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=iw(t.routes),n=null,r=new Set,i=null,s=null,o=null,a=t.hydrationData!=null,l=sa(e,t.history.location,t.basename),u=null;if(l==null){let C=Cr(404,{pathname:t.history.location.pathname}),{matches:S,route:T}=h3(e);l=S,u={[T.id]:C}}let c=!l.some(C=>C.route.loader)||t.hydrationData!=null,d,h={historyAction:t.history.action,location:t.history.location,matches:l,initialized:c,navigation:$0,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map,blockers:new Map},f=Be.Pop,g=!1,v,E=!1,m=!1,p=[],_=[],w=new Map,k=0,L=-1,N=new Map,M=new Set,de=new Map,Q=new Map,Fe=new Map,jn=!1;function ii(){return n=t.history.listen(C=>{let{action:S,location:T,delta:U}=C;if(jn){jn=!1;return}gl(Fe.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let P=b5({currentLocation:h.location,nextLocation:T,historyAction:S});if(P&&U!=null){jn=!0,t.history.go(U*-1),iu(P,{state:"blocked",location:T,proceed(){iu(P,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(U)},reset(){Ao(P),$e({blockers:new Map(d.state.blockers)})}});return}return K(S,T)}),h.initialized||K(Be.Pop,h.location),d}function nu(){n&&n(),r.clear(),v&&v.abort(),h.fetchers.forEach((C,S)=>bd(S)),h.blockers.forEach((C,S)=>Ao(S))}function kd(C){return r.add(C),()=>r.delete(C)}function $e(C){h=fe({},h,C),r.forEach(S=>S(h))}function zn(C,S){var T,U;let P=h.actionData!=null&&h.navigation.formMethod!=null&&Gn(h.navigation.formMethod)&&h.navigation.state==="loading"&&((T=C.state)==null?void 0:T._isRedirect)!==!0,J;S.actionData?Object.keys(S.actionData).length>0?J=S.actionData:J=null:P?J=h.actionData:J=null;let H=S.loaderData?c3(h.loaderData,S.loaderData,S.matches||[],S.errors):h.loaderData;for(let[z]of Fe)Ao(z);let re=g===!0||h.navigation.formMethod!=null&&Gn(h.navigation.formMethod)&&((U=C.state)==null?void 0:U._isRedirect)!==!0;$e(fe({},S,{actionData:J,loaderData:H,historyAction:f,location:C,initialized:!0,navigation:$0,revalidation:"idle",restoreScrollPosition:L5(C,S.matches||h.matches),preventScrollReset:re,blockers:new Map(h.blockers)})),E||f===Be.Pop||(f===Be.Push?t.history.push(C,C.state):f===Be.Replace&&t.history.replace(C,C.state)),f=Be.Pop,g=!1,E=!1,m=!1,p=[],_=[]}async function A(C,S){if(typeof C=="number"){t.history.go(C);return}let{path:T,submission:U,error:P}=o3(C,S),J=h.location,H=ml(h.location,T,S&&S.state);H=fe({},H,t.history.encodeLocation(H));let re=S&&S.replace!=null?S.replace:void 0,z=Be.Push;re===!0?z=Be.Replace:re===!1||U!=null&&Gn(U.formMethod)&&U.formAction===h.location.pathname+h.location.search&&(z=Be.Replace);let xt=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,le=b5({currentLocation:J,nextLocation:H,historyAction:z});if(le){iu(le,{state:"blocked",location:H,proceed(){iu(le,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),A(C,S)},reset(){Ao(le),$e({blockers:new Map(h.blockers)})}});return}return await K(z,H,{submission:U,pendingError:P,preventScrollReset:xt,replace:S&&S.replace})}function X(){if(xd(),$e({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){K(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}K(f||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function K(C,S,T){v&&v.abort(),v=null,f=C,E=(T&&T.startUninterruptedRevalidation)===!0,Tw(h.location,h.matches),g=(T&&T.preventScrollReset)===!0;let U=T&&T.overrideNavigation,P=sa(e,S,t.basename);if(!P){let Ne=Cr(404,{pathname:S.pathname}),{matches:hn,route:dn}=h3(e);Ld(),zn(S,{matches:hn,loaderData:{},errors:{[dn.id]:Ne}});return}if(EF(h.location,S)&&!(T&&T.submission&&Gn(T.submission.formMethod))){zn(S,{matches:P});return}v=new AbortController;let J=Go(t.history,S,v.signal,T&&T.submission),H,re;if(T&&T.pendingError)re={[Rs(P).route.id]:T.pendingError};else if(T&&T.submission&&Gn(T.submission.formMethod)){let Ne=await xe(J,S,T.submission,P,{replace:T.replace});if(Ne.shortCircuited)return;H=Ne.pendingActionData,re=Ne.pendingActionError,U=fe({state:"loading",location:S},T.submission),J=new Request(J.url,{signal:J.signal})}let{shortCircuited:z,loaderData:xt,errors:le}=await Ue(J,S,P,U,T&&T.submission,T&&T.replace,H,re);z||(v=null,zn(S,fe({matches:P},H?{actionData:H}:{},{loaderData:xt,errors:le})))}async function xe(C,S,T,U,P){xd();let J=fe({state:"submitting",location:S},T);$e({navigation:J});let H,re=m3(U,S);if(!re.route.action)H={type:lt.error,error:Cr(405,{method:C.method,pathname:S.pathname,routeId:re.route.id})};else if(H=await Ko("action",C,re,U,d.basename),C.signal.aborted)return{shortCircuited:!0};if(zs(H)){let z;return P&&P.replace!=null?z=P.replace:z=H.location===h.location.pathname+h.location.search,await In(h,H,{submission:T,replace:z}),{shortCircuited:!0}}if(Ia(H)){let z=Rs(U,re.route.id);return(P&&P.replace)!==!0&&(f=Be.Push),{pendingActionData:{},pendingActionError:{[z.route.id]:H.error}}}if(Ci(H))throw Cr(400,{type:"defer-action"});return{pendingActionData:{[re.route.id]:H.data}}}async function Ue(C,S,T,U,P,J,H,re){let z=U;z||(z=fe({state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},P));let xt=P||(z.formMethod&&z.formAction&&z.formData&&z.formEncType?{formMethod:z.formMethod,formAction:z.formAction,formData:z.formData,formEncType:z.formEncType}:void 0),[le,Ne]=a3(t.history,h,T,xt,S,m,p,_,H,re,de);if(Ld(ft=>!(T&&T.some(kn=>kn.route.id===ft))||le&&le.some(kn=>kn.route.id===ft)),le.length===0&&Ne.length===0)return zn(S,fe({matches:T,loaderData:{},errors:re||null},H?{actionData:H}:{})),{shortCircuited:!0};if(!E){Ne.forEach(kn=>{let oi=h.fetchers.get(kn.key),au={state:"loading",data:oi&&oi.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(kn.key,au)});let ft=H||h.actionData;$e(fe({navigation:z},ft?Object.keys(ft).length===0?{actionData:null}:{actionData:ft}:{},Ne.length>0?{fetchers:new Map(h.fetchers)}:{}))}L=++k,Ne.forEach(ft=>w.set(ft.key,v));let{results:hn,loaderResults:dn,fetcherResults:Do}=await k5(h.matches,T,le,Ne,C);if(C.signal.aborted)return{shortCircuited:!0};Ne.forEach(ft=>w.delete(ft.key));let su=d3(hn);if(su)return await In(h,su,{replace:J}),{shortCircuited:!0};let{loaderData:ou,errors:as}=u3(h,T,le,dn,re,Ne,Do,Q);Q.forEach((ft,kn)=>{ft.subscribe(oi=>{(oi||ft.done)&&Q.delete(kn)})}),Ew();let Nd=R5(L);return fe({loaderData:ou,errors:as},Nd||Ne.length>0?{fetchers:new Map(h.fetchers)}:{})}function si(C){return h.fetchers.get(C)||pF}function Wn(C,S,T,U){if(mF)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");w.has(C)&&ru(C);let P=sa(e,T,t.basename);if(!P){Rd(C,S,Cr(404,{pathname:T}));return}let{path:J,submission:H}=o3(T,U,!0),re=m3(P,J);if(g=(U&&U.preventScrollReset)===!0,H&&Gn(H.formMethod)){No(C,S,J,re,P,H);return}de.set(C,{routeId:S,path:J,match:re,matches:P}),Hn(C,S,J,re,P,H)}async function No(C,S,T,U,P,J){if(xd(),de.delete(C),!U.route.action){let qn=Cr(405,{method:J.formMethod,pathname:T,routeId:S});Rd(C,S,qn);return}let H=h.fetchers.get(C),re=fe({state:"submitting"},J,{data:H&&H.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(C,re),$e({fetchers:new Map(h.fetchers)});let z=new AbortController,xt=Go(t.history,T,z.signal,J);w.set(C,z);let le=await Ko("action",xt,U,P,d.basename);if(xt.signal.aborted){w.get(C)===z&&w.delete(C);return}if(zs(le)){w.delete(C),M.add(C);let qn=fe({state:"loading"},J,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(C,qn),$e({fetchers:new Map(h.fetchers)}),In(h,le,{isFetchActionRedirect:!0})}if(Ia(le)){Rd(C,S,le.error);return}if(Ci(le))throw Cr(400,{type:"defer-action"});let Ne=h.navigation.location||h.location,hn=Go(t.history,Ne,z.signal),dn=h.navigation.state!=="idle"?sa(e,h.navigation.location,t.basename):h.matches;te(dn,"Didn't find any matches after fetcher action");let Do=++k;N.set(C,Do);let su=fe({state:"loading",data:le.data},J,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(C,su);let[ou,as]=a3(t.history,h,dn,J,Ne,m,p,_,{[U.route.id]:le.data},void 0,de);as.filter(qn=>qn.key!==C).forEach(qn=>{let Dd=qn.key,N5=h.fetchers.get(Dd),xw={state:"loading",data:N5&&N5.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Dd,xw),w.set(Dd,z)}),$e({fetchers:new Map(h.fetchers)});let{results:Nd,loaderResults:ft,fetcherResults:kn}=await k5(h.matches,dn,ou,as,hn);if(z.signal.aborted)return;N.delete(C),w.delete(C),as.forEach(qn=>w.delete(qn.key));let oi=d3(Nd);if(oi)return In(h,oi);let{loaderData:au,errors:Ad}=u3(h,h.matches,ou,ft,void 0,as,kn,Q),Iw={state:"idle",data:le.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(C,Iw);let kw=R5(Do);h.navigation.state==="loading"&&Do>L?(te(f,"Expected pending action"),v&&v.abort(),zn(h.navigation.location,{matches:dn,loaderData:au,errors:Ad,fetchers:new Map(h.fetchers)})):($e(fe({errors:Ad,loaderData:c3(h.loaderData,au,dn,Ad)},kw?{fetchers:new Map(h.fetchers)}:{})),m=!1)}async function Hn(C,S,T,U,P,J){let H=h.fetchers.get(C),re=fe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},J,{data:H&&H.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(C,re),$e({fetchers:new Map(h.fetchers)});let z=new AbortController,xt=Go(t.history,T,z.signal);w.set(C,z);let le=await Ko("loader",xt,U,P,d.basename);if(Ci(le)&&(le=await mw(le,xt.signal,!0)||le),w.get(C)===z&&w.delete(C),xt.signal.aborted)return;if(zs(le)){await In(h,le);return}if(Ia(le)){let hn=Rs(h.matches,S);h.fetchers.delete(C),$e({fetchers:new Map(h.fetchers),errors:{[hn.route.id]:le.error}});return}te(!Ci(le),"Unhandled fetcher deferred data");let Ne={state:"idle",data:le.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(C,Ne),$e({fetchers:new Map(h.fetchers)})}async function In(C,S,T){var U;let{submission:P,replace:J,isFetchActionRedirect:H}=T===void 0?{}:T;S.revalidate&&(m=!0);let re=ml(C.location,S.location,fe({_isRedirect:!0},H?{_isFetchActionRedirect:!0}:{}));if(te(re,"Expected a location on the redirect navigation"),cw.test(S.location)&&hw&&typeof((U=window)==null?void 0:U.location)<"u"){let dn=t.history.createURL(S.location).origin;if(window.location.origin!==dn){J?window.location.replace(S.location):window.location.assign(S.location);return}}v=null;let z=J===!0?Be.Replace:Be.Push,{formMethod:xt,formAction:le,formEncType:Ne,formData:hn}=C.navigation;!P&&xt&&le&&hn&&Ne&&(P={formMethod:xt,formAction:le,formEncType:Ne,formData:hn}),fF.has(S.status)&&P&&Gn(P.formMethod)?await K(z,re,{submission:fe({},P,{formAction:S.location}),preventScrollReset:g}):await K(z,re,{overrideNavigation:{state:"loading",location:re,formMethod:P?P.formMethod:void 0,formAction:P?P.formAction:void 0,formEncType:P?P.formEncType:void 0,formData:P?P.formData:void 0},preventScrollReset:g})}async function k5(C,S,T,U,P){let J=await Promise.all([...T.map(z=>Ko("loader",P,z,S,d.basename)),...U.map(z=>Ko("loader",Go(t.history,z.path,P.signal),z.match,z.matches,d.basename))]),H=J.slice(0,T.length),re=J.slice(T.length);return await Promise.all([f3(C,T,H,P.signal,!1,h.loaderData),f3(C,U.map(z=>z.match),re,P.signal,!0)]),{results:J,loaderResults:H,fetcherResults:re}}function xd(){m=!0,p.push(...Ld()),de.forEach((C,S)=>{w.has(S)&&(_.push(S),ru(S))})}function Rd(C,S,T){let U=Rs(h.matches,S);bd(C),$e({errors:{[U.route.id]:T},fetchers:new Map(h.fetchers)})}function bd(C){w.has(C)&&ru(C),de.delete(C),N.delete(C),M.delete(C),h.fetchers.delete(C)}function ru(C){let S=w.get(C);te(S,"Expected fetch controller: "+C),S.abort(),w.delete(C)}function x5(C){for(let S of C){let U={state:"idle",data:si(S).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(S,U)}}function Ew(){let C=[];for(let S of M){let T=h.fetchers.get(S);te(T,"Expected fetcher: "+S),T.state==="loading"&&(M.delete(S),C.push(S))}x5(C)}function R5(C){let S=[];for(let[T,U]of N)if(U<C){let P=h.fetchers.get(T);te(P,"Expected fetcher: "+T),P.state==="loading"&&(ru(T),N.delete(T),S.push(T))}return x5(S),S.length>0}function Cw(C,S){let T=h.blockers.get(C)||s3;return Fe.get(C)!==S&&Fe.set(C,S),T}function Ao(C){h.blockers.delete(C),Fe.delete(C)}function iu(C,S){let T=h.blockers.get(C)||s3;te(T.state==="unblocked"&&S.state==="blocked"||T.state==="blocked"&&S.state==="blocked"||T.state==="blocked"&&S.state==="proceeding"||T.state==="blocked"&&S.state==="unblocked"||T.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+S.state),h.blockers.set(C,S),$e({blockers:new Map(h.blockers)})}function b5(C){let{currentLocation:S,nextLocation:T,historyAction:U}=C;if(Fe.size===0)return;Fe.size>1&&gl(!1,"A router only supports one blocker at a time");let P=Array.from(Fe.entries()),[J,H]=P[P.length-1],re=h.blockers.get(J);if(!(re&&re.state==="proceeding")&&H({currentLocation:S,nextLocation:T,historyAction:U}))return J}function Ld(C){let S=[];return Q.forEach((T,U)=>{(!C||C(U))&&(T.cancel(),S.push(U),Q.delete(U))}),S}function Sw(C,S,T){if(i=C,o=S,s=T||(U=>U.key),!a&&h.navigation===$0){a=!0;let U=L5(h.location,h.matches);U!=null&&$e({restoreScrollPosition:U})}return()=>{i=null,o=null,s=null}}function Tw(C,S){if(i&&s&&o){let T=S.map(P=>p3(P,h.loaderData)),U=s(C,T)||C.key;i[U]=o()}}function L5(C,S){if(i&&s&&o){let T=S.map(J=>p3(J,h.loaderData)),U=s(C,T)||C.key,P=i[U];if(typeof P=="number")return P}return null}return d={get basename(){return t.basename},get state(){return h},get routes(){return e},initialize:ii,subscribe:kd,enableScrollRestoration:Sw,navigate:A,fetch:Wn,revalidate:X,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:si,deleteFetcher:bd,dispose:nu,getBlocker:Cw,deleteBlocker:Ao,_internalFetchControllers:w,_internalActiveDeferreds:Q},d}function yF(t){return t!=null&&"formData"in t}function o3(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:pr(t);if(!e||!yF(e))return{path:r};if(e.formMethod&&!SF(e.formMethod))return{path:r,error:Cr(405,{method:e.formMethod})};let i;if(e.formData&&(i={formMethod:e.formMethod||"get",formAction:pw(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},Gn(i.formMethod)))return{path:r,submission:i};let s=_r(r),o=fw(e.formData);return n&&s.search&&gw(s.search)&&o.append("index",""),s.search="?"+o,{path:pr(s),submission:i}}function vF(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function a3(t,e,n,r,i,s,o,a,l,u,c){let d=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,h=t.createURL(e.location),f=t.createURL(i),g=s||h.toString()===f.toString()||h.search!==f.search,v=u?Object.keys(u)[0]:void 0,m=vF(n,v).filter((_,w)=>{if(_.route.loader==null)return!1;if(_F(e.loaderData,e.matches[w],_)||o.some(N=>N===_.route.id))return!0;let k=e.matches[w],L=_;return l3(_,fe({currentUrl:h,currentParams:k.params,nextUrl:f,nextParams:L.params},r,{actionResult:d,defaultShouldRevalidate:g||dw(k,L)}))}),p=[];return c&&c.forEach((_,w)=>{if(n.some(k=>k.route.id===_.routeId))a.includes(w)?p.push(fe({key:w},_)):l3(_.match,fe({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:d,defaultShouldRevalidate:g}))&&p.push(fe({key:w},_));else return}),[m,p]}function _F(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function dw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function l3(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Ko(t,e,n,r,i,s,o,a){i===void 0&&(i="/"),s===void 0&&(s=!1),o===void 0&&(o=!1);let l,u,c,d=new Promise((f,g)=>c=g),h=()=>c();e.signal.addEventListener("abort",h);try{let f=n.route[t];te(f,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([f({request:e,params:n.params,context:a}),d]),te(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(f){l=lt.error,u=f}finally{e.signal.removeEventListener("abort",h)}if(CF(u)){let f=u.status;if(dF.has(f)){let E=u.headers.get("Location");if(te(E,"Redirects returned/thrown from loaders/actions must have a Location header"),cw.test(E)){if(!s){let m=new URL(e.url),p=E.startsWith("//")?new URL(m.protocol+E):new URL(E);p.origin===m.origin&&(E=p.pathname+p.search+p.hash)}}else{let m=r.slice(0,r.indexOf(n)+1),p=Ed(m).map(w=>w.pathnameBase),_=E5(E,p,new URL(e.url).pathname);if(te(pr(_),"Unable to resolve redirect location: "+E),i){let w=_.pathname;_.pathname=w==="/"?i:ir([i,w])}E=pr(_)}if(s)throw u.headers.set("Location",E),u;return{type:lt.redirect,status:f,location:E,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(o)throw{type:l||lt.data,response:u};let g,v=u.headers.get("Content-Type");return v&&/\bapplication\/json\b/.test(v)?g=await u.json():g=await u.text(),l===lt.error?{type:l,error:new C5(f,u.statusText,g),headers:u.headers}:{type:lt.data,data:g,statusCode:u.status,headers:u.headers}}return l===lt.error?{type:l,error:u}:u instanceof oF?{type:lt.deferred,deferredData:u}:{type:lt.data,data:u}}function Go(t,e,n,r){let i=t.createURL(pw(e)).toString(),s={signal:n};if(r&&Gn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?fw(l):l}return new Request(i,s)}function fw(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function wF(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(te(!zs(c),"Cannot handle redirect results in processLoaderData"),Ia(c)){let f=Rs(t,h),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=g),s[h]=void 0,l||(l=!0,a=lw(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Ci(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function u3(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=wF(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:h}=s[c];te(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let f=o[c];if(Ia(f)){let g=Rs(t.matches,h.route.id);u&&u[g.route.id]||(u=fe({},u,{[g.route.id]:f.error})),t.fetchers.delete(d)}else if(zs(f))te(!1,"Unhandled fetcher revalidation redirect");else if(Ci(f))te(!1,"Unhandled fetcher deferred data");else{let g={state:"idle",data:f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,g)}}return{loaderData:l,errors:u}}function c3(t,e,n,r){let i=fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Rs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function h3(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Cr(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new C5(t||500,o,new Error(a),!0)}function d3(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(zs(n))return n}}function pw(t){let e=typeof t=="string"?_r(t):t;return pr(fe({},e,{hash:""}))}function EF(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Ci(t){return t.type===lt.deferred}function Ia(t){return t.type===lt.error}function zs(t){return(t&&t.type)===lt.redirect}function CF(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function SF(t){return hF.has(t)}function Gn(t){return uF.has(t)}async function f3(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o],u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!dw(u,l)&&(s&&s[l.route.id])!==void 0;Ci(a)&&(i||c)&&await mw(a,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function mw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:lt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:lt.error,error:i}}return{type:lt.data,data:t.deferredData.data}}}function gw(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function p3(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function m3(t,e){let n=typeof e=="string"?_r(e).search:e.search;if(t[t.length-1].route.index&&gw(n||""))return t[t.length-1];let r=Ed(t);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ph(){return ph=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ph.apply(this,arguments)}function TF(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const IF=typeof Object.is=="function"?Object.is:TF,{useState:kF,useEffect:xF,useLayoutEffect:RF,useDebugValue:bF}=V0;function LF(t,e,n){const r=e(),[{inst:i},s]=kF({inst:{value:r,getSnapshot:e}});return RF(()=>{i.value=r,i.getSnapshot=e,U0(i)&&s({inst:i})},[t,r,e]),xF(()=>(U0(i)&&s({inst:i}),t(()=>{U0(i)&&s({inst:i})})),[t]),bF(r),r}function U0(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!IF(n,r)}catch{return!0}}function NF(t,e,n){return e()}const AF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DF=!AF,PF=DF?NF:LF,OF="useSyncExternalStore"in V0?(t=>t.useSyncExternalStore)(V0):PF,S5=O.exports.createContext(null),T5=O.exports.createContext(null),Cd=O.exports.createContext(null),Sd=O.exports.createContext(null),ss=O.exports.createContext({outlet:null,matches:[]}),yw=O.exports.createContext(null);function MF(t,e){let{relative:n}=e===void 0?{}:e;tu()||te(!1);let{basename:r,navigator:i}=O.exports.useContext(Cd),{hash:s,pathname:o,search:a}=vw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function tu(){return O.exports.useContext(Sd)!=null}function Td(){return tu()||te(!1),O.exports.useContext(Sd).location}function os(){tu()||te(!1);let{basename:t,navigator:e}=O.exports.useContext(Cd),{matches:n}=O.exports.useContext(ss),{pathname:r}=Td(),i=JSON.stringify(Ed(n).map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=E5(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ir([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function FF(){let{matches:t}=O.exports.useContext(ss),e=t[t.length-1];return e?e.params:{}}function vw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=O.exports.useContext(ss),{pathname:i}=Td(),s=JSON.stringify(Ed(r).map(o=>o.pathnameBase));return O.exports.useMemo(()=>E5(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function $F(t,e){tu()||te(!1);let{navigator:n}=O.exports.useContext(Cd),r=O.exports.useContext(T5),{matches:i}=O.exports.useContext(ss),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Td(),u;if(e){var c;let v=typeof e=="string"?_r(e):e;a==="/"||((c=v.pathname)==null?void 0:c.startsWith(a))||te(!1),u=v}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=sa(t,{pathname:h}),g=jF(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ir([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ir([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&g?y(Sd.Provider,{value:{location:ph({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Be.Pop},children:g}):g}function UF(){let t=qF(),e=lw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return F(Qi,{children:[y("h2",{children:"Unexpected Application Error!"}),y("h3",{style:{fontStyle:"italic"},children:e}),n?y("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class VF extends O.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y(ss.Provider,{value:this.props.routeContext,children:y(yw.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function BF(t){let{routeContext:e,match:n,children:r}=t,i=O.exports.useContext(S5);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y(ss.Provider,{value:e,children:r})}function jF(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||te(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||y(UF,{}):null,c=e.concat(r.slice(0,a+1)),d=()=>y(BF,{match:o,routeContext:{outlet:s,matches:c},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?y(VF,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var g3;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(g3||(g3={}));var mh;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(mh||(mh={}));function zF(t){let e=O.exports.useContext(T5);return e||te(!1),e}function WF(t){let e=O.exports.useContext(ss);return e||te(!1),e}function HF(t){let e=WF(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function qF(){var t;let e=O.exports.useContext(yw),n=zF(mh.UseRouteError),r=HF(mh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function KF(t){let{fallbackElement:e,router:n}=t,r=OF(n.subscribe,()=>n.state,()=>n.state),i=O.exports.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:o=>n.navigate(o),push:(o,a,l)=>n.navigate(o,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(o,a,l)=>n.navigate(o,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),s=n.basename||"/";return y(Qi,{children:y(S5.Provider,{value:{router:n,navigator:i,static:!1,basename:s},children:y(T5.Provider,{value:r,children:y(QF,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i,children:n.state.initialized?y(YF,{}):e})})})})}function GF(t){te(!1)}function QF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Be.Pop,navigator:s,static:o=!1}=t;tu()&&te(!1);let a=e.replace(/^\/*/,"/"),l=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=_r(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,g=O.exports.useMemo(()=>{let v=aw(u,a);return v==null?null:{pathname:v,search:c,hash:d,state:h,key:f}},[a,u,c,d,h,f]);return g==null?null:y(Cd.Provider,{value:l,children:y(Sd.Provider,{children:n,value:{location:g,navigationType:i}})})}function YF(t){let{children:e,location:n}=t,r=O.exports.useContext(S5),i=r&&!e?r.router.routes:A1(e);return $F(i,n)}var y3;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(y3||(y3={}));new Promise(()=>{});function A1(t,e){e===void 0&&(e=[]);let n=[];return O.exports.Children.forEach(t,(r,i)=>{if(!O.exports.isValidElement(r))return;if(r.type===O.exports.Fragment){n.push.apply(n,A1(r.props.children,e));return}r.type!==GF&&te(!1),!r.props.index||!r.props.children||te(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=A1(r.props.children,s)),n.push(o)}),n}function _w(t){return t.map(e=>{let n=ph({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=_w(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D1(){return D1=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D1.apply(this,arguments)}function XF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZF(t,e){return t.button===0&&(!e||e==="_self")&&!JF(t)}const e$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t$(t,e){return gF({basename:e==null?void 0:e.basename,history:FM({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||n$(),routes:_w(t)}).initialize()}function n$(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=D1({},e,{errors:r$(e.errors)})),e}function r$(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new C5(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const i$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P1=O.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=XF(e,e$),h,f=!1;if(i$&&typeof u=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){h=u;let m=new URL(window.location.href),p=u.startsWith("//")?new URL(m.protocol+u):new URL(u);p.origin===m.origin?u=p.pathname+p.search+p.hash:f=!0}let g=MF(u,{relative:i}),v=s$(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function E(m){r&&r(m),m.defaultPrevented||v(m)}return y("a",{...d,href:h||g,onClick:f||s?r:E,ref:n,target:l})});var v3;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(v3||(v3={}));var _3;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_3||(_3={}));function s$(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=os(),l=Td(),u=vw(t,{relative:o});return O.exports.useCallback(c=>{if(ZF(c,n)){c.preventDefault();let d=r!==void 0?r:pr(l)===pr(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function o$(){const e=FF().uid,n=os(),r=rw(),[i,s]=O.exports.useState("");e||n("/");async function o(){const a=H_(r,"users",e,"inbox");await UD(a,{content:i,alreadyRead:!1}),alert("G\u1EEDi l\u1EDDi ch\xFAc th\xE0nh c\xF4ng!"),n("/")}return y(Qi,{children:F("form",{autoComplete:"off",className:"shadow-input flex h-1/3 w-2/5 flex-col items-center justify-center gap-y-3 rounded-lg bg-white px-10 py-3","aria-label":"signup-form",onSubmit:a=>{a.preventDefault(),o()},children:[y("label",{htmlFor:"email",className:"cursor-pointer text-sm font-medium",children:"G\u1EEDi thi\u1EC7p ch\xFAc T\u1EBFt (gi\u1EDBi h\u1EA1n 200 k\xFD t\u1EF1)"}),y("textarea",{rows:14,cols:10,wrap:"soft",className:"w-full resize-none rounded-lg border border-gray-200 bg-transparent p-1 text-center outline-none",placeholder:"Nh\u1EADp l\u1EDDi ch\xFAc",onChange:a=>s(a.target.value),maxLength:200,required:!0}),y("button",{type:"submit",className:"inline-flex h-[50px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white hover:bg-blue-400",children:"G\u1EEDi"})]})})}function I5(){return y("div",{"aria-label":"loading-skeleton",className:"h-full w-full animate-pulse bg-slate-200"})}function a$(){const{status:t}=eu();return t==="loading"?y(I5,{}):y("div",{className:"bg-cover bg-[url('https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/330423578_1542578269555336_1337613039926565188_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEa0fYc3fnGQcVoYAEmbmBZkJ5BE9ogt9WQnkET2iC31X6b0OVNs5JZTAIhvo7WU_FrF_nyYMx4eOSc55KWbJT8&_nc_ohc=g_5p-blN1BAAX8A1i45&_nc_ht=scontent.fhan15-1.fna&oh=03_AdS7_AzbFPDIH0oNT1jm8ub_jFj2auayl8_FfBwL85D2Cg&oe=640FDFEC')] flex h-screen w-screen flex-col items-center justify-center bg-red-400",children:y(o$,{})})}function Id({title:t,links:e=[]}){const n=os(),r=Lo();async function i(){r.currentUser?(await r.signOut(),n("/")):n("/login")}return F("div",{className:"border-b-1 flex h-[85px] items-center justify-between border-black bg-red-500",children:[F("svg",{className:"absolute left-0 top-0 h-[55px] w-[55px]",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute right-0 top-0 h-[55px] w-[55px] rotate-90",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("div",{className:"m-5 flex h-full items-center",children:[y("img",{className:"max-h-[90%] max-w-[90%] p-2",src:"https://media-public.canva.com/rEYeM/MAFS1MrEYeM/1/tl.png",alt:""}),y("h1",{className:"text-textyellow m-5 inline text-3xl font-bold",children:t})]}),y("div",{className:"absolute left-1/2 flex -translate-x-1/2 transform-gpu items-center align-middle",children:e.map((s,o)=>y("div",{className:"mx-2 flex items-center justify-center text-center align-middle",children:y(P1,{className:"text-textyellow h-4/5 w-[200px] rounded bg-red-700 py-2 text-xl hover:bg-red-600",to:s.navigateTo,children:s.display})},o))}),y("div",{className:"my-10",children:y("button",{onClick:i,className:"m-5 h-4/5 w-[200px] rounded bg-red-800 p-[15px] hover:bg-red-700",type:"button",children:y("p",{className:"text-textyellow",children:r.currentUser?"\u0110\u0103ng xu\u1EA5t":"\u0110\u0103ng nh\u1EADp"})})})]})}function l$({inboxLink:t}){const[e,n]=O.exports.useState(!1);return F("div",{className:"border-0.5 my-2 flex h-[5%] w-1/2 items-center justify-center rounded-md border-black bg-white",children:[y("span",{children:"Link h\u1ED9p th\u01B0 ch\xFAc T\u1EBFt:"}),y("span",{children:y("button",{onClick:()=>{navigator.clipboard.writeText(t),e||(n(!0),setTimeout(()=>{n(!1)},1e3))},type:"button",className:"mx-2 inline-flex h-4/5 items-center justify-center rounded-lg bg-blue-500 p-1 font-sans font-semibold tracking-wide text-white hover:bg-blue-400",children:e?"\u0110\xE3 sao ch\xE9p":"Sao ch\xE9p link"})})]})}function u$(t){var u;const{setMessage:e}=t,n=Lo(),r=rw(),i=H_(r,"users",(u=n.currentUser)==null?void 0:u.uid,"inbox"),{status:s,data:o}=PM(i);function a(){const c=[];return o.docs.forEach(d=>{const h=d.data();c.push({content:h.content,alreadyRead:h.alreadyRead,id:d.id})}),c.sort(d=>d.alreadyRead?1:-1).map((d,h)=>l(d,h))}function l(c,d){return F("button",{className:"relative m-5 bg-red-500 hover:bg-red-400",onClick:()=>{var f;e(c.content);const h=q_(r,"users",(f=n.currentUser)==null?void 0:f.uid,"inbox",c.id);$D(h,{alreadyRead:!0})},children:[y("svg",{className:"h-full w-full",viewBox:"154 198 308 396",children:F("g",{children:[F("g",{children:[y("path",{d:"m 322.3786,388.0695 c 1.696,-9.5366 -3.8696,-12.8988 -9.051,-12.611 -6.0101,0.3336 -11.8086,5.5851 -9.0669,14.2222 -9.0411,-5.8317 -13.7821,0.5749 -14.5061,5.9783 -0.6837,5.1029 3.2914,11.1679 10.4358,11.4267 -5.6849,6.4026 -3.888,12.7653 0.5451,15.2757 4.811,2.7243 12.0203,1.2342 15.3544,-6.2714 2.4993,7.2567 10.2813,6.565 14.3584,5.1443 4.2981,-3.63 9.2888,-10.0256 -0.3286,-16.8761 8.4779,-0.159 10.2835,-7.91 8.3115,-13.6882 -2.401,-4.6899 -7.1433,-7.2975 -16.0526,-2.6005 z",fill:"#ffcb00",fillRule:"evenodd"}),y("path",{d:"m 317.4171,396.3203 c -0.1576,-0.0958 -0.3183,-0.182 -0.4813,-0.2588 0.4362,-1.2526 0.6432,-2.5308 0.6911,-3.7919 0.0402,-1.0494 -0.0315,-2.0894 -0.1721,-3.0926 0.2166,-0.1267 0.4059,-0.3081 0.5454,-0.5377 0.4487,-0.7393 0.2132,-1.7031 -0.5253,-2.1515 -0.7392,-0.449 -1.703,-0.2135 -2.152,0.5258 -0.4485,0.7387 -0.2129,1.7025 0.5264,2.1512 0.2267,0.1378 0.4756,0.2106 0.7234,0.2248 0.1258,0.9255 0.187,1.8816 0.1505,2.8457 -0.0445,1.1696 -0.2361,2.3539 -0.6378,3.513 -0.8031,-0.2172 -1.6367,-0.2325 -2.4293,-0.0621 -0.2523,-1.0482 -0.6372,-2.035 -1.1101,-2.9574 -0.5125,-0.9998 -1.1284,-1.9247 -1.7895,-2.7745 0.3938,-0.7288 0.15,-1.647 -0.5655,-2.0812 -0.7393,-0.4488 -1.703,-0.2135 -2.1518,0.5258 -0.4484,0.7387 -0.2128,1.7025 0.5262,2.1515 0.4869,0.2956 1.0709,0.2942 1.5417,0.0473 0.6038,0.7849 1.1642,1.6348 1.6319,2.5458 0.4499,0.8785 0.815,1.8156 1.0488,2.8103 -0.4821,0.197 -0.9379,0.4674 -1.3464,0.8067 -0.7662,-0.7511 -1.6135,-1.3802 -2.501,-1.9105 -1.2047,-0.7194 -2.4846,-1.2558 -3.7403,-1.6645 -0.0953,-0.3895 -0.3388,-0.743 -0.7087,-0.9678 -0.7393,-0.4487 -1.7031,-0.2131 -2.1518,0.5261 -0.4487,0.7388 -0.2131,1.7022 0.5261,2.1513 0.7387,0.4484 1.7025,0.2128 2.151,-0.5259 0.0493,-0.081 0.0907,-0.1652 0.1236,-0.2517 1.1276,0.381 2.2671,0.8688 3.3349,1.5066 0.8246,0.4927 1.6121,1.0775 2.3239,1.7734 -0.1715,0.2032 -0.3286,0.4212 -0.4706,0.6554 -0.1953,0.3214 -0.3506,0.6567 -0.4694,0.9986 -1.1699,-0.0904 -2.3171,-0.007 -3.4211,0.197 l -0.001,0.002 c -1.2291,0.2273 -2.4032,0.6012 -3.5005,1.0483 -0.0893,-0.0919 -0.1922,-0.1741 -0.3075,-0.2441 -0.7393,-0.4487 -1.7031,-0.2132 -2.1518,0.5261 -0.4485,0.7387 -0.2129,1.7025 0.5264,2.1512 0.7384,0.4485 1.7022,0.2129 2.1509,-0.5258 0.2083,-0.343 0.2693,-0.7339 0.2007,-1.0999 1.0264,-0.4127 2.1175,-0.7582 3.2471,-0.9671 v 0.001 c 0.9833,-0.182 2.0012,-0.2619 3.0362,-0.1965 -0.0805,0.5213 -0.0786,1.0483 0,1.5616 -1.0174,0.4218 -1.9486,0.9726 -2.8001,1.603 -1.0908,0.8079 -2.05,1.7433 -2.8902,2.7088 -0.663,-0.1924 -1.3995,0.0734 -1.7751,0.692 -0.4484,0.7387 -0.2128,1.7025 0.5264,2.1515 0.7387,0.4484 1.7025,0.2128 2.151,-0.5259 0.3568,-0.5876 0.2809,-1.3181 -0.1369,-1.8175 0.7829,-0.8901 1.6687,-1.7479 2.6628,-2.4838 0.7577,-0.5606 1.5829,-1.0533 2.4789,-1.4385 0.1695,0.498 0.415,0.9722 0.7325,1.4017 -0.7308,0.8711 -1.3156,1.821 -1.7864,2.8049 -0.5406,1.1313 -0.9295,2.3096 -1.2155,3.4704 -0.3917,0.0936 -0.7478,0.3388 -0.9737,0.7104 -0.4484,0.7387 -0.2129,1.7025 0.5264,2.1515 0.7387,0.4484 1.7025,0.2129 2.1509,-0.5258 0.449,-0.7393 0.2135,-1.7031 -0.5252,-2.1515 -0.0848,-0.0516 -0.1724,-0.0941 -0.2625,-0.1276 0.2676,-1.0511 0.6264,-2.1144 1.1148,-3.1351 0.4207,-0.8799 0.9389,-1.7289 1.5789,-2.5112 0.2594,0.2449 0.5483,0.466 0.8657,0.6587 0.2722,0.165 0.5525,0.3019 0.8394,0.4116 -0.1454,0.9593 -0.1738,1.9148 -0.1148,2.8497 0.085,1.3674 0.3554,2.696 0.716,3.9407 -0.0935,0.091 -0.178,0.1951 -0.2489,0.3118 -0.4487,0.7388 -0.2131,1.7025 0.5261,2.1515 0.7387,0.4485 1.7025,0.2129 2.151,-0.5258 0.449,-0.7393 0.2134,-1.703 -0.5253,-2.1515 -0.337,-0.2046 -0.7206,-0.267 -1.0814,-0.2041 -0.3186,-1.1361 -0.5553,-2.3431 -0.6327,-3.579 -0.053,-0.8382 -0.0312,-1.6906 0.089,-2.5447 0.6126,0.1157 1.2351,0.118 1.8374,0.0134 0.3166,1.0709 0.775,2.0687 1.3218,2.9928 0.6086,1.0275 1.3269,1.963 2.0852,2.8094 -0.339,0.7155 -0.0887,1.5868 0.6032,2.0072 0.7387,0.4485 1.7025,0.2129 2.1509,-0.5258 0.449,-0.7393 0.2135,-1.7031 -0.5252,-2.1515 -0.5137,-0.3121 -1.135,-0.2923 -1.6175,-0.004 -0.7016,-0.7895 -1.3618,-1.6552 -1.9188,-2.5952 -0.5059,-0.8543 -0.9289,-1.7759 -1.2231,-2.764 0.7778,-0.2804 1.4927,-0.7489 2.0693,-1.3867 0.9275,0.8007 1.9477,1.4323 3.0064,1.9306 1.0477,0.4924 2.1342,0.8567 3.2071,1.1282 0.0794,0.4224 0.3308,0.811 0.7271,1.0517 0.7387,0.4484 1.7025,0.2129 2.1509,-0.5258 0.449,-0.7393 0.2135,-1.7031 -0.5252,-2.1515 -0.7393,-0.449 -1.7031,-0.2135 -2.1521,0.5258 -0.0377,0.0621 -0.0708,0.1261 -0.0986,0.1908 -0.9819,-0.2549 -1.9721,-0.5905 -2.924,-1.0387 -1.0051,-0.4739 -1.9712,-1.0726 -2.8442,-1.8348 l 0.0396,-0.0641 c 0.4428,-0.7291 0.6829,-1.5242 0.7373,-2.3199 1.0599,0.0488 2.0997,-0.0416 3.1048,-0.2324 1.0454,-0.1981 2.0537,-0.504 3.0084,-0.87 0.0964,0.1035 0.2084,0.1959 0.3348,0.2727 0.7387,0.4488 1.7025,0.2132 2.1509,-0.5255 0.449,-0.7393 0.2135,-1.7031 -0.5252,-2.1515 -0.7393,-0.449 -1.7031,-0.2134 -2.1518,0.5258 -0.2007,0.3305 -0.2651,0.7064 -0.2072,1.0608 -0.8864,0.3364 -1.8179,0.6159 -2.7785,0.7979 -0.9573,0.1817 -1.9463,0.2653 -2.9535,0.2132 -0.0759,-0.7033 -0.2959,-1.3873 -0.648,-2.0061 0.7385,-0.5341 1.4352,-1.0953 2.0866,-1.6838 0.9238,-0.8354 1.7584,-1.7286 2.4962,-2.6801 0.6375,0.142 1.3224,-0.1265 1.6798,-0.7155 0.449,-0.7393 0.2135,-1.7031 -0.5252,-2.1515 -0.7393,-0.449 -1.7031,-0.2135 -2.1521,0.5258 -0.3742,0.6166 -0.2721,1.3898 0.2018,1.8899 -0.6843,0.8699 -1.4561,1.6891 -2.3088,2.4599 -0.6208,0.5615 -1.2864,1.0981 -1.9942,1.6101 -0.3554,-0.4275 -0.7869,-0.8037 -1.2886,-1.1084 z",fill:"#fab000",fillRule:"evenodd"}),y("path",{d:"m 315.9142,396.8921 c -0.1384,-0.0454 -0.2775,-0.0831 -0.417,-0.1134 0.1122,-1.0423 0.0431,-2.0634 -0.1454,-3.043 -0.1568,-0.8153 -0.3977,-1.6033 -0.6852,-2.3505 0.144,-0.1363 0.2574,-0.3098 0.3238,-0.5117 0.2134,-0.6494 -0.1401,-1.3492 -0.7892,-1.5627 -0.6494,-0.2134 -1.3493,0.14 -1.5627,0.7897 -0.2135,0.6489 0.1403,1.3488 0.7897,1.5622 0.199,0.0655 0.4039,0.0771 0.5972,0.0437 0.2623,0.6902 0.4802,1.4153 0.6242,2.1645 0.1749,0.9082 0.239,1.8547 0.137,2.8188 -0.6571,-0.0238 -1.3017,0.1134 -1.8817,0.3863 -0.3815,-0.7619 -0.8541,-1.4527 -1.3833,-2.0786 -0.5734,-0.6781 -1.2129,-1.2804 -1.8737,-1.8165 0.1729,-0.6315 -0.1789,-1.2948 -0.8073,-1.5015 -0.6494,-0.2134 -1.3496,0.1401 -1.563,0.7895 -0.2135,0.6491 0.1403,1.349 0.7897,1.5624 0.4278,0.1406 0.877,0.0352 1.1954,-0.2389 0.6055,0.4963 1.1888,1.0505 1.7115,1.6685 0.5035,0.5961 0.9522,1.2523 1.3102,1.9763 -0.3362,0.2381 -0.6386,0.5278 -0.8926,0.8617 -0.7246,-0.4414 -1.4893,-0.7741 -2.2672,-1.0239 -1.0562,-0.3384 -2.1376,-0.5227 -3.1779,-0.6131 -0.1426,-0.2829 -0.3934,-0.5117 -0.7183,-0.6185 -0.6494,-0.2135 -1.3496,0.1403 -1.563,0.7897 -0.2132,0.6489 0.1403,1.349 0.7897,1.5625 0.6489,0.2131 1.349,-0.1404 1.5622,-0.7895 0.0235,-0.0711 0.0402,-0.1434 0.0502,-0.2157 0.9362,0.0918 1.9009,0.2636 2.8372,0.5638 0.7231,0.2319 1.4337,0.5417 2.1061,0.9502 -0.0955,0.1871 -0.1774,0.3832 -0.2452,0.5887 -0.0927,0.2824 -0.1525,0.5684 -0.1825,0.853 -0.9173,0.1392 -1.7859,0.4085 -2.5994,0.7631 l -6e-4,0.002 c -0.9057,0.3945 -1.743,0.8923 -2.5078,1.4326 -0.0853,-0.055 -0.1791,-0.0998 -0.2803,-0.1329 -0.6495,-0.2135 -1.3496,0.14 -1.5631,0.7894 -0.2134,0.6491 0.1404,1.349 0.7898,1.5625 0.6488,0.2134 1.349,-0.1404 1.5621,-0.7892 0.0993,-0.3013 0.0763,-0.6134 -0.0419,-0.8827 0.7166,-0.5015 1.495,-0.9624 2.3275,-1.3252 v 0.001 c 0.7248,-0.3158 1.4944,-0.5595 2.3029,-0.6939 0.0312,0.4156 0.1267,0.8212 0.2792,1.2022 -0.7081,0.5068 -1.3266,1.0973 -1.8697,1.7351 -0.6954,0.8166 -1.2668,1.7087 -1.7414,2.6022 -0.5448,-0.0298 -1.0641,0.3064 -1.243,0.8501 -0.2131,0.6488 0.1404,1.349 0.7898,1.5624 0.6491,0.2132 1.349,-0.1403 1.5624,-0.7891 0.1695,-0.5165 -0.0192,-1.0653 -0.4303,-1.3754 0.4437,-0.8252 0.9726,-1.6438 1.6064,-2.3882 0.4833,-0.5672 1.0304,-1.0942 1.6518,-1.5508 0.2194,0.3532 0.4932,0.6743 0.8144,0.9484 -0.4071,0.8014 -0.6874,1.6373 -0.8742,2.4792 -0.214,0.9675 -0.3031,1.9443 -0.3155,2.8891 -0.2849,0.1423 -0.5154,0.3946 -0.6228,0.7211 -0.2134,0.6492 0.1403,1.349 0.7897,1.5625 0.6489,0.2134 1.349,-0.1403 1.5622,-0.7892 0.2135,-0.6494 -0.14,-1.3496 -0.7889,-1.5627 -0.0745,-0.0244 -0.1496,-0.0417 -0.2248,-0.0513 0.0179,-0.8572 0.1044,-1.7402 0.298,-2.6133 0.1666,-0.7526 0.4138,-1.4989 0.7667,-2.2158 0.2438,0.1423 0.5054,0.2608 0.7844,0.3523 0.2389,0.0788 0.4793,0.1338 0.72,0.167 0.0592,0.7648 0.2083,1.5057 0.4206,2.215 0.3101,1.0375 0.7558,2.0123 1.2561,2.9063 -0.0559,0.0868 -0.1024,0.1817 -0.1361,0.2846 -0.2134,0.6489 0.1403,1.3488 0.7897,1.5625 0.6489,0.2132 1.349,-0.1403 1.5622,-0.7895 0.2135,-0.6494 -0.14,-1.3493 -0.7889,-1.5627 -0.2962,-0.0972 -0.6026,-0.0765 -0.8694,0.036 -0.4484,-0.8175 -0.8461,-1.7048 -1.1267,-2.6425 -0.1908,-0.6361 -0.3263,-1.2962 -0.3864,-1.9751 0.4924,-0.0207 0.972,-0.1301 1.4173,-0.3184 0.4352,0.7682 0.9664,1.4545 1.5529,2.0682 0.6519,0.6826 1.3722,1.2742 2.1075,1.7906 -0.1332,0.6115 0.2152,1.2376 0.8232,1.4375 0.6488,0.2134 1.349,-0.14 1.5622,-0.7892 0.2134,-0.6494 -0.1401,-1.3493 -0.7889,-1.5627 -0.4516,-0.1483 -0.9264,-0.0221 -1.2464,0.2857 -0.6812,-0.4824 -1.3442,-1.031 -1.9412,-1.6554 -0.5425,-0.5672 -1.0326,-1.2013 -1.436,-1.9094 0.5491,-0.3552 1.0156,-0.8436 1.3456,-1.4378 0.8572,0.4507 1.7558,0.7549 2.66,0.9493 0.8949,0.192 1.7963,0.2781 2.6711,0.2954 0.1366,0.311 0.3997,0.5652 0.7478,0.6798 0.6488,0.2134 1.349,-0.1403 1.5622,-0.7892 0.2134,-0.6494 -0.1401,-1.3496 -0.7889,-1.5627 -0.6497,-0.2135 -1.3496,0.14 -1.563,0.7894 -0.0179,0.0547 -0.0321,0.1097 -0.042,0.1647 -0.8016,-0.021 -1.624,-0.1023 -2.4372,-0.2775 -0.8586,-0.1851 -1.7093,-0.4734 -2.518,-0.9043 l 0.0192,-0.0564 c 0.2107,-0.6406 0.2535,-1.2957 0.1531,-1.9182 0.8246,-0.1516 1.6092,-0.4073 2.3491,-0.7339 0.7696,-0.3393 1.4913,-0.7548 2.1608,-1.2075 0.0927,0.0626 0.1956,0.1136 0.3067,0.1502 0.6489,0.2135 1.3491,-0.1403 1.5622,-0.7892 0.2138,-0.6494 -0.14,-1.3492 -0.7889,-1.5627 -0.6494,-0.2134 -1.3495,0.14 -1.563,0.7895 -0.0955,0.2905 -0.0777,0.5913 0.0301,0.854 -0.6222,0.4173 -1.2895,0.7991 -1.9968,1.1109 -0.7044,0.311 -1.4513,0.5522 -2.2359,0.692 -0.1843,-0.5281 -0.476,-1.0154 -0.8575,-1.429 0.4731,-0.5431 0.9093,-1.0995 1.3056,-1.6693 0.5619,-0.8084 1.0449,-1.6452 1.4431,-2.5098 0.5162,-0.005 0.9956,-0.3339 1.1656,-0.8512 0.2135,-0.6495 -0.1403,-1.3493 -0.7891,-1.5628 -0.6494,-0.2134 -1.3496,0.1403 -1.563,0.7898 -0.1781,0.5414 0.0388,1.1185 0.4932,1.419 -0.3714,0.792 -0.8192,1.5607 -1.3382,2.3068 -0.3776,0.5431 -0.7943,1.0752 -1.2479,1.5959 -0.35,-0.2656 -0.7494,-0.4782 -1.1902,-0.623 z",fill:"#f07c00",fillRule:"evenodd"})]}),F("g",{children:[y("path",{d:"m 353.6722,362.3559 c 0.9712,-5.4607 -2.2155,-7.3857 -5.1823,-7.221 -3.441,0.1913 -6.7612,3.198 -5.1913,8.1434 -5.1767,-3.3392 -7.8911,0.3291 -8.3056,3.4228 -0.3914,2.9217 1.8845,6.3944 5.9752,6.5426 -3.255,3.6658 -2.2263,7.3089 0.3121,8.7461 2.7547,1.5599 6.8822,0.7069 8.7914,-3.5907 1.4309,4.155 5.8867,3.759 8.221,2.9455 2.4607,-2.0784 5.3184,-5.7402 -0.1882,-9.6627 4.854,-0.091 5.8881,-4.529 4.7588,-7.8373 -1.3745,-2.6852 -4.0899,-4.1782 -9.1911,-1.4887 z",fill:"#ffcb00",fillRule:"evenodd"}),y("path",{d:"m 350.8316,367.0798 c -0.0904,-0.0547 -0.1822,-0.1043 -0.2758,-0.1482 0.2497,-0.7172 0.3682,-1.4491 0.3957,-2.1711 0.023,-0.6009 -0.0181,-1.1962 -0.0983,-1.7708 0.1238,-0.0723 0.2324,-0.1763 0.3121,-0.3078 0.2571,-0.4233 0.1221,-0.9752 -0.3008,-1.232 -0.4232,-0.2568 -0.9751,-0.1222 -1.2319,0.3013 -0.2569,0.423 -0.1222,0.9746 0.3013,1.2317 0.1298,0.0788 0.2724,0.1205 0.4141,0.1287 0.072,0.5298 0.1072,1.0772 0.0862,1.6293 -0.0255,0.6696 -0.1352,1.3476 -0.3654,2.0115 -0.4598,-0.1244 -0.9368,-0.1332 -1.3907,-0.0357 -0.1445,-0.6001 -0.3648,-1.165 -0.6355,-1.6931 -0.2937,-0.5726 -0.6463,-1.1022 -1.0247,-1.5889 0.2253,-0.4172 0.0859,-0.9428 -0.3237,-1.1914 -0.4232,-0.2571 -0.9751,-0.1221 -1.2322,0.3011 -0.2569,0.4229 -0.1219,0.9748 0.3013,1.2316 0.2789,0.1693 0.6131,0.1684 0.8827,0.0272 0.3458,0.4493 0.6667,0.936 0.9343,1.4576 0.2577,0.5029 0.4668,1.0395 0.6006,1.609 -0.276,0.1131 -0.5368,0.2678 -0.7707,0.462 -0.4388,-0.43 -0.9241,-0.7903 -1.4321,-1.0939 -0.6896,-0.4119 -1.4227,-0.7188 -2.1418,-0.953 -0.0544,-0.2231 -0.1936,-0.4255 -0.4057,-0.5542 -0.4232,-0.2568 -0.9751,-0.1221 -1.2319,0.3014 -0.2568,0.4229 -0.1219,0.9745 0.3013,1.2316 0.423,0.2568 0.9749,0.1219 1.2314,-0.301 0.0283,-0.0465 0.0522,-0.0947 0.0709,-0.144 0.6454,0.218 1.298,0.4972 1.9094,0.8626 0.4722,0.282 0.9229,0.6168 1.3306,1.0153 -0.0981,0.1163 -0.1883,0.2413 -0.2696,0.3751 -0.1117,0.1842 -0.2007,0.3761 -0.2684,0.572 -0.6702,-0.0519 -1.3269,-0.004 -1.9591,0.1125 l -5e-4,0.001 c -0.7039,0.1301 -1.3763,0.3441 -2.0041,0.6 -0.0513,-0.0527 -0.1103,-0.0994 -0.1763,-0.1397 -0.4233,-0.2568 -0.9752,-0.1219 -1.232,0.3013 -0.2568,0.423 -0.1219,0.9746 0.3013,1.2317 0.423,0.2568 0.9746,0.1219 1.2314,-0.3011 0.1193,-0.1964 0.1542,-0.4201 0.1151,-0.6295 0.5876,-0.2364 1.2124,-0.4343 1.8592,-0.5539 l -2e-4,8e-4 c 0.5632,-0.1043 1.146,-0.1502 1.7384,-0.1125 -0.0459,0.2985 -0.045,0.6001 0,0.894 -0.5822,0.2415 -1.1157,0.557 -1.6032,0.9179 -0.6245,0.4626 -1.1736,0.9981 -1.6546,1.5511 -0.3796,-0.1103 -0.8014,0.0417 -1.0165,0.396 -0.2568,0.4229 -0.1219,0.9748 0.3013,1.2319 0.4229,0.2569 0.9748,0.1219 1.2317,-0.301 0.2043,-0.3365 0.161,-0.7549 -0.0783,-1.0409 0.4482,-0.5094 0.9553,-1.0006 1.5245,-1.4218 0.434,-0.3212 0.9062,-0.6032 1.4196,-0.8238 0.0969,0.2852 0.2375,0.5567 0.4192,0.8025 -0.4184,0.4989 -0.7534,1.0426 -1.023,1.6061 -0.3095,0.6477 -0.5321,1.3224 -0.6956,1.9868 -0.2245,0.0539 -0.4283,0.1942 -0.5576,0.4071 -0.2568,0.4229 -0.1219,0.9745 0.3013,1.2316 0.423,0.2569 0.9749,0.1219 1.2317,-0.301 0.2568,-0.4232 0.1219,-0.9751 -0.3011,-1.2319 -0.0484,-0.0295 -0.0986,-0.0539 -0.1499,-0.0729 0.1531,-0.6018 0.3586,-1.2107 0.6381,-1.7952 0.2409,-0.5037 0.5374,-0.9898 0.9039,-1.4377 0.1486,0.14 0.3141,0.2667 0.4958,0.377 0.1556,0.0947 0.3164,0.1729 0.4805,0.2358 -0.0833,0.5494 -0.0992,1.0965 -0.0658,1.6317 0.0488,0.7829 0.2036,1.5437 0.4102,2.2563 -0.0536,0.0519 -0.102,0.1114 -0.1426,0.1783 -0.2568,0.4233 -0.1219,0.9749 0.3013,1.232 0.423,0.2568 0.9749,0.1219 1.2317,-0.3011 0.2568,-0.4232 0.1222,-0.9751 -0.301,-1.2319 -0.1928,-0.1171 -0.4125,-0.1528 -0.6191,-0.1168 -0.1826,-0.6505 -0.3178,-1.3416 -0.3623,-2.0492 -0.0303,-0.4799 -0.0179,-0.968 0.051,-1.457 0.3507,0.0661 0.707,0.0675 1.052,0.008 0.1814,0.6131 0.4436,1.1843 0.7568,1.7135 0.3484,0.5885 0.7597,1.124 1.194,1.6087 -0.1942,0.4096 -0.0511,0.9085 0.3452,1.1492 0.423,0.2568 0.9749,0.1219 1.2317,-0.3011 0.2571,-0.4232 0.1222,-0.9751 -0.3008,-1.2319 -0.2942,-0.1786 -0.6497,-0.1673 -0.9261,-0.003 -0.4016,-0.4521 -0.7798,-0.9476 -1.0987,-1.4859 -0.2897,-0.4892 -0.5317,-1.0168 -0.7004,-1.5826 0.4456,-0.1604 0.8546,-0.4288 1.1849,-0.794 0.5312,0.4584 1.1151,0.8201 1.7215,1.1056 0.5998,0.282 1.222,0.4904 1.8362,0.646 0.0454,0.2418 0.1894,0.4643 0.4162,0.6021 0.4229,0.2568 0.9748,0.1218 1.2316,-0.3011 0.2571,-0.4232 0.1222,-0.9751 -0.3007,-1.2319 -0.4232,-0.2571 -0.9752,-0.1222 -1.2323,0.301 -0.0215,0.0357 -0.0405,0.0723 -0.0564,0.1094 -0.5624,-0.1459 -1.129,-0.3381 -1.6741,-0.595 -0.5754,-0.2712 -1.1285,-0.6139 -1.6285,-1.0505 l 0.0227,-0.0365 c 0.2534,-0.4176 0.3909,-0.8728 0.422,-1.3284 0.6069,0.0281 1.2022,-0.0238 1.7776,-0.1332 0.5987,-0.1134 1.1761,-0.2883 1.7227,-0.498 0.0552,0.0592 0.1193,0.1122 0.1919,0.1562 0.4229,0.2568 0.9745,0.1221 1.2313,-0.3008 0.2571,-0.4235 0.1222,-0.9751 -0.3007,-1.2319 -0.4232,-0.2571 -0.9751,-0.1222 -1.232,0.301 -0.115,0.1894 -0.1516,0.4045 -0.1187,0.6075 -0.5074,0.1924 -1.0409,0.3526 -1.5908,0.4566 -0.548,0.1041 -1.1143,0.152 -1.6912,0.1222 -0.0433,-0.4028 -0.1692,-0.7943 -0.3707,-1.1486 0.4226,-0.3059 0.8214,-0.627 1.1945,-0.9641 0.5289,-0.4784 1.0068,-0.9895 1.4292,-1.5346 0.3651,0.0813 0.7571,-0.0723 0.9618,-0.4096 0.2571,-0.4233 0.1222,-0.9752 -0.3008,-1.232 -0.4232,-0.2568 -0.9751,-0.1222 -1.2322,0.3013 -0.214,0.353 -0.1556,0.7957 0.1157,1.082 -0.3918,0.4981 -0.8337,0.9672 -1.3221,1.4086 -0.3555,0.3211 -0.7364,0.6284 -1.1418,0.9215 -0.2035,-0.2446 -0.4504,-0.4601 -0.7376,-0.6344 z",fill:"#fab000",fillRule:"evenodd"}),y("path",{d:"m 349.971,367.4072 c -0.0793,-0.0261 -0.159,-0.0476 -0.2387,-0.0649 0.0641,-0.5967 0.0244,-1.1815 -0.0833,-1.7425 -0.0899,-0.4668 -0.2279,-0.9178 -0.3923,-1.3458 0.0825,-0.078 0.1474,-0.1772 0.1854,-0.2929 0.1222,-0.3719 -0.0802,-0.7724 -0.4519,-0.8946 -0.3719,-0.1224 -0.7727,0.0802 -0.8949,0.4519 -0.1221,0.3716 0.0803,0.7724 0.4522,0.8946 0.1142,0.0377 0.2313,0.0442 0.3421,0.0249 0.15,0.3955 0.275,0.8104 0.3575,1.2393 0.1,0.5202 0.1366,1.0619 0.0782,1.6141 -0.3762,-0.0136 -0.7452,0.0649 -1.0772,0.2211 -0.2185,-0.4363 -0.4892,-0.8317 -0.792,-1.19 -0.3285,-0.3884 -0.6945,-0.7333 -1.0729,-1.04 0.0989,-0.3617 -0.1026,-0.7416 -0.4623,-0.8598 -0.3719,-0.1222 -0.7727,0.0802 -0.8949,0.4521 -0.1222,0.3714 0.0802,0.7722 0.4521,0.8947 0.2449,0.0805 0.5023,0.0198 0.6846,-0.137 0.3467,0.2841 0.6806,0.6016 0.9799,0.9553 0.2883,0.3413 0.5451,0.7169 0.7501,1.1316 -0.1925,0.1364 -0.3657,0.3022 -0.5111,0.4935 -0.4147,-0.2528 -0.8527,-0.4433 -1.298,-0.5865 -0.6049,-0.1939 -1.224,-0.2993 -1.8196,-0.3509 -0.0816,-0.1619 -0.2253,-0.2931 -0.4113,-0.354 -0.3719,-0.1225 -0.7727,0.0802 -0.8949,0.4521 -0.1221,0.3713 0.0802,0.7721 0.4522,0.8943 0.3716,0.1222 0.7724,-0.0802 0.8946,-0.4518 0.0133,-0.0409 0.0229,-0.0822 0.0286,-0.1236 0.536,0.0527 1.0882,0.1511 1.6245,0.3228 0.4139,0.133 0.8209,0.3102 1.2059,0.5443 -0.0547,0.1069 -0.1018,0.2191 -0.1403,0.3368 -0.0533,0.1618 -0.0876,0.3254 -0.1049,0.4884 -0.525,0.0799 -1.0222,0.2338 -1.4882,0.4371 l -3e-4,8e-4 c -0.5184,0.2259 -0.9978,0.5108 -1.4357,0.8204 -0.0491,-0.0315 -0.1026,-0.057 -0.1608,-0.0763 -0.3719,-0.1222 -0.7724,0.0802 -0.8948,0.4521 -0.1222,0.3717 0.0805,0.7725 0.4524,0.8946 0.3713,0.1222 0.7721,-0.0802 0.8943,-0.4518 0.0567,-0.1726 0.0436,-0.3512 -0.0241,-0.5054 0.4105,-0.2872 0.8561,-0.5511 1.3326,-0.7588 l 2e-4,5e-4 c 0.4148,-0.1808 0.8555,-0.3203 1.3184,-0.3971 0.0179,0.2381 0.0726,0.47 0.1599,0.6882 -0.4053,0.2903 -0.7597,0.6285 -1.0706,0.9936 -0.398,0.4674 -0.7254,0.9782 -0.997,1.4899 -0.3118,-0.017 -0.6094,0.1754 -0.7115,0.4867 -0.1221,0.3716 0.0802,0.7724 0.4522,0.8946 0.3713,0.1222 0.7721,-0.0805 0.8943,-0.4518 0.0972,-0.2957 -0.0111,-0.6101 -0.2463,-0.7875 0.2542,-0.4725 0.557,-0.9414 0.9198,-1.3674 0.2767,-0.3246 0.5899,-0.6265 0.9456,-0.8879 0.1259,0.2022 0.2826,0.3861 0.4663,0.5429 -0.233,0.4589 -0.3934,0.9374 -0.5006,1.4196 -0.1224,0.5539 -0.1732,1.1131 -0.1805,1.6543 -0.163,0.0813 -0.2951,0.2259 -0.3566,0.4127 -0.1222,0.3716 0.0805,0.7724 0.4521,0.8946 0.3716,0.1222 0.7724,-0.0802 0.8946,-0.4518 0.1222,-0.3719 -0.0802,-0.7728 -0.4518,-0.8949 -0.0426,-0.0139 -0.0856,-0.0238 -0.1287,-0.0292 0.0105,-0.4907 0.0598,-0.9964 0.1706,-1.4964 0.0955,-0.4309 0.237,-0.8581 0.4391,-1.2685 0.1395,0.0813 0.2894,0.1491 0.449,0.2018 0.1369,0.0448 0.2747,0.0765 0.4122,0.0955 0.034,0.438 0.1196,0.862 0.2409,1.2682 0.1777,0.5939 0.4329,1.152 0.7192,1.664 -0.0321,0.0496 -0.0584,0.104 -0.078,0.163 -0.1222,0.3716 0.0805,0.7721 0.4524,0.8946 0.3714,0.1221 0.7722,-0.0805 0.8944,-0.4519 0.1221,-0.3719 -0.0803,-0.7727 -0.4519,-0.8949 -0.1695,-0.0558 -0.345,-0.0439 -0.4975,0.0207 -0.2568,-0.4683 -0.4847,-0.9762 -0.6454,-1.5131 -0.1092,-0.3643 -0.1865,-0.7421 -0.2211,-1.131 0.2817,-0.0117 0.5567,-0.0743 0.8115,-0.182 0.2492,0.4396 0.5534,0.8325 0.889,1.184 0.3733,0.3909 0.7857,0.7297 1.2067,1.0253 -0.0763,0.3501 0.1233,0.7087 0.4714,0.8232 0.3716,0.1219 0.7724,-0.0805 0.8946,-0.4521 0.1222,-0.3717 -0.0802,-0.7725 -0.4518,-0.8947 -0.2586,-0.085 -0.5304,-0.0127 -0.7135,0.1636 -0.3903,-0.2764 -0.7699,-0.5904 -1.1115,-0.9479 -0.3107,-0.3248 -0.5913,-0.6877 -0.8223,-1.0933 0.3144,-0.2033 0.5814,-0.483 0.7704,-0.8232 0.491,0.2582 1.0052,0.4323 1.5231,0.5437 0.5122,0.1097 1.0284,0.159 1.5293,0.1692 0.0782,0.178 0.2287,0.3234 0.4283,0.3889 0.3713,0.1222 0.7722,-0.0802 0.8943,-0.4518 0.1222,-0.3719 -0.0802,-0.7725 -0.4518,-0.8946 -0.3719,-0.1225 -0.7724,0.0802 -0.8949,0.4521 -0.0102,0.0312 -0.0181,0.0626 -0.0238,0.0941 -0.4592,-0.0119 -0.9301,-0.0587 -1.3955,-0.1587 -0.4915,-0.1061 -0.9788,-0.2713 -1.4417,-0.5179 l 0.011,-0.0323 c 0.1205,-0.3668 0.1449,-0.7419 0.0876,-1.0982 0.4723,-0.087 0.9213,-0.2333 1.3451,-0.4204 0.4405,-0.1941 0.8538,-0.4322 1.237,-0.6913 0.0533,0.036 0.112,0.0652 0.1758,0.0861 0.3716,0.1222 0.7724,-0.0805 0.8943,-0.4518 0.1225,-0.3719 -0.0802,-0.7727 -0.4516,-0.8949 -0.3719,-0.1222 -0.7727,0.0802 -0.8949,0.4521 -0.0547,0.1661 -0.0445,0.3385 0.017,0.489 -0.356,0.239 -0.7381,0.4575 -1.1432,0.6361 -0.4033,0.178 -0.8308,0.3161 -1.2801,0.396 -0.1054,-0.3022 -0.2724,-0.5814 -0.491,-0.8181 0.2708,-0.3109 0.5205,-0.6296 0.7475,-0.9558 0.3218,-0.4629 0.5984,-0.942 0.8263,-1.4369 0.2954,-0.003 0.5701,-0.1911 0.6673,-0.4873 0.1222,-0.3719 -0.0802,-0.7727 -0.4518,-0.8949 -0.3719,-0.1221 -0.7725,0.0802 -0.8949,0.4522 -0.1018,0.3098 0.0224,0.6403 0.2823,0.8124 -0.2126,0.4535 -0.4688,0.8937 -0.7659,1.3209 -0.2163,0.311 -0.455,0.6157 -0.7146,0.9136 -0.2004,-0.1519 -0.4292,-0.2738 -0.6815,-0.3566 z",fill:"#f07c00",fillRule:"evenodd"})]}),F("g",{children:[y("path",{d:"m 281.3145,370.9777 c 1.6906,-9.506 -3.8571,-12.8574 -9.0221,-12.5705 -5.9902,0.3328 -11.7703,5.5673 -9.0374,14.1766 -9.0119,-5.813 -13.7376,0.5729 -14.4593,5.9588 -0.6814,5.0867 3.2808,11.1319 10.4023,11.3898 -5.6667,6.382 -3.8758,12.7239 0.5431,15.2263 4.7957,2.7156 11.9815,1.2303 15.3051,-6.2512 2.4911,7.2334 10.2478,6.5441 14.3119,5.1279 4.2843,-3.6185 9.2588,-9.9933 -0.3274,-16.8217 8.4503,-0.1584 10.2501,-7.8845 8.2842,-13.644 -2.393,-4.6749 -7.12,-7.274 -16.0004,-2.592 z",fill:"#ffcb00",fillRule:"evenodd"}),y("path",{d:"m 276.3689,379.2019 c -0.1571,-0.0955 -0.3172,-0.1814 -0.4799,-0.2582 0.4348,-1.2484 0.6412,-2.5223 0.6891,-3.7795 0.0399,-1.046 -0.0315,-2.0826 -0.1715,-3.0827 0.2157,-0.1261 0.4045,-0.3069 0.5434,-0.536 0.4476,-0.7367 0.2129,-1.6974 -0.5236,-2.1444 -0.7367,-0.4476 -1.6974,-0.2129 -2.145,0.5241 -0.447,0.7362 -0.2123,1.6968 0.5247,2.1444 0.226,0.1372 0.4743,0.2098 0.7212,0.224 0.1253,0.9224 0.1865,1.8754 0.1499,2.8366 -0.0445,1.1656 -0.2355,2.3462 -0.6358,3.5016 -0.8005,-0.2165 -1.6313,-0.2318 -2.4213,-0.062 -0.2515,-1.0449 -0.635,-2.0282 -1.1064,-2.9478 -0.5111,-0.9966 -1.1248,-1.9188 -1.7836,-2.7655 0.3921,-0.7265 0.1491,-1.6415 -0.5638,-2.0746 -0.737,-0.4473 -1.6976,-0.2126 -2.1449,0.5244 -0.4471,0.7361 -0.2124,1.6968 0.5246,2.1441 0.4853,0.2948 1.0673,0.2934 1.5364,0.0473 0.6021,0.7824 1.1605,1.6294 1.6265,2.5376 0.4488,0.8756 0.8127,1.8096 1.0457,2.8012 -0.4807,0.1964 -0.9348,0.466 -1.3419,0.8039 -0.7639,-0.7486 -1.6086,-1.3754 -2.493,-1.9043 -1.2008,-0.7169 -2.4767,-1.2515 -3.7285,-1.6591 -0.0949,-0.3881 -0.3376,-0.7404 -0.7063,-0.9644 -0.7368,-0.4476 -1.6974,-0.2126 -2.1447,0.5242 -0.4473,0.7364 -0.2124,1.6971 0.5244,2.1444 0.7364,0.447 1.6971,0.2123 2.1441,-0.5242 0.049,-0.0807 0.0904,-0.1647 0.123,-0.2508 1.124,0.3798 2.2598,0.866 3.3242,1.5018 0.8221,0.4909 1.6067,1.074 2.3162,1.7677 -0.1709,0.2023 -0.3274,0.4198 -0.4689,0.6531 -0.1947,0.3206 -0.3495,0.6545 -0.4677,0.9955 -1.1661,-0.0904 -2.3099,-0.007 -3.4103,0.1964 l -0.001,0.002 c -1.2248,0.2265 -2.3955,0.5993 -3.4889,1.0446 -0.0892,-0.0916 -0.1919,-0.1735 -0.3067,-0.2429 -0.737,-0.4476 -1.6973,-0.2129 -2.1449,0.5241 -0.4471,0.7361 -0.2124,1.6968 0.5247,2.1444 0.7361,0.447 1.6968,0.2123 2.1438,-0.5241 0.2078,-0.3419 0.2684,-0.7316 0.2001,-1.0962 1.0233,-0.4116 2.1107,-0.756 3.2369,-0.9643 l -3e-4,0.001 c 0.9802,-0.1811 1.995,-0.2611 3.0266,-0.1956 -0.0802,0.5196 -0.0785,1.0448 0,1.5565 -1.014,0.4204 -1.9423,0.9694 -2.7913,1.5979 -1.0871,0.805 -2.0432,1.7376 -2.8809,2.7 -0.6607,-0.1919 -1.3946,0.0728 -1.7691,0.6897 -0.447,0.7364 -0.2123,1.6971 0.5247,2.1444 0.7362,0.447 1.6969,0.2123 2.1439,-0.5242 0.3557,-0.5856 0.28,-1.3138 -0.1364,-1.8116 0.7804,-0.8872 1.6634,-1.7422 2.6541,-2.4755 0.7554,-0.559 1.5778,-1.0502 2.4713,-1.434 0.1689,0.4963 0.4135,0.9689 0.7299,1.3972 -0.7282,0.8682 -1.3113,1.815 -1.7807,2.7958 -0.5389,1.1273 -0.9264,2.302 -1.2116,3.4591 -0.3903,0.0933 -0.7455,0.3376 -0.9703,0.7081 -0.4473,0.7364 -0.2123,1.6971 0.5244,2.1444 0.7365,0.447 1.6971,0.2123 2.1442,-0.5238 0.4473,-0.737 0.2126,-1.6977 -0.5236,-2.1447 -0.0845,-0.0513 -0.1721,-0.0939 -0.2616,-0.127 0.2667,-1.0477 0.6244,-2.1076 1.1111,-3.1252 0.4193,-0.8768 0.9358,-1.7232 1.5738,-2.5033 0.2586,0.2444 0.5466,0.4646 0.8629,0.6568 0.2713,0.1647 0.5508,0.301 0.8368,0.4105 -0.1451,0.9561 -0.1732,1.9085 -0.1148,2.8403 0.085,1.3629 0.3546,2.6875 0.714,3.9279 -0.0932,0.0907 -0.1774,0.1945 -0.2483,0.311 -0.447,0.7364 -0.212,1.6968 0.5247,2.1444 0.7365,0.447 1.6968,0.2123 2.1441,-0.5241 0.4474,-0.7367 0.2126,-1.6974 -0.5238,-2.1444 -0.3359,-0.2041 -0.7183,-0.2662 -1.0777,-0.2036 -0.3178,-1.1324 -0.5536,-2.3354 -0.631,-3.5674 -0.0527,-0.8356 -0.0309,-1.6852 0.0887,-2.5364 0.6106,0.1151 1.2311,0.1174 1.8318,0.0133 0.3154,1.0675 0.7724,2.0619 1.3175,2.9832 0.6063,1.0242 1.3224,1.9565 2.0784,2.8003 -0.3379,0.7132 -0.0888,1.5815 0.6012,2.0005 0.7364,0.447 1.6971,0.2123 2.1441,-0.5239 0.4473,-0.737 0.2126,-1.6977 -0.5238,-2.1447 -0.512,-0.3109 -1.1311,-0.2914 -1.6121,-0.005 -0.6993,-0.7869 -1.3575,-1.6495 -1.9125,-2.5866 -0.5046,-0.8518 -0.9261,-1.7703 -1.2195,-2.755 0.7756,-0.2798 1.4879,-0.7467 2.0631,-1.3825 0.9243,0.7983 1.9411,1.4278 2.9965,1.9245 1.0442,0.4909 2.1271,0.8538 3.1969,1.1248 0.0788,0.4206 0.3296,0.8081 0.7245,1.0479 0.7362,0.447 1.6968,0.2123 2.1441,-0.5241 0.4473,-0.7367 0.2126,-1.6974 -0.5238,-2.1444 -0.7367,-0.4476 -1.6974,-0.2126 -2.145,0.5241 -0.0374,0.0618 -0.0706,0.1256 -0.0983,0.1902 -0.9788,-0.254 -1.9656,-0.5887 -2.9146,-1.0355 -1.0018,-0.4722 -1.9647,-1.0692 -2.835,-1.8289 l 0.0394,-0.0638 c 0.4414,-0.7268 0.6809,-1.5191 0.7351,-2.3125 1.0562,0.0488 2.0928,-0.0414 3.0948,-0.2316 1.0421,-0.1975 2.0469,-0.5023 2.9985,-0.8671 0.0961,0.1032 0.2078,0.1953 0.3339,0.2719 0.7362,0.447 1.6969,0.2123 2.1442,-0.5239 0.4473,-0.737 0.2126,-1.6977 -0.5239,-2.1447 -0.7367,-0.4473 -1.6974,-0.2126 -2.1449,0.5241 -0.1999,0.3297 -0.264,0.7045 -0.2064,1.0577 -0.8836,0.3353 -1.8122,0.6139 -2.7695,0.7954 -0.9541,0.1808 -1.94,0.2644 -2.944,0.2123 -0.0757,-0.701 -0.2948,-1.3831 -0.6458,-1.9996 0.7359,-0.5326 1.4304,-1.0916 2.0798,-1.6784 0.9207,-0.8328 1.7527,-1.7229 2.4883,-2.6716 0.6352,0.1417 1.3178,-0.1259 1.6741,-0.7129 0.4476,-0.7371 0.2129,-1.6977 -0.5235,-2.1447 -0.7368,-0.4473 -1.6974,-0.2126 -2.145,0.5241 -0.3731,0.6145 -0.2713,1.3853 0.201,1.8836 -0.6821,0.8671 -1.4514,1.6838 -2.3012,2.4523 -0.6188,0.5595 -1.2824,1.0944 -1.9877,1.6047 -0.3543,-0.4261 -0.7843,-0.8011 -1.2846,-1.1047 z",fill:"#fab000",fillRule:"evenodd"}),y("path",{d:"m 274.8711,379.7717 c -0.1381,-0.0454 -0.277,-0.0828 -0.4159,-0.1129 0.1117,-1.0389 0.0428,-2.0568 -0.1451,-3.0333 -0.1559,-0.8127 -0.3963,-1.5979 -0.6829,-2.3429 0.1437,-0.1357 0.2568,-0.3086 0.3229,-0.5099 0.2129,-0.6474 -0.1398,-1.345 -0.7866,-1.5576 -0.6475,-0.2129 -1.3451,0.1394 -1.558,0.7869 -0.2126,0.6468 0.1401,1.3447 0.7872,1.5573 0.1987,0.0655 0.4028,0.0768 0.5956,0.0437 0.2611,0.6879 0.4788,1.4108 0.6222,2.1571 0.1743,0.9057 0.2381,1.8488 0.1363,2.81 -0.6551,-0.0238 -1.2974,0.1131 -1.8754,0.385 -0.3804,-0.7594 -0.8515,-1.4483 -1.3787,-2.0719 -0.5718,-0.6761 -1.2093,-1.2764 -1.8678,-1.8108 0.1721,-0.6293 -0.1783,-1.2906 -0.8047,-1.4964 -0.6475,-0.2129 -1.3454,0.1395 -1.558,0.7869 -0.2126,0.6469 0.1398,1.3445 0.7872,1.5574 0.4263,0.14 0.8742,0.0348 1.1917,-0.2381 0.6032,0.4946 1.1846,1.0471 1.7059,1.6631 0.5017,0.5938 0.949,1.2481 1.3056,1.9698 -0.3347,0.2372 -0.6363,0.5261 -0.8895,0.8591 -0.722,-0.4399 -1.4845,-0.7716 -2.26,-1.0207 -1.0528,-0.3376 -2.1306,-0.521 -3.1675,-0.6112 -0.1423,-0.282 -0.392,-0.5099 -0.716,-0.6165 -0.6474,-0.2126 -1.345,0.1397 -1.5579,0.7872 -0.2126,0.6468 0.1397,1.3444 0.7872,1.5573 0.6468,0.2126 1.3444,-0.1397 1.5573,-0.7866 0.0232,-0.0711 0.04,-0.1431 0.0499,-0.2151 0.9332,0.0912 1.8947,0.2627 2.8278,0.5618 0.7209,0.2313 1.4293,0.54 2.0997,0.9473 -0.0956,0.1863 -0.1772,0.3819 -0.2447,0.5865 -0.0924,0.2818 -0.1519,0.5667 -0.182,0.8504 -0.9141,0.1389 -1.7798,0.4071 -2.5908,0.7605 l -6e-4,0.002 c -0.9028,0.3931 -1.7373,0.8895 -2.4999,1.428 -0.085,-0.0547 -0.1785,-0.0995 -0.2795,-0.1326 -0.6474,-0.2126 -1.345,0.1397 -1.5579,0.7872 -0.2126,0.6468 0.1401,1.3444 0.7872,1.5573 0.6469,0.2126 1.3448,-0.1397 1.5574,-0.7866 0.0986,-0.3005 0.0759,-0.6114 -0.042,-0.8799 0.7143,-0.5 1.4902,-0.9595 2.3199,-1.3212 l 3e-4,0.001 c 0.7222,-0.3149 1.4893,-0.5578 2.2952,-0.6916 0.0312,0.4141 0.1264,0.8183 0.2783,1.1982 -0.7055,0.5051 -1.3223,1.0939 -1.8637,1.7294 -0.6931,0.8141 -1.2626,1.7033 -1.7354,2.594 -0.5431,-0.0298 -1.061,0.3053 -1.239,0.8472 -0.2129,0.6469 0.1397,1.3445 0.7871,1.5574 0.6469,0.2126 1.3445,-0.1397 1.5571,-0.7866 0.1692,-0.5148 -0.0193,-1.0619 -0.4289,-1.3708 0.4425,-0.8227 0.9695,-1.6388 1.6013,-2.3806 0.4816,-0.5652 1.0273,-1.0905 1.6464,-1.5457 0.2188,0.352 0.4918,0.6721 0.8118,0.9453 -0.4056,0.7988 -0.6854,1.6319 -0.8713,2.471 -0.2135,0.9646 -0.3019,1.938 -0.3147,2.88 -0.2837,0.1417 -0.5136,0.3932 -0.6205,0.7189 -0.2129,0.6468 0.1398,1.3444 0.7872,1.5573 0.6469,0.2126 1.3445,-0.1397 1.5571,-0.7866 0.2128,-0.6474 -0.1398,-1.3453 -0.7867,-1.5579 -0.0739,-0.0244 -0.1488,-0.0414 -0.2239,-0.051 0.0182,-0.8544 0.104,-1.7346 0.2971,-2.6048 0.1661,-0.7503 0.4124,-1.4941 0.7642,-2.2087 0.2429,0.1417 0.504,0.2599 0.7818,0.3512 0.2384,0.0785 0.4779,0.1335 0.7177,0.1666 0.0593,0.7623 0.2078,1.5007 0.4196,2.2077 0.3089,1.034 0.7531,2.0058 1.2517,2.8967 -0.0558,0.0867 -0.102,0.1814 -0.1357,0.2837 -0.2126,0.6469 0.14,1.3448 0.7874,1.5574 0.6466,0.2126 1.3445,-0.1398 1.5571,-0.7866 0.2129,-0.6475 -0.1398,-1.3451 -0.7866,-1.5577 -0.2951,-0.0972 -0.6007,-0.0765 -0.8663,0.036 -0.447,-0.8152 -0.8436,-1.6993 -1.1234,-2.6342 -0.1899,-0.6338 -0.3248,-1.292 -0.3849,-1.9689 0.4907,-0.0205 0.9689,-0.1296 1.4125,-0.3172 0.434,0.7656 0.9635,1.4499 1.548,2.0616 0.65,0.6803 1.368,1.2702 2.1008,1.785 -0.1327,0.6094 0.2143,1.2336 0.8206,1.4326 0.6469,0.2129 1.3445,-0.1397 1.5571,-0.7866 0.2128,-0.6474 -0.1398,-1.3451 -0.7867,-1.5576 -0.4498,-0.148 -0.9229,-0.0222 -1.2421,0.2845 -0.6789,-0.4807 -1.3399,-1.0275 -1.9349,-1.6497 -0.5406,-0.5658 -1.0293,-1.1977 -1.4312,-1.9035 0.547,-0.354 1.0122,-0.8407 1.3413,-1.4332 0.8544,0.4493 1.7498,0.7526 2.6513,0.9465 0.8917,0.1911 1.7906,0.277 2.6625,0.2945 0.1361,0.3099 0.3983,0.5633 0.7453,0.6775 0.6468,0.2126 1.3444,-0.14 1.557,-0.7869 0.2129,-0.6471 -0.1394,-1.345 -0.7863,-1.5576 -0.6474,-0.2129 -1.345,0.1397 -1.5579,0.7872 -0.0179,0.0541 -0.032,0.1091 -0.0417,0.1638 -0.7994,-0.0207 -1.6188,-0.102 -2.4296,-0.2764 -0.8557,-0.1845 -1.7036,-0.4719 -2.5098,-0.9014 l 0.0193,-0.0564 c 0.2098,-0.6384 0.2526,-1.2912 0.1525,-1.9117 0.8221,-0.1514 1.6042,-0.4059 2.3414,-0.7316 0.7674,-0.3382 1.4865,-0.7526 2.1541,-1.2036 0.0924,0.0624 0.1947,0.1134 0.3056,0.1497 0.6468,0.2126 1.3447,-0.1398 1.5573,-0.7866 0.2126,-0.6475 -0.1397,-1.3451 -0.7866,-1.5577 -0.6474,-0.2129 -1.345,0.1395 -1.5579,0.7869 -0.0953,0.2894 -0.0774,0.5893 0.03,0.8513 -0.6202,0.4161 -1.2855,0.7965 -1.9905,1.1072 -0.7021,0.3101 -1.4465,0.5505 -2.2286,0.6899 -0.1836,-0.5264 -0.4742,-1.0122 -0.8546,-1.4244 0.4714,-0.5414 0.9062,-1.0961 1.3014,-1.6639 0.5601,-0.8059 1.0414,-1.6399 1.4383,-2.5019 0.5145,-0.005 0.9924,-0.3325 1.1619,-0.8484 0.2126,-0.6471 -0.1397,-1.345 -0.7866,-1.5576 -0.6474,-0.2129 -1.345,0.1397 -1.5579,0.7872 -0.1775,0.5397 0.0388,1.1148 0.4915,1.4142 -0.3702,0.7897 -0.8167,1.5559 -1.3337,2.2994 -0.3767,0.5414 -0.7917,1.0718 -1.2438,1.5908 -0.349,-0.2644 -0.747,-0.4765 -1.1863,-0.621 z",fill:"#f07c00",fillRule:"evenodd"})]}),F("g",{children:[y("path",{d:"m 283.8214,416.3683 c 0.978,-5.5 -2.2317,-7.4389 -5.22,-7.2728 -3.4659,0.1922 -6.8099,3.221 -5.2287,8.202 -5.2141,-3.3633 -7.9484,0.3314 -8.3659,3.4478 -0.3943,2.943 1.8983,6.4406 6.0185,6.5897 -3.2786,3.6924 -2.2422,7.3619 0.3144,8.8095 2.7745,1.5713 6.9321,0.7121 8.8551,-3.6167 1.4411,4.1851 5.9292,3.7862 8.2803,2.967 2.4789,-2.0936 5.3569,-5.7821 -0.1894,-9.7327 4.8892,-0.0916 5.9307,-4.5618 4.7931,-7.8939 -1.3844,-2.7049 -4.1193,-4.2086 -9.2574,-1.4999 z",fill:"#ffcb00",fillRule:"evenodd"}),y("path",{d:"m 280.9602,421.1266 c -0.091,-0.0553 -0.1837,-0.1049 -0.2778,-0.1494 0.2517,-0.7223 0.371,-1.4593 0.3985,-2.1866 0.0233,-0.6052 -0.0181,-1.2051 -0.0992,-1.7836 0.125,-0.0731 0.2341,-0.1777 0.3146,-0.3101 0.2588,-0.4263 0.1231,-0.9822 -0.303,-1.2407 -0.4263,-0.2591 -0.9822,-0.1231 -1.241,0.3033 -0.2585,0.4257 -0.1227,0.9816 0.3036,1.2404 0.1307,0.0797 0.2744,0.1216 0.4173,0.1295 0.0722,0.5338 0.1077,1.0852 0.0867,1.6413 -0.0258,0.6744 -0.1363,1.3575 -0.3679,2.0259 -0.4632,-0.1253 -0.944,-0.134 -1.4009,-0.0357 -0.1454,-0.6046 -0.3674,-1.1735 -0.6401,-1.7056 -0.2956,-0.5766 -0.6508,-1.11 -1.0321,-1.6002 0.2271,-0.42 0.0865,-0.9496 -0.3262,-1.2001 -0.4264,-0.2588 -0.982,-0.1231 -1.241,0.3033 -0.2586,0.426 -0.1228,0.9819 0.3035,1.2407 0.281,0.1704 0.6177,0.1695 0.889,0.0275 0.3484,0.4524 0.6715,0.9425 0.9411,1.4681 0.2596,0.5065 0.4703,1.0471 0.6052,1.6205 -0.2781,0.1137 -0.5411,0.2696 -0.7767,0.4652 -0.4419,-0.4332 -0.9306,-0.7957 -1.4423,-1.1018 -0.6947,-0.4148 -1.4329,-0.724 -2.1571,-0.9599 -0.055,-0.2245 -0.1953,-0.4286 -0.4088,-0.5581 -0.4263,-0.2588 -0.9819,-0.123 -1.241,0.3033 -0.2585,0.4261 -0.1227,0.9819 0.3036,1.2407 0.426,0.2588 0.9819,0.1231 1.2404,-0.303 0.0284,-0.0468 0.0525,-0.0955 0.0712,-0.1451 0.6505,0.2197 1.3076,0.5009 1.9236,0.8688 0.4753,0.284 0.9295,0.6214 1.3399,1.0227 -0.0989,0.1171 -0.1893,0.243 -0.2713,0.3779 -0.1125,0.1854 -0.2021,0.3787 -0.2707,0.576 -0.6746,-0.0524 -1.3362,-0.004 -1.9729,0.1134 l -8e-4,0.001 c -0.7087,0.131 -1.3859,0.3467 -2.0186,0.6044 -0.0516,-0.053 -0.1111,-0.1004 -0.1774,-0.1406 -0.4264,-0.2588 -0.9822,-0.1231 -1.241,0.3033 -0.2586,0.426 -0.1228,0.9819 0.3035,1.2407 0.4261,0.2585 0.9817,0.1227 1.2405,-0.3033 0.1202,-0.1979 0.1553,-0.4232 0.1156,-0.6341 0.5922,-0.2381 1.2212,-0.4374 1.8729,-0.5579 l -3e-4,9e-4 c 0.5672,-0.1049 1.1543,-0.1511 1.7512,-0.1134 -0.0464,0.3007 -0.0453,0.6046 0,0.9006 -0.5867,0.2432 -1.1239,0.5609 -1.6149,0.9243 -0.629,0.466 -1.1823,1.0055 -1.6667,1.5625 -0.3824,-0.1111 -0.807,0.0422 -1.0236,0.3988 -0.2588,0.4261 -0.123,0.9819 0.3033,1.2407 0.426,0.2588 0.9819,0.1231 1.2404,-0.303 0.2058,-0.339 0.1622,-0.7602 -0.0788,-1.0482 0.4516,-0.5134 0.9624,-1.008 1.5356,-1.4324 0.4371,-0.3234 0.913,-0.6077 1.4298,-0.8297 0.0978,0.2872 0.2392,0.5607 0.4223,0.8085 -0.4215,0.5023 -0.7588,1.0502 -1.0304,1.6174 -0.3115,0.6525 -0.5357,1.332 -0.7007,2.0016 -0.2259,0.0538 -0.4314,0.1953 -0.5615,0.4096 -0.2588,0.426 -0.1228,0.9819 0.3035,1.2407 0.4261,0.2585 0.9817,0.1227 1.2405,-0.3033 0.2588,-0.4264 0.123,-0.9819 -0.303,-1.2407 -0.0488,-0.0298 -0.0995,-0.0542 -0.1514,-0.0735 0.1542,-0.6063 0.3614,-1.2194 0.6429,-1.8082 0.2426,-0.5074 0.5414,-0.9969 0.9105,-1.4482 0.1496,0.1412 0.3163,0.2687 0.4994,0.3798 0.1568,0.0953 0.3187,0.1744 0.4842,0.2376 -0.0842,0.5533 -0.1003,1.1044 -0.0663,1.6435 0.049,0.7886 0.2049,1.5548 0.413,2.2725 -0.0542,0.0525 -0.1026,0.1126 -0.1437,0.18 -0.2586,0.4258 -0.1228,0.9817 0.3036,1.2405 0.426,0.2588 0.9816,0.123 1.2404,-0.303 0.2588,-0.4264 0.123,-0.9822 -0.303,-1.241 -0.1945,-0.118 -0.4156,-0.154 -0.6237,-0.1177 -0.1839,-0.6551 -0.3203,-1.3513 -0.3648,-2.0639 -0.0306,-0.4836 -0.0181,-0.9751 0.0511,-1.4675 0.3534,0.0666 0.7123,0.0678 1.0598,0.008 0.1826,0.6176 0.4471,1.1931 0.7623,1.726 0.3509,0.5924 0.7653,1.1319 1.2024,1.6203 -0.1953,0.4124 -0.051,0.915 0.3481,1.1574 0.4261,0.2585 0.9817,0.1227 1.2405,-0.3034 0.2588,-0.4263 0.123,-0.9822 -0.3031,-1.2407 -0.2962,-0.18 -0.6545,-0.1686 -0.9329,-0.002 -0.4045,-0.4553 -0.7851,-0.9545 -1.1063,-1.4967 -0.292,-0.4927 -0.5358,-1.0242 -0.7056,-1.5939 0.4488,-0.1619 0.8609,-0.432 1.1934,-0.8 0.5349,0.4618 1.1234,0.8263 1.734,1.1135 0.604,0.284 1.2308,0.494 1.8496,0.6508 0.0456,0.2435 0.1908,0.4677 0.4192,0.6063 0.4261,0.2588 0.9817,0.1228 1.2405,-0.3033 0.2588,-0.4263 0.123,-0.9819 -0.303,-1.2407 -0.4264,-0.2588 -0.9823,-0.123 -1.2411,0.3033 -0.0218,0.0357 -0.0408,0.0729 -0.0569,0.11 -0.5664,-0.1468 -1.1373,-0.3404 -1.6864,-0.599 -0.5796,-0.2732 -1.1367,-0.6185 -1.6401,-1.0581 l 0.0227,-0.0369 c 0.2554,-0.4207 0.394,-0.879 0.4255,-1.3379 0.6111,0.028 1.2106,-0.0241 1.7903,-0.1341 0.603,-0.1143 1.1843,-0.2906 1.7351,-0.5018 0.0556,0.0599 0.1202,0.1131 0.1931,0.1574 0.426,0.2588 0.9819,0.1227 1.2404,-0.3031 0.2588,-0.4263 0.123,-0.9822 -0.303,-1.241 -0.4264,-0.2588 -0.9819,-0.123 -1.241,0.3033 -0.1157,0.1908 -0.1525,0.4077 -0.1194,0.6118 -0.5111,0.1941 -1.0485,0.3554 -1.6024,0.4603 -0.5519,0.1046 -1.1225,0.1531 -1.7033,0.123 -0.0437,-0.4059 -0.1707,-0.8002 -0.3736,-1.1571 0.4257,-0.3081 0.8277,-0.6315 1.2033,-0.9708 0.5329,-0.4819 1.0139,-0.997 1.4397,-1.5458 0.3673,0.082 0.7625,-0.0731 0.9686,-0.4127 0.2588,-0.4263 0.123,-0.9822 -0.303,-1.2407 -0.4264,-0.2588 -0.982,-0.123 -1.2411,0.3033 -0.2157,0.3555 -0.1567,0.8013 0.1166,1.0896 -0.3946,0.5018 -0.84,0.9743 -1.3315,1.4188 -0.3583,0.3237 -0.7421,0.6332 -1.1503,0.9286 -0.2049,-0.2466 -0.4535,-0.4635 -0.7429,-0.6392 z",fill:"#fab000",fillRule:"evenodd"}),y("path",{d:"m 280.0933,421.4563 c -0.0796,-0.0261 -0.1601,-0.048 -0.2404,-0.0652 0.0647,-0.6013 0.0247,-1.19 -0.0839,-1.7553 -0.0904,-0.4699 -0.2293,-0.9243 -0.3951,-1.3555 0.083,-0.0785 0.1482,-0.1786 0.1865,-0.2948 0.1233,-0.3747 -0.0808,-0.7784 -0.455,-0.9014 -0.3744,-0.123 -0.7781,0.0808 -0.9014,0.4555 -0.123,0.3742 0.0811,0.7778 0.4556,0.9009 0.1148,0.038 0.233,0.0445 0.3444,0.0252 0.1513,0.398 0.2769,0.8164 0.3603,1.2481 0.1006,0.5241 0.1377,1.0698 0.0788,1.6259 -0.379,-0.0138 -0.7509,0.0652 -1.0851,0.2229 -0.22,-0.4397 -0.4927,-0.838 -0.798,-1.1991 -0.3305,-0.3909 -0.6993,-0.7384 -1.0806,-1.0474 0.0998,-0.3643 -0.1031,-0.7469 -0.4654,-0.866 -0.3748,-0.123 -0.7784,0.0808 -0.9014,0.4553 -0.1231,0.3744 0.0808,0.7781 0.4555,0.9011 0.2466,0.0811 0.5057,0.0204 0.6894,-0.1378 0.3489,0.2863 0.6854,0.6058 0.987,0.9624 0.2903,0.3435 0.5491,0.722 0.7554,1.1395 -0.1939,0.1375 -0.3682,0.3045 -0.5147,0.4972 -0.4179,-0.2545 -0.8589,-0.4464 -1.3074,-0.5907 -0.6091,-0.1953 -1.2328,-0.3014 -1.8326,-0.3535 -0.0825,-0.163 -0.227,-0.2951 -0.4144,-0.3566 -0.3747,-0.1233 -0.7784,0.0808 -0.9014,0.4552 -0.123,0.3742 0.0808,0.7781 0.4555,0.9012 0.3742,0.123 0.7778,-0.0811 0.9009,-0.4553 0.0136,-0.0411 0.0232,-0.0827 0.0289,-0.1244 0.54,0.053 1.0961,0.1519 1.6361,0.3251 0.417,0.1338 0.8269,0.3124 1.2147,0.5482 -0.055,0.1078 -0.1024,0.2209 -0.1412,0.3393 -0.0536,0.163 -0.0881,0.3277 -0.1054,0.4919 -0.529,0.0805 -1.0299,0.2355 -1.499,0.4402 l -3e-4,8e-4 c -0.5224,0.2277 -1.0054,0.5148 -1.4465,0.8263 -0.0493,-0.0317 -0.1035,-0.0575 -0.1616,-0.0765 -0.3747,-0.1233 -0.7784,0.0808 -0.9014,0.4552 -0.123,0.3742 0.0808,0.7779 0.4555,0.9012 0.3742,0.123 0.7779,-0.0811 0.9009,-0.4553 0.0572,-0.1737 0.0439,-0.3537 -0.0244,-0.5091 0.4133,-0.2891 0.8623,-0.555 1.3425,-0.7642 v 6e-4 c 0.4178,-0.182 0.8617,-0.3226 1.328,-0.4 0.0182,0.2395 0.0732,0.4734 0.161,0.6934 -0.4082,0.2919 -0.765,0.6326 -1.0783,1.0003 -0.4011,0.4711 -0.7304,0.9856 -1.004,1.5009 -0.3144,-0.0172 -0.614,0.1766 -0.7169,0.4902 -0.123,0.3741 0.0808,0.7778 0.4553,0.9011 0.3744,0.123 0.7781,-0.0811 0.9011,-0.4553 0.0978,-0.2976 -0.0111,-0.6142 -0.2483,-0.7931 0.256,-0.4759 0.561,-0.9479 0.9266,-1.3771 0.2787,-0.3271 0.5942,-0.6309 0.9525,-0.8946 0.1267,0.2038 0.2846,0.3889 0.4697,0.5471 -0.2347,0.4621 -0.3966,0.9442 -0.5043,1.4298 -0.1233,0.5579 -0.1746,1.1211 -0.182,1.6662 -0.1641,0.0819 -0.2971,0.2274 -0.3589,0.4159 -0.123,0.3741 0.0808,0.7778 0.4553,0.9011 0.3744,0.123 0.7781,-0.0811 0.9011,-0.4553 0.123,-0.3744 -0.0808,-0.7783 -0.4552,-0.9014 -0.0428,-0.0139 -0.0862,-0.0238 -0.1296,-0.0295 0.0105,-0.4943 0.0604,-1.0034 0.1718,-1.5071 0.0961,-0.434 0.2387,-0.8643 0.4422,-1.2779 0.1406,0.0822 0.2917,0.1505 0.4524,0.2033 0.1378,0.0453 0.2764,0.0773 0.4153,0.0963 0.0343,0.4411 0.1202,0.8683 0.2426,1.2773 0.1789,0.5984 0.4357,1.1605 0.7243,1.6761 -0.0323,0.0502 -0.059,0.1049 -0.0785,0.1642 -0.123,0.3741 0.0811,0.7778 0.4555,0.9011 0.3742,0.123 0.7778,-0.0811 0.9009,-0.4552 0.1233,-0.3745 -0.0808,-0.7781 -0.455,-0.9012 -0.1706,-0.0561 -0.3475,-0.0442 -0.5012,0.0207 -0.2588,-0.4717 -0.4881,-0.983 -0.65,-1.5239 -0.1099,-0.3668 -0.1879,-0.7475 -0.2228,-1.1392 0.2841,-0.0119 0.5607,-0.0749 0.8173,-0.1834 0.2511,0.4427 0.5575,0.8387 0.8957,1.1925 0.3759,0.3937 0.7915,0.735 1.2152,1.0327 -0.0765,0.3526 0.1242,0.7137 0.4748,0.8291 0.3745,0.123 0.7781,-0.0808 0.9012,-0.4552 0.123,-0.3745 -0.0808,-0.7782 -0.4553,-0.9012 -0.2602,-0.0856 -0.534,-0.0127 -0.7186,0.1647 -0.3928,-0.2783 -0.7752,-0.5944 -1.1196,-0.9547 -0.3127,-0.3271 -0.5956,-0.6928 -0.828,-1.1012 0.3166,-0.2047 0.5856,-0.4865 0.7761,-0.8292 0.4943,0.26 1.0125,0.4354 1.5341,0.5477 0.5159,0.1105 1.0358,0.1601 1.5403,0.1703 0.0788,0.1792 0.2305,0.326 0.4312,0.3921 0.3742,0.123 0.7778,-0.0811 0.9008,-0.4553 0.1233,-0.3744 -0.0807,-0.7781 -0.4549,-0.9011 -0.3745,-0.1233 -0.7781,0.0808 -0.9014,0.4552 -0.0102,0.0315 -0.0185,0.0632 -0.0241,0.095 -0.4624,-0.0119 -0.9366,-0.059 -1.4054,-0.1599 -0.4953,-0.1068 -0.9859,-0.2732 -1.4522,-0.5216 l 0.011,-0.0326 c 0.1213,-0.3693 0.146,-0.7472 0.0882,-1.1063 0.4756,-0.0873 0.928,-0.2347 1.3547,-0.4232 0.4439,-0.1956 0.86,-0.4354 1.2463,-0.6962 0.0533,0.036 0.1129,0.0655 0.1769,0.0864 0.3742,0.1231 0.7779,-0.0808 0.9009,-0.4549 0.123,-0.3748 -0.0808,-0.7784 -0.455,-0.9014 -0.3747,-0.1231 -0.7784,0.0807 -0.9014,0.4555 -0.055,0.1672 -0.0448,0.341 0.0173,0.4924 -0.3589,0.2406 -0.7438,0.4609 -1.1514,0.6406 -0.4065,0.1794 -0.8371,0.3183 -1.2895,0.3991 -0.1063,-0.3044 -0.2747,-0.5856 -0.4947,-0.824 0.273,-0.3132 0.5244,-0.6344 0.7529,-0.9627 0.3243,-0.4663 0.6027,-0.949 0.8323,-1.4476 0.2976,-0.003 0.5743,-0.1925 0.6723,-0.4907 0.1231,-0.3747 -0.0807,-0.7784 -0.4552,-0.9014 -0.3745,-0.123 -0.7781,0.0808 -0.9011,0.4555 -0.1029,0.3121 0.0224,0.6449 0.2843,0.8181 -0.2143,0.4569 -0.4726,0.9003 -0.7719,1.3306 -0.2177,0.3132 -0.4581,0.6202 -0.7194,0.9204 -0.2019,-0.1531 -0.4323,-0.2758 -0.6866,-0.3594 z",fill:"#f07c00",fillRule:"evenodd"})]})]})}),!c.alreadyRead&&F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"absolute top-2 right-2 h-6 w-6",children:[y("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),y("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})]},d)}return F("div",{className:"relative my-2 h-[75vh] w-[50vw] overflow-hidden rounded-md",children:[F("svg",{className:"absolute left-0 top-0 z-[1] h-[55px] w-[55px]",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute right-0 top-0 z-[1] h-[55px] w-[55px] rotate-90",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute right-0 bottom-0 z-[1] h-[55px] w-[55px] rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute left-0 bottom-0 z-[1] h-[55px] w-[55px] -rotate-90",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),y("div",{className:"border-1 relative grid h-[75vh] w-[50vw] grid-cols-4 grid-rows-3 overflow-auto border-black bg-red-300",children:s==="success"&&a()})]})}function c$(t){const{message:e,setMessage:n}=t;return y("div",{className:"fixed top-0 left-0 z-[2] flex h-full w-full items-center justify-center bg-black/50",children:F("div",{className:"relative flex h-3/5 w-3/5 flex-col items-center justify-center overflow-auto rounded-md bg-red-400 opacity-[1]",children:[F("svg",{className:"absolute left-0 top-0 z-[1] h-[55px] w-[55px]",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute right-0 top-0 z-[1] h-[55px] w-[55px] rotate-90",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute right-0 bottom-0 z-[1] h-[55px] w-[55px] rotate-180",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),F("svg",{className:"absolute left-0 bottom-0 z-[1] h-[55px] w-[55px] -rotate-90",xmlns:"http://www.w3.org/2000/svg",viewBox:"208.949 442.304 371.339 371.338",children:[y("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",d:"M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913"}),y("polygon",{fillRule:"evenodd",clipRule:"evenodd",fill:"#facc15",points:"508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913"})]}),y("p",{className:"text-textgrey flex h-4/5 max-w-full flex-col justify-center break-words px-5 text-center font-bold sm:my-1 sm:text-xl md:my-2 md:text-2xl lg:my-5 lg:text-3xl",children:e}),y("button",{type:"button",className:"text-textgrey absolute right-5 top-5 z-[3] inline-flex items-center justify-center rounded-md bg-red-500 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:()=>n(""),children:y("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:y("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]})})}const h$=[{display:"Trang ch\u1EE7",navigateTo:"/"}];function d$(){const t=os(),{status:e,data:n}=TM(),r=eu().data,[i,s]=O.exports.useState("");if(e==="loading")return y(I5,{});{n.signedIn||t("/login");const o=`${window.location.origin}/jsi14-cringe/sendmessage/${r==null?void 0:r.uid}`;return y(Qi,{children:F("div",{className:"flex h-screen w-screen flex-col",children:[y(Id,{title:"L\u1EDDi ch\xFAc t\u1EBFt",links:h$}),F("div",{className:"flex grow flex-col items-center justify-center bg-cover bg-[url('https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/330423578_1542578269555336_1337613039926565188_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEa0fYc3fnGQcVoYAEmbmBZkJ5BE9ogt9WQnkET2iC31X6b0OVNs5JZTAIhvo7WU_FrF_nyYMx4eOSc55KWbJT8&_nc_ohc=g_5p-blN1BAAX8A1i45&_nc_ht=scontent.fhan15-1.fna&oh=03_AdS7_AzbFPDIH0oNT1jm8ub_jFj2auayl8_FfBwL85D2Cg&oe=640FDFEC')]",children:[y(l$,{inboxLink:o}),y(u$,{setMessage:s}),i!==""&&y(c$,{message:i,setMessage:s})]})]})})}}const f$=[];function p$(){const t=os(),{status:e,data:n}=eu();return e==="loading"?y(I5,{}):(n&&t("/dashboard"),F(Qi,{children:[y("div",{children:F("div",{className:"flex flex-col bg-red-300",children:[y(Id,{title:"Trang ch\u1EE7",links:f$}),F("div",{className:"text-center tracking-widest",children:[y("p",{className:"text-textyellow mt-16 text-3xl font-medium",children:"C\xC1C B\u01AF\u1EDAC \u0110\u1EC2 NH\u1EACN"}),y("p",{className:"mt-4 text-5xl font-semibold text-red-600",children:"THI\u1EC6P CH\xDAC T\u1EBET"}),y("br",{}),y("hr",{className:"m-auto h-px max-w-4xl border-0 bg-gray-200 dark:bg-black"})]}),F("div",{className:"mx-auto w-4/5",children:[y("br",{}),y("br",{}),y("p",{className:"pb-2 text-3xl",children:"1. \u0110\u0103ng K\xFD/\u0110\u0103ng Nh\u1EADp T\xE0i Kho\u1EA3n"}),y("p",{className:"text-2xl",children:"\u0110\u1EA7u ti\xEAn c\xE1c b\u1EA1n \u1EA5n v\xE0o n\xFAt \u0111\u0103ng nh\u1EADp b\xEAn tr\xEAn ph\xEDa ph\u1EA3i c\u1EE7a trang web. Sau \u0111\xF3 \u0111\u0103ng nh\u1EADp t\xE0i kho\u1EA3n, n\u1EBFu ch\u01B0a c\xF3 th\xEC \u1EA5n v\xE0o m\u1EE5c \u0111\u0103ng k\xFD."}),y("br",{}),y("img",{className:"border-1 mx-auto w-4/6 rounded-2xl border-black",src:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/331103554_1225341004748904_3915740838392289158_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lh96cs23UP8AX88NtIc&_nc_oc=AQlEuFKFKvtlYFV8UlZPzhjdFSzK_yb1oLasYM4GYYAy4f9kp6RpQRV5KAQWm0_L-ko&_nc_ht=scontent-sin6-1.xx&oh=03_AdTl6YsSUcbvidxuHxMInaa4i3lQqJeM0n_1W0zquYRvDQ&oe=64130D6C"}),y("br",{}),y("img",{className:"border-1 mx-auto w-4/6 rounded-2xl border-black",src:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/331156667_6287175928005469_417759695961086300_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3UONN7gBOZgAX_Px6VQ&tn=KHkTtSalEX58tRRD&_nc_ht=scontent-sin6-1.xx&oh=03_AdREmB49vacpL0YZVb6c_rWTL8fcNw63W-xBxjmYIo8BsA&oe=641310FA"}),y("br",{}),y("br",{}),y("p",{className:"pb-2 text-3xl",children:"2. L\u1EA5y Link T\u1EEB Trang Dashboard"}),y("p",{className:"text-2xl",children:"Sau \u0111\xF3 c\xE1c b\u1EA1n v\xE0o trang Dashboard v\xE0 \u1EA5n v\xE0o n\xFAt m\xE0u xanh \u0111\u1EC3 sao ch\xE9p link."}),y("br",{}),y("img",{className:"border-1 mx-auto w-4/6 rounded-2xl border-black",src:"https://scontent-sin6-3.xx.fbcdn.net/v/t1.15752-9/331169006_1132923977402938_7070325821761717989_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=buNBoRs4J5AAX-hDeRF&_nc_ht=scontent-sin6-3.xx&oh=03_AdQJqyDumQzd2ZtZ9xgw_ORtzO3rDpMJ9cxVcq7DF436Xg&oe=6412FEAD"}),y("br",{}),y("br",{}),y("p",{className:"pb-2 text-3xl",children:"3. Vi\u1EBFt L\u1EDDi Ch\xFAc"}),y("p",{className:"text-2xl",children:"Sau khi sao ch\xE9p link, c\xE1c b\u1EA1n d\xE1n n\xF3 sang m\u1ED9t trang kh\xE1c r\u1ED3i vi\u1EBFt l\u1EDDi b\u1EA1n mu\u1ED1n n\xF3i ng\u01B0\u1EDDi kh\xE1c v\xE0 nh\u1EA5n n\xFAt \u0111\u1EC3 g\u1EEDi."}),y("br",{}),y("img",{className:"border-1 mx-auto w-4/6 rounded-2xl border-black",src:"https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/331226441_564760775715578_4625775485136862666_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7RuVkVftaYgAX9SgJaT&_nc_oc=AQnXj42-zdTJaS_K7eW6xTnvUspx8HLUf6l9WGRQAz1VnIRri3oHAVBF1weY2HQXY9U&_nc_ht=scontent.fhan5-1.fna&oh=03_AdRHRrDRtd1Svm2y-R2HvBdxT2I4Y7adGIeZUgmfvWtmzQ&oe=64131923"}),y("br",{}),y("br",{}),y("p",{className:"pb-2 text-3xl",children:"4. \u0110\u0103ng Link L\xEAn M\u1EA1ng X\xE3 H\u1ED9i"}),y("p",{className:"text-2xl",children:"Cu\u1ED1i c\xF9ng c\xE1c b\u1EA1n ch\u1EC9 c\u1EA7n \u0111\u0103ng t\u1EA3i \u0111\u01B0\u1EDDng link l\xEAn trang m\u1EA1ng x\xE3 h\u1ED9i v\xE0 k\xEAu g\u1ECDi ng\u01B0\u1EDDi v\xE0o g\u1EEDi l\u1EDDi ch\xFAc T\u1EBFt. Nh\u01B0 v\u1EADy l\xE0 ho\xE0n th\xE0nh, ch\xFAc c\xE1c b\u1EA1n th\xE0nh c\xF4ng."}),y("br",{}),y("img",{className:"border-1 mx-auto w-4/6 rounded-2xl border-black",src:"https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/330660726_3548118775421366_3585495675821649332_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHcw4F6qHFFZH7o1KWmU7Ur2n7LJxJ5RwXafssnEnlHBUxWwF_Sxrm-u4WN9jlmU-E-3M-AF39n0AUKwWGXLer0&_nc_ohc=nFWHH5S6NfcAX-D6g3M&_nc_ht=scontent.fhan5-9.fna&oh=03_AdR0m2hcSHugoBsMgUwEaWdhaVH-Fs2DRxUTRqa9fjT2SQ&oe=6411CC9D"}),y("br",{}),y("br",{}),y("br",{})]})]})}),F("footer",{className:"border-t-1 border-black bg-white p-4 dark:bg-red-500 sm:p-6",children:[F("div",{className:"md:flex md:justify-between",children:[y("div",{className:"mb-6 md:mb-0",children:F("a",{href:"#",className:"flex items-center",children:[y("img",{src:"https://media-public.canva.com/rEYeM/MAFS1MrEYeM/1/tl.png",className:"mr-3 h-8",alt:"Cat Logo"}),y("span",{className:"dark:text-textyellow self-center whitespace-nowrap text-2xl font-semibold",children:"L\u1EDDi ch\xFAc t\u1EBFt"})]})}),F("div",{className:"grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6",children:[F("div",{children:[y("h2",{className:"dark:text-textyellow mb-6 text-sm font-semibold",children:"Resources"}),F("ul",{className:"dark:text-white",children:[y("li",{className:"mb-4",children:y("a",{href:"#",className:"hover:underline",children:"LT"})}),y("li",{children:y("a",{href:"https://tailwindcss.com/",className:"hover:underline",children:"Tailwind CSS"})})]})]}),F("div",{children:[y("h2",{className:"dark:text-textyellow mb-6 text-sm font-semibold",children:"Follow us"}),F("ul",{className:"dark:text-white",children:[y("li",{className:"mb-4",children:y("a",{href:"https://github.com/longlinh123456/jsi14-cringe",className:"hover:underline ",children:"Github"})}),y("li",{children:y("a",{href:"https://discord.com",className:"hover:underline",children:"Discord"})})]})]}),F("div",{children:[y("h2",{className:"dark:text-textyellow mb-6 text-sm  font-semibold",children:"Legal"}),F("ul",{className:" dark:text-white",children:[y("li",{className:"mb-4",children:y("a",{href:"#",className:"hover:underline",children:"Privacy Policy"})}),y("li",{children:y("a",{href:"#",className:"hover:underline",children:"Terms & Conditions"})})]})]})]})]}),y("hr",{className:"my-6 border-gray-200 dark:border-black sm:mx-auto lg:my-8"}),F("div",{className:"sm:flex sm:items-center sm:justify-between",children:[F("span",{className:" dark:text-textyellow",children:["\xA9 2023 ",y("a",{href:"#",className:"hover:underline",children:"LT\u2122"}),". All Rights Reserved."]}),F("div",{className:"mt-4 flex space-x-6 sm:mt-0 sm:justify-center",children:[F("a",{href:"#",className:"text-blue-500 ",children:[y("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:y("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}),y("span",{className:"sr-only",children:"Facebook page"})]}),F("a",{href:"#",className:"text-fuchsia-600 ",children:[y("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:y("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}),y("span",{className:"sr-only",children:"Instagram page"})]}),F("a",{href:"#",className:"text-sky-500 ",children:[y("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:y("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}),y("span",{className:"sr-only",children:"Twitter page"})]}),F("a",{href:"#",className:"text-black-500 ",children:[y("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:y("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),y("span",{className:"sr-only",children:"GitHub account"})]}),F("a",{href:"#",className:"text-orange-500 ",children:[y("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:y("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})}),y("span",{className:"sr-only",children:"Dribbbel account"})]})]})]})]})]}))}function ww(t){const{title:e,buttonText:n,isInLogin:r,onButtonPress:i}=t,[s,o]=O.exports.useState(""),[a,l]=O.exports.useState(""),[u,c]=O.exports.useState("");return y("div",{children:F("form",{autoComplete:"off",className:"shadow-input w-full max-w-[600px] rounded-lg bg-white p-10","aria-label":"signup-form",children:[y("h2",{className:"mb-10 text-center text-3xl font-bold",children:e}),F("div",{className:"mb-5 flex flex-col items-start gap-y-3",children:[y("label",{htmlFor:"email",className:"cursor-pointer text-sm font-medium",children:"Email"}),y("input",{id:"email",type:"email",className:"w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none",placeholder:"Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email",value:s,onChange:d=>o(d.target.value)})]}),F("div",{className:"mb-5 flex flex-col items-start gap-y-3",children:[y("label",{htmlFor:"password",className:"cursor-pointer text-sm font-medium",children:"M\u1EADt kh\u1EA9u"}),y("input",{id:"password",type:"password",className:"w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none",placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u",value:a,onChange:d=>l(d.target.value)})]}),!r&&y("div",{className:"mb-5 flex flex-col items-start gap-y-3",children:y("input",{id:"confirmPassword",type:"password",className:"w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none",placeholder:"Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",value:u,onChange:d=>c(d.target.value)})}),y("div",{className:"mb-5 flex items-center justify-end text-slate-400",children:r?F(Qi,{children:[y("p",{children:"B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n?\xA0"}),y(P1,{className:"text-textblue",to:"/signup",children:"\u0110\u0103ng k\xFD"})]}):F(Qi,{children:[y("p",{children:"B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n?\xA0"}),y(P1,{className:"text-textblue",to:"/login",children:"\u0110\u0103ng nh\u1EADp"})]})}),y("button",{type:"button",className:"inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white hover:bg-blue-400",onClick:()=>{if(r||a===u){i(s,a);return}else alert("M\u1EADt kh\u1EA9u \u0111\u01B0\u1EE3c nh\u1EADp l\u1EA1i kh\xF4ng tr\xF9ng kh\u1EDBp")},children:n})]})})}const m$=new Ln;function g$(){const t=Lo();async function e(){await ky(t,m$)}async function n(r,i){try{await dI(t,r,i)}catch(s){alert(`\u0110\u0103ng nh\u1EADp th\u1EA5t b\u1EA1i, l\u1ED7i: ${s.code}`)}}return F("div",{className:"flex flex-col items-center justify-center",children:[y("div",{className:"flex w-screen flex-1 flex-row items-center justify-center gap-x-5 py-4",children:y("div",{className:"w-2/5",children:y(ww,{title:"\u0110\u0103ng nh\u1EADp",buttonText:"\u0110\u0103ng nh\u1EADp",isInLogin:!0,onButtonPress:n})})}),F("div",{onClick:e,className:"flex h-[75px] cursor-pointer flex-row items-center justify-center gap-x-3 rounded-lg bg-blue-400 px-5 font-sans text-lg font-semibold tracking-wide text-white hover:bg-blue-300",children:[F("svg",{className:"h-3/5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none",children:[y("path",{d:"M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z",fill:"#4285F4"}),y("path",{d:"M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z",fill:"#34A853"}),y("path",{d:"M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z",fill:"#FBBC05"}),y("path",{d:"M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z",fill:"#EB4335"})]}),y("h2",{children:"\u0110\u0103ng nh\u1EADp v\u1EDBi Google"})]})]})}const y$=[{display:"Trang ch\u1EE7",navigateTo:"/"}];function v$(){const t=os(),{status:e,data:n}=eu();return e==="loading"?y("div",{"aria-label":"loading-skeleton",className:"h-full w-full animate-pulse bg-slate-200"}):(n&&t("/dashboard"),F("div",{className:"flex h-screen w-screen flex-col",children:[y(Id,{title:"\u0110\u0103ng nh\u1EADp",links:y$}),y("div",{className:"flex grow items-center justify-center bg-red-400",children:y(g$,{})})]}))}const _$=new Ln;function w$(){const t=Lo();async function e(){await ky(t,_$)}return F("div",{className:"flex flex-col items-center justify-center",children:[y("div",{className:"flex w-screen flex-1 flex-row items-center justify-center gap-x-5 py-4",children:y("div",{className:"w-2/5",children:y(ww,{title:"\u0110\u0103ng k\xFD",buttonText:"T\u1EA1o t\xE0i kho\u1EA3n",isInLogin:!1,onButtonPress:async(r,i)=>{try{await hI(t,r,i)}catch(s){alert(`\u0110\u0103ng k\xFD th\u1EA5t b\u1EA1i, l\u1ED7i: ${s.code}`)}}})})}),F("div",{onClick:e,className:"flex h-[75px] cursor-pointer flex-row items-center justify-center gap-x-3 rounded-lg bg-blue-400 px-5 font-sans text-lg font-semibold tracking-wide text-white hover:bg-blue-300",children:[F("svg",{className:"h-3/5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none",children:[y("path",{d:"M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z",fill:"#4285F4"}),y("path",{d:"M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z",fill:"#34A853"}),y("path",{d:"M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z",fill:"#FBBC05"}),y("path",{d:"M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z",fill:"#EB4335"})]}),y("h2",{children:"\u0110\u0103ng nh\u1EADp v\u1EDBi Google"})]})]})}const E$=[{display:"Trang ch\u1EE7",navigateTo:"/"}];function C$(){const t=os(),{status:e,data:n}=eu();return e==="loading"?y("div",{"aria-label":"loading-skeleton",className:"h-full w-full animate-pulse bg-slate-200"}):(n&&t("/dashboard"),F("div",{className:"flex h-screen w-screen flex-col",children:[y(Id,{title:"\u0110\u0103ng k\xFD",links:E$}),y("div",{className:"flex grow items-center justify-center bg-red-400",children:y(w$,{})})]}))}const S$=t$([{path:"login",element:y(v$,{})},{path:"dashboard",element:y(d$,{})},{path:"signup",element:y(C$,{})},{path:"sendmessage/:uid",element:y(a$,{})},{path:"*",element:y(p$,{})}],{basename:"/jsi14-cringe"});function T$(){const t=J7(),e=TD(t),n=kk(t);return y(MM,{sdk:e,children:y(OM,{sdk:n,children:y(KF,{router:S$})})})}const I$={apiKey:"AIzaSyBMBzuHpzs8nrhbD7zg8AH4Z0rNPtg1y-g",authDomain:"contest-a2d5c.firebaseapp.com",projectId:"contest-a2d5c",storageBucket:"contest-a2d5c.appspot.com",messagingSenderId:"228098169786",appId:"1:228098169786:web:e6c2ffbd5d81e3bf7fdb83"};B0.createRoot(document.getElementById("root")).render(y(x3.StrictMode,{children:y(CM,{firebaseConfig:I$,children:y(T$,{})})}));
