/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","jquery","ojs/ojdatasource-common"],function(t,e,a,r){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const s={SUM:"sum",AVERAGE:"avg",STDDEV:"stddev",VARIANCE:"variance",NONE:"none",FIRST:"first",MIN:"min",MAX:"max",COUNT:"count",CUSTOM:"custom"};e._registerLegacyNamespaceProp("CubeAggType",s);const n=function(t,e,a,r){this.Init(),this._children=[],this._parent=r,this._cubeLevel=a,this._data={},this._data.value=t,this._data.label=e};e._registerLegacyNamespaceProp("CubeAxisValue",n),e.Object.createSubclass(n,e.Object,"oj.CubeAxisValue"),n.prototype.Init=function(){n.superclass.Init.call(this)},n.prototype.getLevel=function(){return this._cubeLevel},n.prototype.getDepth=function(){return 1},n.prototype.getParents=function(){for(var t=[],e=this._parent;e&&e._parent;)t.unshift(e),e=e._parent;return t},n.prototype.getChildren=function(){return this._children},n.prototype.getExtent=function(){if(this._extent>-1)return this._extent;if(this._children&&0!==this._children.length){this._extent=0;for(var t=0;t<this.getChildren().length;t++)this._extent+=this.getChildren()[t].getExtent()}else this._extent=1;return this._extent},n.prototype.getStart=function(){if(this._start>-1)return this._start;if(!this._parent)return 0;for(var t=this._parent.getStart(),e=this._parent._getPrevChild(this);e;)t+=e.getExtent(),e=this._parent._getPrevChild(e);return this._start=t,t},n.prototype.getValue=function(){return this._data.value},n.prototype.getLabel=function(){if(this._data.label)return this._data.label;var t=this.getValue();return t?t.toString():null},n.prototype.GetChild=function(t){var e=this._getChildLevel();if(null===e)return null;if(e.isDataValue())return this._getDataValueChild(t);var a=t[e.attribute];if(a)for(var r=0;r<this._children.length;r++)if(this._children[r].getValue()===a)return this._children[r];return null},n.prototype._getDataValueChild=function(t){for(var e=0;e<this._children.length;e++){var a=this._children[e].getValue();if(Object.prototype.hasOwnProperty.call(t,a)&&t[a]===a)return this._children[e]}return null},n.prototype._getChildLevel=function(){return this._children&&this._children.length>0?this._children[0].getLevel():null},n.prototype.GetChildAt=function(t){return this._findChild(t,0,this._children.length-1)},n.prototype._findChild=function(t,e,a){if(e>a)return null;var r=Math.floor((e+a)/2),s=this._children[r],n=s.getStart();return n>t?this._findChild(t,e,r-1):n+(s.getExtent()-1)<t?this._findChild(t,r+1,a):s},n.prototype.AddNode=function(t,e,a){for(var r=0;r<this._children.length;r++)if(this._children[r].getValue()===t)return this._children[r];var s=new n(t,e,a,this);return this._children.push(s),s},n.prototype.GetHashCode=function(){var t={};return t[this.getLevel().attribute]=this.getValue(),t},n.prototype._getPrevChild=function(t){for(var e=0;e<this._children.length;e++)if(this._children[e]===t)return e>0?this._children[e-1]:null;return null};const i=function(t,e,a){this.Init(),this.axis=e,this._levels=[];for(var r=0;r<t.length;r++)this._levels.push(a.GenerateLevel(t[r],this));this._cube=a,this._values=new n(null,null,null,null)};e._registerLegacyNamespaceProp("CubeAxis",i),e.Object.createSubclass(i,e.Object,"oj.CubeAxis"),i.prototype.Init=function(){i.superclass.Init.call(this)},i.prototype.getLevels=function(){return this._levels},i.prototype.getExtent=function(){return this._values.getExtent()},i.prototype.getValues=function(t){for(var e=[],a=this._values;a;)(a=a.GetChildAt(t))&&e.push(a);return e},i.prototype.getIndex=function(t){for(var e=t?JSON.parse(t):{},a=this._values,r=null;a;)r=a,a=a.GetChild(e);return r?r.getStart():-1},i.prototype.axis=void 0,i.prototype.GetCubeKeys=function(t,e){return this.GetPartialCubeKeys(t,this.getLevels().length-1,e)},i.prototype.GetPartialCubeKeys=function(t,e,a){for(var r=this.getValues(t),s=this.getLevels()[e],n=0;n<r.length;n++){var i=r[n];if(i.getLevel().isDataValue()?a.AddDataValue(i.getValue()):a.UpdateKeys(i),i.getLevel()===s)break}return a},i.prototype.ProcessRow=function(t,e){return this._cube.ProcessLevel(this,0,this._values,t,e,!0)},i._convertAxes=function(t){return"row"===t?1:0};const u=function(t,e,a,r,s){this.Init(),this._data={},this._data.value=t,this._data.indices=e,this._data.aggType=a,this._data.rows=r,this._data.square=s};e._registerLegacyNamespaceProp("CubeDataValue",u),e.Object.createSubclass(u,e.Object,"oj.CubeDataValue"),u.prototype.Init=function(){u.superclass.Init.call(this)},u.prototype.getValue=function(){switch(this._data.aggType){case s.STDDEV:return Math.sqrt(this._getVariance());case s.VARIANCE:return this._getVariance();default:return this._data.value}},u.prototype.getIndices=function(){return this._data.indices},u.prototype.getRows=function(){return this._data.rows},u.prototype.getAggregation=function(){return this._data.aggType},u.prototype._getVariance=function(){if(isNaN(this._data.square))return NaN;var t=this._data.rows.length;return t>1?this._data.square/(t-1):0};const o=function(){this._key=[],this._data=[]};e._registerLegacyNamespaceProp("CubeKeys",o),o.prototype.UpdateKeys=function(t){this._key.push(t)},o.prototype.AddDataValue=function(t,e){this._data.push({name:t,value:e})},o.prototype.GetHashCodes=function(){var t=[],e=this._buildKeyHash();if(0===this._data.length)t.push({key:JSON.stringify(e)});else for(var r=0;r<this._data.length;r++){var s=a.extend(!0,{},e);s[this._data[r].name]=this._data[r].name,t.push({key:JSON.stringify(s),dataValue:this._data[r].name,value:this._data[r].value})}return t},o.prototype._buildKeyHash=function(){for(var t={},e=0;e<this._key.length;e++)for(var a=this._key[e].GetHashCode(),r=Object.keys(a),s=0;s<r.length;s++){var n=r[s];t[n]=a[n]}return t};const l=function(t,e){this.Init(),this._rows=t,this._layout=e,this.BuildCube()};e._registerLegacyNamespaceProp("Cube",l),e.Object.createSubclass(l,e.Object,"oj.Cube"),l.prototype.Init=function(){l.superclass.Init.call(this)},l.prototype.getAxes=function(){var t=this._getPinnedCube(),e=[];Array.prototype.push.apply(e,t?t.getAxes():this._axes);for(var a=2;a<this._axes.length;a++)e.push(this._axes[a]);return e},l.prototype.getValues=function(t){for(var e=this._getPinnedCube(),a=e._normalizeIndices(t),r=e._walkIndex(a,0,[],[]),s=r;Array.isArray(s)&&1===s.length;)if(s=s[0],!Array.isArray(s))return s;return r},l.prototype.setPage=function(t){this._pin=t instanceof Array?t:[t]},l.prototype.pivot=function(t,e,a,r,s){var n=this._layout,i=this._findAxisInLayout(t);if(!i)return!1;var u=null;a<n.length?u=this._findAxisInLayout(a):(u={axis:a,levels:[]},n.push(u));var o=i.levels,h=u.levels,c=e<o.length?o[e]:null;return!!c&&(r>=h.length?(h.push(c),o.splice(e,1)):s===l.PivotType.SWAP?(o[e]=h[r],h[r]=c):(s===l.PivotType.AFTER&&(r+=1),h.splice(r,0,c),h===o&&r<e&&(e+=1),o.splice(e,1)),this.BuildCube(),!0)},l.prototype._findAxisInLayout=function(t){for(var e=0;e<this._layout.length;e++)if(this._layout[e].axis===t)return this._layout[e];return null},l.prototype.getLayout=function(){return this._layout},l.PivotType={BEFORE:"before",AFTER:"after",SWAP:"swap"},l.prototype._walkIndex=function(t,e,a,r){if(0===t.length){var s=a.slice(0);return this._getValue(s)}var n=t.slice(1),i=t[0].start,u=t[0].count;for(a[e]=i;a[e]<i+u;a[e]++)r.push(this._walkIndex(n,e+1,a,[]));return r},l.prototype._normalizeIndices=function(t){var e=[];if(!t)return e;for(var a=Math.min(t.length,this._axes.length),r=0;r<a;r++){var s=t[r],n=Object.prototype.hasOwnProperty;s instanceof Object&&(n.call(s,"start")||n.call(s,"count"))?n.call(s,"start")?n.call(s,"count")?e.push(this._generateIndex(s.start,s.count,r)):e.push(this._generateIndex(s.start,1,r)):e.push(this._generateIndex(0,s.count,r)):e.push(this._generateIndex(s,1,r))}return e},l.prototype._generateIndex=function(t,e,a){var r=this.getAxes()[a].getExtent();return(t>=r||t<0)&&(t=0),{start:t,index:t,count:e=Math.min(e,r-t)}},l.prototype._getValue=function(t){var e=this._createCubeKeys(t);if(e){var a=e.GetHashCodes();if(a.length>0){var r=this._data[a[0].key];if(r)return new u(r.value,t,r.aggType,r.rows,r.square)}}return new u(null,t,void 0,[])},l.prototype.GenerateAxes=function(){var t,e=this._getPageLayout();for(this._pin=[],t=0;t<e.length;t++)this._getAxis(e[t].axis,e[t].levels),this._pin.push({axis:e[t].axis,index:0});if(0===e.length){var a=this._getNonPageLayout();for(t=0;t<a.length;t++)this._getAxis(a[t].axis,a[t].levels)}},l.prototype._getPageLayout=function(){for(var t=[],e=0;e<this._layout.length;e++){this._layout[e].axis>1&&t.push(this._layout[e])}return t},l.prototype._getNonPageLayout=function(){for(var t=[],e=0;e<this._layout.length;e++){this._layout[e].axis<2&&t.push(this._layout[e])}return t},l.prototype.BuildCube=function(){if(this._axes=[],this._data=[],this._cubes=[],this.GenerateAxes(),null!==this._rows)for(var t=0;t<this._rows.length;t++){var e,a=new o;for(e=2;e<this._axes.length;e++)a=this._axes[e].ProcessRow(this._rows[t],a);for(var r=a.GetHashCodes(),s=0;s<r.length;s++){var n=r[s].key,i=this._cubes[n];i||(i=this.GenerateCube(this._getNonPageLayout()),this._cubes[n]=i);var u=new o,l=i._axes.length;for(e=0;e<l;e++)u=i._axes[e].ProcessRow(this._rows[t],u);var h=u.GetHashCodes(),c=h;if(void 0!==r[s].dataValue){c=[];for(var g=0;g<h.length;g++)c.push(r[s])}i._storeData(h,c,this._rows[t])}}},l.prototype._storeData=function(t,e,a){for(var r=0;r<t.length;r++)this._data[t[r].key]=this._aggregate(e[r],this._data[t[r].key],a)},l.prototype._getPinnedCube=function(){return this._cubes[this._getHashFromPin(this._pin)]},l.prototype._getHashFromPin=function(t){var e=new o;if(t&&t.length>0){t.sort(function(t,e){return t.axis-e.axis});for(var a=this._axes,r=0;r<t.length;r++)e=a[t[r].axis].GetCubeKeys(t[r].index,e)}return e.GetHashCodes()[0].key},l._isValid=function(t){return!!t&&(void 0!==t.value&&null!==t.value)},l.prototype._createAggValue=function(t,e,a,r,s){a.push(r);for(var n={},i=Object.keys(s),u=0;u<i.length;u++){var o=i[u];n[o]=s[o]}return n.value=t,n.aggType=e,n.rows=a,n},l._isNumber=function(t){return!e.StringUtils.isString(t.value)&&!isNaN(t.value)},l.prototype._aggregate=function(t,e,a){var r=this.GetAggType(t.dataValue),n=r.aggregation,i=l._isValid(e),u=l._isValid(t),o=i&&l._isNumber(e),h=u&&l._isNumber(t);switch(n){case s.SUM:return i&&u?o&&h?this._createAggValue(e.value+t.value,n,e.rows,a,{}):this._createAggValue(NaN,n,e.rows,a,{}):u&&!i?h?this._createAggValue(t.value,n,[],a,{}):this._createAggValue(NaN,n,[],a,{}):e;case s.AVERAGE:return i&&u?o&&h?this._createAggValue((e.sum+t.value)/(e.rows.length+1),n,e.rows,a,{sum:e.sum+t.value}):this._createAggValue(NaN,n,e.rows,a,{sum:e.sum}):u&&!i?h?this._createAggValue(t.value,n,[],a,{sum:t.value}):this._createAggValue(NaN,n,[],a,{sum:NaN}):e;case s.VARIANCE:case s.STDDEV:if(i&&u){if(o&&h){var c=e.rows.length+1,g=e.value+(t.value-e.value)/c;return this._createAggValue(g,n,e.rows,a,{square:e.square+(t.value-e.value)*(t.value-g)})}return this._createAggValue(NaN,n,e.rows,a,{square:NaN})}return u&&!i?h?this._createAggValue(t.value,n,[],a,{square:0}):this._createAggValue(NaN,n,[],a,{square:NaN}):e;case s.NONE:return this._createAggValue(null,n,i?e.rows:[],a,{});case s.FIRST:return i?this._createAggValue(e.value,n,e.rows,a,{}):u?this._createAggValue(t.value,n,[],a,{}):e;case s.MIN:return i&&u?o&&h?this._createAggValue(Math.min(e.value,t.value),n,e.rows,a,{}):this._createAggValue(NaN,n,e.rows,a,{}):u&&!i?h?this._createAggValue(t.value,n,[],a,{}):this._createAggValue(NaN,n,[],a,{}):e;case s.MAX:return i&&u?o&&h?this._createAggValue(Math.max(e.value,t.value),n,e.rows,a,{}):this._createAggValue(NaN,n,e.rows,a,{}):u&&!i?h?this._createAggValue(t.value,n,[],a,{}):this._createAggValue(NaN,n,[],a,{}):e;case s.COUNT:return i&&u?this._createAggValue(e.value+1,n,e.rows,a,{}):u&&!i?this._createAggValue(1,n,[],a,{}):e;case s.CUSTOM:var p=r.callback.call(this,i?e.value:void 0,u?t.value:void 0);return this._createAggValue(p,n,i?e.rows:[],a,{});default:return}},l.prototype._getAxis=function(t,e){if(t>=this._axes.length){var a=new Array(t-this._axes.length+1);Array.prototype.push.apply(this._axes,a)}return this._axes[t]||(this._axes[t]=new i(e,t,this)),this._axes[t]},l.prototype._createCubeKeys=function(t){for(var e=this.getAxes(),a=new o,r=0;r<t.length;r++)a=e[r].GetCubeKeys(t[r],a);return a},l.prototype.ProcessLevel=function(t,a,r,s,n,i){e.Assert.failedInAbstractFunction()},l.prototype.GenerateCube=function(t){e.Assert.failedInAbstractFunction()},l.prototype.GenerateLevel=function(t,a){e.Assert.failedInAbstractFunction()},l.prototype.GetAggType=function(t){return e.Assert.failedInAbstractFunction(),{}};const h=function(t,a){var r=a.row?a.row.start:0,s=a.row?a.row.count:0,n=a.column?a.column.start:0,i=a.column?a.column.count:0;e.Assert.assertNumber(r,null),e.Assert.assertNumber(s,null),e.Assert.assertNumber(n,null),e.Assert.assertNumber(i,null),this._cube=t,this._starts={row:r,column:n},this._values=this._cube.getValues([{start:n,count:i},{start:r,count:s}]);var u=Array.isArray(this._values);(i=u?this._values.length:1)>0&&(s=u?this._values[0].length:1),this._counts={row:s,column:i}};e._registerLegacyNamespaceProp("CubeCellSet",h),h.prototype.getData=function(t){var e=t.row,a=t.column,r=Array.isArray(this._values)?this._values[a-this._starts.column][e-this._starts.row]:this._values;return r?r.getValue():null},h.prototype.getMetadata=function(t){return{keys:{row:this._getAxisMetadata(t,"row",2),column:this._getAxisMetadata(t,"column",1)}}},h.prototype._getAxisMetadata=function(t,e,a){var r=this._cube.getAxes();if(void 0!==t[e]&&r.length>=a){var s=new o;return(s=r[i._convertAxes(e)].GetCubeKeys(t[e],s)).GetHashCodes()[0].key}return null},h.prototype.getStart=function(t){return this._starts[t]},h.prototype.getCount=function(t){return this._counts[t]},h.prototype.getExtent=function(t){return{row:{extent:1,more:{before:!1,after:!1}},column:{extent:1,more:{before:!1,after:!1}}}};const c=function(t,e,a,r){this._cube=e,this._axis=t,this._start=void 0===a?0:a,this._count=void 0===r?this._axis.getExtent():Math.min(r,this._axis.getExtent()-a),this._end=a+(r-1)};e._registerLegacyNamespaceProp("CubeHeaderSet",c),c.prototype.getData=function(t,e){var a=this._getValue(t,e);return a?a.getLabel():null},c.prototype.getMetadata=function(t,e){var a=new o,r=(a=this._axis.GetPartialCubeKeys(t,e,a)).GetHashCodes();return r&&r.length>0?{key:r[0].key}:null},c.prototype.getLevelCount=function(){return this._axis.getLevels().length},c.prototype.getExtent=function(t,e){var a=this._getValue(t,e),r=a.getExtent(),s=a.getStart(),n=s+(r-1),i=t>s,u=t<s+(r-1);return s<this._start&&(r-=this._start-s),n>this._end&&(r-=n-this._end),{extent:r,more:{before:i,after:u}}},c.prototype.getDepth=function(t,e){return this._getValue(t,e).getDepth()},c.prototype.getCount=function(){return this._count},c.prototype.getStart=function(){return this._start},c.prototype.getLabel=function(){return null},c.prototype._getValue=function(t,e){void 0===e&&(e=0);var a=this._axis.getValues(t);return a&&a.length>e?a[e]:null};const g=function(t){g.superclass.constructor.call(this,t)};e._registerLegacyNamespaceProp("CubeDataGridDataSource",g),e.Object.createSubclass(g,r.DataSourceCommon.DataGridDataSource,"oj.CubeDataGridDataSource"),g.prototype.setCube=function(t){this.data=t,this._fireRefresh()},g.prototype.setPage=function(t){this.data.setPage(t),this._fireRefresh()},g.prototype._fireRefresh=function(){var t={source:this,operation:"refresh"};this.handleEvent("change",t)},g.prototype.getCount=function(t){var e=this._getAxis(t);return e?e.getExtent():0},g.prototype.getCountPrecision=function(t){return"exact"},g.prototype.fetchHeaders=function(t,e,a){var r=new c(this._getAxis(t.axis),this.data,t.start,t.count);e.success.call(a?a.success:void 0,r,t)},g.prototype.fetchCells=function(t,e,a){for(var r={},s=0;s<t.length;s++){var n,i=void 0===t[s].start?0:t[s].start;"row"===t[s].axis&&(n=void 0===t[s].count?this.data.getAxes()[1].getExtent():t[s].count,r.row={start:i,count:n}),"column"===t[s].axis&&(n=void 0===t[s].count?this.data.getAxes()[0].getExtent():t[s].count,r.column={start:i,count:n})}var u=new h(this.data,r);e.success.call(a?a.success:void 0,u,t)},g.prototype.keys=function(t){var e={};return e=this._getKey(t,"row",e),e=this._getKey(t,"column",e),Promise.resolve(e)},g.prototype._getKey=function(t,e,a){var r=this._getAxis(e),s=t[e],n=new o;return n=r?r.GetCubeKeys(s,n):"",a[e]=n.GetHashCodes()[0].key,a},g.prototype.indexes=function(t){var e={};return e=this._getIndex(t,"row",e),e=this._getIndex(t,"column",e),Promise.resolve(e)},g.prototype._getIndex=function(t,e,a){return a[e]=this._getAxis(e).getIndex(t[e]),a},g.prototype.sort=function(t,a,r){e.Assert.failedInAbstractFunction()},g.prototype.move=function(t,a,r,s,n){e.Assert.failedInAbstractFunction()},g.prototype.moveOK=function(t,e,a){return"invalid"},g.prototype.getCapability=function(t){switch(t){case"sort":case"move":return"none";default:return null}},g.prototype._getAxis=function(t){var e=i._convertAxes(t),a=this.data.getAxes();return a.length>e?a[e]:null};const p=function(t,e,a){this.Init(),this.attribute=t,this._axisObj=e,this.axis=e.axis,this._dataValue=a};e._registerLegacyNamespaceProp("CubeLevel",p),e.Object.createSubclass(p,e.Object,"oj.CubeLevel"),p.prototype.Init=function(){p.superclass.Init.call(this)},p.prototype.attribute=void 0,p.prototype.axis=void 0,p.prototype.getValue=function(t){var e=this._axisObj.getValues(t);if(e)for(var a=0;a<e.length;a++)if(e[a].getLevel()===this)return e[a];return null},p.prototype.isDataValue=function(){return this._dataValue},p.prototype._dataValue=!1,p.prototype._axisObj=null;const _=function(t,e,a){this.Init(),this._dataValues=a,this._valueAttr=a.valueAttr,this._labelAttr=a.labelAttr;var r=a.defaultAggregation;this._defaultAggregation=r?_._getDefaultAgg(r):{aggregation:s.SUM},this._aggregation=a.aggregation,this._buildAggTypeLookup(),_.superclass.constructor.call(this,t,e)};e._registerLegacyNamespaceProp("DataColumnCube",_),e.Object.createSubclass(_,l,"oj.DataColumnCube"),_.prototype.Init=function(){_.superclass.Init.call(this)},_.prototype.BuildCube=function(){_.superclass.BuildCube.call(this)},_.prototype.GetAggType=function(t){return this._dataValueAggType[t]?this._dataValueAggType[t]:this._defaultAggregation},_.prototype.GenerateCube=function(t){return new _(null,t,this._dataValues)},_.prototype.GenerateLevel=function(t,e){return t.attribute===this._labelAttr?new p(t.attribute,e,!0):new p(t.attribute,e,!1)},_.prototype.ProcessLevel=function(t,e,a,r,s,n){if(e>=t.getLevels().length)return s;var i=t.getLevels()[e],u=r[i.attribute],o=a.AddNode(u,null,i);return i.isDataValue()?s.AddDataValue(u,r[this._valueAttr]):s.UpdateKeys(o),this.ProcessLevel(t,e+1,o,r,s,n)},_._getDefaultAgg=function(t){return e.StringUtils.isString(t)?{aggregation:t}:{aggregation:t.aggregation,callback:t.callback}},_.prototype._buildAggTypeLookup=function(){if(this._dataValueAggType=[],this._aggregation)for(var t=0;t<this._aggregation.length;t++){var e=this._aggregation[t],a=e.aggregation;this._dataValueAggType[e.value]=a?{aggregation:a,callback:e.callback}:this._defaultAggregation}};const f=function(t,e,a){this.Init(),this._dataValues=a,this._aggTypeLookup=this._buildAggTypeLookup(),f.superclass.constructor.call(this,t,e)};e._registerLegacyNamespaceProp("DataValueAttributeCube",f),e.Object.createSubclass(f,l,"oj.DataValueAttributeCube"),f.prototype._rows=null,f.prototype.Init=function(){f.superclass.Init.call(this)},f.prototype.BuildCube=function(){f.superclass.BuildCube.call(this)},f.prototype.GetAggType=function(t){return this._dataValueAggType[t]},f.prototype.GenerateLevel=function(t,e){return t.dataValue?new p(null,e,!0):new p(t.attribute,e,!1)},f.prototype.GenerateCube=function(t){return new f(null,t,this._dataValues)},f.prototype.ProcessLevel=function(t,e,a,r,s,n){if(e>=t.getLevels().length)return s;var i=t.getLevels()[e];if(i.isDataValue())return this._processDataValue(t,a,r,e,s);var u=r[i.attribute],o=a.AddNode(u,null,i);return n&&s.UpdateKeys(o),this.ProcessLevel(t,e+1,o,r,s,n)},f.prototype._processDataValue=function(t,e,a,r,s){for(var n=!0,i=0;i<this._dataValues.length;i++){var u=this._dataValues[i].attribute,o=this._dataValues[i].label;if(Object.prototype.hasOwnProperty.call(a,u)){var l=e.AddNode(u,o,t.getLevels()[r]);s.AddDataValue(u,a[u]),this.ProcessLevel(t,r+1,l,a,s,n),n=!1}}return s},f.prototype._buildAggTypeLookup=function(){this._dataValueAggType=[];for(var t=0;t<this._dataValues.length;t++){var e=this._dataValues[t],a=e.aggregation;this._dataValueAggType[e.attribute]=a?{aggregation:e.aggregation,callback:e.callback}:{aggregation:s.SUM,callback:e.callback}}},t.Cube=l,t.CubeAggType=s,t.CubeAxis=i,t.CubeAxisValue=n,t.CubeCellSet=h,t.CubeDataGridDataSource=g,t.CubeDataValue=u,t.CubeHeaderSet=c,t.CubeLevel=p,t.DataColumnCube=_,t.DataValueAttributeCube=f,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojcube.js.map