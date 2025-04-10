define(['exports', 'preact/jsx-runtime', './UNSAFE_Label/themes/redwood/LabelTheme', './LabelValueLayout-194e64d9', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './useComponentTheme-5aa41a8f', './useTestId-3a316499', './classNames-08d99695', './LayoutStyles.css-d1dfed48', 'preact/compat', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './Flex-56ecdf4c', './InputGroupContext-372087af', './useInputGroupContext-e6e19f4f', './useUser-85c781ea', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme'], (function(e,t,o,n,a,s,d,l,i,r,m,u,x,h,T,c,C,F,p,y,f){"use strict";const R=({variant:e,insideLabel:o,mainContent:n,endContent:a,rootRef:d,resize:i})=>{const{isFormLayout:r,isReadonly:m}=u.useFormContext(),{isLoading:x}=h.useFormFieldContext(),{direction:c}=F.useUser(),f="ltr"===c,R=r&&!m,b=void 0!==o,L=C.useInputGroupContext(),v=null!==L,w=L?L.last?f?"groupRight":"groupLeft":0===L.index?f?"groupLeft":"groupRight":"groupMiddle":void 0,{variantClasses:S,styles:{textFieldEndContent:N}}=s.useComponentTheme(p.TextFieldRedwoodTheme,{middleContent:e,textAreaResizeDirection:i&&"textarea"===e?c:void 0}),{classes:g,styles:{readonlyTextFieldMiddleBase:I,readonlyTextFieldMiddleNotInEnabledForm:j,readonlyTextFieldMiddleInEnabledForm:E,readonlyTextFieldMiddleInEnabledFormNotTextarea:A}}=s.useComponentTheme(y.ReadonlyTextFieldRedwoodTheme,{insideNonReadonlyForm:R?"isInsideNonReadonlyForm":"notInsideNonReadonlyForm",insideLabel:b?"hasInsideLabel":"noInsideLabel",textarea:"textarea"===e?"isTextArea":"notTextArea",loading:x?"isLoading":"notLoading",withinGroup:v?"isWithinGroup":void 0,inputGroupPosition:w,resize:i??"none"}),U=l.classNames([S,I,R&&E,R&&"textarea"!==e&&A,!R&&j]);return t.jsxs("div",{role:"presentation",class:g,ref:d,children:[t.jsxs("div",{class:U,children:[o,n]}),a&&t.jsx("span",{class:N,children:t.jsx(T.Flex,{justify:"center",align:"center",hasZeroMargins:!0,children:a})})]})},b=r.forwardRef((({outerClassNames:e,label:o,labelEdge:a,labelStartWidth:s,compactUserAssistance:d,inlineUserAssistance:l,mainContent:i,endContent:r,rootRef:m,variant:u,resize:x,...h},T)=>{const c="textarea"===u?"textArea":"textField";return t.jsxs("div",{...h,ref:T,class:e,children:[d,t.jsx(n.LabelValueLayout,{label:o,labelEdge:a,labelStartWidth:s,parentComponentVariant:c,children:t.jsx(R,{mainContent:i,endContent:r,rootRef:m,...u?{variant:u,resize:x}:{}})}),l]})})),L=r.forwardRef((({outerClassNames:e,compactUserAssistance:o,inlineUserAssistance:n,mainContent:a,endContent:s,label:d,rootRef:l,variant:i,resize:r,...m},u)=>t.jsxs("div",{...m,ref:u,class:e,children:[o,t.jsx(R,{insideLabel:d,mainContent:a,endContent:s,rootRef:l,...i?{variant:i,resize:r}:{}}),n]}))),v=r.forwardRef((({columnSpan:e=1,label:n,labelEdge:r,mainContent:m,endContent:u,variant:x,mainFieldRef:h,testId:T,...c},C)=>{const F=d.useTestId(T),{classes:y,styles:R}=s.useComponentTheme(p.TextFieldRedwoodTheme,{readonly:"isReadonly"}),{baseTheme:v}=s.useComponentTheme(o.LabelRedwoodTheme),{baseTheme:w}=s.useComponentTheme(f.FormLayoutRedwoodTheme),{formControlBase:S}=R,{baseTheme:N}=s.useComponentTheme(a.SkeletonRedwoodTheme),g=l.classNames([y,N,S,w,v,i.layoutSpanStyles.layoutSpanColumn[e]]);return void 0===n||"start"!==r&&"top"!==r?t.jsx(L,{outerClassNames:g,ref:C,label:n,mainContent:m,endContent:u,rootRef:h,variant:x,...c,...F}):t.jsx(b,{outerClassNames:g,label:n,labelEdge:r,ref:C,mainContent:m,endContent:u,rootRef:h,variant:x,...c,...F})})),w=r.forwardRef((({columnSpan:e=1,hasInsideLabel:n=!1,variant:d="default",...r},m)=>{const u=C.useInputGroupContext(),{isReadonly:x}=h.useFormFieldContext(),{baseTheme:T}=s.useComponentTheme(f.FormLayoutRedwoodTheme),{baseTheme:c}=s.useComponentTheme(o.LabelRedwoodTheme),{classes:F,styles:y}=s.useComponentTheme(p.TextFieldRedwoodTheme,{readonly:x?"isReadonly":"notReadonly",withinGroup:null!==u?"isWithinGroup":void 0}),{formControlBase:R,textFieldBase:b,textFieldEmbedded:L}=y,{baseTheme:v}=s.useComponentTheme(a.SkeletonRedwoodTheme),w=l.classNames([v,R,b,"embedded"===d&&L,F,T,c,i.layoutSpanStyles.layoutSpanColumn[e]]);return t.jsx("div",{...r,class:w,ref:m})}));e.ReadonlyTextField=v,e.StyledTextField=w}));
//# sourceMappingURL=StyledTextField-a51060bb.js.map
