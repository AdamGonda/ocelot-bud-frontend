define(['exports', 'preact/jsx-runtime', 'preact/compat', './tabbableUtils-3f80fcf5', './FocusTracker-23469a5b'], (function(e,t,n,c,s){"use strict";const a=e=>{e&&c.isTabbableElement(e)&&setTimeout((()=>{c.focusOn(e)}),0)};e.FocusTrap=({autoFocusRef:e,children:l,isDisabled:r=!1,restoreFocusRef:u})=>{const b=n.useRef(null),o=n.useRef(null),i=n.useCallback(((e,t,n)=>{!r&&t&&(e?o.current=t:o.current?c.focusOn(o.current):n.length>0&&c.focusOn(n[0]))}),[r]),f=n.useCallback((e=>{const t=e.tabbableElements.length;t>0&&c.focusOn(e.tabbableElements[t-1])}),[]),m=n.useCallback((e=>{e.tabbableElements.length>0&&c.focusOn(e.tabbableElements[0])}),[]),E=n.useCallback((t=>{b.current=t.activeElement,e&&e.current?c.focusOn(e.current):i(t.hasFocusWithin,t.activeElement,t.tabbableElements)}),[e,i]),k=n.useCallback((e=>{o.current=e.lastActiveElement,!1!==u&&a(u?.current||b.current)}),[u]);return t.jsx(s.FocusTracker,{isDisabled:r,onStartTracking:E,onStopTracking:k,onFocusStartEdge:f,onFocusEndEdge:m,children:l})}}));
//# sourceMappingURL=FocusTrap-eb7cc3d2.js.map
