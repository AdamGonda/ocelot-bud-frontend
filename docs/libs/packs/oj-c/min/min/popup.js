define("oj-c/popup/popup",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","ojs/ojvcomponent","preact/hooks","@oracle/oraclejet-preact/UNSAFE_Popup","ojs/ojcontext","css!oj-c/popup/popup-styles.css"],(function(require,e,t,o,n,i,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;const c=Symbol.for("__oj_c_layer_content");e.Popup=(0,n.registerCustomElement)("oj-c-popup",(({id:e,opened:o=!1,children:a,anchor:l,launcher:u,placement:p,collision:d="fit",modality:m="modeless",offset:f,initialFocus:y="auto",autoDismiss:b="focusLoss",tail:h="none",onOpenedChanged:x,onOjOpen:g,onOjBeforeClose:j,onOjClose:O,onOjFocus:A,width:w,minWidth:_,maxWidth:P="calc(100vw - 3rem)",height:v,minHeight:C,maxHeight:E="calc(100vw - 3rem)",...R})=>{const S=(0,i.useRef)(null);let F=p;const W=(0,i.useRef)(null),k=(0,i.useRef)(null),B=(0,i.useRef)(),H=(0,i.useRef)(!1),L=(0,i.useCallback)((t=>S.current?r.getContext(S.current).getBusyContext().addBusyState({description:`oj-c-popup id='${e}' is ${t}`}):()=>{}),[e]),V=(0,i.useCallback)((e=>{S.current&&(e?S.current[c]=e:delete S.current[c])}),[]);let D;if((0,i.useEffect)((()=>()=>{B.current&&B.current()}),[]),(0,i.useEffect)((()=>{H.current?(B.current&&B.current(),B.current=L("animating")):H.current=!0}),[o,L]),"string"==typeof u){const e=document.querySelector(u);e&&(D=e)}else u instanceof HTMLElement?document.body.contains(u)&&(D=u):D=document.activeElement;let q;if(l)if(l instanceof Window||"window"===l)q="window";else if("string"==typeof l){q=document.querySelector(l)||D}else l instanceof Element?q=document.body.contains(l)?l:D:"object"!=typeof(M=l)||Array.isArray(M)||null===M||(q="number"==typeof l.x&&"number"==typeof l.y?l:D);else q=D;var M;p||(F="window"===q?"center":"bottom-start");const T={mainAxis:!0,crossAxis:!0},K={mainAxis:!1,crossAxis:!1};switch(d){case"none":T.mainAxis=!1,T.crossAxis=!1;break;case"fit":T.mainAxis=!1,T.crossAxis=!1,K.mainAxis=!0,K.crossAxis=!0;break;case"flipcenter":case"flipfit":K.mainAxis=!0,K.crossAxis=!0}const N=!p||(e=>["top","bottom"].indexOf(e.split("-")[0])>-1)(p),$={mainAxis:N?f?.y:f?.x,crossAxis:N?f?.x:f?.y},G=async e=>{try{await(j?.({detail:e})),x?.(!1)}catch(e){}};return W.current=q,k.current=D,(0,t.jsx)(n.Root,{ref:S,id:e,children:(0,t.jsx)(s.Popup,{ref:V,isOpen:o,anchorRef:"window"===W.current?void 0:W,launcherRef:k,placement:p??F,offset:$,flipOptions:T,shiftOptions:K,modality:m,initialFocus:y,tail:h,onClose:async e=>{if("escapeKey"===e.reason)return G(e)},onClickOutside:async()=>{if("focusLoss"===b)return G({reason:"outsideClick"})},onTransitionEnd:async e=>{B.current&&(B.current(),B.current=void 0),e?g?.():O?.()},onFocusSet:()=>{A?.()},width:w,minWidth:_,maxWidth:P,height:v,minHeight:C,maxHeight:E,"aria-describedby":R["aria-describedby"],"aria-label":R["aria-label"],"aria-labelledby":R["aria-labelledby"],children:a})})}),"Popup",{slots:{"":{}},properties:{opened:{type:"boolean",writeback:!0},launcher:{type:"string|Element"},anchor:{type:"string|Element|object"},placement:{type:"string",enumValues:["center","end","start","top","bottom","top-start","top-end","top-start-corner","top-end-corner","start-top","start-bottom","start-top-corner","start-bottom-corner","bottom-start","bottom-end","bottom-start-corner","bottom-end-corner","end-top","end-bottom","end-top-corner","end-bottom-corner"]},modality:{type:"string",enumValues:["modal","modeless"]},autoDismiss:{type:"string",enumValues:["none","focusLoss"]},tail:{type:"string",enumValues:["none","simple"]},initialFocus:{type:"string",enumValues:["auto","none","popup","firstFocusable"]},offset:{type:"number|object"},collision:{type:"string",enumValues:["none","flip","fit","flipfit","flipcenter"]},width:{type:"number|string"},minWidth:{type:"number|string"},maxWidth:{type:"number|string"},height:{type:"number|string"},minHeight:{type:"number|string"},maxHeight:{type:"number|string"}},events:{ojOpen:{},ojBeforeClose:{cancelable:!0},ojClose:{},ojFocus:{}},extension:{_WRITEBACK_PROPS:["opened"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["aria-describedby","aria-label","aria-labelledby","id"]}},{opened:!1,collision:"fit",modality:"modeless",initialFocus:"auto",autoDismiss:"focusLoss",tail:"none",maxWidth:"calc(100vw - 3rem)",maxHeight:"calc(100vw - 3rem)"},{"@oracle/oraclejet-preact":o.default})})),define("oj-c/popup",["require","exports","oj-c/popup/popup"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0,Object.defineProperty(e,"Popup",{enumerable:!0,get:function(){return t.Popup}})}));
//# sourceMappingURL=popup.js.map