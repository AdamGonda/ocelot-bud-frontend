define(['exports', 'preact/jsx-runtime', 'preact/compat', './WindowOverlay-a2d80d55', './useTestId-3a316499', './useAnimation-5bd3adfc', 'preact/hooks', './UNSAFE_Dialog/themes/redwood/DialogTheme', './FocusTrap-eb7cc3d2', './Layer-276d62e8', './LayerHost-e95c5f30', './Modal-36acfc12', './classNames-08d99695', './ImageVars.css-17386400', './useComponentTheme-5aa41a8f', './useId-c9578d26', './dimensions-60420dbb', './mergeInterpolations-9ede4cf7'], (function(e,a,o,s,n,t,i,d,l,r,c,m,u,y,p,f,h,g){"use strict";const b=({header:e,id:o})=>{const{styles:s}=p.useComponentTheme(d.DialogRedwoodTheme),n="string"==typeof e?a.jsx("h1",{id:o,className:s.dialogTitleStyle,children:e}):e;return a.jsx("div",{className:s.dialogHeaderStyle,children:n})},j=o.forwardRef((({children:e,header:o,footer:s,labelId:t,role:i,ariaLabelledBy:l,ariaDescribedBy:r,onKeyDown:c,testId:m,style:f},h)=>{const{classes:g,styles:j}=p.useComponentTheme(d.DialogRedwoodTheme),x=n.useTestId(m);return a.jsx("div",{ref:h,className:u.classNames([g,y.globalImages]),style:Object.assign({},{opacity:0},f),onKeyDown:c,role:i,"aria-labelledby":l,"aria-describedby":r,...x,children:a.jsxs("div",{className:j.dialogContainerStyle,children:[a.jsx(b,{id:t,header:o}),a.jsx("div",{className:j.dialogContentStyle,children:a.jsx("div",{className:j.dialogBodyStyle,children:e})}),a.jsx("div",{className:j.dialogFooterStyle,children:s})]})})})),x={opening:{from:{scaleX:0,scaleY:0,transformOrigin:"center",opacity:0},to:{scaleX:1,scaleY:1,opacity:1},options:{duration:200}},closing:{from:{scaleX:1,scaleY:1,transformOrigin:"center",opacity:1},to:{scaleX:0,scaleY:0,opacity:0},options:{duration:200}}};e.Dialog=({autoFocusRef:e,children:o,isOpen:n,header:d="",footer:c,modality:u="modal",placement:y="center",offset:p=0,onClose:b,onTransitionEnd:I,role:T="dialog","aria-labelledby":D,"aria-describedby":N,testId:S,...v})=>{const[w,O]=i.useState(n?"opening":"unmounted"),C=f.useId(),F=D||C,R=[...Object.values(h.dimensionInterpolations)],A=g.mergeInterpolations(R),{...B}=A(v);i.useEffect((()=>{("unmounted"!==w||n)&&O(n?"opening":"closing")}),[n,w]);const{nodeRef:E}=t.useAnimation(w,{animationStates:x,isAnimatedOnMount:!0,onAnimationEnd:({animationState:e})=>{"closing"===e?(O("unmounted"),I?.(!1)):I?.(!0)}}),L=e=>{if("Escape"===e.code)b?.({reason:"escapeKey"})},K=()=>a.jsx(s.WindowOverlay,{placement:y,offset:p,children:a.jsx(l.FocusTrap,{autoFocusRef:e,children:a.jsx(j,{ref:E,labelId:F,header:d,footer:c,role:T,ariaLabelledBy:F,ariaDescribedBy:N,onKeyDown:L,testId:S,style:B,children:o})})});return"modal"===u?a.jsx(m.Modal,{isOpen:"unmounted"!==w,children:K()}):"unmounted"!==w?a.jsx(r.Layer,{children:K()}):null}}));
//# sourceMappingURL=Dialog-f6da299c.js.map
