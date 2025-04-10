define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Text-cd61a065', './classNames-08d99695', './useId-c9578d26', './mergeProps-bcfa6a92', './usePress-949a0d03', './useUser-3ef25571', './useComponentTheme-5aa41a8f', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './useInteractionStyle-76a64325', 'preact', 'preact/compat', './clientHints-4f5a07b0', './useToggle-a29f97af', './UNSAFE_Menu/themes/redwood/MenuItemTheme'], (function(e,n,t,o,r,s,a,u,i,l,c,d,m,p,f,g,y,h){"use strict";const C=e=>e.dataset.ojMenuItemKey,M=e=>{const n=e.closest("[data-oj-menu-item-key]");if(n){const e=C(n);return void 0===e?null:{key:e,elem:n}}return null},b=(e,n)=>{if(!n)return{};return{onKeyDown:t=>{"ltr"===e?"ArrowRight"===t.key&&n?.():"ArrowLeft"===t.key&&n?.()}}},v=p.createContext({isMobile:!1,onClose:()=>null,testId:""});function x(){return t.useContext(v)}const I=p.createContext({menuContainerRef:{current:null},currentKey:void 0,showFocusRing:!1,changeKey:()=>{},isContainerFocused:!1,menuContainerGeneralInformation:{current:{wasMouseMoved:!1,lastMouseLeaveMenuItemdRelatedTarget:null}}});function k(){return t.useContext(I)}const w=f.forwardRef((({id:e,label:s,onAction:p,startIcon:f,endIcon:g,role:C,isChecked:M,isDisabled:v=!1,variant:I="standard",type:w,hoverInfo:j,openSubmenu:S,menuItemLabelWeight:T="normal",isSubmenuOpen:P,submenuId:R,submenuRef:E,itemKey:F},L)=>{const{onClose:A}=x(),{currentKey:D,changeKey:K,showFocusRing:N,menuContainerRef:U,menuContainerGeneralInformation:O,isContainerFocused:q}=k(),B=t.useRef(null),{direction:G}=i.useUser(),H=D===e,V=t.useCallback((e=>{"submenu"!==w&&A?.({reason:"itemAction"}),p?.(e)}),[w,A,p]),{hoverProps:z}=function(e){const{bool:n,setTrue:t,setFalse:o}=y.useToggle(!1);return{hoverProps:{ontouchend:t,onMouseEnter:t=>{n?o():e.onMouseEnter(t)},onMouseLeave:n=>{e.onMouseLeave(n)}}}}({onMouseEnter:n=>{j?.hoverStatus.current.recentClose||j?.hoverStatus.current.pendingUnhover||(j&&O.current.wasMouseMoved&&(j.hoverStatus.current.pendingUnhover=!0),O.current.wasMouseMoved&&(j?.hoverProps.onMouseEnter(n),K({key:e,reason:"mouseEnter"})))},onMouseLeave:e=>{j&&(j.hoverStatus.current.pendingUnhover=!1),(U.current?.contains(e.relatedTarget)||E?.current?.parentElement?.contains(e.relatedTarget))&&(O.current.lastMouseLeaveMenuItemdRelatedTarget=e.relatedTarget)}}),{pressProps:W}=u.usePress(V,{isDisabled:v});t.useLayoutEffect((()=>{H&&B.current?.focus()}),[H]);const{interactionProps:$}=m.useInteractionStyle({isDisabled:v}),{classes:_,styles:{iconLabelContainer:J,iconContainer:Q,startIconContainer:X,labelContainer:Y,endIconContainer:Z}}=l.useComponentTheme(h.MenuItemRedwoodTheme,{current:H?"isCurrent":"notCurrent",focusRing:N?"isFocusRing":"notFocusRing",variant:v?"disabled":I,containerFocused:q?"isContainerFocused":"notContainerFocused",submenuOpen:P?"isSubmenuOpen":"notSubmenuOpen"}),ee=c.mergeInterpolations([...Object.values(d.flexitemInterpolations)]),{class:ne,...te}=ee({flex:"1 1 auto",alignSelf:"center"}),{class:oe,...re}=ee({flex:"0 0 auto",alignSelf:"center"}),se=r.classNames([oe,J,Q,X]),ae=r.classNames([ne,J,Y]),ue=r.classNames([oe,J,Q,Z]);return n.jsx("div",{role:"presentation",...void 0!==R&&"submenu"===w&&{"aria-owns":R},children:n.jsxs("a",{ref:e=>{B.current=e,"function"==typeof L?L(e):L&&(L.current=e)},"data-oj-label":s,"data-oj-key":F,class:_,...a.mergeProps($,z,W,b(G,S),(ie=e,le=K,{onClick:()=>{le({key:ie,reason:"click"})}})),role:C,"data-oj-menu-item-key":e,..."submenu"===w&&{"aria-haspopup":!0,"aria-expanded":"bold"===T||!!P},...v&&{"aria-disabled":!0},..."select"===w&&{"aria-checked":!!M},tabIndex:H?0:-1,children:[f&&n.jsx("span",{style:re,class:se,children:f}),n.jsx("span",{style:te,class:ae,children:n.jsx(o.Text,{variant:"inherit",size:"md",weight:T,children:s})}),g&&n.jsx("span",{style:re,class:ue,children:g})]})});var ie,le}));e.BaseMenuItem=w,e.MenuContainerContext=I,e.MenuContext=v,e.MenuItem=function(e){const o=s.useId(),r=t.useMemo((()=>`oj-menu-item-${o}`),[o]);return n.jsx(w,{...e,role:"menuitem",type:"simple",id:r})},e.getCloseSubmenuEvent=(e,n)=>{if(!n)return{};return{onKeyDown:t=>{("Escape"===t.key||"ltr"===e&&"ArrowLeft"===t.key||"rtl"===e&&"ArrowRight"===t.key)&&(t.stopPropagation(),n?.())}}},e.getIsMobile=()=>{const{deviceType:e}=g.getClientHints();return"phone"===e},e.getKeyboardCloseProps=(e,n)=>({onKeyDown:t=>{"Tab"===t.key?(t.stopPropagation(),e?.({reason:"dismissed"}),t.preventDefault()):"Escape"===t.key&&"main"===n&&(t.stopPropagation(),e?.({reason:"dismissed"}))}}),e.getLastVisible=e=>{if(e){const n=e.querySelectorAll("[data-oj-menu-item-key]"),t=n[n.length-1];if(t){const e=C(t);if(e)return e}}return null},e.getMenuContainerFocusMethods=(e,n)=>({onBlur:()=>{setTimeout((()=>{e()}),100)},onFocus:()=>{n()}}),e.getMenuContainerMouseLeave=e=>({onMouseLeave:n=>{e(n)}}),e.getMenuPointerDown=()=>({onPointerDown:e=>{const n=M(e.target);n?.key||e.preventDefault()}}),e.getNVisible=(e,n)=>{if(e){const t=e.querySelectorAll("[data-oj-menu-item-key]")[n];if(t){const e=C(t);if(e)return e}}return null},e.getPrevNext=(e,n,t)=>()=>{if(e){const o=Array.from(e.querySelectorAll("[data-oj-menu-item-key]"));let r=o.findIndex((e=>C(e)===t))+(n?-1:1);const s=o.length-1;r<0&&(r=s),r>s&&(r=0);const a=C(o[r]);return a||null}return null},e.keyElemExtractor=M,e.useMenuContainerContext=k,e.useMenuContext=x}));
//# sourceMappingURL=MenuItem-87cd59b8.js.map
