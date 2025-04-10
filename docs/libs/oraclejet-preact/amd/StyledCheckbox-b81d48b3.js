define(['exports', 'preact/jsx-runtime', 'preact/compat', './Check-0d56c89d', './CheckboxOff-769431c4', './CheckboxOn-57ac4338', './CheckboxMixed-6a2b224d', './HiddenAccessible-b4126946', './useComponentTheme-f77b756d', './UNSAFE_Checkbox/themes/CheckboxIconContract.css', './UNSAFE_Checkbox/themes/redwood/CheckboxIconTheme', './TabbableModeContext-8858ed6b', './useTabbableMode-913efe07'], (function(e,o,c,a,n,i,d,s,b,l,r,h,t){"use strict";const x=c.forwardRef((({onClick:e,isActive:c,isFocusRingShown:h,isDisabled:x,isReadonly:k,isRequired:C,isChecked:u="unchecked",id:m,name:y,value:f,onKeyUp:p,onKeyDown:v,onChange:S,onFocus:g,onBlur:F,"aria-label":T,"aria-labelledby":A,"aria-describedby":R},j=null)=>{const{isTabbable:w}=t.useTabbableMode(),D="partial"===u,I="checked"===u||D,M=!!I&&(!D||"mixed"),{classes:O}=b.useComponentTheme(r.CheckboxIconRedwoodTheme,{disabled:x?"isDisabled":"notDisabled",checked:I?"isChecked":"notChecked",readonly:k?"isReadonly":"notReadonly",active:c?"isActive":"notActive",focus:h?"isFocused":"notFocused",iconSize:"4xUnits"}),U=k?I?a.SvgCheck:n.SvgCheckboxOff:I?D?d.SvgCheckboxMixed:i.SvgCheckboxOn:n.SvgCheckboxOff;return o.jsxs(o.Fragment,{children:[o.jsx(s.HiddenAccessible,{children:o.jsx("input",{...k?{"aria-readonly":!0}:{},"aria-checked":M,"aria-label":T,"aria-labelledby":A,"aria-describedby":R,"aria-required":C,ref:j,name:y,value:f,onKeyUp:p,onKeyDown:v,onBlur:F,onChange:S,onFocus:g,id:m,type:"checkbox",disabled:x,checked:I,tabIndex:w?0:-1})}),o.jsx("span",{className:O,"aria-hidden":"true",onClick:e,role:"img",children:o.jsx(U,{size:l.checkboxIconVars.iconSize,color:"currentColor"})})]})}));e.StyledCheckbox=x}));
//# sourceMappingURL=StyledCheckbox-b81d48b3.js.map
