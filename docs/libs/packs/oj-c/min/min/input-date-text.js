define("oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMergedFormContext=function({propContainerReadonly:e,propLabelWrapping:a,propReadonly:s,propUserAssistanceDensity:r}){const n=(0,t.useFormContext)(),o=r??n.userAssistanceDensity,l=s??n.isReadonly,{isFormLayout:i,isReadonly:u,labelWrapping:d,...c}=n;return{containerProps:{...c,isFormLayout:void 0!==e||i,isReadonly:e??u,labelWrapping:a??d},readonlyValue:l,uadValue:o}}})),define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,t){"use strict";function a(e,t,a,s,r,n){const o="compact"!==n?a?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:t)||o||("none"===r?.converterHint?void 0:s)}function s(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:n,help:o,helpHints:l,userAssistanceDensity:i,validators:u}){const[d,c]=(0,t.useState)(u&&u.length?s(u):void 0),p=(0,t.useRef)();(0,t.useEffect)((()=>{if(!u||!u.length)return void c(void 0);c(s(u));const t=u.map((e=>e.hint)).filter(Boolean),a=p.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(t).then((e=>{c((t=>{const s=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return a===p.current&&s.length?[t,...s].join("\n"):t})),r?.()}))}),[u]);const v="compact"!==i?l?.sourceText:l?.definition||l?.sourceText;return{assistiveText:a(o,d,l,r?.getHint?.()??void 0,n,i),helpSourceLink:l?.source,helpSourceText:v}}})),define("oj-c/input-date-text/useImplicitDateConverter",["require","exports","preact/hooks","ojs/ojconverter-localdate"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitDateConverter=function({converter:e}){return(0,t.useMemo)((()=>e??new a.LocalDateConverter({dateStyle:"short"})),[e])}})),define("oj-c/input-date-text/useImplicitDateRangeValidator",["require","exports","ojs/ojvalidator-localdaterange","preact/hooks"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitDateRangeValidator=function({formatObj:e,dateRangeOverflowMessageDetail:s,dateRangeUnderflowMessageDetail:r,max:n,min:o}){return(0,a.useMemo)((()=>void 0!==o||void 0!==n?new t.LocalDateRangeValidator({formatObj:e,max:n,min:o,rangeOverflowMessageDetail:s,rangeUnderflowMessageDetail:r}):null),[e,s,r,o,n])}})),define("oj-c/hooks/UNSAFE_useEditableValue/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.treatNull=e.normalizeValue=e.isShallowEqual=e.hasErrorMessages=e.getVirtualKeyboardHintFromConverter=e.createMessageFromError=void 0;e.createMessageFromError=e=>"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message};e.treatNull=(e,t)=>null===e?t:e;e.normalizeValue=e=>"string"==typeof e&&""===e?null:e;e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]));e.hasErrorMessages=e=>!!e&&e.some((e=>"error"===e.severity));e.getVirtualKeyboardHintFromConverter=e=>{let t;if(e&&e.resolvedOptions){const a=e.resolvedOptions();t=a?.virtualKeyboardHint??"text"}else t="text";return t}})),define("oj-c/hooks/UNSAFE_useEditableValue/converterUtils",["require","exports","./utils"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.format=function(e,a,s){if(function(e){return null===e}(e))return{result:"success",value:a};try{return{result:"success",value:s.format(e)}}catch(e){return{result:"failure",error:(0,t.createMessageFromError)(e)}}},e.parse=function(e,a,s){if(void 0===e)return{result:"success",value:null};if(r=e,""===r||null===r)return{result:"success",value:e};var r;try{return{result:"success",value:a.parse(e)}}catch(e){return{result:"failure",error:s?.(e)??(0,t.createMessageFromError)(e)}}}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=function(){const e=(0,t.useRef)(new Map);return{setStaleIdentity:(0,t.useCallback)((t=>{const a=Symbol();return e.current.set(t,a),{isStale:()=>a!==e.current.get(t)}}),[])}}})),define("oj-c/hooks/UNSAFE_useEditableValue/reducer",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reducer=function(e,t){const a=e.customMessages??[],s=e.hiddenMessages,r=e.componentMessages,n=e.shownMessages;switch(t.type){case"UPDATE_DISPLAY_VALUE":return{...e,displayValue:t.payload};case"UPDATE_VALID":return{...e,valid:t.payload};case"UPDATE_VALUE":return{...e,value:t.payload};case"UPDATE_TRANSIENT_VALUE":return{...e,transientValue:t.payload};case"UPDATE_PREVIOUS_CONVERTER":return{...e,previousConverter:t.payload};case"UPDATE_PREVIOUS_DEFERRED_VALIDATORS":return{...e,previousDeferredValidators:t.payload};case"UPDATE_PREVIOUS_DISABLED":return{...e,previousDisabled:t.payload};case"UPDATE_PREVIOUS_READONLY":return{...e,previousReadonly:t.payload};case"UPDATE_PREVIOUS_VALIDATORS":return{...e,previousValidators:t.payload};case"UPDATE_PREVIOUS_VALUE":return{...e,previousValue:t.payload};case"UPDATE_COMPONENT_MESSAGES":return{...e,componentMessages:t.payload,shownMessages:[...a,...t.payload]};case"UPDATE_HIDDEN_MESSAGES":return{...e,hiddenMessages:t.payload};case"UPDATE_CUSTOM_MESSAGES":return{...e,customMessages:t.payload,shownMessages:[...t.payload,...r]};case"CLEAR_ALL_MESSAGES":return{...e,shownMessages:[],hiddenMessages:[],customMessages:[],componentMessages:[]};case"ADD_COMPONENT_MESSAGE":return{...e,componentMessages:[...r,t.payload],shownMessages:[...n,t.payload]};case"SHOW_HIDDEN_MESSAGES":return 0===s.length?e:{...e,hiddenMessages:[],shownMessages:[...a,...r,...s]};default:return e}},e.addComponentMessage=function(e,t){e({type:"ADD_COMPONENT_MESSAGE",payload:t})},e.clearAllMessages=function(e,t,{onMessagesCustomChanged:a}){e({type:"CLEAR_ALL_MESSAGES"}),a?.([])},e.showHiddenMessages=function(e){e({type:"SHOW_HIDDEN_MESSAGES"})},e.updateComponentMessages=function(e,t){e({type:"UPDATE_COMPONENT_MESSAGES",payload:t})},e.updateCustomMessages=function(e,t){e({type:"UPDATE_CUSTOM_MESSAGES",payload:t})},e.updateDisplayValue=function(e,t,{onRawValueChanged:a}){e({type:"UPDATE_DISPLAY_VALUE",payload:t}),a?.(t)},e.updateHiddenMessages=function(e,t){e({type:"UPDATE_HIDDEN_MESSAGES",payload:t})},e.updatePreviousConverter=function(e,t){e({type:"UPDATE_PREVIOUS_CONVERTER",payload:t})},e.updatePreviousDeferredValidators=function(e,t){e({type:"UPDATE_PREVIOUS_DEFERRED_VALIDATORS",payload:t})},e.updatePreviousDisabled=function(e,t){e({type:"UPDATE_PREVIOUS_DISABLED",payload:t})},e.updatePreviousReadonly=function(e,t){e({type:"UPDATE_PREVIOUS_READONLY",payload:t})},e.updatePreviousValidators=function(e,t){e({type:"UPDATE_PREVIOUS_VALIDATORS",payload:t})},e.updatePreviousValue=function(e,t){e({type:"UPDATE_PREVIOUS_VALUE",payload:t})},e.updateTransientValue=function(e,t,{onTransientValueChanged:a}){e({type:"UPDATE_TRANSIENT_VALUE",payload:t}),a?.(t)},e.updateValidStatus=function(e,t,{onValidChanged:a}){e({type:"UPDATE_VALID",payload:t}),a?.(t)},e.updateValue=function(e,t,{onValueChanged:a}){e({type:"UPDATE_VALUE",payload:t}),a?.(t)}})),define("oj-c/hooks/UNSAFE_useEditableValue/validationUtils",["require","exports","./utils"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateAsync=function({validators:e,value:a}){const s=(e,a)=>{try{const s=e.validate(a);if(s instanceof Promise)return s.then((()=>{}),(e=>(0,t.createMessageFromError)(e)))}catch(e){return(0,t.createMessageFromError)(e)}},r=[],n=[];for(const t of e){const e=s(t,a);void 0!==e&&(e instanceof Promise?n.push(e):r.push(e))}return{errors:r,maybeErrorPromises:n}},e.validateSync=function({validators:e,value:a}){const s=[];for(const r of e)try{r.validate(a)}catch(e){s.push((0,t.createMessageFromError)(e))}if(s.length)return{result:"failure",errors:s};return{result:"success"}}})),define("oj-c/hooks/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","./converterUtils","./utils","oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity","./reducer","./validationUtils"],(function(require,e,t,a,s,r,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=function({addBusyState:e,ariaDescribedBy:l,converter:i,defaultDisplayValue:u,deferredValidators:d,disabled:c,displayOptions:p,messagesCustom:v,onDisplayValueChanged:g,onMessagesCustomChanged:y,onRawValueChanged:f,onTransientValueChanged:m,onValidChanged:V,onValueChanged:S,translateConverterParseError:h,readonly:E,validators:b,value:D}){const M=(0,t.useRef)(!0),{setStaleIdentity:C}=(0,r.useStaleIdentity)(),[A,_]=(0,t.useReducer)(n.reducer,{shownMessages:[],hiddenMessages:[],customMessages:v,componentMessages:[],value:D,valid:"pending"},(e=>{const t=i?(0,a.format)(D,u,i):{result:"success",value:(0,s.treatNull)(D,u)};return{...e,displayValue:"success"===t.result?t.value:u}})),P=(0,t.useRef)(),x=(0,t.useCallback)((e=>{e!==P.current&&(P.current=e,V?.(e))}),[V]),O=(0,t.useCallback)(((e,t)=>(e(_,t,{onMessagesCustomChanged:y,onRawValueChanged:f,onTransientValueChanged:m,onValidChanged:x,onValueChanged:S}),!0)),[_,y,f,m,x,S]),U=(0,t.useCallback)((e=>{const t="string"==typeof e?e.trim():e;return(0,o.validateSync)({validators:d??[],value:t})}),[d]),R=(0,t.useCallback)((e=>{O(n.updateValue,e)}),[O]),T=(0,t.useCallback)((e=>{O(n.updateDisplayValue,e)}),[O]),j=(0,t.useCallback)((e=>{O(n.updateTransientValue,e)}),[O]),w=(0,t.useCallback)((e=>{let t;if(i){const r=(0,a.format)(e,u,i);"failure"===r.result?(O(n.updateComponentMessages,[r.error]),O(n.updateValidStatus,"invalidShown"),t=(0,s.treatNull)(e,u)):t=r.value}else t=(0,s.treatNull)(e,u);return t}),[i,u,O]),I=(0,t.useCallback)((e=>{const t=w(e);return O(n.updateDisplayValue,t),g?.(),!0}),[O,w,g]),N=(0,t.useCallback)((()=>"invalidShown"!==A.valid?{result:"success",value:A.value}:i?(0,a.parse)((0,s.normalizeValue)(A.displayValue),i,h):{result:"success",value:(0,s.normalizeValue)(A.displayValue)}),[i,A.displayValue,A.valid,A.value,h]),F=(0,t.useCallback)((e=>i?(0,a.parse)((0,s.normalizeValue)(e),i,h):{result:"success",value:(0,s.normalizeValue)(e)}),[i,h]),k=(0,t.useCallback)((e=>{const t=F(e);return"failure"===t.result&&(O(n.updateComponentMessages,[t.error]),O(n.updateValidStatus,"invalidShown")),t}),[O,F]),H=(0,t.useCallback)((async(t,a={})=>{const{doNotClearMessagesCustom:r=!1}=a,l=r&&(0,s.hasErrorMessages)(v);if(r?(O(n.updateComponentMessages,[]),O(n.updateHiddenMessages,[])):O(n.clearAllMessages),!(b&&0!==b.length||d&&0!==d.length))return O(n.updateValidStatus,l?"invalidShown":"valid"),!0;const i=[],u=U(t);let c;"failure"===u.result&&i.push(...u.errors),null!=t&&(c=(0,o.validateAsync)({validators:b??[],value:t})),i.push(...c?.errors??[]);const p=c?.maybeErrorPromises??[];if(!i.length&&!p.length)return O(n.updateValidStatus,l?"invalidShown":"valid"),!0;const g=0!==i.length;if(g&&O(n.updateComponentMessages,i)&&O(n.updateValidStatus,"invalidShown"),!p.length)return!g;!g&&O(n.updateValidStatus,"pending");const y=e?.("running asynchronous validation"),{isStale:f}=C("useEditableValue-full-validate");let m=!1;const V=[];for(const e of p){const t=e.then((e=>{e&&!f()&&(O(n.addComponentMessage,e),O(n.updateValidStatus,"invalidShown"),m=!0)}));V.push(t)}return await Promise.all(V),g||m||f()||O(n.updateValidStatus,l?"invalidShown":"valid"),y?.(),!g&&!m}),[e,O,d,v,C,U,b]),L=async()=>{if(c||E)return;const e=N();if("failure"===e.result)return O(n.updateComponentMessages,[e.error]),void O(n.updateValidStatus,"invalidShown");const t=e.value;await B(t,{doNotClearMessagesCustom:!0})&&O(n.updateValue,t)&&I(t)},q=(0,t.useCallback)((e=>{O(n.clearAllMessages);const t=U(e);return"failure"===t.result&&O(n.updateHiddenMessages,t.errors),O(n.updateValidStatus,"failure"===t.result?"invalidHidden":"valid"),!0}),[O,U]),B=(0,t.useCallback)((async(t,a={})=>{const{isStale:s}=C("useEditableValue-validateValueOnInternalChange"),r=e?.("Running validateValueOnInternalChange"),n=await H(t,a);return r?.(),!s()&&n}),[e,H,C]),W=(0,t.useCallback)((async(e,t=!0)=>{const a=await B(e);return a&&t&&O(n.updateValue,e),a}),[O,B]),G=(0,t.useCallback)((async({value:e})=>{const t=k(e);if("failure"===t.result)return!1;const a=t.value,s=await W(a);return s&&I(a),s}),[W,k,I]),K=(0,t.useCallback)((({value:e})=>{O(n.updateDisplayValue,e??u)}),[O,u]),z=(0,t.useCallback)((async()=>{if(E||c)return"valid";const t=k(A.displayValue);if("failure"===t.result)return"invalid";const a=t.value,s=e?.("Running component method validate"),r=await H(a);return s?.(),r?(a!==A.value&&(O(n.updateValue,a),I(a)),"valid"):"invalid"}),[e,c,O,H,k,E,I,A.displayValue,A.value]),Y=(0,t.useCallback)((()=>{q(A.value),I(A.value)}),[I,A.value,q]),$=(0,t.useCallback)((()=>{A.hiddenMessages&&A.hiddenMessages.length>0&&(O(n.showHiddenMessages),O(n.updateValidStatus,"invalidShown"))}),[O,A.hiddenMessages]);M.current||A.previousValue===D||(O(n.updatePreviousValue,D),D!==A.value&&(q(D),O(n.updateValue,D),I(D)));M.current||A.previousConverter===i||(O(n.updatePreviousConverter,i),"invalidShown"!==A.valid&&I(D),"invalidShown"===A.valid&&L());M.current||A.previousValidators===b||(O(n.updatePreviousValidators,b),"invalidShown"===A.valid&&L());if(!M.current&&(!A.customMessages&&v||A.customMessages&&!v||A.customMessages&&v&&!(0,s.isShallowEqual)(A.customMessages,v))){const e=A.componentMessages??[],t=A.hiddenMessages??[],a=v??[],r=(0,s.hasErrorMessages)(a),o=t.length>0,l=0===e.length&&0===t.length&&0===a.length;O(n.updateCustomMessages,a),r&&O(n.updateValidStatus,"invalidShown"),!r&&"pending"!==A.valid&&(l&&O(n.updateValidStatus,"valid")||o&&O(n.updateValidStatus,"invalidHidden"))}if(!M.current&&(A.previousDeferredValidators!==d||A.previousDisabled!==c||A.previousReadonly!==E)){const e=0===d?.length;if(A.previousDeferredValidators!==d&&O(n.updatePreviousDeferredValidators,d),A.previousDisabled!==c&&O(n.updatePreviousDisabled,c),A.previousReadonly!==E&&O(n.updatePreviousReadonly,E),e||!E&&!c)switch(A.valid){case"valid":const e=N();if("failure"===e.result)O(n.updateComponentMessages,[e.error]),O(n.updateValidStatus,"invalidShown");else{const t=U(e.value);"failure"===t.result&&O(n.updateHiddenMessages,t.errors)&&O(n.updateValidStatus,"invalidHidden")}break;case"invalidHidden":0===d?.length&&(O(n.updateValidStatus,"valid"),O(n.updateHiddenMessages,[]));break;case"invalidShown":L()}}M.current&&(M.current=!1);return(0,t.useEffect)((()=>{if(O(n.updatePreviousValue,D),O(n.updatePreviousConverter,i),O(n.updatePreviousValidators,b),O(n.updatePreviousDeferredValidators,d),O(n.updatePreviousDisabled,c),O(n.updatePreviousReadonly,E),O(n.updateCustomMessages,v),O(n.updateTransientValue,D),c||E)O(n.updateValidStatus,"valid"),I(D);else{const e=U(D);"failure"===e.result&&O(n.updateHiddenMessages,e.errors)&&O(n.updateValidStatus,(0,s.hasErrorMessages)(v)?"invalidShown":"invalidHidden"),"success"===e.result&&O(n.updateValidStatus,(0,s.hasErrorMessages)(v)?"invalidShown":"valid")&&I(D)}}),[]),{value:A.value,displayValue:A.displayValue,formatValue:w,methods:{reset:Y,showMessages:$,validate:z},onCommitValue:W,parseValue:k,refreshDisplayValue:I,setDisplayValue:T,setTransientValue:j,setValue:R,textFieldProps:{"aria-describedby":l,messages:"none"!==p?.messages?A.shownMessages:void 0,onCommit:G,onInput:K,value:A.displayValue},validateValueOnExternalChange:q}}})),define("oj-c/hooks/UNSAFE_useEditableValue/index",["require","exports","./utils","./useEditableValue"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=e.treatNull=e.getVirtualKeyboardHintFromConverter=void 0,Object.defineProperty(e,"getVirtualKeyboardHintFromConverter",{enumerable:!0,get:function(){return t.getVirtualKeyboardHintFromConverter}}),Object.defineProperty(e,"treatNull",{enumerable:!0,get:function(){return t.treatNull}}),Object.defineProperty(e,"useEditableValue",{enumerable:!0,get:function(){return a.useEditableValue}})})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:n}){const o=(0,s.useTranslationBundle)("@oracle/oraclejet-preact"),l=n||o.formControl_requiredMessageDetail(),i=(0,a.useMemo)((()=>r?new t({label:e,messageDetail:l}):null),[r]);return(0,a.useMemo)((()=>[i].filter(Boolean)),[i])}})),define("oj-c/input-date-text/useInputDateTextPreact",["require","exports","preact/hooks","./useImplicitDateConverter","./useImplicitDateRangeValidator","oj-c/hooks/UNSAFE_useEditableValue/index","oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators"],(function(require,e,t,a,s,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useInputDateTextPreact=function({autocomplete:e="on",autofocus:o,converter:l,dateRangeOverflowMessageDetail:i,dateRangeUnderflowMessageDetail:u,disabled:d,displayOptions:c,labelEdge:p,labelHint:v,labelStartWidth:g,max:y,messagesCustom:f,min:m,readonly:V,required:S,requiredMessageDetail:h,textAlign:E,userAssistanceDensity:b,validators:D,value:M,onMessagesCustomChanged:C,onRawValueChanged:A,onValidChanged:_,onValueChanged:P,...x},O){const U=(0,r.treatNull)(m),R=(0,r.treatNull)(y),T=(0,a.useImplicitDateConverter)({converter:l}),j=(0,s.useImplicitDateRangeValidator)({formatObj:T,dateRangeOverflowMessageDetail:i,dateRangeUnderflowMessageDetail:u,max:R,min:U}),w=(0,t.useMemo)((()=>[...j?[j]:[],...D||[]]),[j,D]),I=(0,n.useDeferredValidators)({labelHint:v,required:S,requiredMessageDetail:h}),{methods:N,textFieldProps:F,value:k}=(0,r.useEditableValue)({addBusyState:O,ariaDescribedBy:x["aria-describedby"],converter:T,defaultDisplayValue:"",deferredValidators:I,disabled:d,displayOptions:c,messagesCustom:f,onMessagesCustomChanged:C,onRawValueChanged:A,onValidChanged:_,onValueChanged:P,readonly:V,validators:w,value:M}),H=null===k||"string"==typeof k&&""===k;return{methods:N,inputTextProps:{autoComplete:e,autoFocus:o,isDisabled:d,isReadonly:V,isRequired:S,isRequiredShown:S&&("compact"===b||H),label:v,labelEdge:p,labelStartWidth:g,textAlign:E,userAssistanceDensity:b,...F}}}})),define("oj-c/input-date-text/input-date-text",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormVariantContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_InputText","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","ojs/ojcontext","ojs/ojvcomponent","preact/compat","preact/hooks","./useInputDateTextPreact","@oracle/oraclejet-preact/UNSAFE_IntlDateTime","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","css!oj-c/input-date-text/input-date-text-styles.css"],(function(require,e,t,a,s,r,n,o,l,i,u,d,c,p,v,g,y){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputDateText=void 0;const f={messages:"display",converterHint:"display",validatorHint:"display"},m={instruction:""},V={definition:"",source:""},S=[],h=[];e.InputDateText=(0,d.registerCustomElement)("oj-c-input-date-text",(0,c.forwardRef)((({autocomplete:e="on",columnSpan:a=1,containerReadonly:o,converter:c=null,disabled:E=!1,displayOptions:b=f,help:D=m,helpHints:M=V,id:C,labelWrapping:A,messagesCustom:_=S,readonly:P,required:x=!1,userAssistanceDensity:O,validators:U=h,value:R=null,...T},j)=>{const w=(0,p.useRef)(),I=(0,p.useRef)(),N=(0,p.useCallback)(((e="InputDateText: busyState")=>w.current?u.getContext(w.current).getBusyContext().addBusyState({description:`oj-c-input-date-text id=${C} is ${e}`}):()=>{}),[C]),{containerProps:F,uadValue:k,readonlyValue:H}=(0,r.useMergedFormContext)({propContainerReadonly:o,propLabelWrapping:A,propReadonly:P,propUserAssistanceDensity:O}),{inputTextProps:L,methods:q}=(0,v.useInputDateTextPreact)({autocomplete:e,converter:c,disabled:E,displayOptions:b,messagesCustom:_,readonly:H,required:x,userAssistanceDensity:k,validators:U,value:R,...T},N);(0,p.useImperativeHandle)(j,(()=>({blur:()=>I.current?.blur(),focus:()=>I.current?.focus(),...q})),[q]);const B=(0,i.useAssistiveText)({converter:c,displayOptions:b,help:D,helpHints:M,userAssistanceDensity:L.userAssistanceDensity,validators:U}),W=(0,n.useFormVariantContext)();if(!g.DateTimeUtils.isDateOnlyIsoString(R))throw new Error("value must be a date-only ISO string");if(!g.DateTimeUtils.isDateOnlyIsoString(T.min))throw new Error("min must be a date-only ISO string");if(!g.DateTimeUtils.isDateOnlyIsoString(T.max))throw new Error("max must be a date-only ISO string");return(0,t.jsx)(d.Root,{id:C,ref:w,class:y.layoutSpanStyles.layoutSpanColumn[a],children:(0,t.jsx)(s.FormContext.Provider,{value:F,children:(0,t.jsx)(l.InputText,{ref:I,...B,...L,variant:W})})})})),"InputDateText",{properties:{autocomplete:{type:"string"},columnSpan:{type:"number"},containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},converter:{type:"object|null",properties:{format:{type:"function"},parse:{type:"function"}}},dateRangeOverflowMessageDetail:{type:"string"},dateRangeUnderflowMessageDetail:{type:"string"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{converterHint:{type:"string",enumValues:["none","display"]},messages:{type:"string",enumValues:["none","display"]},validatorHint:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},labelEdge:{type:"string",enumValues:["none","start","top","inside"],binding:{consume:{name:"containerLabelEdge"}}},labelHint:{type:"string"},labelStartWidth:{type:"number|string",binding:{consume:{name:"labelWidth"}}},labelWrapping:{type:"string",enumValues:["truncate","wrap"],binding:{consume:{name:"labelWrapping"}}},max:{type:"string|null"},messagesCustom:{type:"Array<object>",writeback:!0},min:{type:"string|null"},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},requiredMessageDetail:{type:"string"},textAlign:{type:"string",enumValues:["end","start","right"]},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},validators:{type:"Array<object>|null"},value:{type:"string|null",writeback:!0},rawValue:{type:"string",readOnly:!0,writeback:!0},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["messagesCustom","rawValue","valid","value"],_READ_ONLY_PROPS:["rawValue","valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id","autofocus"]},methods:{blur:{},focus:{},showMessages:{},reset:{},validate:{}}},{autocomplete:"on",columnSpan:1,converter:null,disabled:!1,displayOptions:{messages:"display",converterHint:"display",validatorHint:"display"},help:{instruction:""},helpHints:{definition:"",source:""},messagesCustom:[],required:!1,validators:[],value:null},{"@oracle/oraclejet-preact":a.default},{consume:[n.FormVariantContext,o.TabbableModeContext]})})),define("oj-c/input-date-text",["require","exports","oj-c/input-date-text/input-date-text"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputDateText=void 0,Object.defineProperty(e,"InputDateText",{enumerable:!0,get:function(){return t.InputDateText}})}));
//# sourceMappingURL=input-date-text.js.map