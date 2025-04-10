/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,r=t.fn.position;function c(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function p(i,o){return parseInt(t.css(i,o),10)||0}function a(t){return null!=t&&t===t.window}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=a(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:!e&&!n?t(i).offset():{left:0,top:0},scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);var h,d,g,u,m,w,W,v,y="string"==typeof(i=t.extend({},i)).of?t(document).find(i.of):t(i.of),H=t.position.getWithinInfo(i.within),b=t.position.getScrollInfo(H),x=(i.collision||"flip").split(" "),T={};return w=9===(v=(W=y)[0]).nodeType?{width:W.width(),height:W.height(),offset:{top:0,left:0}}:a(v)?{width:W.width(),height:W.height(),offset:{top:W.scrollTop(),left:W.scrollLeft()}}:v.preventDefault?{width:0,height:0,offset:{top:v.pageY,left:v.pageX}}:{width:W.outerWidth(),height:W.outerHeight(),offset:W.offset()},y[0].preventDefault&&(i.at="left top"),d=w.width,g=w.height,u=w.offset,m=t.extend({},u),t.each(["my","at"],(function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),o=f.exec(e[1]),T[this]=[t?t[0]:0,o?o[0]:0],i[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]})),1===x.length&&(x[1]=x[0]),"right"===i.at[0]?m.left+=d:"center"===i.at[0]&&(m.left+=d/2),"bottom"===i.at[1]?m.top+=g:"center"===i.at[1]&&(m.top+=g/2),h=c(T.at,d,g),m.left+=h[0],m.top+=h[1],this.each((function(){var n,l,f=t(this),s=f.outerWidth(),r=f.outerHeight(),a=p(this,"marginLeft"),w=p(this,"marginTop"),W=s+a+p(this,"marginRight")+b.width,v=r+w+p(this,"marginBottom")+b.height,L=t.extend({},m),P=c(T.my,f.outerWidth(),f.outerHeight());"right"===i.my[0]?L.left-=s:"center"===i.my[0]&&(L.left-=s/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:a,marginTop:w},t.each(["left","top"],(function(o,e){t.ui.position[x[o]]&&t.ui.position[x[o]][e](L,{targetWidth:d,targetHeight:g,elemWidth:s,elemHeight:r,collisionPosition:n,collisionWidth:W,collisionHeight:v,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:H,elem:f})})),i.using&&(l=function(t){var n=u.left-L.left,l=n+d-s,h=u.top-L.top,c=h+g-r,p={target:{element:y,left:u.left,top:u.top,width:d,height:g},element:{element:f,left:L.left,top:L.top,width:s,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:c<0?"top":h>0?"bottom":"middle"};d<s&&e(n+l)<d&&(p.horizontal="center"),g<r&&e(h+c)<g&&(p.vertical="middle"),o(e(n),e(l))>o(e(h),e(c))?p.important="horizontal":p.important="vertical",i.using.call(this,t,p)}),f.offset(t.extend(L,{using:l}))}))},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,s=t.left-i.collisionPosition.marginLeft,h=l-s,r=s+i.collisionWidth-f-l;i.collisionWidth>f?h>0&&r<=0?(e=t.left+h+i.collisionWidth-f-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+f-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-s,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,s=t.top-i.collisionPosition.marginTop,h=l-s,r=s+i.collisionHeight-f-l;i.collisionHeight>f?h>0&&r<=0?(e=t.top+h+i.collisionHeight-f-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+f-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-s,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,f=l.offset.left+l.scrollLeft,s=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,c=r-h,p=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];c<0?((o=t.left+a+d+g+i.collisionWidth-s-f)<0||o<e(c))&&(t.left+=a+d+g):p>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<p)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,f=l.offset.top+l.scrollTop,s=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,c=r-h,p=r+i.collisionHeight-s-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];c<0?((n=t.top+a+d+g+i.collisionHeight-s-f)<0||n<e(c))&&(t.top+=a+d+g):p>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<p)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position}));