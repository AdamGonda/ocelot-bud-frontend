define(['exports', './useContextMenu-e08aad46', 'preact/jsx-runtime', './Menu-5d447084', './MenuItem-87cd59b8', 'preact/hooks', 'preact', './logger-0f873e29', './LayerHost-639b3284', 'preact/compat', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './SelectMenuGroupContext-67f24a8f', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./MenuSeparatorStyles.styles.css', 'module', './UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', './eventsUtils-edf8f4e5', './accUtils-530bdb90', './layoutUtils-8805fc5b'], (function(e,t,o,s,n,i,r,a,u,d,c,l,x,p,f,y,M,m,C,g,I,S,b){"use strict";e.useChartContextMenu=({isRtl:e,width:o,getDataItemPosition:s,getDataItem:n,focusedItemInfo:i,series:r,groups:a,rootRef:u,xAxisTitle:d,yAxisTitle:c,contextMenuConfig:l,onContextMenuDismissed:x})=>{const{contextMenuProps:p,contextMenuContent:f}=t.useContextMenu({onContextMenuHandler:({gesture:t,target:l})=>{const{context:x}=function(e,t,o,s,n,i,r,a,u){let d,c,l;if("keyboard"===t)c=e.groupIndex,d=e.seriesIndex;else{const e=I.getInfo(i,o);d=e?e.seriesIndex:void 0,c=e?e.groupIndex:void 0}if(void 0!==d&&void 0!==c&&u?.(d,c))l={data:u(d,c),groupIndex:c,seriesIndex:d,type:"item"};else if(void 0!==d)l={data:s[d],type:"series"};else if(void 0!==c)l={data:n[c],type:"xAxisTickLabel"};else{const e=event?.target,o=e?.textContent;l=o&&"keyboard"!==t&&o===r||o===a?{type:"axisTitle",axis:o===r?"x":"y"}:{type:"background"}}return{context:l}}(i,t,l,r,a,u,d,c,n);if("keyboard"===t&&"item"===x.type){const t=i?.isCurrent?s(i.seriesIndex,i.groupIndex):void 0;return{type:"offset",context:x,offsetValue:b.calculateOffset(e,o,t),isRtl:e,width:o}}return{type:"pointer",context:x}},contextMenuOptions:{isDisabled:!l},rootRef:u,contextMenuConfig:l,onContextMenuDismissed:x});return{contextMenuContent:f,contextMenuProps:p}}}));
//# sourceMappingURL=useChartContextMenu-8606bfa2.js.map
