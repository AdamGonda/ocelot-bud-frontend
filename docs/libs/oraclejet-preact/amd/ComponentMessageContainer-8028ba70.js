define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-3421f0df', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', './logger-0f873e29', 'preact', './useTestId-b5cd4766', './LayerHost-639b3284', 'preact/compat', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './MessagesManager-d5686336', './useComponentTheme-5aa41a8f', './classNames-08d99695', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', './HiddenAccessible-037ef42d', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css'], (function(e,s,t,a,o,n,i,r,d,c,l,m,g,p,y,h,u,M,T,f,v,C,S,A,b,x,I,U,N){"use strict";function B({detail:e,fieldLabel:t,severity:a="error",testId:o}){const{classes:n}=C.useComponentTheme(I.ComponentMessageRedwoodTheme,{severity:a??"none"}),{baseTheme:i}=C.useComponentTheme(U.UserAssistanceRedwoodTheme),r=S.classNames([n,i]),d=c.useTestId(o);return s.jsxs("div",{class:r,"aria-live":"assertive","aria-atomic":"true",...d,children:[t&&s.jsx(x.HiddenAccessible,{children:t}),v.isSeverityIconNeeded(a)&&s.jsx(v.MessageStartIcon,{severity:a,testId:o?`${o}-icon`:void 0,variant:"inline"}),s.jsx(v.MessageSummary,{testId:o?`${o}-summary`:void 0,text:e,variant:"inline"})]})}function F(e){return e.map(((e,s)=>({key:s,data:{closeAffordance:"off",severity:e.severity||"error",detail:e.detail}})))}e.ComponentMessage=B,e.ComponentMessageContainer=function({fieldLabel:e,messages:t=[],testId:a}){const o=c.useTestId(a);return s.jsx("div",{class:N.componentMessageContainerBase,...o,children:s.jsx(v.MessagesManager,{data:F(t),children:({item:t})=>s.jsx(B,{detail:t.data.detail,fieldLabel:e,severity:t.data.severity,testId:a?`${a}-message-${t.key}`:void 0},t.key)})})}}));
//# sourceMappingURL=ComponentMessageContainer-8028ba70.js.map
