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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `button {\n    padding: 1% 2%;\n    color: white;\n    background-color: red;\n    border-radius: 15px;\n    margin: 10px;\n    font-weight: bold;\n    font-size: 24px;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\n\nnav {\n    text-align: right;\n}\n\n.contentBox {\n    display: grid;\n    justify-items: center;\n    grid-template-rows: 1fr;\n    gap: 30px\n}\n\n.imageContainer {\n    display: flex;\n    gap: 4rem;\n}\n\n.imageText {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n}\n\n#content {\n    display: grid;\n    gap: 30px;\n}\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const content = document.getElementById(\"content\");\n\n    const contactTitle = document.createElement(\"contactTitle\");\n    contactTitle.innerText = \"Contact Us\";\n    contactTitle.style.cssText = \"font-size: 70px; font-weight: bold; text-align: center\";\n    content.appendChild(contactTitle);\n    const contactName = document.createElement(\"contactName\");\n    contactName.innerText = \"The Best Restaurant Ever\";\n    contactName.style.cssText = \"font-size: 50px; font-weight: bold; text-align: center\";\n    content.appendChild(contactName);\n    const contactInfo = document.createElement(\"contactInfo\");\n    contactInfo.innerText = `Location: 1234 56th Avenue\n     Kenowhere, Wisconsin 12345\n     Phone Number: (123) 456-7890`;\n    contactInfo.style.cssText = \"font-size: 30px; text-align: center\";\n    content.appendChild(contactInfo);\n    const contactHours = document.createElement(\"contactHours\");\n    contactHours.innerText = `Hours \n    Monday: 11am-9pm\n    Tuesday: 11am-9pm\n    Wednesday: 11am-9pm\n    Thursday: 11am-9pm\n    Friday: 11am-10pm\n    Saturday 10am-10pm \n    Sunday 10am-11pm`;\n    contactHours.style.cssText = \"font-size: 30px; font-weight: bold; text-align: center\";\n    content.appendChild(contactHours);\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _images_jason_leung_O67LZfeyYBk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../images/jason-leung-O67LZfeyYBk-unsplash.jpg */ \"./images/jason-leung-O67LZfeyYBk-unsplash.jpg\");\n\n\nfunction homePage() {\n    const content = document.getElementById(\"content\");\n    const contentBox = document.createElement(\"contentBox\");\n    contentBox.classList.add(\"contentBox\");\n    content.appendChild(contentBox);\n    const homeTitle = document.createElement(\"homeTitle\");\n    homeTitle.innerText = \"The Best Restaurant Ever\";\n    homeTitle.style.cssText = \"font-size: 80px; font-weight: bold;\";\n    contentBox.appendChild(homeTitle);\n    var steakPhoto = document.createElement(\"IMG\");\n    steakPhoto.src = _images_jason_leung_O67LZfeyYBk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    steakPhoto.style.cssText = \"width: 80%; height:auto\";\n    contentBox.appendChild(steakPhoto);\n    const homePara = document.createElement(\"homePara\");\n    homePara.innerText = \"Welcome to The Best Restaurant Ever, where you will experience the best food you have ever eaten! What makes our food the best is our commitment to excellence. The Best Restaurant Ever offers 40 beers on tap along with many drink specials. At The Best Restaurant Ever we will treat you like family! Not really sure what else to write about this restaurant, words really can't describe what an amazing experience eating here is. I can keep going on and on and on and on and on about it.\";\n    homePara.style.cssText = \"font-size: 30px; padding:50px\";\n    contentBox.appendChild(homePara);\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _myMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myMenu.js */ \"./src/myMenu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n/*Handles all onclick events*/\nvar theParent = document.querySelector(\"nav\");\ntheParent.addEventListener(\"click\", wasClicked, false);\n\nfunction wasClicked(e) {\n    if (e.target !== e.currentTarget) {\n        var clickedItem = e.target.id;\n        if (clickedItem == \"home\") {\n            clear();\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n        } else if (clickedItem == \"contact\") {\n            clear();\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();\n        } else if (clickedItem == \"menu\") {\n            clear();\n            (0,_myMenu_js__WEBPACK_IMPORTED_MODULE_2__.myMenu)();\n        }\n    }\n    e.stopPropagation();\n}\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n\nfunction clear() {\n    var element = document.getElementById(\"content\");\n    while (element.firstChild) {\n        element.firstChild.remove();\n    }\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/myMenu.js":
/*!***********************!*\
  !*** ./src/myMenu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myMenu: () => (/* binding */ myMenu)\n/* harmony export */ });\n/* harmony import */ var _images_pexels_brettjordan_825661_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../images/pexels-brettjordan-825661.jpg */ \"./images/pexels-brettjordan-825661.jpg\");\n/* harmony import */ var _images_pexels_george_piskov_289673052_15047513_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../images/pexels-george-piskov-289673052-15047513.jpg */ \"./images/pexels-george-piskov-289673052-15047513.jpg\");\n/* harmony import */ var _images_pexels_haydenplus1_9397270_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/pexels-haydenplus1-9397270.jpg */ \"./images/pexels-haydenplus1-9397270.jpg\");\n/* harmony import */ var _images_pexels_jeswin_5454019_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../images/pexels-jeswin-5454019.jpg */ \"./images/pexels-jeswin-5454019.jpg\");\n/* harmony import */ var _images_pexels_pixabay_302468_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../images/pexels-pixabay-302468.jpg */ \"./images/pexels-pixabay-302468.jpg\");\n/* harmony import */ var _images_pexels_valeriya_1639557_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../images/pexels-valeriya-1639557.jpg */ \"./images/pexels-valeriya-1639557.jpg\");\n/* harmony import */ var _images_pexels_wendywei_3071821_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../images/pexels-wendywei-3071821.jpg */ \"./images/pexels-wendywei-3071821.jpg\");\n\n\n\n\n\n\n\n\n\nfunction myMenu() {\n    function food(image, title, description) {\n        this.image = image;\n        this.title = title;\n        this.description = description;\n    }\n\n    const foodOne = new food(_images_pexels_brettjordan_825661_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Pizza\", \"This is our delicious pizza made with the best toppings!\");\n    const foodTwo = new food(_images_pexels_george_piskov_289673052_15047513_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Ribs\", \"These ribs are the most tender ribs you'll ever eat!\");\n    const foodThree = new food(_images_pexels_haydenplus1_9397270_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Brisket\", \"Our brisket is the best brisket you'll ever have!\");\n    const foodFour = new food(_images_pexels_jeswin_5454019_jpg__WEBPACK_IMPORTED_MODULE_3__, \"3 Tacos\", \"Order our tacos with either beef, steak, or chicken!\");\n    const foodFive = new food(_images_pexels_valeriya_1639557_jpg__WEBPACK_IMPORTED_MODULE_5__, \"Burger\", \"Try our burger with many options of cheese, lettuce, and tomato!\");\n    const foodSix = new food(_images_pexels_pixabay_302468_jpg__WEBPACK_IMPORTED_MODULE_4__, \"Flan\", \"Try our world famous flan!\");\n    const foodSeven = new food(_images_pexels_wendywei_3071821_jpg__WEBPACK_IMPORTED_MODULE_6__, \"Cheesecake\", \"Personally my favorite dessert, our cheesecake is out of this world!\");\n\n    const foodItems = [foodOne, foodTwo, foodThree, foodFour, foodFive, foodSix, foodSeven];\n    const content = document.getElementById(\"content\");\n    \n    const menuTitle = document.createElement('menuTitle');\n    menuTitle.innerText = \"Menu\";\n    menuTitle.style.cssText = \"font-size: 70px; font-weight: bold; text-align: center\";\n    content.appendChild(menuTitle);\n\n    foodItems.forEach((i) => {\n        const imageContainer = document.createElement('ImageContainer');\n        imageContainer.classList.add(\"imageContainer\");\n        content.appendChild(imageContainer);\n        const imageElement = document.createElement('img');\n        imageElement.classList.add('content');\n        imageElement.src = i.image;\n        imageElement.style.cssText = \"width: 20%; height: 300px\";\n        imageContainer.appendChild(imageElement);\n        const imageText = document.createElement('ImageText');\n        imageText.classList.add(\"imageText\");\n        imageContainer.appendChild(imageText);\n        const imageHeader = document.createElement(\"imageHeader\");\n        imageHeader.innerText = i.title;\n        imageHeader.style.cssText = \"font-size: 50px; font-weight: bold;\";\n        imageText.appendChild(imageHeader);\n        const imageDescription = document.createElement(\"imageDescription\");\n        imageDescription.innerText = i.description;\n        imageDescription.style.cssText = \"font-size: 24px\";\n        imageText.appendChild(imageDescription);\n  \n    })\n\n\n\n\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/myMenu.js?");

/***/ }),

/***/ "./images/jason-leung-O67LZfeyYBk-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./images/jason-leung-O67LZfeyYBk-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a0c318d564c078b35a7.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/jason-leung-O67LZfeyYBk-unsplash.jpg?");

/***/ }),

/***/ "./images/pexels-brettjordan-825661.jpg":
/*!**********************************************!*\
  !*** ./images/pexels-brettjordan-825661.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5e8f2131b327b8e8a2b.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-brettjordan-825661.jpg?");

/***/ }),

/***/ "./images/pexels-george-piskov-289673052-15047513.jpg":
/*!************************************************************!*\
  !*** ./images/pexels-george-piskov-289673052-15047513.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58e8d8e270186229fb89.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-george-piskov-289673052-15047513.jpg?");

/***/ }),

/***/ "./images/pexels-haydenplus1-9397270.jpg":
/*!***********************************************!*\
  !*** ./images/pexels-haydenplus1-9397270.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42d0c0ffbb906e6d343f.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-haydenplus1-9397270.jpg?");

/***/ }),

/***/ "./images/pexels-jeswin-5454019.jpg":
/*!******************************************!*\
  !*** ./images/pexels-jeswin-5454019.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10504f46e75d145d6794.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-jeswin-5454019.jpg?");

/***/ }),

/***/ "./images/pexels-pixabay-302468.jpg":
/*!******************************************!*\
  !*** ./images/pexels-pixabay-302468.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eefbf3099e88ab9c5303.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-pixabay-302468.jpg?");

/***/ }),

/***/ "./images/pexels-valeriya-1639557.jpg":
/*!********************************************!*\
  !*** ./images/pexels-valeriya-1639557.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28d5f47a9c2b3638ae7a.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-valeriya-1639557.jpg?");

/***/ }),

/***/ "./images/pexels-wendywei-3071821.jpg":
/*!********************************************!*\
  !*** ./images/pexels-wendywei-3071821.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c33be1fac0258dec4dd.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pexels-wendywei-3071821.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;