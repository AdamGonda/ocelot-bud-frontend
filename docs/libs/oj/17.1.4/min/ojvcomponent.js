/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require","exports","preact/compat","preact/jsx-runtime","preact","ojs/ojcustomelement-utils","ojs/ojcustomelement-registry","preact/hooks","@oracle/oraclejet-preact/UNSAFE_Environment","ojs/ojcore-base","ojs/ojpreact-patch","ojs/ojmetadatautils","@oracle/oraclejet-preact/UNSAFE_Layer","ojs/ojconfig","ojs/ojlogger","ojs/ojcontext","ojs/ojtranslationbundleutils"],function(e,t,s,r,n,o,i,a,l,c,p,u,d,h,m,_,f){"use strict";c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,_=_&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_;let y,g=0;const P=new Map,v=new Map,b=Symbol(),C="@oj_s";function E(e,t,s,r){const i=function(e){let t=e[b];void 0===t&&(t=C+g++,e[b]=t);return t}(t);let l=0;function c(){l++}function u(){if(l--,l<0)throw new o.JetElementError(e,"Slot reference count underflow");if(0===l)r(t);else{const e=t.parentElement;e&&p.patchSlotParent(e)}}t[p.OJ_SLOT_REMOVE]=()=>null;const d=function(e){e?(c(),p.patchSlotParent(t.parentElement),s(t)):u()};return n.h(()=>(function(e,t,s){let r=P.get(e);const n=0===P.size;r||(r=new Set,P.set(e,r));r.add(t),v.set(t,s),n&&(y=document.createElementNS,document.createElementNS=S)}(e,i,t),c(),a.useLayoutEffect(()=>{!function(e,t){const s=P.get(e);s.delete(t),0===s.size&&P.delete(e);0===P.size&&(v.clear(),document.createElementNS=y)}(e,i),u()}),n.h(i,{ref:d,key:i})),null)}function S(e,t,s){return t.startsWith(C)?v.get(t):y.call(document,e,t,s)}class j{parkNode(e){this._getLot().appendChild(e)}disposeNodes(e,t){j._iterateSlots(e,e=>{const s=e.parentElement;this._lot===s?(t(e),this._lot.__removeChild(e)):s||t(e)})}disconnectNodes(e){j._iterateSlots(e,e=>{this._lot===e.parentElement&&this._lot.__removeChild(e)})}reconnectNodes(e){j._iterateSlots(e,e=>{e.parentElement||this._lot.appendChild(e)})}isParked(e){return e?.parentElement===this._lot}_getLot(){if(!this._lot){const e=document.createElement("div");e.__removeChild=e.removeChild,e.removeChild=e=>e,e.style.display="none",document.body.appendChild(e),this._lot=e}return this._lot}static _iterateSlots(e,t){Object.keys(e).forEach(s=>{e[s].forEach(e=>{t(e)})})}}const x=new j,w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t,s){"-"===t[0]?e.setProperty(t,s):null==s?e[t]="":"number"!=typeof s||w.test(t)?e[t]=s:e[t]=s+"px"}function A(e,t,s,r,n){let o;e:if("style"===t)if("string"==typeof s)e.style.cssText=s;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)s&&t in s||k(e.style,t,"");if(s)for(t in s)r&&s[t]===r[t]||k(e.style,t,s[t])}else if("o"===t[0]&&"n"===t[1])if(o=t!==(t=t.replace(/Capture$/i,"")),t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),e._listeners||(e._listeners={}),e._listeners[t+o]=s,s){if(!r){const s=o?O:T;e.addEventListener(t,s,o)}}else{const s=o?O:T;e.removeEventListener(t,s,o)}else if("dangerouslySetInnerHTML"!==t){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==s?"":s;break e}catch(e){}"function"==typeof s||(null!=s&&(!1!==s||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,s):e.removeAttribute(t))}}function T(e){this._listeners[e.type+!1](n.options.event?n.options.event(e):e)}function O(e){this._listeners[e.type+!0](n.options.event?n.options.event(e):e)}const R="__root_layer_host",M=(e,t,s)=>{let r=null;if("nearestAncestor"===t&&(r=e.closest("[data-oj-layer]")),r)return r;let n=document.getElementById(R);return n||(n=document.createElement("div"),n.setAttribute("id",R),n.setAttribute("data-oj-binding-provider","preact"),n.style.position="relative",n.style.zIndex="999",document.body.prepend(n)),n},N=Symbol(),L=Symbol();class U extends n.Component{constructor(e){super(e),this.getEnvironmentContextObj=(e,t,s,r,n)=>{let o=e;return o?t&&t!==o?(o=t,this.extendTranslationBundleMap(o,n)):(s&&s!==o.colorScheme||r&&r!==o.scale)&&(o=Object.assign({},o,s&&{colorScheme:s},r&&{scale:r})):(o=t||{colorScheme:s,scale:r,user:{locale:h.getLocale()}},this.extendTranslationBundleMap(o,n)),o},this.extendTranslationBundleMap=(e,t)=>{e.translations?e.translations!==t&&Object.keys(t).forEach(s=>{e.translations[s]||(e.translations[s]=t[s])}):e.translations=t},this.state={compProps:e.initialCompProps},this._layerContext=(e=>{const t=c.VLayerUtils?c.VLayerUtils.getLayerHost:M,s=c.VLayerUtils?c.VLayerUtils.onLayerUnmount:null;return{getRootLayerHost:t.bind(null,e,"topLevel"),getLayerHost:t.bind(null,e,"nearestAncestor"),onLayerUnmount:s?.bind(null,e)}})(e.baseElem)}render(e){const t=this.state.compProps,s=e.baseComp,n=r.jsx(s,{...t}),o=B(this.getEnvironmentContextObj,[e.baseElem.__oj_private_contexts?.get(l.EnvironmentContext),e.baseElem.__oj_private_color_scheme,e.baseElem.__oj_private_scale,e.translationBundleMap]),i=e.baseElem.__oj_private_contexts,a=i?Array.from(i).reduce((e,[t,s])=>{if(t===l.EnvironmentContext)return e;return r.jsx(t.Provider,{value:s,children:e})},n):n,c=n.props;return c[N]=e.baseElem,c[L]=e.rootPatchCallback,r.jsx(d.LayerContext.Provider,{value:this._layerContext,children:r.jsx(l.RootEnvironmentProvider,{environment:o,children:a})})}}const B=(e,t)=>(e.memoState||(e.memoState={value:void 0,prevArgs:void 0}),H(e.memoState.prevArgs,t)&&(e.memoState.value=e(e.memoState.value,...t),e.memoState.prevArgs=t),e.memoState.value),H=(e,t)=>!e||e.length!==t.length||t.some((t,s)=>t!==e[s]),V=(e,t)=>{e&&("function"==typeof e?e(t):e.current=t)},I=new Set,D=Symbol(),F=Symbol(),q="subproperty",z="propChange";class ${constructor(e,t,s,r,i,a){this.ref=n.createRef(),this._compWithContextsRef=n.createRef(),this._initialized=!1,this._isPatching=!1,this._props={ref:this.ref},this._verifyingState=G.Unset,this._earlySets=[],this._eventQueue=[],this._isRenderQueued=!1,this._state=o.CustomElementUtils.getElementState(e),this._element=e,this._metadata=s,this._component=t,this._controlledProps=i?.length>0?new Set(i):I,this._controlledAttrs=r?.length>0?new Set(r):I,this._defaultProps=a,this._rootPatchCallback=this._patchRootElement.bind(this)}connectedCallback(){this._verifyConnectDisconnect(G.Connect)}disconnectedCallback(){this._verifyConnectDisconnect(G.Disconnect)}attributeChangedCallback(e,t,s){if(!this._isPatching&&this._state.canHandleAttributes()){const r=o.AttributeUtils.attributeToPropertyName(e),n=r.split(".")[0];if(this._state.dirtyProps.has(n))this._state.dirtyProps.delete(n);else if(t===s)return;null===s&&(s=void 0),"knockout"===this._state.getBindingProviderType()&&(o.AttributeUtils.isGlobalOrData(r)||this._element.dispatchEvent(new CustomEvent("attribute-changed",{detail:{attribute:e,value:s,previousValue:t}})));const{propPath:i,propValue:a,propMeta:l,subPropMeta:c}=this._getPropValueInfo(e,s);i&&this._updatePropsAndQueueRenderAsNeeded(i,a,l,c)}}getProperty(e){if(u.getPropertyMetadata(e,this._metadata?.properties)){let t=o.CustomElementUtils.getPropertyValue(this._props,e);return void 0===t&&this._defaultProps&&(t=o.CustomElementUtils.getPropertyValue(this._defaultProps,e)),t}return this._element[e]}setProperty(e,t){if(this._isPatching)return;const{prop:s,subProp:r}=u.getComplexPropertyMetadata(e,this._metadata?.properties);s?this._state.allowPropertySets()?(t=o.transformPreactValue(this._element,e,r,t),this._updatePropsAndQueueRenderAsNeeded(e,t,s,r)):this._earlySets.push({property:e,value:t}):this._element[e]=t}setProperties(e){this._isPatching||Object.keys(e).forEach(t=>{this.setProperty(t,e[t])})}getProps(){return this._props}isInitialized(){return!!this._vdom}appendChildHelper(e,t){return o.CustomElementUtils.canRelocateNode(e,t)?HTMLElement.prototype.appendChild.call(e,t):t}insertBeforeHelper(e,t,s){return o.CustomElementUtils.canRelocateNode(e,t)?(s&&s.parentNode!==e&&m.info(`Using insertBefore where ${e.tagName} is not a parent of ${s.tagName}`),s&&s.parentNode?HTMLElement.prototype.insertBefore.call(s.parentNode,t,s):HTMLElement.prototype.insertBefore.call(e,t,s)):t}_render(){if(!this._initialized){this._initialized=!0,this._initializePropsFromDom();const e=this._metadata.events;e&&this._initializeActionCallbacks(e);const t=this._metadata.extension?._WRITEBACK_PROPS;t&&this._initializeWritebackCallbacks(t),this._playbackEarlyPropertySets()}if(this._vdom)throw new Error(`Unexpected render call for already rendered component ${this._element.tagName}`);this._vdom=r.jsx(U,{ref:this._compWithContextsRef,baseComp:this._component,baseElem:this._element,initialCompProps:this._props,rootPatchCallback:this._rootPatchCallback,translationBundleMap:this._state.getTranslationBundleMap()}),n.render(this._vdom,this._element)}_getPropValueInfo(e,t){if("knockout"!==this._state.getBindingProviderType()||!o.AttributeUtils.getExpressionInfo(t).expr){const s=o.AttributeUtils.attributeToPropertyName(e),{prop:r,subProp:n}=u.getComplexPropertyMetadata(s,this._metadata?.properties);if(r)return r.readOnly?{}:{propPath:s,propValue:o.AttributeUtils.attributeToPropertyValue(this._element,e,t,n),propMeta:r,subPropMeta:n};const i=o.AttributeUtils.getGlobalPropForAttr(e);if(this._controlledProps.has(i))return{propPath:i,propValue:this._element[o.AttributeUtils.getGlobalValuePropForAttr(e)]??t}}return{}}_updatePropsAndQueueRenderAsNeeded(e,t,s,r,n=!0){const i=this.getProperty(e),a=void 0===t?o.CustomElementUtils.getPropertyValue(this._defaultProps,e):t;if(s&&o.ElementUtils.comparePropertyValues(s.writeback,a,i))return;const l=e.split("."),p=l[0],u=l.length>1;let d=this.getProperty(p);if(c.CollectionUtils.isPlainObject(d)&&(d=c.CollectionUtils.copyInto({},d,void 0,!0)),n&&this._verifyProps(e,t,s,r),this._updateProps(l,t),!n||this._state.allowPropertyChangedEvents()&&!o.AttributeUtils.isGlobalOrData(e)){this._state.dirtyProps.add(p);const s=n?"external":"internal",r={value:this.getProperty(p),previousValue:d,updatedFrom:s};u&&(r[q]={path:e,value:t,previousValue:i});const o=p+"Changed",a=u?null:e=>{if(e.kind!==z||e.type!==o||e.detail[q])return null;const t=Object.assign({},r,{previousValue:e.detail.previousValue});return{type:o,detail:t,collapse:a,kind:z}};this._queueFireEventsTask({type:o,detail:r,collapse:a,kind:z})}const h=this._oldRootProps;h&&this._controlledProps.has(e)&&(h[e]=t),this._vdom&&!s?.readOnly&&(this._compWithContextsRef?.current?this._queueRender():window.queueMicrotask(()=>{this._queueRender()}))}_queueRender(){if(!this._compWithContextsRef?.current)throw new Error(`Render requested for a disconnected component ${this._element.tagName}`);this._compWithContextsRef.current.setState({compProps:this._props})}_verifyProps(e,t,s,r){if(s){if(s.readOnly)throw new o.JetElementError(this._element,`Read-only property '${e}' cannot be set.`);try{u.checkEnumValues(this._element,e,t,r)}catch(e){throw new o.JetElementError(this._element,e.message)}}}_updateProps(e,t){const s=e[0];let r=this._props;if(e.length>1){const e=this._props[s]??this._defaultProps?.[s];e&&c.CollectionUtils.isPlainObject(e)?r[s]=c.CollectionUtils.copyInto({},e,void 0,!0):r[s]={}}for(;e.length;){const s=e.shift();0===e.length?r[s]=t:r[s]||(r[s]={}),r=r[s]}}_queueFireEventsTask(e){let t=e;const s=this._getEventCollapseInfo(e,this._eventQueue);if(s){const[e,r]=s;this._eventQueue.splice(e,1),t=r}return this._eventQueue.push(t),this._queuedEvents||(this._queuedEvents=new Promise(e=>{window.queueMicrotask(()=>{try{for(;this._eventQueue.length;){const e=this._eventQueue.shift(),t=e.kind===z?new CustomEvent(e.type,{detail:e.detail}):e.event;this._element.dispatchEvent(t)}}finally{e(),this._queuedEvents=null}})})),this._queuedEvents}_getEventCollapseInfo(e,t){if(e.kind!==z)return null;for(let s=0;s<t.length;s++){const r=e.collapse?.(t[s]);if(r)return[s,r]}return null}_verifyConnectDisconnect(e){this._verifyingState===G.Unset&&window.queueMicrotask(()=>{this._verifyingState===e&&(this._verifyingState===G.Connect?this._verifiedConnect():this._verifiedDisconnect()),this._verifyingState=G.Unset}),this._verifyingState=e}_verifiedConnect(){if(this._state.isComplete())this._reconnectSlots();else if(this._state.startCreationCycle(),this._state.isCreating()){const e=()=>{this._element[o.CHILD_BINDING_PROVIDER]="preact";let e=this._state.getSlotMap();if(e)this._reconnectSlots();else{e=this._state.getSlotMap(!0);const t=this._removeAndConvertSlotsToProps(e);Object.assign(this._props,t)}this._render()};this._state.setCreateCallback(e),this._state.setBindingsDisposedCallback(()=>this._handleBindingsDisposed())}this._state.executeLifecycleCallbacks(!0)}_verifiedDisconnect(){this._state.executeLifecycleCallbacks(!1),this._state.isComplete()?(this._disconnectSlots(),this._state.resetCreationCycle(),n.render(null,this._element),V(this.ref,null),V(this._compWithContextsRef,null),V(this._oldRootRef,null),this._oldRootRef=void 0,this._vdom=null):this._state.pauseCreationCycle()}_initializePropsFromDom(){const e=this._element.attributes;for(let t=0;t<e.length;t++){const{name:s,value:r}=e[t],{propPath:n,propValue:o,propMeta:i,subPropMeta:a}=this._getPropValueInfo(s,r);n&&(this._verifyProps(n,o,i,a),this._updateProps(n.split("."),o))}}_playbackEarlyPropertySets(){for(;this._earlySets.length;){const e=this._earlySets.shift(),t=u.getPropertyMetadata(e.property,this._metadata?.properties),s=o.transformPreactValue(this._element,e.property,t,e.value);this.setProperty(e.property,s)}}_patchRootElement(e){const t=this._oldRootProps||this._getInitialRootProps(),s=e.props;this._isPatching=!0;try{!function(e,t,s,r,n,o){let i;for(i in s)"children"===i||"key"===i||i in t||o(e,i,null,s[i],r)||A(e,i,null,s[i],r);for(i in t)n&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||s[i]===t[i]||o(e,i,t[i],s[i],r)||A(e,i,t[i],s[i],r)}(this._element,s,t,!1,!1,$._setPropertyOverrides)}finally{this._isPatching=!1}const r=e.ref;this._oldRootRef!==r&&(V(r,this._element),r&&this._oldRootRef?.(null)),this._oldRootProps=s,this._oldRootRef=r}static _setPropertyOverrides(e,t,s,r){if("style"===t&&"string"==typeof s)throw new Error("CSS style must be an object. CSS text is not supported");if("class"===t||"className"===t){const t=null==r?I:o.CustomElementUtils.getClassSet(r),n=null==s?I:o.CustomElementUtils.getClassSet(s);for(const s of t.values())n.has(s)||e.classList.remove(s);for(const s of n.values())t.has(s)||e.classList.add(s);return!0}if("o"===t[0]&&"n"===t[1]){const n=t!==(t=t.replace(/Capture$/i,""));t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),$._getRootListeners(e,n)[t]=s;const o=n?$._eventProxyCapture:$._eventProxy;return s?r||e.addEventListener(t,o,n):e.removeEventListener(t,o,n),!0}return"role"===t&&(s?e.setAttribute(t,s):e.removeAttribute(t),!0)}static _getRootListeners(e,t){const s=t?F:D;let r=e[s];return r||(r=e[s]={}),r}_getInitialRootProps(){const e={};for(const t of this._controlledProps.values())t in this._props&&(e[t]=this._props[t]);return e}_removeAndConvertSlotsToProps(e){const t=this._metadata.extension?._DYNAMIC_SLOT,s=t?.prop,r=this._metadata?.slots,n=Object.keys(e),o={};if(n.length>0&&n.forEach(n=>{const i=e[n];i.forEach(e=>{x.parkNode(e),this._propagateSubtreeHidden(e)});const a=u.getPropertyMetadata(n,r);if(a){const e=!!a?.data,t=e||""!==n?n:"children";this._assignSlotProperty(o,t,void 0,n,e,i)}else{if(!s)return;o[s]||(o[s]={});const e=t.isTemplate;this._assignSlotProperty(o,n,s,n,e,i)}}),"knockout"===this._state.getBindingProviderType()){let e;for(;e=this._element.firstChild;)this._state.getBindingProviderCleanNode()(e),e.remove()}return o}_assignSlotProperty(e,t,s,r,n,i){const a=s?e[s]:e;if(n){if("TEMPLATE"!==i[0]?.nodeName)throw new o.JetElementError(this._element,`Slot content for template slot ${r} must be a template element.`);{const e=i[0];let r=e.render;r?(a[t]=r,Object.defineProperties(e,{render:{enumerable:!0,get:()=>r,set:e=>{r=e,e&&(this._updateProps([t],e),this._queueRender())}}})):a[t]=this._getSlotRenderer(e,t,s)}}else{const e=i.map((e,t)=>E(this._element,e,this._handleSlotMount.bind(this),this._handleSlotUnmount.bind(this)));a[t]=e}}_getSlotRenderer(e,t,s){const r=this._state.getBindingProvider(),n=r?()=>{(s?this._props[s]:this._props)[t]=this._getSlotRenderer(e,t,s),this._queueRender()}:null;return t=>{const s=this._state.getTemplateEngine();if(!s)throw new o.JetElementError(this._element,"Unexpected call to render a template slot");return s.execute(this._element,e,t,r,n)}}_handleBindingsDisposed(){x.disposeNodes(this._state.getSlotMap(),this._state.getBindingProviderCleanNode()),this._state.disposeTemplateCache()}_disconnectSlots(){x.disconnectNodes(this._state.getSlotMap())}_reconnectSlots(){x.reconnectNodes(this._state.getSlotMap())}_propagateSubtreeHidden(e){e.nodeType===Node.ELEMENT_NODE&&o.CustomElementUtils.subtreeHidden(e)}_handleSlotUnmount(e){this._state.isPostCreateCallbackOrComplete()&&(x.parkNode(e),window.queueMicrotask(()=>{x.isParked(e)&&this._propagateSubtreeHidden(e)}))}_handleSlotMount(e){const t=o.CustomElementUtils.subtreeShown;t&&e.nodeType===Node.ELEMENT_NODE&&(e.isConnected?t(e):window.queueMicrotask(()=>t(e)))}static _eventProxy(e){this[D][e.type](n.options.event?n.options.event(e):e)}static _eventProxyCapture(e){this[F][e.type](n.options.event?n.options.event(e):e)}_initializeActionCallbacks(e){Object.keys(e).forEach(t=>{const s=e[t],r=o.AttributeUtils.eventTypeToEventListenerProperty(t);this._props[r]=e=>{const r=Object.assign({},e),n=!!s.cancelable,o=[];n&&(r.accept=e=>{o.push(e)});const i={detail:r,bubbles:!!s.bubbles,cancelable:n},a=new CustomEvent(t,i),l=this._queueFireEventsTask({event:a,kind:"action"});if(n)return l.then(()=>a.defaultPrevented?Promise.reject():Promise.all(o).then(()=>Promise.resolve(),e=>Promise.reject(e)))}})}_initializeWritebackCallbacks(e){e.forEach(e=>{const t=o.AttributeUtils.propertyNameToChangedCallback(e),{prop:s,subProp:r}=u.getComplexPropertyMetadata(e,this._metadata?.properties);this._props[t]=t=>{this._updatePropsAndQueueRenderAsNeeded(e,t,s,r,!1)}})}}var G;!function(e){e[e.Connect=0]="Connect",e[e.Disconnect=1]="Disconnect",e[e.Unset=2]="Unset"}(G||(G={}));const W=s.forwardRef((e,t)=>{let s=e.children;const o=i.getElementRegistration(s.type).cache.contexts,c=[l.EnvironmentContext,...o??[]],p=c.map(e=>{const t=a.useContext(e),r=s.props.__oj_provided_contexts?.get(e);return void 0!==r?r:t}),u=a.useMemo(()=>{const e=new Map;for(let t=0;t<c.length;t++)e.set(c[t],p[t]);return e},p);if(void 0!==s.props.__oj_private_contexts&&s.props.__oj_private_contexts!==u&&(s=n.cloneElement(s).props.children),s.props.__oj_private_contexts=u,t)if(s.ref){const e=s.ref;s.ref=s=>{V(e,s),V(t,s)}}else s.ref=t;return r.jsx(n.Fragment,{children:s})});W.__ojIsEnvironmentWrapper=!0;const Q=(e,t)=>{if(Object.prototype.hasOwnProperty.call(e,t)){e[o.publicToPrivateName.get(t)]=o.toSymbolizedValue(e[t]),delete e[t]}},J=n.options.vnode;let Y=!1;n.options.vnode=e=>{const t=e.type;if("string"==typeof t&&i.isElementRegistered(t)){const t=e.props;Q(t,"value"),Q(t,"checked")}if("string"==typeof t&&!Y&&i.isVComponent(t)){Y=!0;try{const t=n.cloneElement(e),s=r.jsx(W,{children:t});Object.assign(e,s)}finally{Y=!1}}J?.(e)};const Z=100,K=n.options.requestAnimationFrame;n.options.requestAnimationFrame=function(e){const t=new Promise(s=>{const r=()=>{s(),_.__removePreactPromise(t),e()};if(K)K(r);else{const e=()=>{clearTimeout(t),cancelAnimationFrame(s),setTimeout(r)},t=setTimeout(e,Z),s=requestAnimationFrame(e)}});_.__addPreactPromise(t,"Preact requestAnimationFrame")};const X=new class{constructor(){this.appendChildHelper=(e,t)=>HTMLElement.prototype.appendChild.call(e,t),this.insertBeforeHelper=(e,t,s)=>HTMLElement.prototype.insertBefore.call(e,t,s)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,t,s){}getProperty(e){}setProperty(e,t){}setProperties(e){}};class ee extends HTMLElement{static get observedAttributes(){let e=[];return this.metadata.properties&&(e=e.concat(u.getFlattenedAttributes(this.metadata.properties))),this.rootObservedAttributes&&(e=e.concat(this.rootObservedAttributes)),e}connectedCallback(){this._getHelper().connectedCallback()}disconnectedCallback(){this._helper?.disconnectedCallback()}attributeChangedCallback(e,t,s){this._helper?.attributeChangedCallback(e,t,s)}getProperty(e){return this._getHelper().getProperty(e)}setProperty(e,t){this._getHelper().setProperty(e,t)}setProperties(e){this._getHelper().setProperties(e)}appendChild(e){return this._getHelper().appendChildHelper(this,e)}insertBefore(e,t){return this._getHelper().insertBeforeHelper(this,e,t)}setAttribute(e,t){if("class"===e){const e=o.CustomElementUtils.getClassSet(t);o.CustomElementUtils.getElementState(this).setOuterClasses(e)}else HTMLElement.prototype.setAttribute.call(this,e,t)}removeAttribute(e){"class"===e?this.setAttribute("class",""):HTMLElement.prototype.removeAttribute.call(this,e)}_getHelper(){return this._helper||(this.hasAttribute("data-oj-jsx")?(this.removeAttribute("data-oj-jsx"),this.classList.add("oj-complete"),this._helper=X):this._helper=new $(this,this.constructor.component,this.constructor.metadata,this.constructor.rootObservedAttributes,this.constructor.rootObservedProperties,this.constructor.defaultProps)),this._helper}}const te=n.createContext(null);function se(e,t){return"className"===e||o.AttributeUtils.isGlobalOrData(e)||function(e,t){if(t?.properties?.[e])return!1;const s=e.match(re);if(s){const e=s[1].toLowerCase()+s[2];return!t?.events?.[e]}return!1}(e,t)}const re=/^on(?!.*Changed$)([A-Za-z])([A-Za-z]*)$/;const ne=({children:e})=>{const{tagName:t,metadata:s,isElementFirst:n,vcompProps:i}=a.useContext(te);if(n)return e;const l=Object.keys(i).filter(e=>se(e,s)).reduce((e,t)=>(e[t]=i[t],e),{}),c=r.jsx("div",{ref:function(e){e&&(e[o.CustomElementUtils.VCOMP_INSTANCE]={props:i})},"data-oj-jsx":"",...l,children:e});return c.type=t,c},oe="class",ie=s.forwardRef((e,t)=>{const{tagName:s,metadata:i,isElementFirst:l,vcompProps:c,observedPropsSet:p}=a.useContext(te);if(l){const o=r.jsx("div",{...e,ref:t});return o.type=s,c[L](o),r.jsx(n.Fragment,{children:e.children})}const u={};c.style&&e.style&&(u.style=Object.assign({},c.style,e.style));const d=c[oe];if(d){const t=e[oe]||"";u[oe]=`${d} ${t}`}const h=Object.keys(c).filter(t=>!(t in e)&&!p.has(t)&&se(t,i)).reduce((e,t)=>(e[t]=c[t],e),{}),m=r.jsx("div",{...e,...u,...h,ref:e=>{t&&V(t,e),e&&(e[o.CustomElementUtils.VCOMP_INSTANCE]={props:c})},"data-oj-jsx":""});return m.type=s,m});class ae extends o.LifecycleElementState{constructor(e){super(e),this._translationBundleMap={}}getTranslationBundleMap(){return this._translationBundleMap}getTemplateEngine(){return ae._cachedTemplateEngine}getTrackChildrenOption(){return"immediate"}allowPropertyChangedEvents(){return super.allowPropertyChangedEvents()&&(e=>{const t=e._getHelper();return!!t.isInitialized?.()})(this.Element)}allowPropertySets(){return this._allowPropertySets||super.allowPropertySets()}resetCreationCycle(){this._allowPropertySets=super.allowPropertySets(),super.resetCreationCycle()}disposeTemplateCache(){const e=this.getSlotMap(),t=Object.keys(e),s=i.getElementDescriptor(this.Element.tagName).metadata,r=s?.extension?._DYNAMIC_SLOT,n=!!r?.isTemplate;t.filter(e=>{const t=u.getPropertyMetadata(e,s?.slots);if(t){if(t.data)return!0}else if(n)return!0;return!1}).forEach(t=>{const s=e[t];"TEMPLATE"===s[0]?.nodeName&&this.getTemplateEngine().cleanupTemplateCache(s[0])})}GetPreCreatedPromise(){let e,t;return this.Element.constructor.translationBundleMap&&(e=this._getTranslationBundlesPromise()),!ae._cachedTemplateEngine&&this._hasDirectTemplateChildren()&&(t=this._getTemplateEnginePromise()),Promise.all([e,t]).then(()=>this.Element.isConnected?super.GetPreCreatedPromise():Promise.reject())}IsTransferAttribute(e){return this.Element.constructor.rootObservedAttrSet.has(e)}GetDescriptiveTransferAttributeValue(e){return((e,t)=>{const s=e.getAttribute(t);if(s)return s;const r=e._getHelper();return(r.getProps?.()||{})[t]})(this.Element,e)}_getTranslationBundlesPromise(){const e=this.Element.constructor.translationBundleMap,t=Object.keys(e),s=[];return t.forEach(t=>{if(!ae._bundlePromiseCache[t]){const s=e[t];ae._bundlePromiseCache[t]=f.getTranslationBundlePromiseFromLoader(s)}s.push(ae._bundlePromiseCache[t])}),Promise.all(s).then(e=>{t.forEach((t,s)=>{this._translationBundleMap[t]=e[s]})})}_getTemplateEnginePromise(){return new Promise(function(t,s){e(["ojs/ojvcomponent-template"],function(e){t(function(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),t.default=e,t}(e))},s)}).then(e=>{ae._cachedTemplateEngine=e})}_hasDirectTemplateChildren(){const e=this.Element.childNodes;for(let t=0;t<e.length;t++){if("template"===e[t].localName)return!0}return!1}}ae._bundlePromiseCache={};const le=Symbol("functional component");function ce(e){return function(t){const a=t._metadata||t.metadata||{};!function(e){e.properties||(e.properties={});e.properties.__oj_private_color_scheme={type:"string",binding:{consume:{name:"colorScheme"}}},e.properties.__oj_private_scale={type:"string",binding:{consume:{name:"scale"}}},e.properties.__oj_private_contexts={type:"object"},e.properties.__oj_provided_contexts={type:"object"}}(a);const l=a?.extension?._OBSERVED_GLOBAL_PROPS||[],c=l.map(e=>o.AttributeUtils.getGlobalAttrForProp(e));!function(e,t,i,a){const l=t.prototype.render;t.prototype.render=function(t,c,p){const u=i?.extension?._READ_ONLY_PROPS;u&&u.forEach(e=>delete t[e]);const d=t[N],h=!!d;h&&o.CustomElementUtils.getElementState(d).disposeTemplateCache();let m=t;if(t[N]){const{[N]:e,[L]:s,...r}=t;m=r}let _=l.call(this,m,c,p);if(_?.type?.__ojIsEnvironmentWrapper&&_.props.children.type===e){const t=_.props.children;t.type=ie;try{_=n.cloneElement(t)}finally{t.type=e}}const f=_?.type;return f!==ie&&(pe(f)===(ue||(ue=pe(s.forwardRef(()=>null))),ue)&&f[le]&&0!==Object.keys(i.methods||{}).length||(_=r.jsx(ne,{children:_}))),r.jsx(te.Provider,{value:{tagName:e,metadata:i,isElementFirst:h,vcompProps:t,observedPropsSet:a},children:_})}}(e,t,a,new Set(l)),function(e,t,s,r,n,a){class l extends ee{}l.metadata=t,l.component=s,l.rootObservedAttributes=n,l.rootObservedAttrSet=new Set(n),l.rootObservedProperties=r,l.defaultProps=s.defaultProps||s._defaultProps?u.deepFreeze(s.defaultProps||s._defaultProps):null,l.translationBundleMap=a,function(e,t){if(!t)return;for(let s in t)Object.defineProperty(e,s,{get(){return this.getProperty(s)},set(e){this.setProperty(s,e)}}),o.addPrivatePropGetterSetters(e,s)}(l.prototype,t?.properties),function(e,t){if(!t)return;for(let s in t)e[s]=function(){if(this._helper===X)throw new o.JetElementError(this,"Cannot access element methods when rendered as a value based element.");const e=this._helper.ref.current;if(!e)throw new o.JetElementError(this,"Cannot access methods before element is upgraded.");return e[s].apply(e,arguments)}}(l.prototype,t?.methods),i.registerElement(e,{descriptor:{metadata:t},stateClass:ae,vcomp:!0,cache:{contexts:s._consumedContexts}},l)}(e,a,t,l,c,t._translationBundleMap||t.translationBundleMap),!t._metadata&&t.metadata&&m.warn(`Component ${e} is compiled with JET version prior to 14.0.0`)}}function pe(e){return e?.$$typeof}let ue;"undefined"!=typeof window&&(HTMLTemplateElement.prototype.hasOwnProperty("render")||Object.defineProperty(HTMLTemplateElement.prototype,"render",{value:null,writable:!0}));const de=o.ElementUtils.getUniqueId.bind(null,null);t.Root=ie,t.consumedContexts=function(e){return function(e){}},t.customElement=ce,t.getUniqueId=de,t.method=function(e,t,s){},t.registerCustomElement=function(e,t,o){class i extends n.Component{constructor(){if(super(),this.__refCallback=e=>{this.__vcompRef&&(this.__vcompRef.current=e);const t=this.props.innerRef;V(t,e)},i._metadata?.methods){this.__vcompRef=n.createRef();const e=i._metadata.methods,t=this;for(let s in e)t[s]=(...e)=>this.__vcompRef.current?.[s].apply(this.__vcompRef.current,e)}}render(){return arguments[0].ref=this.__refCallback,t(arguments[0])}}return i.displayName=arguments[2],arguments.length>=4&&arguments[3]&&(i._metadata=arguments[3],arguments.length>=5&&arguments[4]&&(i._defaultProps=arguments[4])),arguments.length>=6&&(i._translationBundleMap=arguments[5]),arguments.length>=7&&(i._consumedContexts=arguments[6].consume),i[le]=!0,ce(e)(i),s.forwardRef((e,t)=>r.jsx(i,{...e,innerRef:t}))},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojvcomponent.js.map