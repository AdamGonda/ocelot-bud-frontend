define(['exports', 'preact/jsx-runtime', './Flex-3421f0df', './HighlightText-644bc74e', './Grid-8911aa0f', 'css!./ListItemLayoutStyles.styles.css', './ListItemText-a3b0ed3b', './Skeleton-5839404b', 'preact/hooks', './logger-0f873e29', './PRIVATE_SelectCommon/themes/dropdownStyles.css', './List-0b764e84', './Floating-5d98c1ca', './Layer-6f29b67f', 'preact/compat', './LayerHost-639b3284', './keyboardUtils-fbb389f8', './useOutsideMousedown-73d5a78a', './usePress-949a0d03', './CaretDown-80d7b5cf', './classNames-08d99695', './useComponentTheme-5aa41a8f', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutTheme', './useTestId-b5cd4766', './UNSAFE_BaseButton/themes/redwood/BaseButtonTheme', './CollectionInteractionContext-0b4ed98b', './FormFieldContext-3c44aaaa', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './Popup-66e79afa', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useTranslationBundle-d07d4b20', './Link-c4a57187', './useFocusWithin-5a504fca', './useHover-7964884c', './Separator-181f7541', './WindowOverlay-43c10424', './PRIVATE_SelectCommon/themes/mobileDropdownStyles.css', './PRIVATE_SelectCommon/themes/selectMobileDropdownStyles.css', './textAlign-ef924afd', './mergeInterpolations-9ede4cf7', './useFormFieldContext-8196183c', './PRIVATE_SelectCommon/themes/SelectMobileFieldInputStyles.css', './TextFieldUtils-f3868e96', './useTabbableMode-dc440317', './Text-cd61a065', './useAccessibleContext-23e8a333', './stringUtils-0ae982c2', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './clientHints-4f5a07b0', './tabbableUtils-85aa6918'], (function(e,t,s,n,a,o,l,r,i,d,c,u,p,h,b,m,y,S,f,x,w,C,g,v,T,F,A,D,I,k,M,E,U,j,K,P,L,R,B,N,O,_,V,H,W,Y,G,z,q,$,J,Q,X,Z,ee,te,se,ne,ae,oe,le,re,ie,de,ce,ue,pe,he,be,me,ye,Se,fe,xe,we,Ce,ge,ve){"use strict";function Te(e,t){if("string"!=typeof t)return t(e);if(e.data?.hasOwnProperty(t)){const s=e.data[t];return String(s)}d.error("SelectMultiple: itemText specifies field that does not exist: "+t)}const Fe=()=>{};const Ae=t.jsx(u.SkeletonContainer,{minimumCount:3,children:()=>t.jsx(s.Flex,{height:"12x",align:"center",children:t.jsx(r.Skeleton,{height:"4x"})})}),De=e=>0===e.button&&!e.ctrlKey,Ie=e=>{e.currentTarget===e.target&&e.preventDefault()},ke="bottom-start";const Me=()=>{};function Ee({"aria-labelledby":e,children:n,id:a,isOpen:o}){return o?t.jsx(h.Layer,{children:t.jsx(de.WindowOverlay,{children:t.jsx("div",{id:a,class:ce.mobileDropdownStyles.base,role:"dialog","aria-modal":"true","aria-labelledby":e,children:t.jsx(s.Flex,{width:"100%",height:"100%",maxHeight:"100%",direction:"column",children:n})})})}):null}const Ue=[...Object.values(pe.textInterpolations)],je=he.mergeInterpolations(Ue),Ke=b.forwardRef((({"aria-controls":e,"aria-describedby":s,"aria-expanded":n,"aria-invalid":a,"aria-label":o,"aria-labelledby":l,displayValue:r,hasEmptyLabel:i,hasInsideLabel:d=!1,isRequired:c,onBlur:u,onFocus:p,placeholder:h,textAlign:b,variant:m="default"},y)=>{const{isDisabled:S,isFocused:f,hasValue:x=!1}=be.useFormFieldContext(),{isTabbable:g,tabbableModeProps:v}=Se.useTabbableMode(),T=ye.isInputPlaceholderShown(d,x,f)?h:void 0,{UNSAFE_ariaLabelledBy:F}=xe.useAccessibleContext(),A=i?we.merge([l,F]):l,{class:D}=je({textAlign:b}),{classes:I}=C.useComponentTheme(Ce.TextFieldInputRedwoodTheme,{type:"notPassword",styleVariant:m,textarea:"notTextArea",input:"isInput",prefix:"noPrefix",suffix:"noSuffix",startContent:"noStartContent",endContent:"hasEndContent",insideLabel:d?"hasInsideLabel":"noInsideLabel",value:x?"hasValue":"noValue",focused:f?"isFocused":"notFocused",disabled:S?"isDisabled":"notDisabled"}),k=w.classNames([me.selectMobileFieldInputStyles.base,D,I]);return t.jsx("div",{"aria-autocomplete":"list","aria-controls":e,"aria-describedby":s,"aria-expanded":n,"aria-invalid":a,"aria-label":o,"aria-labelledby":A,"aria-required":c?"true":void 0,class:k,onBlur:u,onFocus:p,ref:y,role:"combobox",...g&&v,children:t.jsx("div",{class:me.selectMobileFieldInputStyles.content,children:t.jsx(fe.Text,{variant:r?"inherit":"secondary",children:r||T})})})}));e.DefaultList=function({"aria-label":e,currentItemVariant:a,currentKey:o,data:r,itemRenderer:d,itemText:p,onCurrentKeyChange:h,onItemAction:b,onLoadRange:m=Fe,onSelectionChange:y,searchText:S,selectedKeys:f,selectionMode:x}){const w=i.useCallback((e=>{const a={data:e.data,index:e.index,metadata:e.metadata,selector:e.selector,searchText:S,selectedKeys:f,onSelectionChange:({value:e})=>{y?.({value:e})}},o={data:e.data,key:e.metadata.key,metadata:e.metadata};return d?d(a):t.jsxs(s.Flex,{align:"center",children:[e.selector&&t.jsx("div",{class:c.dropdownStyles.selectorWrapper,children:e.selector()}),t.jsx("div",{class:"single"===x?c.dropdownStyles.singleSelectItem:c.dropdownStyles.multiSelectItem,children:t.jsx(l.ListItemText,{variant:"primary",children:t.jsx(n.HighlightText,{matchText:S,children:Te(o,p)})})})]})}),[d,p,y,S,f,x]),C=i.useMemo((()=>({all:!1,keys:f??new Set})),[f]),g=i.useMemo((()=>void 0!==o?{rowKey:o}:void 0),[o]),v=i.useCallback((({context:{data:e,metadata:t}})=>{b?.({context:{data:e,key:t.key,metadata:t}})}),[b]),T=i.useCallback((({value:e})=>{y?.({value:new Set(e.keys?.values())})}),[y]);return t.jsx(u.List,{"aria-label":e,allowTabbableMode:!1,currentItemVariant:a,currentItemOverride:g,data:r??null,loadingIndicator:Ae,onPersistCurrentItem:h,onItemAction:v,onLoadRange:m,onSelectionChange:T,role:"listbox",selectedKeys:C,selectionMode:x,children:e=>w(e)})},e.Dropdown=function({anchorRef:e,children:s,dropdownRef:n,id:a,isOpen:o,onAutoDismiss:l,onPosition:r}){const[d,u]=i.useState(ke),[b,m]=i.useState(o);b!==o&&(o||u(ke));const f=i.useCallback((e=>{u(e.placement),r?.(e)}),[r,u]),x=i.useCallback((e=>{l?.(e)}),[l]),w=i.useCallback((e=>{if(!e.defaultPrevented&&!y.isControlOrFunctionKey(e))switch(e.code){case y.KEYS.ESC:case y.KEYS.TAB:x(e)}}),[x]);S.useOutsideMousedown({isDisabled:!o,ref:[e,n],handler:x});const C=o?{minWidth:`${e.current?.offsetWidth}px`}:{};return b!==o&&m(o),o?t.jsx(h.Layer,{logicalParentRef:e,children:t.jsx(p.Floating,{anchorRef:e,sizeOptions:{isMaxHeightAdjusted:!0,maxHeightCeiling:400},ref:n,placement:d,offsetValue:{mainAxis:4,crossAxis:0},onPosition:f,children:t.jsx("div",{class:c.dropdownStyles.base,id:a,style:C,onKeyDown:w,onMouseDown:Ie,children:s})})}):null},e.DropdownArrow=function({isDisabled:e=!1,onClick:s,testId:n}){const{classes:a}=C.useComponentTheme(g.ButtonLabelLayoutRedwoodTheme,{size:"sm"}),{baseTheme:o}=C.useComponentTheme(T.BaseButtonRedwoodTheme),l=i.useCallback((e=>{e.preventDefault()}),[]),{pressProps:r}=f.usePress(s??Me,{isDisabled:e}),d=w.classNames([a,o,c.dropdownStyles.arrow.base,e?c.dropdownStyles.arrow.disabled:c.dropdownStyles.arrow.enabled]),u=v.useTestId(n);return t.jsx("span",{"aria-hidden":"true",class:d,tabIndex:-1,onMouseDown:l,...u,...r,children:t.jsx(x.SvgCaretDown,{})})},e.DropdownList=function({children:e,hasTopGap:s=!0,hasBottomGap:n=!0,isLoading:a=!1}){const o=w.classNames([c.dropdownStyles.list.base,s&&c.dropdownStyles.list.topGap,n&&c.dropdownStyles.list.bottomGap,a&&c.dropdownStyles.list.loading]);return t.jsx(F.CollectionInteractionContext.Provider,{value:"embedded",children:t.jsx("div",{class:o,onMouseDown:Ie,children:e})})},e.DropdownUserAssistance=function(e){const s=i.useCallback((e=>{"A"!==e.target?.tagName&&e.preventDefault()}),[]);return t.jsx(A.FormFieldContext.Provider,{value:{isFocused:!0},children:t.jsx("div",{class:c.dropdownStyles.userAssistance,onMouseDown:s,children:t.jsx(E.InlineUserAssistance,{...e})})})},e.EmptyResults=function(){const e=ae.useTranslationBundle("@oracle/oraclejet-preact");return t.jsx("div",{class:c.dropdownStyles.results.extraItem,onMouseDown:Ie,children:e.select_noMatchesFound()})},e.LinkItem=({children:e,isHighlighted:s,onAction:n})=>{const{isHover:a,hoverProps:o}=re.useHover(),{isFocused:l,focusProps:r}=le.useFocusWithin(),d=i.useCallback((e=>(e.preventDefault(),n?.(),!1)),[n]),u=w.classNames([l?c.dropdownStyles.results.linkItemFocus:void 0]),p=w.classNames([c.dropdownStyles.results.extraItem,a||l||s?c.dropdownStyles.results.linkItemHighlight:void 0]);return t.jsx("div",{class:u,...r,children:t.jsx(oe.Link,{href:"#",onClick:d,children:t.jsx("div",{class:p,...o,children:e})})})},e.MobileDropdown=Ee,e.SelectMobileDropdown=function({children:e,footer:s,hasHeaderSeparator:n=!0,header:a,id:o,isOpen:l,labelId:r}){return t.jsxs(Ee,{id:o,isOpen:l,"aria-labelledby":r,children:[a,n&&t.jsx(ie.Separator,{}),t.jsx("div",{class:ue.selectMobileDropdownStyles.content,children:e}),t.jsx(ie.Separator,{}),s]})},e.SelectMobileFieldInput=Ke,e.createKeysFromValueItems=function(e){const t=e?.reduce(((e,t)=>(e.add(t.key),e)),new Set);return t},e.isBeforeDataFetch=function(e){return"atLeast"===e.sizePrecision&&0===e.totalSize},e.isMobile=function(){const e=ge.getClientHints().deviceType;return"phone"===e||"tablet"===e},e.isPhone=function(){return"phone"===ge.getClientHints().deviceType},e.isSearchTextEmptyOrUndefined=function(e){return void 0===e||0===e.length},e.isSimpleClick=De,e.isTablet=function(){return"tablet"===ge.getClientHints().deviceType},e.preventDefault=e=>{e.preventDefault()},e.preventDefaultForCurrentTarget=Ie,e.renderItemText=Te,e.useCollectionRenderer=function({currentKey:e,onCurrentKeyChange:t,onItemAction:s,onSelectedKeysChange:n,searchText:a,selectedKeys:o,selectedOnlyData:l}){return b.useMemo((()=>{const r={searchText:a,currentRowKeyOverride:e,onPersistCurrentRowKey:t,selected:o};return void 0!==s?{...r,onRowAction:s}:{...r,onSelectedChange:n,selectedOnlyData:l}}),[e,t,s,n,a,o,l])},e.useSelectCommon=function({data:e,inputRef:t,isFocused:s,onFilter:n}){const a=i.useRef(null),o=i.useRef(null),[l,r]=i.useState(!1),[d,c]=i.useState(!1),[u,p]=i.useState({rowKey:void 0}),h=i.useRef(),b=i.useCallback((e=>{h.current=e.rowKey,p(e)}),[]),[m,S]=i.useState(!1),[f,x]=i.useState(),[w,C]=i.useState(),[g,v]=i.useState(l),[T,F]=i.useState(s),[A,D]=i.useState(m),I=i.useCallback((e=>{!e.defaultPrevented&&De(e)&&(l||r(!0),setTimeout((function(){t.current?.focus()}),0))}),[t,l]),k=i.useCallback((()=>{r(!l),t.current?.focus()}),[t,l]),M=i.useCallback((e=>{if(l)switch(r(!1),e?.type){case"keydown":if(e.code===y.KEYS.ESC)t.current?.focus();break;case"mousedown":o.current?.contains(document.activeElement)&&t.current?.focus()}}),[t,l]),E=i.useCallback((e=>{c(e.placement.startsWith("top"))}),[]),U=i.useCallback((()=>l&&o.current?ve.allTabbableElements(o.current):void 0),[l]),j=i.useCallback((t=>{if(l){if(null!=e){const t=U();t?.[0]?.focus(),void 0===u.rowKey&&b({rowKey:e.data[0]?.metadata?.key})}}else r(!0);t.preventDefault()}),[u,e,U,l,b]),K=i.useCallback((e=>{if(!y.isControlOrFunctionKey(e))switch(e.code){case y.KEYS.PAGE_UP:case y.KEYS.PAGE_DOWN:return void e.preventDefault();case y.KEYS.UP:case y.KEYS.DOWN:e.preventDefault();break;case y.KEYS.ESC:l&&(r(!1),e.preventDefault(),e.stopPropagation())}}),[l]),P=i.useCallback((e=>{if(!y.isControlOrFunctionKey(e))switch(e.code){case y.KEYS.UP:case y.KEYS.DOWN:j(e)}}),[j]),L=i.useCallback((e=>{l||r(!0),S(!0),x(e.value);const t=e.value;C(t),n?.({searchText:t})}),[l,n]),R=i.useCallback((e=>{h.current=e.value}),[]),B=i.useCallback((()=>{S(!1),x(""),C("")}),[]);return g===l&&T===s&&A===m||l||s||!m||B(),i.useEffect((()=>{l&&!m&&n?.({searchText:void 0})}),[l,m,n]),g!==l&&(l||c(!1),v(l)),T!==s&&F(s),A!==m&&D(m),{currentRowKeyRef:h,currentRowOverride:u,dropdownRef:o,getDropdownTabbableElems:U,handleDropdownArrowClick:k,handleDropdownAutoDismiss:M,handleDropdownPosition:E,handleInput:L,handleMainFieldKeyDown:K,handleMainFieldKeyUp:P,handleUpDownArrowKeys:j,isDropdownAbove:d,isDropdownOpen:l,isFocused:s||l,isUserFiltering:m,mainFieldRef:a,onCurrentKeyChange:R,onMouseDown:I,searchText:w,setCurrentRowOverride:b,setDropdownOpen:r,setUserInput:x,stopFiltering:B,userInput:f}}}));
//# sourceMappingURL=useSelectCommon-d9c4a7bd.js.map
