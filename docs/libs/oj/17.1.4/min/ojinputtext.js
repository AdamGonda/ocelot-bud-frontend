/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojthemeutils","ojs/ojeditablevalue","ojs/ojcore-base","ojs/ojdomutils","ojs/ojfilter-length","ojs/ojvalidator-regexp","ojs/ojcustomelement-utils"],function(e,t,i,n,s,r,a,o,l){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,function(){var e={properties:{readonly:{binding:{consume:{name:"readonly"}}},readonlyUserAssistanceShown:{binding:{consume:{name:"readonlyUserAssistanceShown"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}},labelEdge:{binding:{consume:{name:"labelEdge"}}}}},t={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},maskIcon:{type:"string",enumValues:["hidden","visible"],value:"hidden"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},readonlyUserAssistanceShown:{type:"string",enumValues:["confirmationAndInfoMessages","none"],value:"none"},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{accessibleHidePassword:{type:"string"},accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},accessibleShowPassword:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"string",writeback:!0}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},validate:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}};t.extension._WIDGET_NAME="ojInputPassword",t.extension._INNER_ELEM="input",t.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],t.extension._ALIASED_PROPS={readonly:"readOnly"},s.CustomElementBridge.register("oj-input-password",{metadata:s.CollectionUtils.mergeDeep(t,e)});var i={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},clearIcon:{type:"string",enumValues:["always","conditional","never"],value:"never"},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},max:{type:"number"}}},list:{type:"string",extension:{_COPY_TO_INNER_ELEM:!0}},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},readonlyUserAssistanceShown:{type:"string",enumValues:["confirmationAndInfoMessages","none"],value:"none"},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{accessibleClearIcon:{type:"string"},accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0},virtualKeyboard:{type:"string",enumValues:["auto","email","number","search","tel","text","url"],value:"auto"}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},validate:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}};i.extension._WIDGET_NAME="ojInputText",i.extension._INNER_ELEM="input",i.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex","autocapitalize"],i.extension._ALIASED_PROPS={readonly:"readOnly"},s.CustomElementBridge.register("oj-input-text",{metadata:s.CollectionUtils.mergeDeep(i,e)});var n={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string"},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string"},validatorHint:{type:"Array<string>|string"}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},counter:{type:"string",enumValues:["none","remaining"],value:"none"},max:{type:"number"}}},maxRows:{type:"number",value:0},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},readonlyUserAssistanceShown:{type:"string",enumValues:["confirmationAndInfoMessages","none"],value:"none"},required:{type:"boolean",value:!1},resizeBehavior:{type:"string",enumValues:["both","horizontal","none","vertical"],value:"none"},rows:{type:"number",extension:{_COPY_TO_INNER_ELEM:!0}},translations:{type:"object",value:{},properties:{accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0}},methods:{getProperty:{},refresh:{},reset:{},setProperties:{},setProperty:{},showMessages:{},validate:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateEnd:{},ojAnimateStart:{}},extension:{}};n.extension._WIDGET_NAME="ojTextArea",n.extension._INNER_ELEM="textarea",n.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex","autocapitalize"],n.extension._ALIASED_PROPS={readonly:"readOnly"},s.CustomElementBridge.register("oj-text-area",{metadata:s.CollectionUtils.mergeDeep(n,e)})}(),s.__registerWidget("oj.inputBase",t.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS_FOR_WIDGET:[{attribute:"disabled",validateOption:!0},{attribute:"pattern"},{attribute:"placeholder"},{attribute:"value"},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"required",coerceDomValue:!0,validateOption:!0},{attribute:"title"},{attribute:"spellcheck"}],_INPUT_HELPER_KEY:"",_FOCUS_HANDLER_KEY:"focus",_BLUR_HANDLER_KEY:"blur",_KEYDOWN_HANDLER_KEY:"keydown",_KEYUP_HANDLER_KEY:"keyup",_COMPOSITIONSTART_HANDLER_KEY:"compositionstart",_COMPOSITIONEND_HANDLER_KEY:"compositionend",_INPUT_HANDLER_KEY:"input",_DROP_HANDLER_KEY:"drop",_CLICK_HANDLER_KEY:"click",_TEXT_FIELD_COUNTER_CLASS:"oj-text-field-counter",_TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS:"oj-text-field-hidden-aria-live",_TEXT_FIELD_MAX_LENGTH_REMAINING_KEY:"accessibleMaxLengthRemaining",_TEXT_FIELD_MAX_LENGTH_EXCEEDED_KEY:"accessibleMaxLengthExceeded",_counterSpanEl:null,_ariaLiveTimer:null,options:{asyncValidators:[],autocomplete:void 0,autofocus:!1,labelledBy:null,name:"",placeholder:"",rawValue:void 0,readOnly:!1,readonlyUserAssistanceShown:"none",required:!1,validators:[]},_SaveAttributes:function(e){var t=this._superApply(arguments);return this._processAttrCheck(),t},_InitOptions:function(e,t){this._super(e,t),this._IsCustomElement()||n.EditableValueUtils.initializeOptionsFromDom(this._GET_INIT_OPTIONS_PROPS_FOR_WIDGET,t,this)},_ComponentCreate:function(){var e=this._superApply(arguments),i=this.options.readOnly;if(this._rtl="rtl"===this._GetReadingDirection(),this._isAndroidDevice=s.AgentUtils.getAgentInfo().os===s.AgentUtils.OS.ANDROID,"boolean"==typeof i&&this.element.prop("readonly",i),this._DoWrapElement()){var n,r;if(this.OuterWrapper?(n=this.OuterWrapper).className?n.className=n.className+" "+this._WIDGET_CLASS_NAMES:n.className=this._WIDGET_CLASS_NAMES:((n=document.createElement("div")).className=this._WIDGET_CLASS_NAMES,this.element[0].parentNode&&this.element[0].parentNode.insertBefore(n,this.element[0])),r=n,this._wrapper=t(n),this._DoWrapElementAndTriggers()){var o=this._CreateContainerWrapper();n.appendChild(o),r=o;var l=this._CreateMiddleWrapper();l&&(o.appendChild(l),r=l)}r.appendChild(this.element[0]),this._focusable({element:this._wrapper,applyHighlight:!0})}else this._focusable({element:this.element,applyHighlight:!0});return this._CLASS_NAMES&&(this.element.addClass(this._CLASS_NAMES),this.element.addClass("oj-text-field-input")),this._defaultRegExpValidator={},this._eventHandlers=null,this._hasMaxLength()&&(this.lengthFilter=new a(this.options.length)),e},_AfterCreate:function(){var e=this._superApply(arguments),i=this;if(this._refreshRequired(this.options.required),this._attachDetachEventHandlers(),this._AppendInputHelper(),this._AppendAriaLiveHelper(),t.each(["disabled","readOnly"],function(e,t){i.options[t]&&i._processOptions(t,i.options[t])}),this._IsCustomElement()){let e=this.options.labelledBy;this._initLabelledByForInputBase(e)}return this._hasMaxLength()&&this._processLengthCounterAttr(this.options.length.counter),e},_IsRequired:function(){return this.options.required},_AfterSetOptionRequired:n.EditableValueUtils._AfterSetOptionRequired,_AfterSetOptionValidators:n.EditableValueUtils._AfterSetOptionValidators,_AfterSetOptionAsyncValidators:n.EditableValueUtils._AfterSetOptionAsyncValidators,_AfterSetOptionConverter:n.EditableValueUtils._AfterSetOptionConverter,_ResetConverter:n.EditableValueUtils._ResetConverter,_GetConverter:n.EditableValueUtils._GetConverter,_GetNormalizedValidatorsFromOption:n.EditableValueUtils._GetNormalizedValidatorsFromOption,_GetNormalizedAsyncValidatorsFromOption:n.EditableValueUtils._GetNormalizedAsyncValidatorsFromOption,_SetDisplayValue:function(e){if(this._superApply(arguments),this.options.readOnly){let t=this._getReadonlyDiv();t&&(t.textContent=e)}},_createOrUpdateReadonlyDiv:n.EditableValueUtils._createOrUpdateReadonlyDiv,_processOptions:function(e,t){"disabled"===e&&this.element.prop("disabled",t),"readOnly"===e&&(this.element.prop("readonly",t),t&&this._createOrUpdateReadonlyDiv(this.element[0],this._DoWrapElement()&&this.OuterWrapper),this._refreshStateTheming("readOnly",t)),"disabled"!==e&&"readOnly"!==e||this._attachDetachEventHandlers()},_setOption:function(e,t,i){const n=this.options[e];var s=this._superApply(arguments);switch(e){case"disabled":case"readOnly":this._processOptions(e,t);break;case"pattern":this._defaultRegExpValidator.regexp=this._getImplicitRegExpValidator(),this._AfterSetOptionValidators();break;case"labelledBy":this._setLabelledByForInputBase(n,t)}return s},_AfterSetOption:function(e,t,i){switch(this._superApply(arguments),e){case"readOnly":this._AfterSetOptionDisabledReadOnly(e,n.EditableValueUtils.readOnlyOptionOptions);break;case"required":this._AfterSetOptionRequired(e);break;case"validators":this._AfterSetOptionValidators(e);break;case"asyncValidators":this._AfterSetOptionAsyncValidators(e);break;case"converter":this._AfterSetOptionConverter(e);break;case"length":this._AfterSetOptionLength(this.options.length)}},_hasMaxLength:function(){return this.options.length&&this.options.length.max&&!isNaN(this.options.length.max)},_setLabelledByForInputBase:function(e,t){if(t){const e=this._GetContentElement()[0].id;this._labelledByUpdatedForInputComp(t,e)}},_initLabelledByForInputBase:function(e){this._initInputIdLabelForConnection(this._GetContentElement()[0],this.widget()[0].id,e)},_filterTextOnValueChange:function(){if(this.options.length.max){var e=this.options.rawValue,t=this.options.value;this._filterTextAndSetValues(e,t,!0,!1)}},_destroy:function(){var e=this._superApply(arguments);return this.element.off("blur drop keydown keyup compositionstart compositionend input"),this._inputHelper&&this._inputHelper.remove(),this._DoWrapElement()&&!this._IsCustomElement()&&(this._DoWrapElementAndTriggers()?r.unwrap(this.element,this._wrapper):r.unwrap(this.element)),e},_SetLoading:function(){this._super(),this.element.prop("readonly",!0)},_ClearLoading:function(){this._super(),this.element.prop("readonly",this.options.readOnly)},_attachDetachEventHandlers:function(){if(this.options.readOnly||this.options.disabled){if(this._eventHandlers)for(var e=[this._FOCUS_HANDLER_KEY,this._BLUR_HANDLER_KEY,this._KEYDOWN_HANDLER_KEY,this._KEYUP_HANDLER_KEY,this._COMPOSITIONSTART_HANDLER_KEY,this._COMPOSITIONEND_HANDLER_KEY,this._INPUT_HANDLER_KEY,this._DROP_HANDLER_KEY],i=0,n=e.length;i<n;i++)this._eventHandlers[e[i]]&&(this.element.off(e[i],this._eventHandlers[e[i]]),delete this._eventHandlers[e[i]])}else{this._eventHandlers={};var s=t.proxy(this._onFocusHandler,this),r=t.proxy(this._onBlurHandler,this),a=t.proxy(this._onKeyDownHandler,this),o=t.proxy(this._onKeyUpHandler,this),l=t.proxy(this._onCompositionStartHandler,this),p=t.proxy(this._onCompositionEndHandler,this),_=t.proxy(this._onInputHandler,this),d=function(){this.focus()};this.element.on(this._FOCUS_HANDLER_KEY,s),this.element.on(this._BLUR_HANDLER_KEY,r),this.element.on(this._KEYDOWN_HANDLER_KEY,a),this.element.on(this._KEYUP_HANDLER_KEY,o),this.element.on(this._COMPOSITIONSTART_HANDLER_KEY,l),this.element.on(this._COMPOSITIONEND_HANDLER_KEY,p),this.element.on(this._INPUT_HANDLER_KEY,_),this.element.on(this._DROP_HANDLER_KEY,d),this._eventHandlers[this._FOCUS_HANDLER_KEY]=s,this._eventHandlers[this._BLUR_HANDLER_KEY]=r,this._eventHandlers[this._KEYDOWN_HANDLER_KEY]=a,this._eventHandlers[this._KEYUP_HANDLER_KEY]=o,this._eventHandlers[this._COMPOSITIONSTART_HANDLER_KEY]=l,this._eventHandlers[this._COMPOSITIONEND_HANDLER_KEY]=p,this._eventHandlers[this._INPUT_HANDLER_KEY]=_,this._eventHandlers[this._DROP_HANDLER_KEY]=d}},_OPTION_TO_CSS_MAPPING:{readOnly:"oj-read-only"},_processAttrCheck:function(){for(var e=this._ATTR_CHECK,t=0,i=e.length;t<i;t++){var n=e[t].attr;"setMandatory"in e[t]&&this.element.attr(n,e[t].setMandatory)}},_onFocusHandler:function(){this._hasMaxLength()&&this._processLengthCounterAttr(this.options.length.counter)},_onBlurHandler:function(e){this._SetValue(this._GetDisplayValue(),e),this._hasMaxLength()&&this._processLengthCounterAttr(this.options.length.counter)},_onKeyDownHandler:function(e){},_onKeyUpHandler:function(e){e.keyCode===t.ui.keyCode.ENTER&&this._SetValue(this._GetDisplayValue(),e)},_onCompositionStartHandler:function(){this._isComposing=!0},_onCompositionEndHandler:function(e){this._isComposing=!1,this._SetRawValue(this._GetContentElement().val(),e),this._hasMaxLength()&&this._onInputHandler(e)},_onInputHandler:function(e){if(!this._isComposing||this._isAndroidDevice)if(this._hasMaxLength()){var t=this._GetContentElement().val();this._filterTextAndSetValues(t,t,!1,!0)}else this._SetRawValue(this._GetContentElement().val(),e)},_DoWrapElement:function(){return this._WIDGET_CLASS_NAMES},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},_CreateContainerWrapper:function(){var e=document.createElement("div");return e.setAttribute("role","presentation"),e.className=this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES,e},_AppendInputHelper:function(){if(this._INPUT_HELPER_KEY&&this._DoWrapElement()){var e=this.element.attr("aria-describedby")||"",i=this._GetSubId(this._INPUT_HELPER_KEY);e+=" "+i,this.element.attr("aria-describedby",e),this._inputHelper=t("<div class='oj-helper-hidden-accessible' aria-hidden='true' id='"+i+"'>"+this._EscapeXSS(this.getTranslatedString(this._INPUT_HELPER_KEY))+"</div>"),this._AppendInputHelperParent().append(this._inputHelper)}},_AppendAriaLiveHelper:function(){var e=this._AppendInputHelperParent();if(this.options.length&&this.options.length.max){var t=document.createElement("div");t.classList.add("oj-helper-hidden-accessible"),t.classList.add(this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS);var i=document.createElement("div");i.setAttribute("aria-live","polite");var n=document.createElement("div");n.setAttribute("aria-live","assertive"),t.appendChild(i),t.appendChild(n),e[0].appendChild(t)}},_EscapeXSS:function(e){return t("<span>"+e+"</span>").text()},_AppendInputHelperParent:function(){return this.widget()},_GetImplicitValidators:function(){var e=this._superApply(arguments);if(this.options.pattern){var t=this._getImplicitRegExpValidator();this._defaultRegExpValidator.regexp=t}return Object.assign(this._defaultRegExpValidator,e)},_CanSetValue:function(){return!!this._super()&&!(this.options.readOnly||!1)},_refreshStateTheming:function(e,t){-1!==Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(e)&&this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[e],!!t)},_getImplicitRegExpValidator:function(){if(!this.options.pattern)return null;var e={pattern:this.options.pattern,label:this._getLabelText()};return t.extend(e,this.options.translations.regexp||{}),new o(e)},_GetAriaLabelElement:function(){return this.element[0]},_GetSubId:function(e){return this.uuid+"_"+e},_IsRTL:function(){return this._rtl},_IsTextFieldComponent:function(){return!0},_GetContentWrapper:function(){var e=this._GetContentElement()[0];if(!e.parentElement.classList.contains("oj-text-field-middle")){var t=document.createElement("DIV");t.classList.add("oj-text-field-middle"),e.parentElement.insertBefore(t,e),t.appendChild(e)}return e.parentElement},_resetLengthFilter:function(e){this.lengthFilter=new a(e)},_AfterSetOptionLength:function(e){var t;e.max&&(this._resetLengthFilter(e),t=this._GetContentWrapper().parentElement.parentNode.classList.contains("oj-complete")?this.element[0].value:this.options.value,this._filterTextAndSetValues(t,t,!0,!1));this._processLengthCounterAttr(e.counter)},_setFocusOnTextAreaBind:function(){this._setFocusOnTextArea=function(){this.element[0].focus()}.bind(this)},_processLengthCounterAttr:function(e){var t=this._GetContentWrapper().parentElement,i=t.querySelector("."+this._TEXT_FIELD_COUNTER_CLASS),n=t.parentNode.querySelector("."+this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS),s=this.lengthFilter?this.lengthFilter.calcLength(this.options.rawValue):-1,r="",a="",o=document.activeElement===this.element[0];if("none"===e||null==e||0===this.options.length.max||this.options.disabled||this.options.readOnly)i&&(i.removeEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea),t.removeChild(i)),this._counterSpanEl=null,-1===s||0===this.options.length.max||this.options.disabled||this.options.readOnly||!o?a="":(r=this.options.length.max-s,a=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_REMAINING_KEY,{chars:r}));else{if(null===i){var l=document.createElement("div");l.className=this._TEXT_FIELD_COUNTER_CLASS,this._TEXTAREA_COUNTER_CONTAINER&&(l.className+=" "+this._TEXTAREA_COUNTER_CONTAINER),i=document.createElement("span"),this._INPUTTEXT_COUNTER_EL&&(i.className+=" "+this._INPUTTEXT_COUNTER_EL),this._TEXTAREA_COUNTER_EL&&(i.className+=" "+this._TEXTAREA_COUNTER_EL,this._setFocusOnTextAreaBind(),l.addEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea)),l.appendChild(i),t.appendChild(l),this._counterSpanEl=i,this._counterSpanEl.textContent=""}-1!==s&&(r=this.options.length.max-s,o&&(a=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_REMAINING_KEY,{chars:r})))}this._counterSpanEl&&(this._counterSpanEl.textContent=r),n&&(this._ariaLiveTimer&&clearTimeout(this._ariaLiveTimer),this._ariaLiveTimer=setTimeout(()=>{n.children[0].textContent=a,this._ariaLiveTimer=null},500))},_filterTextAndSetValues(e,t,i,n){var s=this.lengthFilter.filter(e,t);this._SetRawValue(s,null),this._SetDisplayValue(s,null);var r=this._GetContentWrapper().parentElement.parentNode.querySelector("."+this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS);if(r){var a=r.children[1];(s?s.length:0)<(t?t.length:0)?(a.textContent="",a.textContent=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_EXCEEDED_KEY,{len:this.options.length.max})):this.lastFilteredText!==t&&(a.textContent="")}this.lastFilteredText=s,i&&this._SetValue(this.lastFilteredText),n&&this._processLengthCounterAttr(this.options.length.counter)},refresh:function(){var e=this._superApply(arguments);return this._rtl="rtl"===this._GetReadingDirection(),this._refreshRequired(this.options.required),e},_refreshRequired:n.EditableValueUtils._refreshRequired,_labelledByUpdatedForInputComp:n.EditableValueUtils._labelledByUpdatedForInputComp,_initInputIdLabelForConnection:n.EditableValueUtils._initInputIdLabelForConnection,_linkLabelForInputComp:n.EditableValueUtils._linkLabelForInputComp,_ValidateReturnBoolean:n.EditableValueUtils._ValidateReturnBoolean,_ValidateReturnPromise:n.EditableValueUtils._ValidateReturnPromise,getNodeBySubId:function(e){return this._super(e)},validate:n.EditableValueUtils.validate,_AriaRequiredUnsupported:function(){return!1},widget:function(){return this._DoWrapElement()?this._wrapper:this.element}},!0),s.__registerWidget("oj.ojInputPassword",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_MASK_ICON_SHOW_PASSWORD_LABEL_KEY:"accessibleShowPassword",_MASK_ICON_HIDE_PASSWORD_LABEL_KEY:"accessibleHidePassword",options:{converter:null,maskIcon:"hidden",pattern:"",value:void 0},_ComponentCreate:function(){var e=this._super();return this._processMaskVisibilityIcon(),e},_processMaskVisibilityIcon:function(){var e=this._GetContentWrapper().parentElement,i=this.element[0],n=e.querySelector("span.oj-text-field-end");if(this.options.disabled||this.options.readOnly)n&&(e.removeChild(n),i.type="password");else if(null===n){if("visible"===this.options.maskIcon){var s,r;(n=document.createElement("span")).className="oj-text-field-end",(r=document.createElement("a")).className="oj-component-icon oj-clickable-icon-nocontext",r.setAttribute("aria-label",this.getTranslatedString(this._MASK_ICON_SHOW_PASSWORD_LABEL_KEY)),r.role="button",r.setAttribute("target","_blank"),r.setAttribute("tabindex","0"),(s=document.createElement("span")).className="oj-inputpassword-show-password-icon",r.appendChild(s),n.appendChild(r),e.appendChild(n);var a=t(r);this._AddHoverable(a),this._AddActiveable(a),r.addEventListener(this._CLICK_HANDLER_KEY,this._onMaskVisibilityIconClickHandler.bind(this)),r.addEventListener(this._KEYDOWN_HANDLER_KEY,this._onMaskVisibilityIconKeyDownHandler.bind(this))}}else"visible"!==this.options.maskIcon&&(e.removeChild(n),i.type="password")},_onMaskVisibilityIconClickHandler:function(){var e=this.element[0],t=this._GetContentWrapper().parentElement.querySelector("a.oj-component-icon"),i=t.children[0];"password"===e.type?(e.type="text",i.classList.remove("oj-inputpassword-show-password-icon"),i.classList.add("oj-inputpassword-hide-password-icon"),t.setAttribute("aria-label",this.getTranslatedString(this._MASK_ICON_HIDE_PASSWORD_LABEL_KEY))):(e.type="password",i.classList.remove("oj-inputpassword-hide-password-icon"),i.classList.add("oj-inputpassword-show-password-icon"),t.setAttribute("aria-label",this.getTranslatedString(this._MASK_ICON_SHOW_PASSWORD_LABEL_KEY)))},_onMaskVisibilityIconKeyDownHandler:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode;switch(e.keyCode){case i.SPACE:case i.ENTER:this._onMaskVisibilityIconClickHandler()}}},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"disabled":case"readOnly":case"maskIcon":this._processMaskVisibilityIcon()}},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_UseReadonlyDiv:function(){return!1},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputpassword-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}}),s.__registerWidget("oj.ojInputText",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",_ALLOWED_TYPES:["email","number","search","tel","text","url"],_CLICK_HANDLER_KEY:"click",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_INPUTTEXT_COUNTER_EL:"oj-inputtext-counter-el",_INPUTTEXT_CLEAR_ICON_KEY:"accessibleClearIcon",options:{clearIcon:"never",converter:null,list:"",pattern:"",virtualKeyboard:"auto",length:{max:null,countBy:"codePoint"}},_ComponentCreate:function(){var e=this._super(),t=this.options.clearIcon;return this._processClearIconAttr(t),this._processSlottedChildren(),this._AddHoverable(this._wrapper),this._SetInputType(this._ALLOWED_TYPES),e},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_processClearIconAttr:function(e){var t=this._GetContentWrapper().parentElement,i=t.querySelector("a.oj-inputtext-clear-icon-btn");if("never"===e||this.options.disabled||this.options.readOnly)i&&t.removeChild(i),t.classList.remove("oj-inputtext-clearicon-visible"),t.classList.remove("oj-inputtext-clearicon-conditional");else{if(null===i){var n,r=s.AgentUtils.getAgentInfo();(i=document.createElement("a")).className="oj-inputtext-clear-icon-btn oj-component-icon oj-clickable-icon-nocontext",i.setAttribute("tabindex","-1"),i.setAttribute("title",this.getTranslatedString(this._INPUTTEXT_CLEAR_ICON_KEY)),r.os===s.AgentUtils.OS.ANDROID||r.os===s.AgentUtils.OS.IOS||r.os===s.AgentUtils.OS.WINDOWSPHONE?(i.setAttribute("aria-label","Clear input"),i.setAttribute("role","button")):i.setAttribute("aria-hidden","true"),i.setAttribute("target","_blank"),(n=document.createElement("span")).className="oj-inputtext-clear-icon",i.appendChild(n),t.appendChild(i),i.addEventListener(this._CLICK_HANDLER_KEY,this._onClearIconClickHandler.bind(this))}var a;if("always"===e)t.classList.add("oj-inputtext-clearicon-visible");else t.classList.remove("oj-inputtext-clearicon-visible"),t.classList.add("oj-inputtext-clearicon-conditional"),(a=t.classList.contains("oj-complete")?this.element[0].value:this.options.value)&&""!==a?t.classList.remove("oj-form-control-empty-clearicon"):t.classList.add("oj-form-control-empty-clearicon")}},_processSlottedChildren:function(){var e=l.CustomElementUtils.getSlotMap(this._getRootElement());!function(e){for(var t={contextMenu:!0,start:!0,end:!0,"":!0},i=Object.keys(e),n=i.length-1;n>-1;n--){var s=i[n];if(!t[s])for(var r=e[s],a=0;a<r.length;a++){var o=r[a];o.parentElement.removeChild(o)}}}(e);var t=this._GetContentWrapper(),i="start";e[i]&&function(e,t){var i=document.createElement("span"),n=e.parentElement;i.classList.add("oj-text-field-start"),n.insertBefore(i,e),n.classList.add("oj-text-field-has-start-slot");for(var s=0;s<t.length;s++){var r=t[s];i.appendChild(r)}}(t,e[i]),e[i="end"]&&function(e,t){var i=document.createElement("span"),n=e.parentElement;i.classList.add("oj-text-field-end"),n.appendChild(i),n.classList.add("oj-text-field-has-end-slot");for(var s=0;s<t.length;s++){var r=t[s];i.appendChild(r)}}(t,e[i])},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"clearIcon":case"disabled":case"readOnly":this._processClearIconAttr(this.options.clearIcon);break;case"virtualKeyboard":this._SetInputType(this._ALLOWED_TYPES);break;case"value":this._processClearIconAttr(this.options.clearIcon),this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)}},_onInputHandler:function(e){this._super(e);var t=e.target,i=this._GetContentWrapper().parentElement;"conditional"===this.options.clearIcon&&(""!==t.value?i.classList.remove("oj-form-control-empty-clearicon"):i.classList.add("oj-form-control-empty-clearicon"))},_onClearIconClickHandler:function(e){var t=this.element[0];t.value="",this._SetRawValue(t.value,e),t.focus(),this._GetContentWrapper().parentElement.classList.add("oj-form-control-empty-clearicon"),this._processLengthCounterAttr(this.options.length.counter)},_onBlurHandler:function(e){var t=this._wrapper[0],i=e.relatedTarget;i&&i.classList.contains("oj-inputtext-clear-icon-btn")&&i.parentElement&&r.isAncestorOrSelf(t,i.parentElement)?t.classList.add("oj-focus"):this._super(e)},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputtext-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},_SetInputType:n.EditableValueUtils._SetInputType}),s.__registerWidget("oj.ojTextArea",t.oj.inputBase,{version:"1.0.0",defaultElement:"<textarea>",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_TEXTAREA_COUNTER_CONTAINER:"oj-textarea-counter-container",_TEXTAREA_COUNTER_EL:"oj-textarea-counter-el",_INPUT_HANDLER_KEY:"input",options:{converter:null,maxRows:0,pattern:"",resizeBehavior:"none",rows:void 0,length:{max:null,countBy:"codePoint",counter:"none"}},_AfterSetOption:function(e,t){if(this._super(e,t),"value"===e)this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)},_AfterCreate:function(){var e=this._superApply(arguments);return void 0===this.options.value&&this._SetDisplayValue(""),this.widget()[0].querySelector("."+this._INPUT_CONTAINER_CLASS).style.resize=this.options.resizeBehavior,this._setupResizeTextareaBind(),-1===this.options.maxRows&&this.widget()[0].classList.add("oj-maxrows-neg1"),e},_AfterCreateConverterCached:function(){var e=this._super(),t=this._GetContentElement()[0],i=this.options.maxRows;return!this._textAreaElementNotDisplayed()&&(-1===i||i>t.rows)&&(this._calculateLineHeight(t),this._resizeTextArea()),e},_setOption:function(e,t,i){var n=this._superApply(arguments);if("resizeBehavior"===e)this.widget()[0].querySelector("."+this._INPUT_CONTAINER_CLASS).style.resize=t;else if("value"===e){let e=this._textAreaElementNotDisplayed(),t=this.options.maxRows;!e&&(-1===t||t>this._GetContentElement()[0].rows)&&this._resizeTextArea()}return n},_NotifyAttached:function(){this._super();var e=this.options.maxRows;(-1===e||e>this._GetContentElement()[0].rows)&&this._resizeTextArea()},_onInputHandler:function(e){this._super(e);var t=this._GetContentElement()[0],i=this.options.maxRows;(-1===i||i>t.rows)&&this._resizeTextArea()},_resizeTextArea:function(){if(this._textAreaElementNotDisplayed()||void 0===this._lineHeight)return;const e=this.options.maxRows,t=this._GetContentElement()[0],i=t.rows;t.style.height=0;const n=this._getStylingHeight(t,"padding"),s=this._lineHeight*i+n,r=t.scrollHeight;var a=0;if(-1===e)a=r<s?s:r;else if(e>i){var o=this._lineHeight*e+n;a=r>o?o:r<s?s:r}else a=s;t.style.height=a+"px"},_setupResizeTextareaBind:function(){this._textAreaElementNotDisplayed()||(this._resizeTextareaBind=function(){var e=this._GetContentElement()[0],t=this.options.maxRows;(-1===t||t>e.rows)&&this._resizeTextArea()}.bind(this),window.addEventListener("resize",this._resizeTextareaBind,!1))},_getStylingHeight:function(e,t){var i=window.getComputedStyle(e),n=0;"padding"!==t&&"paddingAndBorder"!==t||(n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom));"border"!==t&&"paddingAndBorder"!==t||(n+=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth));return n},_calculateLineHeight:function(e){if(!this._textAreaElementNotDisplayed()){var t=window.getComputedStyle(e);if("none"!==t.display){var i=t.lineHeight;if("normal"===i){var n=parseFloat(t.fontSize);this._lineHeight=1.2*n}else this._lineHeight=parseFloat(i)}}},_cleanUpListeners:function(){this._resizeTextareaBind&&window.removeEventListener("resize",this._resizeTextareaBind)},_ReleaseResources:function(){this._super(),this._cleanUpListeners()},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-textarea-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_UseReadonlyDiv:function(){var e=this._super();return e?-1===this.options.maxRows:e},_GetDefaultStyleClass:function(){return"oj-textarea"},_GetTranslationsSectionName:function(){return"oj-inputBase"},_isConverAsync:function(){return this._GetConverter()instanceof Promise},_onKeyUpHandler:function(e){},_onKeyDownHandler:function(e){if((13===e.keyCode||"Enter"===e.key)&&e.altKey){var t=this._GetContentElement()[0],i=t.value,n=i.substring(0,t.selectionStart),s=i.substring(t.selectionEnd);t.value=n+"\r\n"+s;var r=t.value.length-s.length;t.setSelectionRange(r,r),t.blur(),t.focus();var a=this.options.maxRows;(-1===a||a>t.rows)&&this._resizeTextArea(),e.stopPropagation()}},_textAreaElementNotDisplayed:function(){return this._UseReadonlyDiv()&&this.options.readOnly&&-1===this.options.maxRows}})});
//# sourceMappingURL=ojinputtext.js.map