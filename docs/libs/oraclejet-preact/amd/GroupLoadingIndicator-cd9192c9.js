define(['exports', 'preact/jsx-runtime', 'preact/hooks', './classNames-08d99695', './keys-cc1cb01d', './useId-c9578d26', './useViewportIntersect-b2d47a4b', './TabbableModeContext-a9c97640', './useComponentTheme-5aa41a8f', './useInteractionStyle-726087e0', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './PRIVATE_List/themes/ListStyles.css', './UNSAFE_GroupedList/themes/redwood/GroupedListTheme', './Flex-56ecdf4c', './Skeleton-5839404b', './List-3ebac3fc'], (function(e,i,t,s,o,n,a,r,d,l,c,u,p,b,v,x,y){"use strict";e.GROUP_SELECTOR="[data-oj-listview-group]",e.GroupLoadingIndicator=()=>i.jsx(y.SkeletonContainer,{minimumCount:3,children:e=>{const t={paddingLeft:10*e+"px"};return i.jsxs(v.Flex,{height:"12x",align:"center",children:[i.jsx("span",{style:t}),i.jsx(x.Skeleton,{height:"4x"})]})}}),e.ListGroupHeader=function({ariaDescribedBy:e,children:v,itemKey:x,itemIndex:y,itemDepth:m,isFocused:h,isFocusRingVisible:g,isActive:S,isGridlineVisible:f,isExpandable:j,expandedKeys:I,viewportConfig:E}){const[T,C]=t.useState(!1),{classes:H,styles:L}=d.useComponentTheme(b.GroupedListRedwoodTheme),{interactionProps:R,applyHoverStyle:k,applyPseudoHoverStyle:w,applyActiveStyle:V}=l.useInteractionStyle(),G=[p.listGroupHeaderMultiVariantStyles({expandable:j?"isExpandable":"notExpandable",needsEventsHover:k?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:w?"isPseudoHover":"notPseudoHover",active:V||S?"isActive":"notActive",focusRingVisible:g&&h?"isFocusRingVisible":"notFocusRingVisible",gridlineTop:y>0?"visible":"hidden",gridlineBottom:f?"visible":"hidden"})];T&&(G.push(H),G.push(L.stuckHeader));const F=s.classNames(G),N=c.mergeInterpolations([...Object.values(u.flexitemInterpolations)]),{class:P,...A}=N({alignSelf:"center",flex:"1 0 auto"});return a.useViewportIntersect({scroller:()=>j?null:null==E?document.body:E.scroller()},0,1,"[data-oj-key="+x+"]",(()=>{C(!1)}),(e=>{e.boundingClientRect.y!==e.intersectionRect.y&&C(!0)})),i.jsx("div",{id:n.useId(),role:"row","aria-rowindex":y+1,"aria-level":isNaN(m)?void 0:m+1,"data-oj-key":x,class:F,..."number"==typeof x&&{"data-oj-key-type":"number"},...R,children:i.jsx("div",{id:n.useId(),role:"gridcell","aria-describedby":e,"aria-colindex":1,"aria-expanded":o.containsKey(I,x),style:A,children:i.jsx(r.TabbableModeContext.Provider,{value:{isTabbable:!1},children:v})})})},e.STICKY_SELECTOR="[data-oj-listview-sticky]"}));
//# sourceMappingURL=GroupLoadingIndicator-cd9192c9.js.map
