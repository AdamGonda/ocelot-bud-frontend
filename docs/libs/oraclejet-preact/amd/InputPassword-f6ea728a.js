define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './useFocusableTextField-8b755b15', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useTextField-e6877c79', './useHover-7964884c', './Label-3912beb2', './keyboardUtils-fbb389f8', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './TextField-1021f00b', './useTranslationBundle-d07d4b20', 'css!./LiveRegionStyles.styles.css', './LayerHost-639b3284', './logger-0f873e29', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', './useToggle-a29f97af', './mergeProps-bcfa6a92', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useClearIcon-05225968', './componentUtils-c14d7fce', './ClearIcon-de20285c', './useCurrentValueReducer-faded381', './useSelectableTextField-900d2860', './RevealToggleIcon-f975229d'], (function(e,s,t,a,o,l,n,i,d,r,c,u,p,b,m,h,y,x,F,f,T,v,C,S,A,g,I,R,U,w,P,E,L,j,V,_,k,D,B,N,H,q,W,O,$,G,M,z,J){"use strict";const K=t.forwardRef((({"aria-describedby":e,assistiveText:t,autoComplete:l="off",autoFocus:u=!1,columnSpan:b,hasClearIcon:F,hasRevealToggle:f="always",helpSourceLink:T,helpSourceText:v,isDisabled:C,isReadonly:S,isRequired:A=!1,isRequiredShown:w,label:P,labelEdge:E,labelStartWidth:L,messages:j,placeholder:V,textAlign:_,userAssistanceDensity:k,value:D,variant:B="default",onInput:N,onCommit:H,testId:q},W)=>{const{currentCommitValue:K,dispatch:Q}=M.useCurrentValueReducer({value:D}),X=a.useCallback((e=>{Q({type:"input",payload:e.value}),N?.(e)}),[N,Q]),Y=a.useCallback((e=>{Q({type:"commit",payload:e.value}),H?.(e)}),[H,Q]),{isDisabled:Z,isReadonly:ee,labelEdge:se,labelStartWidth:te,textAlign:ae,userAssistanceDensity:oe}=n.useFormContext(),le=C??Z,ne=S??ee,ie=E??se,de=L??te,re=_??ae,ce=k??oe,{bool:ue,setFalse:pe,setTrue:be}=R.useToggle(!1),me=a.useRef(null),he=a.useRef(null),{focusProps:ye,isFocused:xe,methods:Fe}=o.useFocusableTextField({enabledElementRef:me,readonlyElementRef:he,isDisabled:le,isReadonly:ne,onBlurWithin:pe}),{methods:fe}=z.useSelectableTextField(me);a.useImperativeHandle(W,(()=>U.mergeProps(Fe,fe)),[Fe,fe]);const{hoverProps:Te,isHover:ve}=r.useHover({isDisabled:ne||le||!1}),{formFieldContext:Ce,inputProps:Se,labelProps:Ae,textFieldProps:ge,userAssistanceProps:Ie}=d.useTextField({ariaDescribedBy:e,helpSourceLink:T,helpSourceText:v,isDisabled:le,isFocused:xe,isReadonly:ne,isRequiredShown:w,labelEdge:ie,messages:j,styleVariant:B,userAssistanceDensity:ce,value:D}),Re=a.useCallback((()=>{ue?pe():be()}),[ue,pe,be]),Ue=x.useTranslationBundle("@oracle/oraclejet-preact"),we=Ue.inputPassword_hidden(),Pe=Ue.inputPassword_show(),Ee=Ue.inputPassword_hide(),Le=le||"always"!==f?null:s.jsx(J.RevealToggleIcon,{accessibleLabel:we,isRevealed:ue,onToggle:Re,tooltipHide:Ee,tooltipShow:Pe,testId:`${q}_toggleicon`}),je=a.useCallback((()=>{me.current?.focus(),X?.({previousValue:D,value:""})}),[X,D,me]),Ve=O.useClearIcon({clearIcon:s.jsx(G.ClearIcon,{onClick:je,testId:`${q}_clearicon`}),display:F,hasValue:Ce.hasValue,isFocused:xe,isEnabled:!ne&&!le,isHover:ve}),_e=$.beforeVNode(Le,Ve),ke="none"!==ie?s.jsx(c.Label,{...Ae,children:P}):void 0,De={label:"none"!==ie?ke:void 0,labelEdge:"none"!==ie?ie:void 0,labelStartWidth:"none"!==ie?de:void 0},Be="none"===ie?P:void 0,Ne="efficient"===ce||"reflow"===ce?le||ne?"efficient"!==ce?void 0:s.jsx(g.InlineUserAssistance,{userAssistanceDensity:ce,...Ie}):s.jsx(g.InlineUserAssistance,{assistiveText:t,helpSourceLink:T,helpSourceText:v,messages:j,isRequiredShown:w,userAssistanceDensity:ce,...Ie}):void 0,He=a.useRef(null),qe="compact"===ce?s.jsx(I.CompactUserAssistance,{anchorRef:He,messages:j,assistiveText:t,...Ie}):void 0;if(ne){const e=s.jsx(m.ReadonlyTextFieldInput,{"aria-describedby":Se["aria-describedby"],"aria-label":Be,"aria-labelledby":Ae.id,as:"input",autoFocus:u,elementRef:he,textAlign:re,type:"password",value:D,hasEmptyLabel:""===P&&"none"===ie,hasInsideLabel:void 0!==P&&"inside"===ie});return s.jsx(i.FormFieldContext.Provider,{value:Ce,children:s.jsx(h.ReadonlyTextField,{role:"presentation",columnSpan:b,compactUserAssistance:qe,inlineUserAssistance:Ne,ref:He,mainContent:e,testId:q,...De})})}const We=s.jsx(p.TextFieldInput,{"aria-label":Be,autoComplete:l,autoFocus:u,currentCommitValue:K,hasEndContent:!(!Ve&&!Le),hasEmptyLabel:""===P&&"none"===ie,hasInsideLabel:void 0!==ke&&"inside"===ie,inputRef:me,isRequired:A,onInput:X,onCommit:Y,placeholder:V,textAlign:re,value:D,type:ue?"text":"password",...Se});return s.jsx(i.FormFieldContext.Provider,{value:Ce,children:s.jsx(y.TextField,{columnSpan:b,endContent:_e,inlineUserAssistance:Ne,compactUserAssistance:qe,mainContent:We,onBlur:ye.onFocusOut,onFocus:ye.onFocusIn,mainFieldRef:He,testId:q,...ge,...De,...Te})})}));e.InputPassword=K}));
//# sourceMappingURL=InputPassword-f6ea728a.js.map
