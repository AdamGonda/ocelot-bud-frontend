define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "@oracle/oraclejet-preact/UNSAFE_Toolbar", "@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode", "ojs/ojvcomponent", "./items-toolbar"], function (require, exports, jsx_runtime_1, translationBundle_1, UNSAFE_Toolbar_1, UNSAFE_useTabbableMode_1, ojvcomponent_1, items_toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toolbar = void 0;
    exports.Toolbar = (0, ojvcomponent_1.registerCustomElement)('oj-c-toolbar', ({ 'aria-controls': ariaControls, 'aria-label': ariaLabel, spacing, size, chroming, items = [], toolbarSelection = {}, onToolbarSelectionChanged, onOjToolbarAction, onOjToolbarSelection }) => {
        return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { children: (0, jsx_runtime_1.jsx)(UNSAFE_Toolbar_1.Toolbar, { "aria-controls": ariaControls, "aria-label": ariaLabel, spacing: spacing, children: (0, jsx_runtime_1.jsx)(items_toolbar_1.ItemsToolbar, { items: items, size: size, chroming: chroming, toolbarSelection: toolbarSelection, onToolbarSelectionChanged: onToolbarSelectionChanged, onOjToolbarAction: onOjToolbarAction, onOjToolbarSelection: onOjToolbarSelection }) }) }));
    }, "Toolbar", { "properties": { "spacing": { "type": "string", "enumValues": ["sm", "lg"] }, "chroming": { "type": "string", "enumValues": ["borderless", "outlined"] }, "size": { "type": "string", "enumValues": ["sm", "md", "lg"] }, "items": { "type": "Array<object>" }, "toolbarSelection": { "type": "object", "writeback": true } }, "events": { "ojToolbarAction": { "bubbles": true }, "ojToolbarSelection": { "bubbles": true } }, "extension": { "_WRITEBACK_PROPS": ["toolbarSelection"], "_READ_ONLY_PROPS": [], "_OBSERVED_GLOBAL_PROPS": ["aria-controls", "aria-label"] } }, { "items": [], "toolbarSelection": {} }, {
        '@oracle/oraclejet-preact': translationBundle_1.default
    }, { consume: [UNSAFE_useTabbableMode_1.TabbableModeContext] });
});
