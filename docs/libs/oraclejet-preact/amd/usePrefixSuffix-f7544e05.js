define(['exports', './stringUtils-0ae982c2', './useUser-3ef25571'], (function(e,i,s){"use strict";e.usePrefixSuffix=({baseId:e,hasEndContent:t,hasInsideLabel:r,hasStartContent:a,hasValue:d,isDisabled:n,isFocused:f,labelId:o,prefix:u,suffix:l,value:x})=>{const{direction:$}=s.useUser(),v=`${e}-prefix`,c=`${e}-suffix`,h=void 0!==u&&""!==u,b=void 0!==l&&""!==l,p=h&&!n&&(d||f),I=b&&!n&&(d||f),P=h||b?function(e,i,s,t,r){if(!i)return r;const a="ltr"===e,d=void 0===s?"":a?`${s} `:` ${s}`,n=void 0===t?"":a?` ${t}`:`${t} `,f=`${d}${r}${n}`,o=`${n}${r}${d}`;return a?f:o}($,d,u,l,x):x;return{shouldRenderPrefix:p,shouldRenderSuffix:I,prefixProps:{id:v,hasEndContent:t,hasInsideLabel:r,hasStartContent:a,isDisabled:n,isFocused:f,text:u??"",variant:"prefix"},suffixProps:{id:c,hasInsideLabel:r,isDisabled:n,isFocused:f,text:l??"",variant:"suffix"},valuePrefixSuffix:P,ariaLabelledBy:h||b?i.merge([o,h?v:void 0,b?c:void 0]):void 0}}}));
//# sourceMappingURL=usePrefixSuffix-f7544e05.js.map
