"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/holdings";
exports.ids = ["pages/api/holdings"];
exports.modules = {

/***/ "(api)/./pages/api/holdings.js":
/*!*******************************!*\
  !*** ./pages/api/holdings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_holdings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/holdings */ \"(api)/./services/holdings.js\");\n\nasync function handler(req, res) {\n    const { address  } = req.query;\n    if (!address) return res.status(400).json({\n        error: \"address is required\"\n    });\n    const networth = await (0,_services_holdings__WEBPACK_IMPORTED_MODULE_0__.getHoldings)(address);\n    res.status(200).json({\n        data: networth\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaG9sZGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsSUFBSSxDQUFDRCxPQUFPLEVBQ1IsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxLQUFLLEVBQUUscUJBQXFCO0tBQUUsQ0FBQztJQUVqRSxNQUFNQyxRQUFRLEdBQUcsTUFBTVQsK0RBQVcsQ0FBQ0ksT0FBTyxDQUFDO0lBQzNDRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQ2pCRyxJQUFJLEVBQUVELFFBQVE7S0FDakIsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3Rlc3QvLi9wYWdlcy9hcGkvaG9sZGluZ3MuanM/MzcyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRIb2xkaW5ncyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ob2xkaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlcS5xdWVyeVxuICAgIGlmICghYWRkcmVzcylcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdhZGRyZXNzIGlzIHJlcXVpcmVkJyB9KVxuXG4gICAgY29uc3QgbmV0d29ydGggPSBhd2FpdCBnZXRIb2xkaW5ncyhhZGRyZXNzKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgZGF0YTogbmV0d29ydGhcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbImdldEhvbGRpbmdzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5ldHdvcnRoIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/holdings.js\n");

/***/ }),

/***/ "(api)/./services/holdings.js":
/*!******************************!*\
  !*** ./services/holdings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHoldings\": () => (/* binding */ getHoldings)\n/* harmony export */ });\nasync function getHoldings(address) {\n    const response = await fetch(`https://openapi.debank.com/v1/user/total_balance?id=${address}`);\n    const result = await response.json();\n    console.log(\"\\n response.json\", result);\n    // if (result.error_code != 0) {\n    //     console.log('data of networth.js not ok', result.error)\n    //     return []\n    // }\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9ob2xkaW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUEsV0FBVyxDQUFDQyxPQUFPLEVBQUU7SUFDdkMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLG9EQUFvRCxFQUFFRixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlGLE1BQU1HLE1BQU0sR0FBSSxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtJQUVyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVILE1BQU0sQ0FBQztJQUV2QyxnQ0FBZ0M7SUFDaEMsOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixJQUFJO0lBRUosT0FBT0EsTUFBTTtDQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZXN0Ly4vc2VydmljZXMvaG9sZGluZ3MuanM/MTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SG9sZGluZ3MoYWRkcmVzcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vb3BlbmFwaS5kZWJhbmsuY29tL3YxL3VzZXIvdG90YWxfYmFsYW5jZT9pZD0ke2FkZHJlc3N9YCk7XG4gICAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICBjb25zb2xlLmxvZygnXFxuIHJlc3BvbnNlLmpzb24nLCByZXN1bHQpXG5cbiAgICAvLyBpZiAocmVzdWx0LmVycm9yX2NvZGUgIT0gMCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZGF0YSBvZiBuZXR3b3J0aC5qcyBub3Qgb2snLCByZXN1bHQuZXJyb3IpXG4gICAgLy8gICAgIHJldHVybiBbXVxuICAgIC8vIH1cblxuICAgIHJldHVybiByZXN1bHRcbn0iXSwibmFtZXMiOlsiZ2V0SG9sZGluZ3MiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/holdings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/holdings.js"));
module.exports = __webpack_exports__;

})();