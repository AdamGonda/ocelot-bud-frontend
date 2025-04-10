define(['exports', 'preact/jsx-runtime', 'preact/compat', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './useActionable-1fb5f933', './classNames-08d99695', './dimensions-60420dbb', './padding-77507928', './colors-5f64f302', './aria-232c9168', './mergeInterpolations-9ede4cf7', './UNSAFE_ActionCard/themes/ActionCardStyles.css', './useTestId-3a316499'], (function(e,a,t,s,o,n,l,i,r,c,b,d,p,u){"use strict";const f=[...Object.values(i.dimensionInterpolations),...Object.values(c.colorInterpolations),...Object.values(r.paddingInterpolations),...Object.values(b.ariaInterpolations)],y=d.mergeInterpolations(f),I=t.forwardRef((({children:e,onAction:t,testId:s,...i},r)=>{const{isTabbable:c}=o.useTabbableMode(),{actionableProps:b,isHover:d,isActive:f}=n.useActionable((e=>{t&&t({reason:"keyup"==e.type?"keyboard":"pointer"})})),{class:I,ariaLabel:m,ariaLabelledBy:v,...A}=y(i),j=l.classNames([p.baseStyle,I,d&&p.hoverStyle,f&&p.activeStyle]),T=u.useTestId(s);return a.jsx("div",{"aria-label":m,"aria-labelledby":v,ref:r,...b,class:j,tabIndex:c?0:-1,role:"button",style:A,...T,children:e})}));e.ActionCard=I}));
//# sourceMappingURL=ActionCard-01322111.js.map
