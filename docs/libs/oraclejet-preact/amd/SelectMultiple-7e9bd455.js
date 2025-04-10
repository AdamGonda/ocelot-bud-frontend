define(['exports', 'preact/jsx-runtime', './Label-3912beb2', 'preact/hooks', './keyboardUtils-fbb389f8', 'preact/compat', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './Flex-3421f0df', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', 'css!./LabelValueLayoutStyles.styles.css', './logger-0f873e29', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-372087af', './LayerHost-639b3284', './useTranslationBundle-d07d4b20', 'css!./LiveRegionStyles.styles.css', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useFocusableTextField-8b755b15', './useLoadingIndicatorTimer-20a3bf5f', './useTextField-e6877c79', './useSelectCommon-d9c4a7bd', './useAccessibleContext-23e8a333', './textAlign-ef924afd', './useFormFieldContext-8196183c', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './TextField-1021f00b', './UNSAFE_SelectMultiple/themes/SelectedValuesCountStyles.css', './Chip-cd210507', './IconButton-ae9a01ce', './CancelS-e19c73e5', './useFocusWithin-5a504fca', './useUser-3ef25571', './classNames-08d99695', './dimensions-60420dbb', './mergeInterpolations-9ede4cf7', './HiddenAccessible-037ef42d', './Text-cd61a065', './Close-04d8a398', './useId-c9578d26', './UNSAFE_SelectMultiple/themes/TextTagStyles.css', './UNSAFE_SelectMultiple/themes/TextTagListStyles.css', './LiveRegion-9a362373', './View-bd5c7fa7', './UNSAFE_SelectMultiple/themes/MobileDropdownFooterStyles.css', './Button-3dc2a041', './useEffectEvent-8467275b', './equals-e73adbe3', './mergeProps-bcfa6a92', './stringUtils-0ae982c2'], (function(e,s,t,o,n,l,i,a,r,d,c,u,p,h,b,y,m,x,S,v,f,w,T,F,g,C,D,A,I,R,L,E,k,K,V,U,j,B,P,O,M,N,_,H,z,q,Y,W,$,G,Z,J,Q,X,ee,se,te,oe,ne,le,ie,ae,re,de,ce,ue,pe,he,be,ye,me,xe,Se,ve,fe,we,Te,Fe,ge,Ce,De,Ae,Ie,Re,Le,Ee){"use strict";function ke({assistiveText:e,collectionRenderer:t,collectionRendererContext:o,data:n,dropdownId:l,dropdownRef:i,helpSourceLink:a,helpSourceText:r,isAddToListShown:d,isDisabled:c,isDropdownAbove:u,isEmptyResults:p,isOpen:h,isReadonly:b,label:y,mainFieldRef:m,userAssistanceDensity:x,onAddToListAction:S,onAutoDismiss:v,onPosition:f}){const w=U.useTranslationBundle("@oracle/oraclejet-preact"),T=!h||u||c||b||!e&&!a||"efficient"!==x&&"reflow"!==x?void 0:s.jsx(te.DropdownUserAssistance,{assistiveText:e,fieldLabel:y,helpSourceLink:a,helpSourceText:r,userAssistanceDensity:x}),F=p?d?void 0:s.jsx(te.EmptyResults,{}):t(o),g=d?s.jsx(te.LinkItem,{isHighlighted:p,onAction:S,children:w.select_addToList()}):void 0;return s.jsxs(te.Dropdown,{dropdownRef:i,id:l,isOpen:h,anchorRef:m,onAutoDismiss:v,onPosition:f,children:[s.jsxs(te.DropdownList,{hasBottomGap:void 0===T,isLoading:null===n,children:[F,g]}),T]})}function Ke({"aria-label":e,count:t=0,onKeyDown:o,onKeyUp:n,onMouseDown:l,...i}){const a=U.useTranslationBundle("@oracle/oraclejet-preact"),r=a.selectMultiple_showSelectedValues(),d=e?`${e}. `:"",c=a.selectMultiple_countPlus({COUNT:"99"}),u=t>99?`${c}`:`${t}`,p=`${d}${a.selectMultiple_valuesSelected({VALUE_COUNT:`${t}`})} ${r}`;return s.jsx("div",{class:de.selectedValueCountStyles.base,onKeyDown:o,onKeyUp:n,onMouseDown:l,children:s.jsx(ce.Chip,{"aria-label":p,...i,children:u})})}function Ve({children:e,columnSpan:t,fieldLabel:o,hasInsideLabel:n,isBackButtonShown:l,isClearButtonShown:i,isDropdownArrowShown:a,isDropdownSelectedOnlyView:r,isSelectedValuesCountShown:d,selectedValuesCount:u,onBackButtonClick:p,onClearButtonClick:h,onDropdownArrowClick:b,onSelectedValuesCountKeyDown:y,onSelectedValuesCountKeyUp:m,onSelectedValuesCountMouseDown:x,onSelectedValuesCountToggle:S,...v}){const{isDisabled:f,isLoading:w}=le.useFormFieldContext(),T=U.useTranslationBundle("@oracle/oraclejet-preact"),F=l?s.jsx(ue.IconButton,{"aria-label":T.selectMultiple_back(),size:"xs",variant:"ghost",onAction:p,children:s.jsx(pe.SvgNavLeft,{})}):null,g=i?s.jsx(ue.IconButton,{"aria-label":T.formControl_clear(),size:"sm",variant:"ghost",onAction:h,children:s.jsx(pe.SvgCancelS,{})}):null,C=a?s.jsx(te.DropdownArrow,{isDisabled:f,onClick:b,testId:`${v.testId}_dropdownarrow`}):null,D=w?void 0:d?s.jsxs(c.Flex,{align:"center",justify:"center",gap:[0,"1x"],children:[s.jsx(Ke,{"aria-label":o,count:u,isDisabled:f,isSelected:r,onKeyDown:y,onKeyUp:m,onMouseDown:x,onToggle:S}),i&&g,a&&C]}):s.jsxs(s.Fragment,{children:[i&&g,a&&C]});return s.jsx(re.TextField,{columnSpan:t,startContent:l&&F,mainContent:e,endContent:D,...v})}function Ue({children:e,removeIcon:t="never",isSelected:l=!1,onRemoveAction:i,onSelect:a,onRemoveIconClick:r,isFocused:d,value:c}){const u=U.useTranslationBundle("@oracle/oraclejet-preact"),p=o.useRef(null),h=we.useId(),b=ye.classNames([Te.textTagStyles.base,l&&Te.textTagStyles.selected]),y=o.useCallback((()=>{i?.(c)}),[c,i]),m=o.useCallback((()=>{a?.(c)}),[c,a]),x=o.useCallback((()=>{r?.(c)}),[c,r]),S=o.useCallback((e=>{n.isBackspaceOrDelete(e)&&y()}),[y]);return o.useEffect((()=>{d&&l&&(p.current?.focus(),p.current?.scrollIntoView({block:"nearest"}))}),[d,l]),s.jsxs(s.Fragment,{children:[s.jsxs("span",{ref:p,class:b,tabIndex:-1,onClick:m,onKeyUp:S,onMouseDown:te.preventDefault,role:"option","aria-describedby":h,"aria-selected":l?"true":"false",children:[s.jsx(ve.Text,{size:"md",variant:"inherit",children:e}),"always"===t&&s.jsx(B.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx(ue.IconButton,{size:"xs",variant:"ghost",onAction:x,children:s.jsx(fe.SvgClose,{})})})]}),s.jsx(Se.HiddenAccessible,{id:h,children:u.selectMultiple_removeSelectedTagInstructionText()})]})}const je=Array.from(["maxWidth"],(e=>me.dimensionInterpolations[e])),Be=xe.mergeInterpolations(je);const Pe=l.forwardRef((function(e,t=(()=>{})){const{"aria-label":l,data:i,hasInsideLabel:a=!1,removeIcon:r="never",onExitNavigation:d,onRemove:c}=e,u=o.useRef(null),[p,h]=o.useState([]),{direction:b}=be.useUser(),y=o.useRef(-1),m=i.at(-1)?.value,x=o.useRef({value:m,index:i.length-1});x.current={value:m,index:i.length-1};const S=o.useCallback((e=>{const s=i.at(e)?.value;null!=s&&h([s])}),[i]),v=o.useCallback((()=>{h((e=>(y.current=-1,e.length?[]:e)))}),[]),f=o.useCallback((e=>{c?.([e]),d?.(),v()}),[v,d,c]),w=o.useCallback((e=>{const s=[...p];p.includes(e)||s.push(e),c?.(s),d?.(),v()}),[p,v,d,c]),T=o.useCallback((e=>{h([e]),y.current=i.findIndex((s=>s.value===e))}),[i,h]),F=o.useCallback((e=>{if(0!==i.length){if("ltr"===b&&"ArrowLeft"===e.code||"rtl"===b&&"ArrowRight"===e.code){if(0===y.current)return;return y.current-=1,void S(y.current)}return"ltr"===b&&"ArrowRight"===e.code||"rtl"===b&&"ArrowLeft"===e.code?y.current===i.length-1?void d?.():(y.current+=1,void S(y.current)):"Home"===e.code?(y.current=0,void S(y.current)):"End"===e.code?(y.current=i.length-1,void S(y.current)):n.isSelectAll(e)?(h(i.map((e=>e.value))),void e.preventDefault()):void 0}}),[i,b,d,S,h]),g=o.useCallback((()=>{h((e=>e.length||void 0===x.current.value?e:(y.current=x.current.index,[x.current.value])))}),[]),C=o.useCallback((()=>{v()}),[v]),{focusProps:D}=he.useFocusWithin({onBlurWithin:C});o.useImperativeHandle(t,(()=>({blur:C,focus:g})),[C,g]),o.useEffect((()=>{u.current?.scrollTo({left:u.current.scrollWidth*("ltr"===b?1:-1)})}),[i,b]);const A=Be(e),I=ye.classNames([Fe.textTagListStyles.textTagListBase,a&&Fe.textTagListStyles.textTagListInsideLabel]);return s.jsx("div",{class:I,ref:u,tabIndex:-1,onKeyDown:F,role:"listbox","aria-label":l,"aria-multiselectable":"true",style:A,...D,children:i.map(((e,t)=>s.jsx(Ue,{isFocused:y.current===t,isSelected:p.includes(e.value),onRemoveAction:w,onSelect:T,onRemoveIconClick:f,removeIcon:r,value:e.value,children:e.label},e.value)))})}));function Oe({displayValue:e,isAddToListShown:t,isKeyboardNavigable:n,isTextTagListShown:l,isUserFiltering:a,liveRegionText:r,onExitNavigation:d,onRemove:u,removeIcon:p,selectedValuesDescriptionId:h,selectedValuesKeyboardNavDescriptionId:b,textTagListData:y,textTagListRef:m,userInput:x,virtualKeyboard:S,...v}){const f=U.useTranslationBundle("@oracle/oraclejet-preact"),w=t?f.select_addToListAvailable():void 0,T=n&&e&&e.length>0?f.selectMultiple_highlightSelectedTagsInstructionText():void 0,{isInputFocused:F}=le.useFormFieldContext(),[g,C]=o.useState(T),[D,A]=o.useState(!1);return F&&l&&!g&&T&&!D?A(!0):F||!D||A(!1),g!==T&&C(T),s.jsxs(s.Fragment,{children:[l&&s.jsx(Pe,{"aria-label":f.selectMultiple_selectedValues(),data:y,hasInsideLabel:v.hasInsideLabel,maxWidth:"50%",onExitNavigation:d,onRemove:u,ref:m,removeIcon:p}),s.jsx(c.Flex,{flex:1,children:s.jsx(i.TextFieldInput,{"aria-autocomplete":"list",autoComplete:"off",hasPrefix:l,role:"combobox",hasEndContent:!0,spellcheck:!1,type:"auto"===S?"search":S,value:a||l?x:e,...v})}),l&&s.jsx(Se.HiddenAccessible,{id:h,isHidden:!0,children:e}),l&&T&&!D&&s.jsx(Se.HiddenAccessible,{id:b,isHidden:!0,children:T}),s.jsx(ge.LiveRegion,{children:r}),l&&s.jsx(ge.LiveRegion,{children:D?T:void 0}),t?s.jsx(ge.LiveRegion,{children:w}):void 0]})}function Me({onApply:e}){const t=U.useTranslationBundle("@oracle/oraclejet-preact");return s.jsx("div",{class:De.mobileDropdownFooterStyles.base,children:s.jsx(Ae.Button,{display:"label",edge:"bottom",label:t.selectMultiple_apply(),size:"sm",variant:"callToAction",onAction:e})})}function Ne(e,s){const t=U.useTranslationBundle("@oracle/oraclejet-preact").plural_separator();return{displayValue:o.useMemo((()=>{if(void 0===s)return"";const o=function(e,s){const t=s?[...s?.values()]:[],o=s=>te.renderItemText(s,e),n=t.map(o);return new Set(n)}(e,s),n=function(e,s){return Array.from(e.values()).join(s)}(o,t);return n}),[e,t,s]),textTags:o.useMemo((()=>void 0===s?[]:function(e,s=[]){return s.map((s=>({label:te.renderItemText(s,e)??"",value:s.key})))}(e,s)),[e,s])}}function _e({isDropdownSelectedOnlyView:e=!1,valueItems:s}){const t=Ie.useEffectEvent((e=>e&&s&&0!==s.length?{offset:0,totalSize:s.length,sizePrecision:"exact",data:s.map((e=>({data:e.data,metadata:e.metadata??{key:e.key}})))}:void 0));return{data:o.useMemo((()=>t(e)),[t,e]),onLoadRange:void 0}}const He=(e,s,t)=>s.data.forEach((s=>{t.has(s.metadata.key)&&e.set(s.metadata.key,{data:s.data,key:s.metadata.key,metadata:s.metadata})}));function ze({"aria-describedby":e,"aria-label":n,assistiveText:l,collectionRenderer:i,data:a,dropdownId:r,enabledElementRef:d,helpSourceLink:c,helpSourceText:u,isAddToListShown:p,isDisabled:b,isEmptyResults:y,isFocused:m,isLoading:x,isOpen:S,isReadonly:v,isRequired:f,isSelectedOnlyView:w,itemText:T,label:F,liveRegionText:g,placeholder:C,propIsLoading:D,selectedValuesDescriptionId:A,setDropdownOpen:I,setUserInput:R,stopFiltering:L,textAlign:E,textTagListRef:k,userAssistanceDensity:K,userInput:V,valueItems:j,virtualKeyboard:B,onAddToListAction:P,onCommit:O,onFieldBlur:M,onFieldFocus:N,onFieldInput:_,onFieldKeyDown:H,onFieldKeyUp:z}){const q=U.useTranslationBundle("@oracle/oraclejet-preact"),{collectionRendererContext:Y,footerProps:W,selectMultipleFieldInputProps:$,selectMultipleFieldProps:G,selectedValuesCountProps:Z}=function({data:e,inputRef:s,isDropdownOpen:t,isDropdownSelectedOnlyView:n,itemText:l,textTagListRef:i,userInput:a,valueItems:r,onCommit:d,setDropdownOpen:c,setUserInput:u,stopFiltering:p}){const[h,b]=o.useState({rowKey:void 0}),[y,m]=o.useState(te.createKeysFromValueItems(r)),[x,S]=o.useState(n),v=o.useRef(new Map),f=o.useMemo((()=>{const e=[];return y?.forEach((s=>{const t=r?.find((e=>e.key===s));t?e.push(t):v.current.has(s)&&e.push(v.current.get(s))})),e}),[y,r]),{textTags:w,displayValue:T}=Ne(l,f),F=o.useRef(null),{data:g}=_e({isDropdownSelectedOnlyView:x,valueItems:f}),C=o.useCallback((e=>{b({rowKey:e.value})}),[b]),D=o.useCallback((s=>{m(s.value),u(""),e&&He(v.current,e,s.value)}),[e,m,u]),A=o.useCallback((({value:e=!1})=>{S((s=>(s!==e&&p(),e)))}),[S,p]),I=o.useCallback((()=>{m(te.createKeysFromValueItems(r)),v.current.clear(),c(!1),p(),s.current?.focus()}),[s,c,p,r]),R=o.useCallback((()=>{d({previousValue:te.createKeysFromValueItems(r),value:y}),I()}),[y,r,I,d]),L=o.useCallback((()=>{I()}),[I]),E=o.useCallback((()=>{m(new Set),p()}),[p]),k=o.useCallback((e=>{const s=new Set(y);e.forEach((e=>s.delete(e))),m(s)}),[y]),K=o.useCallback((()=>{setTimeout((()=>F.current?.focus()),0)}),[]);o.useEffect((()=>{t&&setTimeout((()=>F.current?.focus()),0)}),[t]);const[V,U]=o.useState(r);return V!==r&&(t||m((e=>{const s=te.createKeysFromValueItems(r);return Re.equals(e,s)?e:s})),U(r)),{collectionRendererContext:te.useCollectionRenderer({currentKey:h.rowKey,onCurrentKeyChange:C,onSelectedKeysChange:D,searchText:a,selectedKeys:y,selectedOnlyData:g}),footerProps:{onApply:R},selectMultipleFieldInputProps:{displayValue:T,hasEmptyLabel:!1,hasInsideLabel:!0,inputRef:F,isTextTagListShown:w.length>0,isUserFiltering:!0,removeIcon:"always",userInput:a,textTagListData:w,textTagListRef:i,onExitNavigation:K,onRemove:k},selectMultipleFieldProps:{hasInsideLabel:!0,isBackButtonShown:!0,isClearButtonShown:!te.isSearchTextEmptyOrUndefined(a)||0!==w.length,isDropdownArrowShown:!1,isDropdownSelectedOnlyView:x,isSelectedValuesCountShown:(y?.size??0)>0||x,selectedValuesCount:y?.size??0,styleVariant:"embedded",onBackButtonClick:L,onClearButtonClick:E},selectedValuesCountProps:{onSelectedValuesCountToggle:A},isDropdownSelectedOnlyView:x}}({data:a,inputRef:d,isDropdownOpen:S,isDropdownSelectedOnlyView:w,itemText:T,textTagListRef:k,userInput:V,valueItems:j,onCommit:O,setDropdownOpen:I,setUserInput:R,stopFiltering:L}),{formFieldContext:J,inputProps:Q,labelProps:X,textFieldProps:ee,userAssistanceProps:oe}=se.useTextField({ariaDescribedBy:e,helpSourceLink:c,helpSourceText:u,isDisabled:!1,isFocused:m,isLoading:x,isReadonly:!1,isRequiredShown:!1,labelEdge:"inside",styleVariant:"default",value:G.selectedValuesCount>0||void 0});J.hasValue=D||J.hasValue;const ne={label:s.jsx(t.Label,{...X,children:F}),labelEdge:"inside"},le=!S||b||v||!l&&!c||"efficient"!==K&&"reflow"!==K?void 0:s.jsx(te.DropdownUserAssistance,{assistiveText:l,fieldLabel:F,helpSourceLink:c,helpSourceText:u,userAssistanceDensity:K,...oe}),ie=y?p?void 0:s.jsx(te.EmptyResults,{}):i(Y),ae=p?s.jsx(te.LinkItem,{onAction:P,children:q.select_addToList()}):void 0;return s.jsx(te.SelectMobileDropdown,{header:s.jsxs(h.FormFieldContext.Provider,{value:J,children:[s.jsx(Ce.View,{children:s.jsx(Ve,{fieldLabel:F,onBlur:M,onFocus:N,...ne,...ee,...G,...Z,children:s.jsx(Oe,{"aria-controls":r,"aria-expanded":S,"aria-label":n,isAddToListShown:p,isRequired:f,liveRegionText:g,placeholder:C,selectedValuesDescriptionId:A,textAlign:E,virtualKeyboard:B,onInput:_,onKeyDown:H,onKeyUp:z,...Q,...$})})}),le]}),footer:s.jsx(Me,{...W}),id:r,isOpen:S,labelId:X.id,children:s.jsxs(te.DropdownList,{hasTopGap:!ae,hasBottomGap:!0,isLoading:null===a,children:[ie,ae]})})}const qe=l.forwardRef((({addToList:e="off","aria-describedby":i,assistiveText:a,collectionRenderer:c,columnSpan:u,data:b,helpSourceLink:y,helpSourceText:m,isDisabled:x,isLoading:S,isReadonly:v,isRequired:f,isRequiredShown:w,itemRenderer:T,itemText:F,label:g,labelEdge:C,labelStartWidth:D,messages:A,onAddToListAction:I,onCommit:R,onFilter:L,onLoadRange:E,placeholder:k,testId:K,textAlign:V,userAssistanceDensity:j,valueItems:B,variant:P="default",virtualKeyboard:O},M)=>{const{isDisabled:H,isReadonly:z,labelEdge:q,labelStartWidth:Y,textAlign:$,userAssistanceDensity:G}=p.useFormContext(),Z=x??H,J=v??z,Q=C??q,oe=D??Y,ne=V??$,le=j??G,ie=l.useRef(null),ae=l.useRef(null),{focusProps:re,isFocused:de,methods:ce}=X.useFocusableTextField({isDisabled:Z,isReadonly:J,enabledElementRef:ie,readonlyElementRef:ae});l.useImperativeHandle(M,(()=>ce),[ce]);const{addToListEventHandlers:ue,ariaProps:pe,collectionRendererContext:he,data:ye,dropdownArrowEventHandlers:me,dropdownEventHandlers:xe,dropdownRef:Se,hasSelectedValuesCount:ve,inputEventHandlers:fe,isAddToListShown:Te,isDataFetched:Fe,isDropdownAbove:ge,isDropdownOpen:Ce,isDropdownSelectedOnlyView:De,isEmptyResults:Ae,isFocused:Ie,isUserFiltering:Re,mainFieldRef:Ke,mouseProps:Ue,selectedValuesCountProps:je,selectedValuesDescriptionId:Be,selectedValuesKeyboardNavDescriptionId:Pe,setDropdownOpen:Me,setUserInput:He,stopFiltering:qe,textTagListProps:Ye,userInput:We}=function({addToList:e,ariaDescribedBy:s,data:t,inputRef:l,isDisabled:i,isFocused:a,isReadonly:r,onAddToListAction:d,onCommit:c,onFilter:u,valueItems:p}){const[h,b]=o.useState(!1),y=p?.length,m=void 0!==y&&y>0||h,x=_e({isDropdownSelectedOnlyView:h,valueItems:p}),S=h?x.data:t,v=o.useCallback((e=>{te.isSearchTextEmptyOrUndefined(e.searchText)||b(!1),u?.(e)}),[u]),{currentRowKeyRef:f,currentRowOverride:w,dropdownRef:T,handleDropdownArrowClick:F,handleDropdownAutoDismiss:g,handleDropdownPosition:C,handleInput:D,handleMainFieldKeyDown:A,handleMainFieldKeyUp:I,handleUpDownArrowKeys:R,isDropdownAbove:L,isDropdownOpen:E,isFocused:k,isUserFiltering:K,mainFieldRef:V,onCurrentKeyChange:U,onMouseDown:j,searchText:B,setCurrentRowOverride:P,setDropdownOpen:O,setUserInput:M,stopFiltering:N,userInput:_}=te.useSelectCommon({data:S,inputRef:l,isFocused:a,onFilter:v}),[H,z]=o.useState(E),[q,Y]=o.useState(p),[W,$]=o.useState(te.createKeysFromValueItems(p)),G=null!=S&&!te.isBeforeDataFetch(S),Z=G&&0===S?.totalSize,J="on"===e&&K&&null!=B&&B.length>0&&Z,Q=o.useCallback((()=>{O(!1),N(),d?.({searchText:K?B:void 0})}),[K,d,B,O,N]),X=o.useRef(null),{direction:ee}=be.useUser(),se=we.useId(),oe=we.useId(),ne=Ee.merge([k&&oe,k&&se,s]),le=o.useCallback((()=>{T.current?.parentElement?.removeChild(T.current)}),[T]),ie=o.useCallback((e=>K&&E&&!te.isSearchTextEmptyOrUndefined(_)&&(S?.data.length??0)>0&&void 0!==e),[S,E,K,_]),ae=o.useCallback((e=>{if(W?.has(e))return;const s=void 0===W?new Set([e]):new Set([...W.values(),e]);c({previousValue:W,value:s}),$(s)}),[c,W,$]),re=o.useCallback((e=>{if(E&&"keydown"===e?.type){const s=e;s.code===n.KEYS.TAB&&(s.shiftKey||!m?l.current?.focus():ce.current?.focus(),le())}}),[m,l,E,le]),de=o.useCallback((e=>{if(!n.isControlOrFunctionKey(e))switch(e.code){case n.KEYS.TAB:E&&(e.shiftKey||!m&&!e.shiftKey)&&(le(),O(!1)),m&&!e.shiftKey&&e.stopPropagation();break;case n.KEYS.LEFT:"ltr"===ee&&l.current instanceof HTMLInputElement&&0===l.current?.selectionStart&&0===l.current?.selectionEnd&&X.current?.focus();break;case n.KEYS.RIGHT:"rtl"===ee&&l.current instanceof HTMLInputElement&&0===l.current?.selectionStart&&0===l.current?.selectionEnd&&X.current?.focus();break;case n.KEYS.ENTER:case n.KEYS.NUMPAD_ENTER:if(te.isPhone())return;if(J)return void Q();ie(f.current)&&(O(!1),N(),ae(f.current))}}),[f,ee,Q,m,l,J,E,le,ae,O,ie,N]);if(q!==p){const e=te.createKeysFromValueItems(p);$(e)}const ce=o.useRef(null);o.useEffect((()=>{ce.current=m&&V.current?.querySelector?V.current.querySelector('[role="switch"]'):null}),[m,i,r,V]);const ue=o.useCallback((e=>{switch(e.code){case n.KEYS.TAB:E&&!e.shiftKey&&(le(),O(!1)),e.shiftKey&&e.stopPropagation();break;case n.KEYS.UP:case n.KEYS.DOWN:e.preventDefault();break;case n.KEYS.ESC:E&&(O(!1),e.preventDefault(),e.stopPropagation());break;case n.KEYS.ENTER:e.stopPropagation()}}),[E,le,O]),pe=o.useCallback((e=>{switch(e.code){case n.KEYS.UP:case n.KEYS.DOWN:R(e)}}),[R]),he=o.useCallback((e=>{e.preventDefault(),l.current?.focus()}),[l]),ye=o.useCallback((e=>{E||O(!0);const s=e.value??!1;s!==h&&(b(s),s&&N())}),[E,h,O,N]);!E&&h&&b(!1);const me=o.useCallback((e=>{$(e.value),M(""),c?.({value:e.value,previousValue:W})}),[c,W,$,M]),xe=o.useCallback((()=>{setTimeout((()=>l.current?.focus()),0)}),[l]),Se=o.useCallback((e=>{const s=W,t=new Set(W);e.forEach((e=>t.delete(e))),c?.({previousValue:s,value:t})}),[c,W]),ve=o.useMemo((()=>Le.mergeProps({onAutoDismiss:g,onPosition:C},{onAutoDismiss:re})),[g,C,re]),fe=o.useMemo((()=>Le.mergeProps({onInput:D,onKeyDown:A,onKeyUp:I},{onKeyDown:de})),[A,D,I,de]),Te=o.useMemo((()=>({textTagListRef:X,onExitNavigation:xe,onRemove:Se})),[xe,Se]),Fe=te.useCollectionRenderer({currentKey:w.rowKey,onCurrentKeyChange:U,onSelectedKeysChange:me,searchText:B,selectedKeys:W,selectedOnlyData:x.data});E&&!H&&P({rowKey:void 0}),H&&!E&&!_&&N();const ge=o.useRef(S);if(ge.current!==S){const e=S?.data[0]?.metadata.key;E&&K&&null!=e&&0===S?.offset&&P({rowKey:te.isSearchTextEmptyOrUndefined(B)?void 0:e}),ge.current=S}return H!==E&&z(E),q!==p&&Y(p),{addToListEventHandlers:{onAction:Q},ariaProps:{ariaDescribedBy:ne},collectionRendererContext:Fe,data:S,dropdownArrowEventHandlers:{onClick:F},dropdownEventHandlers:ve,dropdownRef:T,hasSelectedValuesCount:m,inputEventHandlers:fe,inputRef:l,isAddToListShown:J,isDataFetched:G,isDropdownAbove:L,isDropdownOpen:E,isDropdownSelectedOnlyView:h,isEmptyResults:Z,isFocused:k,isUserFiltering:K,mainFieldRef:V,mouseProps:i||r?{}:{onMouseDown:j},searchText:B,selectedValuesCountProps:{onKeyDown:ue,onKeyUp:pe,onMouseDown:he,onToggle:ye},selectedValuesDescriptionId:se,selectedValuesKeyboardNavDescriptionId:oe,setDropdownOpen:O,setUserInput:M,stopFiltering:N,textTagListProps:Te,userInput:_}}({addToList:e,ariaDescribedBy:i,data:b,inputRef:ie,isDisabled:Z,isFocused:de,isReadonly:J,onAddToListAction:I,onCommit:R,onFilter:L,valueItems:B}),$e=ee.useLoadingIndicatorTimer(S??!1),{baseId:Ge,formFieldContext:Ze,inputProps:Je,labelProps:Qe,textFieldProps:Xe,userAssistanceProps:es}=se.useTextField({ariaDescribedBy:pe.ariaDescribedBy,helpSourceLink:y,helpSourceText:m,isDisabled:Z,isFocused:Ie,isLoading:$e,isReadonly:J,isRequiredShown:w,labelEdge:Q,messages:A,styleVariant:P,userAssistanceDensity:le,value:void 0!==B&&B.length>0||void 0});Ze.hasValue=S||Ze.hasValue;const ss=`${Ge}-dropdown`,{displayValue:ts,textTags:os}=Ne(F,B),ns="none"!==Q?s.jsx(t.Label,{...Qe,...te.isPhone()?{forId:void 0}:{},children:g}):void 0,ls={label:"none"!==Q?ns:void 0,labelEdge:"none"!==Q?Q:void 0,labelStartWidth:"none"!==Q?oe:void 0},is="none"===Q?g:void 0,as="efficient"===le||"reflow"===le?Z||J?"efficient"!==le?void 0:s.jsx(N.InlineUserAssistance,{userAssistanceDensity:le,...es}):s.jsx(N.InlineUserAssistance,{assistiveText:a,fieldLabel:g,helpSourceLink:y,helpSourceText:m,messages:A,isRequiredShown:w,userAssistanceDensity:le,...es}):void 0,rs="compact"===le?s.jsx(_.CompactUserAssistance,{anchorRef:Ke,messages:A,assistiveText:a,...es}):void 0,ds=U.useTranslationBundle("@oracle/oraclejet-preact"),cs=l.useCallback((({currentRowKeyOverride:e,onPersistCurrentRowKey:t,onSelectedChange:o,searchText:n,selected:l,selectedOnlyData:i})=>s.jsx(te.DefaultList,{"aria-label":g??"",currentItemVariant:"highlight",currentKey:e,data:i??b,itemRenderer:T,itemText:F,searchText:i?void 0:Re?n:void 0,selectedKeys:l,selectionMode:"multiple",onCurrentKeyChange:t,onLoadRange:i?void 0:E,onSelectionChange:o})),[Re,T,F,g,E,b]);if(J){const e=s.jsx(r.ReadonlyTextFieldInput,{"aria-describedby":Je["aria-describedby"],"aria-label":is,"aria-labelledby":Qe.id,as:"div",elementRef:ae,hasEmptyLabel:""===g&&"none"===Q,hasInsideLabel:void 0!==g&&"inside"===Q,textAlign:ne,value:ts});return s.jsx(h.FormFieldContext.Provider,{value:Ze,children:s.jsx(d.ReadonlyTextField,{role:"presentation",columnSpan:u,compactUserAssistance:rs,inlineUserAssistance:as,onBlur:re.onFocusOut,onFocus:re.onFocusIn,ref:Ke,mainContent:e,testId:K,...ls})})}const us="inside"===Q,ps=Ce&&Fe?0===ye?.totalSize?ds.select_noMatchesFound():1===ye?.totalSize?ds.select_oneMatchFound():"exact"===ye?.sizePrecision?ds.select_sizeMatchesFound({TOTAL_SIZE:`${ye?.totalSize}`}):ds.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${ye?.totalSize}`}):"",hs=Ce&&void 0!==ye&&(null===ye||ye.totalSize>0||te.isBeforeDataFetch(ye)||Ae),bs=""===g&&"none"===Q,ys=te.isPhone()&&!Z?s.jsx(te.SelectMobileFieldInput,{"aria-controls":ss,"aria-describedby":Je["aria-describedby"],"aria-expanded":Ce,"aria-invalid":Je["aria-invalid"],"aria-label":is,"aria-labelledby":Qe.id,displayValue:ts,hasEmptyLabel:bs,hasInsideLabel:us,isRequired:f,onBlur:Je.onBlur,onFocus:Je.onFocus,placeholder:k,ref:ie,textAlign:ne,variant:Je.variant}):s.jsx(Oe,{"aria-controls":ss,"aria-expanded":Ce,"aria-label":is,displayValue:ts,hasEmptyLabel:bs,hasInsideLabel:us,inputRef:ie,isAddToListShown:Te,isKeyboardNavigable:!Z&&!te.isMobile(),isRequired:f,isTextTagListShown:Ie&&0!==os.length,isUserFiltering:Re,liveRegionText:ps,placeholder:k,removeIcon:te.isTablet()?"always":"never",selectedValuesDescriptionId:Be,selectedValuesKeyboardNavDescriptionId:Pe,textAlign:ne,textTagListData:os,userInput:We,virtualKeyboard:te.isTablet()?O:void 0,...fe,...Je,...Ye}),ms=hs?te.isPhone()?s.jsx(ze,{"aria-describedby":pe.ariaDescribedBy,"aria-label":is,assistiveText:a,collectionRenderer:c??cs,data:b,dropdownId:ss,enabledElementRef:ie,helpSourceLink:y,helpSourceText:m,isAddToListShown:Te,isDisabled:Z,isEmptyResults:Ae,isFocused:Ie,isLoading:$e,isOpen:hs,isReadonly:J,isRequired:f,isSelectedOnlyView:De,itemText:F,label:g,liveRegionText:ps,placeholder:k,propIsLoading:S,selectedValuesDescriptionId:Be,setDropdownOpen:Me,setUserInput:He,stopFiltering:qe,textAlign:ne,textTagListRef:Ye.textTagListRef,userAssistanceDensity:le,userInput:We,valueItems:B,virtualKeyboard:O,onAddToListAction:ue.onAction,onCommit:R,onFieldBlur:re.onFocusOut,onFieldFocus:re.onFocusIn,onFieldInput:fe.onInput,onFieldKeyDown:fe.onKeyDown,onFieldKeyUp:fe.onKeyUp}):s.jsx(ke,{...xe,assistiveText:a,collectionRenderer:c??cs,collectionRendererContext:he,dropdownId:ss,dropdownRef:Se,helpSourceLink:y,helpSourceText:m,isAddToListShown:Te,isDisabled:Z,isDropdownAbove:ge,isEmptyResults:Ae,isOpen:hs,isReadonly:J,label:g,mainFieldRef:Ke,onAddToListAction:ue.onAction,userAssistanceDensity:le}):null;return s.jsxs(W.Fragment,{children:[s.jsx(h.FormFieldContext.Provider,{value:Ze,children:s.jsx(Ve,{columnSpan:u,compactUserAssistance:rs,fieldLabel:g,hasInsideLabel:us,inlineUserAssistance:as,isDropdownArrowShown:!0,isDropdownSelectedOnlyView:De,isSelectedValuesCountShown:ve,mainFieldRef:Ke,onBlur:re.onFocusOut,onFocus:re.onFocusIn,onDropdownArrowClick:me.onClick,onSelectedValuesCountKeyDown:je.onKeyDown,onSelectedValuesCountKeyUp:je.onKeyUp,onSelectedValuesCountMouseDown:je.onMouseDown,onSelectedValuesCountToggle:je.onToggle,selectedValuesCount:B?.length,testId:K,...ls,...Ue,...Xe,children:ys})}),ms]})}));e.SelectMultiple=qe}));
//# sourceMappingURL=SelectMultiple-7e9bd455.js.map
