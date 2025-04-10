define(['exports', 'preact/jsx-runtime', './Label-a4172af7', 'preact/hooks', 'preact/compat', './TextFieldInput-d6645f5b', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-a51060bb', './Flex-56ecdf4c', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', 'css!./LabelValueLayoutStyles.styles.css', './logger-0f873e29', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-372087af', './LayerHost-e95c5f30', './useTranslationBundle-516b1b83', 'css!./LiveRegionStyles.styles.css', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-2a480664', './CompactUserAssistance-a7b3ffc0', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-3b34c2bc', 'preact', 'css!./IconStyle.styles.css', './Popup-956e6d7d', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useFocusableTextField-8b755b15', './useLoadingIndicatorTimer-20a3bf5f', './useTextField-e6877c79', './useSelectCommon-94d5e5bb', './useAccessibleContext-23e8a333', './textAlign-ef924afd', './useFormFieldContext-8196183c', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './TextField-51daf13e', './UNSAFE_SelectMultiple/themes/SelectedValuesCountStyles.css', './Chip-3062b3d3', './IconButton-81c8463f', './CancelS-cb35e8a5', './useFocusWithin-5a504fca', './useUser-85c781ea', './keyboardUtils-244467a7', './classNames-08d99695', './dimensions-60420dbb', './mergeInterpolations-9ede4cf7', './HiddenAccessible-037ef42d', './Text-e132dec0', './Close-5f7dff3d', './useId-c9578d26', './UNSAFE_SelectMultiple/themes/TextTagStyles.css', './UNSAFE_SelectMultiple/themes/TextTagListStyles.css', './LiveRegion-8142ed0d', './View-ce970ed7', './UNSAFE_SelectMultiple/themes/MobileDropdownFooterStyles.css', './Button-89a64825', './useEffectEvent-8467275b', './equals-e73adbe3', './mergeProps-bcfa6a92', './stringUtils-0ae982c2'], (function(e,s,t,o,n,l,i,a,r,d,c,u,p,h,y,b,m,x,S,v,f,w,T,F,g,C,D,A,I,R,L,E,k,K,V,U,j,B,P,O,M,N,_,H,z,q,Y,W,$,G,Z,J,Q,X,ee,se,te,oe,ne,le,ie,ae,re,de,ce,ue,pe,he,ye,be,me,xe,Se,ve,fe,we,Te,Fe,ge,Ce,De,Ae,Ie,Re,Le,Ee){"use strict";function ke({assistiveText:e,collectionRenderer:t,collectionRendererContext:o,data:n,dropdownId:l,dropdownRef:i,helpSourceLink:a,helpSourceText:r,isAddToListShown:d,isDisabled:c,isDropdownAbove:u,isEmptyResults:p,isOpen:h,isReadonly:y,label:b,mainFieldRef:m,userAssistanceDensity:x,onAddToListAction:S,onAutoDismiss:v,onPosition:f}){const w=V.useTranslationBundle("@oracle/oraclejet-preact"),T=!h||u||c||y||!e&&!a||"efficient"!==x&&"reflow"!==x?void 0:s.jsx(se.DropdownUserAssistance,{assistiveText:e,fieldLabel:b,helpSourceLink:a,helpSourceText:r,userAssistanceDensity:x}),F=p?d?void 0:s.jsx(se.EmptyResults,{}):t(o),g=d?s.jsx(se.LinkItem,{isHighlighted:p,onAction:S,children:w.select_addToList()}):void 0;return s.jsxs(se.Dropdown,{dropdownRef:i,id:l,isOpen:h,anchorRef:m,onAutoDismiss:v,onPosition:f,children:[s.jsxs(se.DropdownList,{hasBottomGap:void 0===T,isLoading:null===n,children:[F,g]}),T]})}function Ke({"aria-label":e,count:t=0,onKeyDown:o,onKeyUp:n,onMouseDown:l,...i}){const a=V.useTranslationBundle("@oracle/oraclejet-preact"),r=a.selectMultiple_showSelectedValues(),d=e?`${e}. `:"",c=a.selectMultiple_countPlus({COUNT:"99"}),u=t>99?`${c}`:`${t}`,p=`${d}${a.selectMultiple_valuesSelected({VALUE_COUNT:`${t}`})} ${r}`;return s.jsx("div",{class:re.selectedValueCountStyles.base,onKeyDown:o,onKeyUp:n,onMouseDown:l,children:s.jsx(de.Chip,{"aria-label":p,...i,children:u})})}function Ve({children:e,columnSpan:t,fieldLabel:o,hasInsideLabel:n,isBackButtonShown:l,isClearButtonShown:i,isDropdownArrowShown:a,isDropdownSelectedOnlyView:r,isSelectedValuesCountShown:c,selectedValuesCount:u,onBackButtonClick:p,onClearButtonClick:h,onDropdownArrowClick:y,onSelectedValuesCountKeyDown:b,onSelectedValuesCountKeyUp:m,onSelectedValuesCountMouseDown:x,onSelectedValuesCountToggle:S,...v}){const{isDisabled:f,isLoading:w}=ne.useFormFieldContext(),T=V.useTranslationBundle("@oracle/oraclejet-preact"),F=l?s.jsx(ce.IconButton,{"aria-label":T.selectMultiple_back(),size:"xs",variant:"ghost",onAction:p,children:s.jsx(ue.SvgNavLeft,{})}):null,g=i?s.jsx(ce.IconButton,{"aria-label":T.formControl_clear(),size:"sm",variant:"ghost",onAction:h,children:s.jsx(ue.SvgCancelS,{})}):null,C=a?s.jsx(se.DropdownArrow,{isDisabled:f,onClick:y,testId:`${v.testId}_dropdownarrow`}):null,D=w?void 0:c?s.jsxs(d.Flex,{align:"center",justify:"center",gap:[0,"1x"],children:[s.jsx(Ke,{"aria-label":o,count:u,isDisabled:f,isSelected:r,onKeyDown:b,onKeyUp:m,onMouseDown:x,onToggle:S}),i&&g,a&&C]}):s.jsxs(s.Fragment,{children:[i&&g,a&&C]});return s.jsx(ae.TextField,{columnSpan:t,startContent:l&&F,mainContent:e,endContent:D,...v})}function Ue({children:e,removeIcon:t="never",isSelected:n=!1,onRemoveAction:l,onSelect:i,onRemoveIconClick:a,isFocused:r,value:d}){const c=V.useTranslationBundle("@oracle/oraclejet-preact"),u=o.useRef(null),p=we.useId(),h=be.classNames([Te.textTagStyles.base,n&&Te.textTagStyles.selected]),y=o.useCallback((()=>{l?.(d)}),[d,l]),b=o.useCallback((()=>{i?.(d)}),[d,i]),m=o.useCallback((()=>{a?.(d)}),[d,a]),x=o.useCallback((e=>{ye.isBackspaceOrDelete(e)&&y()}),[y]);return o.useEffect((()=>{r&&n&&(u.current?.focus(),u.current?.scrollIntoView({block:"nearest"}))}),[r,n]),s.jsxs(s.Fragment,{children:[s.jsxs("span",{ref:u,class:h,tabIndex:-1,onClick:b,onKeyUp:x,onMouseDown:se.preventDefault,role:"option","aria-describedby":p,"aria-selected":n?"true":"false",children:[s.jsx(ve.Text,{size:"md",variant:"inherit",children:e}),"always"===t&&s.jsx(j.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx(ce.IconButton,{size:"xs",variant:"ghost",onAction:m,children:s.jsx(fe.SvgClose,{})})})]}),s.jsx(Se.HiddenAccessible,{id:p,children:c.selectMultiple_removeSelectedTagInstructionText()})]})}const je=Array.from(["maxWidth"],(e=>me.dimensionInterpolations[e])),Be=xe.mergeInterpolations(je);const Pe=n.forwardRef((function(e,t=(()=>{})){const{"aria-label":n,data:l,hasInsideLabel:i=!1,removeIcon:a="never",onExitNavigation:r,onRemove:d}=e,c=o.useRef(null),[u,p]=o.useState([]),{direction:h}=he.useUser(),y=o.useRef(-1),b=l.at(-1)?.value,m=o.useRef({value:b,index:l.length-1});m.current={value:b,index:l.length-1};const x=o.useCallback((e=>{const s=l.at(e)?.value;null!=s&&p([s])}),[l]),S=o.useCallback((()=>{p((e=>(y.current=-1,e.length?[]:e)))}),[]),v=o.useCallback((e=>{d?.([e]),r?.(),S()}),[S,r,d]),f=o.useCallback((e=>{const s=[...u];u.includes(e)||s.push(e),d?.(s),r?.(),S()}),[u,S,r,d]),w=o.useCallback((e=>{p([e]),y.current=l.findIndex((s=>s.value===e))}),[l,p]),T=o.useCallback((e=>{if(0!==l.length){if("ltr"===h&&"ArrowLeft"===e.code||"rtl"===h&&"ArrowRight"===e.code){if(0===y.current)return;return y.current-=1,void x(y.current)}return"ltr"===h&&"ArrowRight"===e.code||"rtl"===h&&"ArrowLeft"===e.code?y.current===l.length-1?void r?.():(y.current+=1,void x(y.current)):"Home"===e.code?(y.current=0,void x(y.current)):"End"===e.code?(y.current=l.length-1,void x(y.current)):ye.isSelectAll(e)?(p(l.map((e=>e.value))),void e.preventDefault()):void 0}}),[l,h,r,x,p]),F=o.useCallback((()=>{p((e=>e.length||void 0===m.current.value?e:(y.current=m.current.index,[m.current.value])))}),[]),g=o.useCallback((()=>{S()}),[S]),{focusProps:C}=pe.useFocusWithin({onBlurWithin:g});o.useImperativeHandle(t,(()=>({blur:g,focus:F})),[g,F]),o.useEffect((()=>{c.current?.scrollTo({left:c.current.scrollWidth*("ltr"===h?1:-1)})}),[l,h]);const D=Be(e),A=be.classNames([Fe.textTagListStyles.textTagListBase,i&&Fe.textTagListStyles.textTagListInsideLabel]);return s.jsx("div",{class:A,ref:c,tabIndex:-1,onKeyDown:T,role:"listbox","aria-label":n,"aria-multiselectable":"true",style:D,...C,children:l.map(((e,t)=>s.jsx(Ue,{isFocused:y.current===t,isSelected:u.includes(e.value),onRemoveAction:f,onSelect:w,onRemoveIconClick:v,removeIcon:a,value:e.value,children:e.label},e.value)))})}));function Oe({displayValue:e,isAddToListShown:t,isKeyboardNavigable:n,isTextTagListShown:i,isUserFiltering:a,liveRegionText:r,onExitNavigation:c,onRemove:u,removeIcon:p,selectedValuesDescriptionId:h,selectedValuesKeyboardNavDescriptionId:y,textTagListData:b,textTagListRef:m,userInput:x,virtualKeyboard:S,...v}){const f=V.useTranslationBundle("@oracle/oraclejet-preact"),w=t?f.select_addToListAvailable():void 0,T=n&&e&&e.length>0?f.selectMultiple_highlightSelectedTagsInstructionText():void 0,{isInputFocused:F}=ne.useFormFieldContext(),[g,C]=o.useState(T),[D,A]=o.useState(!1);return F&&i&&!g&&T&&!D?A(!0):F||!D||A(!1),g!==T&&C(T),s.jsxs(s.Fragment,{children:[i&&s.jsx(Pe,{"aria-label":f.selectMultiple_selectedValues(),data:b,hasInsideLabel:v.hasInsideLabel,maxWidth:"50%",onExitNavigation:c,onRemove:u,ref:m,removeIcon:p}),s.jsx(d.Flex,{flex:1,children:s.jsx(l.TextFieldInput,{"aria-autocomplete":"list",autoComplete:"off",hasPrefix:i,role:"combobox",hasEndContent:!0,spellcheck:!1,type:"auto"===S?"search":S,value:a||i?x:e,...v})}),i&&s.jsx(Se.HiddenAccessible,{id:h,isHidden:!0,children:e}),i&&T&&!D&&s.jsx(Se.HiddenAccessible,{id:y,isHidden:!0,children:T}),s.jsx(ge.LiveRegion,{children:r}),i&&s.jsx(ge.LiveRegion,{children:D?T:void 0}),t?s.jsx(ge.LiveRegion,{children:w}):void 0]})}function Me({onApply:e}){const t=V.useTranslationBundle("@oracle/oraclejet-preact");return s.jsx("div",{class:De.mobileDropdownFooterStyles.base,children:s.jsx(Ae.Button,{display:"label",edge:"bottom",label:t.selectMultiple_apply(),size:"sm",variant:"callToAction",onAction:e})})}function Ne(e,s){const t=V.useTranslationBundle("@oracle/oraclejet-preact").plural_separator();return{displayValue:o.useMemo((()=>{if(void 0===s)return"";const o=function(e,s){const t=s?[...s?.values()]:[],o=s=>se.renderItemText(s,e),n=t.map(o);return new Set(n)}(e,s),n=function(e,s){return Array.from(e.values()).join(s)}(o,t);return n}),[e,t,s]),textTags:o.useMemo((()=>void 0===s?[]:function(e,s=[]){return s.map((s=>({label:se.renderItemText(s,e)??"",value:s.key})))}(e,s)),[e,s])}}function _e({isDropdownSelectedOnlyView:e=!1,valueItems:s}){const t=Ie.useEffectEvent((e=>e&&s&&0!==s.length?{offset:0,totalSize:s.length,sizePrecision:"exact",data:s.map((e=>({data:e.data,metadata:e.metadata??{key:e.key}})))}:void 0));return{data:o.useMemo((()=>t(e)),[t,e]),onLoadRange:void 0}}const He=(e,s,t)=>s.data.forEach((s=>{t.has(s.metadata.key)&&e.set(s.metadata.key,{data:s.data,key:s.metadata.key,metadata:s.metadata})}));function ze({"aria-describedby":e,"aria-label":n,assistiveText:l,collectionRenderer:i,data:a,dropdownId:r,enabledElementRef:d,helpSourceLink:c,helpSourceText:u,isAddToListShown:h,isDisabled:y,isEmptyResults:b,isFocused:m,isLoading:x,isOpen:S,isReadonly:v,isRequired:f,isSelectedOnlyView:w,itemText:T,label:F,liveRegionText:g,placeholder:C,propIsLoading:D,selectedValuesDescriptionId:A,setDropdownOpen:I,setUserInput:R,stopFiltering:L,textAlign:E,textTagListRef:k,userAssistanceDensity:K,userInput:U,valueItems:j,virtualKeyboard:B,onAddToListAction:P,onCommit:O,onFieldBlur:M,onFieldFocus:N,onFieldInput:_,onFieldKeyDown:H,onFieldKeyUp:z}){const q=V.useTranslationBundle("@oracle/oraclejet-preact"),{collectionRendererContext:Y,footerProps:W,selectMultipleFieldInputProps:$,selectMultipleFieldProps:G,selectedValuesCountProps:Z}=function({data:e,inputRef:s,isDropdownOpen:t,isDropdownSelectedOnlyView:n,itemText:l,textTagListRef:i,userInput:a,valueItems:r,onCommit:d,setDropdownOpen:c,setUserInput:u,stopFiltering:p}){const[h,y]=o.useState({rowKey:void 0}),[b,m]=o.useState(se.createKeysFromValueItems(r)),[x,S]=o.useState(n),v=o.useRef(new Map),f=o.useMemo((()=>{const e=[];return b?.forEach((s=>{const t=r?.find((e=>e.key===s));t?e.push(t):v.current.has(s)&&e.push(v.current.get(s))})),e}),[b,r]),{textTags:w,displayValue:T}=Ne(l,f),F=o.useRef(null),{data:g}=_e({isDropdownSelectedOnlyView:x,valueItems:f}),C=o.useCallback((e=>{y({rowKey:e.value})}),[y]),D=o.useCallback((s=>{m(s.value),u(""),e&&He(v.current,e,s.value)}),[e,m,u]),A=o.useCallback((({value:e=!1})=>{S((s=>(s!==e&&p(),e)))}),[S,p]),I=o.useCallback((()=>{m(se.createKeysFromValueItems(r)),v.current.clear(),c(!1),p(),s.current?.focus()}),[s,c,p,r]),R=o.useCallback((()=>{d({previousValue:se.createKeysFromValueItems(r),value:b}),I()}),[b,r,I,d]),L=o.useCallback((()=>{I()}),[I]),E=o.useCallback((()=>{m(new Set),p()}),[p]),k=o.useCallback((e=>{const s=new Set(b);e.forEach((e=>s.delete(e))),m(s)}),[b]),K=o.useCallback((()=>{setTimeout((()=>F.current?.focus()),0)}),[]);o.useEffect((()=>{t&&setTimeout((()=>F.current?.focus()),0)}),[t]);const[V,U]=o.useState(r);return V!==r&&(t||m((e=>{const s=se.createKeysFromValueItems(r);return Re.equals(e,s)?e:s})),U(r)),{collectionRendererContext:se.useCollectionRenderer({currentKey:h.rowKey,onCurrentKeyChange:C,onSelectedKeysChange:D,searchText:a,selectedKeys:b,selectedOnlyData:g}),footerProps:{onApply:R},selectMultipleFieldInputProps:{displayValue:T,hasEmptyLabel:!1,hasInsideLabel:!0,inputRef:F,isTextTagListShown:w.length>0,isUserFiltering:!0,removeIcon:"always",userInput:a,textTagListData:w,textTagListRef:i,onExitNavigation:K,onRemove:k},selectMultipleFieldProps:{hasInsideLabel:!0,isBackButtonShown:!0,isClearButtonShown:!se.isSearchTextEmptyOrUndefined(a)||0!==w.length,isDropdownArrowShown:!1,isDropdownSelectedOnlyView:x,isSelectedValuesCountShown:(b?.size??0)>0||x,selectedValuesCount:b?.size??0,styleVariant:"embedded",onBackButtonClick:L,onClearButtonClick:E},selectedValuesCountProps:{onSelectedValuesCountToggle:A},isDropdownSelectedOnlyView:x}}({data:a,inputRef:d,isDropdownOpen:S,isDropdownSelectedOnlyView:w,itemText:T,textTagListRef:k,userInput:U,valueItems:j,onCommit:O,setDropdownOpen:I,setUserInput:R,stopFiltering:L}),{formFieldContext:J,inputProps:Q,labelProps:X,textFieldProps:te,userAssistanceProps:oe}=ee.useTextField({ariaDescribedBy:e,helpSourceLink:c,helpSourceText:u,isDisabled:!1,isFocused:m,isLoading:x,isReadonly:!1,isRequiredShown:!1,labelEdge:"inside",styleVariant:"default",value:G.selectedValuesCount>0||void 0});J.hasValue=D||J.hasValue;const ne={label:s.jsx(t.Label,{...X,children:F}),labelEdge:"inside"},le=!S||y||v||!l&&!c||"efficient"!==K&&"reflow"!==K?void 0:s.jsx(se.DropdownUserAssistance,{assistiveText:l,fieldLabel:F,helpSourceLink:c,helpSourceText:u,userAssistanceDensity:K,...oe}),ie=b?h?void 0:s.jsx(se.EmptyResults,{}):i(Y),ae=h?s.jsx(se.LinkItem,{onAction:P,children:q.select_addToList()}):void 0;return s.jsx(se.SelectMobileDropdown,{header:s.jsxs(p.FormFieldContext.Provider,{value:J,children:[s.jsx(Ce.View,{children:s.jsx(Ve,{fieldLabel:F,onBlur:M,onFocus:N,...ne,...te,...G,...Z,children:s.jsx(Oe,{"aria-controls":r,"aria-expanded":S,"aria-label":n,isAddToListShown:h,isRequired:f,liveRegionText:g,placeholder:C,selectedValuesDescriptionId:A,textAlign:E,virtualKeyboard:B,onInput:_,onKeyDown:H,onKeyUp:z,...Q,...$})})}),le]}),footer:s.jsx(Me,{...W}),id:r,isOpen:S,labelId:X.id,children:s.jsxs(se.DropdownList,{hasTopGap:!ae,hasBottomGap:!0,isLoading:null===a,children:[ie,ae]})})}const qe=n.forwardRef((({addToList:e="off","aria-describedby":l,assistiveText:i,collectionRenderer:d,columnSpan:c,data:h,helpSourceLink:y,helpSourceText:b,isDisabled:m,isLoading:x,isReadonly:S,isRequired:v,isRequiredShown:f,itemRenderer:w,itemText:T,label:F,labelEdge:g,labelStartWidth:C,messages:D,onAddToListAction:A,onCommit:I,onFilter:R,onLoadRange:L,placeholder:E,testId:k,textAlign:K,userAssistanceDensity:U,valueItems:j,variant:B="default",virtualKeyboard:P},O)=>{const{isDisabled:_,isReadonly:H,labelEdge:z,labelStartWidth:q,textAlign:W,userAssistanceDensity:$}=u.useFormContext(),G=m??_,Z=S??H,J=g??z,te=C??q,oe=K??W,ne=U??$,le=n.useRef(null),ie=n.useRef(null),{focusProps:ae,isFocused:re,methods:de}=Q.useFocusableTextField({isDisabled:G,isReadonly:Z,enabledElementRef:le,readonlyElementRef:ie});n.useImperativeHandle(O,(()=>de),[de]);const{addToListEventHandlers:ce,ariaProps:ue,collectionRendererContext:pe,data:be,dropdownArrowEventHandlers:me,dropdownEventHandlers:xe,dropdownRef:Se,hasSelectedValuesCount:ve,inputEventHandlers:fe,isAddToListShown:Te,isDataFetched:Fe,isDropdownAbove:ge,isDropdownOpen:Ce,isDropdownSelectedOnlyView:De,isEmptyResults:Ae,isFocused:Ie,isUserFiltering:Re,mainFieldRef:Ke,mouseProps:Ue,selectedValuesCountProps:je,selectedValuesDescriptionId:Be,selectedValuesKeyboardNavDescriptionId:Pe,setDropdownOpen:Me,setUserInput:He,stopFiltering:qe,textTagListProps:Ye,userInput:We}=function({addToList:e,ariaDescribedBy:s,data:t,inputRef:n,isDisabled:l,isFocused:i,isReadonly:a,onAddToListAction:r,onCommit:d,onFilter:c,valueItems:u}){const[p,h]=o.useState(!1),y=u?.length,b=void 0!==y&&y>0||p,m=_e({isDropdownSelectedOnlyView:p,valueItems:u}),x=p?m.data:t,S=o.useCallback((e=>{se.isSearchTextEmptyOrUndefined(e.searchText)||h(!1),c?.(e)}),[c]),{currentRowKeyRef:v,currentRowOverride:f,dropdownRef:w,handleDropdownArrowClick:T,handleDropdownAutoDismiss:F,handleDropdownPosition:g,handleInput:C,handleMainFieldKeyDown:D,handleMainFieldKeyUp:A,handleUpDownArrowKeys:I,isDropdownAbove:R,isDropdownOpen:L,isFocused:E,isUserFiltering:k,mainFieldRef:K,onCurrentKeyChange:V,onMouseDown:U,searchText:j,setCurrentRowOverride:B,setDropdownOpen:P,setUserInput:O,stopFiltering:M,userInput:N}=se.useSelectCommon({data:x,inputRef:n,isFocused:i,onFilter:S}),[_,H]=o.useState(L),[z,q]=o.useState(u),[Y,W]=o.useState(se.createKeysFromValueItems(u)),$=null!=x&&!se.isBeforeDataFetch(x),G=$&&0===x?.totalSize,Z="on"===e&&k&&null!=j&&j.length>0&&G,J=o.useCallback((()=>{P(!1),M(),r?.({searchText:k?j:void 0})}),[k,r,j,P,M]),Q=o.useRef(null),{direction:X}=he.useUser(),ee=we.useId(),te=we.useId(),oe=Ee.merge([E&&te,E&&ee,s]),ne=o.useCallback((()=>{w.current?.parentElement?.removeChild(w.current)}),[w]),le=o.useCallback((e=>k&&L&&!se.isSearchTextEmptyOrUndefined(N)&&(x?.data.length??0)>0&&void 0!==e),[x,L,k,N]),ie=o.useCallback((e=>{if(Y?.has(e))return;const s=void 0===Y?new Set([e]):new Set([...Y.values(),e]);d({previousValue:Y,value:s}),W(s)}),[d,Y,W]),ae=o.useCallback((e=>{if(L&&"keydown"===e?.type){const s=e;s.code===ye.KEYS.TAB&&(s.shiftKey||!b?n.current?.focus():de.current?.focus(),ne())}}),[b,n,L,ne]),re=o.useCallback((e=>{if(!ye.isControlOrFunctionKey(e))switch(e.code){case ye.KEYS.TAB:L&&(e.shiftKey||!b&&!e.shiftKey)&&(ne(),P(!1)),b&&!e.shiftKey&&e.stopPropagation();break;case ye.KEYS.LEFT:"ltr"===X&&n.current instanceof HTMLInputElement&&0===n.current?.selectionStart&&0===n.current?.selectionEnd&&Q.current?.focus();break;case ye.KEYS.RIGHT:"rtl"===X&&n.current instanceof HTMLInputElement&&0===n.current?.selectionStart&&0===n.current?.selectionEnd&&Q.current?.focus();break;case ye.KEYS.ENTER:case ye.KEYS.NUMPAD_ENTER:if(se.isPhone())return;if(Z)return void J();le(v.current)&&(P(!1),M(),ie(v.current))}}),[v,X,J,b,n,Z,L,ne,ie,P,le,M]);if(z!==u){const e=se.createKeysFromValueItems(u);W(e)}const de=o.useRef(null);o.useEffect((()=>{de.current=b&&K.current?.querySelector?K.current.querySelector('[role="switch"]'):null}),[b,l,a,K]);const ce=o.useCallback((e=>{switch(e.code){case ye.KEYS.TAB:L&&!e.shiftKey&&(ne(),P(!1)),e.shiftKey&&e.stopPropagation();break;case ye.KEYS.UP:case ye.KEYS.DOWN:e.preventDefault();break;case ye.KEYS.ESC:L&&(P(!1),e.preventDefault(),e.stopPropagation());break;case ye.KEYS.ENTER:e.stopPropagation()}}),[L,ne,P]),ue=o.useCallback((e=>{switch(e.code){case ye.KEYS.UP:case ye.KEYS.DOWN:I(e)}}),[I]),pe=o.useCallback((e=>{e.preventDefault(),n.current?.focus()}),[n]),be=o.useCallback((e=>{L||P(!0);const s=e.value??!1;s!==p&&(h(s),s&&M())}),[L,p,P,M]);!L&&p&&h(!1);const me=o.useCallback((e=>{W(e.value),O(""),d?.({value:e.value,previousValue:Y})}),[d,Y,W,O]),xe=o.useCallback((()=>{setTimeout((()=>n.current?.focus()),0)}),[n]),Se=o.useCallback((e=>{const s=Y,t=new Set(Y);e.forEach((e=>t.delete(e))),d?.({previousValue:s,value:t})}),[d,Y]),ve=o.useMemo((()=>Le.mergeProps({onAutoDismiss:F,onPosition:g},{onAutoDismiss:ae})),[F,g,ae]),fe=o.useMemo((()=>Le.mergeProps({onInput:C,onKeyDown:D,onKeyUp:A},{onKeyDown:re})),[D,C,A,re]),Te=o.useMemo((()=>({textTagListRef:Q,onExitNavigation:xe,onRemove:Se})),[xe,Se]),Fe=se.useCollectionRenderer({currentKey:f.rowKey,onCurrentKeyChange:V,onSelectedKeysChange:me,searchText:j,selectedKeys:Y,selectedOnlyData:m.data});L&&!_&&B({rowKey:void 0}),_&&!L&&!N&&M();const ge=o.useRef(x);if(ge.current!==x){const e=x?.data[0]?.metadata.key;L&&k&&null!=e&&0===x?.offset&&B({rowKey:se.isSearchTextEmptyOrUndefined(j)?void 0:e}),ge.current=x}return _!==L&&H(L),z!==u&&q(u),{addToListEventHandlers:{onAction:J},ariaProps:{ariaDescribedBy:oe},collectionRendererContext:Fe,data:x,dropdownArrowEventHandlers:{onClick:T},dropdownEventHandlers:ve,dropdownRef:w,hasSelectedValuesCount:b,inputEventHandlers:fe,inputRef:n,isAddToListShown:Z,isDataFetched:$,isDropdownAbove:R,isDropdownOpen:L,isDropdownSelectedOnlyView:p,isEmptyResults:G,isFocused:E,isUserFiltering:k,mainFieldRef:K,mouseProps:l||a?{}:{onMouseDown:U},searchText:j,selectedValuesCountProps:{onKeyDown:ce,onKeyUp:ue,onMouseDown:pe,onToggle:be},selectedValuesDescriptionId:ee,selectedValuesKeyboardNavDescriptionId:te,setDropdownOpen:P,setUserInput:O,stopFiltering:M,textTagListProps:Te,userInput:N}}({addToList:e,ariaDescribedBy:l,data:h,inputRef:le,isDisabled:G,isFocused:re,isReadonly:Z,onAddToListAction:A,onCommit:I,onFilter:R,valueItems:j}),$e=X.useLoadingIndicatorTimer(x??!1),{baseId:Ge,formFieldContext:Ze,inputProps:Je,labelProps:Qe,textFieldProps:Xe,userAssistanceProps:es}=ee.useTextField({ariaDescribedBy:ue.ariaDescribedBy,helpSourceLink:y,helpSourceText:b,isDisabled:G,isFocused:Ie,isLoading:$e,isReadonly:Z,isRequiredShown:f,labelEdge:J,messages:D,styleVariant:B,userAssistanceDensity:ne,value:void 0!==j&&j.length>0||void 0});Ze.hasValue=x||Ze.hasValue;const ss=`${Ge}-dropdown`,{displayValue:ts,textTags:os}=Ne(T,j),ns="none"!==J?s.jsx(t.Label,{...Qe,...se.isPhone()?{forId:void 0}:{},children:F}):void 0,ls={label:"none"!==J?ns:void 0,labelEdge:"none"!==J?J:void 0,labelStartWidth:"none"!==J?te:void 0},is="none"===J?F:void 0,as="efficient"===ne||"reflow"===ne?G||Z?"efficient"!==ne?void 0:s.jsx(M.InlineUserAssistance,{userAssistanceDensity:ne,...es}):s.jsx(M.InlineUserAssistance,{assistiveText:i,fieldLabel:F,helpSourceLink:y,helpSourceText:b,messages:D,isRequiredShown:f,userAssistanceDensity:ne,...es}):void 0,rs="compact"===ne?s.jsx(N.CompactUserAssistance,{anchorRef:Ke,messages:D,assistiveText:i,...es}):void 0,ds=V.useTranslationBundle("@oracle/oraclejet-preact"),cs=n.useCallback((({currentRowKeyOverride:e,onPersistCurrentRowKey:t,onSelectedChange:o,searchText:n,selected:l,selectedOnlyData:i})=>s.jsx(se.DefaultList,{"aria-label":F??"",currentItemVariant:"highlight",currentKey:e,data:i??h,itemRenderer:w,itemText:T,searchText:i?void 0:Re?n:void 0,selectedKeys:l,selectionMode:"multiple",onCurrentKeyChange:t,onLoadRange:i?void 0:L,onSelectionChange:o})),[Re,w,T,F,L,h]);if(Z){const e=s.jsx(a.ReadonlyTextFieldInput,{"aria-describedby":Je["aria-describedby"],"aria-label":is,"aria-labelledby":Qe.id,as:"div",elementRef:ie,hasEmptyLabel:""===F&&"none"===J,hasInsideLabel:void 0!==F&&"inside"===J,textAlign:oe,value:ts});return s.jsx(p.FormFieldContext.Provider,{value:Ze,children:s.jsx(r.ReadonlyTextField,{role:"presentation",columnSpan:c,compactUserAssistance:rs,inlineUserAssistance:as,onBlur:ae.onFocusOut,onFocus:ae.onFocusIn,ref:Ke,mainContent:e,testId:k,...ls})})}const us="inside"===J,ps=Ce&&Fe?0===be?.totalSize?ds.select_noMatchesFound():1===be?.totalSize?ds.select_oneMatchFound():"exact"===be?.sizePrecision?ds.select_sizeMatchesFound({TOTAL_SIZE:`${be?.totalSize}`}):ds.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${be?.totalSize}`}):"",hs=Ce&&void 0!==be&&(null===be||be.totalSize>0||se.isBeforeDataFetch(be)||Ae),ys=""===F&&"none"===J,bs=se.isPhone()&&!G?s.jsx(se.SelectMobileFieldInput,{"aria-controls":ss,"aria-describedby":Je["aria-describedby"],"aria-expanded":Ce,"aria-invalid":Je["aria-invalid"],"aria-label":is,"aria-labelledby":Qe.id,displayValue:ts,hasEmptyLabel:ys,hasInsideLabel:us,isRequired:v,onBlur:Je.onBlur,onFocus:Je.onFocus,placeholder:E,ref:le,textAlign:oe,variant:Je.variant}):s.jsx(Oe,{"aria-controls":ss,"aria-expanded":Ce,"aria-label":is,displayValue:ts,hasEmptyLabel:ys,hasInsideLabel:us,inputRef:le,isAddToListShown:Te,isKeyboardNavigable:!G&&!se.isMobile(),isRequired:v,isTextTagListShown:Ie&&0!==os.length,isUserFiltering:Re,liveRegionText:ps,placeholder:E,removeIcon:se.isTablet()?"always":"never",selectedValuesDescriptionId:Be,selectedValuesKeyboardNavDescriptionId:Pe,textAlign:oe,textTagListData:os,userInput:We,virtualKeyboard:se.isTablet()?P:void 0,...fe,...Je,...Ye}),ms=hs?se.isPhone()?s.jsx(ze,{"aria-describedby":ue.ariaDescribedBy,"aria-label":is,assistiveText:i,collectionRenderer:d??cs,data:h,dropdownId:ss,enabledElementRef:le,helpSourceLink:y,helpSourceText:b,isAddToListShown:Te,isDisabled:G,isEmptyResults:Ae,isFocused:Ie,isLoading:$e,isOpen:hs,isReadonly:Z,isRequired:v,isSelectedOnlyView:De,itemText:T,label:F,liveRegionText:ps,placeholder:E,propIsLoading:x,selectedValuesDescriptionId:Be,setDropdownOpen:Me,setUserInput:He,stopFiltering:qe,textAlign:oe,textTagListRef:Ye.textTagListRef,userAssistanceDensity:ne,userInput:We,valueItems:j,virtualKeyboard:P,onAddToListAction:ce.onAction,onCommit:I,onFieldBlur:ae.onFocusOut,onFieldFocus:ae.onFocusIn,onFieldInput:fe.onInput,onFieldKeyDown:fe.onKeyDown,onFieldKeyUp:fe.onKeyUp}):s.jsx(ke,{...xe,assistiveText:i,collectionRenderer:d??cs,collectionRendererContext:pe,dropdownId:ss,dropdownRef:Se,helpSourceLink:y,helpSourceText:b,isAddToListShown:Te,isDisabled:G,isDropdownAbove:ge,isEmptyResults:Ae,isOpen:hs,isReadonly:Z,label:F,mainFieldRef:Ke,onAddToListAction:ce.onAction,userAssistanceDensity:ne}):null;return s.jsxs(Y.Fragment,{children:[s.jsx(p.FormFieldContext.Provider,{value:Ze,children:s.jsx(Ve,{columnSpan:c,compactUserAssistance:rs,fieldLabel:F,hasInsideLabel:us,inlineUserAssistance:as,isDropdownArrowShown:!0,isDropdownSelectedOnlyView:De,isSelectedValuesCountShown:ve,mainFieldRef:Ke,onBlur:ae.onFocusOut,onFocus:ae.onFocusIn,onDropdownArrowClick:me.onClick,onSelectedValuesCountKeyDown:je.onKeyDown,onSelectedValuesCountKeyUp:je.onKeyUp,onSelectedValuesCountMouseDown:je.onMouseDown,onSelectedValuesCountToggle:je.onToggle,selectedValuesCount:j?.length,testId:k,...ls,...Ue,...Xe,children:bs})}),ms]})}));e.SelectMultiple=qe}));
//# sourceMappingURL=SelectMultiple-3eb4a268.js.map
