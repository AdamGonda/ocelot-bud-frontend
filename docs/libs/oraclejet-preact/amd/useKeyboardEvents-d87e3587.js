define(['exports', './useUser-85c781ea'], (function(e,a){"use strict";const r=(e,a,r)=>{r?.({value:e}),a.current=e},t=e=>{e.preventDefault(),e.stopPropagation()};e.handleInput=r,e.useKeyboardEvents=function(e,n,s,c,o,i,u){const{direction:b}=a.useUser(),h="rtl"===b;return{onKeyUp:a=>{switch(a.key){case"Enter":i?.({value:e}),t(a);break;case"Tab":r(e,o,u),t(a);break;case"Home":r(n,o,u),t(a);break;case"End":r(s,o,u),t(a)}},onKeyDown:a=>{switch(a.key){case"Tab":return;case"ArrowDown":r(Math.max(n,e-c),o,u),t(a);break;case"ArrowUp":r(Math.min(s,e+c),o,u),t(a);break;case"ArrowLeft":{const i=h?Math.min(s,e+c):Math.max(n,e-c);r(i,o,u),t(a);break}case"ArrowRight":{const i=h?Math.max(n,e-c):Math.min(s,e+c);r(i,o,u),t(a);break}}}}}}));
//# sourceMappingURL=useKeyboardEvents-d87e3587.js.map
