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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var extractData = function extractData(data) {\n        var a = codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {\n                return snippet.code(data.arguments ? data.arguments : \"undefined\");\n            }\n        });\n    };\n    var codeToRender;\n    for(var i = 0; i < data.length; i++){\n        codeToRender = extractData(data[i]);\n    }\n    return codeToRender;\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), code = ref[0], setCode = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (nodeCode.length > 0) {\n            var a = generateCodeSnippet(nodeCode);\n            setCode(a);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: code == \"\" ? \"npthig\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: code,\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 36\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"gpRVXRoqQIXUE4S8STN8ZEpUhZ4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxJQUFJO29CQUFHQyxRQUFRLEVBQUUsWUFBWTtvQkFBRUMsZUFBZSxFQUFFLElBQUk7Ozs7O3lCQUFJOzs7OztxQkFHaEc7Ozs7OzthQUNKLENBQ1Q7QUFDTCxDQUFDO0dBMUJLZSxvQkFBb0I7O1FBQ1JyQixvREFBVztRQUlSQSxvREFBVzs7O0FBTDFCcUIsTUFBQUEsb0JBQW9CO0FBMkIxQiwrREFBZUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhdGVkQ29kZVNpZGViYXIudHN4P2Y0ODUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IENvZGVCbG9jaywgZHJhY3VsYSB9IGZyb20gXCJyZWFjdC1jb2RlLWJsb2Nrc1wiO1xuXG5pbXBvcnQge3NlbGVjdENvZGVHZW5lcmF0ZWQsIHNlbGVjdE5vZGVzLCB1cGRhdGVDb2RlR2VuZXJhdG9yfSBmcm9tICcuLi9yZWR1eC10b29sa2l0L3NsaWNlcy9mbG93U2xpY2UnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5mdW5jdGlvbiBNeUNvb2xDb2RlQmxvY2soeyBjb2RlLCBsYW5ndWFnZSwgc2hvd0xpbmVOdW1iZXJzfSkge1xuICByZXR1cm4gKFxuICAgIDxDb2RlQmxvY2tcbiAgICAgIHRleHQ9e2NvZGV9XG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICBzaG93TGluZU51bWJlcnM9e3Nob3dMaW5lTnVtYmVyc31cbiAgICAgIHRoZW1lPXtkcmFjdWxhfVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IGNvZGUgPSBgY29uc3QgeyBDbGllbnQsIEdhdGV3YXlJbnRlbnRCaXRzIH0gPSByZXF1aXJlKCdkaXNjb3JkLmpzJyk7XG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgaW50ZW50czogW0dhdGV3YXlJbnRlbnRCaXRzLkd1aWxkc10gfSk7XG5cbmNsaWVudC5vbigncmVhZHknLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKExvZ2dlZCBpbiBhcyB1c2VyISk7XG59KTtcblxuY2xpZW50Lm9uKCdpbnRlcmFjdGlvbkNyZWF0ZScsIGFzeW5jIGludGVyYWN0aW9uID0+IHtcbiAgaWYgKCFpbnRlcmFjdGlvbi5pc0NoYXRJbnB1dENvbW1hbmQoKSkgcmV0dXJuO1xuXG4gIGlmIChpbnRlcmFjdGlvbi5jb21tYW5kTmFtZSA9PT0gJ3BpbmcnKSB7XG4gICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoJ1BvbmchJyk7XG4gIH1cbn0pO1xuXG5jbGllbnQubG9naW4oJ3Rva2VuJyk7YFxuXG5jb25zdCBjb2RlU25pcHBldHMgPSBbe1xuICB0eXBlOiAnc2xhc2hDb21tYW5kJyxcbiAgY29kZTogKGRhdGEpID0+IGBjb25zdCBkYXRhID0gbmV3IFNsYXNoQ29tbWFuZEJ1aWxkZXIoKVxuXHQuc2V0TmFtZSgnJHtkYXRhfScpYFxufV1cblxuY29uc3QgZ2VuZXJhdGVDb2RlU25pcHBldCA9IChkYXRhKSA9PiB7XG4gIHZhciBjb2RlVG9SZW5kZXJcbiAgZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSl7XG4gICAgdmFyIGEgPSBjb2RlU25pcHBldHMubWFwKHNuaXBwZXQgPT4ge1xuICAgICAgaWYgKHNuaXBwZXQudHlwZSA9PSBkYXRhLnR5cGUpe1xuICAgICAgICByZXR1cm4gc25pcHBldC5jb2RlKGRhdGEuYXJndW1lbnRzID8gZGF0YS5hcmd1bWVudHMgOiAndW5kZWZpbmVkJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG4gICBjb2RlVG9SZW5kZXIgPSBleHRyYWN0RGF0YShkYXRhW2ldKVxuICB9XG4gIHJldHVybiBjb2RlVG9SZW5kZXJcbn1cblxuXG5cbmNvbnN0IEdlbmVyYXRlZENvZGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0Tm9kZXMpICBcbiAgICAvL3doZW4gYSBub2RlIGlzIGFkZGVkLCBnZXQgdGhlIG5vZGUuZGF0YS5zbGFzaENvbW1hbmQ6IHRvIHJldHVybiBjb2RlIGAoc2xhc2hjb21tYW5kIGJvaWxlcnBsYXRlKSwgJHtub2RlLmRhdGEuc2xhc2hjb21tYW5kfSAobW9yZSBzbGFzaGNvbW1hbmQgYm9pbGVycGxhdGUpYFxuICAgIC8vcG9zc2libGUgbWVtb2l6ZSB0byBub3QgcnVuIGV2ZXJ5IHRpbWUgbm9kZXMgZnJvbSByZWR1eCBzdG9yZSB1cGRhdGVcbiAgICAvL2NvbnNvbGUubG9nKG5vZGVzKVxuICAgIGNvbnN0IG5vZGVDb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29kZUdlbmVyYXRlZClcbiAgICBjb25zb2xlLmxvZyhub2RlQ29kZSlcbiAgICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKG5vZGVDb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYSA9IGdlbmVyYXRlQ29kZVNuaXBwZXQobm9kZUNvZGUpXG4gICAgICAgIHNldENvZGUoYSlcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGgtZnVsbCBmbGV4IGZsZXgtY29sIHAtNCBiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIHRleHQtMnhsIGZvbnQtYm9sZFwiPiBHZW5lcmF0ZWQgY29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2NrdXAtY29kZSBwLTJcIj5cbiAgICAgICAgICAgICAgey8qIGZha2UgY29kZSBmb3IgcHJvdG90eXBlXG4gICAgICAgICAgICA8TXlDb29sQ29kZUJsb2NrIGNvZGU9e2NvZGV9IGxhbmd1YWdlPXsnamF2YXNjcmlwdCd9IHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gLz4gKi99XG4gICAgICAgICAgICB7Y29kZSA9PSAnJyA/ICducHRoaWcnOjxNeUNvb2xDb2RlQmxvY2sgY29kZT17Y29kZSB9IGxhbmd1YWdlPXsnamF2YXNjcmlwdCd9IHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gLz4gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVkQ29kZVNpZGViYXIiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwiZHJhY3VsYSIsInNlbGVjdENvZGVHZW5lcmF0ZWQiLCJzZWxlY3ROb2RlcyIsInVzZVNlbGVjdG9yIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNeUNvb2xDb2RlQmxvY2siLCJjb2RlIiwibGFuZ3VhZ2UiLCJzaG93TGluZU51bWJlcnMiLCJ0ZXh0IiwidGhlbWUiLCJjb2RlU25pcHBldHMiLCJ0eXBlIiwiZGF0YSIsImdlbmVyYXRlQ29kZVNuaXBwZXQiLCJleHRyYWN0RGF0YSIsImEiLCJtYXAiLCJzbmlwcGV0IiwiYXJndW1lbnRzIiwiY29kZVRvUmVuZGVyIiwiaSIsImxlbmd0aCIsIkdlbmVyYXRlZENvZGVTaWRlYmFyIiwibm9kZXMiLCJub2RlQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRDb2RlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ })

});