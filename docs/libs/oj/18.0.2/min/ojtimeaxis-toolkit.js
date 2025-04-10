/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(t,e){"use strict";class s{constructor(){this._dayInMillis=864e5,this._firstDayOfWeek=0}setFirstDayOfWeek(t){this._firstDayOfWeek=t}getFirstDayOfWeek(){return this._firstDayOfWeek}adjustDate(t,e){var s=new Date(t.getTime());if("weeks"===e){s.setHours(0,0,0,0);var i=(t.getDay()-this.getFirstDayOfWeek()+7)%7;i>0&&s.setDate(s.getDate()-i)}else if("months"===e)s.setDate(1),s.setHours(0,0,0,0);else if("days"===e)s.setHours(0,0,0,0);else if("hours"===e)s.setMinutes(0,0,0);else if("minutes"===e)s.setSeconds(0,0);else if("seconds"===e)s.setMilliseconds(0);else if("quarters"===e){var r=Math.floor(s.getMonth()/3);s.setDate(1),s.setHours(0,0,0,0),s.setMonth(3*r)}else"years"===e&&(s.setMonth(0),s.setDate(1),s.setHours(0,0,0,0));return s}getAdjacentDate(t,e,s){var i="next"===s?1:-1;if("seconds"===e)return new Date(t+1e3*i);if("minutes"===e)return new Date(t+6e4*i);if("hours"===e)return new Date(t+36e5*i);var r=new Date(t);return"days"===e?r.setDate(r.getDate()+1*i):"weeks"===e?r.setDate(r.getDate()+7*i):"months"===e?r.setMonth(r.getMonth()+1*i):"quarters"===e?r.setMonth(r.getMonth()+3*i):"years"===e?r.setFullYear(r.getFullYear()+1*i):r.setYear(r.getYear()+1*i),r}}class i extends e.BaseComponentDefaults{constructor(t){super({alta:{backgroundColor:"rgba(255,255,255,0)",borderColor:"#d9dfe3",separatorColor:"#bcc7d2",labelStyle:new e.CSSStyle(e.BaseComponentDefaults.FONT_FAMILY_ALTA_12+"color: #333333;")}},t)}getNoCloneObject(){return{_secondaryAxis:!0,scale:!0,zoomOrder:!0,converter:!0,_resources:{converter:!0,converterVert:!0,defaultDateConverter:!0,defaultDateTimeConverter:!0}}}}class r{parse(t){this._startTime=new Date(t.start),this._endTime=new Date(t.end);var e=this.ParseRootAttributes();return e.inlineStyle=t.style,e.id=t.id,e.shortDesc=t.shortDesc,e.itemPosition=t._ip,e.customTimeScales=t._cts,e.customFormatScales=t._cfs,e.scale=t.scale,e.converter=t.converter,e.zoomOrder=t.zoomOrder?t.zoomOrder:null,e.orientation=t.orientation?t.orientation:"horizontal",e}ParseRootAttributes(){return{start:this._startTime.getTime(),end:this._endTime.getTime()}}}const a={DEFAULT_BORDER_WIDTH:1,DEFAULT_SEPARATOR_WIDTH:1,DEFAULT_INTERVAL_WIDTH:50,DEFAULT_INTERVAL_HEIGHT:21,DEFAULT_INTERVAL_PADDING:4,getAxisStyle:t=>{var e="",s=a.getBackgroudColor(t);return s&&(e=e+"background-color:"+s+";"),(s=a.getBorderColor(t))&&(e=e+"border-color:"+s+";"),(s=a.getBorderWidth())&&(e=e+"border-width:"+s+";"),e},getBackgroudColor:t=>t.backgroundColor,getBorderColor:t=>t.borderColor,getBorderWidth:()=>a.DEFAULT_BORDER_WIDTH,getAxisLabelStyle:t=>t.labelStyle,getSeparatorColor:t=>t.separatorColor,getAxisSeparatorStyle:t=>{var e="",s=a.getSeparatorColor(t);return s&&(e=e+"color:"+s+";"),e},getAxisClass:t=>t._resources?t._resources.axisClass:void 0,getAxisLabelClass:t=>t._resources?t._resources.axisLabelClass:void 0,getAxisDrillableLabelClass:()=>"oj-timeaxis-label-drillable",getAxisSeparatorClass:t=>t._resources?t._resources.axisSeparatorClass:void 0,getHoverClass:()=>"oj-hover",getFocusClass:()=>"oj-focus"},n={supportsTouch:()=>e.Agent.isTouchDevice(),getDatePosition:(t,e,s,i)=>{var r=(s-t)*i,a=e-t;return 0===r||0===a?0:r/a},getPositionDate:(t,e,s,i)=>{var r=s*(e-t);return 0===r||0===i?t:r/i+t},isIntervalContains:(t,e)=>{const[s,i]=t,[r,a]=e;return s<=r&&a<=i}};class o extends e.OutputText{constructor(t,e,s,i,r,n,o,l,h){super(t,e,0,0),this._timeAxis=n,this._isDrillable=o,this._callback=l,this._callbackObj=h,this.intervalStartDate=i,this.intervalEndDate=r,this.nodeType="timeAxisLabel",this.setCSSStyle(s);const g=[a.getAxisLabelClass(n.Options),o?a.getAxisDrillableLabelClass(n.Options):void 0].filter(Boolean).join(" ");g&&this.getElem().setAttribute("class",g),o&&(n.parentComp.getEventManager().associate(this,this),this.setAriaProperty("hidden","false"),this.setAriaRole("button")),this.setupListeners()}isDrillable(){return this._isDrillable}getAxisType(){return this._timeAxis.axisType}OnMouseOver(){const t=a.getHoverClass(this._timeAxis.Options);t&&this.getElem().classList.add(t)}OnMouseOut(){const t=a.getHoverClass(this._timeAxis.Options);t&&this.getElem().classList.remove(t)}OnClick(t){if(this._isDrillable&&this._callback){var e=this._timeAxis.parentComp.getEventManager();const s=e.getFocus();s&&s.hideKeyboardFocusEffect(),this._timeAxis.setLastFocusedLabel(this),this.getCtx().setActiveElement(this),e.setFocus(this),this._callback.call(this._callbackObj,this,t),t.stopPropagation(),t.preventDefault()}}handleKeyboardEvent(t){t.keyCode==e.KeyboardEvent.ENTER&&this._isDrillable&&this._callback&&(this._callback.call(this._callbackObj,this,t),t.stopPropagation(),t.preventDefault())}setupListeners(){this._isDrillable?(this.addEvtListener(e.MouseEvent.MOUSEOVER,this.OnMouseOver,!1,this),this.addEvtListener(e.MouseEvent.MOUSEOUT,this.OnMouseOut,!1,this),this.addEvtListener(e.MouseEvent.CLICK,this.OnClick,{capture:!1},this),this.addEvtListener(e.TouchEvent.TOUCHSTART,this.OnClick,{capture:!1,passive:!1},this)):(this.removeEvtListener(e.MouseEvent.MOUSEOVER,this.OnMouseOver,!1,this),this.removeEvtListener(e.MouseEvent.MOUSEOUT,this.OnMouseOut,!1,this),this.removeEvtListener(e.MouseEvent.CLICK,this.OnClick,{capture:!1},this),this.removeEvtListener(e.TouchEvent.TOUCHSTART,this.OnClick,{capture:!1,passive:!1},this))}getFullTextString(){return this.isTruncated()?this.getUntruncatedTextString():this.getTextString()}identity(){return this._timeAxis._labels.find(t=>t.intervalStartDate.getTime()===this.intervalStartDate.getTime()&&t.intervalEndDate.getTime()===this.intervalEndDate.getTime())}getAriaLabel(){const t=this.getFullTextString(),e=this._timeAxis.parentComp.getMajorAxis();if(e&&this._timeAxis!==e){const s=e.findAttachedAxisLabelIntervalWithTime(this.intervalStartDate.getTime());if(s)return`${t}, ${s.getFullTextString()}`}return t}getNextNavigable(t){var s=e.Agent.isRightToLeft(this.getCtx()),i=this._timeAxis.parentComp.getEventManager();if(t.altKey&&t.keyCode===e.KeyboardEvent.DOWN_ARROW){const t=i.getLastFocusedItem(),e=this._timeAxis.parentComp.getViewPort(),s=this._timeAxis.parentComp.getDataLayoutManager(),r=this.intervalStartDate.getTime(),a=this.intervalEndDate.getTime();if(t){const i=t.getLayoutObject().rowObj,a=i.index;if(a>=e.minRowInd&&a<=e.maxRowInd){const{taskObjs:t}=s.getLayoutObjectsInViewBox({minRowInd:i.index,maxRowInd:i.index,viewStartTime:e.viewStartTime,viewEndTime:e.viewEndTime}),a=s.getClosestTaskLayoutObjToTime(t,r);if(a)return a.node}}const{taskObjs:n}=s.getLayoutObjectsInViewBox(e);if(0===n.length){if(t)return t;const e=i.getKeyboardHandler()?.getDefaultNavigable();return e??this.identity()}const o=s.getTaskLayoutObjectsOverlappingRange(n,r,a,!1),l=s.getClosestTaskLayoutObjToTime(o,r);if(l)return l.node;const h=s.getClosestTaskLayoutObjToTime(n,r);return h?.node??this.identity()}if(t.keyCode===e.KeyboardEvent.UP_ARROW){const t=this._timeAxis.parentComp.getDrillableAxisAbove(this._timeAxis);if(t){const e=t.getLastFocusedLabel();if(e&&(n.isIntervalContains([this.intervalStartDate.getTime(),this.intervalEndDate.getTime()],[e.intervalStartDate.getTime(),e.intervalEndDate.getTime()])||n.isIntervalContains([e.intervalStartDate.getTime(),e.intervalEndDate.getTime()],[this.intervalStartDate.getTime(),this.intervalEndDate.getTime()])))return e.identity();const s=t.getAxisLabelIntervalWithTime(this.intervalStartDate.getTime());if(s)return s}}if(t.keyCode===e.KeyboardEvent.DOWN_ARROW){const t=this._timeAxis.parentComp.getDrillableAxisBelow(this._timeAxis);if(t){const e=t.getLastFocusedLabel();if(e&&(n.isIntervalContains([this.intervalStartDate.getTime(),this.intervalEndDate.getTime()],[e.intervalStartDate.getTime(),e.intervalEndDate.getTime()])||n.isIntervalContains([e.intervalStartDate.getTime(),e.intervalEndDate.getTime()],[this.intervalStartDate.getTime(),this.intervalEndDate.getTime()])))return e.identity();const s=t.getAxisLabelIntervalWithTime(this.intervalStartDate.getTime());if(s)return s}}if(!s&&t.keyCode===e.KeyboardEvent.RIGHT_ARROW||s&&t.keyCode===e.KeyboardEvent.LEFT_ARROW){const t=this._timeAxis.getAxisLabelIntervalWithTime(this.intervalEndDate.getTime());if(t)return t}if(!s&&t.keyCode===e.KeyboardEvent.LEFT_ARROW||s&&t.keyCode===e.KeyboardEvent.RIGHT_ARROW){const t=this._timeAxis.getAxisLabelIntervalWithTime(this.intervalStartDate.getTime()-1);if(t)return t}return this.identity()}getTargetElem(){return this.getElem()}getKeyboardBoundingBox(t){return this.getDimensions(t)}showKeyboardFocusEffect(){this._isShowingKeyboardFocusEffect=!0;const t=a.getFocusClass(this._timeAxis.Options);t&&this.getElem().classList.add(t),this._timeAxis.setLastFocusedLabel(this),this.getCtx().setActiveElement(this)}hideKeyboardFocusEffect(){const t=a.getFocusClass(this._timeAxis.Options);t&&this.getElem().classList.remove(t),this._isShowingKeyboardFocusEffect=!1}isShowingKeyboardFocusEffect(){return this._isShowingKeyboardFocusEffect}}const l={renderTimeAxis:(t,s,i,r,a,o)=>{if(!t.hasValidOptions())return;const h=()=>{t.removeChildren(),t._labels=[],l._renderBackground(t);const o=new e.Container(t.getCtx()),h=t.getViewportDates(t.getScale(),s,i),g=h.map(e=>({date:e,pos:n.getDatePosition(t._start,t._end,e.getTime(),t._contentLength)})),c=t.getDateLabelTexts(h,t.getScale()).slice(0,h.length-1),d=l._renderLabels(o,t,g,c,a);t._labels=d,t._axis.addChild(o);const _=l._renderReferenceObjects(o,t,r,g,d);let m=h,u=!1;const T=t.Options._secondaryAxis;let v=T?T.getViewportDates(T.getScale(),s,i):[];if(T&&"alta"!==t.getCtx().getThemeBehavior()){const t=h,e=new Set(v.map(t=>t.getTime())),r=new Set(t.map(t=>t.getTime()));u=0===v.filter(t=>t.getTime()>s&&t.getTime()<i&&!r.has(t.getTime())).length,m=u?t.filter(t=>!e.has(t.getTime())):t}const p=m.filter(t=>!_.has(t.getTime())).map(e=>({date:e,pos:n.getDatePosition(t._start,t._end,e.getTime(),t._contentLength)}));if(l._renderTicks(o,t,p),u){const e=v.filter(t=>!_.has(t.getTime())).map(e=>({date:e,pos:n.getDatePosition(t._start,t._end,e.getTime(),t._contentLength)}));l._renderTicks(o,T,e)}};o?t.__isRendering||(requestAnimationFrame(()=>{h(),t.__isRendering=!1}),t.__isRendering=!0):h()},_renderBackground:t=>{const s=t.getSize(),i=t.getCtx();t._axis&&t._axis.setClipPath(null);const r=new e.ClipPath;t.isVertical()?(t._axis=new e.Path(i,e.PathUtils.roundedRectangle(0,-t.getBorderWidth("top"),s,t.getAxisLength(),0,0,0,0),"axis"),r.addRect(0,0,s,t._contentLength)):(t._axis=new e.Path(i,e.PathUtils.roundedRectangle(-t.getBorderWidth("left"),0,t.getAxisLength(),s,0,0,0,0),"axis"),r.addRect(0,0,t._contentLength,s)),t._axis.setCSSStyle(t._axisStyle);const n=t._axis.getElem();let o=t._axisStyle.getStyle("background-color");o&&e.ToolkitUtils.setAttrNullNS(n,"fill",o),o=t._axisStyle.getStyle("border-color"),o&&e.ToolkitUtils.setAttrNullNS(n,"stroke",o),o=t._axisStyle.getStyle("border-width"),o&&e.ToolkitUtils.setAttrNullNS(n,"stroke-width",o),t._axis.setPixelHinting(!0),t._axis.setClipPath(r),t.addChild(t._axis);const l=a.getAxisClass(t.Options)||"";t._axis.getElem().setAttribute("class",l),t._axis.getElem().setAttribute("stroke-dasharray",t.calcStrokeDashArray())},_renderTicks:(t,s,i)=>{const r=s.getCtx(),n=e.Agent.isRightToLeft(r),o=s.isVertical()?s.getBorderWidth("left"):s.getBorderWidth("top"),l=o+s.getContentSize();let h="";for(let t=0;t<i.length;t++){let r=i[t].pos;s.isVertical()?h+=e.PathUtils.moveTo(o,r)+e.PathUtils.horizontalLineTo(l):n?(r=s._contentLength-r,t===i.length-1&&(r=Math.round(r)+.5),h+=e.PathUtils.moveTo(r,o)+e.PathUtils.verticalLineTo(l)):(0===t&&(r=Math.round(r)+.5),h+=e.PathUtils.moveTo(r,o)+e.PathUtils.verticalLineTo(l))}const g=new e.Path(s.getCtx(),h),c=new e.CSSStyle(a.getAxisSeparatorStyle(s.Options));g.setStroke(new e.Stroke(c.getStyle(e.CSSStyle.COLOR))),g.setPixelHinting(!0);const d=a.getAxisSeparatorClass(s.Options)||"";g.getElem().setAttribute("class",d),t.addChild(g)},_renderLabels:(t,s,i,r,n)=>{const l=s.getCtx(),h=s.isVertical()?s.getBorderWidth("left"):s.getBorderWidth("top"),g=h+s.getContentSize(),c=e.Agent.isRightToLeft(l),d=a.getAxisLabelStyle(s.Options),_=s.getScale(),m=s.Options._scaleLabelPosition[s.isTimeComponentScale(_)?_.name:_],u=s.Options._labelAlignment[s.isVertical()?"vertical":"horizontal"],T=s.parentComp&&s.parentComp.getEventManager(),v=[];for(let _=0;_<i.length-1;_++){const p=i[_],D=i[_+1],S=p.pos,x=D.pos,L=new o(l,r[_],d,p.date,D.date,s,n,T?T.processDrillEvent:void 0,T);v.push(L);const f=!c||s.isVertical()?S+(x-S)/2:s._contentLength-(S+(x-S)/2),C=h+(g-h)/2;let A,b=s.isVertical()?f:C;if("start"===m)s.isVertical()?(A=C,L.alignCenter()):c?(A=s._contentLength-(S+a.DEFAULT_INTERVAL_PADDING),L.alignRight()):(A=S+a.DEFAULT_INTERVAL_PADDING,L.alignLeft());else A=s.isVertical()?C:f,L.alignCenter();if(L.setX(A),"top"===u)L.setY(h+(n?1:0));else e.TextUtils.centerTextVertically(L,b);const O=s.getContentSize(),E=x-S,y=s.isVertical()?O:E,w=s.isVertical()?E:O;if(e.TextUtils.fitText(L,y,w,t),!s.isVertical())if(0===_&&i[_].date.getTime()<s._start){L.isTruncated()&&L.setTextString(L.getUntruncatedTextString());const i=L.getDimensions().w;let r;if("start"===m)r=x-Math.max(0,x-S-i-2*a.DEFAULT_INTERVAL_PADDING);else r=x-Math.max(0,(x-S-i)/2);const n=Math.max(0,r);c?(L.alignLeft(),L.setX(s._contentLength-n)):(L.alignRight(),L.setX(n));const o=e.TextUtils.fitText(L,r,w,t);if(L.isTruncated()&&o){const t=L.getTextString(),s=L.getUntruncatedTextString();if(t!==s){const t=L.getTextString().length-1,i=s.length,r=Math.max(0,i-t),a=e.OutputText.ELLIPSIS+s.substring(r,i);L.setTextString(a)}}}else if(_===i.length-2&&i[_+1].date.getTime()>s._end){let i,r;if(L.isTruncated()&&L.setTextString(L.getUntruncatedTextString()),"start"===m)i=s._contentLength-S-2*a.DEFAULT_INTERVAL_PADDING,r=S+a.DEFAULT_INTERVAL_PADDING;else{const t=L.getDimensions().w;i=s._contentLength-S-Math.max(0,(x-S-t)/2),r=Math.max(S,S+(x-S)/2-t/2)}c?(L.alignRight(),L.setX(s._contentLength-r)):(L.alignLeft(),L.setX(r)),e.TextUtils.fitText(L,i,w,t)}if(L.isTruncated()&&T){const t=L.getUntruncatedTextString();T.associate(L,new e.SimpleObjPeer(t))}}return v},_renderReferenceObjects:(t,s,i,r,o)=>{if(s.isVertical())return new Set;const l=s.getCtx(),h=e.Agent.isRightToLeft(l),g=0+s.getContentSize(),c=i.defaultStyleClass||"",d=a.getAxisLabelStyle(s.Options),_=a.getAxisLabelClass(s.Options)||"",m=s.Options._labelAlignment.horizontal,u=i.referenceObjects.filter(t=>{const e="area"!==t.type,s=null!=t.value&&!isNaN(new Date(t.value).getTime()),i=t.label&&""!==t.label.length;return e&&s&&i}),T=[];u.forEach(r=>{let o=n.getDatePosition(s._start,s._end,new Date(r.value).getTime(),s._contentLength);h&&(o=s._contentLength-o);const u=new e.Line(l,o,0,o,g),v=r.svgStyle,p=r.svgClassName||"";null!=v&&u.setStyle(v),u.setClassName(c+" "+p,!0),i.defaultStroke&&u.setStroke(i.defaultStroke),u.setPixelHinting(!0),t.addChild(u);const D=h?o-a.DEFAULT_INTERVAL_PADDING:o+a.DEFAULT_INTERVAL_PADDING,S=new e.OutputText(l,r.label,D,0);S.setCSSStyle(d),S.getElem().setAttribute("class",_);const x=window.getComputedStyle(u.getElem()).getPropertyValue("stroke");S.setStyle({fill:x}),h?S.alignRight():S.alignLeft();const L=0+(g-0)/2;if("top"===m)S.setY(0);else e.TextUtils.centerTextVertically(S,L);t.addChild(S),T.push(S)});const v=[];return T.forEach(t=>{const e=t.getDimensions();o.forEach(t=>{const s=t.getDimensions();e.intersects(s)&&t.removeFromParent()}),r.forEach(t=>{const i=h?s._contentLength-t.pos:t.pos;i>=e.x&&i<=e.x+e.w&&v.push(t.date.getTime())})}),new Set(v)}};class h extends e.BaseComponent{constructor(t,e,r){super(t,e,r),this._calendar=new s,this._borderWidth=a.DEFAULT_BORDER_WIDTH,this.setBorderVisibility(!1,!1,!1,!1),this._dateToIsoWithTimeZoneConverter=t.getLocaleHelpers().dateToIsoWithTimeZoneConverter,this.Defaults=new i(t)}SetOptions(t){this.Options=this.Defaults.calcOptions(t)}Parse(t){return this._parser=new r,this._parser.parse(t)}_applyParsedProperties(t){var e=t.orientation;this._isVertical=!(!e||"vertical"!==e),this.setIsVertical(this._isVertical),this._shortDesc=t.shortDesc,this._zoomOrder=t.zoomOrder?t.zoomOrder.slice().reverse():[t.scale],this._customTimeScales=t.customTimeScales,this._customFormatScales=t.customFormatScales,this._start=t.start,this._end=t.end,this._inlineStyle=t.inlineStyle,this._scale=t.scale,this._converter=t.converter,this.applyStyleValues()}setContentLength(t,e){null==e&&(e=this._canvasLength),this._contentLength=e<t?t:e}getAxisLength(){return this._axisLength}isRTL(){return e.Agent.isRightToLeft(this.getCtx())}isVertical(){return this._isVertical}render(t,e,s){var i=t&&null==t._viewStartTime,r=null==t;this.Width=e,this.Height=s,this._prepareCanvasViewport(),i&&this.getPreferredLength(t,this._canvasLength),this.setContentLength(this._canvasLength),this._setAxisDimensions(),this.parentComp=t?t._parentComp:null,this.axisType=t?t._type:null;var a=t&&t._viewStartTime?t._viewStartTime:this._start,n=t&&t._viewEndTime?t._viewEndTime:this._end,o=t&&t._referenceObjects?t._referenceObjects:{referenceObjects:[]},h=t&&t._throttle||!1,g=!!(t&&t._isDrillable&&this.parentComp);l.renderTimeAxis(this,a,n,o,g,h),(i||r)&&this.RenderComplete()}hasValidOptions(){var t=this._scale&&(-1!==h.VALID_SCALES.indexOf(this._scale)||this.isTimeComponentScale(this._scale)),e=this._scale&&this._customTimeScales&&this._customTimeScales[this._scale],s=this._start&&this._end&&this._end>this._start;return(t||e)&&s}isTimeComponentScale(t){return null!=t.getNextDate&&null!=t.getPreviousDate&&null!=t.formatter&&null!=t.name}isEqualScale(t,e){return t===e||null!=t.name&&null!=e&&t.name===e.name}applyStyleValues(){this._axisStyle=new e.CSSStyle(a.getAxisStyle(this.Options)),this._axisStyle.parseInlineStyle(this._inlineStyle);var t=this._axisStyle.getBorderWidth(),s="border:"+2*t+"px;";this._axisStyle.parseInlineStyle(s),this.setBorderWidth(t)}_prepareCanvasViewport(){this._isVertical?(this._canvasLength=this.Height,this._canvasSize=this.Width):(this._canvasLength=this.Width,this._canvasSize=this.Height)}_setAxisDimensions(){null!==this._canvasSize&&this.setContentSize(this._canvasSize-this.getSizeBorderWidth()),this._axisLength=this._contentLength+this.getSizeBorderWidth()-a.DEFAULT_SEPARATOR_WIDTH}getPreferredLength(t,e){this.SetOptions(t),this._resources=this.Options._resources?this.Options._resources:[],this._locale=this.Options._locale?this.Options._locale:"en-US";var s=this._resources.firstDayOfWeek?this._resources.firstDayOfWeek:0;this._calendar.setFirstDayOfWeek(s),this._dateToIsoWithTimeZoneConverter||(this._dateToIsoWithTimeZoneConverter=this.getCtx().getLocaleHelpers().dateToIsoWithTimeZoneConverter);var i=this.Parse(this.Options);if(this._applyParsedProperties(i),this.hasValidOptions()){this.setConverter(this._converter),this._isVertical?this.setDefaultConverter(this._resources.converterVert):this.setDefaultConverter(this._resources.converter),this._zoomLevelLengths=this._zoomOrder.map(()=>0);var r=this._zoomOrder.map((t,e)=>e),a=this._isVertical?{type:"range",params:{startTime:this._start,endTime:this._end}}:{type:"sparse",params:{numSections:4,numIntervalsPerSection:10}};this._maxContentLength=e,this.updateDimensions(r,a,e),null!==this._canvasSize&&(this._zoomLevelLengths[this._zoomLevelOrder]=e)}return this._contentLength}updateDimensions(t,e,s){for(var i=0;i<t.length;i++){var r=t[i];if(r>=0&&r<this._zoomOrder.length){var a,n=this._zoomOrder[r];if(this.isEqualScale(n,this._scale)&&(this._zoomLevelOrder=r),"sparse"===e.type){a=this._sampleIntervals(n,e.params.numSections,e.params.numIntervalsPerSection);var o=Object.keys(a),l=o.reduce((t,e)=>t+(a[e]-e),0)/o.length,h=(this._end-this._start)/l;this._maxContentLength=Math.max(this._maxContentLength,h*s)}else{a={};for(var g=this.getViewportDates(n,e.params.startTime,e.params.endTime),c=0;c<g.length-1;c++)a[g[c].getTime()]=g[c+1].getTime();this._maxContentLength=Math.max(this._maxContentLength,Object.keys(a).length*s)}this._updateZoomLevelLength(r,a)}}this.setContentLength(this._zoomLevelLengths[this._zoomLevelOrder],s)}_updateZoomLevelLength(t,s){var i=this.getCtx(),r=a.getAxisLabelStyle(this.Options),n=2*a.DEFAULT_INTERVAL_PADDING,o=e.TextUtils.getTextStringHeight(this.getCtx(),r)+n,l=this._zoomOrder[t],h=a.DEFAULT_INTERVAL_WIDTH,g=1/0,c=1/0;Object.keys(s).forEach(t=>{var a=s[t],d=this.formatDate(new Date(a),null,"axis",l),_=e.TextUtils.getTextStringWidth(i,d,r)+n;h=Math.max(h,_),g=Math.min(g,(a-t)/h),c=Math.min(c,(a-t)/o)});var d=this._isVertical?c:g,_=(this._end-this._start)/d;this._zoomLevelLengths[t]=_,this.setContentSize(this._isVertical?h:o)}_sampleIntervals(t,e,s){for(var i={},r=Math.floor((this._end-this._start)/e),a=0;a<e;a++){for(var n=this._start+r*a,o=Math.min(this._start+r*(a+1),this._end),l=this.adjustDate(n,t).getTime(),h=0;h<s&&!(l>=o);h++){var g=this.getNextDate(l,t).getTime();i[l]=g,l=g}i[l=this.adjustDate(o-1,t).getTime()]=this.getNextDate(l,t).getTime()}return i}getViewportDates(t,e,s){const i=[this.adjustDate(e,t)];for(;i[i.length-1].getTime()<s;)i.push(this.getNextDate(i[i.length-1].getTime(),t));return i}getDateLabelTexts(t,e){return t.map(t=>this.formatDate(t,null,"axis",e))}findAttachedAxisLabelIntervalWithTime(t){if(0!==this._labels.length)return this._labels.find(e=>e.intervalStartDate.getTime()<=t&&t<e.intervalEndDate.getTime())}getAxisLabelIntervalWithTime(t){if(0===this._labels.length)return null;const e=(t,e)=>{const{x:s,w:i}=this.parentComp.getViewportDimensions();return n.isIntervalContains([s,s+i],[t,t+e])},s=()=>{let s=this.findAttachedAxisLabelIntervalWithTime(t);if(!s)return;const{x:i,w:r}=s.getDimensions();return e(i,r)?s:(this.parentComp.scrollPosIntervalIntoView(i,r),s=this.findAttachedAxisLabelIntervalWithTime(t),s&&e(i,r)?s:void 0)};let i=s();if(i)return i;const r=this.adjustDate(t),a=this.getNextDate(t);return r.getTime()>=this._end||a.getTime()<=this._start?void 0:(this.parentComp.scrollTimeIntervalIntoView(r,a,"end"),this.parentComp.scrollTimeIntervalIntoView(r,a,"start"),i=s(),i||this._labels.toSorted((t,e)=>t.intervalStartDate.getTime()-e.intervalStartDate.getTime()).find(s=>{if(s.intervalEndDate.getTime()>=t){const{x:t,w:i}=s.getDimensions();return e(t,i)}return!1}))}setScale(t){this._scale=t}getScale(){return this._scale}increaseScale(){for(var t=0;t<this._zoomOrder.length-1;t++)if(this.isEqualScale(this._zoomOrder[t],this._scale))return this._scale=this._zoomOrder[t+1],!0;return!1}decreaseScale(){for(var t=1;t<this._zoomOrder.length;t++)if(this._zoomOrder[t]===this._scale)return this._scale=this._zoomOrder[t-1],!0;return!1}setConverter(t){this._converter=t}setDefaultConverter(t){this._defaultConverter=t}getContentSize(){return this._contentSize}setContentSize(t){t>this._contentSize&&(this._contentSize=t)}setBorderWidth(t){this._borderWidth=t}setBorderVisibility(t,e,s,i){this._borderTopWidth=(0|t)*this._borderWidth,this._borderRightWidth=(0|e)*this._borderWidth,this._borderBottomWidth=(0|s)*this._borderWidth,this._borderLeftWidth=(0|i)*this._borderWidth}calcStrokeDashArray(){if(this._isVertical)var t={top:this.getSize(),right:this.getAxisLength(),bottom:this.getSize(),left:this.getAxisLength()};else t={top:this.getAxisLength(),right:this.getSize(),bottom:this.getAxisLength(),left:this.getSize()};for(var e=[],s=0,i=!0,r=["top","right","bottom","left"],a=0;a<r.length;a++){this.getBorderWidth(r[a])>0===i?s+=t[r[a]]:(e.push(s),s=t[r[a]],i=!i)}return e.push(s),e.toString()}getSizeBorderWidth(){return this._borderTopWidth+this._borderBottomWidth}getBorderWidth(t){switch(t){case"top":return this._borderTopWidth;case"right":return this._borderRightWidth;case"bottom":return this._borderBottomWidth;case"left":return this._borderLeftWidth;default:return this._borderWidth}}getSize(){return this._contentSize+this.getSizeBorderWidth()}adjustDate(t,e){var s=e||this._scale;return this.isTimeComponentScale(s)?new Date(s.getPreviousDate(new Date(t))):this._calendar.adjustDate(new Date(t),s)}getNextDate(t,e){var s=e||this._scale;return this.isTimeComponentScale(s)?new Date(s.getNextDate(new Date(t))):this.getAdjacentDate(t,s,"next")}getAdjacentDate(t,e,s){var i=e||this._scale;if(this.isTimeComponentScale(i)){let e=new Date(i.getNextDate(new Date(t)));return"next"===s?e:new Date(2*t-e)}return this._calendar.getAdjacentDate(t,e,s)}formatDate(t,e,s,i){s=s||"axis";var r=this._dateToIsoWithTimeZoneConverter?this._dateToIsoWithTimeZoneConverter(t):t;if("general"===s&&e)return e.format(r);var a=i||this.getScale();if(this.isTimeComponentScale(a))return a.formatter(r);if("axis"===s)(e=e||this._converter)&&(e[a]?e=e[a]:e.default&&(e=e.default)),e&&e.format||!this._defaultConverter||!this._defaultConverter[a]||(e=this._defaultConverter[a]);else if(!e){var n=this._resources.defaultDateTimeConverter,o=this._resources.defaultDateConverter;e="hours"===a||"minutes"===a||"seconds"===a?n:o}return e.format(r)}getZoomOrder(){return this._zoomOrder}setIsVertical(t){this._contentSize=t?a.DEFAULT_INTERVAL_WIDTH:a.DEFAULT_INTERVAL_HEIGHT}setCanvasSize(t){this._canvasSize=t}getZoomLevelLengths(){return this._zoomLevelLengths}getMaxContentLength(){return this._maxContentLength}getZoomLevelOrder(){return this._zoomLevelOrder}setZoomLevelOrder(t){this._zoomLevelOrder=t}getLastFocusedLabel(){return this._lastFocusedLabel}setLastFocusedLabel(t){this._lastFocusedLabel=t}}h.VALID_SCALES=["seconds","minutes","hours","days","weeks","months","quarters","years"],t.TimeAxis=h,t.TimeAxisUtils=n,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojtimeaxis-toolkit.js.map