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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"./node_modules/react-code-blocks/dist/react-code-blocks.esm.js\");\n/* harmony import */ var _redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-toolkit/slices/flowSlice */ \"./redux-toolkit/slices/flowSlice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyCoolCodeBlock(param) {\n    var code = param.code, language = param.language, showLineNumbers = param.showLineNumbers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.CodeBlock, {\n        text: code,\n        language: language,\n        showLineNumbers: showLineNumbers,\n        theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__.dracula\n    }, void 0, false, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = MyCoolCodeBlock;\nvar code = \"const { Client, GatewayIntentBits } = require('discord.js');\\nconst client = new Client({ intents: [GatewayIntentBits.Guilds] });\\n\\nclient.on('ready', () => {\\n  console.log(Logged in as user!);\\n});\\n\\nclient.on('interactionCreate', async interaction => {\\n  if (!interaction.isChatInputCommand()) return;\\n\\n  if (interaction.commandName === 'ping') {\\n    await interaction.reply('Pong!');\\n  }\\n});\\n\\nclient.login('token');\";\nvar codeSnippets = [\n    {\n        type: \"slashCommand\",\n        code: function(data) {\n            return \"const data = new SlashCommandBuilder()\\n\t.setName('\".concat(data, \"')\");\n        }\n    }\n];\nvar generateCodeSnippet = function(data) {\n    var codeToRender;\n    function extractData(data) {\n        codeSnippets.map(function(snippet) {\n            if (snippet.type == data.type) {\n                return snippet.code(data.arguments ? data.arguments : \"undefined\");\n            }\n        });\n        for(var i = 0; i < data.length; i++){\n            codeToRender = extractData(data[i]);\n        }\n    }\n    return \"codeToRender\";\n};\nvar GeneratedCodeSidebar = function() {\n    _s();\n    var nodes = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectNodes);\n    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`\n    //possible memoize to not run every time nodes from redux store update\n    //console.log(nodes)\n    var nodeCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_toolkit_slices_flowSlice__WEBPACK_IMPORTED_MODULE_2__.selectCodeGenerated);\n    console.log(nodeCode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 h-full flex flex-col p-4 bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider text-2xl font-bold\",\n                children: \" Generated code\"\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mockup-code p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyCoolCodeBlock, {\n                    code: nodeCode.length > 0 ? generateCodeSnippet(nodeCode) : \"drag and connect blocks to generate code\",\n                    language: \"javascript\",\n                    showLineNumbers: true\n                }, void 0, false, {\n                    fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/DiscordBotBuilderr/components/generatedCodeSidebar.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this);\n};\n_s(GeneratedCodeSidebar, \"0sAqPagYW91fpGmwu+A5Wkrn6z8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c1 = GeneratedCodeSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GeneratedCodeSidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyCoolCodeBlock\");\n$RefreshReg$(_c1, \"GeneratedCodeSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYXRlZENvZGVTaWRlYmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7O0FBQXVEO0FBRWdEO0FBQ2hEO0FBR3ZELFNBQVNLLGVBQWUsQ0FBQyxLQUFrQyxFQUFFO1FBQWxDQyxJQUFJLEdBQU4sS0FBa0MsQ0FBaENBLElBQUksRUFBRUMsUUFBUSxHQUFoQixLQUFrQyxDQUExQkEsUUFBUSxFQUFFQyxlQUFlLEdBQWpDLEtBQWtDLENBQWhCQSxlQUFlO0lBQ3hELHFCQUNFLDhEQUFDUix3REFBUztRQUNSUyxJQUFJLEVBQUVILElBQUk7UUFDVkMsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxlQUFlLEVBQUVBLGVBQWU7UUFDaENFLEtBQUssRUFBRVQsc0RBQU87Ozs7O1lBQ2QsQ0FDRjtBQUNKLENBQUM7QUFUUUksS0FBQUEsZUFBZTtBQVd4QixJQUFNQyxJQUFJLEdBQUksK2FBZVE7QUFFdEIsSUFBTUssWUFBWSxHQUFHO0lBQUM7UUFDcEJDLElBQUksRUFBRSxjQUFjO1FBQ3BCTixJQUFJLEVBQUUsU0FBQ08sSUFBSTttQkFBSyxxREFDUCxDQUFPLE1BQUUsQ0FBUEEsSUFBSSxFQUFDLElBQUUsQ0FBQztTQUFBO0tBQ3BCO0NBQUM7QUFFRixJQUFNQyxtQkFBbUIsR0FBRyxTQUFDRCxJQUFJLEVBQUs7SUFDcEMsSUFBSUUsWUFBWTtJQUNoQixTQUFTQyxXQUFXLENBQUNILElBQUksRUFBQztRQUN4QkYsWUFBWSxDQUFDTSxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtZQUMxQixJQUFJQSxPQUFPLENBQUNOLElBQUksSUFBSUMsSUFBSSxDQUFDRCxJQUFJLEVBQUM7Z0JBQzVCLE9BQU9NLE9BQU8sQ0FBQ1osSUFBSSxDQUFDTyxJQUFJLENBQUNNLFNBQVMsR0FBR04sSUFBSSxDQUFDTSxTQUFTLEdBQUcsV0FBVyxDQUFDO1lBQ3BFLENBQUM7UUFDSCxDQUFDLENBQUM7UUFDSixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsSUFBSSxDQUFDUSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFDO1lBQ3BDTCxZQUFZLEdBQUdDLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0QsQ0FBQztJQUNELE9BQU8sY0FBYztBQUN2QixDQUFDO0FBSUQsSUFBTUUsb0JBQW9CLEdBQUcsV0FBTTs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHbkIsd0RBQVcsQ0FBQ0Qsd0VBQVcsQ0FBQztJQUN0Qyw4SkFBOEo7SUFDOUosc0VBQXNFO0lBQ3RFLG9CQUFvQjtJQUNwQixJQUFNcUIsUUFBUSxHQUFHcEIsd0RBQVcsQ0FBQ0YsZ0ZBQW1CLENBQUM7SUFDakR1QixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0lBQ3JCLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OzBCQUN2RCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjswQkFBQyxpQkFBZTs7Ozs7cUJBQU07MEJBQ2pFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzBCQUdoQyw0RUFBQ3ZCLGVBQWU7b0JBQUNDLElBQUksRUFBRWtCLFFBQVEsQ0FBQ0gsTUFBTSxHQUFHLENBQUMsR0FBR1AsbUJBQW1CLENBQUNVLFFBQVEsQ0FBQyxHQUFHLDBDQUEwQztvQkFBRWpCLFFBQVEsRUFBRSxZQUFZO29CQUFFQyxlQUFlLEVBQUUsSUFBSTs7Ozs7eUJBQUk7Ozs7O3FCQUVwSzs7Ozs7O2FBQ0osQ0FDVDtBQUNMLENBQUM7R0FsQktjLG9CQUFvQjs7UUFDUmxCLG9EQUFXO1FBSVJBLG9EQUFXOzs7QUFMMUJrQixNQUFBQSxvQkFBb0I7QUFtQjFCLCtEQUFlQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmF0ZWRDb2RlU2lkZWJhci50c3g/ZjQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgQ29kZUJsb2NrLCBkcmFjdWxhIH0gZnJvbSBcInJlYWN0LWNvZGUtYmxvY2tzXCI7XG5cbmltcG9ydCB7c2VsZWN0Q29kZUdlbmVyYXRlZCwgc2VsZWN0Tm9kZXMsIHVwZGF0ZUNvZGVHZW5lcmF0b3J9IGZyb20gJy4uL3JlZHV4LXRvb2xraXQvc2xpY2VzL2Zsb3dTbGljZSdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cbmZ1bmN0aW9uIE15Q29vbENvZGVCbG9jayh7IGNvZGUsIGxhbmd1YWdlLCBzaG93TGluZU51bWJlcnN9KSB7XG4gIHJldHVybiAoXG4gICAgPENvZGVCbG9ja1xuICAgICAgdGV4dD17Y29kZX1cbiAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgIHNob3dMaW5lTnVtYmVycz17c2hvd0xpbmVOdW1iZXJzfVxuICAgICAgdGhlbWU9e2RyYWN1bGF9XG4gICAgLz5cbiAgKTtcbn1cblxuY29uc3QgY29kZSA9IGBjb25zdCB7IENsaWVudCwgR2F0ZXdheUludGVudEJpdHMgfSA9IHJlcXVpcmUoJ2Rpc2NvcmQuanMnKTtcbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoeyBpbnRlbnRzOiBbR2F0ZXdheUludGVudEJpdHMuR3VpbGRzXSB9KTtcblxuY2xpZW50Lm9uKCdyZWFkeScsICgpID0+IHtcbiAgY29uc29sZS5sb2coTG9nZ2VkIGluIGFzIHVzZXIhKTtcbn0pO1xuXG5jbGllbnQub24oJ2ludGVyYWN0aW9uQ3JlYXRlJywgYXN5bmMgaW50ZXJhY3Rpb24gPT4ge1xuICBpZiAoIWludGVyYWN0aW9uLmlzQ2hhdElucHV0Q29tbWFuZCgpKSByZXR1cm47XG5cbiAgaWYgKGludGVyYWN0aW9uLmNvbW1hbmROYW1lID09PSAncGluZycpIHtcbiAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSgnUG9uZyEnKTtcbiAgfVxufSk7XG5cbmNsaWVudC5sb2dpbigndG9rZW4nKTtgXG5cbmNvbnN0IGNvZGVTbmlwcGV0cyA9IFt7XG4gIHR5cGU6ICdzbGFzaENvbW1hbmQnLFxuICBjb2RlOiAoZGF0YSkgPT4gYGNvbnN0IGRhdGEgPSBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXG5cdC5zZXROYW1lKCcke2RhdGF9JylgXG59XVxuXG5jb25zdCBnZW5lcmF0ZUNvZGVTbmlwcGV0ID0gKGRhdGEpID0+IHtcbiAgdmFyIGNvZGVUb1JlbmRlclxuICBmdW5jdGlvbiBleHRyYWN0RGF0YShkYXRhKXtcbiAgICBjb2RlU25pcHBldHMubWFwKHNuaXBwZXQgPT4ge1xuICAgICAgaWYgKHNuaXBwZXQudHlwZSA9PSBkYXRhLnR5cGUpe1xuICAgICAgICByZXR1cm4gc25pcHBldC5jb2RlKGRhdGEuYXJndW1lbnRzID8gZGF0YS5hcmd1bWVudHMgOiAndW5kZWZpbmVkJylcbiAgICAgIH1cbiAgICB9KVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgY29kZVRvUmVuZGVyID0gZXh0cmFjdERhdGEoZGF0YVtpXSlcbiAgfVxuICB9XG4gIHJldHVybiBcImNvZGVUb1JlbmRlclwiXG59XG5cblxuXG5jb25zdCBHZW5lcmF0ZWRDb2RlU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBub2RlcyA9IHVzZVNlbGVjdG9yKHNlbGVjdE5vZGVzKSAgXG4gICAgLy93aGVuIGEgbm9kZSBpcyBhZGRlZCwgZ2V0IHRoZSBub2RlLmRhdGEuc2xhc2hDb21tYW5kOiB0byByZXR1cm4gY29kZSBgKHNsYXNoY29tbWFuZCBib2lsZXJwbGF0ZSksICR7bm9kZS5kYXRhLnNsYXNoY29tbWFuZH0gKG1vcmUgc2xhc2hjb21tYW5kIGJvaWxlcnBsYXRlKWBcbiAgICAvL3Bvc3NpYmxlIG1lbW9pemUgdG8gbm90IHJ1biBldmVyeSB0aW1lIG5vZGVzIGZyb20gcmVkdXggc3RvcmUgdXBkYXRlXG4gICAgLy9jb25zb2xlLmxvZyhub2RlcylcbiAgICBjb25zdCBub2RlQ29kZSA9IHVzZVNlbGVjdG9yKHNlbGVjdENvZGVHZW5lcmF0ZWQpXG4gICAgY29uc29sZS5sb2cobm9kZUNvZGUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBwLTQgYmctZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlciB0ZXh0LTJ4bCBmb250LWJvbGRcIj4gR2VuZXJhdGVkIGNvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwLWNvZGUgcC0yXCI+XG4gICAgICAgICAgICAgIHsvKiBmYWtlIGNvZGUgZm9yIHByb3RvdHlwZVxuICAgICAgICAgICAgPE15Q29vbENvZGVCbG9jayBjb2RlPXtjb2RlfSBsYW5ndWFnZT17J2phdmFzY3JpcHQnfSBzaG93TGluZU51bWJlcnM9e3RydWV9IC8+ICovfVxuICAgICAgICAgICAgPE15Q29vbENvZGVCbG9jayBjb2RlPXtub2RlQ29kZS5sZW5ndGggPiAwID8gZ2VuZXJhdGVDb2RlU25pcHBldChub2RlQ29kZSkgOiAnZHJhZyBhbmQgY29ubmVjdCBibG9ja3MgdG8gZ2VuZXJhdGUgY29kZSd9IGxhbmd1YWdlPXsnamF2YXNjcmlwdCd9IHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gLz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZWRDb2RlU2lkZWJhciJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJkcmFjdWxhIiwic2VsZWN0Q29kZUdlbmVyYXRlZCIsInNlbGVjdE5vZGVzIiwidXNlU2VsZWN0b3IiLCJNeUNvb2xDb2RlQmxvY2siLCJjb2RlIiwibGFuZ3VhZ2UiLCJzaG93TGluZU51bWJlcnMiLCJ0ZXh0IiwidGhlbWUiLCJjb2RlU25pcHBldHMiLCJ0eXBlIiwiZGF0YSIsImdlbmVyYXRlQ29kZVNuaXBwZXQiLCJjb2RlVG9SZW5kZXIiLCJleHRyYWN0RGF0YSIsIm1hcCIsInNuaXBwZXQiLCJhcmd1bWVudHMiLCJpIiwibGVuZ3RoIiwiR2VuZXJhdGVkQ29kZVNpZGViYXIiLCJub2RlcyIsIm5vZGVDb2RlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/generatedCodeSidebar.tsx\n"));

/***/ })

});