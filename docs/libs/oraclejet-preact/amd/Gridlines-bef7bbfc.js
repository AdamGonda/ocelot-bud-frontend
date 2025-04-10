define(['exports', 'preact/jsx-runtime', './PRIVATE_PlotArea/themes/PlotAreaStyles.css', './hooks/PRIVATE_useVisDnd/themes/VisDndStyles.css', './classNames-08d99695', './useColorScheme-443e7cc7'], (function(e,s,t,i,n,l){"use strict";function o(e,s,t){return{x1:s?e.x+e.width:e.x,x2:s?e.x+e.width:e.x,y1:e.y,y2:e.y+e.height,stroke:t?.lineColor,strokeWidth:t?.lineWidth}}const r={yMajorTick:{isRendered:!0},yMinorTick:{isRendered:!1},xMajorTick:{isRendered:!1},xMinorTick:{isRendered:!1}};e.Gridlines=function({plotArea:e=r,yMinorTicks:i,xMinorTicks:o,xScale:d,yScale:a,isLog:c,yTicks:y,xTicks:h,yAxisPosition:k,isDataXAxis:x}){const S="top"===k||"bottom"===k,[$,L]=d.range(),[m,M]=a.range();let T="",g="",f="",u="";const{yMajorTick:j,yMinorTick:p,xMajorTick:v,xMinorTick:R}=e,A={...r.yMajorTick,...j},W={...r.yMinorTick,...p},P={...r.xMinorTick,...R},C={...r.xMajorTick,...v},b=!0===W?.isRendered||c,w=!0===C?.isRendered||!1===v?.isRendered&&x;if(A?.isRendered)for(let e=1;e<y.length;e++){let s=a.transform(y[e]);e===y.length-1&&(s+=S?-1:1),T+=S?`M${s},${$}L${s},${L}`:`M${$},${s}L${L},${s}`}if(w&&h)for(let e=1;e<h.length;e++){const s=d.transform(h[e]);g+=S?`M${m},${s}L${M},${s}`:`M${s},${m}L${s},${M}`}if(b)for(let e=0;e<i.length;e++){const s=a.transform(i[e]);f+=S?`M${s},${$}L${s},${L}`:`M${$},${s}L${L},${s}`}if(P.isRendered&&o)for(let e=0;e<o.length;e++){const s=d.transform(o[e]);u+=S?`M${m},${s}L${M},${s}`:`M${s},${m}L${s},${M}`}const E=l.useColorScheme();return s.jsxs(s.Fragment,{children:[A?.isRendered&&s.jsx("path",{d:T,class:n.classNames([t.styles.noPointerEvents,t.styles.majorTickLineStyles,"dashed"===A?.lineStyle?t.styles.dashedLine:void 0,"dotted"===A?.lineStyle?t.styles.dottedLine:void 0]),style:{stroke:A.lineColor,strokeWidth:A.lineWidth}}),w&&s.jsx("path",{d:g,class:n.classNames([t.styles.noPointerEvents,t.styles.majorTickLineStyles,"dashed"===C?.lineStyle?t.styles.dashedLine:void 0,"dotted"===C?.lineStyle?t.styles.dottedLine:void 0]),style:{stroke:C.lineColor,strokeWidth:C.lineWidth}}),b&&s.jsx("path",{d:f,class:n.classNames([t.styles.noPointerEvents,t.styles.minorTickLineStyles,"light"===E?t.styles.lightMinorTickLineStroke:t.styles.darkMinorTickLineStroke,"dashed"===W?.lineStyle?t.styles.dashedLine:void 0,"dotted"===W?.lineStyle?t.styles.dottedLine:void 0]),style:{stroke:W?.lineColor,strokeWidth:W?.lineWidth}}),P.isRendered&&s.jsx("path",{d:u,class:n.classNames([t.styles.noPointerEvents,t.styles.minorTickLineStyles,"light"===E?t.styles.lightMinorTickLineStroke:t.styles.darkMinorTickLineStroke,"dashed"===P?.lineStyle?t.styles.dashedLine:void 0,"dotted"===P?.lineStyle?t.styles.dottedLine:void 0]),style:{stroke:P?.lineColor,strokeWidth:P?.lineWidth}})]})},e.PlotArea=function({color:e,yScale:l,isLog:r,availSpace:d,xAxisPosition:a,cursor:c,isDataXAxis:y,isRtl:h,hasAxisLine:k,dragOverStyle:x}){const S=!r&&l.domain()[0]<0&&l.domain()[1]>0,$=function(e,s,t){return{x1:"right"===s?e.x+e.width:e.x,x2:"left"===s?e.x:e.x+e.width,y1:"bottom"===s?e.y+e.height:e.y,y2:"top"===s?e.y:e.y+e.height,stroke:t?.lineColor,strokeWidth:t?.lineWidth}}(d,a),L=function(e,s,t){let i,n,l,o;return"bottom"===t?(i=e.x,n=e.x+e.width,l=s,o=s):(i=s,n=s,l=e.y,o=e.y+e.height),{x1:i,x2:n,y1:l,y2:o}}(d,l.transform(0),a),m=[];switch(x){case"accept":m.push(i.styles.dndDragOverSvgStyle);break;case"reject":m.push(i.styles.dndRejectedStyle),m.push(t.styles.plotAreaStyle);break;case"none":m.push(t.styles.plotAreaStyle)}return s.jsxs(s.Fragment,{children:[s.jsx("rect",{...d,class:n.classNames(m),style:{fill:"accept"===x?void 0:e,cursor:c}}),y&&s.jsx("line",{...o(d,h),class:t.styles.axisLineStyle}),k&&s.jsx("line",{...$,class:t.styles.axisLineStyle}),S&&s.jsx("line",{...L,class:t.styles.baseLineStyle})]})}}));
//# sourceMappingURL=Gridlines-bef7bbfc.js.map
