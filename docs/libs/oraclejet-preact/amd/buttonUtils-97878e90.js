define(['exports', './id-c70ab33c'], (function(o,t){"use strict";function n(o){return{globalEventProps:{onBlur:o.onBlur,onFocus:o.onFocus,onMouseEnter:o.onMouseEnter,onMouseLeave:o.onMouseLeave,onTouchEnd:o.onTouchEnd,onTouchStart:o.onTouchStart,autofocus:o.autofocus}}}o.processGlobals=n,o.processSetButtonProps=function(o,e){const u=!!(o.isDisabled??e.isDisabled)||void 0,s={size:o.size??e.size,isDisabled:u},i={variant:o.variant??e.variant,...s},a={layoutWidth:o.layoutWidth??e.layoutWidth,...i},r={inputType:e.inputType??o.inputType??"checkbox",inputName:e.inputName??o.inputName??t.generateId(),...s},{globalEventProps:c}=n(o);return{isDisabled:u,buttonSetButtonProps:a,inputProps:r,globalEventProps:c}}}));
//# sourceMappingURL=buttonUtils-97878e90.js.map
