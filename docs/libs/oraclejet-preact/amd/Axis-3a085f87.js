define(['exports', 'preact/jsx-runtime', './labelUtils-94ba0619', './UNSAFE_Axis/themes/AxisStyles.css', './UNSAFE_Axis/themes/redwood/AxisTheme', './useComponentTheme-f77b756d', './classNames-2e65b3b3', './clientHints-aa2ccdd3'], (function(e,s,t,i,l,n,a,c){"use strict";function o({text:e,style:t,textProps:l,isTitle:n,isInteractive:o,id:r}){const x=c.getClientHints().browser;return s.jsx("text",{style:t,...l,class:a.classNames([o?i.styles.isInteractive:"",n?i.styles.axisTitle:i.styles.axisLabel,n||"safari"!==x?"":i.styles.middleBaseline]),id:r,children:e})}e.Axis=function({title:e,titleStyle:a,titleProps:c,tickLabels:r,tickLabelStyle:x,focusedGroupIndex:d,axisPosition:m,activeId:u,isTextInteractive:p}){const{classes:b}=n.useComponentTheme(l.AxisRedwoodTheme);return s.jsxs("g",{class:b,children:[e&&s.jsx(o,{text:e,textProps:c,style:a,isTitle:!0}),r.length>0&&s.jsx("g",{style:x,children:r.map((({label:e,labelProps:l,index:n},a)=>{const c=d===a;return s.jsxs(s.Fragment,{children:[c?s.jsx("rect",{...t.getEnclosingRectDims(l,m),class:i.styles.outlineRing}):"",s.jsx(o,{textProps:{...l,"data-oj-object":"group","data-oj-group-index":n},text:e,isInteractive:p?.(n),id:c?u:""})]})}))})]})}}));
//# sourceMappingURL=Axis-3a085f87.js.map
