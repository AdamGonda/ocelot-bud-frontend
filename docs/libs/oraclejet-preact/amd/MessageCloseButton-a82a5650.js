define(['exports', 'preact/jsx-runtime', './Close-059bfa6f', './IconButton-671dbb94', './useTranslationBundle-d999fb18', './classNames-2e65b3b3', './PRIVATE_Message/themes/MessageStyles.css'], (function(e,s,t,a,n,o,l){"use strict";e.MessageCloseButton=function({onAction:e,variant:c="banner"}){const r=n.useTranslationBundle("@oracle/oraclejet-preact"),i=s.jsx(a.IconButton,{"aria-label":r.message_close(),size:"sm",variant:"borderless",onAction:e,children:s.jsx(t.SvgClose,{})}),u=o.classNames([l.messageCloseButtonStyles.base,l.messageCloseButtonStyles[c]]);return s.jsx("div",{class:u,"data-oj-message-close-button":"",children:i})}}));
//# sourceMappingURL=MessageCloseButton-a82a5650.js.map
