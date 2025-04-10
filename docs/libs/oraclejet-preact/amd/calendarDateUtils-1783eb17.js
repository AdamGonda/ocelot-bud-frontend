define(['exports', './getFormatParse-c1655d39', './logger-0f873e29'], (function(e,t,a){"use strict";const r=9999,n=e=>{if(-1!==e.indexOf("-u-ca-"))throw new Error("Calendar not allowed in locale")},o=(e,t,a)=>{const r=new Date(e,t-1,a);return e<100&&r.setFullYear(e),r},l=e=>({year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}),s=(e,t)=>{if(e&&!Number.isInteger(e))throw new Error(`Internal error. Argument '${t}' is not an integer.`)},d=(e,t,a,r,o)=>{n(e);const l=new Date("2022-11-30");let s=new Intl.DateTimeFormat(e,{dateStyle:"short"}).formatToParts(l).filter((e=>"day"===t&&"day"===e.type||"month"===e.type||"year"===e.type||"literal"===e.type)).map((e=>{switch(e.type){case"month":return{...e,value:a};case"day":return{...e,value:r};case"year":return{...e,value:o};default:return{...e,value:e.value.trim()}}}));return s=I(s),s},y=(e,a)=>"*"===e?31:"*"===a?i(e):(u(a),t.getDaysInMonth(a,e-1)),m=e=>("*"!==e&&u(e),12),i=e=>{switch(e){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 2:return 29;default:return 30}},u=e=>{if(e<0||e>r)throw new Error("Invalid year value")},c=(e,t,a)=>{n(e);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric"}).format(o(t,a,1))},h=(e,t,a)=>{u(e);return[e.toString().padStart(4,"0"),t.toString().padStart(2,"0"),a.toString().padStart(2,"0")].join("-")},g=e=>{if(!t.isDateOnlyIsoString(e))return;const a=e.split("-");return{year:+a[0],month:+a[1],day:+a[2]}},D=(e,a,r,o,l)=>{n(e);const s=h(a,r,o),d={locale:e,dateStyle:l,dateStyleShortYear:"short"===l?"numeric":void 0},{format:y}=t.getFormatParse(d);return y(s)},f=(e,t,a)=>{if(!e.year||!e.month||"day"===t&&!e.day)return"";return a.map((({type:t,value:a})=>"year"===t?e.year:"month"===t?e.month:"day"===t?e.day:a.trim())).join("")},p=e=>{const t=[];let a="",r="";const n=()=>{""!==a&&(t.push(a),a="")},o=()=>{""!==r&&(t.push(r.trim()),r="")};for(let t=0;t<e.length;t++){const l=e[t];"m"===l.toLowerCase()||"d"===l.toLowerCase()||"y"===l.toLowerCase()?(o(),a+=l):(n(),r+=l)}return n(),o(),t},w=e=>e.map((e=>"d"===e.toLowerCase()[0]?{type:"day",value:e}:"m"===e.toLowerCase()[0]?{type:"month",value:e}:"y"===e.toLowerCase()[0]?{type:"year",value:e}:{type:"literal",value:e})),I=e=>{const t=e.findIndex(((e,t,a)=>"literal"===e.type&&t>0&&"literal"===a[t-1].type));return-1!==t&&(e=e.slice(0,t).concat(e.slice(t+1))),"literal"===e[e.length-1].type&&(e=e.slice(0,-1)),"literal"===e[0].type&&(e=e.slice(1)),e},C=(e,t)=>e.year!==t.year?e.year-t.year:e.month!==t.month?e.month-t.month:e.day-t.day,F=(e,t)=>C(e,t)<0,v=(e,t)=>C(e,t)>0;e.MAX_ISO_YEAR=r,e.MIN_ISO_DAY=1,e.MIN_ISO_MONTH=1,e.MIN_ISO_YEAR=0,e.addToCalendarDate=(e,{years:t,months:a,days:r})=>{s(t,"years"),s(a,"months"),s(r,"days");const n=new Date(0,1,2).getFullYear(),o=e.year+(t||0);let l;if(o<100){const t=o<1?1:o;l=new Date(t,e.month-1+(a||0),1);const r=l.getFullYear()-(n+t);l.setFullYear(t+r)}else l=new Date(o,e.month-1+(a||0),1);const d=l.getFullYear();if(d<1)return e;const m=l.getMonth(),i=Math.min(e.day,y(m+1,d)),u=new Date(d,m,i+(r||0));if(d<100){const e=u.getFullYear()-(n+d);u.setFullYear(d+e)}return u.getFullYear()<1?e:{year:u.getFullYear(),month:u.getMonth()+1,day:u.getDate()}},e.addToMonth=(e,t)=>{const a=e-1+t;return a>=12?a%12+1:a<0?12+a%12+1:a+1},e.addToYear=(e,t)=>{const a=e+t;return a<0?0:a>r?r:a},e.checkIsValidIsoYear=u,e.checkNoCalendarExtension=n,e.compareDates=C,e.constrainCalendarDate=(e,t,a)=>{let r={...e};return t&&F(r,t)&&(r={...t}),a&&v(r,a)&&(r={...a}),r},e.formatCalendarDateAsString=(e,t,a)=>t.year&&t.month&&t.day?D(e,t.year,t.month,t.day,a):"",e.formatCalendarMonthRequiredAsExample=(e,t,a)=>{const r=a??d(e,"month","mm","dd","yyyy");return void 0===t?"":f(t,"month",r)},e.formatFullCalendarDate=(e,t,a)=>t.year&&t.month&&("day"!==a||t.day)?(n(e),"day"===a?D(e,t.year,t.month,t.day,"full"):c(e,t.year,t.month)):"",e.formatIsoDateStrAsExample=(e,t,a,r)=>{const n=g(t),o=a??d(e,r??"day","mm","dd","yyyy");return void 0===n?"":f(n,r??"day",o)},e.formatShortCalendarDate=f,e.getCalendarDateFromIso=g,e.getCalendarDateToday=e=>l(e?new Date(new Intl.DateTimeFormat("en",{timeZone:e}).format(new Date)):new Date),e.getClosestDecade=e=>10*Math.floor(e/10),e.getDatePlaceholderMasks=d,e.getDatePlaceholdersFromPattern=e=>{const t=p(e);return w(t)},e.getDaysInMonth=y,e.getFormattedYearMonthDay=D,e.getIsoDateStr=h,e.getLongFormattedYearMonth=c,e.getMonthYearPlaceholdersFromDatePlaceholders=e=>{const t=e.filter((e=>"day"!==e.type));return I(t)},e.getMonthsInYear=m,e.getNumericFormattedYear=(e,t,a)=>{n(e);return new Intl.DateTimeFormat(e,{year:"numeric"}).format(o(t,a,1))},e.isCalendarDateAfter=v,e.isCalendarDateBefore=F,e.isCompleteCalendarDate=e=>{const{year:t,month:a,day:r}=e;return void 0!==t&&void 0!==a&&void 0!==r},e.isCompleteCalendarMonth=e=>{const{year:t,month:a}=e;return void 0!==t&&void 0!==a},e.isDateOutOfRange=(e,t,a)=>t&&F(e,t)||a&&v(e,a),e.isValidCalendarMonthRequired=e=>{if(null==e)return!0;const{year:t,month:a}=e,n=(e,t)=>"number"==typeof e&&Number.isInteger(e)&&e>0&&(void 0===t||e<=t);return!(!n(t,r)||!n(a,m(t)))},e.removeExcessiveLiteralsFromPlaceholders=I,e.toIsoCalendarDate=l,e.toJSDate=o}));
//# sourceMappingURL=calendarDateUtils-1783eb17.js.map
