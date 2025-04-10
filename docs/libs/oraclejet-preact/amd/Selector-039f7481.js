define(['exports', 'preact/jsx-runtime', 'preact/hooks', './keys-cc1cb01d', './UNSAFE_Selector/themes/SelectorStyles.css', './StyledCheckbox-9006dc18', './useActive-7bb6fdc1', './useFocus-4194fc59', './useTestId-3a316499', './useHover-7964884c'], (function(e,s,t,c,o,a,l,r,i,n){"use strict";const u=(e,s,t,c,o)=>{if(o){o({value:d(s,t,c),target:e.target}),e.stopPropagation()}},d=(e,s,t)=>{let o;return o=c.containsKey(s,e)?c.removeKey(s,e,!1):"single"===t?{all:!1,keys:new Set([e])}:c.addKey(s,e),o},y=e=>{" "==e.key?e.preventDefault():"Enter"==e.key&&e.stopPropagation()};e.Selector=function({"aria-label":e,"aria-labelledby":d,rowKey:b,selectedKeys:k,isPartial:p,selectionMode:v="multiple",onChange:f,testId:h}){const K=t.useRef(null),{isActive:S,activeProps:C}=l.useActive(),{isFocus:g,focusProps:x}=r.useFocus(),{onKeyUp:P,...A}=C,{isHover:F,hoverProps:m}=n.useHover(),w=t.useCallback((e=>{const{key:s}=e;void 0!==s&&" "!==s||u(e,b,k,v,f)}),[b,k,v,f]),H=t.useCallback((e=>{P(e),w(e)}),[P,w]),j=t.useCallback((e=>{K.current?.focus(),w(e)}),[w]),I=p?"partial":c.containsKey(k,b)?"checked":"unchecked",U=i.useTestId(h);return s.jsx("div",{class:o.styles.base,onClick:j,onKeyUp:H,...A,...U,...m,children:s.jsx(a.StyledCheckbox,{ref:K,isHover:F,isActive:S,isChecked:I,isFocusRingShown:g,"aria-label":e,"aria-labelledby":d,onKeyDown:y,...x})})}}));
//# sourceMappingURL=Selector-039f7481.js.map
