define(['exports', 'preact/jsx-runtime', './PRIVATE_TimeComponent/themes/TimeComponentStyles.css', './classNames-08d99695', 'preact/hooks', './TrackResizeContainer-2b033ae7', './Flex-3421f0df', './BaseButton-19a622bc', './ButtonLabelLayout-2e0e8d09', './useTooltip-b43ad881', './logger-0f873e29', './LayerHost-639b3284', 'preact/compat', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', './Plus-9a4340c3', './getFormatParse-c1655d39', './useTranslationBundle-d07d4b20', './Minus-08341d62', './usePointerGesture-1c1dd806', 'preact', './Text-cd61a065'], (function(e,t,o,n,i,r,a,s,l,c,d,m,h,u,g,x,p,f,w,y,C,T,S,v){"use strict";function b({width:e,height:n,children:i,align:r,justify:a}){const s=S.toChildArray(i);return t.jsx("div",{class:o.layersStackStyles.base,style:{width:e,height:n,alignItems:r,justifyItems:a},children:s.map((e=>t.jsx("div",{class:o.layersStackStyles.layer,children:e})))})}function j({innerRef:e,children:r}){const[a,s]=i.useState(!1),l={onControlsShow:()=>s(!0),onControlsHide:()=>s(!1)};return t.jsx("div",{ref:e,...l,class:n.classNames([o.overlayControlsContainerStyles.base,a&&o.overlayControlsContainerStyles.visible]),children:r})}function M({children:e,accessibleLabel:n,isDisabled:i=!1,onAction:r}){const{tooltipContent:a,tooltipProps:{onFocus:d,onBlur:m,...h}}=c.useTooltip({text:n});return t.jsxs("div",{class:o.zoomControlStyles.base,...h,children:[t.jsx(s.BaseButton,{elementDetails:i?void 0:{type:"span",isFocusable:!1},isDisabled:i,size:"sm",variant:"outlined",styling:["min"],onAction:r,children:t.jsx(l.ButtonLabelLayout,{display:"icons",startIcon:e,size:"sm"})}),a]})}const D=e=>Date.parse(e),R=e=>new Date(e).toISOString(),A=1.25,O=.8,L=(e,t,o,n,i,r,a,s,l,c,d,m,h,u)=>{const{newViewportStartTime:g,newViewportEndTime:x}=((e,t,o,n,i,r,a,s)=>{const l=e,c=t,d=o,m=n,h=i,u=r,g=d-c,x=Math.max(0,g-a)*((l-c)/g),p=Math.max(0,g-a)*((d-l)/g),f=-Math.max(0,s-g)*((l-c)/g),w=-Math.max(0,s-g)*((d-l)/g),y=Math.max(f,Math.min(x,(1-1/u)*(l-c))),C=Math.max(w,Math.min(p,(1-1/u)*(d-l))),T=Math.max(0,m-(c+y)),S=Math.max(0,d-C-h);return{newViewportStartTime:Math.max(m,c+(y-S)),newViewportEndTime:Math.min(h,d-(C-T))}})(e,t,o,n,i,r,a,s),{minorAxisScale:p,majorAxisScale:f}=((e,t,o,n,i,r,a)=>{const s=((e,t,o)=>{const n=t-e;return[...o,-1/0].findIndex((e=>n>e))-1})(e,t,o);let l=0;return l=void 0===r?s-i:s>=i?Math.min(s-i,r.length-1-a):-Math.min(i-s,a),{minorAxisScale:n[i+l],majorAxisScale:r&&r[a+l]}})(g,x,l,c,d,m,h),w={viewportStartTime:g,viewportEndTime:x,majorAxisScale:f,minorAxisScale:p},y=g!==t||x!==o;return u&&y&&u({viewportStart:R(g),viewportEnd:R(x),majorAxisScale:f,minorAxisScale:p}),{newViewport:w,isViewportChanged:y}};function z({zoomFactor:e=A,startTime:o,endTime:n,viewportStartTime:i,viewportEndTime:r,majorAxisZoomOrder:a,majorAxisZoomOrderIndex:s,minorAxisZoomOrder:l,minorAxisZoomOrderIndex:c,zoomOrderViewDurationThresholds:d,minZoomViewportDuration:m,maxZoomViewportDuration:h,onViewportChange:u}){const g=y.useTranslationBundle("@oracle/oraclejet-preact").timeComponent_tooltipZoomIn(),x=i+(r-i)/2,{newViewport:p,isViewportChanged:w}=L(x,i,r,o,n,e,m,h,d,l,c,a,s),C=!w;return t.jsx(M,{accessibleLabel:g,isDisabled:C,onAction:()=>{u?.({viewportStart:R(p.viewportStartTime),viewportEnd:R(p.viewportEndTime),majorAxisScale:p.majorAxisScale,minorAxisScale:p.minorAxisScale})},children:t.jsx(f.SvgPlus,{size:"4x"})})}function E({zoomFactor:e=O,startTime:o,endTime:n,viewportStartTime:i,viewportEndTime:r,majorAxisZoomOrder:a,majorAxisZoomOrderIndex:s,minorAxisZoomOrder:l,minorAxisZoomOrderIndex:c,zoomOrderViewDurationThresholds:d,minZoomViewportDuration:m,maxZoomViewportDuration:h,onViewportChange:u}){const g=y.useTranslationBundle("@oracle/oraclejet-preact").timeComponent_tooltipZoomOut(),x=i+(r-i)/2,{newViewport:p,isViewportChanged:f}=L(x,i,r,o,n,e,m,h,d,l,c,a,s),w=!f;return t.jsx(M,{accessibleLabel:g,isDisabled:w,onAction:()=>{u?.({viewportStart:R(p.viewportStartTime),viewportEnd:R(p.viewportEndTime),majorAxisScale:p.majorAxisScale,minorAxisScale:p.minorAxisScale})},children:t.jsx(C.SvgMinus,{size:"4x"})})}const V=({captureTargetRef:e,draggableRegion:t,onDragStart:o,onDragMove:n,onDragEnd:r,isDisabled:a=!1})=>{const s={isDragging:!1,x0:-1,y0:-1,regionOffsetX:-1,regionOffsetY:-1},l=i.useRef(s),c=(e,t)=>{const{isDragging:o,x0:n,y0:i,regionOffsetX:r,regionOffsetY:a}=l.current;if(!o)return;const s=e.offsetX,c=e.offsetY;t&&t({x:s,y:c,dx:s-n,dy:c-i,regionOffsetX:r,regionOffsetY:a,originalEvent:e})},d=T.usePointerGesture({captureTargetRef:e,numPointers:1,onExtraneousPointerDown:()=>{l.current=s},onPointerGestureDown:({pointers:[e]})=>{const n=e.offsetX,i=e.offsetY;if(0!==e.button||!((e,t,o)=>{if(!o)return!0;const{xMin:n,xMax:i,yMin:r,yMax:a}=o;return e>=n&&e<=i&&t>=r&&t<=a})(n,i,t))return;const{regionOffsetX:r,regionOffsetY:a}=((e,t,o)=>o?{regionOffsetX:e-o.xMin,regionOffsetY:t-o.yMin}:{regionOffsetX:e,regionOffsetY:t})(n,i,t);l.current={isDragging:!0,x0:n,y0:i,regionOffsetX:r,regionOffsetY:a},o&&o({x:n,y:i,regionOffsetX:r,regionOffsetY:a,originalEvent:e})},onPointerGestureMove:({pointers:[e]})=>{c(e,n)},onPointerGestureEnd:({pointers:[e]})=>{c(e,r),l.current=s}});return a?{}:d};function P({thumbWidth:e,thumbHeight:o,thumbTop:n,thumbLeft:r,thumbRight:a,draggableRegion:s,processDragRangeXChange:l,processDragRangeYChange:c,processClickRangeXChange:d,processClickRangeYChange:m,styles:h,width:u,height:g}){const x=i.useRef(null),p=V({captureTargetRef:x,draggableRegion:s,onDragMove:({x:e,y:t,regionOffsetX:o,regionOffsetY:n})=>{l?.(e,o),c?.(t,n)}});return t.jsx("div",{ref:x,class:h.container,style:{width:u,height:g},onClick:e=>{const t=e.offsetX,o=e.offsetY,{xMin:n,xMax:i,yMin:r,yMax:a}=s;t>=n&&t<=i&&o>=r&&o<=a||(d?.(t),m?.(o))},...p,children:t.jsx("div",{class:h.track,children:t.jsx("div",{class:h.thumb,style:{width:e,height:o,top:n,left:r,right:a}})})})}function Z({width:e,height:n,positions:i,variant:r}){const a=i.map((e=>`M${e},0 V${n}`)).join(" ");return t.jsx("svg",{width:e,height:n,children:t.jsx("path",{class:o.verticalGridlinesStyles[r],d:a})})}function X({x:e,y:i,width:r,label:a,font:s,labelPosition:l,isTruncated:d,isStartIntervalTruncated:m,isRTL:h}){const{tooltipContent:u,tooltipProps:{onFocus:g,onBlur:x,...p}}=c.useTooltip({text:a,isDisabled:!d}),f="center"===l?"center":void 0,w=m&&d?h?"ltr":"rtl":void 0;return t.jsxs("div",{...p,"aria-hidden":"true",class:n.classNames([o.timeAxisLabelsStyles.label,d&&o.timeAxisLabelsStyles.labelTruncated]),style:{left:e,top:i,width:r,textAlign:f,direction:w,...s},children:[t.jsx(v.Text,{variant:"primary",truncation:"ellipsis",size:"inherit",weight:"inherit",children:a}),u]})}e.DEFAULT_ZOOM_IN_FACTOR=A,e.DEFAULT_ZOOM_OUT_FACTOR=O,e.TimeComponentCanvas2D=function({width:e,height:o,draw:n}){const r=i.useRef(null);return i.useLayoutEffect((()=>{const t=r.current,n=t.getContext("2d");t.style.width=`${e}px`,t.style.height=`${o}px`;const i=window.devicePixelRatio;t.width=Math.floor(e*i),t.height=Math.floor(o*i),n.scale(i,i)}),[e,o]),i.useLayoutEffect((()=>{const e=r.current,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),n(t)}),[e,o,n]),t.jsx("canvas",{ref:r})},e.TimeComponentHorizontalScrollbar=function({getNewRange:e,onRangeChange:n,...r}){const a=i.useRef({min:0,max:0}),s=(e,t)=>{const{min:o,max:i}=a.current;(e!==o||t!==i)&&n(e,t),a.current={min:e,max:t}};return t.jsx(P,{...r,processDragRangeXChange:(t,o)=>{const{newMin:n,newMax:i}=e(Math.max(0,t-o));s(n,i)},processClickRangeXChange:t=>{const{xMin:o,xMax:n}=r.draggableRegion,i=(n-o)/2,{newMin:a,newMax:l}=e(Math.max(0,t-i));s(a,l)},styles:o.horizontalScrollbarStyles})},e.TimeComponentHorizontalScrollbarContainer=function({getLayout:e,onRangeChange:n,children:i}){return t.jsx("div",{class:o.horizontalScrollbarStyles.base,children:t.jsx(r.TrackResizeContainer,{width:"100%",height:"100%",children:(t,o)=>i({...e(t),onRangeChange:n,width:t,height:o})})})},e.TimeComponentHorizontalTimeAxis=function({font:e,labelPosition:n,labels:i,labelTicks:r,labelPositions:a,isLabelTruncated:s,isIntervalStartTruncated:l,intervalWidths:c,majorGridTicksPos:d,minorGridTicksPos:m,isRTL:h,width:u,height:g}){return t.jsxs(b,{width:`${u}px`,height:`${g}px`,children:[t.jsx("div",{class:o.timeAxisLabelsStyles.base,children:i.map(((o,i)=>t.jsx(X,{font:e,label:o,labelPosition:n,x:a[i],y:0,width:c[i],isTruncated:s[i],isStartIntervalTruncated:0===i&&l,isRTL:h},r[i])))}),m&&t.jsx(Z,{width:u,height:g,positions:m,variant:"minor"}),d&&t.jsx(Z,{width:u,height:g,positions:d,variant:"major"})]})},e.TimeComponentLayersStack=b,e.TimeComponentOverlayControlsContainer=j,e.TimeComponentPanZoomLayout=function({overlayControlsContainerRef:e,width:i,height:r,overlayControls:a,verticalControl:s,verticalControlTopGap:l="0",verticalControlBottomGap:c="0",verticalControlStartGap:d=!0,horizontalControl:m,horizontalControlStartGap:h="0",horizontalControlEndGap:u="0",horizontalControlTopGap:g=!0,vis:x}){return t.jsxs("div",{class:o.panZoomLayoutStyles.base,style:{gridTemplateColumns:`${h} minmax(0, 1fr) ${u} auto`,gridTemplateRows:`${l} minmax(0, 1fr) ${c} auto`,width:i,height:r},children:[t.jsx("div",{class:n.classNames([o.panZoomLayoutStyles.verticalControl,d&&o.panZoomLayoutStyles.verticalControlWithSpacing]),children:s}),t.jsx("div",{class:n.classNames([o.panZoomLayoutStyles.horizontalControl,g&&o.panZoomLayoutStyles.horizontalControlWithSpacing]),children:m}),t.jsx("div",{class:o.panZoomLayoutStyles.vis,children:a?t.jsxs(b,{children:[x,t.jsx(j,{innerRef:e,children:a})]}):x})]})},e.TimeComponentVerticalGridlines=Z,e.TimeComponentVerticalScrollbar=function({getNewRange:e,onRangeChange:n,...r}){const a=i.useRef({min:0,max:0}),s=(e,t)=>{const{min:o,max:i}=a.current;(e!==o||t!==i)&&n(e,t),a.current={min:e,max:t}};return t.jsx(P,{...r,processDragRangeYChange:(t,o)=>{const{newMin:n,newMax:i}=e(Math.max(0,t-o));s(n,i)},processClickRangeYChange:t=>{const{yMin:o,yMax:n}=r.draggableRegion,i=(n-o)/2,{newMin:a,newMax:l}=e(Math.max(0,t-i));s(a,l)},styles:o.verticalScrollbarStyles})},e.TimeComponentVerticalScrollbarContainer=function({getLayout:e,onRangeChange:n,children:i}){return t.jsx("div",{class:o.verticalScrollbarStyles.base,children:t.jsx(r.TrackResizeContainer,{width:"100%",height:"100%",children:(t,o)=>i({...e(o),onRangeChange:n,width:t,height:o})})})},e.TimeComponentZoomControls=function({position:e="topEnd",zoomParameters:i,onViewportChange:s}){return t.jsx(r.TrackResizeContainer,{width:"100%",height:"100%",children:(r,l)=>{const{getZoomOrderViewDurationThresholds:c,...d}=i,m=c(r);return t.jsx("div",{class:n.classNames([o.zoomControlsLayoutStyles.base,o.zoomControlsLayoutStyles[e]]),children:t.jsx("div",{class:o.zoomControlsLayoutStyles.controls,children:t.jsxs(a.Flex,{direction:"column",gap:"2.25x",children:[t.jsx(z,{...d,zoomOrderViewDurationThresholds:m,onViewportChange:s}),t.jsx(E,{...d,zoomOrderViewDurationThresholds:m,onViewportChange:s})]})})})}})},e.getDefaultDateFormatter=(e,t)=>{const o=R(t),n=D(e.getPreviousDate(o)),i=D(e.getNextDate(o))-n<=864e5?{dateStyle:"medium",timeStyle:"medium",locale:navigator.language}:{dateStyle:"medium",locale:navigator.language};return w.getFormatParse(i).format},e.getGestureZoomFactor=e=>(Math.abs(e)/15*.05+1)**Math.sign(e),e.getISOString=R,e.getPositionTime=(e,t,o,n,i)=>(i?n-e:e)*(o-t)/n+t,e.getTimePosition=(e,t,o,n,i)=>{const r=n*(e-t)/(o-t);return i?n-r:r},e.parseDate=D,e.useDrag=V,e.useWheel=({onWheel:e,preventDefault:t=!0,isDisabled:o=!1})=>o?{}:{onWheel:o=>{const{deltaX:n,deltaY:i}=(e=>{const{deltaX:t,deltaY:o,deltaMode:n}=e;switch(n){case e.DOM_DELTA_PIXEL:return{deltaX:-t,deltaY:-o};case e.DOM_DELTA_LINE:return{deltaX:15*-t,deltaY:15*-o};case e.DOM_DELTA_PAGE:return{deltaX:40*-t,deltaY:40*-o};default:return{deltaX:-t,deltaY:-o}}})(o);t&&o.preventDefault(),e({x:o.offsetX,y:o.offsetY,deltaX:n,deltaY:i,ctrlKey:o.ctrlKey||o.metaKey})}},e.zoomTime=L}));
//# sourceMappingURL=TimeComponentCanvas2D-6b4e6ead.js.map
