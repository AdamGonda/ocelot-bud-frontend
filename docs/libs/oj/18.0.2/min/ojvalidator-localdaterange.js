/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojtranslation","@oracle/oraclejet-preact/UNSAFE_IntlDateTime"],function(e,a,t){"use strict";class r{constructor(e){if(!t.DateTimeUtils.isDateOnlyIsoString(e.min)||!t.DateTimeUtils.isDateOnlyIsoString(e.max))throw new Error("If min/max are defined, they must be a date-only iso string.");if(e.min&&e.max&&r._compareDateOnlyIsoString(e.min,e.max)>0)throw new Error("min must be less than max");this.min=e.min,this.max=e.max,this.rangeOverflowMessageDetail=e.rangeOverflowMessageDetail,this.rangeUnderflowMessageDetail=e.rangeUnderflowMessageDetail,this.formatObj=e.formatObj}validate(e){const t=this.rangeOverflowMessageDetail,n=this.rangeUnderflowMessageDetail,i=this.min,l=this.max;let o="",s="";const m=a;let g,f,d=null;if(null===e)return;const c=()=>{if(i&&(g=this.formatObj.format(i)),l&&(f=this.formatObj.format(l)),i&&l){if(r._compareDateOnlyIsoString(e,i)>=0&&r._compareDateOnlyIsoString(e,l)<=0||r._compareDateOnlyIsoString(i,l)>0)return e}else if(i){if(r._compareDateOnlyIsoString(e,i)>=0)return e}else if(!l||r._compareDateOnlyIsoString(e,l)<=0)return e;throw new Error};try{c()}catch(a){var h=(a=>(null!==l&&r._compareDateOnlyIsoString(e,l)>0?(d={value:a,max:f},o=m.getTranslatedString("oj-validator.range.date.messageSummary.rangeOverflow"),s=t?m.applyParameters(t,d):m.getTranslatedString("oj-validator.range.date.messageDetail.rangeOverflow",d)):null!==i&&r._compareDateOnlyIsoString(e,i)<0&&(d={value:a,min:g},o=m.getTranslatedString("oj-validator.range.date.messageSummary.rangeUnderflow"),s=n?m.applyParameters(n,d):m.getTranslatedString("oj-validator.range.date.messageDetail.rangeUnderflow",d)),[o,s]))(e?this.formatObj.format(e):e);throw new Error(h[1])}}getHint(){let e;const t=this.min,r=this.max,n=t&&this.formatObj.format(t),i=r&&this.formatObj.format(r);let l=null;const o=a;return null!==t&&null!==r?(l={min:n,max:i},e=o.getTranslatedString("oj-validator.range.date.hint.inRange",l)):null!==t?(l={min:n},e=o.getTranslatedString("oj-validator.range.date.hint.min",l)):null!==r&&(l={max:i},e=o.getTranslatedString("oj-validator.range.date.hint.max",l)),e}static _compareDateOnlyIsoString(e,a){return new Date(e)-new Date(a)}}e.LocalDateRangeValidator=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojvalidator-localdaterange.js.map