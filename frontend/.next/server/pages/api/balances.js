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
exports.id = "pages/api/balances";
exports.ids = ["pages/api/balances"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./pages/api/balances.js":
/*!*******************************!*\
  !*** ./pages/api/balances.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_balances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/balances */ \"(api)/./services/balances.js\");\n\nasync function handler(req, res) {\n    const { address  } = req.query;\n    if (!address) return res.status(400).json({\n        error: \"address is required\"\n    });\n    const balances = await (0,_services_balances__WEBPACK_IMPORTED_MODULE_0__.getBalancesFromContractAddress)(address);\n    res.status(200).json({\n        data: balances\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFsYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0U7QUFFekQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsSUFBSSxDQUFDRCxPQUFPLEVBQ1YsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxLQUFLLEVBQUUscUJBQXFCO0tBQUUsQ0FBQztJQUUvRCxNQUFNQyxRQUFRLEdBQUcsTUFBTVQsa0ZBQThCLENBQUNJLE9BQU8sQ0FBQztJQUM5REQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNuQkcsSUFBSSxFQUFFRCxRQUFRO0tBQ2YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3Rlc3QvLi9wYWdlcy9hcGkvYmFsYW5jZXMuanM/MGI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCYWxhbmNlc0Zyb21Db250cmFjdEFkZHJlc3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9iYWxhbmNlcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlcS5xdWVyeVxuICBpZiAoIWFkZHJlc3MpXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdhZGRyZXNzIGlzIHJlcXVpcmVkJyB9KVxuXG4gIGNvbnN0IGJhbGFuY2VzID0gYXdhaXQgZ2V0QmFsYW5jZXNGcm9tQ29udHJhY3RBZGRyZXNzKGFkZHJlc3MpXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBkYXRhOiBiYWxhbmNlc1xuICB9KVxufVxuIl0sIm5hbWVzIjpbImdldEJhbGFuY2VzRnJvbUNvbnRyYWN0QWRkcmVzcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhZGRyZXNzIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJiYWxhbmNlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/balances.js\n");

/***/ }),

