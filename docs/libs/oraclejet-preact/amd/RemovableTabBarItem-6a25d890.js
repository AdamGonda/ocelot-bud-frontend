define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useHover-7964884c', './Close-5f7dff3d', './Flex-56ecdf4c', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './useTabBarContext-15a23bb6', './TabBarItem-16383a92', './useTranslationBundle-516b1b83', './EmbeddedIconButton-b2a0520e'], (function(e,t,a,o,r,n,s,l,i,c,b,d){"use strict";e.RemovableTabBarItem=function({itemKey:e,label:u,icon:m,badge:x,metadata:v,severity:f,"aria-controls":B}){const{selection:j,currentKey:p,layout:I,onRemove:T}=i.useTabBarContext(),h=j===e,y=p===e,g=a.useCallback((()=>{T?.({value:e})}),[T,e]),{hoverProps:C,isHover:H}=o.useHover({}),K=s.mergeInterpolations([...Object.values(l.flexitemInterpolations)])({flex:"stretch"===I?"1 0 auto":"0 0 auto"}),k=b.useTranslationBundle("@oracle/oraclejet-preact");return t.jsx("div",{...C,style:K,children:t.jsx(n.Flex,{children:t.jsx(c.BaseTabBarItem,{"aria-controls":B,itemKey:e,label:u,icon:m,badge:x,metadata:v,severity:f,removeIcon:t.jsx("span",{"data-oj-tabbar-item-remove-icon":"true",children:t.jsx(d.EmbeddedIconButton,{"aria-label":k.tabBarNavigationList_removeCueText(),size:"xs",onAction:g,children:(H||h||y)&&t.jsx(r.SvgClose,{})})})})})})}}));
//# sourceMappingURL=RemovableTabBarItem-6a25d890.js.map
