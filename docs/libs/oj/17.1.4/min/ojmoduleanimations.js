/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","knockout","jquery","ojs/ojcore-base","ojs/ojdomutils","ojs/ojthemeutils","ojs/ojanimation"],function(e,t,n,a,i,o,r){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;const l={};a._registerLegacyNamespaceProp("ModuleAnimations",l),l._addContainedElements=function(e,n){for(var a=t.virtualElements.firstChild(e);a;)1===a.nodeType?n.push(a):8===a.nodeType&&this._addContainedElements(a,n),a=t.virtualElements.nextSibling(a)},l._cacheVirtualViewRoot=function(e,t){e._ojOldRoot=t},l._getVirtualViewRoot=function(e){return e._ojOldRoot},l._defaultCanAnimate=function(e){if(e.isInitial)return!1;if(1===e.node.nodeType)return!0;if(8===e.node.nodeType){var t=[];if(l._addContainedElements(e.node,t),t&&1===t.length)return l._cacheVirtualViewRoot(e,t[0]),!0}return!1},l._getOldView=function(e){var t;return 1===e.node.nodeType?t=e.node:8===e.node.nodeType&&(t=l._getVirtualViewRoot(e)),t},l._createViewParent=function(e){var t=n(document.createElement("div")),a={position:"absolute",height:e.offsetHeight+"px",width:e.offsetWidth+"px",left:e.offsetLeft+"px",top:e.offsetTop+"px"};t.appendTo(e.offsetParent),t.css(a),t.addClass("oj-animation-host-viewport");var i=document.createElement("div");return i.className="oj-animation-host",t.append(i),i},l.createAnimation=function(e,t,n){return{canAnimate:l._defaultCanAnimate,prepareAnimation:function(a){var i={},o=l._getOldView(a);return t&&!n&&(i.newViewParent=l._createViewParent(o)),e&&(i.oldViewParent=l._createViewParent(o)),t&&n&&(i.newViewParent=l._createViewParent(o)),i},animate:function(n){var a=n.oldViewParent,i=n.newViewParent,o=[];return a&&e&&("function"==typeof e?o.push(e(a)):o.push(r.startAnimation(a,"close",e))),i&&t&&("function"==typeof t?o.push(t(i)):o.push(r.startAnimation(i,"open",t))),Promise.all(o).then(function(){l._postAnimationProcess(n)}).catch(function(){l._postAnimationProcess(n)})}}},l._removeViewParent=function(e,t){var n=e[t];if(n){var a=n.parentNode;a&&a.parentNode&&a.parentNode.removeChild(a)}},l._postAnimationProcess=function(e){e.removeOldView(),e.insertNewView(),l._removeViewParent(e,"newViewParent"),l._removeViewParent(e,"oldViewParent")},l._getModuleEffect=function(e){return null==l._moduleEffects&&(l._moduleEffects=o.parseJSONFromFontFamily("oj-animation-module-effects")),l._moduleEffects?l._moduleEffects[e]:null},l._getImplementation=function(e){var t=l._getModuleEffect(e);return t?l.createAnimation(t.oldViewEffect,t.newViewEffect,t.newViewOnTop):null},l._getNavigateMethod=function(e,t){return null==l._navigateMethods&&(l._navigateMethods=o.parseJSONFromFontFamily("oj-animation-navigate-methods")),l._navigateMethods?l._navigateMethods[t]:null},l._navigateCanAnimate=function(e,t){var n=l._getNavigateMethod(e,t);return!!l[n]&&(null==l[n].canAnimate||l[n].canAnimate(e))},l._navigatePrepareAnimation=function(e,t){var n=l._getNavigateMethod(e,t);return l[n]&&l[n].prepareAnimation?l[n].prepareAnimation(e):null},l._navigateAnimate=function(e,t){var n=l._getNavigateMethod(e,t);return l[n]&&l[n].animate?l[n].animate(e):Promise.resolve()},l._getNavigateImplementation=function(e){return{canAnimate:function(t){return l._navigateCanAnimate(t,e)},prepareAnimation:function(t){return l._navigatePrepareAnimation(t,e)},animate:function(t){return l._navigateAnimate(t,e)}}},l.coverLeft=l._getImplementation("coverLeft"),l.coverRight=l._getImplementation("coverRight"),l.revealLeft=l._getImplementation("revealLeft"),l.revealRight=l._getImplementation("revealRight"),l.coverStart="rtl"===i.getReadingDirection()?l.coverRight:l.coverLeft,l.revealEnd="rtl"===i.getReadingDirection()?l.revealLeft:l.revealRight,l.coverUp=l._getImplementation("coverUp"),l.revealDown=l._getImplementation("revealDown"),l.zoomIn=l._getImplementation("zoomIn"),l.zoomOut=l._getImplementation("zoomOut"),l.fade=l._getImplementation("fade"),l.pushStart=l._getImplementation("pushStart"),l.pushEnd=l._getImplementation("pushEnd"),l.navChild=l._getNavigateImplementation("navChild"),l.navParent=l._getNavigateImplementation("navParent"),l.drillIn=l.navChild,l.drillOut=l.navParent,l.navSiblingEarlier=l._getNavigateImplementation("navSiblingEarlier"),l.navSiblingLater=l._getNavigateImplementation("navSiblingLater"),l.switcher=function(e){return new function(){var t;function n(e){return function(n){return t[e].call(t,n)}}var a=this,i="canAnimate";this[i]=function(o){var r=e(o);if(!(t=null==r?null:l[r]))return!1;for(var u=["prepareAnimation","animate"],m=0;m<u.length;m++){var c=u[m];a[c]=n(c)}return n(i)(o)}}};const u=l.createAnimation,m=l.coverLeft,c=l.coverRight,v=l.revealLeft,d=l.revealRight,f=l.coverStart,s=l.revealEnd,p=l.coverUp,g=l.revealDown,_=l.zoomIn,h=l.zoomOut,w=l.fade,P=l.pushStart,V=l.pushEnd,A=l.navChild,E=l.navParent,I=l.drillIn,O=l.drillOut,j=l.navSiblingEarlier,R=l.navSiblingLater,S=l.switcher;e.coverLeft=m,e.coverRight=c,e.coverStart=f,e.coverUp=p,e.createAnimation=u,e.drillIn=I,e.drillOut=O,e.fade=w,e.navChild=A,e.navParent=E,e.navSiblingEarlier=j,e.navSiblingLater=R,e.pushEnd=V,e.pushStart=P,e.revealDown=g,e.revealEnd=s,e.revealLeft=v,e.revealRight=d,e.switcher=S,e.zoomIn=_,e.zoomOut=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojmoduleanimations.js.map