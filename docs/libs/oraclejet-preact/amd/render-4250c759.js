define(['exports', 'preact/jsx-runtime', '@testing-library/preact', '@testing-library/user-event', './LayerHost-e95c5f30', './EnvironmentProvider-8f6fc388', './resources/nls/en/bundle'], (function(e,r,n,t,o,i,s){"use strict";function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=d(t);const u={translations:{"@oracle/oraclejet-preact":s.default},mode:"test"},a=(e,t=u,o)=>{const s={...u,...t},{rerender:d,...c}=n.render(r.jsx(i.RootEnvironmentProvider,{environment:s,children:e}),o);return{rerender:e=>d(r.jsx(i.RootEnvironmentProvider,{environment:s,children:e})),...c}};e.renderAndSetupInEnv=(...e)=>({user:c.default.setup(),...a(...e)}),e.renderInEnv=a}));
//# sourceMappingURL=render-4250c759.js.map
