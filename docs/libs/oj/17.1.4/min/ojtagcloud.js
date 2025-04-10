/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojcomponentcore","jquery","ojs/ojdvt-base","ojs/ojtagcloud-toolkit"],function(e,t,n,o,a){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var i={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},as:{type:"string",value:""},data:{type:"object",extension:{webelement:{exceptionStatus:[{type:"unsupported",since:"13.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},items:{type:"Array<Object>|Promise"},layout:{type:"string",enumValues:["cloud","rectangular"],value:"rectangular"},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},styleDefaults:{type:"object",properties:{animationDuration:{type:"number"},hoverBehaviorDelay:{type:"number",value:200},svgStyle:{type:"object",value:{}}}},tooltip:{type:"object",properties:{renderer:{type:"function"}}},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}}},methods:{getContextByNode:{},getItem:{},getItemCount:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};i.extension._WIDGET_NAME="ojTagCloud",e.CustomElementBridge.register("oj-tag-cloud",{metadata:i});var r={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},label:{type:"string",value:""},shortDesc:{type:"string|function",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},url:{type:"string",value:""},value:{type:"number"}},extension:{}};r.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-tag-cloud-item",{metadata:r}),e.__registerWidget("oj.ojTagCloud",n.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationOnDataChange:"none",animationOnDisplay:"none",as:"",data:null,hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",items:null,layout:"rectangular",selection:[],selectionMode:"none",tooltip:{renderer:null},styleDefaults:{animationDuration:void 0,hoverBehaviorDelay:200},touchResponse:"auto",trackResize:"on"},_CreateDvtComponent:function(e,t,n){return new a.TagCloud(e,t,n)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-tagcloud-item"===t?t="item["+e.index+"]":"oj-tagcloud-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};return 0===e.indexOf("item")?(t.subId="oj-tagcloud-item",t.index=this._GetFirstIndex(e)):"tooltip"===e&&(t.subId="oj-tagcloud-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-tagcloud"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-tagcloud"]={path:"styleDefaults/animationDuration",property:"ANIM_DUR"},e["oj-tagcloud"]={path:"styleDefaults/svgStyle",property:"TEXT"},e},_GetEventTypes:function(){return["optionChange"]},_InitOptions:function(e,t){this._super(e,t);var n=this.options.styleDefaults;this.options.styleDefaults=n},getItem:function(e){return this._component.getAutomation().getItem(e)},getItemCount:function(){return this._component.getAutomation().getItemCount()},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-tagcloud-tooltip"!==t.subId?t:null},_GetTranslationsSectionName:function(){return"oj-ojTagCloud"},_GetComponentDeferredDataPaths:function(){return{root:["items","data"]}},_GetSimpleDataProviderConfigs:function(){return{data:{templateName:"itemTemplate",templateElementName:"oj-tag-cloud-item",resultPath:"items"}}}}),t.setDefaultOptions({ojTagCloud:{styleDefaults:t.createDynamicPropertyGetter(function(e){return e.isCustomElement?{svgStyle:{}}:{}})}})});
//# sourceMappingURL=ojtagcloud.js.map