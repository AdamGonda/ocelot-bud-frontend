/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojlogger","ojs/ojhtmlutils","ojs/ojcustomelement-utils","ojs/ojcustomelement-registry","preact","preact/jsx-runtime","ojs/ojcontext","ojs/ojvcomponent","ojs/ojdataproviderhandler","ojs/ojpreact-managetabstops","ojs/ojbindpropagation","ojs/ojconfig","ojs/ojmetadatautils","ojs/ojcspexpressionevaluator-internal","ojs/ojmonitoring","ojs/ojexpparser"],function(e,t,r,s,a,o,n,i,l,p,u,c,d,h,y,_,E){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;class v extends o.Component{constructor(e){super(e),this._resolveConfig=e=>{this._registerBusyState(),e.then(t=>{e===this.props.config&&this.setState({view:this._getFragment(t?.view??[]),data:t?.data})}).finally(()=>{e===this.props.config&&this._resolveBusyState()})},this._getFragment=e=>{const t=new DocumentFragment;return e.forEach(e=>{t.appendChild(e.cloneNode(this))}),t},this._registerBusyState=()=>{if(!this._resolveBusyStateCallback){const e=this._busyContextEl?.current?this._busyContextEl?.current:this.props.componentElement;e&&(this._resolveBusyStateCallback=i.getContext(e).getBusyContext().addBusyState({description:`oj-bind-dom is waiting on config Promise resolution on element ${e.tagName}#${e.id}`}))}},this._resolveBusyState=()=>{this._resolveBusyStateCallback&&(this._resolveBusyStateCallback(),this._resolveBusyStateCallback=null)},this.state={view:null,data:null},this._busyContextEl=null}componentDidMount(){this._resolveConfig(this.props.config)}componentDidUpdate(e,t){this.props.config!==e.config&&this._resolveConfig(this.props.config)}render(){return n.jsx(o.Fragment,{children:n.jsx(l.ReportBusyContext.Consumer,{children:e=>(this._busyContextEl=e,this.state.view&&this.props.executeFragment?this.props.executeFragment(null,this.state.view,this.state.data,this.forceUpdate.bind(this),this.props.bindingProvider):null)})})}}class m extends o.Component{constructor(e){super(e),this._addBusyState=e=>{const t=this._busyContextEl?.current?this._busyContextEl?.current:this.props.componentElement;return i.getContext(t).getBusyContext().addBusyState({description:e})},this.BindForEachWithDP=p.withDataProvider(g,"data")}render(e){return Array.isArray(e.data)?n.jsx(b,{data:e.data,itemRenderer:e.itemRenderer}):n.jsx(l.ReportBusyContext.Consumer,{children:t=>(this._busyContextEl=t,n.jsx(this.BindForEachWithDP,{addBusyState:this._addBusyState,data:e.data,itemRenderer:e.itemRenderer}))})}}class g extends o.Component{render(e){const t=e.data.map(e=>e.data);return n.jsx(b,{data:t,itemRenderer:e.itemRenderer})}}class b extends o.Component{render(){const e=this.props.data;return n.jsx(o.Fragment,{children:e?e.map((e,t)=>this.props.itemRenderer({data:e,index:t,observableIndex:()=>t})):[]})}}const P=Symbol(),f=Symbol(),A=Symbol(),C=Symbol(),x=Symbol(),R=Symbol(),T=function(e){return e},N="$provided",L=[{type:E.IDENTIFIER,name:"$context"}],j=new Map;class I{constructor(){this._templateAstCache=new WeakMap,this._cspEvaluator=d.getExpressionEvaluator()??new y.CspExpressionEvaluatorInternal}static cleanupTemplateCache(e){e&&e._cachedRows&&(e._cachedRows.forEach(e=>e.dispose()),e._cachedRows=[])}executeFragment(e,t,r,a,o){let n=o;return n||(n=e?s.CustomElementUtils.getElementState(e)?.getBindingProvider():null),!r?.$provided||r.$provided instanceof Map||(r.$provided=new Map(Object.entries(r.$provided))),this._execute({[P]:n,[f]:e,[A]:t,[x]:r},t,r,a)}execute(e,t,r,s,a){const o=t.getAttribute("data-oj-as"),n=this._getContext(s,e,t,r,null,o);return this._execute({[P]:s,[f]:e,[A]:t,[x]:n},t,n,a)}_execute(e,t,r,s){const a=this._getAstViaCache(e,t),n=e[P];if(n){t._cachedRows||Object.defineProperties(t,{_cachedRows:{writable:!0,value:[]}});const e=n.__KoComputed(()=>{if(n.__KoIsInitial())return this._cspEvaluator.evaluate(a,{$context:r,$h:o.h,BindDom:v});I.cleanupTemplateCache(t),s()});return t._cachedRows.push(e),e()}return this._cspEvaluator.evaluate(a,{$context:r,$h:o.h,BindDom:v})}_getContext(e,r,s,a,o,n){if(e){let i=e.__ContextFor(s);return i||(t.info(`Binding context not found when processing template for element with id: ${r.id}. Using binding context for element instead.`),i=e.__ContextFor(r)),e.__ExtendBindingContext(i,a,o,n,r)}const i={$current:a};return n&&(i[n]=a),i}_getAstViaCache(e,t){let s=this._templateAstCache.get(t);if(!s){if(11===t.nodeType)s=this._createAst(e,Array.from(t.childNodes));else{const a=r.getTemplateContent(t)[0];s=this._createAst(e,Array.from(a.childNodes))}this._templateAstCache.set(t,s)}return s}_createAst(e,t){const r={type:E.ARRAY_EXP,elements:[]};return r.elements=Array.prototype.reduce.call(t,(t,r)=>{const s=this._processSpecialNodes(e,r);return s?t.push(s):3===r.nodeType?t.push({type:E.LITERAL,value:r.nodeValue}):1===r.nodeType&&t.push(this._createElementNode(e,r)),t},[]),r}_processSpecialNodes(e,t){if(1===t.nodeType)switch(t.tagName.toLowerCase()){case"oj-bind-text":return this._createExpressionNode(e,t.getAttribute("value"));case"oj-bind-if":return this._createIfExpressionNode(e,t);case"oj-bind-for-each":return this._createBindForEachExpressionNode(e,t);case"oj-bind-dom":return this._createBindDomExpressionNode(e,t);case"oj-bind-template-slot":return this._createBindTemplateNode(e,t);case"oj-defer":return this._createDeferNode(e,t);case"oj-if":return this._createIfNode(e,t);case"template":return this._createTemplateWithRenderCallback(e,t)}return null}_createBindTemplateNode(e,t){const r={type:E.OBJECT_EXP,properties:[]},s=t.getAttribute("name")||"";r.properties.push(this._getAttribute(e,"name",s));const a=t.getAttribute("data");a&&r.properties.push(this._getAttribute(e,"data",a));const n=t.getAttribute("as");return this._createCallNodeWithContext((r,s)=>{const a=s.data,i=s.name,l=e[x].__oj_slots[i];let p=l&&l[l.length-1],u=!1;if(!p)for(let e in t.childNodes)if("TEMPLATE"===t.childNodes[e].nodeName){p=t.childNodes[e],u=!0;break}if(p&&p.render)return p.render(a);if(p){const t=this._getAstViaCache(e,p),r=p.getAttribute("data-oj-as"),s=this._getContext(e[P],u?e[f]:e[x].__oj_composite,p,a,u?n:null,r);return this._cspEvaluator.evaluate(t,{$context:s,$h:o.h,BindDom:v})}},[r])}_createTemplateWithRenderCallback(e,t){const r=t.getAttribute("data-oj-as"),s=this._getAstViaCache.bind(this),a=this._cspEvaluator,n={type:E.PROPERTY,key:{type:E.LITERAL,value:"render"},value:{type:E.LITERAL,value:(n,i)=>{const l=Object.assign({},e[x],{$current:n});if(r&&(l[r]=n),l.$provided&&i){const e=new Map([...l.$provided,...i]);l.$provided=e}else i&&(l.$provided=i);const p={[x]:l,[P]:e[P],[f]:e[f],[C]:e[C]},u=s(p,t);return a.evaluate(u,{$context:l,$h:o.h})}}};let i=this._getElementProps(e,t);return i.push(n),e[P]&&i.push({type:E.PROPERTY,key:{type:E.LITERAL,value:"data-oj-use-ko"},value:{type:E.LITERAL,value:""}}),this._createHFunctionCallNode("template",[{type:E.OBJECT_EXP,properties:i}])}_createDeferContent(e,t,r){const s={view:t,data:r},a={config:Promise.resolve(s),bindingProvider:e[P],executeFragment:this.executeFragment.bind(this)};return o.h(v,a)}_createDeferNode(e,t){let r,s=this._createDeferContent(e,[],{});const a=[{type:E.PROPERTY,key:{type:E.LITERAL,value:"ref"},value:{type:E.LITERAL,value:e=>{e?(r=e,o.render(s,r)):o.render(null,r)}}},{type:E.PROPERTY,key:{type:E.LITERAL,value:"_activateSubtree"},value:this._createCallNodeWithContext(r=>a=>{s=this._createDeferContent(e,Array.from(t.childNodes),r),o.render(s,a)})}];let n=this._getElementProps(e,t);return n=n.concat(a),this._createHFunctionCallNode("oj-defer",[{type:E.OBJECT_EXP,properties:n}])}_createIfExpressionNode(e,t){if(!t.hasAttribute("test"))throw new Error("Missing the required 'test' attribute on <oj-bind-if>");return{type:E.UNARY_EXP,operator:"...",argument:this._createIfTestNode(e,t)}}_createIfNode(e,t){if(!t.hasAttribute("test"))throw new Error("Missing the required 'test' attribute on <oj-if>");const r=this._getElementProps(e,t);return r.push(this._createPropertyNode(e,"style","display:contents;")),this._createHFunctionCallNode("oj-if",[{type:E.OBJECT_EXP,properties:r},this._createIfTestNode(e,t)])}_createIfTestNode(e,t){return{type:E.CONDITIONAL_EXP,test:this._createExpressionNode(e,t.getAttribute("test")),consequent:this._createAst(e,Array.from(t.childNodes)),alternate:{type:E.LITERAL,value:[]}}}_createBindForEachExpressionNode(e,t){const r=t.getElementsByTagName("template")[0];if(!r)throw new Error("Template not found: oj-bind-for-each requires a single template element as its direct child");return this._createComponentNode(e,t,m,[{type:E.PROPERTY,key:{type:E.LITERAL,value:"itemRenderer"},value:this._createNestedTemplateRendererNode(e,r)},{type:E.PROPERTY,key:{type:E.LITERAL,value:"componentElement"},value:{type:E.LITERAL,value:e[f]}}])}_createNestedTemplateRendererNode(e,t){const r=t.getAttribute("data-oj-as"),s={[P]:e[P],[x]:e[x],[f]:e[f],[A]:e[A],[C]:(e,t)=>"function"!=typeof t||"$current.observableIndex"!==e&&e!==`${r}.observableIndex`?t:t()},a=this._getAstViaCache(s,t);return this._createCallNodeWithContext(e=>t=>{const s={$current:t};null!=r&&(s[r]=t);const n=Object.assign({},e,s);return this._cspEvaluator.evaluate(a,{$context:n,$h:o.h})})}_createElementNode(e,t){const r=this._getElementProps(e,t),s=t.tagName,o=s.toLowerCase(),n=a.getMetadata(s),i=this._createHFunctionCallNode(o,[this._createPossiblyProvidedAndConsumedProperties(o,e,n,r),this._createAst(e,Array.from(t.childNodes))]);return t.hasAttribute("data-oj-manage-tabs")?this._createComponentNode(e,null,u.ManageTabStops,[{type:E.PROPERTY,key:{type:E.LITERAL,value:"children"},value:i}]):i}_createPossiblyProvidedAndConsumedProperties(e,t,r,a){const o={type:E.OBJECT_EXP,properties:a},n=c.getPropagationMetadataViaCache(e,r);if(!n)return o;const i=new Set;a.reduce((e,t)=>e.add(t.key.value),i);const l=[],p=this._getUnwrapObservable(t);for(const[e,t]of n){const r=t[1];r&&(e===c.CONSUMED_CONTEXT?l.push({type:E.PROPERTY,key:{type:E.LITERAL,value:"__oj_provided_contexts"},value:this._createCallNodeWithContext(e=>{const t=new Map,s=p(e)?.[N];return r.forEach(e=>{s?.has(e)&&t.set(e,p(s.get(e)))}),t})}):i.has(e)||i.has(s.AttributeUtils.propertyNameToAttribute(e).toUpperCase())||l.push({type:E.PROPERTY,key:{type:E.LITERAL,value:e},value:this._createCallNodeWithContext(e=>{const t=p(e)?.[N];if(t)return p(t.get(r.name))})}))}const u=0===l.length?o:{type:E.OBJECT_EXP,properties:o.properties.concat(l)},d=r.properties;return this._createCallNodeWithContext((t,r)=>{let a,o=new Map;for(const[t,[i]]of n)i&&i.forEach(n=>{let i,l=!0;if(t===c.STATIC_PROPAGATION)l=!1;else if(r.hasOwnProperty(t))i=r[t];else{const a=s.AttributeUtils.propertyNameToAttribute(t),o=a.toUpperCase();if(r.hasOwnProperty(o)){i=r[o];const n=d?.[t]?.type;n&&null!=i&&(i=s.AttributeUtils.parseAttributeValue(e,a,i,n))}else l=!1}const p="default";if(l){const e=n.transform;i=e&&e.hasOwnProperty(i)?e[i]:i}else n.hasOwnProperty(p)&&(i=n[p],l=!0);l&&(a=!0,o.set(n.name,i))});if(a){const e=t[N];void 0!==e&&(o=new Map([...e,...o])),t[N]=o}return r},[u])}_createBindDomExpressionNode(e,t){if(!t.hasAttribute("config"))throw new Error("Missing the required 'config' attribute on <oj-bind-dom>");const r=t.attributes.config.value,s=[this._createPropertyNode(e,"config",r,e=>Promise.resolve(e)),{type:E.PROPERTY,key:{type:E.LITERAL,value:"bindingProvider"},value:{type:E.LITERAL,value:e[P]}},{type:E.PROPERTY,key:{type:E.LITERAL,value:"componentElement"},value:{type:E.LITERAL,value:e[f]}},{type:E.PROPERTY,key:{type:E.LITERAL,value:"executeFragment"},value:{type:E.LITERAL,value:this.executeFragment.bind(this)}}];return this._createHFunctionCallNode(v,[{type:E.OBJECT_EXP,properties:s}])}_createComponentNode(e,t,r,s){let a=t?this._getElementProps(e,t):[];return a=s?a.concat(s):a,this._createHFunctionCallNode(r,[{type:E.OBJECT_EXP,properties:a}])}_createPropertyNode(e,t,r,s){return{type:E.PROPERTY,key:{type:E.LITERAL,value:t},value:this._createExpressionNode(e,r,s)}}_postprocessClassNameValue(e){let t;return t=Array.isArray(e)?e.join(" "):"string"!=typeof e?Object.keys(e).reduce((t,r)=>(e[r]&&t.push(r),t),[]).join(" "):e,t}_getElementProps(e,t){let r;const o=[],n=[],i=new Map,l=new Map,p=Array.prototype.reduce.call(t.attributes,(p,u)=>{let c=u.name;const d=u.value;if(c.startsWith(":")){c=c.substring(1);const t=c.split(".");2===t.length&&"style"===t[0]?o.push({k:t[1],v:d}):"style"===c?r=d:"class"===c?p.push(this._createPropertyNode(e,"className",d,this._postprocessClassNameValue)):(c=s.AttributeUtils.isGlobalOrData(c)?s.AttributeUtils.getGlobalPropForAttr(c):s.AttributeUtils.attributeToPropertyName(c),p.push(this._createPropertyNode(e,c,d)))}else{const r=s.AttributeUtils.getExpressionInfo(d);if(s.AttributeUtils.isEventListenerAttr(c))c=s.AttributeUtils.eventAttrToPreactPropertyName(c),l.set(c,d);else if(s.AttributeUtils.isGlobalOrData(c))p.push(this._createPropertyNode(e,s.AttributeUtils.getGlobalPropForAttr(c),d));else{const o=s.AttributeUtils.attributeToPropertyName(c),l=o.split(".");if(r.expr){const s=h.getPropertyMetadata(l[0],a.getPropertiesForElementTag(t.tagName));if(s?.readOnly||(l.length>1?n.push({subProps:o,expr:r.expr}):p.push({type:E.PROPERTY,key:{type:E.LITERAL,value:o},value:this._createExpressionEvaluator(e,r.expr)})),!r.downstreamOnly&&s?.writeback){let e=l;const t=e.shift();let s=i.get(t);if(s){s=[...s,{expr:r.expr,subProps:e}]}else s=[{expr:r.expr,subProps:e}];i.set(t,s)}}else if("o"===c[0]&&"n"===c[1])p.push({type:E.PROPERTY,key:{type:E.LITERAL,value:c.toUpperCase()},value:{type:E.LITERAL,value:d}});else{const r=this._getLiteralValueViaCache(e,t,c,o,d);l.length>1?n.push({subProps:o,expr:{type:E.LITERAL,value:r}}):p.push({type:E.PROPERTY,key:{type:E.LITERAL,value:o},value:{type:E.LITERAL,value:r}})}}}return p},[]);if(null!=r){if(o.length>0)throw new Error("Binding the entire style attribute as well as the individual style properties on the same element is not supported");p.push(this._createPropertyNode(e,"style",r))}else o.length>0&&p.push({type:E.PROPERTY,key:{type:E.LITERAL,value:"style"},value:{type:E.OBJECT_EXP,properties:o.map(t=>this._createPropertyNode(e,s.AttributeUtils.attributeToPropertyName(t.k),t.v))}});return n.length>0&&p.push(this._createRefPropertyNodeForNestedProps(e,n)),i.forEach((t,r)=>{const a=`on${r}Changed`,o=l.get(a);o&&l.delete(a),p.push(this._createWritebackPropertyNode(e,r,a,t,s.AttributeUtils.getExpressionInfo(o)?.expr))}),l.forEach((e,t)=>{const r=s.AttributeUtils.getExpressionInfo(e);r.expr&&p.push(this._createEventListenerPropertyNode(t,r.expr))}),p}_getLiteralValueViaCache(e,t,r,o,n){const i=h.getPropertyMetadata(o,a.getPropertiesForElementTag(t.tagName));if(!i)return n;const l=e[A]?.id,p=l?JSON.stringify([l,o,n]):null;let u=p?j.get(p):null;return u||(u=s.CustomElementUtils.parseAttrValue(t,r,o,n,i),p&&("object"==typeof u||Array.isArray(u))&&j.set(p,u)),u}_createRefPropertyNodeForNestedProps(e,t){const r=t.map(({subProps:t,expr:r})=>({type:E.OBJECT_EXP,properties:[{type:E.PROPERTY,key:{type:E.LITERAL,value:t},value:r.type===E.LITERAL?{type:E.LITERAL,value:r.value}:this._createExpressionEvaluator(e,r)}]})),s={type:E.ARRAY_EXP,elements:r},a=I._nestedPropsRefCallback;return{type:E.PROPERTY,key:{type:E.LITERAL,value:"ref"},value:this._createCallNodeWithContext(Function.prototype.bind.bind(a,e[P]),[s])}}static _nestedPropsRefCallback(e,t,r){if(r&&r.setProperties){const e=I._getPreviousNestedPropValues(r),s=t.filter(t=>{const r=Object.keys(t)[0],s=t[r];return e?.[r]!==s}),a=Object.assign({},...s);I._setUpdatedNestedPropValues(r,a),r.setProperties(a)}}static _getPreviousNestedPropValues(e){return e[R]}static _setUpdatedNestedPropValues(e,t){let r=e[R];r||(r={},e[R]=r),Object.assign(r,t)}_createWritebackPropertyNode(e,t,r,s,a){const o=[];let n;return{type:E.PROPERTY,key:{type:E.LITERAL,value:r},value:this._createCallNodeWithContext(r=>i=>{s.forEach((s,a)=>{let n=i.detail.value;var l=s.subProps,p=s.expr;l.length>0&&"object"==typeof n&&(n=l.reduce((e,t)=>e[t],n));let u=o[a];u||(u=this._cspEvaluator.createEvaluator(p).evaluate,o.push(u));const c=u([r,r.$data]);let d;if(e[P]&&e[P].__IsObservable(c))d=c;else{const e=this._getPropertyWriterExpression(p);if(null!==e){const t=this._cspEvaluator.createEvaluator(e).evaluate;d=this._getWriter(t([r.$data||{},r]))}}_.performMonitoredWriteback(t,d,i,n)}),a&&!n&&(n=this._cspEvaluator.createEvaluator(a).evaluate);const l=n?n([r,r.$data]):null;l&&l(i,r.$current||r.$data,r)})}}_createEventListenerPropertyNode(e,t){let r;return{type:E.PROPERTY,key:{type:E.LITERAL,value:e},value:this._createCallNodeWithContext(e=>s=>{r||(r=this._cspEvaluator.createEvaluator(t).evaluate);const a=r([e,e.$data]);a&&a(s,e.$current||e.$data,e)})}}_createExpressionNode(e,t,r){const a=s.AttributeUtils.getExpressionInfo(t);return a.expr?this._createExpressionEvaluator(e,a.expr,r):{type:E.LITERAL,value:t}}_createExpressionEvaluator(e,t,r){const s=this._cspEvaluator.createEvaluator(t).evaluate;return this._createCallNodeWithContext(a=>{const o=this._getUnwrapObservable(e),n=o(a);let i=o(s([n,n.$data]));return e[C]&&(i=e[C](t,i)),r?r(i):i})}_getUnwrapObservable(e){const t=e[P];return t?t.__UnwrapObservable:T}_createCallNodeWithContext(e,t){return{type:E.CALL_EXP,callee:{type:E.LITERAL,value:e},arguments:t?L.concat(t):L}}_createHFunctionCallNode(e,t){return{type:E.CALL_EXP,callee:{type:E.IDENTIFIER,name:"$h"},arguments:[{type:E.LITERAL,value:e},...t]}}_getAttribute(e,t,r){const a=s.AttributeUtils.getExpressionInfo(r).expr;return{type:E.PROPERTY,key:{type:E.LITERAL,value:t},value:a?this._createExpressionEvaluator(e,a):{type:E.LITERAL,value:r}}}_getWriter(e){return e._ko_property_writers}_getPropertyWriterExpression(e){if(null==e||["true","false","null","undefined"].indexOf(e)>=0)return null;const t=(e=e.trim()).match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);if(null===t)return null;return`{_ko_property_writers: function(v){${t[1]?`Object(${t[1]})${t[2]}`:e}=v;}}`}}const O=new I,w=O.executeFragment.bind(O),$=O.execute.bind(O),k=I.cleanupTemplateCache;e.cleanupTemplateCache=k,e.execute=$,e.executeFragment=w,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojvcomponent-template.js.map