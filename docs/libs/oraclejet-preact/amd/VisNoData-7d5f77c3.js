define(['exports', 'preact/jsx-runtime', './UNSAFE_VisStatusMessage/themes/VisStatusMessageStyles.css', './Flex-56ecdf4c', './classNames-08d99695', './useTranslationBundle-516b1b83', './layoutUtils-3c2d340e'], (function(e,a,l,i,s,t,r){"use strict";function d({children:e,...t}){const r=s.classNames([t.isSelectable?"":l.userSelectStyles,l.baseStyles]);return a.jsx("div",{class:r,tabIndex:0,role:"application",id:t.id,"aria-label":t["aria-label"],"aria-describedby":t["aria-describedby"],"aria-labelledby":t["aria-labelledby"],children:a.jsx(i.Flex,{width:"100%",height:"100%",justify:"center",align:"center",children:e})})}const n=e=>{const a=e.ariaLabel?r.getRandomId():void 0;return{ariaLabelledBy:`${e.ariaLabelledby??""} ${a??""} ${e.textId}`.trim(),id:a}};e.VisNoData=function(e){const l=t.useTranslationBundle("@oracle/oraclejet-preact").vis_noData(),i=r.getRandomId(),{ariaLabelledBy:s,id:b}=n({ariaLabel:e["aria-label"],ariaLabelledby:e["aria-labelledby"],textId:i});return a.jsx(d,{id:b,"aria-label":e["aria-label"],"aria-describedby":e["aria-describedby"],"aria-labelledby":s,children:a.jsx("span",{id:i,children:l})})},e.VisStatusMessage=d}));
//# sourceMappingURL=VisNoData-7d5f77c3.js.map
