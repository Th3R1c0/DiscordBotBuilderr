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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var extractData = function extractData(data) {\n        var a = codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {\n                return snippet.code(data.arguments ? data.arguments : \"undefined\");\n            }\n        });\n    };\n    var codeToRender;\n    for(var i = 0; i < data.length; i++){\n        codeToRender = extractData(data[i]);\n    }\n    return codeToRender;\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(useState(\"drag and connect blocks to generate code\"), 2), code = ref[0], setCode = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: nodeCode.length > 0 ? generateCodeSnippet(nodeCode) : \"drag and connect blocks to generate code\",\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"5Vxet2d/u4GIPWsATXBfjIM3Z+o=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMMUJtQixNQUFBQSxvQkFBb0I7QUFvQjFCLCtEQUFlQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmF0ZWRDb2RlU2lkZWJhci50c3g/ZjQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgQ29kZUJsb2NrLCBkcmFjdWxhIH0gZnJvbSBcInJlYWN0LWNvZGUtYmxvY2tzXCI7XG5cbmltcG9ydCB7c2VsZWN0Q29kZUdlbmVyYXRlZCwgc2VsZWN0Tm9kZXMsIHVwZGF0ZUNvZGVHZW5lcmF0b3J9IGZyb20gJy4uL3JlZHV4LXRvb2xraXQvc2xpY2VzL2Zsb3dTbGljZSdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cbmZ1bmN0aW9uIE15Q29vbENvZGVCbG9jayh7IGNvZGUsIGxhbmd1YWdlLCBzaG93TGluZU51bWJlcnN9KSB7XG4gIHJldHVybiAoXG4gICAgPENvZGVCbG9ja1xuICAgICAgdGV4dD17Y29kZX1cbiAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgIHNob3dMaW5lTnVtYmVycz17c2hvd0xpbmVOdW1iZXJzfVxuICAgICAgdGhlbWU9e2RyYWN1bGF9XG4gICAgLz5cbiAgKTtcbn1cblxuY29uc3QgY29kZSA9IGBjb25zdCB7IENsaWVudCwgR2F0ZXdheUludGVudEJpdHMgfSA9IHJlcXVpcmUoJ2Rpc2NvcmQuanMnKTtcbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoeyBpbnRlbnRzOiBbR2F0ZXdheUludGVudEJpdHMuR3VpbGRzXSB9KTtcblxuY2xpZW50Lm9uKCdyZWFkeScsICgpID0+IHtcbiAgY29uc29sZS5sb2coTG9nZ2VkIGluIGFzIHVzZXIhKTtcbn0pO1xuXG5jbGllbnQub24oJ2ludGVyYWN0aW9uQ3JlYXRlJywgYXN5bmMgaW50ZXJhY3Rpb24gPT4ge1xuICBpZiAoIWludGVyYWN0aW9uLmlzQ2hhdElucHV0Q29tbWFuZCgpKSByZXR1cm47XG5cbiAgaWYgKGludGVyYWN0aW9uLmNvbW1hbmROYW1lID09PSAncGluZycpIHtcbiAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSgnUG9uZyEnKTtcbiAgfVxufSk7XG5cbmNsaWVudC5sb2dpbigndG9rZW4nKTtgXG5cbmNvbnN0IGNvZGVTbmlwcGV0cyA9IFt7XG4gIHR5cGU6ICdzbGFzaENvbW1hbmQnLFxuICBjb2RlOiAoZGF0YSkgPT4gYGNvbnN0IGRhdGEgPSBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXG5cdC5zZXROYW1lKCcke2RhdGF9JylgXG59XVxuXG5jb25zdCBnZW5lcmF0ZUNvZGVTbmlwcGV0ID0gKGRhdGEpID0+IHtcbiAgdmFyIGNvZGVUb1JlbmRlclxuICBmdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhKXtcbiAgICB2YXIgYSA9IGNvZGVTbmlwcGV0cy5tYXAoc25pcHBldCA9PiB7XG4gICAgICBpZiAoc25pcHBldC50eXBlID09IGRhdGEudHlwZSl7XG4gICAgICAgIHJldHVybiBzbmlwcGV0LmNvZGUoZGF0YS5hcmd1bWVudHMgPyBkYXRhLmFyZ3VtZW50cyA6ICd1bmRlZmluZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgIGNvZGVUb1JlbmRlciA9IGV4dHJhY3REYXRhKGRhdGFbaV0pXG4gIH1cbiAgcmV0dXJuIGNvZGVUb1JlbmRlclxufVxuXG5cblxuY29uc3QgR2VuZXJhdGVkQ29kZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSB1c2VTZWxlY3RvcihzZWxlY3ROb2RlcykgIFxuICAgIC8vd2hlbiBhIG5vZGUgaXMgYWRkZWQsIGdldCB0aGUgbm9kZS5kYXRhLnNsYXNoQ29tbWFuZDogdG8gcmV0dXJuIGNvZGUgYChzbGFzaGNvbW1hbmQgYm9pbGVycGxhdGUpLCAke25vZGUuZGF0YS5zbGFzaGNvbW1hbmR9IChtb3JlIHNsYXNoY29tbWFuZCBib2lsZXJwbGF0ZSlgXG4gICAgLy9wb3NzaWJsZSBtZW1vaXplIHRvIG5vdCBydW4gZXZlcnkgdGltZSBub2RlcyBmcm9tIHJlZHV4IHN0b3JlIHVwZGF0ZVxuICAgIC8vY29uc29sZS5sb2cobm9kZXMpXG4gICAgY29uc3Qgbm9kZUNvZGUgPSB1c2VTZWxlY3RvcihzZWxlY3RDb2RlR2VuZXJhdGVkKVxuICAgIGNvbnNvbGUubG9nKG5vZGVDb2RlKVxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCdkcmFnIGFuZCBjb25uZWN0IGJsb2NrcyB0byBnZW5lcmF0ZSBjb2RlJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGgtZnVsbCBmbGV4IGZsZXgtY29sIHAtNCBiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIHRleHQtMnhsIGZvbnQtYm9sZFwiPiBHZW5lcmF0ZWQgY29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2NrdXAtY29kZSBwLTJcIj5cbiAgICAgICAgICAgICAgey8qIGZha2UgY29kZSBmb3IgcHJvdG90eXBlXG4gICAgICAgICAgICA8TXlDb29sQ29kZUJsb2NrIGNvZGU9e2NvZGV9IGxhbmd1YWdlPXsnamF2YXNjcmlwdCd9IHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gLz4gKi99XG4gICAgICAgICAgICA8TXlDb29sQ29kZUJsb2NrIGNvZGU9e25vZGVDb2RlLmxlbmd0aCA+IDAgPyBnZW5lcmF0ZUNvZGVTbmlwcGV0KG5vZGVDb2RlKSA6ICdkcmFnIGFuZCBjb25uZWN0IGJsb2NrcyB0byBnZW5lcmF0ZSBjb2RlJ30gbGFuZ3VhZ2U9eydqYXZhc2NyaXB0J30gc2hvd0xpbmVOdW1iZXJzPXt0cnVlfSAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlZENvZGVTaWRlYmFyIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImRyYWN1bGEiLCJzZWxlY3RDb2RlR2VuZXJhdGVkIiwic2VsZWN0Tm9kZXMiLCJ1c2VTZWxlY3RvciIsIk15Q29vbENvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsInNob3dMaW5lTnVtYmVycyIsInRleHQiLCJ0aGVtZSIsImNvZGVTbmlwcGV0cyIsInR5cGUiLCJkYXRhIiwiZ2VuZXJhdGVDb2RlU25pcHBldCIsImV4dHJhY3REYXRhIiwiYSIsIm1hcCIsInNuaXBwZXQiLCJhcmd1bWVudHMiLCJjb2RlVG9SZW5kZXIiLCJpIiwibGVuZ3RoIiwiR2VuZXJhdGVkQ29kZVNpZGViYXIiLCJub2RlcyIsIm5vZGVDb2RlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwic2V0Q29kZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_array_with_holes.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_array_with_holes.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayWithHoles; }\n/* harmony export */ });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fYXJyYXlfd2l0aF9ob2xlcy5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fYXJyYXlfd2l0aF9ob2xlcy5tanM/YzY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_array_with_holes.mjs\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_non_iterable_rest.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_non_iterable_rest.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _nonIterableRest; }\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fbm9uX2l0ZXJhYmxlX3Jlc3QubWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX25vbl9pdGVyYWJsZV9yZXN0Lm1qcz8wZGQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_non_iterable_rest.mjs\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_sliced_to_array.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_sliced_to_array.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _slicedToArray; }\n/* harmony export */ });\n/* harmony import */ var _array_with_holes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_array_with_holes.mjs */ \"./node_modules/@swc/helpers/src/_array_with_holes.mjs\");\n/* harmony import */ var _iterable_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_iterable_to_array.mjs */ \"./node_modules/@swc/helpers/src/_iterable_to_array.mjs\");\n/* harmony import */ var _non_iterable_rest_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_non_iterable_rest.mjs */ \"./node_modules/@swc/helpers/src/_non_iterable_rest.mjs\");\n/* harmony import */ var _unsupported_iterable_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unsupported_iterable_to_array.mjs */ \"./node_modules/@swc/helpers/src/_unsupported_iterable_to_array.mjs\");\n\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return (0,_array_with_holes_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterable_to_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || (0,_unsupported_iterable_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr, i) || (0,_non_iterable_rest_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fc2xpY2VkX3RvX2FycmF5Lm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUNPO0FBQ0w7QUFDdUI7O0FBRS9EO0FBQ2YsU0FBUyxpRUFBYyxTQUFTLGtFQUFvQixZQUFZLDhFQUEwQixZQUFZLGtFQUFlO0FBQ3JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19zbGljZWRfdG9fYXJyYXkubWpzPzQ2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gJy4vX2FycmF5X3dpdGhfaG9sZXMubWpzJztcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tICcuL19pdGVyYWJsZV90b19hcnJheS5tanMnO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tICcuL19ub25faXRlcmFibGVfcmVzdC5tanMnO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gJy4vX3Vuc3VwcG9ydGVkX2l0ZXJhYmxlX3RvX2FycmF5Lm1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_sliced_to_array.mjs\n"));

/***/ })

});