define(['exports', 'preact/jsx-runtime', 'preact/compat', './LayerHost-e95c5f30', './classNames-08d99695', './UNSAFE_Layer/themes/LayerStyles.css', './useThemeInterpolations-b1d98ea4'], (function(e,t,r,s,o,a,n){"use strict";const l=Symbol.for("oj-logical-parent");e.LOGICAL_PARENT=l,e.Layer=({children:e,logicalParentRef:c,priority:i="popup",level:y="nearestAncestor"})=>{const u=r.useContext(s.LayerContext),[p,d]=r.useState(null),L=r.useRef(null),m=e=>{L.current=e,d(e)},g=n.useThemeInterpolations();let f=a.styles.popupPriorityStyle;switch(i){case"dialog":f=a.styles.dialogPriorityStyle;break;case"messages":f=a.styles.messagesPriorityStyle;break;default:f=a.styles.popupPriorityStyle}const S=o.classNames([g,a.baseStyle,f]);r.useLayoutEffect((()=>{const e="topLevel"===y?u.getRootLayerHost?.(i):u.getLayerHost?.(i);if(!e)return;const t=(e.ownerDocument??document).createElement("div");return t.setAttribute("data-oj-layer","true"),c&&(t[l]=c.current),e.appendChild(t),m(t),()=>{e&&t&&e.contains(t)&&(delete t[l],e.removeChild(t)),u.onLayerUnmount&&u.onLayerUnmount(t),m(null)}}),[c,u,y,i]),p&&(p.className=S);const b=()=>p;let h={};return u.getLayerHost&&(h={getRootLayerHost:u.getRootLayerHost?.bind(null,i),getLayerHost:b.bind(null)}),t.jsx(s.LayerContext.Provider,{value:h,children:p&&r.createPortal(e,p)})}}));
//# sourceMappingURL=Layer-276d62e8.js.map
