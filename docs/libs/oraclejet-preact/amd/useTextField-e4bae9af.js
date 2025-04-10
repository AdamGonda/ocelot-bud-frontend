define(['exports', './useMessageSeverity-6b4548ce', './stringUtils-fd898858', './useFocusWithin-6de34a65', './useFormFieldContextProps-e0ab321c', './useId-bea76214'], (function(e,s,i,o,n,t){"use strict";e.useTextField=function({ariaDescribedBy:e,contentVariant:r,helpSourceLink:a,helpSourceText:d,isDisabled:u,isFocused:c,isLoading:l,isReadonly:p,isRequiredShown:v,labelEdge:F,messages:b,styleVariant:h,userAssistanceDensity:y,value:f}){const g=t.useId(),x="none"!==F?`${g}-label`:void 0,I=p?void 0:`${g}-input`,S=u||p?void 0:`${g}-ua`,P="compact"===y?`${g}-helpIcon`:void 0,{focusProps:m,isFocused:D}=o.useFocusWithin({isDisabled:u}),V=void 0!==f&&("string"!=typeof f||""!==f),L=n.useFormFieldContextProps({hasValue:V,isDisabled:u,isFocused:c,isInputFocused:D,isLoading:l,isReadonly:p}),R=s.useMessageSeverity(b),$="none"!==F?F:void 0;return{baseId:g,formFieldContext:L,inputProps:{id:I,"aria-describedby":i.merge([P,S,e]),"aria-invalid":"error"===R?"true":void 0,variant:h,onBlur:m?.onfocusout,onFocus:m?.onfocusin},labelProps:{forId:I,helpIconId:P,helpSourceLink:a,helpSourceText:d,id:x,isRequiredShown:v,userAssistanceDensity:y,variant:$},textFieldProps:{contentVariant:r,statusVariant:/error|warning/.test(R??"")?R:void 0,styleVariant:h},userAssistanceProps:{id:S}}}}));
//# sourceMappingURL=useTextField-e4bae9af.js.map
