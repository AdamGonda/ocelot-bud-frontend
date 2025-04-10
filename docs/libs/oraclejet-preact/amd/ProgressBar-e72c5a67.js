define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './useUser-3ef25571', './useTranslationBundle-d07d4b20', './useComponentTheme-5aa41a8f', './UNSAFE_ProgressBar/themes/redwood/ProgressBarTheme', './LinearMeter-d1e744c1'], (function(e,a,r,s,l,o,n,t){"use strict";const i=({id:e,width:i,edge:d="none",...c})=>{const{classes:u,styles:{valueStyle:m,indeterminate:g,animationStyleLTR:h,animationStyleRTL:v,highContrastValueStyle:b,trackBorderEdgeNone:x,trackBorderEdgeTop:B}}=o.useComponentTheme(n.ProgressBarRedwoodTheme,{edge:"none"===d?d:void 0}),{direction:T,forcedColors:p}=s.useUser(),y=r.classNames([m,g,"rtl"===T?v:h,"active"===p?b:""]),j=l.useTranslationBundle("@oracle/oraclejet-preact"),N={"aria-valuetext":c["aria-valuetext"]||j.progressIndeterminate(),"aria-label":c["aria-label"],"aria-labelledby":c["aria-labelledby"],role:"progressbar"},f="active"===p?void 0:"none"===d?x:B;return a.jsx(t.BarTrack,{id:e,ariaProps:N,class:r.classNames([u,f]),length:i,children:a.jsx(t.BarValue,{class:y})})},d=({value:e=0,max:l=100,id:i,width:d,edge:c="none",...u})=>{const{forcedColors:m}=s.useUser(),{classes:g,styles:{valueStyle:h,highContrastValueStyle:v,trackBorderEdgeNone:b,trackBorderEdgeTop:x}}=o.useComponentTheme(n.ProgressBarRedwoodTheme,{edge:"none"===c?c:void 0}),B=r.classNames([h,"active"===m?v:""]),T=100*Math.min(Math.max(0,e/l),1)+"%",p={};return p["aria-valuemin"]=null!=e?0:void 0,p["aria-valuemax"]=null!=e?l:void 0,p["aria-valuenow"]=null!=e?e:void 0,p.role="progressbar",p["aria-label"]=u["aria-label"],p["aria-labelledby"]=u["aria-labelledby"],a.jsx(t.BarTrack,{ariaProps:p,id:i,length:d,class:r.classNames([g,"none"===c?b:x]),children:a.jsx(t.BarValue,{class:B,length:T})})};e.ProgressBar=function({value:e,max:r,...s}){return"indeterminate"===e?a.jsx(i,{...s}):a.jsx(d,{value:e,max:r,...s})}}));
//# sourceMappingURL=ProgressBar-e72c5a67.js.map
