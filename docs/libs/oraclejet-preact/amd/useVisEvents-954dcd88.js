define(['exports', 'preact/hooks', './useUser-85c781ea', './layoutUtils-3c2d340e', './eventsUtils-5d567a9d', './useVisHover-28319fef', './mergeProps-bcfa6a92'], (function(e,t,n,r,s,o,c){"use strict";e.useVisEvent=function(e,i,u,a,d,v,f,I,l,m,g,b,p,C){const k=t.useRef(),[w,U]=t.useState(p),[R,V]=t.useState(),h=o.useVisHover((e=>{const t=b(e.target);g(t,R)||(V(t&&{...t,isCurrent:!0}),k.current=r.getRandomId(),i&&(w&&U({...w,isCurrent:!1}),l?.(d(t))))}),void 0,(()=>{V(void 0),k.current=void 0,i&&l?.(d())}),e),{direction:y}=n.useUser(),A="rtl"===y;if(!i)return{isInteractive:!1,focusedItemInfo:w,hoveredItemInfo:R,eventsProps:h};const E=e=>{m?.(d(e)),k.current=r.getRandomId(),U(e)},P=e=>{g(e,w)||(e.isCurrent=!0,e.isFocusVisible=!0,R&&V({...R,isCurrent:!1}),E(e))},D=()=>{const e=d(w);e&&e.data&&u(w)&&(I?.(e),k.current=r.getRandomId())},F=a(D,E,w,C);return{isInteractive:!0,focusedItemInfo:w,hoveredItemInfo:R,activeId:k.current,triggerOnAction:D,updatefocusedItemInfo:E,onContextMenuDismissed:e=>{"keyboard"===e&&E({...w,isCurrent:!0,isFocusVisible:!0})},eventsProps:c.mergeProps(h,{onPointerUp:e=>{const t=b(e.target);if(null!=t&&u(t)){U(t);const e=d(t);e&&u(t)&&(I?.(e),k.current=r.getRandomId())}},onKeyUp:F,onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":{const t=f(w);P(t),s.cancelEvent(e);break}case"ArrowUp":{const t=v(w);P(t),s.cancelEvent(e);break}case"ArrowRight":{const t=A?v(w):f(w);P(t),s.cancelEvent(e);break}case"ArrowLeft":{const t=A?f(w):v(w);P(t),s.cancelEvent(e);break}}},onBlur:()=>{const e={...w,isCurrent:!1,isFocusVisible:!1};(null!=R||w.isCurrent)&&m?.(d(void 0)),U(e)}})}}}));
//# sourceMappingURL=useVisEvents-954dcd88.js.map
