define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useResizeObserver-275c3e83', './BaseCardView-ab799b69'], (function(e,t,i,r,a){"use strict";e.CardFlexView=function(e){const c=i.useRef(null),[s,n]=i.useState({}),d=i.useCallback((e=>{const t=e.contentRect.width;s.containerWidth!==t&&n((e=>({...e,containerWidth:t})))}),[s]);r.useResizeObserver(c,d);const o=a.gutterSizeToPX[e.gutterSize||"sm"],u=a.getColCount(o,s.cardWidth,s.containerWidth),h={width:s.cardWidth,height:s.cardHeight};return t.jsx(a.BaseCardView,{...e,ref:c,layout:"flex",columns:u,cardSize:h,updateCardSize:(e,t)=>{n((i=>({...i,cardWidth:e,cardHeight:t})))}})}}));
//# sourceMappingURL=CardFlexView-296f97f5.js.map
