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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var extractData = function extractData(data) {\n        codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {}\n        });\n    };\n    var codeToRender = \"\";\n    return codeSnippets[0].code(data);\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: nodeCode.length > 0 ? generateCodeSnippet(nodeCode) : \"drag and connect blocks to generate code\",\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"0sAqPagYW91fpGmwu+A5Wkrn6z8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYXRlZENvZGVTaWRlYmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7O0FBQXVEO0FBRWdEO0FBQ2hEO0FBR3ZELFNBQVNLLGVBQWUsQ0FBQyxLQUFrQyxFQUFFO1FBQWxDQyxJQUFJLEdBQU4sS0FBa0MsQ0FBaENBLElBQUksRUFBRUMsUUFBUSxHQUFoQixLQUFrQyxDQUExQkEsUUFBUSxFQUFFQyxlQUFlLEdBQWpDLEtBQWtDLENBQWhCQSxlQUFlO0lBQ3hELHFCQUNFLDhEQUFDUix3REFBUztRQUNSUyxJQUFJLEVBQUVILElBQUk7UUFDVkMsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxlQUFlLEVBQUVBLGVBQWU7UUFDaENFLEtBQUssRUFBRVQsc0RBQU87Ozs7O1lBQ2QsQ0FDRjtBQUNKLENBQUM7QUFUUUksS0FBQUEsZUFBZTtBQVd4QixJQUFNQyxJQUFJLEdBQUksK2FBZVE7QUFFdEIsSUFBTUssWUFBWSxHQUFHO0lBQUM7UUFDcEJDLElBQUksRUFBRSxjQUFjO1FBQ3BCTixJQUFJLEVBQUUsU0FBQ08sSUFBSTttQkFBSyxxREFDUCxDQUFPLE1BQUUsQ0FBUEEsSUFBSSxFQUFDLElBQUUsQ0FBQztTQUFBO0tBQ3BCO0NBQUM7QUFFRixJQUFNQyxtQkFBbUIsR0FBRyxTQUFDRCxJQUFJLEVBQUs7UUFFM0JFLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDRixJQUFJLEVBQUM7UUFDeEJGLFlBQVksQ0FBQ0ssR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7WUFDMUIsSUFBSUEsT0FBTyxDQUFDTCxJQUFJLElBQUlDLElBQUksQ0FBQ0QsSUFBSSxFQUFDLENBRTlCLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBUEQsSUFBSU0sWUFBWSxHQUFHLEVBQUU7SUFRckIsT0FBT1AsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDTCxJQUFJLENBQUNPLElBQUksQ0FBQztBQUNuQyxDQUFDO0FBSUQsSUFBTU0sb0JBQW9CLEdBQUcsV0FBTTs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHaEIsd0RBQVcsQ0FBQ0Qsd0VBQVcsQ0FBQztJQUN0Qyw4SkFBOEo7SUFDOUosc0VBQXNFO0lBQ3RFLG9CQUFvQjtJQUNwQixJQUFNa0IsUUFBUSxHQUFHakIsd0RBQVcsQ0FBQ0YsZ0ZBQW1CLENBQUM7SUFDakRvQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0lBQ3JCLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OzBCQUN2RCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjswQkFBQyxpQkFBZTs7Ozs7cUJBQU07MEJBQ2pFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzBCQUdoQyw0RUFBQ3BCLGVBQWU7b0JBQUNDLElBQUksRUFBRWUsUUFBUSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxHQUFHWixtQkFBbUIsQ0FBQ08sUUFBUSxDQUFDLEdBQUcsMENBQTBDO29CQUFFZCxRQUFRLEVBQUUsWUFBWTtvQkFBRUMsZUFBZSxFQUFFLElBQUk7Ozs7O3lCQUFJOzs7OztxQkFFcEs7Ozs7OzthQUNKLENBQ1Q7QUFDTCxDQUFDO0dBbEJLVyxvQkFBb0I7O1FBQ1JmLG9EQUFXO1FBSVJBLG9EQUFXOzs7QUFMMUJlLE1BQUFBLG9CQUFvQjtBQW1CMUIsK0RBQWVBLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dlbmVyYXRlZENvZGVTaWRlYmFyLnRzeD9mNDg1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBDb2RlQmxvY2ssIGRyYWN1bGEgfSBmcm9tIFwicmVhY3QtY29kZS1ibG9ja3NcIjtcblxuaW1wb3J0IHtzZWxlY3RDb2RlR2VuZXJhdGVkLCBzZWxlY3ROb2RlcywgdXBkYXRlQ29kZUdlbmVyYXRvcn0gZnJvbSAnLi4vcmVkdXgtdG9vbGtpdC9zbGljZXMvZmxvd1NsaWNlJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cblxuZnVuY3Rpb24gTXlDb29sQ29kZUJsb2NrKHsgY29kZSwgbGFuZ3VhZ2UsIHNob3dMaW5lTnVtYmVyc30pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29kZUJsb2NrXG4gICAgICB0ZXh0PXtjb2RlfVxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgc2hvd0xpbmVOdW1iZXJzPXtzaG93TGluZU51bWJlcnN9XG4gICAgICB0aGVtZT17ZHJhY3VsYX1cbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBjb2RlID0gYGNvbnN0IHsgQ2xpZW50LCBHYXRld2F5SW50ZW50Qml0cyB9ID0gcmVxdWlyZSgnZGlzY29yZC5qcycpO1xuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7IGludGVudHM6IFtHYXRld2F5SW50ZW50Qml0cy5HdWlsZHNdIH0pO1xuXG5jbGllbnQub24oJ3JlYWR5JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhMb2dnZWQgaW4gYXMgdXNlciEpO1xufSk7XG5cbmNsaWVudC5vbignaW50ZXJhY3Rpb25DcmVhdGUnLCBhc3luYyBpbnRlcmFjdGlvbiA9PiB7XG4gIGlmICghaW50ZXJhY3Rpb24uaXNDaGF0SW5wdXRDb21tYW5kKCkpIHJldHVybjtcblxuICBpZiAoaW50ZXJhY3Rpb24uY29tbWFuZE5hbWUgPT09ICdwaW5nJykge1xuICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KCdQb25nIScpO1xuICB9XG59KTtcblxuY2xpZW50LmxvZ2luKCd0b2tlbicpO2BcblxuY29uc3QgY29kZVNuaXBwZXRzID0gW3tcbiAgdHlwZTogJ3NsYXNoQ29tbWFuZCcsXG4gIGNvZGU6IChkYXRhKSA9PiBgY29uc3QgZGF0YSA9IG5ldyBTbGFzaENvbW1hbmRCdWlsZGVyKClcblx0LnNldE5hbWUoJyR7ZGF0YX0nKWBcbn1dXG5cbmNvbnN0IGdlbmVyYXRlQ29kZVNuaXBwZXQgPSAoZGF0YSkgPT4ge1xuICB2YXIgY29kZVRvUmVuZGVyID0gJydcbiAgZnVuY3Rpb24gZXh0cmFjdERhdGEoZGF0YSl7XG4gICAgY29kZVNuaXBwZXRzLm1hcChzbmlwcGV0ID0+IHtcbiAgICAgIGlmIChzbmlwcGV0LnR5cGUgPT0gZGF0YS50eXBlKXtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gY29kZVNuaXBwZXRzWzBdLmNvZGUoZGF0YSlcbn1cblxuXG5cbmNvbnN0IEdlbmVyYXRlZENvZGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0Tm9kZXMpICBcbiAgICAvL3doZW4gYSBub2RlIGlzIGFkZGVkLCBnZXQgdGhlIG5vZGUuZGF0YS5zbGFzaENvbW1hbmQ6IHRvIHJldHVybiBjb2RlIGAoc2xhc2hjb21tYW5kIGJvaWxlcnBsYXRlKSwgJHtub2RlLmRhdGEuc2xhc2hjb21tYW5kfSAobW9yZSBzbGFzaGNvbW1hbmQgYm9pbGVycGxhdGUpYFxuICAgIC8vcG9zc2libGUgbWVtb2l6ZSB0byBub3QgcnVuIGV2ZXJ5IHRpbWUgbm9kZXMgZnJvbSByZWR1eCBzdG9yZSB1cGRhdGVcbiAgICAvL2NvbnNvbGUubG9nKG5vZGVzKVxuICAgIGNvbnN0IG5vZGVDb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q29kZUdlbmVyYXRlZClcbiAgICBjb25zb2xlLmxvZyhub2RlQ29kZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGgtZnVsbCBmbGV4IGZsZXgtY29sIHAtNCBiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIHRleHQtMnhsIGZvbnQtYm9sZFwiPiBHZW5lcmF0ZWQgY29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2NrdXAtY29kZSBwLTJcIj5cbiAgICAgICAgICAgICAgey8qIGZha2UgY29kZSBmb3IgcHJvdG90eXBlXG4gICAgICAgICAgICA8TXlDb29sQ29kZUJsb2NrIGNvZGU9e2NvZGV9IGxhbmd1YWdlPXsnamF2YXNjcmlwdCd9IHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gLz4gKi99XG4gICAgICAgICAgICA8TXlDb29sQ29kZUJsb2NrIGNvZGU9e25vZGVDb2RlLmxlbmd0aCA+IDAgPyBnZW5lcmF0ZUNvZGVTbmlwcGV0KG5vZGVDb2RlKSA6ICdkcmFnIGFuZCBjb25uZWN0IGJsb2NrcyB0byBnZW5lcmF0ZSBjb2RlJ30gbGFuZ3VhZ2U9eydqYXZhc2NyaXB0J30gc2hvd0xpbmVOdW1iZXJzPXt0cnVlfSAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlZENvZGVTaWRlYmFyIl0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImRyYWN1bGEiLCJzZWxlY3RDb2RlR2VuZXJhdGVkIiwic2VsZWN0Tm9kZXMiLCJ1c2VTZWxlY3RvciIsIk15Q29vbENvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsInNob3dMaW5lTnVtYmVycyIsInRleHQiLCJ0aGVtZSIsImNvZGVTbmlwcGV0cyIsInR5cGUiLCJkYXRhIiwiZ2VuZXJhdGVDb2RlU25pcHBldCIsImV4dHJhY3REYXRhIiwibWFwIiwic25pcHBldCIsImNvZGVUb1JlbmRlciIsIkdlbmVyYXRlZENvZGVTaWRlYmFyIiwibm9kZXMiLCJub2RlQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ })

});