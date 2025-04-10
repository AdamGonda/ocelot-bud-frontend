/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","ojs/ojvcomponent","preact","ojs/ojdomutils"],function(e,t,l,o,s){"use strict";var n=function(e,t,l,o){var s,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,l,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(c=(n<3?s(c):n>3?s(t,l,c):s(t,l))||c);return n>3&&c&&Object.defineProperty(t,l,c),c};e.Selector=class extends o.Component{constructor(e){super(e),this._handleFocusin=e=>{this.setState({focus:!0})},this._handleFocusout=e=>{this.setState({focus:!1})},this._checkboxListener=e=>{const{selectedKeys:t,rowKey:l,selectionMode:o,indeterminate:s}=this.props;let n;null!=t&&(e.target.checked?"multiple"===o?n=t.add([l]):"all"===o?n=t.addAll():"single"!==o||t.has(l)||(n=t.clear().add([l])):n="all"===o?s?t.addAll():t.clear():t.delete([l]),this.props.onSelectedKeysChanged?.(n),this.props.onIndeterminateChanged?.(!1))},this.state={focus:!1}}render(e,o){const{rowKey:n,indeterminate:c}=e,r=this._isSelected(n);let i="oj-selector-wrapper oj-component-icon";c?i+=" oj-indeterminate":r&&(i+=" oj-selected"),o.focus&&!s.recentPointer()&&(i+=" oj-focus-highlight");const a=e["aria-labelledby"]||null,d=e["aria-label"]||null;return t.jsx(l.Root,{class:"oj-selector",children:t.jsx("span",{class:i,children:t.jsx("input",{type:"checkbox",class:"oj-selectorbox","data-oj-clickthrough":"disabled","aria-label":d,"aria-labelledby":a,checked:r,onfocusin:this._handleFocusin,onfocusout:this._handleFocusout,onClick:this._checkboxListener})})})}_isSelected(e){const{selectedKeys:t,selectionMode:l}=this.props;return!!t&&("all"===l?t.isAddAll():t.has(e))}},e.Selector.defaultProps={rowKey:null,indeterminate:!1,selectedKeys:null,selectionMode:"multiple"},e.Selector._metadata={properties:{rowKey:{type:"any"},indeterminate:{type:"boolean",writeback:!0},selectedKeys:{type:"object",writeback:!0},selectionMode:{type:"string",enumValues:["all","multiple","single"]}},extension:{_WRITEBACK_PROPS:["selectedKeys","indeterminate"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["aria-label","aria-labelledby"]}},e.Selector=n([l.customElement("oj-selector")],e.Selector),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojselector.js.map