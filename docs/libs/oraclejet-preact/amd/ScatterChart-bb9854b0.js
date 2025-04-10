define(['exports', 'preact/jsx-runtime', './layoutUtils-c2938c54', './useChartDnd-947ed9e4', './LineSeries-797d8d16', './dataStyleUtils-7ba616b8', './useUser-3ef25571', './colorUtils-a785c4c4', './accUtils-530bdb90', './Chart-3621e125'], (function(e,t,i,n,r,s,o,a,d,l){"use strict";e.ScatterChart=function({width:e,height:d,selectedIds:h=[],hiddenIds:g=[],highlightedIds:c,hideAndShowBehavior:I="none",orientation:x="vertical",yAxis:u,series:f,groups:m,getDataItem:S,selectionMode:v="none",drilling:y="off",dataLabelEffect:p="outline",lineType:C="none",...D}){const{direction:b,forcedColors:A}=o.useUser(),w="active"===A,L=void 0!==D.testId,M="rtl"===b,T="log"===u?.scale,U=D.xAxis?.timeAxisType,E=new Set(g),j=new Set(h),k=new Set(c),F="horizontal"===x,z=a.getColorRamp(),N=n.getSeriesData(f?.length,m?.length,S,E,T),P=(e,t)=>S(e,t),R=n.getMarkers();return t.jsx(l.Chart,{width:e,height:d,selectedIds:j,hiddenIds:g,hideAndShowBehavior:I,orientation:x,yAxis:u,series:f,groups:m,overview:"off",defaultOverviewContentRenderer:()=>null,selectionMode:v,drilling:y,getDataItem:S,findNearest:(e,t)=>i.findNearestDataPoint(f,m,e,t,P,!1,(()=>({offset:0,dataWidth:0})),((e,t)=>t.transform(e)),T,0,E,U),getDataItemPos:(e,t)=>(i,n)=>{const r=N[i][n];if(null==r?.x&&r?.y)return;return{x:e.transform(r?.x),y:t.transform(r?.y),height:0,width:0}},getMarkerInfo:(e,t)=>({color:s.getItemColor(e,t,f,S),type:s.getMarkerType(e,t,S)}),renderGridLinesInFront:!0,isDataXAxis:!0,getNavUtil:(e,t)=>s.getLineAreaChartNavUtil(S,f.length,e,t,!1,M,F),getGapRatio:()=>1,offset:.2,isRtl:M,...D,children:({xStartIndex:e,xEndIndex:i,xScale:s,yScale:o,activeId:a,focusedItemInfo:d,hoveredItemInfo:l,isPointInsideMarquee:h,defaultFontSize:g,getTextDimensions:I})=>t.jsx(t.Fragment,{children:N.map(((u,b)=>{if(0===u.length)return;const A=f[b],M="none"!==C,E=n.getLineAreaSegments(o,s,u,e,i,F,T,m,b,P,U,!0),N=void 0===c||0===c.length||k.has(A.id);return t.jsxs(t.Fragment,{children:[M&&t.jsx(r.LineSeries,{lineType:C,lineColor:A.lineColor,lineWidth:A.lineWidth,lineStyle:A.lineStyle,color:A.lineColor||z[b%z.length],lineSegmentCoords:E,isHorizontal:F,isHighlighted:N,seriesIndex:b}),t.jsx(r.MarkersWithLabel,{yScale:o,xScale:s,groups:m,series:A,timeAxisType:U,color:A.lineColor||z[b%z.length],seriesIndex:b,startIndex:e,endIndex:i,markerType:R[b%R.length],orientation:x,isLog:T,activeId:a,getDataItem:S,isPointInsideMarquee:h,selectedIds:j,highlightedIds:void 0!==c?k:void 0,focusedItemIndex:d.seriesIndex!==b||!d.isFocusVisible||D.isDataCursorEnabled&&D.dataCursorStyle?.isMarkerDisplayed?void 0:d.groupIndex,hoveredItemIndex:l?.isCurrent&&l.seriesIndex===b?l.groupIndex:void 0,isSelectionEnabled:"single"===v||"multiple"===v,isDrillEnabled:"on"===y,defaultFontSize:g,dataLabelEffect:p,isHighContrast:w,isTestEnv:L,isDataXAxis:!0,getTextDimensions:I})]})}))})})}}));
//# sourceMappingURL=ScatterChart-bb9854b0.js.map