/***/ "(api)/./services/balances.js":
/*!******************************!*\
  !*** ./services/balances.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBalancesFromContractAddress\": () => (/* binding */ getBalancesFromContractAddress)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(api)/./services/config.js\");\n\n// import { read, write } from './storage' // this is for a DB\nasync function getBalancesFromContractAddress(address) {\n    // const tableName = 'nftTransfers'\n    // const cache = await read(tableName, address)\n    // if (cache) return cache\n    //&address=0x6975be450864c02b4613023c2152ee0743572325\n    //&endblock=27025780\n    const response = await fetch(`https://api.etherscan.io/api\n        ?module=account\n        &action=balance\n        &address=${address}\n        &tag=latest\n        &apikey=${_config__WEBPACK_IMPORTED_MODULE_0__.etherscan_api_key}`.replace(/\\s/g, \"\"));\n    const result = await response.json();\n    if (result.message != \"OK\") {\n        console.log(\"data of balance.js not ok\", result.error);\n        return [];\n    }\n    const balances = String(parseFloat(result.result) / 1000000000000000000);\n    // await write(tableName, address, transfers)\n    return balances;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9iYWxhbmNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUM1RCw4REFBOEQ7QUFFdkQsZUFBZUUsOEJBQThCLENBQUNDLE9BQU8sRUFBRTtJQUMxRCxtQ0FBbUM7SUFDbkMsK0NBQStDO0lBQy9DLDBCQUEwQjtJQUUxQixxREFBcUQ7SUFDckQsb0JBQW9CO0lBQ3BCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQzs7O2lCQUdqQixFQUFFRixPQUFPLENBQUM7O2dCQUVYLEVBQUVILHNEQUFpQixDQUFDLENBQUMsQ0FBQ00sT0FBTyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRXJELE1BQU1DLE1BQU0sR0FBSSxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtJQUVyQyxJQUFJRCxNQUFNLENBQUNFLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFSixNQUFNLENBQUNLLEtBQUssQ0FBQztRQUN0RCxPQUFPLEVBQUU7S0FDWjtJQUVELE1BQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxVQUFVLENBQUNSLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDLEdBQUcsbUJBQW1CLENBQUM7SUFFeEUsNkNBQTZDO0lBRTdDLE9BQU9NLFFBQVE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVzdC8uL3NlcnZpY2VzL2JhbGFuY2VzLmpzPzRhZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzY2FuX2FwaV9rZXksIGluZnVyYV9hcGlfa2V5IH0gZnJvbSAnLi9jb25maWcnXG4vLyBpbXBvcnQgeyByZWFkLCB3cml0ZSB9IGZyb20gJy4vc3RvcmFnZScgLy8gdGhpcyBpcyBmb3IgYSBEQlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZXNGcm9tQ29udHJhY3RBZGRyZXNzKGFkZHJlc3MpIHtcbiAgICAvLyBjb25zdCB0YWJsZU5hbWUgPSAnbmZ0VHJhbnNmZXJzJ1xuICAgIC8vIGNvbnN0IGNhY2hlID0gYXdhaXQgcmVhZCh0YWJsZU5hbWUsIGFkZHJlc3MpXG4gICAgLy8gaWYgKGNhY2hlKSByZXR1cm4gY2FjaGVcblxuICAgIC8vJmFkZHJlc3M9MHg2OTc1YmU0NTA4NjRjMDJiNDYxMzAyM2MyMTUyZWUwNzQzNTcyMzI1XG4gICAgLy8mZW5kYmxvY2s9MjcwMjU3ODBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ldGhlcnNjYW4uaW8vYXBpXG4gICAgICAgID9tb2R1bGU9YWNjb3VudFxuICAgICAgICAmYWN0aW9uPWJhbGFuY2VcbiAgICAgICAgJmFkZHJlc3M9JHthZGRyZXNzfVxuICAgICAgICAmdGFnPWxhdGVzdFxuICAgICAgICAmYXBpa2V5PSR7ZXRoZXJzY2FuX2FwaV9rZXl9YC5yZXBsYWNlKC9cXHMvZywgJycpKTtcbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKVxuXG4gICAgaWYgKHJlc3VsdC5tZXNzYWdlICE9ICdPSycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgb2YgYmFsYW5jZS5qcyBub3Qgb2snLCByZXN1bHQuZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGJhbGFuY2VzID0gU3RyaW5nKHBhcnNlRmxvYXQocmVzdWx0LnJlc3VsdCkgLyAxMDAwMDAwMDAwMDAwMDAwMDAwKVxuXG4gICAgLy8gYXdhaXQgd3JpdGUodGFibGVOYW1lLCBhZGRyZXNzLCB0cmFuc2ZlcnMpXG5cbiAgICByZXR1cm4gYmFsYW5jZXNcbn1cblxuIl0sIm5hbWVzIjpbImV0aGVyc2Nhbl9hcGlfa2V5IiwiaW5mdXJhX2FwaV9rZXkiLCJnZXRCYWxhbmNlc0Zyb21Db250cmFjdEFkZHJlc3MiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlcGxhY2UiLCJyZXN1bHQiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImJhbGFuY2VzIiwiU3RyaW5nIiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/balances.js\n");

/***/ }),

/***/ "(api)/./services/config.js":
/*!****************************!*\
  !*** ./services/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"etherscan_api_key\": () => (/* binding */ etherscan_api_key),\n/* harmony export */   \"infura_api_key\": () => (/* binding */ infura_api_key)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst etherscan_api_key = process.env.ETHERSCAN_API_KEY;\nconst infura_api_key = process.env.INFURA_API_KEY;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQUEsb0RBQXdCLEVBQUUsQ0FBQztBQUNwQixNQUFNRSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQixDQUFDO0FBQ3hELE1BQU1DLGNBQWMsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGNBQWMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZXN0Ly4vc2VydmljZXMvY29uZmlnLmpzPzMxNTIiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5leHBvcnQgY29uc3QgZXRoZXJzY2FuX2FwaV9rZXkgPSBwcm9jZXNzLmVudi5FVEhFUlNDQU5fQVBJX0tFWTtcbmV4cG9ydCBjb25zdCBpbmZ1cmFfYXBpX2tleSA9IHByb2Nlc3MuZW52LklORlVSQV9BUElfS0VZO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJldGhlcnNjYW5fYXBpX2tleSIsInByb2Nlc3MiLCJlbnYiLCJFVEhFUlNDQU5fQVBJX0tFWSIsImluZnVyYV9hcGlfa2V5IiwiSU5GVVJBX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/config.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/balances.js"));
module.exports = __webpack_exports__;

})();