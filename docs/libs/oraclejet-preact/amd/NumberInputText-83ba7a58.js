define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './useFocusableTextField-8b755b15', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useTextField-e6877c79', './Label-a4172af7', './PrefixSuffix-0efb3bc6', './usePrefixSuffix-09bd5925', './clientHints-030d25aa', './TextFieldInput-d6645f5b', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-a51060bb', './TextField-51daf13e', './LayerHost-e95c5f30', 'css!./LiveRegionStyles.styles.css', './logger-0f873e29', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-2a480664', './CompactUserAssistance-a7b3ffc0', './mergeProps-bcfa6a92', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-3b34c2bc', 'preact', 'css!./IconStyle.styles.css', './Popup-956e6d7d', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useCurrentValueReducer-faded381', './ChevronDown-62d49b8e', './ChevronUp-affd8a52', './Minus-6150a650', './Plus-b8b114d1', './IconButton-81c8463f', './useTranslationBundle-516b1b83', './Grid-160f4885', './useSpinning-d5dd87af', './useSelectableTextField-900d2860'], (function(e,s,i,t,n,a,o,l,r,d,u,c,p,b,x,f,v,m,h,S,y,F,C,P,T,A,g,U,I,R,j,D,w,L,E,V,B,N,k,_,q,H,M,O,G,W,z,K,Z,J,Q,X){"use strict";function Y({direction:e,isDisabled:i,children:t,onPointerDown:n,onPointerUp:a,onPointerOut:o,onPointerCancel:l}){const r=Z.useTranslationBundle("@oracle/oraclejet-preact"),d=r.inputNumber_increase(),u=r.inputNumber_decrease(),c="increase"===e?d:u;return s.jsx(F.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx("div",{"aria-hidden":"true",onPointerDown:n,onPointerUp:a,onPointerOut:o,onPointerCancel:l,children:s.jsx(K.IconButton,{isDisabled:i,tooltip:c,variant:"ghost",size:"sm",children:t})})})}function $({children:e}){return s.jsx(J.Grid,{align:"center",gap:"1x",gridTemplateColumns:"1fr 1fr",children:e})}const ee=i.forwardRef((({"aria-describedby":e,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":p,"aria-valuetext":x,assistiveText:h,autoComplete:S="off",autoFocus:y=!1,columnSpan:F,helpSourceLink:C,helpSourceText:P,isDisabled:T,isReadonly:I,isRequired:R=!1,isRequiredShown:j,isStepDownDisabled:D,isStepUpDisabled:w,hasSteppers:L=!1,stepperVariant:E="directional",label:V,labelEdge:B,labelStartWidth:N,messages:k,placeholder:_,prefix:q,suffix:H,textAlign:K,userAssistanceDensity:Z,value:J,variant:ee="default",virtualKeyboard:ie,onInput:te,onCommit:ne,onSpin:ae,onSpinComplete:oe,onStep:le,testId:re},de)=>{const{currentCommitValue:ue,dispatch:ce}=M.useCurrentValueReducer({value:J}),pe=t.useCallback((e=>{ce({type:"input",payload:e.value}),te?.(e)}),[te,ce]),be=t.useCallback((e=>{ce({type:"commit",payload:e.value}),ne?.(e)}),[ne,ce]),{isDisabled:xe,isReadonly:fe,labelEdge:ve,labelStartWidth:me,textAlign:he,userAssistanceDensity:Se}=o.useFormContext(),ye=T??xe,Fe=I??fe,Ce=B??ve,Pe=N??me,Te=K??he,Ae=Z??Se,ge=t.useRef(null),Ue=t.useRef(null),{focusProps:Ie,isFocused:Re,methods:je}=n.useFocusableTextField({isDisabled:ye,isReadonly:Fe,enabledElementRef:ge,readonlyElementRef:Ue}),{methods:De}=X.useSelectableTextField(ge);t.useImperativeHandle(de,(()=>U.mergeProps(je,De)),[je,De]);const{baseId:we,formFieldContext:Le,inputProps:Ee,labelProps:Ve,textFieldProps:Be,userAssistanceProps:Ne}=r.useTextField({ariaDescribedBy:e,helpSourceLink:C,helpSourceText:P,isDisabled:ye,isFocused:Re,isReadonly:Fe,isRequiredShown:j,labelEdge:Ce,messages:k,styleVariant:ee,userAssistanceDensity:Ae,value:J}),ke=ye||D,_e=ye||w,qe=t.useCallback((e=>{Re||ge.current?.focus(),le?.(e)}),[le,Re,ge]),{keyboardHandlerProps:He,pointerIncreaseHandlerProps:Me,pointerDecreaseHandlerProps:Oe}=Q.useSpinning({isStepDownDisabled:ke,isStepUpDisabled:_e,onSpin:ae,onSpinComplete:oe,onStep:qe}),Ge=L?s.jsx(Y,{direction:"decrease",isDisabled:ke,...Oe,children:"directional"===E?s.jsx(O.SvgChevronDown,{}):s.jsx(W.SvgMinus,{})}):void 0,We=L?s.jsx(Y,{direction:"increase",isDisabled:_e,...Me,children:"directional"===E?s.jsx(G.SvgChevronUp,{}):s.jsx(z.SvgPlus,{})}):void 0,ze=L&&"quantitative"===E?Ge:void 0,Ke=L?"directional"===E?s.jsxs($,{children:[Ge,We]}):We:void 0,Ze=void 0!==V&&"inside"===Ce,{shouldRenderPrefix:Je,shouldRenderSuffix:Qe,prefixProps:Xe,suffixProps:Ye,valuePrefixSuffix:$e,ariaLabelledBy:es}=c.usePrefixSuffix({baseId:we,hasEndContent:void 0!==Ke,hasInsideLabel:Ze,hasStartContent:void 0!==ze,hasValue:Le.hasValue,isDisabled:ye,isFocused:Re,labelId:Ve.id,prefix:q,suffix:H,value:J}),ss=Je?s.jsx(u.PrefixSuffix,{...Xe}):void 0,is=Qe?s.jsx(u.PrefixSuffix,{...Ye}):void 0,ts="none"!==Ce?s.jsx(d.Label,{...Ve,children:V}):void 0,ns={label:"none"!==Ce?ts:void 0,labelEdge:"none"!==Ce?Ce:void 0,labelStartWidth:"none"!==Ce?Pe:void 0},as="none"===Ce?V:void 0,os="efficient"===Ae||"reflow"===Ae?ye||Fe?"efficient"!==Ae?void 0:s.jsx(A.InlineUserAssistance,{userAssistanceDensity:Ae,...Ne}):s.jsx(A.InlineUserAssistance,{assistiveText:h,fieldLabel:V,helpSourceLink:C,helpSourceText:P,messages:k,isRequiredShown:j,userAssistanceDensity:Ae,...Ne}):void 0,ls=t.useRef(null),rs="compact"===Ae?s.jsx(g.CompactUserAssistance,{anchorRef:ls,messages:k,assistiveText:h,...Ne}):void 0;if(Fe){const e=s.jsx(f.ReadonlyTextFieldInput,{"aria-describedby":Ee["aria-describedby"],"aria-label":as,"aria-labelledby":Ve.id,as:"div",autoFocus:y,elementRef:Ue,textAlign:Te,value:$e,hasEmptyLabel:""===V&&"none"===Ce,hasInsideLabel:Ze});return s.jsx(l.FormFieldContext.Provider,{value:Le,children:s.jsx(v.ReadonlyTextField,{role:"presentation",columnSpan:F,compactUserAssistance:rs,inlineUserAssistance:os,onBlur:Ie.onFocusOut,onFocus:Ie.onFocusIn,ref:ls,mainContent:e,testId:re,...ns})})}const ds=void 0===p||p.toString()!==x?x:void 0,us=s.jsxs(s.Fragment,{children:[ss,s.jsx(b.TextFieldInput,{"aria-labelledby":es,"aria-label":as,"aria-valuemax":L?i:void 0,"aria-valuemin":L?a:void 0,"aria-valuenow":L?p:void 0,"aria-valuetext":L?ds:void 0,autoComplete:S,autoFocus:y,currentCommitValue:ue,hasEmptyLabel:""===V&&"none"===Ce,hasEndContent:void 0!==Ke,hasInsideLabel:Ze,hasPrefix:void 0!==ss,hasStartContent:void 0!==ze,hasSuffix:void 0!==is,inputRef:ge,isRequired:R,placeholder:_,role:L?"spinbutton":void 0,textAlign:Te,type:se()?ie:void 0,value:ye?$e:J,onCommit:be,onInput:pe,...Ee,...L?He:{}}),is]});return s.jsx(l.FormFieldContext.Provider,{value:Le,children:s.jsx(m.TextField,{startContent:ze,endContent:Ke,columnSpan:F,compactUserAssistance:rs,inlineUserAssistance:os,mainContent:us,onBlur:Ie.onFocusOut,onFocus:Ie.onFocusIn,mainFieldRef:ls,hasZeroStartMargin:L&&"quantitative"===E,testId:re,...Be,...ns})})}));function se(){const e=p.getClientHints().deviceType;return"phone"===e||"tablet"===e}e.NumberInputText=ee,e.stepperVariants=["directional","quantitative"]}));
//# sourceMappingURL=NumberInputText-83ba7a58.js.map
