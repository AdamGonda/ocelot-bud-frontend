/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","ojs/ojdomutils","ojs/ojlistdataproviderview","ojs/ojcore-base","ojs/ojconfig","ojs/ojcontext","ojs/ojlogger","ojs/ojthemeutils","ojs/ojtimerutils","ojs/ojtranslation","preact","ojs/ojhighlighttext","ojs/ojvcomponent","ojs/ojpopupcore"],function(t,e,s,o,i,n,a,l,r,d,u,h,p,c,g){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;class _ extends h.Component{constructor(t){super(t)}render(t){return e.jsx("li",{role:"presentation",class:"oj-listbox-result",style:t.itemStyle,children:e.jsx("div",{class:"oj-listbox-result-label oj-listbox-skeleton-line-height oj-animation-skeleton"})})}}_.defaultProps={itemStyle:null};class f extends h.Component{constructor(t){super(t)}render(t){const s=[];for(let o=0;o<t.numItems;o++)s.push(e.jsx(_,{itemStyle:t.itemStyle}));return e.jsx("ul",{role:"listbox",id:t.id,class:"oj-listbox-results oj-inputsearch-results",children:s})}}f.defaultProps={id:null,numItems:1,itemStyle:null};class m extends h.Component{constructor(t){super(t),this._handleMouseenter=t=>{s.recentTouchEnd()||this.setState({hover:!0})},this._handleMouseleave=t=>{this.setState({hover:!1})},this._handleClick=t=>{0===t.button&&this._fireSuggestionActionEvent(this.props.formattedText,this.props.suggestionItemContext)},this._fireSuggestionActionEvent=(t,e)=>{this.props.onOjSuggestionAction?.({text:t,itemContext:e})},this.state={hover:!1}}fireSuggestionAction(){this._fireSuggestionActionEvent(this.props.formattedText,this.props.suggestionItemContext)}getFormattedText(){return this.props.formattedText}render(t,s){let o="oj-listbox-result oj-listbox-result-selectable";s.hover&&(o+=" oj-hover"),t.focus&&(o+=" oj-focus");const i=this._renderContent(t);return e.jsx("li",{role:"presentation",class:o,onClick:this._handleClick,onMouseEnter:this._handleMouseenter,onMouseLeave:this._handleMouseleave,children:e.jsx("div",{id:t.labelId,class:"oj-listbox-result-label",role:"option",children:i})})}_renderContent(t){const s=t.suggestionItemTemplate;return s?s({data:t.suggestionItemContext.data,key:t.suggestionItemContext.key,metadata:t.suggestionItemContext.metadata,index:t.index,searchText:t.searchText}):e.jsx(p.HighlightText,{"data-oj-internal":!0,text:t.formattedText,matchText:t.searchText??""})}}m.defaultProps={focus:!1,formattedText:"",index:-1,labelId:"",searchText:null};class x extends h.Component{constructor(t){super(t),this._renderedSuggestions=[],this.getCount=()=>{const t=this._renderedSuggestions.length,e=this._renderedSuggestions.indexOf(null);return-1===e?t:e},this.getFormattedText=t=>this._renderedSuggestions[t]?.getFormattedText(),this.fireSuggestionAction=t=>{this._renderedSuggestions[t]?.fireSuggestionAction()},this._setRenderedSuggestion=(t,e)=>{this._renderedSuggestions[t]=e}}render(t){if(t.data?.length>0){let s=[];for(let o=0;o<t.data.length;o++){const i=o===t.focusIndex,n=t.formatItemText(t.suggestionItemText,t.data[o]),a=e.jsx(m,{ref:this._setRenderedSuggestion.bind(this,o),labelId:t.labelIds[o],focus:i,index:o,formattedText:n,searchText:t.searchText,suggestionItemContext:t.data[o],suggestionItemTemplate:t.suggestionItemTemplate,onOjSuggestionAction:t.onOjSuggestionAction});s.push(a)}return e.jsx("ul",{role:"listbox",id:t.id,class:"oj-listbox-results oj-inputsearch-results","aria-label":t["aria-label"],children:s})}return null}}x.defaultProps={data:null,focusIndex:-1,formatItemText:null,id:null,labelIds:null,onOjSuggestionAction:null,searchText:null,suggestionItemTemplate:null};class v extends h.Component{constructor(t){super(t),this._isComposing=!1,this._setInputElem=t=>{this._inputElem=t,this.props.inputRef?.(t)},this._handleCompositionstart=t=>{this._isComposing=!0,this.props.onCompositionStart?.call(this._inputElem,t)},this._handleCompositionend=t=>{this._isComposing=!1,this.props.onCompositionEnd?.call(this._inputElem,t),this.props.onInputChanged?.({value:t.target.value})},this._handleInput=t=>{this.props.onInput?.call(this._inputElem,t),this._isComposing&&!this._isAndroidDevice||this.props.onInputChanged?.({value:t.target.value})};const e=i.AgentUtils.getAgentInfo();this._isAndroidDevice=e.os===i.AgentUtils.OS.ANDROID}render(t){const{onInputChanged:s,onInput:o,onCompositionStart:i,onCompositionEnd:n,...a}=t;return e.jsx("input",{ref:this._setInputElem,onInput:this._handleInput,oncompositionstart:this._handleCompositionstart,oncompositionend:this._handleCompositionend,...a})}}var S,I=function(t,e,s,o){var i,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(n<3?i(a):n>3?i(e,s,a):i(e,s))||a);return n>3&&a&&Object.defineProperty(e,s,a),a};t.InputSearch=S=class extends h.Component{constructor(t){super(t),this._KEYS={TAB:9,ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INPUT_METHOD_EDITOR:229},this._counter=0,this._queryCount=0,this._handleMouseenter=t=>{s.recentTouchEnd()||this._updateState({hover:!0})},this._handleMouseleave=t=>{this._updateState({hover:!1})},this._handleFocusin=t=>{t.target===t.currentTarget&&this._handleFocus(t),this._updateState({focus:!0})},this._handleFocusout=t=>{t.target===t.currentTarget&&this._handleBlur(t),this._updateState({focus:!1})},this._handleMobileFilterInputFocusin=t=>{this._updateState({mobileFilterInputFocus:!0})},this._handleMobileFilterInputFocusout=t=>{this._updateState({mobileFilterInputFocus:!1})},this._handleMobileFilterClear=t=>{this._mobileFilterInputElem?.focus(),this._updateState({filterText:"",displayValue:"",showAutocompleteText:!1,autocompleteFloatingText:null})},this._handleMobileDropdownBack=t=>{this._mainInputElem?.focus(),this._updateState({dropdownOpen:!1,filterText:this.props.value,displayValue:this.props.value})},this._handleInputChanged=t=>{const e=t.value,s=this.state.filterText||"",o=s.toLowerCase(),i=e.toLowerCase(),n={};this.state.showAutocompleteText&&!this.state.autocompleteFloatingText&&s===e?Object.assign(n,{showAutocompleteText:!1,focusedSuggestionIndex:-1}):!this.state.showAutocompleteText&&i.length<o.length&&o.startsWith(i)?Object.assign(n,{showAutocompleteText:!1}):Object.assign(n,{showAutocompleteText:e.length>0}),Object.assign(n,{filterText:e,displayValue:e,dropdownOpen:!0}),this._updateState(n)},this._handleFocus=t=>{this._rootElem?.dispatchEvent(new FocusEvent("focus",{relatedTarget:t.relatedTarget}))},this._handleBlur=t=>{this._rootElem?.dispatchEvent(new FocusEvent("blur",{relatedTarget:t.relatedTarget}))},this._handleFilterInputKeydownEnter=t=>{const e=this.state.focusedSuggestionIndex;return this.state.dropdownOpen&&e>=0&&this._suggestionsList?.getCount()>e&&!this._resolveFetchBusyState?(this._suggestionsList?.fireSuggestionAction(e),null):{dropdownOpen:!1,valueSubmitted:!0,actionDetail:null}},this._handleDesktopMainInputKeydown=t=>{const e={lastEventType:"keyboard"},s=t.keyCode;switch(s){case this._KEYS.ENTER:const o=this._handleFilterInputKeydownEnter(t);o&&Object.assign(e,o);break;case this._KEYS.TAB:Object.assign(e,{dropdownOpen:!1,focus:!1,actionDetail:null}),this.state.showAutocompleteText&&Object.assign(e,{showAutocompleteText:!1,resetFilterInputSelectionRange:!0});break;case this._KEYS.ESC:this.state.dropdownOpen&&(e.dropdownOpen=!1,this.state.showAutocompleteText&&Object.assign(e,{showAutocompleteText:!1,displayValue:this.state.filterText}),t.preventDefault());break;case this._KEYS.UP:case this._KEYS.DOWN:if(this.state.dropdownOpen){if(!this._resolveFetchBusyState&&this._suggestionsList?.getCount()>0){let o=this.state.focusedSuggestionIndex;s===this._KEYS.DOWN||-1===o?(o+=1,e.scrollFocusedSuggestionIntoView="bottom"):o>0&&(o-=1,e.scrollFocusedSuggestionIntoView="top",t.preventDefault()),o=Math.min(this._suggestionsList?.getCount()-1,o),e.focusedSuggestionIndex=o;const i=0===o&&this.state.filterText?.length>0;e.showAutocompleteText=i,i?e.displayValue=this.state.filterText:o>-1&&(e.displayValue=this._suggestionsList?.getFormattedText(o))}}else e.dropdownOpen=!0;break;case this._KEYS.LEFT:case this._KEYS.RIGHT:this.state.showAutocompleteText&&!this.state.autocompleteFloatingText&&Object.assign(e,{showAutocompleteText:!1,filterText:this.state.displayValue})}s!==this._KEYS.INPUT_METHOD_EDITOR&&this._updateState(e)},this._handleMobileFilterInputKeydown=t=>{const e={lastEventType:"keyboard"};if(t.keyCode===this._KEYS.ENTER){const s=this._handleFilterInputKeydownEnter(t);s&&Object.assign(e,s)}this._updateState(e)},this._handleMousedown=t=>{0===t.button&&(this._updateState({focus:!0,dropdownOpen:!0}),t.target!==this._mainInputElem||this.state.fullScreenPopup?t.preventDefault():this._handleFilterInputMousedown(t))},this._handleFilterInputMousedown=t=>{this.state.showAutocompleteText&&(this.state.autocompleteFloatingText?this._updateState({showAutocompleteText:!1,filterText:this.state.autocompleteFloatingText,displayValue:this.state.autocompleteFloatingText}):this._updateState({showAutocompleteText:!1,filterText:this.state.displayValue}))},this._handleDesktopDropdownMousedown=t=>{0===t.button&&(this._updateState({focus:!0}),t.preventDefault())},this._handleDropdownMousemove=t=>{this._updateState({lastEventType:"mouse"})},this._handleDropdownMouseleave=t=>{this._updateState({lastEventType:null})},this._setRootElem=t=>{this._rootElem=t},this._setDropdownElem=t=>{this._dropdownElem=t},this._setMainInputElem=t=>{this._mainInputElem=t},this._setMainInputContainerElem=t=>{this._mainInputContainerElem=t},this._setSuggestionsList=t=>{this._suggestionsList=t},this._setMobileFilterInputElem=t=>{this._mobileFilterInputElem=t},this._getFilterInputElem=()=>this._mobileFilterInputElem||this._mainInputElem,this._clickAwayHandler=t=>{const e=t.target;if(e.closest("#"+CSS.escape(this._getDropdownElemId()))||e.closest("#"+CSS.escape(this._getMainInputContainerId())))return;const s={dropdownOpen:!1};this.state.showAutocompleteText&&Object.assign(s,{showAutocompleteText:!1,resetFilterInputSelectionRange:!0}),this._updateState(s)},this._handleDataProviderRefreshEventListener=t=>{this._updateState({fetchedInitial:!1})},this._handleSuggestionAction=t=>{this._updateState({filterText:t.text,displayValue:t.text,dropdownOpen:!1,valueSubmitted:!0,actionDetail:t.itemContext})},this._uniqueId=t.id?t.id:c.getUniqueId();let e=(r.parseJSONFromFontFamily("oj-inputsearch-option-defaults")||{}).showIndicatorDelay;e=parseInt(e,10),e=isNaN(e)?250:e,this._showIndicatorDelay=e;const o=r.getCachedCSSVarValues(["--oj-private-core-global-dropdown-offset"])[0]||"0";this._dropdownVerticalOffset=parseInt(o,10),t.suggestions&&(this._dataProvider=this._wrapDataProviderIfNeeded(this.props.suggestions)),this.state={dropdownOpen:!1,dropdownAbove:!1,valueSubmitted:!1,focus:!1,hover:!1,active:!1,displayValue:null,filterText:null,lastFetchedFilterText:null,fetchedData:null,labelIds:[],fetchedInitial:!1,fetching:!1,loading:!1,focusedSuggestionIndex:-1,activeDescendantId:null,scrollFocusedSuggestionIntoView:null,actionDetail:null,lastEventType:null,showAutocompleteText:!1,autocompleteFloatingText:null,initialRender:!0,oldPropsValue:t.value,oldPropsSuggestions:t.suggestions,fullScreenPopup:t.suggestions&&"phone"===n.getDeviceRenderMode(),mobileFilterInputFocus:!1,mobileFilterInputActive:!1,resetFilterInputSelectionRange:!1}}render(t,e){let s="oj-inputsearch oj-form-control oj-text-field oj-component";e.hover&&(s+=" oj-hover"),e.active&&(s+=" oj-active"),e.focus&&(s+=" oj-focus"),e.dropdownOpen&&(s+=" oj-listbox-dropdown-open",e.dropdownAbove&&(s+=" oj-listbox-drop-above")),e.fullScreenPopup&&(s+=" oj-inputsearch-mobile");const o=e.displayValue||"";return this._renderEnabled(t,e,s,"oj-text-field-start-end-icon oj-inputsearch-search-icon oj-component-icon",o,"oj-inputsearch-input oj-text-field-input ")}static getDerivedStateFromProps(t,e){return e.initialRender?this._initStateFromProps(t,e):this._updateStateFromProps(t,e)}static _initStateFromProps(t,e){return{displayValue:t.value,filterText:t.value,fullScreenPopup:t.suggestions&&"phone"===n.getDeviceRenderMode()}}static _updateStateFromProps(t,e){const s={};return t.value!==e.oldPropsValue&&(!e.fullScreenPopup&&t.value!==e.displayValue||e.fullScreenPopup&&!e.dropdownOpen)&&(s.displayValue=t.value,s.filterText=t.value),e.oldPropsSuggestions!=t.suggestions&&(s.fetchedInitial=!1,s.fullScreenPopup=t.suggestions&&"phone"===n.getDeviceRenderMode()),t.suggestions||(s.dropdownOpen=!1,s.fetchedData=null),!1!==e.dropdownOpen&&!1!==s.dropdownOpen||(s.lastEventType=null,s.showAutocompleteText=!1),e.showAutocompleteText&&!1!==s.showAutocompleteText||(s.autocompleteFloatingText=null),s}componentDidMount(){null!==this.props.value&&this.props.onRawValueChanged?.(this.props.value),this._dataProvider&&this._addDataProviderEventListeners(this._dataProvider),this._updateState({initialRender:!1})}_updateState(t){this.setState(function(e,s){let o;o="function"==typeof t?t(e,s):t;let i=!1;for(const t in o)if(o[t]!==e[t]){i=!0;break}return i?o:null})}componentDidUpdate(t,e){if(this.state.fullScreenPopup&&!e.dropdownOpen&&this.state.dropdownOpen&&this._mobileFilterInputElem?.focus(),(e.focus&&!this.state.focus||this.state.valueSubmitted)&&(this.props.value!==this.state.displayValue&&this.props.onValueChanged?.(this.state.displayValue),e.focus&&!this.state.focus&&e.filterText!==this.state.displayValue&&this._updateState({filterText:this.state.displayValue}),this.state.valueSubmitted&&(this.props.onOjValueAction?.({value:this.state.displayValue,itemContext:this.state.actionDetail,previousValue:this.props.value}),this.state.fullScreenPopup&&this._mainInputElem?.focus(),this._updateState({valueSubmitted:!1}),this._testPromiseResolve&&(this._testPromiseResolve(),this._testPromiseResolve=null))),e.displayValue!=this.state.displayValue&&this.props.onRawValueChanged?.(this.state.displayValue),t.suggestions!=this.props.suggestions&&(t.suggestions&&this._removeDataProviderEventListeners(this._dataProvider),this.props.suggestions?(this._dataProvider=this._wrapDataProviderIfNeeded(this.props.suggestions),this._addDataProviderEventListeners(this._dataProvider)):(this._dataProvider=null,this._resolveFetching())),this.state.dropdownOpen){this.state.lastFetchedFilterText==this.state.filterText&&(this.state.fetchedInitial||this._resolveFetchBusyState)||(this._updateState({lastFetchedFilterText:this.state.filterText}),this._fetchData(this.state.filterText)),e.dropdownOpen&&this.state.filterText===e.filterText?this.state.fetchedData&&this._updateState((t,e)=>{const s=Math.min(t.fetchedData.length-1,t.focusedSuggestionIndex);return t.focusedSuggestionIndex!==s?{focusedSuggestionIndex:s}:null}):e.dropdownOpen||this.state.filterText!==e.filterText?this._updateState((t,e)=>{const s=t.filterText?.length>0?0:-1;return t.focusedSuggestionIndex!==s?{focusedSuggestionIndex:s}:null}):this._updateState({focusedSuggestionIndex:-1});const t=this._resolveFetchBusyState?-1:this.state.focusedSuggestionIndex;if(t>=0&&this.state.labelIds.length>t){const e=this.state.filterText||"";if(0===t&&this.state.showAutocompleteText&&e.length>0){const s=this._suggestionsList?.getFormattedText(0),o=s.toLowerCase(),i=e.toLowerCase();if(o.startsWith(i)){const o=e.length,i=s.substr(o);this._updateState({displayValue:e+i,autocompleteFloatingText:null,activeDescendantId:this.state.labelIds[t]}),this._getFilterInputElem().setSelectionRange(o,o+i.length)}else this.state.fullScreenPopup?this._updateState({autocompleteFloatingText:null,activeDescendantId:null,focusedSuggestionIndex:-1}):this._updateState({autocompleteFloatingText:s,displayValue:e,activeDescendantId:this.state.labelIds[t]})}else this._updateState({activeDescendantId:this.state.labelIds[t]})}else this._updateState({activeDescendantId:null});this._resolveFetchBusyState||0!==this.state.labelIds.length||(this.state.fullScreenPopup?this._updateState({showAutocompleteText:!1}):this._updateState({showAutocompleteText:!1,dropdownOpen:!1}))}else e.dropdownOpen&&(this._updateState({focusedSuggestionIndex:-1}),this._resolveFetching());const s=this.state.scrollFocusedSuggestionIntoView;if(s){const t=this.state.activeDescendantId;if(t){const e="top"===s;this._scrollSuggestionIntoView(t,e),this._updateState({scrollFocusedSuggestionIntoView:null})}}this.state.resetFilterInputSelectionRange&&(this._getFilterInputElem()?.setSelectionRange(this.state.displayValue.length,this.state.displayValue.length),this._updateState({resetFilterInputSelectionRange:!1})),this.state.oldPropsValue!==this.props.value&&this._updateState({oldPropsValue:this.props.value}),this.state.oldPropsSuggestions!==this.props.suggestions&&this._updateState({oldPropsSuggestions:this.props.suggestions})}componentWillUnmount(){this._dataProvider&&this._removeDataProviderEventListeners(this._dataProvider),this._resolveFetching(),this._updateState({initialRender:!0})}focus(){this._mainInputElem?.focus()}blur(){this._mainInputElem?.blur()}_getDropdownElemId(){return"searchDropdown_"+this._uniqueId}_getMainInputContainerId(){return"searchInputContainer_"+this._uniqueId}_getMobileFilterContainerId(){return"searchMobileFilterContainer_"+this._uniqueId}_getListboxId(){return"searchSuggestionsListbox_"+this._uniqueId}_getDesktopDropdownPosition(){const t={my:"start top",at:"start bottom",of:this._mainInputContainerElem,collision:"flip",using:this._usingHandler.bind(this),offset:{x:0,y:this._dropdownVerticalOffset}},e="rtl"===s.getReadingDirection();let o=i.PositionUtils.normalizeHorizontalAlignment(t,e);return o=i.PositionUtils.coerceToJet(o),o=i.PositionUtils.coerceToJqUi(o),o.of=t.of,o}_getMobileDropdownPosition(){const t=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset;let o={my:"start top",at:"start top",of:window,offset:{x:t,y:e}};const n="rtl"===s.getReadingDirection();return o=i.PositionUtils.normalizeHorizontalAlignment(o,n),o}_getMobileDropdownStyle(){const t={},e=Math.min(window.innerWidth,window.screen.availWidth),s=Math.min(window.innerHeight,window.screen.availHeight);if("phone"===n.getDeviceType()&&window.parent&&window!==window.parent){const e=Math.min(window.parent.innerHeight,window.parent.screen.availHeight),o=Math.min(s,e);if(s>o){const e=s-o;t.paddingBottom=e+"px"}}return t.width=e+"px",t.height=s+"px",t}_usingHandler(t,e){i.PositionUtils.isAligningPositionClipped(e)?this._updateState({dropdownOpen:!1}):(e.element.element.css(t),this._updateState({dropdownAbove:"bottom"===e.vertical}))}_renderEnabled(t,s,o,n,a,l){const r=t.id?t.id:null,d=t["aria-label"]?t["aria-label"]:null,u=this._dataProvider?this._getListboxId():null,h=i.AgentUtils.getAgentInfo(),p=h.os===i.AgentUtils.OS.ANDROID||h.os===i.AgentUtils.OS.IOS||h.os===i.AgentUtils.OS.WINDOWSPHONE?"search":"text",g=s.autocompleteFloatingText?this._renderAutocompleteFloatingText(s.autocompleteFloatingText,a):null,_=e.jsx("span",{class:n,role:"presentation"}),f=s.fullScreenPopup?this._renderMobileMainTextFieldContainer(t,s,_,l,d,u):this._renderDesktopMainTextFieldContainer(t,s,_,a,l,d,u,p,g),m=s.dropdownOpen?this._renderDropdown(t,s,a,l,d,u,p,g):null,x=this._dataProvider?this._renderAriaLiveRegion(s):null;return e.jsxs(c.Root,{id:r,ref:this._setRootElem,class:o,"aria-label":d,onMouseDown:this._handleMousedown,onMouseEnter:this._handleMouseenter,onMouseLeave:this._handleMouseleave,children:[x,f,m]})}_renderAriaLiveRegion(t){const s=t.fetchedInitial&&!t.fetching&&0==t.fetchedData?.length?u.getTranslatedString("oj-ojInputSearch2.noSuggestionsFound"):" ";return e.jsx("div",{id:"oj-listbox-live-"+this._uniqueId,class:"oj-helper-hidden-accessible oj-listbox-liveregion","aria-live":"polite",children:s})}_renderDesktopMainTextFieldContainer(t,s,o,i,n,a,l,r,d){return e.jsxs("div",{role:"presentation",class:"oj-text-field-container oj-text-field-has-start-slot",id:this._getMainInputContainerId(),ref:this._setMainInputContainerElem,children:[e.jsx("span",{class:"oj-text-field-start",children:o}),e.jsxs("div",{class:"oj-text-field-middle",role:this._dataProvider?"combobox":void 0,"aria-label":this._dataProvider?a:null,"aria-controls":l,"aria-haspopup":this._dataProvider?"listbox":"false","aria-expanded":s.dropdownOpen?"true":"false",children:[e.jsx(v,{type:r,inputRef:this._setMainInputElem,value:i,class:n+" oj-inputsearch-filter",placeholder:t.placeholder,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,autofocus:!1,"aria-label":a,"aria-autocomplete":this._dataProvider?"list":null,"aria-busy":s.dropdownOpen&&s.loading,"aria-activedescendant":this._dataProvider?s.activeDescendantId:null,onfocusin:this._handleFocusin,onfocusout:this._handleFocusout,onInputChanged:this._handleInputChanged,onKeyDown:this._handleDesktopMainInputKeydown}),d]})]})}_renderMobileMainTextFieldContainer(t,s,o,i,n,a){const{placeholder:l,value:r}=t,{dropdownOpen:d,loading:u}=s,h=i+" oj-inputsearch-input-displayonly "+(r?"":" oj-inputsearch-placeholder");return e.jsxs("div",{role:"presentation",class:"oj-text-field-container oj-text-field-has-start-slot",id:this._getMainInputContainerId(),children:[e.jsx("span",{class:"oj-text-field-start",children:o}),e.jsx("div",{class:"oj-text-field-middle",role:this._dataProvider?"combobox":void 0,"aria-label":this._dataProvider?n:null,"aria-controls":a,"aria-haspopup":this._dataProvider?"listbox":"false","aria-expanded":d?"true":"false",children:e.jsx("div",{ref:this._setMainInputElem,class:h,"aria-label":n,"aria-busy":d&&u,tabIndex:0,onfocusin:this._handleFocusin,onfocusout:this._handleFocusout,children:e.jsx("div",{children:r||l})})})]})}_renderMobileDropdownFilterField(t,s,o,i,n,a,l,r){let d="oj-text-field";s.mobileFilterInputActive&&(d+=" oj-active"),s.mobileFilterInputFocus&&(d+=" oj-focus");let u="oj-text-field-container oj-text-field-has-start-slot";const h=this._renderMobileDropdownBackIcon();let p;return o&&o.length>0&&(u+=" oj-text-field-has-end-slot",p=this._renderMobileDropdownClearIcon()),e.jsx("div",{class:d,children:e.jsxs("div",{role:"presentation",class:u,id:this._getMobileFilterContainerId(),children:[e.jsx("span",{class:"oj-text-field-start",children:h}),e.jsxs("div",{class:"oj-text-field-middle","aria-label":n,"aria-owns":a,children:[e.jsx(v,{type:l,inputRef:this._setMobileFilterInputElem,value:o,class:i+" oj-inputsearch-filter",placeholder:t.placeholder,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,autofocus:!1,"aria-label":n,"aria-autocomplete":"list","aria-controls":a,"aria-busy":s.loading,"aria-activedescendant":s.activeDescendantId,onfocusin:this._handleMobileFilterInputFocusin,onfocusout:this._handleMobileFilterInputFocusout,onInputChanged:this._handleInputChanged,onKeyDown:this._handleMobileFilterInputKeydown,onMouseDown:this._handleFilterInputMousedown}),r]}),e.jsx("span",{class:"oj-text-field-end",children:p})]})})}_renderMobileDropdownBackIcon(){const t=u.getTranslatedString("oj-ojInputSearch2.cancel");return e.jsx("span",{class:"oj-inputsearch-back-button",role:"button","aria-label":t,onClick:this._handleMobileDropdownBack,children:e.jsx("span",{class:"oj-inputsearch-back-icon oj-inputsearch-icon oj-component-icon oj-clickable-icon-nocontext"})})}_renderMobileDropdownClearIcon(){return e.jsx("span",{class:"oj-inputsearch-clear-button","aria-hidden":!0,onClick:this._handleMobileFilterClear,children:e.jsx("span",{class:"oj-inputsearch-clear-icon oj-inputsearch-icon oj-component-icon oj-clickable-icon-nocontext"})})}_renderDropdown(t,e,s,o,i,n,a,l){const r=e.loading?this._renderDropdownSkeleton():this._renderDropdownSuggestions(t,e);let d="oj-listbox-drop oj-listbox-inputsearch";return"keyboard"===e.lastEventType&&(d+=" oj-listbox-hide-hover"),"mouse"===e.lastEventType&&(d+=" oj-listbox-hide-focus"),e.fullScreenPopup?this._renderMobileDropdown(t,e,d,r,s,o,i,n,a,l):this._renderDesktopDropdown(t,e,d,r)}_renderDesktopDropdown(t,e,s,o){const i=this._getDesktopDropdownPosition(),n={minWidth:this._rootElem.offsetWidth+"px"};return e.dropdownAbove&&(s+=" oj-listbox-drop-above"),this._renderVPopup(i,s,n,o,null,this._handleDesktopDropdownMousedown)}_renderMobileDropdown(t,e,s,o,i,n,a,l,r,d){const u=this._getMobileDropdownPosition(),h=this._getMobileDropdownStyle();s+=" oj-listbox-fullscreen";const p=this._renderMobileDropdownFilterField(t,e,i,n,a,l,r,d);return this._renderVPopup(u,s,h,o,p,null)}_renderVPopup(t,s,o,i,n,a){return e.jsx(g.VPopup,{position:t,layerSelectors:"oj-listbox-drop-layer",autoDismiss:this._clickAwayHandler,children:e.jsxs("div",{"data-oj-binding-provider":"preact",id:this._getDropdownElemId(),ref:this._setDropdownElem,class:s,role:"presentation",style:o,onMouseDown:a,onMouseMove:this._handleDropdownMousemove,onMouseLeave:this._handleDropdownMouseleave,children:[n,i]})})}_renderAutocompleteFloatingText(t,s){const o=" — "+t;return e.jsxs("div",{class:"oj-inputsearch-autocomplete-floating-container",children:[e.jsx("span",{style:"visibility: hidden;",children:s}),e.jsx("span",{class:"oj-inputsearch-autocomplete-floating-text",children:o})]})}_scrollSuggestionIntoView(t,e){const s=document.getElementById(t),o=s.closest(".oj-listbox-result"),i=s.closest(".oj-listbox-results"),n=o.offsetTop,a=o.offsetHeight,l=i.scrollTop,r=i.offsetHeight;(n<l||n+a>l+r)&&(i.scrollTop=e?n:n+a-r)}_generateId(){return this._uniqueId+"-"+this._counter++}_fetchData(t){this._queryCount+=1;const e=this._queryCount;let s=t;""===s&&(s=null);let o={size:12};if(s){const t=this._dataProvider.getCapability("filter");t&&t.textFilter||l.error("InputSearch: DataProvider does not support text filter. Filtering results in dropdown may not work correctly."),o.filterCriterion=i.FilterFactory.getFilter({filterDef:{text:s}})}if(this._updateState({fetching:!0}),!this._loadingTimer){const t=d.getTimer(this._showIndicatorDelay);t.getPromise().then(function(t){this._loadingTimer=null,t&&this._dataProvider&&this.state.dropdownOpen&&this._updateState({loading:!0})}.bind(this)),this._loadingTimer=t}let n=[];this._resolveFetchBusyState||(this._resolveFetchBusyState=this._addBusyState("InputSearch: fetching suggestions"));const a=this._dataProvider.fetchFirst(o)[Symbol.asyncIterator]();let r=12;const u=function(t){if(e!==this._queryCount)return;let s=t.done;const o=t.value,i=o.data,l=o.metadata;for(let t=0;t<i.length;t++){const e=i[t],o=l[t],a=o.key;if(n.push({data:e,metadata:o,key:a}),r-=1,0===r){s=!0;break}}if(s){let t=[];for(let e=0;e<n.length;e++)t.push("oj-inputsearch-result-label-"+this._generateId());this._updateState({fetchedInitial:!0,labelIds:t,fetchedData:n}),this._resolveFetching()}else a.next().then(u)}.bind(this);a.next().then(u)}_renderDropdownSkeleton(){let t=1,s=0;if(this._dropdownElem){const e=this._dropdownElem.querySelectorAll(".oj-listbox-result");if(t=Math.max(1,e.length),e.length>0){s=this._dropdownElem.querySelector(".oj-listbox-results").offsetWidth}}const o=s>0?{width:s+"px"}:null;return e.jsx(f,{id:this._getListboxId(),numItems:t,itemStyle:o})}_renderDropdownSuggestions(t,s){return s.fetchedData?.length>0?e.jsx(x,{"aria-label":t["aria-label"],ref:this._setSuggestionsList,data:s.fetchedData,searchText:s.filterText,focusIndex:s.focusedSuggestionIndex,formatItemText:S._formatItemText,id:this._getListboxId(),labelIds:s.labelIds,onOjSuggestionAction:this._handleSuggestionAction,suggestionItemText:t.suggestionItemText,suggestionItemTemplate:t.suggestionItemTemplate}):null}_addBusyState(t){const e=this._rootElem,s={description:'The component identified by "'+e.id+'" '+t};return a.getContext(e).getBusyContext().addBusyState(s)}_isDataProvider(t){return!!t?.fetchFirst}_wrapDataProviderIfNeeded(t){if(this._isDataProvider(t)){let e=t;return e instanceof i.ListDataProviderView||(e=new i.ListDataProviderView(e)),e}return null}_addDataProviderEventListeners(t){t.addEventListener("mutate",this._handleDataProviderRefreshEventListener),t.addEventListener("refresh",this._handleDataProviderRefreshEventListener)}_removeDataProviderEventListeners(t){t.removeEventListener("mutate",this._handleDataProviderRefreshEventListener),t.removeEventListener("refresh",this._handleDataProviderRefreshEventListener)}_resolveFetching(){this._loadingTimer&&(this._loadingTimer.clear(),this._loadingTimer=null),this._resolveFetchBusyState&&(this._resolveFetchBusyState(),this._resolveFetchBusyState=null),this.state.loading&&this._updateState({loading:!1}),this._updateState({fetching:!1})}static _formatItemText(t,e){let s;return e?.data&&("string"==typeof t?(e.data?.hasOwnProperty(t)||l.error(`oj-input-search: No '${t}' property found in DataProvider with key: ${e?.key}`),s=e.data[t]):s=t(e)),s||""}_testChangeValue(t){const e=new Promise(t=>{this._testPromiseResolve=t});return this._updateState({filterText:t,displayValue:t,dropdownOpen:!1,valueSubmitted:!0,actionDetail:null}),e}_testChangeValueByKey(t){const e=new Promise(t=>{this._testPromiseResolve=t}),s=function(){throw this._testPromiseResolve&&(this._testPromiseResolve(),this._testPromiseResolve=null),new Error(`oj-input-search: No row found in DataProvider for key: ${t}`)};return this._dataProvider.fetchByKeys({keys:new Set([t])}).then(function(e){const o=e.results.get(t);if(o&&null!=o.data&&null!=o.metadata){const t={data:o.data,metadata:o.metadata,key:o.metadata.key},e=S._formatItemText(this.props.suggestionItemText,t);this._updateState({filterText:e,displayValue:e,dropdownOpen:!1,valueSubmitted:!0,actionDetail:t})}else s()}.bind(this),s),e}},t.InputSearch.defaultProps={suggestions:null,suggestionItemText:"label",placeholder:"",value:null},t.InputSearch._metadata={properties:{suggestions:{type:"object"},suggestionItemText:{type:"string|number|function"},placeholder:{type:"string"},rawValue:{type:"string",readOnly:!0,writeback:!0},value:{type:"string",writeback:!0}},events:{ojValueAction:{}},slots:{suggestionItemTemplate:{data:{}}},extension:{_WRITEBACK_PROPS:["rawValue","value"],_READ_ONLY_PROPS:["rawValue"],_OBSERVED_GLOBAL_PROPS:["aria-label","id"]},methods:{focus:{},blur:{},_testChangeValue:{},_testChangeValueByKey:{}}},t.InputSearch=S=I([c.customElement("oj-input-search")],t.InputSearch),Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojinputsearch.js.map