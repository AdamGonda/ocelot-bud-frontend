/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojcomponentcore","ojs/ojtime-base","ojs/ojkeyset","ojs/ojtimeline-toolkit","ojs/ojconverter-datetime","ojs/ojdvttimecomponentscale","ojs/ojkeyboardfocus-utils"],function(e,t,o,r,i,n,s,l,a){"use strict";var p;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,(p={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},data:{type:"object",extension:{webelement:{exceptionStatus:[{type:"unsupported",since:"13.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},dnd:{type:"object",properties:{move:{type:"object",properties:{items:{type:"string",enumValues:["disabled","enabled"],value:"disabled"}}}}},end:{type:"string",value:""},itemDefaults:{type:"object",properties:{feelers:{type:"string",enumValues:["off","on"],value:"off"},resizable:{type:"string",enumValues:["disabled","enabled"],value:"disabled"}}},majorAxis:{type:"object",properties:{converter:{type:"object",properties:{days:{type:"object"},default:{type:"object"},hours:{type:"object"},minutes:{type:"object"},months:{type:"object"},quarters:{type:"object"},seconds:{type:"object"},weeks:{type:"object"},years:{type:"object"}}},scale:{type:"string|DvtTimeComponentScale",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},svgStyle:{type:"object",value:{}}}},minorAxis:{type:"object",properties:{converter:{type:"object",properties:{days:{type:"object"},default:{type:"object"},hours:{type:"object"},minutes:{type:"object"},months:{type:"object"},quarters:{type:"object"},seconds:{type:"object"},weeks:{type:"object"},years:{type:"object"}}},scale:{type:"string|DvtTimeComponentScale",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},svgStyle:{type:"object",value:{}},zoomOrder:{type:"Array<(string|DvtTimeComponentScale)>"}}},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"horizontal"},overview:{type:"object",properties:{rendered:{type:"string",enumValues:["off","on"],value:"off"},svgStyle:{type:"object",value:{}}}},referenceObjects:{type:"Array<Object>",value:[]},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},series:{type:"Array<Object>|Promise"},start:{type:"string",value:""},styleDefaults:{type:"object",properties:{animationDuration:{type:"number"},borderColor:{type:"string"},item:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},descriptionStyle:{type:"object"},hoverBackgroundColor:{type:"string"},hoverBorderColor:{type:"string"},selectedBackgroundColor:{type:"string"},selectedBorderColor:{type:"string"},titleStyle:{type:"object"}}},majorAxis:{type:"object",value:{},properties:{labelStyle:{type:"object"},separatorColor:{type:"string"}}},minorAxis:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"},labelStyle:{type:"object"},separatorColor:{type:"string"}}},overview:{type:"object",properties:{backgroundColor:{type:"string"},labelStyle:{type:"object"},window:{type:"object",value:{},properties:{backgroundColor:{type:"string"},borderColor:{type:"string"}}}}},referenceObject:{type:"object",value:{},properties:{color:{type:"string"}}},series:{type:"object",value:{},properties:{backgroundColor:{type:"string"},colors:{type:"Array<string>"},emptyTextStyle:{type:"object"},labelStyle:{type:"object"}}}}},tooltip:{type:"object",value:{renderer:null},properties:{renderer:{type:"function"}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},accessibleItemDesc:{type:"string"},accessibleItemEnd:{type:"string"},accessibleItemStart:{type:"string"},accessibleItemTitle:{type:"string"},componentName:{type:"string"},itemMoveCancelled:{type:"string"},itemMoveFinalized:{type:"string"},itemMoveInitiated:{type:"string"},itemMoveInitiatedInstruction:{type:"string"},itemMoveSelectionInfo:{type:"string"},itemResizeCancelled:{type:"string"},itemResizeEndHandle:{type:"string"},itemResizeEndInitiated:{type:"string"},itemResizeFinalized:{type:"string"},itemResizeInitiatedInstruction:{type:"string"},itemResizeSelectionInfo:{type:"string"},itemResizeStartHandle:{type:"string"},itemResizeStartInitiated:{type:"string"},labelAccNavNextPage:{type:"string"},labelAccNavPreviousPage:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelDate:{type:"string"},labelDescription:{type:"string"},labelEnd:{type:"string"},labelInvalidData:{type:"string"},labelMoveBy:{type:"string"},labelNoData:{type:"string"},labelResizeBy:{type:"string"},labelSeries:{type:"string"},labelStart:{type:"string"},labelTitle:{type:"string"},navArrowDisabledState:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},tipArrowNextPage:{type:"string"},tipArrowPreviousPage:{type:"string"},tooltipZoomIn:{type:"string"},tooltipZoomOut:{type:"string"}}},valueFormats:{type:"object",properties:{date:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},description:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},end:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},series:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"off"},tooltipLabel:{type:"string"}}},start:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},title:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}}}},viewportEnd:{type:"string",value:""},viewportNavigationMode:{type:"string",enumValues:["continuous","discrete"],value:"continuous"},viewportStart:{type:"string",value:""}},methods:{getContextByNode:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojMove:{},ojResize:{},ojViewportChange:{}},extension:{}}).extension._WIDGET_NAME="ojTimeline",e.CustomElementBridge.register("oj-timeline",{metadata:p});var u={properties:{background:{type:"string",enumValues:["blue","green","orange","purple","red","teal"]},description:{type:"string",value:""},durationFillColor:{type:"string"},end:{type:"string",value:""},itemType:{type:"string",enumValues:["auto","duration-bar","duration-event","event"],value:"auto"},label:{type:"string",value:""},seriesId:{type:"string"},shortDesc:{type:"string|function"},start:{type:"string",value:""},svgStyle:{type:"object"},thumbnail:{type:"string",value:""}},extension:{}};u.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-timeline-item",{metadata:u});var y={properties:{emptyText:{type:"string"},itemLayout:{type:"string",enumValues:["auto","bottomToTop","topToBottom"],value:"auto"},label:{type:"string",value:""},svgStyle:{type:"object",value:{}}},extension:{}};function d(){return{default:null,seconds:new s.IntlDateTimeConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:new s.IntlDateTimeConverter({hour:"numeric",minute:"2-digit"}),hours:new s.IntlDateTimeConverter({hour:"numeric"}),days:new s.IntlDateTimeConverter({month:"numeric",day:"2-digit"}),weeks:new s.IntlDateTimeConverter({month:"numeric",day:"2-digit"}),months:new s.IntlDateTimeConverter({month:"long"}),quarters:new s.IntlDateTimeConverter({month:"long"}),years:new s.IntlDateTimeConverter({year:"numeric"})}}y.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-timeline-series",{metadata:y}),e.__registerWidget("oj.ojTimeline",t.oj.dvtTimeComponent,{widgetEventPrefix:"oj",options:{animationOnDataChange:"none",animationOnDisplay:"none",dnd:{move:{items:"disabled"}},itemDefaults:{resizable:"disabled",feelers:"off"},data:null,end:"",minorAxis:{converter:void 0,scale:null,svgStyle:{},zoomOrder:null},majorAxis:{converter:void 0,scale:null,svgStyle:{}},orientation:"horizontal",overview:{rendered:"off",svgStyle:{}},referenceObjects:[],selection:[],selectionMode:"none",series:null,start:"",styleDefaults:{animationDuration:void 0,borderColor:void 0,item:{backgroundColor:void 0,borderColor:void 0,descriptionStyle:void 0,hoverBackgroundColor:void 0,hoverBorderColor:void 0,selectedBackgroundColor:void 0,selectedBorderColor:void 0,titleStyle:void 0},minorAxis:{backgroundColor:void 0,borderColor:void 0,labelStyle:void 0,separatorColor:void 0},majorAxis:{labelStyle:void 0,separatorColor:void 0},overview:{backgroundColor:void 0,labelStyle:void 0,window:{backgroundColor:void 0,borderColor:void 0}},referenceObject:{color:void 0},series:{backgroundColor:void 0,colors:void 0,emptyTextStyle:void 0,labelStyle:void 0}},tooltip:{renderer:null},valueFormats:{series:{tooltipLabel:void 0,tooltipDisplay:"off"},start:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},end:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},date:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},title:{tooltipLabel:void 0,tooltipDisplay:"auto"},description:{tooltipLabel:void 0,tooltipDisplay:"auto"}},viewportEnd:"",viewportStart:"",viewportNavigationMode:"continuous",viewportChange:null,move:null,resize:null},_CreateDvtComponent:function(e,t,o){return new n.Timeline(e,t,o)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-timeline-item"===t?t="timelineItem["+e.seriesIndex+"]["+e.itemIndex+"]":"oj-timeline-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};if(0===e.indexOf("timelineItem")){var o=this._GetIndexPath(e);t.subId="oj-timeline-item",t.seriesIndex=o[0],t.itemIndex=o[1]}else"tooltip"===e&&(t.subId="oj-timeline-tooltip");return t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-timeline"),e},_IsDraggable:function(){var e=this.options.dnd&&this.options.dnd.move&&this.options.dnd.move.items&&"enabled"===this.options.dnd.move.items,t=this.options.itemDefaults&&this.options.itemDefaults.resizable&&"enabled"===this.options.itemDefaults.resizable;return e||t},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-timeline"]={path:"styleDefaults/animationDuration",property:"ANIM_DUR"},e["oj-timeline"]=[{path:"styleDefaults/borderColor",property:"border-top-color"}],e["oj-timeline-item"]=[{path:"styleDefaults/item/borderColor",property:"border-top-color"},{path:"styleDefaults/item/backgroundColor",property:"background-color"},{path:"styleDefaults/item/padding",property:"padding-top"},{path:"styleDefaults/item/borderRadius",property:"border-top-left-radius"},{path:"styleDefaults/item/_maxContentWidth",property:"max-width"}],e["oj-timeline-item-bubble-stripe"]=[{path:"styleDefaults/item/_stripeWidth",property:"width"},{path:"styleDefaults/item/_stripeMarginStart",property:"margin-inline-start"},{path:"styleDefaults/item/_stripeMarginTop",property:"margin-top"},{path:"styleDefaults/item/_stripeMarginBottom",property:"margin-bottom"},{path:"styleDefaults/item/_stripeBorderRadius",property:"border-radius"}],e["oj-timeline-item-bubble-with-stripe"]=[{path:"styleDefaults/item/_withStripePaddingTop",property:"padding-top"},{path:"styleDefaults/item/_withStripePaddingBottom",property:"padding-bottom"},{path:"styleDefaults/item/_withStripePaddingStart",property:"padding-inline-start"},{path:"styleDefaults/item/_withStripePaddingEnd",property:"padding-inline-end"}],e["oj-timeline-item-duration-event-overflow-bubble"]=[{path:"styleDefaults/durationEventOverflow/backgroundColor",property:"background-color"},{path:"styleDefaults/item/_overflowBubbleBorderRadius",property:"border-radius"}],e["oj-timeline-item oj-hover"]=[{path:"styleDefaults/item/hoverBorderColor",property:"border-top-color"},{path:"styleDefaults/item/hoverBackgroundColor",property:"background-color"},{path:"styleDefaults/item/hoverStrokeWidth",property:"stroke-width"}],e["oj-timeline-item oj-selected"]=[{path:"styleDefaults/item/selectedBorderColor",property:"border-top-color"},{path:"styleDefaults/item/selectedBackgroundColor",property:"background-color"}],e["oj-timeline-item-description"]={path:"styleDefaults/item/descriptionStyle",property:"TEXT"},e["oj-timeline-item-title"]={path:"styleDefaults/item/titleStyle",property:"TEXT"},e["oj-timeline-major-axis-label"]={path:"styleDefaults/majorAxis/labelStyle",property:"TEXT"},e["oj-timeline-major-axis-separator"]={path:"styleDefaults/majorAxis/separatorColor",property:"color"},e["oj-timeline-minor-axis"]=[{path:"styleDefaults/minorAxis/backgroundColor",property:"background-color"},{path:"styleDefaults/minorAxis/borderColor",property:"border-top-color"}],e["oj-timeline-minor-axis-label"]={path:"styleDefaults/minorAxis/labelStyle",property:"TEXT"},e["oj-timeline-minor-axis-separator"]={path:"styleDefaults/minorAxis/separatorColor",property:"color"},e["oj-timeline-overview"]={path:"styleDefaults/overview/backgroundColor",property:"background-color"},e["oj-timeline-overview-label"]={path:"styleDefaults/overview/labelStyle",property:"TEXT"},e["oj-timeline-overview-window"]=[{path:"styleDefaults/overview/window/backgroundColor",property:"background-color"},{path:"styleDefaults/overview/window/borderColor",property:"border-top-color"}],e["oj-timeline-reference-object"]={path:"styleDefaults/referenceObject/color",property:"color"},e["oj-timeline-series"]={path:"styleDefaults/series/backgroundColor",property:"background-color"},e["oj-timeline-series-empty-text"]={path:"styleDefaults/series/emptyTextStyle",property:"TEXT"},e["oj-timeline-series-label"]={path:"styleDefaults/series/labelStyle",property:"TEXT"},e["oj-timeline-tooltip-label"]={path:"styleDefaults/tooltipLabelStyle",property:"TEXT"},e["oj-dvt-color-ramp"]={path:"styleDefaults/series/colors",property:"COLOR"},e},_LoadResources:function(){this._super();var e=this.options._resources,t=e.converter,o=new s.IntlDateTimeConverter({month:"short"}),r=new s.IntlDateTimeConverter({year:"2-digit"}),i={seconds:t.seconds,minutes:t.minutes,hours:t.hours,days:t.days,weeks:t.weeks,months:o,quarters:o,years:r};e.converterVert=i,e.zoomIn="oj-fwk-icon oj-fwk-icon-plus",e.zoomOut="oj-fwk-icon oj-fwk-icon-minus",e.overviewHandleHor="oj-fwk-icon oj-fwk-icon-drag-horizontal",e.overviewHandleVert="oj-fwk-icon oj-fwk-icon-drag-vertical",e.prev="oj-fwk-icon oj-fwk-icon-caret-start",e.next="oj-fwk-icon oj-fwk-icon-caret-end",this.options._keyboardUtils={enableAllFocusable:a.enableAllFocusableElements,disableAllFocusable:a.disableAllFocusableElements,getActionableElementsInNode:a.getActionableElementsInNode}},_GetComponentNoClonePaths:function(){var e=this._super();return e.majorAxis={converter:!0,scale:!0},e.minorAxis={converter:!0,scale:!0,zoomOrder:!0},e.valueFormats={date:{converter:!0},end:{converter:!0},start:{converter:!0}},e._resources.converterVert=!0,e},_GetComponentDeferredDataPaths:function(){return{root:["series","data"]}},_GetSimpleDataProviderConfigs:function(){return{data:{templateName:"itemTemplate",templateElementName:"oj-timeline-item",resultPath:"series",derivedTemplates:["seriesTemplate"],getAliasedPropertyNames:function(e){return"oj-timeline-item"===e?{label:"title"}:{}},expandedKeySet:new e.AllKeySetImpl}}},_HandleEvent:function(e){var t=e.type;if("viewportChange"===t){var o=new Date(e.viewportStart).toISOString(),r=new Date(e.viewportEnd).toISOString(),i=e.majorAxisScale,n=e.minorAxisScale,s={viewportStart:o,viewportEnd:r,majorAxisScale:i,minorAxisScale:n};this._UserOptionChange("viewportStart",o),this._UserOptionChange("viewportEnd",r),this._UserOptionChange("majorAxis.scale",i),this._UserOptionChange("minorAxis.scale",n),this._trigger("viewportChange",null,s)}else if("move"===t){var l={itemContexts:e.itemContexts,value:e.value,start:e.start,end:e.end};this._trigger("move",null,l)}else if("resize"===t){var a={itemContexts:e.itemContexts,value:e.value,start:e.start,end:e.end,typeDetail:e.typeDetail};this._trigger("resize",null,a)}else this._super(e)},_GetComponentRendererOptions:function(){return[{path:"itemBubbleContentRenderer",slot:"itemBubbleContentTemplate"},{path:"tooltip/renderer",slot:"tooltipTemplate"}]},_GetTranslationsSectionName:function(){return"oj-ojTimeline"},_GetDataProviderSeriesConfig:function(){return{dataProperty:"data",defaultSingleSeries:!0,idAttribute:"seriesId",itemsKey:"items",templateName:"seriesTemplate",templateElementName:"oj-timeline-series"}},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-timeline-tooltip"!==t.subId?t:null}}),o.setDefaultOptions({ojTimeline:{majorAxis:{converter:o.createDynamicPropertyGetter(function(){return d()})},minorAxis:{converter:o.createDynamicPropertyGetter(function(){return d()})}}})});
//# sourceMappingURL=ojtimeline.js.map