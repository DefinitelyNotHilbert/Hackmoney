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
exports.id = "pages/api/beer";
exports.ids = ["pages/api/beer"];
exports.modules = {

/***/ "(api)/./pages/api/beer.js":
/*!***************************!*\
  !*** ./pages/api/beer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_beer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/beer */ \"(api)/./services/beer.js\");\n\nasync function handler(req, res) {\n    const { city  } = req.query;\n    if (!city) return res.status(400).json({\n        error: \"city is required\"\n    });\n    const breweries = await (0,_services_beer__WEBPACK_IMPORTED_MODULE_0__.listBreweries)(city);\n    res.status(200).json({\n        data: breweries\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmVlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUVwQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUMxQixJQUFJLENBQUNELElBQUksRUFDTCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEtBQUssRUFBRSxrQkFBa0I7S0FBRSxDQUFDO0lBRTlELE1BQU1DLFNBQVMsR0FBRyxNQUFNVCw2REFBYSxDQUFDSSxJQUFJLENBQUM7SUFDM0NELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDakJHLElBQUksRUFBRUQsU0FBUztLQUNsQixDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVzdC8uL3BhZ2VzL2FwaS9iZWVyLmpzPzQ2ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdEJyZXdlcmllcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9iZWVyXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgY2l0eSB9ID0gcmVxLnF1ZXJ5XG4gICAgaWYgKCFjaXR5KVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ2NpdHkgaXMgcmVxdWlyZWQnIH0pXG5cbiAgICBjb25zdCBicmV3ZXJpZXMgPSBhd2FpdCBsaXN0QnJld2VyaWVzKGNpdHkpXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBkYXRhOiBicmV3ZXJpZXNcbiAgICB9KVxufVxuXG5cbiJdLCJuYW1lcyI6WyJsaXN0QnJld2VyaWVzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNpdHkiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImJyZXdlcmllcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/beer.js\n");

/***/ }),

/***/ "(api)/./services/beer.js":
/*!**************************!*\
  !*** ./services/beer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listBreweries\": () => (/* binding */ listBreweries)\n/* harmony export */ });\nasync function listBreweries(city) {\n    const response = await fetch(`https://api.openbrewerydb.org/breweries\n        ?by_city=${city}\n        &per_page=5`.replace(/\\s/g, \"\"));\n    // console.log(response)\n    const result = await response.json();\n    // if (result.message != 'OK') {\n    //     console.log('data of beer.js not ok', result.error)\n    //     return []\n    // }\n    console.log(\"breweries\", result);\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9iZWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxlQUFlQSxhQUFhLENBQUNDLElBQUksRUFBRTtJQUV0QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN4QixDQUFDO2lCQUNRLEVBQUVGLElBQUksQ0FBQzttQkFDTCxDQUFDLENBQUNHLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQztJQUVwQyx3QkFBd0I7SUFFeEIsTUFBTUMsTUFBTSxHQUFJLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBRXJDLGdDQUFnQztJQUNoQywwREFBMEQ7SUFDMUQsZ0JBQWdCO0lBQ2hCLElBQUk7SUFFSkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFSCxNQUFNLENBQUM7SUFFaEMsT0FBT0EsTUFBTTtDQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZXN0Ly4vc2VydmljZXMvYmVlci5qcz83ZmY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RCcmV3ZXJpZXMoY2l0eSkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW5icmV3ZXJ5ZGIub3JnL2JyZXdlcmllc1xuICAgICAgICA/YnlfY2l0eT0ke2NpdHl9XG4gICAgICAgICZwZXJfcGFnZT01YC5yZXBsYWNlKC9cXHMvZywgJycpKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgIGNvbnN0IHJlc3VsdCA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpXG5cbiAgICAvLyBpZiAocmVzdWx0Lm1lc3NhZ2UgIT0gJ09LJykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZGF0YSBvZiBiZWVyLmpzIG5vdCBvaycsIHJlc3VsdC5lcnJvcilcbiAgICAvLyAgICAgcmV0dXJuIFtdXG4gICAgLy8gfVxuXG4gICAgY29uc29sZS5sb2coJ2JyZXdlcmllcycsIHJlc3VsdClcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbiJdLCJuYW1lcyI6WyJsaXN0QnJld2VyaWVzIiwiY2l0eSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXBsYWNlIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/beer.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/beer.js"));
module.exports = __webpack_exports__;

})();