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
exports.id = "pages/api/networth";
exports.ids = ["pages/api/networth"];
exports.modules = {

/***/ "(api)/./pages/api/networth.js":
/*!*******************************!*\
  !*** ./pages/api/networth.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_networth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/networth */ \"(api)/./services/networth.js\");\n\nasync function handler(req, res) {\n    const { address  } = req.query;\n    if (!address) return res.status(400).json({\n        error: \"address is required\"\n    });\n    const networth = await (0,_services_networth__WEBPACK_IMPORTED_MODULE_0__.getTotalNetworth)(address);\n    res.status(200).json({\n        data: networth\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV0d29ydGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQ7QUFFM0MsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsSUFBSSxDQUFDRCxPQUFPLEVBQ1IsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxLQUFLLEVBQUUscUJBQXFCO0tBQUUsQ0FBQztJQUVqRSxNQUFNQyxRQUFRLEdBQUcsTUFBTVQsb0VBQWdCLENBQUNJLE9BQU8sQ0FBQztJQUNoREQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNqQkcsSUFBSSxFQUFFRCxRQUFRO0tBQ2pCLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZXN0Ly4vcGFnZXMvYXBpL25ldHdvcnRoLmpzPzgyNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VG90YWxOZXR3b3J0aCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9uZXR3b3J0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlcS5xdWVyeVxuICAgIGlmICghYWRkcmVzcylcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdhZGRyZXNzIGlzIHJlcXVpcmVkJyB9KVxuXG4gICAgY29uc3QgbmV0d29ydGggPSBhd2FpdCBnZXRUb3RhbE5ldHdvcnRoKGFkZHJlc3MpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBkYXRhOiBuZXR3b3J0aFxuICAgIH0pXG59XG4iXSwibmFtZXMiOlsiZ2V0VG90YWxOZXR3b3J0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhZGRyZXNzIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJuZXR3b3J0aCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/networth.js\n");

/***/ }),

/***/ "(api)/./services/networth.js":
/*!******************************!*\
  !*** ./services/networth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTotalNetworth\": () => (/* binding */ getTotalNetworth)\n/* harmony export */ });\nasync function getTotalNetworth(address) {\n    const response = await fetch(`https://api.debank.com/user/total_balance?addr=${address}`);\n    const result = await response.json();\n    // console.log('\\n response.json', result)\n    if (result.error_code != 0) {\n        console.log(\"data of networth.js not ok\", result.error);\n        return [];\n    }\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9uZXR3b3J0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sZUFBZUEsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsK0NBQStDLEVBQUVGLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsTUFBTUcsTUFBTSxHQUFJLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRXJDLDBDQUEwQztJQUUxQyxJQUFJRCxNQUFNLENBQUNFLFVBQVUsSUFBSSxDQUFDLEVBQUU7UUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFSixNQUFNLENBQUNLLEtBQUssQ0FBQztRQUN2RCxPQUFPLEVBQUU7S0FDWjtJQUVELE9BQU9MLE1BQU07Q0FDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVzdC8uL3NlcnZpY2VzL25ldHdvcnRoLmpzPzdiOTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsTmV0d29ydGgoYWRkcmVzcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmRlYmFuay5jb20vdXNlci90b3RhbF9iYWxhbmNlP2FkZHI9JHthZGRyZXNzfWApO1xuICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ1xcbiByZXNwb25zZS5qc29uJywgcmVzdWx0KVxuXG4gICAgaWYgKHJlc3VsdC5lcnJvcl9jb2RlICE9IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgb2YgbmV0d29ydGguanMgbm90IG9rJywgcmVzdWx0LmVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRUb3RhbE5ldHdvcnRoIiwiYWRkcmVzcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZXJyb3JfY29kZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/networth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/networth.js"));
module.exports = __webpack_exports__;

})();