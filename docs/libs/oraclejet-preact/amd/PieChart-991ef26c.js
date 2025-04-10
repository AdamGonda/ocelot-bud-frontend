define(['exports', 'preact/jsx-runtime', './UNSAFE_PieChart/themes/PieChartStyles.css', './PathUtils-aae5f82f', './layoutUtils-0ad07fd9', './classNames-2e65b3b3', './useUser-e0989b0b', './usePieChartNav-d74baf3c', './useDatatip-88cbd577', './util-aa688832', './mergeProps-7d608009', './useTestId-af48c25c', './size-a13c8931', './colorUtils-1c8a518e', './accUtils-3fffc1bb', './TrackResizeContainer-ff49e9cb', './VisTabularDatatip-01ebfbae'], (function(e,t,a,i,n,s,o,r,l,c,d,h,u,b,f,x,m){"use strict";const g=.45,M=.38,p=3,v=1.5,I=90;function T(e){return e*(Math.PI/180)}function y(e,t,a,i){const n=Math.atan2(i,a)-Math.atan2(t,e);return n<0?n+2*Math.PI:n}function j(e,t,a,n,s,o,r,l,c){const d=Math.max(n-e,0),h=Math.max(s-e,0),u=360==r||d<e?0:l+2*e,b=o?o+e:0,f=T(360==r?359.99:r),x=T(c),m=u/2,g=m<d?Math.asin(m/d):0,M=-f/2-x,p=Math.min(5*m,f>0?Math.abs(m/Math.sin(f/2)):0),v=0==d?p:p*h/d,I=t+Math.cos(M)*p,j=a+Math.sin(M)*v,C=t+Math.cos(-g-x)*d,P=a+Math.sin(-g-x)*h,w=t+Math.cos(-x-f+g)*d,A=a+Math.sin(-x-f+g)*h;let S,L=y(w-t,A-a,C-t,P-a);if(L=Math.min(L,f),b>0){const e=m<b?Math.asin(m/b):0,n=t+Math.cos(-e-x)*b,s=a+Math.sin(-e-x)*b,o=t+Math.cos(-x-f+e)*b,l=a+Math.sin(-x-f+e)*b;let c=y(o-t,l-a,n-t,s-a);c=Math.min(c,L,f),360==r?(S=i.moveTo(w,A),S+=i.arcTo(d,h,f,1,C,P),S+=i.lineTo(w,A),S+=i.moveTo(n,s),S+=i.arcTo(b,b,f,0,o,l)):(S=i.moveTo(o,l),S+=i.lineTo(w,A),S+=i.arcTo(d,h,L,1,C,P),S+=i.lineTo(n,s),S+=i.arcTo(b,b,c,0,o,l))}else 360==r?(S=i.moveTo(w,A),S+=i.arcTo(d,h,f,1,C,P)):(S=i.moveTo(I,j),S+=i.lineTo(w,A),S+=i.arcTo(d,h,L,1,C,P));return S+=i.closePath(),S}function C(e,t,a){return{innerBounds:{width:Math.sqrt(2)*a,height:Math.sqrt(2)*a,x:e-a/Math.sqrt(2),y:t-a/Math.sqrt(2)},outerBounds:{width:2*a,height:2*a,x:e-a,y:t-a}}}function P(e,t,a,i,n,s){return s?function(e,t,a,i,n,s){const o=(e+t/2)/180*Math.PI,r=(n+s)/2;return{x:a+r*Math.cos(o),y:i-r*Math.sin(o),width:0,height:0}}(e[s.itemIndex].startAngle,e[s.itemIndex].angleExtent,t,a,i,n):void 0}function w(e,t,a){return a?.color||null!=t?.itemIndex?e[t.itemIndex]:void 0}function A({cx:e,cy:i,r:n,startAngle:o,angleExtent:r,gap:l,innerRadius:c,color:d,id:h,itemIndex:u,isFocused:b=!1,isHovered:f=!1,...x}){const m=j(0,e,i,n,n,c,r,l,o);let g;return b?(g=j(2,e,i,n,n,c,r,l,o),t.jsxs("g",{id:h,role:x.accessibleLabel?"img":void 0,"data-oj-item-index":u,"data-oj-object":"pieSlice","aria-label":x.accessibleLabel,children:[t.jsx("path",{d:m,fill:d,stroke:d,className:a.styles.innerShapes}),t.jsx("path",{d:g,fill:d,className:s.classNames([a.styles.contrastBorder,a.styles.innerShapes])})]})):t.jsx("path",{role:x.accessibleLabel?"img":void 0,"aria-label":x.accessibleLabel,d:m,"data-oj-object":"pieSlice",fill:d,id:h,"data-oj-item-index":u})}e.PieChart=function({data:e,width:i="100%",height:s="448px",testId:f,innerRadius:T=0,...y}){const j=b.getColorRamp(),{totalValue:S,isLabelOutside:L}=e.reduce((({totalValue:e,isLabelOutside:t},a)=>({totalValue:e+(N?.has(a.id)?0:a.value),isLabelOutside:t})),{totalValue:0,isLabelOutside:!1});var N;const V=function(e,t){let a,i=I;const n=[];for(let s=0;s<e.length;s++){const o=e[s],r=o.value;a=r===t?100:0===t?0:Math.min(r/t*100,99.99);const l=3.6*a;let c=i-l;c<0&&(c+=360),n.push({index:s,startAngle:c,angleExtent:l,...o}),i=c}return n}(e,S),U=function(e){return p*e}(.5),E=e.length>100,{direction:R}=o.useUser(),D=h.useTestId(f);return t.jsx(x.TrackResizeContainer,{width:u.sizeToCSS(i)||"0px",height:u.sizeToCSS(s)||"0px",children:function(i,s){const o=n.getAvailSpace(i,s),{cx:h,cy:u}=function(e){return{cx:e.x+Math.floor(e.width/2),cy:e.y+Math.floor(e.height/2)}}(o),b=function(e,t){const a=t?M:g;return Math.floor(Math.min(e.width,e.height)*a)}(o,L),f=T*b,x=function(e,t,a){if(!t)return e;const i=2*Math.PI*a;let n=0;return e.filter((({startAngle:e,angleExtent:t})=>{const a=(t+e)/360*i;return!(t/360*i<v&&Math.abs(n-a)<v||(n=a,0))}))}(V,E,b),p=function(e,t){return({itemIndex:a},i)=>{let n=a;return n=t&&("ArrowRight"===i||"ArrowUp"===i)||!t&&("ArrowLeft"===i||"ArrowDown"===i)?a-1:a+1,{itemIndex:(n%e.length+e.length)%e.length}}}(x,"rtl"===R),{activeId:I,navProps:S,focusedItemInfo:N,hoveredItemInfo:F}=r.usePieChartNav({getNextChartItem:p}),z=N.isFocusVisible?N:F,O=z?e[x[z.itemIndex].index]:void 0,{content:k,borderColor:q}=O&&y.datatip?y.datatip({data:O}):((e,a)=>e?{content:t.jsx(m.VisTabularDatatip,{tableData:[{key:"Value",value:e.value}]}),borderColor:w(j,a,e)}:{content:void 0,borderColor:void 0})(O,z),B=N.isFocusVisible?"element":"pointer",H=P(x,h,u,f,b,z),{datatipContent:_,datatipProps:G}=l.useDatatip({content:k,offset:c.calculateOffset("rtl"===R,i,H),anchor:B,placement:"top-start",borderColor:q});G["aria-describedby"]=[y["aria-describedby"],G["aria-describedby"]].filter(Boolean).join(" ");const J=d.mergeProps(S,G);return t.jsxs("div",{tabIndex:0,"aria-label":y["aria-label"],"aria-labelledby":y["aria-labelledby"],"aria-activedescendant":I,role:"application",...J,...D,className:a.styles.chart,style:{width:i,height:s},children:[x.length>0&&t.jsx("svg",{className:a.styles.svg,children:x.map(((e,a)=>t.jsx(A,{cx:h,cy:u,itemIndex:a,id:N.itemIndex===a?I:void 0,isFocused:N?.itemIndex===a&&N?.isFocusVisible,isHovered:F?.itemIndex===a,r:b,startAngle:e.startAngle,gap:U,innerRadius:f,angleExtent:e.angleExtent,color:e.color||j[a%j.length],"aria-label":e.accessibleLabel},e.id)))}),y.children?.(C(h,u,f)),_]})}})}}));
//# sourceMappingURL=PieChart-991ef26c.js.map
