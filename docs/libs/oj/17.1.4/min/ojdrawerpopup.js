/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","ojs/ojvcomponent","preact","jquery","ojs/ojanimation","ojs/ojcore-base","ojs/ojpopup","ojs/ojdrawerutils","hammerjs","ojs/ojcustomelement-utils"],function(e,t,s,r,o,n,i,a,l,d,p){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,d=d&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d;var h,c=function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i};const u=oj,w=oj.PopupService,g=window,O=oj.ZOrderUtils;e.DrawerPopup=h=class extends r.Component{constructor(){super(...arguments),this.state={opened:this.props.opened,viewportResolvedDisplayMode:this.getViewportResolvedDisplayMode(),viewportResolvedDisplayModeVertical:this.getViewportResolvedDisplayModeVertical()},this.rootRef=r.createRef(),this.windowResizeHandler=null,this.ignoreUpdate=!1,this.handleGuardFocus=(e,t)=>{if("modal"===this.props.modality){const s=l.DrawerUtils.getFocusables(this.rootRef.current),{length:r,0:o,[r-1]:n}=s;if(t.preventDefault(),!r)return void this.rootRef.current.focus();"start"===e?n.focus():o.focus()}},this.handleOnStartGuardFocus=e=>{this.handleGuardFocus("start",e)},this.handleOnEndGuardFocus=e=>{this.handleGuardFocus("end",e)},this.handleKeyDown=e=>{e.defaultPrevented||e.key!==l.DrawerConstants.keys.ESC||this.selfClose()},this.autoDismissHandler=e=>{l.DrawerUtils.getFocusables(this.rootRef.current);const t=this.rootRef.current.parentNode,s=this.isTargetDescendantOfOwnZorderLayerOrItsNextSiblings(t,e.target);"focus-loss"!==this.props.autoDismiss||s?"none"!==this.props.autoDismiss||"modal"!==this.props.modality||s||e.preventDefault():this.selfClose()},this.refreshHandler=e=>{w.getInstance().triggerOnDescendents(o(this.rootRef.current),w.EVENT.POPUP_REFRESH)},this.destroyHandler=()=>{const e=o(this.rootRef.current);if(O.getStatus(e)===O.STATUS.OPEN){p.CustomElementUtils.cleanComponentBindings(e[0]),e.remove();const t={};t[w.OPTION.POPUP]=e,this.ignoreUpdate=!0,w.getInstance().close(t)}},this.isTargetDescendantOfOwnZorderLayerOrItsNextSiblings=(e,t)=>{const s=[e];let r=e.nextSibling;for(;r;)s.push(r),r=r.nextSibling;return s.some(e=>e.contains(t))},this.windowResizeCallback=()=>{const e={},t=this.state.viewportResolvedDisplayMode,s=this.getViewportResolvedDisplayMode();t!==s&&(e.viewportResolvedDisplayMode=s);const r=this.state.viewportResolvedDisplayModeVertical,o=this.getViewportResolvedDisplayModeVertical();r!==o&&(e.viewportResolvedDisplayModeVertical=o),this.isDrawerOpened()&&t===l.DrawerConstants.stringFullOverlay&&s===l.DrawerConstants.stringOverlay&&(this.isIOSspecificScrollCase()?this.applyPopupServiceModalChanges("modeless"):this.isAndroidSpecificScrollCase()&&l.DrawerUtils.enableBodyOverflow()),this.isDrawerOpened()&&t===l.DrawerConstants.stringOverlay&&s===l.DrawerConstants.stringFullOverlay&&(this.isIOSspecificScrollCase()?this.applyPopupServiceModalChanges("modal"):this.isAndroidSpecificScrollCase()&&l.DrawerUtils.disableBodyOverflow()),Object.keys(e).length>0&&this.setState(e)},this.handleSwipeAction=()=>{this.selfClose()}}static getDerivedStateFromProps(e,t){return e.opened!==t.opened?{opened:e.opened}:null}render(e){return this.ignoreUpdate||!this.isDrawerOpened()&&!this.wasDrawerOpenedInPrevState()?t.jsx(s.Root,{}):t.jsx(s.Root,{ref:this.rootRef,class:this.getPopupStyleClasses(this.props.edge),tabIndex:-1,role:this.props.role||"dialog",onKeyDown:this.handleKeyDown,children:t.jsxs("div",{class:"oj-drawer-full-height",children:[t.jsx("div",{class:"oj-drawer-focus-guard",onFocus:this.handleOnStartGuardFocus,tabIndex:0}),e.children,t.jsx("div",{class:"oj-drawer-focus-guard",onFocus:this.handleOnEndGuardFocus,tabIndex:0})]})})}isDrawerOpened(){return this.state[l.DrawerConstants.stringOpened]}wasDrawerOpenedInPrevState(){return this.openedPrevState}async selfClose(){try{await(this.props.onOjBeforeClose?.())}catch(e){return}this.props.onOpenedChanged?.(!1)}openOrCloseDrawer(e){this.isDrawerOpened()!=e.opened&&(this.openedPrevState=this.isDrawerOpened());const t=o(this.rootRef.current),s=w.getInstance(),r=this.getPopupServiceOptions(e);this.isDrawerOpened()?[O.STATUS.CLOSE,O.STATUS.UNKNOWN].indexOf(O.getStatus(t)>-1)&&s.open(r):O.getStatus(t)===O.STATUS.OPEN&&(this.isIOSspecificScrollCase()&&this.getViewportResolvedDisplayMode()===l.DrawerConstants.stringFullOverlay&&this.applyPopupServiceModalChanges("modeless"),s.close(r))}getPopupServiceOptions(e){const t=this.props.edge,s=o(this.rootRef.current),r={},n=w.OPTION;r[n.POPUP]=s,r[n.LAUNCHER]=o(document.activeElement),r[n.MODALITY]=this.props.modality,r[n.LAYER_SELECTORS]=this.getDrawerSurrogateLayerSelectors(),r[n.LAYER_LEVEL]=w.LAYER_LEVEL.TOP_LEVEL,r[n.POSITION]=null,r[n.CUSTOM_ELEMENT]=!0;const i=w.EVENT;return r[n.EVENTS]={[i.POPUP_BEFORE_OPEN]:()=>this.beforeOpenHandler(t,r),[i.POPUP_AFTER_OPEN]:()=>this.afterOpenHandler(t,e),[i.POPUP_BEFORE_CLOSE]:()=>this.beforeCloseHandler(t),[i.POPUP_AFTER_CLOSE]:()=>this.afterCloseHandler(e),[i.POPUP_AUTODISMISS]:e=>this.autoDismissHandler(e),[i.POPUP_REFRESH]:()=>this.refreshHandler(t),[i.POPUP_REMOVE]:()=>this.destroyHandler()},r}beforeOpenHandler(e,t){l.DrawerUtils.disableBodyOverflow(),this.drawerOpener=document.activeElement,t[w.OPTION.POPUP].show();const s=u.Context.getContext(this.rootRef.current).getBusyContext().addBusyState({description:"Animation in progress"}),r=n.slideIn(this.rootRef.current,l.DrawerUtils.getAnimationOptions(l.DrawerConstants.stringSlideIn,e));return r.then(s),r}afterOpenHandler(e,t){l.DrawerUtils.enableBodyOverflow(),this.isIOSspecificScrollCase()&&this.getViewportResolvedDisplayMode()===l.DrawerConstants.stringFullOverlay&&this.applyPopupServiceModalChanges("modal"),this.isAndroidSpecificScrollCase()&&this.getViewportResolvedDisplayMode()===l.DrawerConstants.stringFullOverlay&&l.DrawerUtils.disableBodyOverflow(),this.handleFocus(t);const s=o(this.rootRef.current);if(O.getStatus(s)===O.STATUS.OPEN&&!this.isDrawerOpened()){const e=w.getInstance(),s=this.getPopupServiceOptions(t);e.close(s)}}handleFocus(e){if(this.state.opened&&e.opened!==this.state.opened){const e=this.rootRef.current,t=l.DrawerUtils.getAutofocusFocusables(e),{length:s,0:r}=t;if(s>0)return void r.focus({preventScroll:!0});const o=l.DrawerUtils.getFocusables(e);let n=e;o.length&&(n=o[0]),n.focus({preventScroll:!0})}}beforeCloseHandler(e){if(l.DrawerUtils.disableBodyOverflow(),this.elementWithFocusBeforeDrawerCloses=document.activeElement,this.ignoreUpdate)return null;const t=u.Context.getContext(this.rootRef.current).getBusyContext().addBusyState({description:"Animation in progress"});return n.slideOut(this.rootRef.current,l.DrawerUtils.getAnimationOptions(l.DrawerConstants.stringSlideOut,e)).then(t)}afterCloseHandler(e){if(l.DrawerUtils.enableBodyOverflow(),this.rootRef.current.contains(this.elementWithFocusBeforeDrawerCloses)&&l.DrawerUtils.moveFocusToElementOrNearestAncestor(this.drawerOpener),this.ignoreUpdate)return;const t=o(this.rootRef.current);if(O.getStatus(t)===O.STATUS.CLOSE&&this.isDrawerOpened()){const t=w.getInstance(),s=this.getPopupServiceOptions(e);t.open(s)}else this.wasDrawerOpenedInPrevState()||window.queueMicrotask(()=>{this.forceUpdate()});this.props.onOjClose?.()}getDrawerSurrogateLayerSelectors(){let e=l.DrawerConstants.DrawerPopupStyleSurrogate;const t="modal";return this.props.modality===t&&(e+=` ${l.DrawerConstants.stringOjDrawer}${l.DrawerConstants.charDash}${t}`),e}getPopupStyleClasses(e){const t={};return e===l.DrawerConstants.stringBottom?this.getViewportResolvedDisplayModeVertical()!==l.DrawerConstants.stringFullOverlay&&this.getViewportResolvedDisplayMode()!==l.DrawerConstants.stringFullOverlay||(t[l.DrawerConstants.styleDisplayMode(l.DrawerConstants.stringFullOverlay)]=!0):this.getViewportResolvedDisplayMode()===l.DrawerConstants.stringFullOverlay&&(t[l.DrawerConstants.styleDisplayMode(l.DrawerConstants.stringFullOverlay)]=!0),l.DrawerUtils.getStyleClassesMapAsString(Object.assign(t,l.DrawerUtils.getCommonStyleClasses(e)))}componentDidUpdate(e,t){this.ignoreUpdate||this.handleComponentUpdate(t)}componentDidMount(){if(null===this.windowResizeHandler&&(this.windowResizeHandler=this.windowResizeCallback.bind(this)),window.addEventListener(l.DrawerConstants.stringResize,this.windowResizeHandler),this.openedPrevState=this.props.opened,h.defaultProps.opened!=this.props.opened){const e=Object.assign({},this.state);e.opened=!1,this.handleComponentUpdate(e)}}componentWillUnmount(){window.removeEventListener(l.DrawerConstants.stringResize,this.windowResizeHandler),this.windowResizeHandler=null}getViewportResolvedDisplayMode(){return l.DrawerUtils.getViewportWidth()>=l.DrawerConstants.fullWidthDrawerChangeThreshold?l.DrawerConstants.stringOverlay:l.DrawerConstants.stringFullOverlay}getViewportResolvedDisplayModeVertical(){return l.DrawerUtils.getViewportHeight()>=l.DrawerConstants.fullHeightDrawerChangeThreshold?l.DrawerConstants.stringOverlay:l.DrawerConstants.stringFullOverlay}handleComponentUpdate(e){this.openOrCloseDrawer(e),this.isDrawerOpened()&&"swipe"===this.props.closeGesture&&this.registerCloseWithSwipeListener(),!1===this.isDrawerOpened()&&e.opened&&this.unregisterCloseWithSwipeListener()}registerCloseWithSwipeListener(){this.hammerInstance=new d(g),this.props.edge===l.DrawerConstants.stringBottom&&this.hammerInstance.get("swipe").set({direction:d.DIRECTION_DOWN}),this.hammerInstance.on(this.getSwipeCloseDirection(this.props.edge),this.handleSwipeAction)}getSwipeCloseDirection(e){const t="swipeleft",s="swiperight";switch(e){case l.DrawerConstants.stringStart:return l.DrawerUtils.isRTL()?s:t;case l.DrawerConstants.stringEnd:return l.DrawerUtils.isRTL()?t:s;case l.DrawerConstants.stringBottom:return"swipedown"}}unregisterCloseWithSwipeListener(){this.hammerInstance&&this.hammerInstance.off(this.getSwipeCloseDirection(this.props.edge),this.handleSwipeAction)}isIOSspecificScrollCase(){return u.AgentUtils.getAgentInfo().os===u.AgentUtils.OS.IOS&&"modeless"===this.props.modality}isAndroidSpecificScrollCase(){return u.AgentUtils.getAgentInfo().os===u.AgentUtils.OS.ANDROID&&"modeless"===this.props.modality}applyPopupServiceModalChanges(e){const t={},s=w.OPTION;t[s.POPUP]=o(this.rootRef.current),t[s.MODALITY]=e,w.getInstance().changeOptions(t)}},e.DrawerPopup.defaultProps={autoDismiss:"focus-loss",edge:"start",modality:"modal",opened:!1,closeGesture:"swipe"},e.DrawerPopup._metadata={slots:{"":{}},properties:{opened:{type:"boolean",writeback:!0},edge:{type:"string",enumValues:["end","start","bottom"]},modality:{type:"string",enumValues:["modal","modeless"]},autoDismiss:{type:"string",enumValues:["none","focus-loss"]},closeGesture:{type:"string",enumValues:["none","swipe"]}},events:{ojBeforeClose:{cancelable:!0},ojClose:{}},extension:{_WRITEBACK_PROPS:["opened"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["role"]}},e.DrawerPopup=h=c([s.customElement("oj-drawer-popup")],e.DrawerPopup),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojdrawerpopup.js.map