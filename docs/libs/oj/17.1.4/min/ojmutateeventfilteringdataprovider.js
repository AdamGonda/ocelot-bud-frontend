/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojdataprovider","ojs/ojcachediteratorresultsdataprovider","ojs/ojdedupdataprovider","ojs/ojcomponentcore","ojs/ojeventtarget"],function(t,e,a,i,s,r){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;
/**
     * @license
     * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
     * Licensed under The Universal Permissive License (UPL), Version 1.0
     * @ignore
     */
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
class n{constructor(s){var r,o;this.dataProvider=s,this.MutateEventFilteringAsyncIterable=(o=class{constructor(t,e,a,i){this._parent=t,this.params=e,this.dataProviderAsyncIterator=a,this.cache=i,this[r]=()=>new this._parent.MutateEventFilteringAsyncIterator(this._parent,this.params,this.dataProviderAsyncIterator,this.cache)}},r=Symbol.asyncIterator,o),this.MutateEventFilteringAsyncIterator=class{constructor(t,e,a,i){this._parent=t,this.params=e,this.asyncIterator=a,this.cache=i}next(){let t=this;const s=this.params?.signal;return e.wrapWithAbortHandling(s,e=>e(this.asyncIterator.next().then(e=>(t._parent.dataProvider instanceof a||t._parent.dataProvider instanceof i||t._parent.cache.addListResult(e),e))),!1)}},this.DataProviderMutationEventDetail=class{constructor(t,e,a){this.add=t,this.remove=e,this.update=a,this[n._ADD]=t,this[n._REMOVE]=e,this[n._UPDATE]=a}};let d=this;this.cache=s instanceof a||s instanceof i?s.cache:new t.DataCache,s.createOptimizedKeyMap&&(this.createOptimizedKeyMap=t=>s.createOptimizedKeyMap(t)),s.createOptimizedKeySet&&(this.createOptimizedKeySet=t=>s.createOptimizedKeySet(t)),s.addEventListener(n._MUTATE,t=>{if(t.detail){let e=d._processMutations(t.detail.remove),a=d._processMutations(t.detail.update);if(e&&e.keys&&e.keys.size>0||a&&a.keys&&a.keys.size>0||t.detail.add&&t.detail.add.keys&&t.detail.add.keys.size>0){let i=new d.DataProviderMutationEventDetail(t.detail.add,e,a),s=Object.assign({},t);s.detail=i,d.dispatchEvent(s)}}else d.dispatchEvent(t)}),s.addEventListener(n._REFRESH,t=>{d.cache.reset(),d.dispatchEvent(t)})}containsKeys(t){return this.dataProvider.containsKeys(t)}fetchByKeys(t){const a=t?.signal;return e.wrapWithAbortHandling(a,e=>e(this.dataProvider.fetchByKeys(t)),!1)}fetchByOffset(t){const a=t?.signal;return e.wrapWithAbortHandling(a,e=>e(this.dataProvider.fetchByOffset(t)),!1)}fetchFirst(t){const e=this.dataProvider.fetchFirst(t);return new this.MutateEventFilteringAsyncIterable(this,t,e[Symbol.asyncIterator](),this.cache)}getCapability(t){let e=this.dataProvider.getCapability(t);return"eventFiltering"===t?{type:"iterator"}:e}getTotalSize(){return this.dataProvider.getTotalSize()}isEmpty(){return this.dataProvider.isEmpty()}_processMutations(t){if(t){let e=t[n._KEYS];if(e&&e.size>0){let a=new Set,i=this.cache.getDataByKeys({keys:e});e.forEach(function(t){i.results.has(t)||a.add(t)});let s=Object.assign({},t);return a.forEach(function(t){let e=[];s.keys.forEach(function(t){e.push(t)});let a=e.indexOf(t);s.keys.delete(t),e.splice(a,1),s.data&&s.data.splice(a,1),s.indexes&&s.indexes.splice(a,1),s.metadata&&s.metadata.splice(a,1)}),s}}return t}}return n._KEY="key",n._KEYS="keys",n._DATA="data",n._METADATA="metadata",n._ITEMS="items",n._FROM="from",n._OFFSET="offset",n._REFRESH="refresh",n._MUTATE="mutate",n._SIZE="size",n._FETCHPARAMETERS="fetchParameters",n._VALUE="value",n._DONE="done",n._RESULTS="results",n._ADD="add",n._UPDATE="update",n._REMOVE="remove",n._INDEXES="indexes",r.EventTargetMixin.applyMixin(n),t._registerLegacyNamespaceProp("MutateEventFilteringDataProvider",n),n});
//# sourceMappingURL=ojmutateeventfilteringdataprovider.js.map