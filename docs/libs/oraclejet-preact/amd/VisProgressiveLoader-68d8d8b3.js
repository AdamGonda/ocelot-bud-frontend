define(['exports', 'preact/jsx-runtime', './useLoadingIndicatorTimer-20a3bf5f', './LiveRegion-8142ed0d', './HiddenAccessible-037ef42d', './useId-c9578d26', './useTranslationBundle-516b1b83', './UNSAFE_VisProgressiveLoader/themes/ProgressiveLoaderStyles.css', './classNames-08d99695', './size-a75b3f13', './Skeleton-5839404b', './UNSAFE_VisProgressiveLoader/themes/VisSkeletonStyles.css'], (function(e,s,i,t,a,l,n,d,r,o,c,h){"use strict";function S({isLoading:e,fallback:c,children:h,role:S,tabIndex:b,width:y,height:g,"aria-label":u,"aria-labelledby":x,"aria-describedby":j}){const p=i.useLoadingIndicatorTimer(e),{vis_stateLoading:v,vis_stateLoaded:L}=n.useTranslationBundle("@oracle/oraclejet-preact"),f=l.useId();return e&&p?s.jsxs("div",{role:S,tabIndex:b,"aria-label":u,"aria-labelledby":x,"aria-describedby":j?[...new Set(j.split(/\s+/).concat(f))].join(" "):f,class:r.classNames([d.baseStyles,d.loadingContainerStyles]),style:{width:y&&o.sizeToCSS(y),height:g&&o.sizeToCSS(g)},children:[c,s.jsx(a.HiddenAccessible,{id:f,children:v()}),s.jsx(t.LiveRegion,{type:"polite",children:v()})]}):s.jsxs("div",{class:d.baseStyles,style:{width:y&&o.sizeToCSS(y),height:g&&o.sizeToCSS(g)},children:[h,s.jsx(t.LiveRegion,{type:"polite",children:u?`${u}, ${L()}`:L()})]})}function b({type:e,width:i,height:t}){return s.jsx("div",{class:h.baseStyles,style:{width:i&&o.sizeToCSS(i),height:t&&o.sizeToCSS(t)},children:s.jsx("div",{class:r.classNames([h.baseSkeletonContainerStyles,h.skeletonContainerStyles[e]]),children:s.jsx(c.Skeleton,{width:"100%",height:"100%"})})})}e.VisProgressiveLoader=function({type:e,role:i="application",children:t,...a}){const l=s.jsx(b,{type:e});return s.jsx(S,{role:i,tabIndex:0,fallback:l,...a,children:t})}}));
//# sourceMappingURL=VisProgressiveLoader-68d8d8b3.js.map
