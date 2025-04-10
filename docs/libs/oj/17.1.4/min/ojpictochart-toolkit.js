/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(t,e){"use strict";class i extends e.ImageMarker{constructor(t,e,i,s,n,o,r,a,l,h){super(t.getCtx(),e,i,s,n,null,o,r,a,l,h),this._picto=t}animateUpdate(t,i){var s=new e.CustomAnimation(this.getCtx(),this,.75*this._picto.getAnimDur()),n=s.getAnimator(),o=this._getAnimParams();this._setAnimParams(i._getAnimParams()),n.addProp(e.Animator.TYPE_NUMBER_ARRAY,this,this._getAnimParams,this._setAnimParams,o),i.setAlpha(0),t.add(s,1)}animateDelete(t){t.add(new e.AnimFadeOut(this.getCtx(),this,.5*this._picto.getAnimDur()),0)}animateInsert(t){this.setAlpha(0),t.add(new e.AnimFadeIn(this.getCtx(),this,.5*this._picto.getAnimDur()),2)}_getAnimParams(){return[this.getCx(),this.getCy(),this.getWidth(),this.getHeight()]}_setAnimParams(t){this.setCx(t[0]),this.setCy(t[1]),this.setWidth(t[2]),this.setHeight(t[3])}}class s extends e.SimpleMarker{constructor(t,e,i,s,n,o,r){super(t.getCtx(),"none"===e?null:e,i,s,n,o,null,!0,!0,r),this._picto=t}animateUpdate(t,i){var s=new e.CustomAnimation(this.getCtx(),this,.75*this._picto.getAnimDur()),n=s.getAnimator(),o=this.getFill(),r=i.getFill();r.equals(o)||(this.setFill(r),n.addProp(e.Animator.TYPE_FILL,this,this.getFill,this.setFill,o));var a=this._getAnimParams();this._setAnimParams(i._getAnimParams()),n.addProp(e.Animator.TYPE_NUMBER_ARRAY,this,this._getAnimParams,this._setAnimParams,a),i.setAlpha(0),t.add(s,1)}animateDelete(t){t.add(new e.AnimFadeOut(this.getCtx(),this,.5*this._picto.getAnimDur()),0)}animateInsert(t){this.setAlpha(0),t.add(new e.AnimFadeIn(this.getCtx(),this,.5*this._picto.getAnimDur()),2)}_getAnimParams(){return[this.getCx(),this.getCy(),this.getWidth(),this.getHeight()]}_setAnimParams(t){this.setCenter(t[0],t[1]).setSize(t[2],t[3])}setDataColor(t,i){if("redwood"===this.getCtx().getThemeBehavior()){if(this._dataColor=t,!i){var s=t,n=this._picto.getOptions()._innerColor,o=this._picto.getOptions()._outerColor;this.setHoverStroke(new e.Stroke(n,1,1.5,!0),new e.Stroke(s,1,4.5,!0)),this.setSelectedStroke(new e.Stroke(n,1,1.5,!0),new e.Stroke(o,1,4.5,!0)),this.setSelectedHoverStroke(new e.Stroke(n,1,1.5,!0),new e.Stroke(o,1,4.5,!0))}}else super.setDataColor(t,i)}}const n=t=>"vertical"===t.getOptions().layout,o=t=>{var e=t.getOptions().layoutOrigin;return"bottomStart"===e||"bottomEnd"===e},r=t=>{var i=t.getOptions().layoutOrigin,s="topEnd"===i||"bottomEnd"===i;return e.Agent.isRightToLeft(t.getCtx())?!s:s};class a extends e.KeyboardHandler{isSelectionEvent(t){return this.isNavigationEvent(t)&&!t.ctrlKey}isMultiSelectEvent(t){return t.keyCode===e.KeyboardEvent.SPACE&&t.ctrlKey}static getNextNavigable(t,i,s,l){var h=t.getItems();if(l||(l=i),"none"===i.getShape()&&i!==l){var g=h.indexOf(i);if(0===g||g===h.length-1)return l}var c=r(t),d=o(t),u=n(t),m=i,p=s.keyCode===e.KeyboardEvent.LEFT_ARROW&&c||s.keyCode===e.KeyboardEvent.RIGHT_ARROW&&!c||s.keyCode===e.KeyboardEvent.UP_ARROW&&d||s.keyCode===e.KeyboardEvent.DOWN_ARROW&&!d,_=s.keyCode===e.KeyboardEvent.LEFT_ARROW&&u||s.keyCode===e.KeyboardEvent.RIGHT_ARROW&&u||s.keyCode===e.KeyboardEvent.UP_ARROW&&!u||s.keyCode===e.KeyboardEvent.DOWN_ARROW&&!u,v=h.indexOf(i)+(p?1:-1);return _?m=e.KeyboardHandler.getNextNavigable(i,s,h):v<h.length&&v>=0&&(m=h[v]),"none"===m.getShape()&&(m=m!==i?a.getNextNavigable(t,m,s,l):l),m}processKeyDown(t){var i=this._eventManager.getFocus();return i&&t.keyCode===e.KeyboardEvent.ENTER?(this._eventManager.processDrillEvent(i),e.EventManager.consumeEvent(t),i):super.processKeyDown(t)}}class l extends e.Container{constructor(t,i){super(t.getCtx(),null,i.id),this._picto=t,this._item=i;var s=null!=i.name?i.name:"_defaultId"+l._counter;this._id=null!=i.id?i.id:s,l._counter++,this._isNoneShape="none"===i.shape,this._isSelected=!1,this._isShowingKeyboardFocusEffect=!1,this._keyboardTooltipLocation=new e.Point(0,0),(this.isSelectable()||this.isDrillable())&&this.setCursor(e.SelectionEffectUtils.getSelectingCursor()),t.getEventManager().associate(this,this)}getColSpan(){var t=this._item.columnSpan;return null!=t&&t>=0?Math.round(t):1}getRowSpan(){var t=this._item.rowSpan;return null!=t&&t>=0?Math.round(t):1}getCount(){var t=this._item.count;return null!=t?Math.max(t,0):1}getShape(){return this._item.shape||this._picto.getOptions()._defaultShape}getColor(){return this._isNoneShape?this._picto.getOptions()._noneShapeColor:this._item.color||this._picto.getOptions()._defaultColor}getBorderColor(){return this._item.borderColor}getBorderWidth(){return this._item.borderWidth}getClassName(){return this._item.className||this._item.svgClassName}getStyle(){return this._item.style||this._item.svgStyle}getSource(){return this._item.source}getSourceSelected(){return this._item.sourceSelected}getSourceHover(){return this._item.sourceHover}getSourceHoverSelected(){return this._item.sourceHoverSelected}getName(){return this._item.name}getId(){return this._id}getShortDesc(){return this._item.shortDesc}isDrillable(){if(this._isNoneShape)return!1;var t=this._item.drilling;return t&&"inherit"!==t?"on"===t:"on"===this._picto.getOptions().drilling}isDoubleClickable(){return this.isSelectable()&&this.isDrillable()&&!this._isNoneShape}updateAriaAttr(){this.setAriaRole("img"),this._updateAriaLabel()}getDatatip(){if(this._isNoneShape)return"";var t=this._picto.getOptions(),i=this._picto.getOptions().tooltip,s=i?i.renderer:null;if(s){var n=this._picto.getCtx().getTooltipManager(),o={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.getColor()};return n.getCustomTooltip(s,o)}if(null!=this.getShortDesc())return e.Displayable.resolveShortDesc(this.getShortDesc(),()=>l.getShortDescContext(this));var r=[],a=this.getName();a&&r.push(e.HtmlTooltipManager.createElement("td",t._tooltipLabelStyle,a,["oj-dvt-datatip-label"])),r.push(e.HtmlTooltipManager.createElement("td",t._tooltipValueStyle,this._getCountString(),["oj-dvt-datatip-value"]));var h=e.HtmlTooltipManager.createElement("tr",null,r);return e.HtmlTooltipManager.createElement("table",null,[h],["oj-dvt-datatip-table"])}getDatatipColor(){return this.getColor()}_getCountString(){return e.ResourceUtils.format(this._picto.getOptions().translations.labelCountWithTotal,[this.getCount(),this._picto.getTotalCount()])}isSelectable(){return"none"!==this._picto.getOptions().selectionMode&&!this._isNoneShape}isSelected(){return this._isSelected}setSelected(t){this._isSelected=t,this._updateAriaLabel();for(var e=0;e<this.getNumChildren();e++){var n=this.getChildAt(e);(n instanceof s||n instanceof i)&&n.setSelected(t)}}showHoverEffect(){for(var t=0;t<this.getNumChildren();t++){var e=this.getChildAt(t);(e instanceof s||e instanceof i)&&e.showHoverEffect()}}hideHoverEffect(){for(var t=0;t<this.getNumChildren();t++){var e=this.getChildAt(t);(e instanceof s||e instanceof i)&&e.hideHoverEffect()}}getDisplayables(){return[this]}getAriaLabel(){var t,i=[],s=this._picto.getOptions().translations;this.isSelectable()&&i.push(s[this.isSelected()?"stateSelected":"stateUnselected"]),this.isDrillable()&&i.push(s.stateDrillable);var n=this.getName();return t=null!=this.getShortDesc()?this.getShortDesc():null==n?this._getCountString():e.ResourceUtils.format(s.labelAndValue,[n,this._getCountString()]),e.Displayable.generateAriaLabel(t,i,()=>l.getShortDescContext(this))}static getShortDescContext(t){return{id:t.getId(),name:t.getName(),count:t.getCount()}}_updateAriaLabel(){e.Agent.deferAriaCreation()||this.setAriaProperty("label",this.getAriaLabel())}getCategories(){return this._item._itemData?this._item.categories:this._item.categories||[this.getId()]}getNextNavigable(t){var i=this._picto.getEventManager().getKeyboardHandler();return t.type===e.MouseEvent.CLICK||i.isMultiSelectEvent(t)?this:i.isNavigationEvent(t)?a.getNextNavigable(this._picto,this,t):null}getKeyboardBoundingBox(t){return this.getDimensions(t)}getTargetElem(){return this.getElem()}showKeyboardFocusEffect(){this._isNoneShape||(this._isShowingKeyboardFocusEffect=!0,this.showHoverEffect())}hideKeyboardFocusEffect(){this._isNoneShape||(this._isShowingKeyboardFocusEffect=!1,this.hideHoverEffect())}isShowingKeyboardFocusEffect(){return this._isShowingKeyboardFocusEffect}setKeyboardTooltipLocation(t){this._keyboardTooltipLocation=t}getKeyboardTooltipLocation(){return this._keyboardTooltipLocation}}l._counter=0;class h extends e.Automation{GetSubIdForDomElement(t){var e=this._comp.getEventManager().GetLogicalObject(t);return e&&e instanceof l?"item["+this._comp.getItems().indexOf(e)+"]":null}getDomElementForSubId(t){if(t===e.Automation.TOOLTIP_SUBID)return this.GetTooltipElement(this._comp);var i=t.indexOf("[");if(i>0&&"item"===t.substring(0,i)){var s=parseInt(t.substring(i+1,t.length-1)),n=this._comp.getItems()[s];return n?n.getElem():null}return null}getItem(t){var e=this._comp.getItems()[t];return e?{color:e.getDatatipColor(),tooltip:e.getDatatip(),id:e.getId(),name:e.getName(),count:e.getCount(),selected:e.isSelected()}:null}getItemCount(){return this._comp.getItems().length}}class g extends e.BaseComponentDefaults{constructor(t){super({alta:{animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_noneShapeColor:"rgba(255,255,255,0)",_defaultSize:32,_defaultShape:"rectangle",_gapRatio:.25,_textStyle:new e.CSSStyle(e.BaseComponentDefaults.FONT_FAMILY_ALTA_13+"color: #252525;"),_statusMessageStyle:new e.CSSStyle(e.BaseComponentDefaults.FONT_FAMILY_ALTA_13+"color: #252525;"),_tooltipLabelStyle:new e.CSSStyle(""),_tooltipValueStyle:new e.CSSStyle("")}},t)}}class c extends e.EventManager{constructor(t){super(t.getCtx(),t.dispatchEvent,t,t),this._picto=t}ProcessRolloverEvent(t,i,s){var n=this._picto.getOptions();if("none"!==n.hoverBehavior){var o=i.getCategories?i.getCategories():[];n.highlightedCategories=s?o.slice():null;var r=e.EventFactory.newCategoryHighlightEvent(n.highlightedCategories,s),a=e.CSSStyle.getTimeMilliseconds(n.hoverBehaviorDelay);this.RolloverHandler.processEvent(r,this._picto.getItems(),a,"any"===n.highlightMatch)}}OnClickInternal(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))}OnDblClickInternal(t){var e=this.GetLogicalObject(t.target);e&&e.isSelectable&&e.isSelectable()&&this.processDrillEvent(e)}HandleTouchHoverEndInternal(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))}HandleTouchClickInternal(t){var e=this.GetLogicalObject(t.target);e&&(e.isSelectable&&e.isSelectable()||this.processDrillEvent(e))}HandleTouchDblClickInternal(t){var e=this.GetLogicalObject(t.target);e&&e.isSelectable&&e.isSelectable()&&(t.preventDefault(),t.stopPropagation(),this.processDrillEvent(e))}processDrillEvent(t){t instanceof l&&t.isDrillable()&&this.FireEvent(e.EventFactory.newDrillEvent(t.getId()))}}const d={render:(t,a,l,h)=>{var g=t.getCtx(),c=new e.Rect(g,l.x,l.y,l.w,l.h);if(c.setInvisibleFill(),a.addChild(c),h||(h=d.getInfo(t,l.w,l.h)),h.items){t.registerItems(h.items);for(var u=t.getOptions()._gapRatio*h.minSpan,m=n(t),p=o(t),_=r(t),v=new e.Map2D,S=0,C=0,f=0,A=0;A<h.items.length;A++){var y=h.items[A],b=y.getColSpan(),E=y.getRowSpan();if(!(b<=0||E<=0)){for(var w,D=b*h.colWidth,O=E*h.rowHeight,x=y.getCount(),H=0,M=!0;x>0&&(b===S&&E===C||(f=0),0===f&&(w=d._findNextAvailableCell(v,b,E,h.colCount,h.rowCount,m)),null!=w);){var T,I,k,R,N,P,L=w.col*h.colWidth+D/2,W=w.row*h.rowHeight+O/2,F=l.x+(_?l.w-L:L),K=l.y+(p?l.h-W:W),B=Math.min(1-f,x);if(m?(T=F-D/2,I=p?K+O*(.5-B-f):K+O*(f-.5),k=D,R=O*B):(T=_?F+D*(.5-B-f):F+D*(f-.5),I=K-O/2,k=D*B,R=O),1===B?(N=y.getId()+"_"+H,H++):N=Math.random(),y.getSource())P=new i(t,F,K,D,O,y.getSource(),y.getSourceSelected(),y.getSourceHover(),y.getSourceHoverSelected(),N+"_I");else{var U=new e.Rect(g,T,I,k,R);U.setInvisibleFill(),y.addChild(U),(P=new s(t,y.getShape(),F,K,D-h.colWidth*u,O-h.rowHeight*u,N+"_S")).setSolidFill(y.getColor()),P.setSolidStroke(y.getBorderColor(),null,y.getBorderWidth()),P.setDataColor(y.getColor()),P.setClassName(y.getClassName()),P.setStyle(y.getStyle())}if(B<1){var z=new e.ClipPath;z.addRect(T,I,k,R),P.setClipPath(z)}M&&(y.setKeyboardTooltipLocation(new e.Point(F,K)),M=!1),y.addChild(P),t.registerMarker(P),x-=B,f=(f+B)%1}a.addChild(y),y.updateAriaAttr(),S=b,C=E}}}else d.renderEmptyText(t,a,l)},getInfo:(t,i,s)=>{var o=t.getOptions(),r=o.items;if(!r)return{};for(var a=e.ArrayUtils.createBooleanMap(o.hiddenCategories),h=[],g=0,c=1,u=1,m=1/0,p=0;p<r.length;p++)if(null!=r[p]){var _=new l(t,r[p]);if(!a||!e.ArrayUtils.hasAnyMapItem(a,_.getCategories())){var v=_.getColSpan(),S=_.getRowSpan();v<=0||S<=0||(v>c&&(c=v),S>u&&(u=S),v<m&&(m=v),S<m&&(m=S),g+=v*S*_.getCount(),h.push(_))}}if(0===g)return{};var C=o.columnWidth,f=o.rowHeight;i&&s||(C||(C=f||o._defaultSize),f||(f=C));var A=n(t),y=o.columnCount,b=o.rowCount;return y||b||(i&&s?A?b=d._ceil(Math.sqrt(g*s/i),u):y=d._ceil(Math.sqrt(g*i/s),c):i?y=Math.max(Math.floor(i/C),1):s?b=Math.max(Math.floor(s/f),1):A?b=d._ceil(Math.sqrt(g),u):y=d._ceil(Math.sqrt(g),c)),y?b||(b=d._ceil(g/y,u)):y=d._ceil(g/b,c),i&&s&&(C||(C=f||Math.min(i/y,s/b)),f||(f=C)),y<=0||b<=0||C<=0||f<=0?{}:{items:h,colCount:y,rowCount:b,colWidth:C,rowHeight:f,minSpan:m}},_ceil:(t,e)=>Math.ceil(t/e)*e,_findNextAvailableCell:(t,e,i,s,n,o)=>{if(o){var r=d._findNextAvailableCell(t,i,e,n,s,!1);return r?{col:r.row,row:r.col}:null}for(var a=0;a<n-i+1;a++)for(var l=0;l<s-e+1;l++)if(d._areCellsAvailable(t,l,a,e,i))return d._occupyCells(t,l,a,e,i),{col:l,row:a};return null},_areCellsAvailable:(t,e,i,s,n)=>{for(var o=0;o<n;o++)for(var r=0;r<s;r++)if(t.get(e+r,i+o))return!1;return!0},_occupyCells:(t,e,i,s,n)=>{for(var o=0;o<n;o++)for(var r=0;r<s;r++)t.put(e+r,i+o,!0)},renderEmptyText:(t,e,i)=>{var s=t.getOptions(),n=s.translations.labelNoData,o=t.renderEmptyText(e,n,i.clone(),t.getEventManager(),s._statusMessageStyle);t.registerEmptyText(o)}};class u extends e.BaseComponent{constructor(t,i,s){super(t,i,s),this.EventManager=new c(this),this.EventManager.addListeners(this),this.EventManager.setKeyboardHandler(new a(this.EventManager)),this.Defaults=new g(t),this._items=[],"blink"!==e.Agent.engine&&"safari"!==e.Agent.browser||this.getCtx().removeSizingSvg()}_getPreferredSize(t,i){if(!t||!i){var s=d.getInfo(this,t,i);this._info=s,t||(t=s.items?s.colCount*s.colWidth:0),i||(i=s.items?s.rowCount*s.rowHeight:0)}return new e.Dimension(t,i)}render(t,i,s){this._oldContainer=this._container;var n=this._markers,o=this.Width?this.Width:0,r=this.Height?this.Height:0;this.EventManager.hideTooltip(),this._items=[],this._markers=[],this._info=null,this._emptyText&&(this._container.removeChild(this._emptyText),this._emptyText=null),this.StopAnimation(),this.SetOptions(t);var a=this.getCtx();if(i||s)this.Width=i,this.Height=s;else{a.getSvgDocument().style.display="block";var l=this._getPreferredSize();e.ToolkitUtils.setSvgSize(a,l.w,l.h);var h=e.ToolkitUtils.getOuterDivSize(a);l.w===h.w&&l.h!==h.h?(this.Height=h.h,l=this._getPreferredSize(null,this.Height),e.ToolkitUtils.setSvgSize(a,l.w,this.Height),this.Width=e.ToolkitUtils.getOuterDivSize(a).w):l.w!==h.w&&l.h===h.h?(this.Width=h.w,l=this._getPreferredSize(this.Width,null),e.ToolkitUtils.setSvgSize(a,this.Width,l.h),this.Height=e.ToolkitUtils.getOuterDivSize(a).h):(this.Width=h.w,this.Height=h.h),this.Width===l.w&&this.Height===l.h||(this._info=null)}if(this._container=new e.Container(a),this.addChild(this._container),d.render(this,this._container,new e.Rectangle(0,0,this.Width,this.Height),this._info),this._oldContainer){if("none"!==this.Options.animationOnDataChange&&t){var g=new e.DataAnimationHandler(a,null);g.constructAnimation(n,this._markers),this.Animation=g.getAnimation()}}else this.Animation=this._getAnimOnDisplay();this.Animation?(e.ToolkitUtils.setSvgSize(a,Math.max(o,this.Width),Math.max(r,this.Height)),this.EventManager.removeListeners(this),this._emptyText&&this._container.removeChild(this._emptyText),this.Animation.setOnEnd(this._onRenderEnd,this),this.Animation.play()):this._onRenderEnd()}SetOptions(t){super.SetOptions(t),t?this.Options=this.Defaults.calcOptions(t):this.Options||(this.Options=this.GetDefaults()),e.Agent.isEnvironmentTest()&&(this.Options.animationOnDisplay="none",this.Options.animationOnDataChange="none");var i=this.Options.selectionMode;this._selectionHandler="single"===i?new e.SelectionHandler(this.getCtx(),e.SelectionHandler.TYPE_SINGLE):"multiple"===i?new e.SelectionHandler(this.getCtx(),e.SelectionHandler.TYPE_MULTIPLE):null,this.EventManager.setSelectionHandler(this._selectionHandler)}_onRenderEnd(){var t;this._oldContainer&&(this.removeChild(this._oldContainer),this._oldContainer.destroy(),this._oldContainer=null),this.Animation&&(this.EventManager.addListeners(this),this._emptyText&&this._container.addChild(this._emptyText)),e.ToolkitUtils.setSvgSize(this.getCtx(),this.Width,this.Height);for(var i=0;i<this._items.length&&"none"===(t=this._items[i]).getShape();i++);this.EventManager.setFocusObj(t),this._selectionHandler&&this._selectionHandler.processInitialSelections(this.Options.selection,this._items),e.CategoryRolloverHandler.highlight(this.Options.highlightedCategories,this._items,"any"===this.Options.highlightMatch),this.UpdateAriaAttributes(),this.AnimationStopped||this.RenderComplete(),this.Animation=null,this.AnimationStopped=!1}registerItems(t){this._items=t}getItems(){return this._items}registerMarker(t){this._markers.push(t)}registerEmptyText(t){this._emptyText=t}getTotalCount(){for(var t=0,e=0;e<this._items.length;e++)t+=this._items[e].getCount();return t}getAnimDur(){return e.CSSStyle.getTimeMilliseconds(this.Options.animDuration)/1e3}_getAnimOnDisplay(){var t=this.Options.animationOnDisplay,i=this.getAnimDur(),s=this.getCtx(),a=new e.Rectangle(0,0,this.Width,this.Height);if(e.BlackBoxAnimationHandler.isSupported(t))return e.BlackBoxAnimationHandler.getInAnimation(s,t,this._container,a,i);var l=[];if("popIn"===t)for(var h=0;h<this._markers.length;h++){var g=this._markers[h];l.push(new e.AnimPopIn(s,g,!0,i))}else if("none"!==t){for(var c=0;c<this._markers.length;c++){var d,u,m=this._markers[c],p=new e.CustomAnimation(s,m,i);n(this)?(d=r(this)?this.Width:0,u=m.getCx(),m.setCx(d),p.getAnimator().addProp(e.Animator.TYPE_NUMBER,m,m.getCx,m.setCx,u)):(d=o(this)?this.Height:0,u=m.getCy(),m.setCy(d),p.getAnimator().addProp(e.Animator.TYPE_NUMBER,m,m.getCy,m.setCy,u)),l.push(p)}l.push(e.BlackBoxAnimationHandler.getInAnimation(s,e.BlackBoxAnimationHandler.ALPHA_FADE,this._container,a,i))}return l.length>0?new e.ParallelPlayable(s,l):null}highlight(t){var i=this.getOptions();i.highlightedCategories=e.JsonUtils.clone(t),e.CategoryRolloverHandler.highlight(t,this.getItems(),"any"===i.highlightMatch)}select(t){this.getOptions().selection=e.JsonUtils.clone(t),this._selectionHandler&&this._selectionHandler.processInitialSelections(t,this.getItems())}getAutomation(){return this._automation||(this._automation=new h(this)),this._automation}}t.PictoChart=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojpictochart-toolkit.js.map