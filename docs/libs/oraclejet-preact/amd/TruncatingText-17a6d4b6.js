define(['exports', 'preact/jsx-runtime', './useDetectTruncation-fcf6c1aa', './useTooltip-6a5fedfa', 'preact/hooks', './logger-0f873e29', './LayerHost-e95c5f30', 'preact/compat', './mergeInterpolations-9ede4cf7', './classNames-08d99695', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-3b34c2bc', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './UNSAFE_Text/themes/TextStyles.css'], (function(e,t,s,o,a,n,i,l,c,r,p,d,u,T,h,b,m){"use strict";const f=[({lineClamp:e})=>e?{class:m.styles.lineClamp,webkitLineClamp:e}:{}],x=c.mergeInterpolations(f);e.TruncatingText=function({children:e,hyphens:a,size:n,truncation:i,variant:l="inherit",weight:c,overflowWrap:p="anywhere",...d}){const u=m.multiVariantStyles({hyphens:a,size:n,truncation:i,variant:l,weight:c,overflowWrap:p}),{class:T,...h}=x(d),f=r.classNames([u,T]),{isTabbable:y}=b.useTabbableMode(),{detectTruncationProps:g,isTextTruncated:w}=s.useDetectTruncation(),{tooltipContent:C,tooltipProps:S}=o.useTooltip({text:e,isDisabled:!w});return t.jsxs(t.Fragment,{children:[t.jsx("span",{...g,...S,tabIndex:w&&y?0:-1,class:f,style:h,id:d.id,children:e}),C]})}}));
//# sourceMappingURL=TruncatingText-17a6d4b6.js.map
