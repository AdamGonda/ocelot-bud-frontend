define(['exports', 'preact/hooks', './clientHints-aa2ccdd3'], (function(e,t,r){"use strict";const n=750;e.useContextMenuGesture=(e,c={isDisabled:!1})=>{const u=t.useRef(!1),o=t.useRef(),a=t.useCallback((t=>{t.preventDefault(),u.current?u.current=!1:e({gesture:"touch"===t.pointerType?"touch":"mouse",anchor:{x:t.clientX,y:t.clientY,contextElement:t.currentTarget},currentTarget:t.currentTarget,target:t.target})}),[e]),s=t.useCallback((t=>{if("F10"===t.key&&t.shiftKey){u.current=!0;const r=t.currentTarget;e({gesture:"keyboard",anchor:r,currentTarget:r,target:t.target})}}),[e]),l=t.useCallback((t=>{if(1===t.touches.length&&"ios"===r.getClientHints().platform){const r=t.touches[0],c=t.currentTarget;o.current=setTimeout((()=>{e({gesture:"touch",anchor:{x:r.clientX,y:r.clientY,contextElement:c},currentTarget:c,target:t.target})}),n)}}),[e]),i=t.useCallback((()=>{clearTimeout(o.current)}),[]),g=t.useCallback((()=>{clearTimeout(o.current)}),[]);return{triggerProps:c.isDisabled?{}:{onContextMenu:a,onKeyDown:s,onTouchStart:l,onTouchEnd:g,onTouchMove:i}}}}));
//# sourceMappingURL=useContextMenuGesture-0129fe8f.js.map
