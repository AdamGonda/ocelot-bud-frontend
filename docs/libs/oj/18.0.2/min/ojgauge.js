/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcomponentcore","ojs/ojcore-base","ojs/ojdvt-base","jquery","ojs/ojlogger","ojs/ojconverterutils-i18n","ojs/ojconverter-number","ojs/ojlabelledbyutils","ojs/ojgauge-toolkit"],function(e,t,r,a,s,n,o,i,l){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var u={properties:{borderColor:{type:"string"},color:{type:"string"},label:{type:"object",properties:{style:{type:"object",value:{}},text:{type:"string",value:""}}},markerSize:{type:"string",enumValues:["fit","lg","md","sm"],value:"fit"},max:{type:"number",value:100},metricLabel:{type:"object",properties:{converter:{type:"object"},rendered:{type:"string",enumValues:["off","on"],value:"off"},scaling:{type:"string",enumValues:["auto","billion","million","none","quadrillion","thousand","trillion"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""},textType:{type:"string",enumValues:["number","percent"],value:"number"}}},min:{type:"number",value:0},rotation:{type:"number",enumValues:["0","180","270","90"],value:0},size:{type:"number",value:1},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},type:{type:"string",value:"circle"},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{getMetricLabel:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};!function(){u.extension._WIDGET_NAME="ojLedGauge";t.CustomElementBridge.register("oj-led-gauge",{metadata:u,parseFunction:r.shapeParseFunction({type:!0},{arrow:!0,square:!0,rectangle:!0,circle:!0,diamond:!0,triangle:!0,human:!0,star:!0})})}();var p={properties:{changed:{type:"boolean",writeback:!0,value:!1},changedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},hoverState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},labelledBy:{type:"string"},max:{type:"number",value:5},min:{type:"number",value:0},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},preserveAspectRatio:{type:"string",enumValues:["meet","none"],value:"meet"},readonly:{type:"boolean",value:!1},selectedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},size:{type:"string",enumValues:["fit","large","lg","md","medium","sm","small"],value:"fit"},step:{type:"number",value:1},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},transientValue:{type:"number",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},unselectedState:{type:"object",properties:{borderColor:{type:"string",value:""},color:{type:"string"},shape:{type:"string",value:"star"},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};!function(){p.extension._WIDGET_NAME="ojRatingGauge",p.extension._ALIASED_PROPS={transientValue:"rawValue"};var e=/\d/,r={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0},a={circle:!0,square:!0,diamond:!0,triangle:!0,human:!0,star:!0,dot:!0,none:!0},s={"changed-state.shape":!0,"hover-state.shape":!0,"selected-state.shape":!0,"unselected-state.shape":!0};t.CustomElementBridge.register("oj-rating-gauge",{metadata:p,parseFunction:function(t,n,o,i){if(s[n]||"unselected-state.shape"===n){if(e.test(t))return t;if(s[n]&&!r[n])throw new Error("Found: "+t+". Expected: "+r.toString());if("unselected-state.shape"!==n||a[n])return t;throw new Error("Found: "+t+". Expected: "+a.toString())}return i(t)}})}();var g={properties:{angleExtent:{type:"number",value:360},animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},borderColor:{type:"string"},borderRadius:{type:"string",value:"auto"},center:{type:"object",properties:{renderer:{type:"function"}}},color:{type:"string"},describedBy:{type:"string"},indicatorSize:{type:"number",value:1},innerRadius:{type:"number",value:.7},label:{type:"object",properties:{position:{type:"string",enumValues:["auto","center","start"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""}}},labelledBy:{type:"string"},max:{type:"number",value:100},metricLabel:{type:"object",properties:{converter:{type:"object"},position:{type:"string",enumValues:["auto","center","insideIndicatorEdge","outsideIndicatorEdge","outsidePlotArea","withLabel"],value:"auto"},rendered:{type:"string",enumValues:["auto","off","on"],value:"auto"},scaling:{type:"string",enumValues:["auto","billion","million","none","quadrillion","thousand","trillion"],value:"auto"},style:{type:"object",value:{}},text:{type:"string",value:""},textType:{type:"string",enumValues:["number","percent"],value:"number"}}},min:{type:"number",value:0},orientation:{type:"string",enumValues:["circular","horizontal","vertical"],value:"horizontal"},plotArea:{type:"object",properties:{borderColor:{type:"string"},borderRadius:{type:"string",value:"auto"},color:{type:"string"},rendered:{type:"string",enumValues:["auto","off","on"],value:"auto"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},readonly:{type:"boolean",value:!1},referenceLines:{type:"Array<Object>",value:[]},size:{type:"string",enumValues:["fit","lg","md","sm"],value:"fit"},startAngle:{type:"number",value:90},step:{type:"number"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},thresholdDisplay:{type:"string",enumValues:["all","currentOnly","onIndicator"],value:"onIndicator"},thresholds:{type:"Array<Object>",value:[]},tooltip:{type:"object",properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},transientValue:{type:"number",writeback:!0,readOnly:!0},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},value:{type:"number",writeback:!0},visualEffects:{type:"string",enumValues:["auto","none"],value:"auto"}},methods:{getMetricLabel:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};g.extension._WIDGET_NAME="ojStatusMeterGauge",g.extension._ALIASED_PROPS={transientValue:"rawValue"},t.CustomElementBridge.register("oj-status-meter-gauge",{metadata:g}),t.__registerWidget("oj.dvtBaseGauge",a.oj.dvtBaseComponent,{_labelledByUpdatedForSet:i._labelledByUpdatedForSet,_describedByUpdated:i._describedByUpdated,_ComponentCreate:function(){this._SetSizeClass(),this._super(),this._SetLocaleHelpers(o,n)},_OptionChangeHandler:function(e){this._SetSizeClass(),this._super(e)},_GetSizeClass:function(){},_SetSizeClass:function(){var e=this._GetSizeClass();e!==this._sizeClass&&(this.element.removeClass(this._sizeClass),this._sizeClass=e,this.element.addClass(e))},_ProcessStyles:function(e){var t=e;this._super(t),t._thresholdColors=[t._threshold1,t._threshold2,t._threshold3],t._threshold1=null,t._threshold2=null,t._threshold3=null},_AfterCreate:function(){this._super();if(this.option("rawValue",this.options.value,{_context:{writeback:!0,internalSet:!0,readOnly:!0}}),this._SupportsOjLabel()){var e=this.options.labelledBy,t=this.options.describedBy;this._labelledByUpdatedForSet(this.element[0].id,null,e,this.element),this._describedByUpdated(null,t,this.element)}},_GetContentElement:function(){return this.element},_GetChildStyleClasses:function(){var e=this._super();return e["oj-gauge-metric-label"]={path:"metricLabel/style",property:"TEXT"},e["oj-gauge-label"]={path:"label/style",property:"TEXT"},e["oj-gauge-threshold1"]={path:"_threshold1",property:"color"},e["oj-gauge-threshold2"]={path:"_threshold2",property:"color"},e["oj-gauge-threshold3"]={path:"_threshold3",property:"color"},e},_GetEventTypes:function(){return["input","optionChange"]},_HandleEvent:function(e){if("valueChange"===e.type){var t=e.newValue;e.complete?this._UserOptionChange("value",t):(this._trigger("input",null,{value:t}),this._UserOptionChange("rawValue",t))}else this._super(e)},_SupportsOjLabel:function(){return!1},_setOption:function(e,t,r){var a=this.options[e];if("rawValue"!==e){if("value"===e){this.option("rawValue",t,{_context:{writeback:!0,internalSet:!0,readOnly:!0}})}var n;if(this._SupportsOjLabel())"labelledBy"===e&&(n=this.element,this._labelledByUpdatedForSet(n[0].id,a,t,n)),"describedBy"===e&&this._describedByUpdated(a,t);this._super(e,t,r)}else s.error("'rawValue' is a read-only option and cannot be set")},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-ledgauge-tooltip"!==t&&"oj-ratinggauge-tooltip"!==t&&"oj-statusmetergauge-tooltip"!==t||(t="tooltip"),"oj-ratinggauge-item"===t&&null!=e.index&&(t="item["+e.index+"]"),t}},!0),t.__registerWidget("oj.ojLedGauge",a.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{borderColor:"",color:"#393737",label:{style:{},text:""},metricLabel:{converter:null,rendered:"off",scaling:"auto",style:{},text:"",textType:"number"},markerSize:"fit",max:100,min:0,rotation:0,size:1,svgClassName:"",svgStyle:{},thresholds:[],tooltip:{renderer:null},type:"circle",value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),new l.LedGauge(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e&&(t.subId="oj-ledgauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ledgauge"),e.push(this._sizeClass),e},_GetSizeClass:function(){return`oj-ledgauge-${this.options.markerSize}`},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}});const d="oj-rating-gauge-fit";t.__registerWidget("oj.ojRatingGauge",a.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{changed:!1,changedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},hoverState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},labelledBy:null,describedBy:null,max:5,min:0,orientation:"horizontal",preserveAspectRatio:"meet",rawValue:null,readonly:!1,disabled:!1,size:"fit",selectedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},step:1,thresholds:[],tooltip:{renderer:null},unselectedState:{borderColor:"",color:"",shape:"star",source:"",svgClassName:"",svgStyle:{}},value:null,visualEffects:"auto"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),new l.RatingGauge(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e?t.subId="oj-ratinggauge-tooltip":0===e.indexOf("item")&&(t.subId="oj-ratinggauge-item",t.index=this._GetFirstIndex(e)),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-ratinggauge"),"fit"===this.options.size&&e.push(d),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-rating-gauge-hover"]=[{path:"hoverState/color",property:"fill"},{path:"hoverState/borderColor",property:"stroke"}],e["oj-rating-gauge-selected "+(this.options.readonly?"oj-rating-gauge-readonly":"")]=[{path:"selectedState/color",property:"fill"},{path:"selectedState/borderColor",property:"stroke"}],e["oj-rating-gauge-unselected "+(this.options.readonly?"oj-rating-gauge-readonly":"")]=[{path:"unselectedState/color",property:"fill"},{path:"unselectedState/borderColor",property:"stroke"}],e["oj-rating-gauge-changed"]=[{path:"changedState/color",property:"fill"},{path:"changedState/borderColor",property:"stroke"}],e["oj-rating-gauge-shape-sm"]={path:"_shapeSize/sm",property:"width"},e["oj-rating-gauge-shape-md"]={path:"_shapeSize/md",property:"width"},e["oj-rating-gauge-shape-lg"]={path:"_shapeSize/lg",property:"width"},e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},_SupportsOjLabel:function(){return this._IsCustomElement()},_GetTranslationsSectionName:function(){return"oj-ojRatingGauge"},_ProcessStyles:function(e){var t=e;this._super(t);var r={small:"sm",medium:"md",large:"lg"}[t.size]||t.size;if("fit"!==r){var a=parseInt(t._shapeSize[r],10),s="horizontal"===t.orientation;t._width=s?a*t.max:a,t._height=s?a:a*t.max,this._width=t._width,this._height=t._height}},_ProcessOptions:function(){this._super(),"fit"===this.options.size?this.element.addClass(d):this.element.removeClass(d)},_UserOptionChange:function(e,t){this._superApply(arguments),"value"===e&&this._UserOptionChange("changed",!0)}}),t.__registerWidget("oj.ojStatusMeterGauge",a.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{angleExtent:360,animationOnDataChange:"none",animationOnDisplay:"none",animationDuration:void 0,borderColor:"",borderRadius:"auto",center:{renderer:null},color:"#393737",indicatorSize:1,innerRadius:.7,label:{position:"auto",style:{},text:""},labelledBy:null,describedBy:null,max:100,metricLabel:{converter:null,position:"auto",rendered:"auto",scaling:"auto",style:{},text:"",textType:"number"},min:0,orientation:"horizontal",size:"fit",plotArea:{borderColor:void 0,borderRadius:"auto",color:void 0,rendered:"auto",svgClassName:"",svgStyle:{}},rawValue:null,readonly:!1,referenceLines:[],startAngle:90,step:null,svgClassName:"",svgStyle:{},tooltip:{renderer:null},thresholdDisplay:"onIndicator",thresholds:[],value:null,visualEffects:"auto"},_GetTranslationsSectionName:function(){return"oj-ojStatusMeterGauge"},_CreateDvtComponent:function(e,t,r){return this._focusable({element:this.element,applyHighlight:!0}),new l.StatusMeterGauge(e,t,r)},_ConvertSubIdToLocator:function(e){var t={};return"tooltip"===e&&(t.subId="oj-statusmetergauge-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-statusmetergauge"),e.push(this._sizeClass),e},_GetSizeClass:function(){return`oj-statusmetergauge-${this.options.orientation}-${this.options.size}`},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"},{path:"center/renderer",slot:"centerTemplate"}]},_SupportsOjLabel:function(){return this._IsCustomElement()},_ProcessOptions:function(){this._super();var e=this.options.center;e&&e._renderer&&(e.renderer=this._GetTemplateRenderer(e._renderer,"center"))},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-statusmetergauge"]={path:"animationDuration",property:"ANIM_DUR"},e["oj-statusmeter-gauge-plotarea"]=[{path:"plotArea/borderColor",property:"border-color"},{path:"plotArea/color",property:"color"}],e},_Render:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title")),this._super()},getMetricLabel:function(){return this._component.getAutomation().getMetricLabel()}})});
//# sourceMappingURL=ojgauge.js.map