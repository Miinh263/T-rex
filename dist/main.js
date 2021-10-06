/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/trex.png */ \"./src/images/trex.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cactus.png */ \"./src/images/cactus.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: cornsilk;\\r\\n}\\r\\n.game {\\r\\n  width: 600px;\\r\\n  height: 200px;\\r\\n  border: 1px solid black;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#dino {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: 50px 50px;\\r\\n  position: relative;\\r\\n  top: 150px;\\r\\n}\\r\\n.jump {\\r\\n  animation: jump 0.6s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes jump {\\r\\n  0% {\\r\\n    top: 150px;\\r\\n  }\\r\\n\\r\\n  15% {\\r\\n    top: 120px;\\r\\n  }\\r\\n\\r\\n  30% {\\r\\n    top: 90px;\\r\\n  }\\r\\n  45% {\\r\\n    top: 50px;\\r\\n  }\\r\\n\\r\\n  60% {\\r\\n    top: 90px;\\r\\n  }\\r\\n  75% {\\r\\n    top: 120px;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    top: 150px;\\r\\n  }\\r\\n}\\r\\n#cactus {\\r\\n  width: 20px;\\r\\n  height: 40px;\\r\\n  position: relative;\\r\\n  top: 110px;\\r\\n  left: 580px;\\r\\n\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: 20px 40px;\\r\\n\\r\\n  animation: block 1s infinite linear;\\r\\n}\\r\\n@keyframes block {\\r\\n  0% {\\r\\n    left: 580px;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    left: -20px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/index.css */ \"./src/css/index.css\");\n\r\nvar dino = document.getElementById(\"dino\");\r\nfunction jump() {\r\n    if (dino.classList.toString != jump) {\r\n        // thêm một class cho dino là jump\r\n        dino.classList.add(\"jump\");\r\n        //hàm setTimeout chỉ định thực thi một hàm sau một khoảng thời gian nhất định\r\n        setTimeout(function () {\r\n            // xóa class jump từ dino\r\n            dino.classList.remove(\"jump\");\r\n        }, 300);\r\n    }\r\n}\r\ndocument.addEventListener(\"keydown\", function (event) {\r\n    jump();\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/images/cactus.png":
/*!*******************************!*\
  !*** ./src/images/cactus.png ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABJCAIAAAAi6Oi8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASqSURBVGhD7drZUuNIEIXhfjQuCMy+7xgTwA1vz2p2hvnsY2scI7kbM5a6J8LnojprUdVPZlapRPPj80/SjGa8/oc0fw31/v7+9vbG0MhQfnx8jFZfX18zhs1QTqTJaFJ9eXmxKuP5+RlNjH7PP+p2uwNrEk1G44e+ublJ4+PjYwwq2hnI4KZ9Un3HN4zb29vYGxsb29vb7Xb75ORkbW1tc3Mz3hKm2iP18PBgjaRFgKCcnZ0tLy/v7e3t7u7C0miYshy+X2pi3yRpOGB/f//i4oI/1tfXDw8PlWiUW1tb+L4XrMloiuSVpAhWV1cPDg4YKysrnU6HnwBxkvA1kcXsZKt48Y0AgZArOzs7UEBwzNHRUavVMuYb7vkSTaEAJU8RcEP8wU5VqUoZY/zd3R0j5xDj6elJOU710lBSXhmaVMdpmjSMVCljsq0Et4Cjn0RwOjTKgiZGsXwipTo/P683M4xT7TSMREeC233yJqdRpaZGUxjaqTiIGTkF7EG9jmy96SprmjRaOKDHMqQxknIkZv9nTG+uKtVLkyw2gHuUxjucOEljpapprFp5TuAIkFQwac49y4SAUdCE2GBGBhRdmHSlt1Baxvqm8pz4PTTjzommaYq+ynOiOZpBc1+qZkl0zFKcE03TeDgTVZ4TuvJkvTRp6oGMqHxOaMyTzdHwyrhzQm+erD1S/5JZPDa6ABVdSlUD9H6bpqwZzYxmRjOjGWrQN3xveGNkJcdgbC+QnN3GBMgNyYewj1GzOTB9nvr8689RoenQENunZ1C8Uk5PT3X5Ste1tLSkV7sqFO2DWUqaDo0xluEYj9Dx8bF7CE+0221VBjgDFhYWzs/P5+bmRLBS06Exkj8YytiA9PKKYSCEcnFxkZ0b7WDxkuql0csrfMa+vLxk5GNqsHhJ9UZKu7RN6ak4xrODxUuqN4shSp3QeMSD+YWLySs1HZpxOzwfQPkdlEt+fONu1F+6Qj/4pzf9iLS4bemL883uJwtZJjLGAnqtKhywwjqKnmGTqppGaTpHFo4iG2yQ7Nj4IAlLyV+aAs3g36GgUG6iruhSQQZwgIMLgcVEBAFQZLH1hqAummScUmgEwoGBDAE7F2SGCMZmhKAWmkyUrzuyxtXVlWUkSiD4owmaoBBDNbvx/v5ezgqZHLK89ayqKnDZR3VFqqCxFcWo+AWdatyDwJIWc77JJDbl1Ujs6dMkaSJ2/nfj+vpayUkoGUCTQwhqzOKfK+dYyp5bhi+pEMRIe2j8eJXqzVWlHx4ra/BQSR4ofnfhmLEqDwWFyjT9ySo0mK6k7/gmytoSuU/SE4jkdUEzqSajKSR7Bgg7O9lcjNDEaJSGkrzS1s7/zTT2Wk4/7wfLg6CChkY35tf1n3wDyBujoGEUO7xRGoGQxQi4JyjUNI1NqExOWDJAAkSBCI1qE3kzoxmvGc14zWjG68+iIcvkTujq7gYYIHKHV82t2QHdxOlXXPy63a5Lu4VBQMHBJa6k7FarpWv072G+rol9EwHKHTmfoe5cSkC5LyubiJSf2IdfPqf5AEFQBAhEp9PBl7dpQ3lDwgRIciRRfBH7HuUYZAIHSPU7f2Py+fk3MkUn+Iu49v4AAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/cactus.png?");

/***/ }),

/***/ "./src/images/trex.png":
/*!*****************************!*\
  !*** ./src/images/trex.png ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/trex.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;