"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/generatedCodeSidebar.tsx":
/*!*********************************************!*\
  !*** ./components/generatedCodeSidebar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var codeToRender;\n    function extractData(data) {\n        codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {\n                return snippet.code(data.arguments ? data.arguments : \"undefined\");\n            }\n        });\n        for(var i = 0; i < data.length; i++){\n            codeToRender = extractData(data[i]);\n        }\n    }\n    return codeToRender;\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    console.log(generateCodeSnippet(nodeCode));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: nodeCode.length > 0 ? \"generateCodeSnippet(nodeCode)\" : \"drag and connect blocks to generate code\",\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"0sAqPagYW91fpGmwu+A5Wkrn6z8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXIudHN4P2Y0ODUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IENvZGVCbG9jaywgZHJhY3VsYSB9IGZyb20gXCJyZWFjdC1jb2RlLWJsb2Nrc1wiO1xuXG5pbXBvcnQge3NlbGVjdENvZGVHZW5lcmF0ZWQsIHNlbGVjdE5vZGVzLCB1cGRhdGVDb2RlR2VuZXJhdG9yfSBmcm9tICcuLi9yZWR1eC10b29sa2l0L3NsaWNlcy9mbG93U2xpY2UnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuXG5mdW5jdGlvbiBNeUNvb2xDb2RlQmxvY2soeyBjb2RlLCBsYW5ndWFnZSwgc2hvd0xpbmVOdW1iZXJzfSkge1xuICByZXR1cm4gKFxuICAgIDxDb2RlQmxvY2tcbiAgICAgIHRleHQ9e2NvZGV9XG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICBzaG93TGluZU51bWJlcnM9e3Nob3dMaW5lTnVtYmVyc31cbiAgICAgIHRoZW1lPXtkcmFjdWxhfVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IGNvZGUgPSBgY29uc3QgeyBDbGllbnQsIEdhdGV3YXlJbnRlbnRCaXRzIH0gPSByZXF1aXJlKCdkaXNjb3JkLmpzJyk7XG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgaW50ZW50czogW0dhdGV3YXlJbnRlbnRCaXRzLkd1aWxkc10gfSk7XG5cbmNsaWVudC5vbigncmVhZHknLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKExvZ2dlZCBpbiBhcyB1c2VyISk7XG59KTtcblxuY2xpZW50Lm9uKCdpbnRlcmFjdGlvbkNyZWF0ZScsIGFzeW5jIGludGVyYWN0aW9uID0+IHtcbiAgaWYgKCFpbnRlcmFjdGlvbi5pc0NoYXRJbnB1dENvbW1hbmQoKSkgcmV0dXJuO1xuXG4gIGlmIChpbnRlcmFjdGlvbi5jb21tYW5kTmFtZSA9PT0gJ3BpbmcnKSB7XG4gICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoJ1BvbmchJyk7XG4gIH1cbn0pO1xuXG5jbGllbnQubG9naW4oJ3Rva2VuJyk7YFxuXG5jb25zdCBjb2RlU25pcHBldHMgPSBbe1xuICB0eXBlOiAnc2xhc2hDb21tYW5kJyxcbiAgY29kZTogKGRhdGEpID0+IGBjb25zdCBkYXRhID0gbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxuXHQuc2V0TmFtZSgnJHtkYXRhfScpYFxufV1cblxuY29uc3QgZ2VuZXJhdGVDb2RlU25pcHBldCA9IChkYXRhKSA9PiB7XG4gIHZhciBjb2RlVG9SZW5kZXJcbiAgZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSl7XG4gICAgY29kZVNuaXBwZXRzLm1hcChzbmlwcGV0ID0+IHtcbiAgICAgIGlmIChzbmlwcGV0LnR5cGUgPT0gZGF0YS50eXBlKXtcbiAgICAgICAgcmV0dXJuIHNuaXBwZXQuY29kZShkYXRhLmFyZ3VtZW50cyA/IGRhdGEuYXJndW1lbnRzIDogJ3VuZGVmaW5lZCcpXG4gICAgICB9XG4gICAgfSlcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgIGNvZGVUb1JlbmRlciA9IGV4dHJhY3REYXRhKGRhdGFbaV0pXG4gIH1cbiAgfVxuICByZXR1cm4gY29kZVRvUmVuZGVyXG59XG5cblxuXG5jb25zdCBHZW5lcmF0ZWRDb2RlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBub2RlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5vZGVzKSAgXG4gICAgLy93aGVuIGEgbm9kZSBpcyBhZGRlZCwgZ2V0IHRoZSBub2RlLmRhdGEuc2xhc2hDb21tYW5kOiB0byByZXR1cm4gY29kZSBgKHNsYXNoY29tbWFuZCBib2lsZXJwbGF0ZSksICR7bm9kZS5kYXRhLnNsYXNoY29tbWFuZH0gKG1vcmUgc2xhc2hjb21tYW5kIGJvaWxlcnBsYXRlKWBcbiAgICAvL3Bvc3NpYmxlIG1lbW9pemUgdG8gbm90IHJ1biBldmVyeSB0aW1lIG5vZGVzIGZyb20gcmVkdXggc3RvcmUgdXBkYXRlXG4gICAgLy9jb25zb2xlLmxvZyhub2RlcylcbiAgICBjb25zdCBub2RlQ29kZSA9IHVzZVNlbGVjdG9yKHNlbGVjdENvZGVHZW5lcmF0ZWQpXG4gICAgY29uc29sZS5sb2cobm9kZUNvZGUpXG4gICAgY29uc29sZS5sb2coZ2VuZXJhdGVDb2RlU25pcHBldChub2RlQ29kZSkpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBwLTQgYmctZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlciB0ZXh0LTJ4bCBmb250LWJvbGRcIj4gR2VuZXJhdGVkIGNvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLWNvZGUgcC0yXCI+XG4gICAgICAgICAgICAgIHsvKiBmYWtlIGNvZGUgZm9yIHByb3RvdHlwZVxuICAgICAgICAgICAgPE15Q29vbENvZGVCbG9jayBjb2RlPXtjb2RlfSBsYW5ndWFnZT17J2phdmFzY3JpcHQnfSBzaG93TGluZU51bWJlcnM9e3RydWV9IC8+ICovfVxuICAgICAgICAgICAgPE15Q29vbENvZGVCbG9jayBjb2RlPXtub2RlQ29kZS5sZW5ndGggPiAwID8gXCJnZW5lcmF0ZUNvZGVTbmlwcGV0KG5vZGVDb2RlKVwiIDogJ2RyYWcgYW5kIGNvbm5lY3QgYmxvY2tzIHRvIGdlbmVyYXRlIGNvZGUnfSBsYW5ndWFnZT17J2phdmFzY3JpcHQnfSBzaG93TGluZU51bWJlcnM9e3RydWV9IC8+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVkQ29kZVNpZGViYXIiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwiZHJhY3VsYSIsInNlbGVjdENvZGVHZW5lcmF0ZWQiLCJzZWxlY3ROb2RlcyIsInVzZVNlbGVjdG9yIiwiTXlDb29sQ29kZUJsb2NrIiwiY29kZSIsImxhbmd1YWdlIiwic2hvd0xpbmVOdW1iZXJzIiwidGV4dCIsInRoZW1lIiwiY29kZVNuaXBwZXRzIiwidHlwZSIsImRhdGEiLCJnZW5lcmF0ZUNvZGVTbmlwcGV0IiwiY29kZVRvUmVuZGVyIiwiZXh0cmFjdERhdGEiLCJtYXAiLCJzbmlwcGV0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsIkdlbmVyYXRlZENvZGVTaWRlYmFyIiwibm9kZXMiLCJub2RlQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ })

});