define(['exports', 'preact/jsx-runtime', './TrackResizeContainer-74ef32df', './classNames-08d99695', './mergeProps-bcfa6a92', 'preact/hooks', './useUser-85c781ea', './useMeterDatatip-3abdf66a', './useKeyboardEvents-d87e3587', './meterUtils-9d026b15', './utils-5077c092', './UNSAFE_MeterBar/themes/MeterBarContract.css', './size-a75b3f13', './UNSAFE_MeterBar/themes/MeterBarStyles.css', './utils-a4c75cb2', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './useComponentTheme-5aa41a8f', './UNSAFE_MeterBar/themes/redwood/MeterBarTheme', './useTestId-3a316499', './useTextDimensions-b37344b4', './useCssVars-c043f8da', './Common/themes/themeContract.css', './LinearMeter-d1e744c1'], (function(e,t,r,a,i,n,s,o,l,c,h,d,u,m,x,f,p,b,g,$,S,y,z,v){"use strict";const T=15,C=5,k=4;function M(e){if(!e)return{width:0,height:0};const t=e.getBoundingClientRect();return{width:t.width,height:t.height}}const B=function(e,t,r,a,i,n){const s=[];return e.start&&s.push(t?r:a),e.end&&s.push(t?i:n),s},L=function(e,t,r,a){return r&&(e.start&&!a&&(r-=16),e.end&&!a&&(r-=16)),t&&r&&(r-=2*t+2*k),r},V=function(e,t,r,a){return r&&(e.start&&a&&(r-=16),e.end&&a&&(r-=16)),t&&r&&(r-=2*t+2*k),r},w=function(e,t,r){const a=`${h.xUnits(4)} + ${k}px`;return r?`calc(${a} + ${t}px) 0 calc(${a} + ${t}px) 0`:`0 calc(${a} + ${e}px) 0 calc(${a} + ${e}px)`};function j(e,t,r,a,i,n,s){const o=n||h.xUnits(C),l=`calc(${o} - ${s||d.meterBarVars.size})`;return r?i?`${e?"-50%":"50%"} calc(-100% - ${l} - ${k}px)`:`${e?"-50%":"50%"} calc(${o} + ${k}px)`:a?i?`calc(100% + ${l} + ${k}px) ${t?"50%":"-50%"}`:`calc(0px - ${o} - ${k}px) ${t?"50%":"-50%"}`:i?`calc(-100% - ${l} - ${k}px) ${t?"50%":"-50%"}`:`calc(${o} + ${k}px) ${t?"50%":"-50%"}`}function R(e,t,r,a,i){const n=`calc(${h.xUnits(C)} - ${d.meterBarVars.size})`,s=k,o=e.start&&e.end;if(a)return t?`calc(${i.height+s}px + ${n}) 0 calc(${i.height+s}px + ${n}) 0`:`0 calc(${i.width+s}px + ${n}) 0 calc(${i.width+s}px + ${n})`;if(r){if(o)return t?`${n} 0 ${n}`:`0 ${n} 0 ${n}`;if(e.start&&!e.end)return t?`${n} 0 0 0`:`0 ${n} 0 0`;if(!e.start&&e.end)return t?`0 0 ${n} 0`:`0 0 0 ${n}`}}function F(e,t,r,a,i,n){return{width:e?n:t?u.sizeToCSS(r):void 0,height:e?i:t?void 0:u.sizeToCSS(r),margin:e?w(a.width,a.height,t):void 0}}function H(e,t,r,a){return{left:e?`max(${r}px, ${t?100-a:a}%)`:void 0,right:e?void 0:`max(${r}px, ${t?a:100-a}%)`}}function U(e,t,r){if(0!==r||t)return 100===r?t?e?"3px":"0 3px":e?"-2px":"0 2px":e?t?"1px 0":"-1px 0":t?"0 -1px":"0 1px"}function D(e,t,r,a,i,n,s){return{...e?H(t,a,n/2,i):{},bottom:e?void 0:r?`max(${s/2-k}px, ${i}%)`:void 0,top:e||r?void 0:`max(${s/2-k}px, ${100-i}%)`,maxWidth:e?void 0:h.xUnits(T)}}function I({orientation:e,percent:r,color:i,position:n,length:o,label:l,maxLabelWidth:c,maxLabelHeight:h,trackSize:d,labelStyle:u}){const f="horizontal"===e,{direction:p}=s.useUser(),b="rtl"===p,g="start"===n,$=`${r}%`,S=f?void 0:o,y=f?o:void 0,z=r<50&&!b||r>50&&b,v=r<50;return t.jsxs(t.Fragment,{children:[t.jsx("div",{class:a.classNames([m.styles.referenceLinesBaseStyle,f?m.styles.referenceLinesHorizontalStyle:m.styles.referenceLinesVerticalStyle,g?f?m.styles.referenceLinesHoriontalStartStyle:b?m.styles.referenceLinesVerticalStartRtlStyle:m.styles.referenceLinesVerticalStartLtrStyle:""]),style:{left:f&&!b?$:void 0,right:f&&b?$:void 0,bottom:f?void 0:$,backgroundColor:x.getVisThresholdColor(i),width:S,height:y,translate:U(f,b,r)}}),l&&t.jsx("div",{className:m.styles.labelDivStyle,style:{...D(f,z,v,b,r,c,h),translate:j(z,v,f,b,g,o,d),...u},children:l})]})}function N({color:e,length:r,orientation:i,...n}){const{direction:o}=s.useUser(),l="horizontal"===i,c="rtl"===o;return t.jsx("div",{class:a.classNames([m.styles.thresholdBarBaseStyle,l?c?m.styles.thresholdBarHorizontalBarTrackSectionRtlStyle:m.styles.thresholdBarHorizontalBarTrackSectionLtrStyle:m.styles.thresholdBarVerticalBarTrackSectionStyle,n.class]),style:{width:l?r:"100%",height:l?"100%":r,backgroundColor:x.getVisThresholdColor(e)}})}function E({max:e=100,min:r=0,value:u=0,step:m=1,length:x="100%",width:f,height:T,size:C,orientation:k="horizontal",isTrackRendered:w=!0,thresholdDisplay:j="all",indicatorSize:H=1,testId:U,baseline:D,...E}){const P=$.useTestId(U);c.validateRange(r,e,u,m,D);const A=n.useRef(),W="horizontal"===k,_=n.useRef(null),K=n.useRef(M(null)),{direction:X,forcedColors:Y}=s.useUser(),q="rtl"===X;n.useEffect((()=>{(E.onCommit||E.onInput)&&(K.current=M(_.current))}),[C,x,k,E.onCommit,E.onInput]);const{textMeasureContent:G,getTextDimensions:J}=S.useTextDimensions(),O=n.useRef(!1),Q=o.usePointerEvents(u,(t=>{if(t.target==_.current)return function(e,t,r,a,i,n,s){const o=t.current;if(!o||0===o.width)return;let l;if("horizontal"===n){const t=e.offsetX;l=r+(a-r)*(s?o.width-t:t)/o.width}else l=r+(a-r)*(o.height-e.offsetY)/o.height;return l=Math.round(l/i)*i,Math.max(r,Math.min(a,l))}(t,K,r,e,m,k,q)}),_,A,O,E.onCommit,E.onInput),Z=l.useKeyboardEvents(u,r,e,m,A,E.onCommit,E.onInput),{datatipContent:ee,datatipProps:te}=o.useMeterDatatip(u,O,E.datatip,E["aria-describedby"]),re=c.getMeterAriaProps(u,r,e,E["aria-label"],E["aria-labelledby"],E.thresholds),ae=i.mergeProps(Q,Z,te,re),ie=100*((void 0!==D?Math.max(r,Math.min(D,e)):r)-r)/(e-r),ne=100*(u-r)/(e-r),se=Math.min(ie,ne),oe=`${Math.abs(ie-ne)}%`,le=100*Math.max(0,Math.min(1,H))+"%",{trackColor:ce,indicatorColor:he}=c.getTrackAndIndicatorColor(u,j,E.trackColor,E.indicatorColor,E.thresholds),de=function(e){let t={start:!1,end:!1};return e&&(t=e.reduce(((e,t)=>(e.start=e.start||"start"===t.position,e.end=e.end||"end"===t.position||null==t.position,e)),t)),t}(E.referenceLines),ue=E.onCommit||E.onInput,{isTabbable:me}=p.useTabbableMode(),{classes:xe,styles:{interactiveStyle:fe,barValueBaseStyle:pe,barValueVerticalStyle:be,barValueHorizontalStyle:ge,barValueHighContrastStyle:$e,barTrackBaseStyle:Se,barTrackHorizontalSizeStyle:ye,barTrackVerticalSizeStyle:ze,barTrackBorderStyle:ve,barTrackMarginTopFitStyle:Te,barTrackMarginStartFitStyle:Ce,barTrackMarginBottomFitStyle:ke,barTrackMarginEndFitStyle:Me,trackSectionHorizontalFirstStyle:Be,trackSectionHorizontalLastStyle:Le,trackSectionVerticalFirstStyle:Ve,trackSectionVerticalLastStyle:we,trackSectionRoundedCornersStyle:je}}=b.useComponentTheme(g.MeterBarRedwoodTheme,{size:C,orientation:k}),Re="fit"===C,Fe=c.hasLabelledReferenceLine(E.referenceLines),He=c.getDefaultReferenceLineLabelFontSize("sm"),Ue=n.useMemo((()=>[{tokenVar:He,key:"labelFontSize",cssProp:"font-size"},{tokenVar:z.typographyVars.body.md.lineHeight,key:"lineHeight",cssProp:"line-height"}]),[He]),{resolvedVars:De,cssContent:Ie}=y.useCssVars(Ue),{dims:Ne,maxRefLabelDims:Ee}=c.getMaxRefLabelDims(De.fontSize,De.lineHeight,E.referenceLines,J),Pe=L(de,Ee.width,f,W),Ae=V(de,Ee.height,T,W),We=W?Ae:Pe;return t.jsxs(t.Fragment,{children:[t.jsx("div",{tabIndex:me?0:-1,...P,...ae,style:F(Re,W,x,Ee,Ae,Pe),class:a.classNames([xe,...Re?B(de,W,Te,Ce,ke,Me):[]]),children:t.jsxs(v.BarTrack,{ref:_,orientation:k,color:!w||"all"===j&&E.thresholds?"transparent":ce,class:a.classNames([Se,ue?fe:"",W?ye:ze,!w||"all"===j&&E.thresholds?void 0:ve]),style:{margin:Re?void 0:R(de,W,!!E.referenceLines?.length,Fe,Ee)},children:["all"===j&&E.thresholds?.filter((t=>t.max>r&&t.max<=e)).sort(((e,t)=>e.max-t.max)).map(((a,i,n)=>{const s=0===i?a.max-r:a.max-n[i-1].max,o=W?Le:we;let l=0===i?W?Be:Ve:"";return a.max===e&&(l=0===i?je:o),t.jsxs(t.Fragment,{children:[t.jsx(N,{class:l,orientation:k,length:100*s/(e-r)+"%",color:a.color}),w&&i===n.length-1&&a.max<e?t.jsx(N,{class:o,color:ce,orientation:k,length:100*(e-n[i].max)/(e-r)+"%"}):""]})})),t.jsx(v.BarValue,{left:W&&!q?`${se}%`:void 0,bottom:W?void 0:`${se}%`,right:W&&q?`${se}%`:void 0,width:W?oe:"100%",height:W?"100%":oe,length:oe,size:le,orientation:k,class:a.classNames([pe,W?ge:be,"active"===Y?$e:""]),color:he}),E.referenceLines?.map(((a,i)=>t.jsx(I,{label:a.label,labelStyle:{fontSize:De.labelFontSize,...a.labelStyle},color:a.color,maxLabelWidth:Ne[i]?.width,maxLabelHeight:Ne[i]?.height,orientation:k,percent:100*(a.value-r)/(e-r),position:a.position,trackSize:Re?`${We}px`:d.meterBarVars.size,length:Re?`calc(${h.xUnits(4)} + ${We}px)`:void 0})))]})}),Ie,ee,G]})}e.MeterBar=function({orientation:e,length:a,size:i,...n}){return t.jsx(t.Fragment,{children:"fit"===i?t.jsx(r.TrackResizeContainer,{width:"100%",height:"100%",children:(r,a)=>t.jsx(E,{width:r,height:a,orientation:e,size:i,...n})}):t.jsx(E,{size:i,length:a,orientation:e,...n})})}}));
//# sourceMappingURL=MeterBar-90569d10.js.map
