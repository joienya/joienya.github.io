(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{7607:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(6070);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7561:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(6070),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3453:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return i},default:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let i=n[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!r[e]:o.setAttribute(i,r[e])}let{children:i,dangerouslySetInnerHTML:l}=r;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),l=Number(n.content),a=[];for(let t=0,r=n.previousElementSibling;t<l;t++,r=(null==r?void 0:r.previousElementSibling)||null){var u;(null==r?void 0:null==(u=r.tagName)?void 0:u.toLowerCase())===e&&a.push(r)}let s=t.map(o).filter(e=>{for(let t=0,r=a.length;t<r;t++){let r=a[t];if(i(r,e))return a.splice(t,1),!1}return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>r.insertBefore(e,n)),n.content=(l-a.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(1024),o=r(8533),i=o._(r(2265)),l=r(4887),a=n._(r(2912)),u=r(2301),s=r(7709),c=r(9469);r(7873);let f=r(2706),d=n._(r(6515)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function h(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:u,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:g,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:P,onLoad:O,onError:E,...j}=e;return i.default.createElement("img",{...j,...h(f),loading:p,width:a,height:l,decoding:u,"data-nimg":y?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,d,b,v,_,g))},[r,d,b,v,_,E,g,t]),onLoad:e=>{let t=e.currentTarget;m(t,d,b,v,_,g)},onError:e=>{P(!0),"empty"!==d&&_(!0),E&&E(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let b=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let h=(0,i.useRef)(a);(0,i.useEffect)(()=>{h.current=a},[a]);let[b,v]=(0,i.useState)(!1),[_,P]=(0,i.useState)(!1),{props:O,meta:E}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:b,showAltText:_});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...O,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:P,ref:t}),E.priority?i.default.createElement(y,{isAppRouter:!r,imgAttributes:O}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6685:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(1024),o=n._(r(2265)),i=r(2156),l=r(3954),a=r(6162),u=r(5090),s=r(7607),c=r(2706),f=r(6656),d=r(5033),p=r(7561),m=r(6711),h=r(5685),g=new Set;function y(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(g.has(i))return;g.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:v,prefetch:_=null,passHref:P,replace:O,shallow:E,scroll:j,locale:S,onClick:w,onMouseEnter:C,onTouchStart:x,legacyBehavior:M=!1,...R}=e;r=v,M&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(c.RouterContext),k=o.default.useContext(f.AppRouterContext),A=null!=I?I:k,L=!I,T=!1!==_,N=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:z,as:U}=o.default.useMemo(()=>{if(!I){let e=b(a);return{href:e,as:g?b(g):e}}let[e,t]=(0,i.resolveHref)(I,a,!0);return{href:e,as:g?(0,i.resolveHref)(I,g):t||e}},[I,a,g]),D=o.default.useRef(z),q=o.default.useRef(U);M&&(n=o.default.Children.only(r));let H=M?n&&"object"==typeof n&&n.ref:t,[W,F,B]=(0,d.useIntersection)({rootMargin:"200px"}),$=o.default.useCallback(e=>{(q.current!==U||D.current!==z)&&(B(),q.current=U,D.current=z),W(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,z,B,W]);o.default.useEffect(()=>{A&&F&&T&&y(A,z,U,{locale:S},{kind:N},L)},[U,z,F,S,T,null==I?void 0:I.locale,A,L,N]);let K={ref:$,onClick(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,i,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let m=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(m):m()}(e,A,z,U,O,E,j,S,L,T)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(T||!L)&&y(A,z,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:N},L)},onTouchStart(e){M||"function"!=typeof x||x(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(T||!L)&&y(A,z,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:N},L)}};if((0,u.isAbsoluteUrl)(U))K.href=U;else if(!M||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);K.href=t||(0,m.addBasePath)((0,s.addLocale)(U,e,null==I?void 0:I.defaultLocale))}return M?o.default.cloneElement(n,K):o.default.createElement("a",{...R,...K},r)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8043:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3015:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return g},default:function(){return b}});let n=r(1024),o=r(8533),i=n._(r(4887)),l=o._(r(2265)),a=r(1330),u=r(3453),s=r(8043),c=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:a="afterInteractive",onError:s,stylesheets:m}=e,h=r||t;if(h&&f.has(h))return;if(c.has(t)){f.add(h),c.get(t).then(n,s);return}let g=()=>{o&&o(),f.add(h)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(i?(y.innerHTML=i.__html||"",g()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",g()):t&&(y.src=t,c.set(t,b)),Object.entries(e))){if(void 0===n||d.includes(r))continue;let e=u.DOMAttributeNames[r]||r.toLowerCase();y.setAttribute(e,n)}"worker"===a&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",a),m&&p(m),document.body.appendChild(y)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function y(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:c,stylesheets:d,...p}=e,{updateScripts:h,scripts:g,getIsSsr:y,appDir:b,nonce:v}=(0,l.useContext)(a.HeadManagerContext),_=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||r;_.current||(o&&e&&f.has(e)&&o(),_.current=!0)},[o,t,r]);let P=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!P.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))})),P.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(h?(g[u]=(g[u]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:c,...p}]),h(g)):y&&y()?f.add(t||r):y&&!y()&&m(e)),b){if(d&&d.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return r?(i.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&r&&i.default.preload(r,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(2265),o=r(8043),i="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let m=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let n=r(1024),o=n._(r(2265)),i=o.default.createContext({})},8551:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3805:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7873);let n=r(9540),o=r(7709);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,u,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:m,className:h,quality:g,width:y,height:b,fill:v=!1,style:_,onLoad:P,onLoadingComplete:O,placeholder:E="empty",blurDataURL:j,fetchPriority:S,layout:w,objectFit:C,objectPosition:x,lazyBoundary:M,lazyRoot:R,...I}=e,{imgConf:k,showAltText:A,blurComplete:L,defaultLoader:T}=t,N=k||o.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}let z=I.loader||T;delete I.loader,delete I.srcSet;let U="__next_img_default"in z;if(U){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...n}=t;return e(n)}}if(w){"fill"===w&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[w];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[w];t&&!f&&(f=t)}let D="",q=l(y),H=l(b);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,j=j||e.blurDataURL,D=e.src,!v){if(q||H){if(q&&!H){let t=q/e.width;H=Math.round(e.height*t)}else if(!q&&H){let t=H/e.height;q=Math.round(e.width*t)}}else q=e.width,H=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:D)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,W=!1),a.unoptimized&&(d=!0),U&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),p&&(S="high");let F=l(g),B=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:x}:{},A?{}:{color:"transparent"},_),$=L||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:u,blurHeight:s,blurDataURL:j||"",objectFit:B.objectFit})+'")':'url("'+E+'")',K=$?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},G=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:u[c]})}}({config:a,src:c,unoptimized:d,width:q,quality:F,sizes:f,loader:z}),V={...I,loading:W?"lazy":m,fetchPriority:S,width:q,height:H,decoding:"async",className:h,style:{...B,...K},sizes:G.sizes,srcSet:G.srcSet,src:G.src},J={unoptimized:d,priority:p,placeholder:E,fill:v};return{props:V,meta:J}}},2912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(1024),o=r(8533),i=o._(r(2265)),l=n._(r(2378)),a=r(7555),u=r(1330),s=r(8551);function c(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7873);let d=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,i.useContext)(a.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9540:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let n=r(1024),o=n._(r(2265)),i=r(7709),l=o.default.createContext(i.imageConfigDefault)},7709:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6515:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let n=r(1024),o=n._(r(2265)),i=o.default.createContext(null)},6162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},urlObjectKeys:function(){return a},formatWithValidation:function(){return u}});let n=r(8533),o=n._(r(5769)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",l=e.pathname||"",a=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(o.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+n+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},9232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(3658),o=r(8489);function i(e,t,r){let i="",l=(0,o.getRouteRegex)(e),a=l.groups,u=(t!==e?(0,n.getRouteMatcher)(l)(t):"")||r;i=e;let s=Object.keys(a);return s.every(e=>{let t=u[e]||"",{repeat:r,optional:n}=a[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in u)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},8354:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},3954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(5090),o=r(3719);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},3259:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},5769:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},2156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(5769),o=r(6162),i=r(3259),l=r(5090),a=r(6070),u=r(3954),s=r(8354),c=r(9232);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),m=p?d.slice(p[0].length):d;if((m.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,l.normalizeRepeatedSlashes)(m);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:l,params:a}=(0,c.interpolateAs)(e.pathname,e.pathname,r);l&&(t=(0,o.formatWithValidation)({pathname:l,hash:e.hash,query:(0,i.omit)(r,a)}))}let l=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[l,t||l]:l}catch(e){return r?[d]:d}}},3658:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(5090);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},l={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(l[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),l}}},8489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let n=r(4507),o=r(3805),i=r(7369);function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function a(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},a=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:u}=l(i[1]);return r[e]={pos:a++,repeat:u,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=l(i[1]);return r[e]={pos:a++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function u(e){let{parameterizedRoute:t,groups:r}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function s(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:i,optional:a,repeat:u}=l(r),s=i.replace(/\W/g,"");o&&(s=""+o+s);let c=!1;return(0===s.length||s.length>30)&&(c=!0),isNaN(parseInt(s.slice(0,1)))||(c=!0),c&&(s=t()),o?n[s]=""+o+i:n[s]=""+i,u?a?"(?:/(?<"+s+">.+?))?":"/(?<"+s+">.+?)":"/(?<"+s+">[^/]+?)"}function c(e,t){let r;let l=(0,i.removeTrailingSlash)(e).slice(1).split("/"),a=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:l.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);return r&&i?s({getSafeRouteKey:a,segment:i[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):i?s({getSafeRouteKey:a,segment:i[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let r=c(e,t);return{...u(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=a(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},2378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(8533),o=n._(r(2265)),i=o.useLayoutEffect,l=o.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return a},getDisplayName:function(){return u},isResSent:function(){return s},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n){let t='"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},7873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,u={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:c,props:u,_owner:l.current}}t.jsx=u,t.jsxs=u},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)},4033:function(e,t,r){e.exports=r(8165)}}]);