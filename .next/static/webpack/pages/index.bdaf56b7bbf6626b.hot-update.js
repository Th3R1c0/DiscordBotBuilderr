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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var extractData = function extractData(data) {\n        var a = codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {\n                return snippet.code(data.arguments ? data.arguments : \"undefined\");\n            }\n        });\n    };\n    var codeToRender;\n    for(var i = 0; i < data.length; i++){\n        codeToRender = extractData(data[i]);\n    }\n    return codeToRender;\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(useState(\"drag and connect blocks to generate code\"), 2), code = ref[0], setCode = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: nodeCode.length > 0 ? generateCodeSnippet(nodeCode) : \"drag and connect blocks to generate code\",\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"GJ6jOkeYpVU3xUAL/1D+R7blmy0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7R0F0QktlLG9CQUFvQjs7UUFDUnBCLG9EQUFXO1FBSVJBLG9EQUFXOzs7QUFMMUJvQixNQUFBQSxvQkFBb0I7QUF1QjFCLCtEQUFlQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmF0ZWRDb2RlU2lkZWJhci50c3g/ZjQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgQ29kZUJsb2NrLCBkcmFjdWxhIH0gZnJvbSBcInJlYWN0LWNvZGUtYmxvY2tzXCI7XG5cbmltcG9ydCB7c2VsZWN0Q29kZUdlbmVyYXRlZCwgc2VsZWN0Tm9kZXMsIHVwZGF0ZUNvZGVHZW5lcmF0b3J9IGZyb20gJy4uL3JlZHV4LXRvb2xraXQvc2xpY2VzL2Zsb3dTbGljZSdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gTXlDb29sQ29kZUJsb2NrKHsgY29kZSwgbGFuZ3VhZ2UsIHNob3dMaW5lTnVtYmVyc30pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29kZUJsb2NrXG4gICAgICB0ZXh0PXtjb2RlfVxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgc2hvd0xpbmVOdW1iZXJzPXtzaG93TGluZU51bWJlcnN9XG4gICAgICB0aGVtZT17ZHJhY3VsYX1cbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBjb2RlID0gYGNvbnN0IHsgQ2xpZW50LCBHYXRld2F5SW50ZW50Qml0cyB9ID0gcmVxdWlyZSgnZGlzY29yZC5qcycpO1xuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7IGludGVudHM6IFtHYXRld2F5SW50ZW50Qml0cy5HdWlsZHNdIH0pO1xuXG5jbGllbnQub24oJ3JlYWR5JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhMb2dnZWQgaW4gYXMgdXNlciEpO1xufSk7XG5cbmNsaWVudC5vbignaW50ZXJhY3Rpb25DcmVhdGUnLCBhc3luYyBpbnRlcmFjdGlvbiA9PiB7XG4gIGlmICghaW50ZXJhY3Rpb24uaXNDaGF0SW5wdXRDb21tYW5kKCkpIHJldHVybjtcblxuICBpZiAoaW50ZXJhY3Rpb24uY29tbWFuZE5hbWUgPT09ICdwaW5nJykge1xuICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KCdQb25nIScpO1xuICB9XG59KTtcblxuY2xpZW50LmxvZ2luKCd0b2tlbicpO2BcblxuY29uc3QgY29kZVNuaXBwZXRzID0gW3tcbiAgdHlwZTogJ3NsYXNoQ29tbWFuZCcsXG4gIGNvZGU6IChkYXRhKSA9PiBgY29uc3QgZGF0YSA9IG5ldyBTbGFzaENvbW1hbmRCdWlsZGVyKClcblx0LnNldE5hbWUoJyR7ZGF0YX0nKWBcbn1dXG5cbmNvbnN0IGdlbmVyYXRlQ29kZVNuaXBwZXQgPSAoZGF0YSkgPT4ge1xuICB2YXIgY29kZVRvUmVuZGVyXG4gIGZ1bmN0aW9uIGV4dHJhY3REYXRhKGRhdGEpe1xuICAgIHZhciBhID0gY29kZVNuaXBwZXRzLm1hcChzbmlwcGV0ID0+IHtcbiAgICAgIGlmIChzbmlwcGV0LnR5cGUgPT0gZGF0YS50eXBlKXtcbiAgICAgICAgcmV0dXJuIHNuaXBwZXQuY29kZShkYXRhLmFyZ3VtZW50cyA/IGRhdGEuYXJndW1lbnRzIDogJ3VuZGVmaW5lZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgY29kZVRvUmVuZGVyID0gZXh0cmFjdERhdGEoZGF0YVtpXSlcbiAgfVxuICByZXR1cm4gY29kZVRvUmVuZGVyXG59XG5cblxuXG5jb25zdCBHZW5lcmF0ZWRDb2RlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBub2RlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5vZGVzKSAgXG4gICAgLy93aGVuIGEgbm9kZSBpcyBhZGRlZCwgZ2V0IHRoZSBub2RlLmRhdGEuc2xhc2hDb21tYW5kOiB0byByZXR1cm4gY29kZSBgKHNsYXNoY29tbWFuZCBib2lsZXJwbGF0ZSksICR7bm9kZS5kYXRhLnNsYXNoY29tbWFuZH0gKG1vcmUgc2xhc2hjb21tYW5kIGJvaWxlcnBsYXRlKWBcbiAgICAvL3Bvc3NpYmxlIG1lbW9pemUgdG8gbm90IHJ1biBldmVyeSB0aW1lIG5vZGVzIGZyb20gcmVkdXggc3RvcmUgdXBkYXRlXG4gICAgLy9jb25zb2xlLmxvZyhub2RlcylcbiAgICBjb25zdCBub2RlQ29kZSA9IHVzZVNlbGVjdG9yKHNlbGVjdENvZGVHZW5lcmF0ZWQpXG4gICAgY29uc29sZS5sb2cobm9kZUNvZGUpXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJ2RyYWcgYW5kIGNvbm5lY3QgYmxvY2tzIHRvIGdlbmVyYXRlIGNvZGUnKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgaC1mdWxsIGZsZXggZmxleC1jb2wgcC00IGJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXIgdGV4dC0yeGwgZm9udC1ib2xkXCI+IEdlbmVyYXRlZCBjb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cC1jb2RlIHAtMlwiPlxuICAgICAgICAgICAgICB7LyogZmFrZSBjb2RlIGZvciBwcm90b3R5cGVcbiAgICAgICAgICAgIDxNeUNvb2xDb2RlQmxvY2sgY29kZT17Y29kZX0gbGFuZ3VhZ2U9eydqYXZhc2NyaXB0J30gc2hvd0xpbmVOdW1iZXJzPXt0cnVlfSAvPiAqL31cbiAgICAgICAgICAgIDxNeUNvb2xDb2RlQmxvY2sgY29kZT17bm9kZUNvZGUubGVuZ3RoID4gMCA/IGdlbmVyYXRlQ29kZVNuaXBwZXQobm9kZUNvZGUpIDogJ2RyYWcgYW5kIGNvbm5lY3QgYmxvY2tzIHRvIGdlbmVyYXRlIGNvZGUnfSBsYW5ndWFnZT17J2phdmFzY3JpcHQnfSBzaG93TGluZU51bWJlcnM9e3RydWV9IC8+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVkQ29kZVNpZGViYXIiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwiZHJhY3VsYSIsInNlbGVjdENvZGVHZW5lcmF0ZWQiLCJzZWxlY3ROb2RlcyIsInVzZVNlbGVjdG9yIiwidXNlRWZmZWN0IiwiTXlDb29sQ29kZUJsb2NrIiwiY29kZSIsImxhbmd1YWdlIiwic2hvd0xpbmVOdW1iZXJzIiwidGV4dCIsInRoZW1lIiwiY29kZVNuaXBwZXRzIiwidHlwZSIsImRhdGEiLCJnZW5lcmF0ZUNvZGVTbmlwcGV0IiwiZXh0cmFjdERhdGEiLCJhIiwibWFwIiwic25pcHBldCIsImFyZ3VtZW50cyIsImNvZGVUb1JlbmRlciIsImkiLCJsZW5ndGgiLCJHZW5lcmF0ZWRDb2RlU2lkZWJhciIsIm5vZGVzIiwibm9kZUNvZGUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzZXRDb2RlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ })

});