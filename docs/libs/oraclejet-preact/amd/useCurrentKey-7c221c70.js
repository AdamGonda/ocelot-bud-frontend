define(['exports', 'preact/hooks', './keys-123d62b0', './useUser-e0989b0b'], (function(e,r,s,t){"use strict";e.useCurrentKey=function(e,n,i,o,u,c,l,f,a){const{direction:y}=t.useUser(),k=r.useCallback(((e,r)=>a?a(e,r):e===r),[a]),K=r.useCallback((e=>{if(f&&s.isKeyDefined(l)){const r="rtl"===y,t={ArrowUp:i,ArrowDown:o,ArrowLeft:r?c:u,ArrowRight:r?u:c};if(Object.keys(t).includes(e.key)&&(n||!e.shiftKey)){const r=t[e.key]?.();s.isKeyDefined(r)&&!k(l,r)&&f({value:r}),e.preventDefault()}}}),[l,f,i,o,u,c,k,n,y]),b=r.useCallback((r=>{if(f&&!r.shiftKey){const t=e(r.target);s.isKeyDefined(t)&&!k(l,t)&&f({value:t})}}),[l,e,f,k]);return{currentKeyProps:null==f?{}:{onClickCapture:b,onKeyDown:K}}}}));
//# sourceMappingURL=useCurrentKey-7c221c70.js.map
