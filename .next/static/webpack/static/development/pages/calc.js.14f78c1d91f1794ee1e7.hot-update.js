webpackHotUpdate("static/development/pages/calc.js",{

/***/ "./componentes/Calculadora.js":
/*!************************************!*\
  !*** ./componentes/Calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/billin/Desktop/playground/componentes/Calculadora.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Calculadora = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Calculadora, _React$Component);\n\n  var _super = _createSuper(Calculadora);\n\n  function Calculadora() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Calculadora);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      res: \"0\"\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onDigit\", function (digit) {\n      _this.setState({\n        res: digit\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Calculadora, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var alerta2 = function alerta2() {\n        return alert('Hola desde alerta 2');\n      };\n\n      return __jsx(\"div\", {\n        className: \"jsx-3149261290\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 4\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-3149261290\" + \" \" + \"z-depth-2 light-blue lighten-2 white-text center-align resultados\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 4\n        }\n      }, this.state.res), __jsx(\"div\", {\n        className: \"jsx-3149261290\" + \" \" + \"calc-container blue light lightwn-3 hoverable z-depth-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 4\n        }\n      }, [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \".\"].map(function (digit) {\n        return __jsx(\"a\", {\n          onClick: function onClick() {\n            return _this2.onDigit(digit);\n          },\n          className: \"jsx-3149261290\" + \" \" + \"waves-effect waves-light btn\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 8\n          }\n        }, digit);\n      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"3149261290\",\n        __self: this\n      }, \".resultados.jsx-3149261290{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.cal-container.jsx-3149261290{width:300px;margin:0 auto;text-align:center;padding:12px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWxsaW4vRGVza3RvcC9wbGF5Z3JvdW5kL2NvbXBvbmVudGVzL0NhbGN1bGFkb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSxBQUdpQixBQU1DLFlBTEMsQUFNQSxjQUxDLEFBTUcsZUFMQyxHQU1OLGFBQ2IsR0FOQSIsImZpbGUiOiIvVXNlcnMvYmlsbGluL0Rlc2t0b3AvcGxheWdyb3VuZC9jb21wb25lbnRlcy9DYWxjdWxhZG9yYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGN1bGFkb3JhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRzdGF0ZSA9IHtcblx0XHRyZXM6XCIwXCJcblx0fVxuXHRvbkRpZ2l0ID0gKGRpZ2l0KT0+e1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmVzOmRpZ2l0XG5cdFx0fSlcblx0fSBcblx0XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFsZXJ0YTIgPSAoKT0+YWxlcnQoJ0hvbGEgZGVzZGUgYWxlcnRhIDInKVxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotZGVwdGgtMiBsaWdodC1ibHVlIGxpZ2h0ZW4tMiB3aGl0ZS10ZXh0IGNlbnRlci1hbGlnbiByZXN1bHRhZG9zXCI+e3RoaXMuc3RhdGUucmVzfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYWxjLWNvbnRhaW5lciBibHVlIGxpZ2h0IGxpZ2h0d24tMyBob3ZlcmFibGUgei1kZXB0aC0yXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIuXCJdLm1hcChkaWdpdD0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWUgPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXR9PC9hPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57XG5cdFx0XHRcdGBcblx0XHRcdFx0LnJlc3VsdGFkb3N7XG5cdFx0XHRcdFx0d2lkdGg6MzAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOjAgYXV0bztcblx0XHRcdFx0XHRmb250LXNpemU6MzJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNhbC1jb250YWluZXJ7XG5cdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjowIGF1dG87XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzoxMnB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YFxuXHRcdFx0fVxuXHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2Plx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYWRvcmE7XG5cbiJdfQ== */\\n/*@ sourceURL=/Users/billin/Desktop/playground/componentes/Calculadora.js */\"));\n    }\n  }]);\n\n  return Calculadora;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculadora);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRlcy9DYWxjdWxhZG9yYS5qcz9kYTI4Il0sIm5hbWVzIjpbIkNhbGN1bGFkb3JhIiwicmVzIiwiZGlnaXQiLCJzZXRTdGF0ZSIsImFsZXJ0YTIiLCJhbGVydCIsInN0YXRlIiwibWFwIiwib25EaWdpdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0c7QUFDUEMsU0FBRyxFQUFDO0FBREcsSzs7a05BR0UsVUFBQ0MsS0FBRCxFQUFTO0FBQ2xCLFlBQUtDLFFBQUwsQ0FBYztBQUNiRixXQUFHLEVBQUNDO0FBRFMsT0FBZDtBQUdBLEs7Ozs7Ozs7NkJBRU87QUFBQTs7QUFDUCxVQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLGVBQUlDLEtBQUssQ0FBQyxxQkFBRCxDQUFUO0FBQUEsT0FBaEI7O0FBQ0EsYUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBLDRDQUFlLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0YsS0FBS0MsS0FBTCxDQUFXTCxHQUEvRixDQURBLEVBRUE7QUFBQSw0Q0FBZSx5REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUUsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWlDLEdBQWpDLEVBQXFDLEdBQXJDLEVBQXlDLEdBQXpDLEVBQThDTSxHQUE5QyxDQUFrRCxVQUFBTCxLQUFLLEVBQUU7QUFDeEQsZUFDQztBQUE2QyxpQkFBTyxFQUFFO0FBQUEsbUJBQUksTUFBSSxDQUFDTSxPQUFMLENBQWFOLEtBQWIsQ0FBSjtBQUFBLFdBQXREO0FBQUEsOENBQWMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnRkEsS0FBaEYsQ0FERDtBQUdBLE9BSkQsQ0FGRixDQUZBO0FBQUE7QUFBQTtBQUFBLG9xRUFERDtBQStCQTs7OztFQTNDd0JPLDRDQUFLLENBQUNDLFM7O0FBOENqQlYsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRlcy9DYWxjdWxhZG9yYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGN1bGFkb3JhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRzdGF0ZSA9IHtcblx0XHRyZXM6XCIwXCJcblx0fVxuXHRvbkRpZ2l0ID0gKGRpZ2l0KT0+e1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmVzOmRpZ2l0XG5cdFx0fSlcblx0fSBcblx0XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFsZXJ0YTIgPSAoKT0+YWxlcnQoJ0hvbGEgZGVzZGUgYWxlcnRhIDInKVxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotZGVwdGgtMiBsaWdodC1ibHVlIGxpZ2h0ZW4tMiB3aGl0ZS10ZXh0IGNlbnRlci1hbGlnbiByZXN1bHRhZG9zXCI+e3RoaXMuc3RhdGUucmVzfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYWxjLWNvbnRhaW5lciBibHVlIGxpZ2h0IGxpZ2h0d24tMyBob3ZlcmFibGUgei1kZXB0aC0yXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIuXCJdLm1hcChkaWdpdD0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWUgPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXR9PC9hPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57XG5cdFx0XHRcdGBcblx0XHRcdFx0LnJlc3VsdGFkb3N7XG5cdFx0XHRcdFx0d2lkdGg6MzAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOjAgYXV0bztcblx0XHRcdFx0XHRmb250LXNpemU6MzJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNhbC1jb250YWluZXJ7XG5cdFx0XHRcdFx0d2lkdGg6IDMwMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjowIGF1dG87XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzoxMnB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YFxuXHRcdFx0fVxuXHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2Plx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYWRvcmE7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componentes/Calculadora.js\n");

/***/ })

})