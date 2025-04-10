/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojeventtarget","ojs/ojrestdataprovider","ojs/ojdataprovider","ojs/ojcomponentcore"],function(t,e,a,r,s){"use strict";class i{constructor(t){var e;this.options=t,this.TreeAsyncIterator=class{constructor(t,e){this._rootDataProvider=t,this._baseIterable=e}async next(){const t=await this._baseIterable[Symbol.asyncIterator]().next();for(let e=0;e<t.value.data.length;e++)this._rootDataProvider._setMapEntry(t.value.metadata[e].key,{data:t.value.data[e],metadata:t.value.metadata[e]});return t}},this.TreeAsyncIterable=(e=class{constructor(t){this._asyncIterator=t,this[Symbol.asyncIterator]=()=>this._asyncIterator}},Symbol.asyncIterator,e),this._baseDataProvider=new a.RESTDataProvider(t),this._mapKeyToItem=new Map}fetchFirst(t){const e=this._baseDataProvider.fetchFirst(t),a=this._getRootDataProvider();return new this.TreeAsyncIterable(new this.TreeAsyncIterator(a,e))}async fetchByKeys(t){const e=new Set,a=new Map;if(t.keys.forEach(t=>{const r=this._getItemFromKey(t);r?a.set(t,r):e.add(t)}),e.size){(await this._baseDataProvider.fetchByKeys({...t,keys:e})).results.forEach(t=>{this._setMapEntry(t.metadata.key,t),a.set(t.metadata.key,t)})}return{fetchParameters:t,results:a}}async fetchByOffset(t){const e=await this._baseDataProvider.fetchByOffset(t);return e.results.forEach(t=>{this._setMapEntry(t.metadata.key,t)}),e}async containsKeys(t){return this._baseDataProvider.containsKeys(t)}createOptimizedKeySet(t){return this._baseDataProvider.createOptimizedKeySet(t)}createOptimizedKeyMap(t){return this._baseDataProvider.createOptimizedKeyMap(t)}isEmpty(){return this._baseDataProvider.isEmpty()}getCapability(t){return this._baseDataProvider.getCapability(t)}getTotalSize(){return this._baseDataProvider.getTotalSize()}refresh(){this._flushMaps(),this.dispatchEvent(new r.DataProviderRefreshEvent)}mutate(t){this._addMetadataToMutationEventDetail(t),t.remove&&this._updateMapFromMutationDetail("remove",t.remove),t.add&&this._updateMapFromMutationDetail("add",t.add),t.update&&this._updateMapFromMutationDetail("update",t.update),this._baseDataProvider.mutate(t),this.dispatchEvent(new r.DataProviderMutationEvent(t))}getChildDataProvider(t){const e=this._getItemFromKey(t),a=this.options.getChildDataProvider(e);return a?s.DataProviderFeatureChecker.isTreeDataProvider(a)?a:new o(a):null}_getItemFromKey(t){return this._getRootDataProvider()._mapKeyToItem.get(t)}_setMapEntry(t,e){const a=this._getRootDataProvider(),r=a._mapKeyToItem.get(t);r?a._mapKeyToItem.set(t,{data:{...r.data,...e.data},metadata:{...r.metadata,...e.metadata}}):a._mapKeyToItem.set(t,e)}_deleteMapEntry(t){this._getRootDataProvider()._mapKeyToItem.delete(t)}_flushMaps(){this._getRootDataProvider()._mapKeyToItem.clear()}_getRootDataProvider(){return this.options.rootDataProvider?this.options.rootDataProvider:this}_addMetadataToMutationEventDetail(t){Object.keys(t).forEach(e=>{(!t[e].metadata||t[e].metadata&&!t[e].metadata.length)&&(t[e].metadata=[],t[e].keys.forEach(a=>{t[e].metadata.push({key:a})}))})}_updateMapFromMutationDetail(t,e){if("remove"===t)e.keys.forEach(t=>{this._deleteMapEntry(t)});else{const t=e.data,a=e.metadata;if(Array.isArray(t)&&Array.isArray(a))for(let e=0;e<t.length;e++)this._setMapEntry(a[e].key,{data:t[e],metadata:a[e]});else if(Array.isArray(a))for(let t=0;t<a.length;t++){const e=this._getItemFromKey(a[t].key);e&&this._setMapEntry(a[t].key,{data:e.data,metadata:a[t]})}}}}class o{constructor(t){this.dataprovider=t}fetchFirst(t){return this.dataprovider.fetchFirst(t)}async fetchByKeys(t){return this.dataprovider.fetchByKeys(t)}async fetchByOffset(t){return this.dataprovider.fetchByOffset(t)}async containsKeys(t){return this.dataprovider.containsKeys(t)}createOptimizedKeySet(t){return this.dataprovider.createOptimizedKeySet(t)}createOptimizedKeyMap(t){return this.dataprovider.createOptimizedKeyMap(t)}isEmpty(){const t=this.dataprovider.isEmpty();return"yes"===t?"yes":"no"===t?"no":"unknown"}getCapability(t){return this.dataprovider.getCapability(t)}getTotalSize(){return this.dataprovider.getTotalSize()}getChildDataProvider(t){return null}addEventListener(t,e){this.dataprovider.addEventListener(t,e)}removeEventListener(t,e){this.dataprovider.removeEventListener(t,e)}dispatchEvent(t){return this.dataprovider.dispatchEvent(t)}}e.EventTargetMixin.applyMixin(i),t.RESTTreeDataProvider=i,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojresttreedataprovider.js.map