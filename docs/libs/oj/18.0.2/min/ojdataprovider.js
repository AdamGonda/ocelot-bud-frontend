/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","ojs/ojeventtarget"],function(t,e,r){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
oj.DataProvider=function(){},function(t){let e;!function(t){t.$co="$co",t.$eq="$eq",t.$ew="$ew",t.$pr="$pr",t.$gt="$gt",t.$ge="$ge",t.$lt="$lt",t.$le="$le",t.$ne="$ne",t.$regex="$regex",t.$sw="$sw"}(e=t.AttributeOperator||(t.AttributeOperator={}))}(t.AttributeFilterOperator||(t.AttributeFilterOperator={})),e._registerLegacyNamespaceProp("AttributeFilterOperator",t.AttributeFilterOperator),function(t){let e;!function(t){t.$and="$and",t.$or="$or"}(e=t.CompoundOperator||(t.CompoundOperator={}))}(t.CompoundFilterOperator||(t.CompoundFilterOperator={})),e._registerLegacyNamespaceProp("CompoundFilterOperator",t.CompoundFilterOperator);class i{constructor(){this._handleMutationAdd=function(t){const r=t[i._BEFOREKEYS],s=t[i._KEYS],n=[];s.forEach(t=>{n.push(t)});const o=t[i._DATA]?t[i._DATA]:[],a=this._deriveMetadataFromKey(t[i._METADATA],s),c=t[i._INDEXES];if(n&&n.length>0)if(c)n.forEach((t,e)=>{this._items.splice(c[e],0,new this.Item(a[e],o[e]))});else if(r){const s=Object.assign([],r),c=Object.assign(new Set,t[i._KEYS]),l=Object.assign([],o),f=Object.assign([],a),u=[];let h,p,g;for(const t of r){if(h=t,g=!0,null!=h){for(const t of n)if(e.Object.compareValues(t,h)){g=!1;break}if(g)for(const t of this._items)if(e.Object.compareValues(t?.metadata?.key,h)){g=!1;break}}else g=!1;g&&u.push(h)}let m=r.length;for(;m>0;){for(const t of r)if(p=t,u.indexOf(p)>=0){u.push(p);break}m--}for(let t=s.length-1;t>=0;t--)u.indexOf(s[t])>=0&&(delete s[t],c.delete(s[t]),delete l[t],delete f[t]);s.forEach((t,r)=>{if(null===t)this._items.push(new this.Item(a[r],o[r]));else for(let i=0;i<this._items.length;i++)if(e.Object.compareValues(this._items[i]?.metadata?.key,t)){this._items.splice(i,0,new this.Item(a[r],o[r]));break}})}else if(this._fetchParams&&null!=this._fetchParams.sortCriteria){const t=this._fetchParams.sortCriteria;if(t){const e=this._getSortComparator(t);let r,i,s;const n=[];o.forEach((t,c)=>{for(r=0;r<this._items.length;r++)if(i=this._items[r].data,s=e(t,i),s<0){this._items.splice(r,0,new this.Item(a[c],o[c])),n.push(c);break}}),o.forEach((t,e)=>{n.indexOf(e)<0&&this._items.push(new this.Item(a[e],o[e]))})}}else o.forEach((t,e)=>{this._items.push(new this.Item(a[e],o[e]))})},this._handleMutationRemove=function(t){const r=t[i._KEYS];if(r&&r.size>0){let t;r.forEach(r=>{for(t=this._items.length-1;t>=0;t--)if(e.Object.compareValues(this._items[t].metadata.key,r)){this._items.splice(t,1);break}})}},this._handleMutationUpdate=function(t){const r=t[i._DATA];if(r&&r.length>0){const s=t[i._KEYS],n=this._deriveMetadataFromKey(t[i._METADATA],s);let o,a=0;s.forEach(t=>{for(o=this._items.length-1;o>=0;o--)if(e.Object.compareValues(this._items[o].metadata.key,t)){this._items.splice(o,1,new this.Item(n[a],r[a]));break}a++})}},this.Item=class{constructor(t,e){this.metadata=t,this.data=e,this[i._METADATA]=t,this[i._DATA]=e}},this.FetchByKeysResults=class{constructor(t,e){this.fetchParameters=t,this.results=e,this[i._FETCHPARAMETERS]=t,this[i._RESULTS]=e}},this.FetchByOffsetResults=class{constructor(t,e,r,s){this.fetchParameters=t,this.results=e,this.done=r,this.totalFilteredRowCount=s,this[i._FETCHPARAMETERS]=t,this[i._RESULTS]=e,this[i._DONE]=r,"enabled"===t?.includeFilteredRowCount&&(this.totalFilteredRowCount=s)}},this._items=[]}addListResult(t){const e=[];t.value.data.forEach((r,i)=>{e.push(new this.Item(t.value.metadata[i],r))}),this._items=this._items.concat(e),this._done=t.done}getDataList(t,e){this._fetchParams=t;let r=25;null!=t.size&&(r=-1===t.size?this.getSize():t.size);const i=this._items.slice(e,e+r),s=[],n=[];return i.forEach(t=>{s.push(t.data),n.push(t.metadata)}),{fetchParameters:t,data:s,metadata:n}}getDataByKeys(t){const e=new Map;return t&&t.keys&&t.keys.forEach(t=>{for(const r of this._items)if(r.metadata.key===t){e.set(t,r);break}}),new this.FetchByKeysResults(t,e)}getDataByOffset(t){let e=[];const r=t.offset+t.size>=this.getSize()&&this.isDone();return t&&(e=this._items.slice(t.offset,t.offset+t.size)),new this.FetchByOffsetResults(t,e,r,this.getSize())}processMutations(t){null!=t.remove&&this._handleMutationRemove(t.remove),null!=t.add&&this._handleMutationAdd(t.add),null!=t.update&&this._handleMutationUpdate(t.update)}reset(){this._items=[],this._done=!1}getSize(){return this._items.length}isDone(){return this._done}_deriveMetadataFromKey(t,e){return t&&t.length==e.size||(t=[],e.forEach(e=>{t.push({key:e})})),t}_getSortComparator(t){return(e,r)=>{let s,n,o,a;for(const c of t){s=c[i._DIRECTION],n=c[i._ATTRIBUTE],o=this._getVal(e,n),a=this._getVal(r,n);let t=0;const l="string"==typeof o?o:String(o).toString(),f="string"==typeof a?a:String(a).toString();if(t="ascending"===s?l.localeCompare(f,void 0,{numeric:!0,sensitivity:"base"}):f.localeCompare(l,void 0,{numeric:!0,sensitivity:"base"}),0!==t)return t}return 0}}_getVal(t,e){if("string"==typeof e){const r=e.indexOf(".");if(r>0){const i=e.substring(0,r),s=e.substring(r+1),n=t[i];if(n)return this._getVal(n,s)}}return"function"==typeof t[e]?t[e]():t[e]}}i._DATA="data",i._METADATA="metadata",i._ITEMS="items",i._BEFOREKEYS="addBeforeKeys",i._KEYS="keys",i._INDEXES="indexes",i._FROM="from",i._OFFSET="offset",i._REFRESH="refresh",i._MUTATE="mutate",i._SIZE="size",i._FETCHPARAMETERS="fetchParameters",i._SORTCRITERIA="sortCriteria",i._DIRECTION="direction",i._ATTRIBUTE="attribute",i._VALUE="value",i._DONE="done",i._RESULTS="results",i._CONTAINSPARAMETERS="containsParameters",i._DEFAULT_SIZE=25,i._CONTAINSKEYS="containsKeys",i._FETCHBYKEYS="fetchByKeys",i._FETCHBYOFFSET="fetchByOffset",i._FETCHFIRST="fetchFirst",i._FETCHATTRIBUTES="attributes",e._registerLegacyNamespaceProp("DataCache",i);class s extends r.GenericEvent{constructor(t){const e={};e[s._DETAIL]=t,super("mutate",e)}}s._DETAIL="detail",e._registerLegacyNamespaceProp("DataProviderMutationEvent",s);class n extends r.GenericEvent{constructor(t){const e={};e.detail=t,super("refresh",e)}}e._registerLegacyNamespaceProp("DataProviderRefreshEvent",n);class o{fetchByKeys(t){let e=0;const r=this.getIterationLimit?this.getIterationLimit():-1,i={size:25},s=new Map,n=this.fetchFirst(i)[Symbol.asyncIterator]();return function t(i,s,n){return s.next().then(function(o){const a=o.value,c=a.data,l=a.metadata,f=l.map(function(t){return t.key});let u=!0;return i.keys.forEach(function(t){n.has(t)||f.map(function(e,r){e===t&&n.set(e,{metadata:l[r],data:c[r]})}),n.has(t)||(u=!1)}),e+=c.length,u||o.done||-1!=r&&e>=r?n:t(i,s,n)})}(t,n,s).then(function(e){const r=new Map;return e.forEach(function(t,e){const i=[t];r.set(e,i[0])}),{fetchParameters:t,results:r}})}containsKeys(t){return this.fetchByKeys(t).then(function(e){const r=new Set;return t.keys.forEach(function(t){null!=e.results.get(t)&&r.add(t)}),Promise.resolve({containsParameters:t,results:r})})}getCapability(t){if("fetchByKeys"===t)return{implementation:"iteration"};let e=null;if(!0!==this._ojSkipLastCapability){this._ojSkipLastCapability=!0;let r=1;for(;this["_ojLastGetCapability"+r];)++r;for(--r;r>0&&(e=this["_ojLastGetCapability"+r](t),!e);r--);delete this._ojSkipLastCapability}return e}static applyMixin(t){const e=t.prototype.getCapability;if([o].forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(r=>{"constructor"!==r&&(t.prototype[r]=e.prototype[r])})}),e){let r=1;for(;t.prototype["_ojLastGetCapability"+r];)++r;t.prototype["_ojLastGetCapability"+r]=e}}}e._registerLegacyNamespaceProp("FetchByKeysMixin",o);class a{fetchByOffset(t){const e=t&&t.size>0?t.size:25,r=t?t.sortCriteria:null,i=t&&t.offset>0?t.offset:0;let s=0;const n=this.getIterationLimit?this.getIterationLimit():-1;let o=!1;const a={};a.size=e,a.sortCriteria=r;const c=new Array,l=this.fetchFirst(a)[Symbol.asyncIterator]();return function t(r,a,c){return a.next().then(function(l){o=l.done;const f=l.value,u=f.data,h=f.metadata,p=u.length;if(i<s+p){for(let t=i<=s?0:i-s;t<p&&c.length!==e;t++)c.push({metadata:h[t],data:u[t]})}return s+=p,c.length<e&&!o?-1!==n&&s>=n?c:t(r,a,c):c})}(t,l,c).then(function(e){return{fetchParameters:t,results:e,done:o}})}getCapability(t){if("fetchByOffset"===t)return{implementation:"iteration"};let e=null;if(!0!==this._ojSkipLastCapability){this._ojSkipLastCapability=!0;let r=1;for(;this["_ojLastGetCapability"+r];)++r;for(--r;r>0&&(e=this["_ojLastGetCapability"+r](t),!e);r--);delete this._ojSkipLastCapability}return e}static applyMixin(t){const e=t.prototype.getCapability;if([a].forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(r=>{"constructor"!==r&&(t.prototype[r]=e.prototype[r])})}),e){let r=1;for(;t.prototype["_ojLastGetCapability"+r];)++r;t.prototype["_ojLastGetCapability"+r]=e}}}e._registerLegacyNamespaceProp("FetchByOffsetMixin",a),function(t){function e(t,i=undefined){let s;const c=[];for(const l in t)if("collationOptions"!==l&&"criterion"!==l&&t.hasOwnProperty(l)){const f=t[l];if(0===l.indexOf("$"))if(n(l)){if(!(f instanceof Array))throw new Error("not a valid expression: "+t);s={operator:l,array:[]};for(const r of f){const i=e(r,t.collationOptions);s.array.push(i)}}else{if(o(l))throw new Error("not a valid expression: "+t);if(a(l)){const r=e(t.criterion,t.criterion.collationOptions);c.push({left:f,right:r,operator:l,collationOptions:i})}}else if("object"!=typeof f)c.push({left:l,right:f,operator:"$eq",collationOptions:i});else{const t={left:l,collationOptions:i};r(t,f),c.push(t)}}return c.length>1?s={operator:"$and",array:c}:1===c.length&&(s=c[0]),s}function r(t,e){let r=!1;for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];if(r||!o(i))throw new Error("parsing error "+e);t.operator=i,t.right=s,r=!0}}function i(t,e){const r=t.operator,{collationOptions:c}=t;if(n(r)){if(!t.left&&t.array instanceof Array){let s;const n=t.array;for(const t of n){const n=i(t,e);if("$or"===r&&!0===n)return!0;if("$and"===r&&!1===n)return!1;s=n}return s}throw new Error("invalid expression tree!"+t)}if(o(r)){const i=t.right;let n;if("*"!=t.left)return n=f(t.left,e),s(r,i,n,c);{const t=Object.keys(e);for(const o of t)if(n=f(o,e),s(r,i,n,c))return!0;return!1}}if(a(r)){let r=f(t.left,e);if(void 0===r||!(r instanceof Array)||0===r.length)return!1;for(const e of r){if(i(t.right,e))return!0}return!1}throw new Error("not a valid expression!"+t)}function s(t,e,r,i){if(i&&["base","accent","case","variant"].indexOf(i.sensitivity)<0)throw new Error("not a valid sensitivity! "+i.sensitivity);let s;if(i&&("string"==typeof e||e instanceof String)&&("string"==typeof r||r instanceof String)&&["base","accent","case","variant"].indexOf(i.sensitivity)>=0&&(s=new Intl.Collator(void 0,i)),"$lt"===t){const t=l(r,e);return r=t[0],e=t[1],s?s.compare(r,e)<0:r<e}if("$gt"===t){const t=l(r,e);return r=t[0],e=t[1],s?s.compare(r,e)>0:r>e}if("$lte"===t){const t=l(r,e);return r=t[0],e=t[1],s?s.compare(r,e)<=0:r<=e}if("$gte"===t){const t=l(r,e);return r=t[0],e=t[1],s?s.compare(r,e)>=0:r>=e}if("$eq"===t)return s?0===s.compare(r,e):r===e;if("$ne"===t)return s?0!==s.compare(r,e):r!==e;if("$regex"===t){if(null!=r){if("string"!=typeof r&&!(r instanceof String))if(r instanceof Object){if("[object Object]"==(r=r.toString()))return!1}else r=new String(r);const t=i?.sensitivity;let s;"base"!==t&&"case"!==t||(r=r.normalize("NFD").replace(/[\u0300-\u036f]/g,""),e=e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")),"base"!==t&&"accent"!==t||(s="i");return null!==r.match(new RegExp(e,s))}return!1}if("$exists"===t)return e?null!=r:null==r;throw new Error("not a valid operator! "+t)}function n(t){return"$and"===t||"$or"===t}function o(t){return"$lt"===t||"$gt"===t||"$lte"===t||"$gte"===t||"$eq"===t||"$ne"===t||"$regex"===t||"$exists"===t}function a(t){return"$nestedAttr"===t}function c(t){return null!=t&&(t instanceof String||"string"==typeof t)}function l(t,e){return c(t)&&null==e?e="":c(e)&&null==t&&(t=""),[t,e]}function f(t,e){const r=t.split(".");let i=e;for(const t of r)i=i[t];return i}t.satisfy=function(t,r){if(t){return i(e(t,t.collationOptions),r)}return!0},t.validateFilterCapabilities=function t(e,r){let i;const s=e?.textFilterMatching?.matchBy;if(r){if(r.text&&(i=r.matchBy,i&&(!s||s.indexOf(i)<0)))throw new Error("This data provider does not support TextFilter with matchBy value "+i);if(r.criteria?.length>0)for(let i=0;i<r.criteria.length;i++){t(e,r.criteria[i])}r.criterion&&t(e,r.criterion)}}}(t.FilterUtils||(t.FilterUtils={}));class c{constructor(t){t=t||{},this._textFilterAttributes=t.filterOptions?t.filterOptions.textFilterAttributes:null;const e=t.filterDef;e&&(e.op?(this.op=e.op,void 0!==e.value?(this.value=e.value,e.attribute&&(this.attribute=e.attribute)):e.criteria?this.criteria=e.criteria:e.criterion&&(this.criterion=e.criterion,e.attribute&&(this.attribute=e.attribute)),e.collationOptions&&(this.collationOptions=e.collationOptions)):e.text&&(this.text=e.text,this.matchBy=e.matchBy))}filter(e,r,i){return t.FilterUtils.satisfy(c._transformFilter(this),e)}static _transformFilter(t){let e;if(t){let r,i=t.op;const s=t.collationOptions;if("$exists"===i&&t.attribute&&t.criterion)return e={},e.$nestedAttr=t.attribute,e.criterion=c._transformFilter(l.getFilter({filterDef:t.criterion})),e;if(t.text?i="$regex":"$le"===i?i="$lte":"$ge"===i?i="$gte":"$pr"===i&&(i="$exists"),"$and"!==i&&"$or"!==i){r=t.text?"phrase"===t.matchBy?new RegExp(""+("\\b"+t.text.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&").replace(/('|")/g,"").replace(/(\s|\t)/g,"(.*)((\\s|\\t|\\r|\\n)*)")),"i"):"startsWith"===t.matchBy?new RegExp(`^${t.text.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}`,"i"):new RegExp(t.text.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),"i"):t.value,e={};const s=t.attribute;if(s){const t={};"$sw"!==i&&"$ew"!==i&&"$co"!==i||(r=c._fixStringExpr(i,r),i="$regex"),t[i]=r,e[s]=t}else if(t.text){const s={};if(s[i]=r,t._textFilterAttributes&&t._textFilterAttributes.length>0){const r=[];t._textFilterAttributes.forEach(function(t){const e={};e[t]=s,r.push(e)}),e.$or=r}else e["*"]=s}else{const t=[];if(null==r)throw new Error("attribute cannot be empty");c._transformObjectExpr(r,i,null,t),e.$and=t}}else{const r=[];t.criteria.forEach(function(e){e&&e.text&&t._textFilterAttributes&&(e._textFilterAttributes=t._textFilterAttributes),r.push(c._transformFilter(e))}),e={},e[i]=r}e.collationOptions=s}return e}static _transformObjectExpr(t,e,r,i){if(Object.keys(t).length>0)Object.keys(t).forEach(function(s){let n=t[s];const o=r?r+"."+s:s;if(n instanceof Object)c._transformObjectExpr(n,e,o,i);else{const t={};"$sw"!==e&&"$ew"!==e&&"$co"!==e||(n=c._fixStringExpr(e,n),e="$regex"),t[e]=n;const r={};r[o]=t,i.push(r)}});else{const s={};s[e]=t;const n={};n[r]=s,i.push(n)}}static _fixStringExpr(t,e){return("string"==typeof e||e instanceof String)&&("$sw"===t?e="^"+e:"$ew"===t&&(e+="$")),e}}class l{static getFilter(t){return new c(t)}}e._registerLegacyNamespaceProp("FilterFactory",l),function(t){function e(t){const e=(t,r)=>{if(null==t)return t;if("string"==typeof r){const i=r.indexOf(".");if(i>0){const s=r.substring(0,i),n=r.substring(i+1),o=t[s];if(o)return e(o,n)}}return"function"==typeof t[r]?t[r]():t[r]};return(i,s)=>{let n,o,a,c;n=t.direction,o=t.attribute,a=e(i,o),c=e(s,o);let l=0;const f=r();return l="ascending"===n?f(a,c):f(c,a),0!==l?l:0}}function r(){return(t,e)=>{if(null==t)return 1;if(null==e)return-1;let r=0;const i="string"==typeof t?t:String(t).toString(),s="string"==typeof e?e:String(e).toString();return r=i.localeCompare(s,void 0,{numeric:!0,sensitivity:"base"}),0!==r?r:0}}t.getNaturalSortCriteriaComparator=function(t){return(r,i)=>{for(const s of t){const t=e(s)(r,i);if(0!==t)return t}return 0}},t.getNaturalSortCriterionComparator=e,t.getNaturalSortComparator=r}(t.SortUtils||(t.SortUtils={}));const f=t=>t.reason instanceof DOMException?t.reason:new DOMException(t.reason,"AbortError");t.DataCache=i,t.DataProviderMutationEvent=s,t.DataProviderRefreshEvent=n,t.FetchByKeysMixin=o,t.FetchByOffsetMixin=a,t.FilterFactory=l,t.wrapWithAbortHandling=(t,e,r)=>t?.aborted?Promise.reject(f(t)):new Promise((i,s)=>{t?.addEventListener("abort",()=>s(f(t))),r?e(i,s).catch(s):e(i,s)}),Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojdataprovider.js.map