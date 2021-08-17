/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/weather-icons.gif */ "./src/images/weather-icons.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: rgb(59, 71, 88, .8);\n  /* --bg-color: rgb(0, 0, 0, .8); */\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-family: 'Rubik', sans-serif;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 1s ease-in;\n  background-color: #272b33;\n  margin: 0;\n}\n\n/* to vertically center things, you need to make a wrapper as well as set the height and width of html, body, and the wrapper to 100%, extremeley convoluded, CSS ought to change this */\n.wrapper {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.search-container {\n  display: flex;\n  border-radius: 10px;\n  gap: 10px;\n  padding: 10px;\n  background: var(--bg-color);\n}\n\n.search-box {\n  border: none;\n  background: none;\n  outline: none;\n  color: white;\n  font-size: 24px;\n  width: 400px;\n}\n\n.search-box::placeholder {\n  color: rgb(255, 255, 255, .8);\n}\n\n.search-button {\n  border: none;\n  background: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n}\n\n.button-icon {\n  font-size: 28px;\n  color: white;\n}\n\n.error-container {\n  background: rgb(255, 0, 0, .8);\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 24px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.hide-error-container {\n  display: none;\n}\n\n.error-container p {\n  margin: 0;\n}\n\n.error-icon {\n  font-size: 28px;\n  color: white;\n}\n\n.info-container {\n  background: var(--bg-color);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.info-container p {\n  margin: 0;\n}\n\n.name-and-temp-container {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.location-name {\n  font-size: 60px;\n}\n\n.separator {\n  font-size: 40px;\n  font-weight: lighter;\n}\n\n.temp-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 20px;\n  width: 200px;\n  justify-content: center;\n}\n\n.current-temp {\n  font-size: 40px;\n}\n\n.lowest-temp, .highest-temp {\n  font-size: 24px;\n  padding-bottom: 5px;\n}\n\n.unit-switch-container {\n  font-size: 24px;\n}\n\n.unit-switch-container:hover {\n  cursor: pointer;\n}\n\n.temperature-container {\n  padding: 8px;\n  border: white 2px solid;\n}\n\n.selected-temp {\n  background: white;\n  color: var(--bg-color);\n}\n\n.description {\n  align-self: flex-start;\n  font-size: 24px;\n}\n\n@media screen and (max-width: 700px) {\n  .name-and-temp-container {\n    flex-wrap: wrap;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,yDAAiD;EACjD,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,uCAAuC;EACvC,yBAAyB;EACzB,SAAS;AACX;;AAEA,wLAAwL;AACxL;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\n\n:root {\n  --bg-color: rgb(59, 71, 88, .8);\n  /* --bg-color: rgb(0, 0, 0, .8); */\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-family: 'Rubik', sans-serif;\n}\n\nbody {\n  background-image: url('images/weather-icons.gif');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-image 1s ease-in;\n  background-color: #272b33;\n  margin: 0;\n}\n\n/* to vertically center things, you need to make a wrapper as well as set the height and width of html, body, and the wrapper to 100%, extremeley convoluded, CSS ought to change this */\n.wrapper {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.search-container {\n  display: flex;\n  border-radius: 10px;\n  gap: 10px;\n  padding: 10px;\n  background: var(--bg-color);\n}\n\n.search-box {\n  border: none;\n  background: none;\n  outline: none;\n  color: white;\n  font-size: 24px;\n  width: 400px;\n}\n\n.search-box::placeholder {\n  color: rgb(255, 255, 255, .8);\n}\n\n.search-button {\n  border: none;\n  background: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n}\n\n.button-icon {\n  font-size: 28px;\n  color: white;\n}\n\n.error-container {\n  background: rgb(255, 0, 0, .8);\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 24px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.hide-error-container {\n  display: none;\n}\n\n.error-container p {\n  margin: 0;\n}\n\n.error-icon {\n  font-size: 28px;\n  color: white;\n}\n\n.info-container {\n  background: var(--bg-color);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding: 30px;\n  margin-top: 30px;\n}\n\n.info-container p {\n  margin: 0;\n}\n\n.name-and-temp-container {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n}\n\n.location-name {\n  font-size: 60px;\n}\n\n.separator {\n  font-size: 40px;\n  font-weight: lighter;\n}\n\n.temp-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 20px;\n  width: 200px;\n  justify-content: center;\n}\n\n.current-temp {\n  font-size: 40px;\n}\n\n.lowest-temp, .highest-temp {\n  font-size: 24px;\n  padding-bottom: 5px;\n}\n\n.unit-switch-container {\n  font-size: 24px;\n}\n\n.unit-switch-container:hover {\n  cursor: pointer;\n}\n\n.temperature-container {\n  padding: 8px;\n  border: white 2px solid;\n}\n\n.selected-temp {\n  background: white;\n  color: var(--bg-color);\n}\n\n.description {\n  align-self: flex-start;\n  font-size: 24px;\n}\n\n@media screen and (max-width: 700px) {\n  .name-and-temp-container {\n    flex-wrap: wrap;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// this module will handle making api calls to unsplash and changing the background image of body
const apiKey = 'R9Qq7VsFNCTwQPuwia-NxaRJick-JSIXAcEucmmaWL4';

async function getBackgroundImg(searchTerm) {
  const img = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&client_id=${apiKey}`, {
    mode: 'cors'
  });
  console.log(img);
  if (img.status != 200) {
    // this is if there is any kind of error like a 404 where it can't find the image or 403 where I've run out of api call requests
    // change background iamge to nothing and return
    document.body.style['background-image']=`url('')`;
  } else {
    let imgArray = await img.json();
    imgArray = imgArray.results;
    // select a random image from the array
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    // change the background image of document.body
    document.body.style.backgroundImage = `url(${imgArray[randomIndex].urls.regular})`;
    // also make the background image take up the whole screen now
    document.body.style.backgroundSize = 'cover';
  }
  return img.status;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBackgroundImg);


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// this module will handle making api calls to openweathermap and collecting information about the weather based on user input
const apiKey = 'a5b3ededf9619011197f6c79cd9baadf';

async function getWeatherInfo(location) {
  try {
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
      mode: 'cors'
    });
    const jsonInfo = await info.json();
    const kelvinTemp = jsonInfo.main.temp;
    const kelvinLowest = jsonInfo.main.temp_min;
    const kelvinHighest = jsonInfo.main.temp_max;
    console.log(jsonInfo);
    // build an object with all the necessary weather information and return it
    return {
      locationName: jsonInfo.name,
      celsiusTemp: Math.trunc(kelvinTemp - 273.15).toString().concat('°'),
      fahrenheitTemp: Math.trunc(1.8 * (kelvinTemp - 273.15) + 32).toString().concat('°'),
      celsiusLowest: Math.trunc(kelvinLowest - 273.15).toString().concat('°'),
      fahrenheitLowest: Math.trunc(1.8 * (kelvinLowest - 273.15) + 32).toString().concat('°'),
      celsiusHighest: Math.trunc(kelvinHighest - 273.15).toString().concat('°'),
      fahrenheitHighest: Math.trunc(1.8 * (kelvinHighest - 273.15) + 32).toString().concat('°'),
      description: jsonInfo.weather[0].description,
    };
  } catch (e) {
    return 'error';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherInfo);


/***/ }),

/***/ "./src/images/weather-icons.gif":
/*!**************************************!*\
  !*** ./src/images/weather-icons.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee838200729a59e23d18.gif";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ "./src/background.js");
// api keys
// openweathermap: a5b3ededf9619011197f6c79cd9baadf
// unsplash: R9Qq7VsFNCTwQPuwia-NxaRJick-JSIXAcEucmmaWL4





let wrapper;
let searchBox;
let unit;

function createUI() {
  wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // set default unit to be fahrenheit
  unit = 'F';
  // make the search bar
  const searchContainer = document.createElement('form');
  searchContainer.action = "#";
  searchContainer.classList.add('search-container');
  // create the textbox
  searchBox = document.createElement('input');
  searchBox.type = "text";
  searchBox.placeholder = "enter a city, state, or country";
  searchBox.classList.add('search-box');
  // create the search button
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.type = "submit";
  const buttonIcon = document.createElement('i');
  buttonIcon.classList.add('fa');
  buttonIcon.classList.add('fa-search');
  buttonIcon.classList.add('button-icon');
  searchButton.appendChild(buttonIcon);


  searchContainer.appendChild(searchBox);
  searchContainer.appendChild(searchButton);
  // add the search bar and the info container tot the wrapper
  wrapper.appendChild(searchContainer);
  wrapper.appendChild(createErrorMsg('Could not find location!', 'rgb(255, 0, 0, .8)', 'searchError'));
  wrapper.appendChild(createErrorMsg('Background image failed to load!', 'rgb(253, 106, 2,.8)', 'imageError'));
  // add the wrapper to the body
  document.body.appendChild(wrapper);

  // add eventlistener to the searchbox
  searchContainer.addEventListener('submit', handleSearch);
}

function createseparator() {
  let separator = document.createElement('p');
  separator.appendChild(document.createTextNode('|'));
  separator.classList.add('separator');
  return separator;
}

function changeUnits(fahrenheitContainer, celsiusContainer, tempContainer, weatherInfo) {
  if (unit == 'F') {
    // change to C
    fahrenheitContainer.classList.remove('selected-temp');
    celsiusContainer.classList.add('selected-temp');
    // change the actual temperatures
    tempContainer.querySelector('.current-temp').innerHTML = weatherInfo.celsiusTemp;
    tempContainer.querySelector('.lowest-temp').innerHTML = weatherInfo.celsiusLowest;
    tempContainer.querySelector('.highest-temp').innerHTML = weatherInfo.celsiusHighest;
    unit = 'C';
  } else {
    // change to F
    fahrenheitContainer.classList.add('selected-temp');
    celsiusContainer.classList.remove('selected-temp');
    // change the actual temperatures
    tempContainer.querySelector('.current-temp').innerHTML = weatherInfo.fahrenheitTemp;
    tempContainer.querySelector('.lowest-temp').innerHTML = weatherInfo.fahrenheitLowest;
    tempContainer.querySelector('.highest-temp').innerHTML = weatherInfo.fahrenheitHighest;
    unit = 'F';
  }
}

function createErrorMsg(errorText, bgColor, errorID) {
  // make error message
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');
  errorContainer.classList.add('hide-error-container');
  errorContainer.style.background = bgColor;
  errorContainer.id = errorID;

  const errorIcon = document.createElement('i');
  errorIcon.classList.add('fa');
  errorIcon.classList.add('fa-exclamation-triangle');
  errorIcon.classList.add('error-icon');
  const errorMessage = document.createElement('p');
  errorMessage.appendChild(document.createTextNode(errorText));
  errorContainer.appendChild(errorIcon);
  errorContainer.appendChild(errorMessage);
  return errorContainer
}

function makeBody(weatherInfo) {
  // make the container that will display all the weather information
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  // make the contents of the info container
  let nameAndTempContainer = document.createElement('div');
  nameAndTempContainer.classList.add('name-and-temp-container');
  // make location display
  let locationName = document.createElement('p');
  locationName.classList.add('location-name');
  locationName.appendChild(document.createTextNode(weatherInfo.locationName));
  // make temperature display
  let tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-container');
  let currentTemp = document.createElement('p');
  currentTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitTemp));
  currentTemp.classList.add('current-temp');
  let lowestTemp = document.createElement('p');
  lowestTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitLowest));
  lowestTemp.classList.add('lowest-temp');
  let highestTemp = document.createElement('p');
  highestTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitHighest));
  highestTemp.classList.add('highest-temp');
  tempContainer.appendChild(lowestTemp);
  tempContainer.appendChild(currentTemp);
  tempContainer.appendChild(highestTemp);
  // make unit switcher
  let unitSwitchContainer = document.createElement('div');
  unitSwitchContainer.classList.add('unit-switch-container');
  let fahrenheitContainer = document.createElement('div');
  fahrenheitContainer.classList.add('temperature-container');
  fahrenheitContainer.classList.add('selected-temp');
  let celsiusContainer = document.createElement('div');
  celsiusContainer.classList.add('temperature-container');
  let fahrenheitSwitch = document.createElement('p');
  fahrenheitSwitch.appendChild(document.createTextNode('F°'));
  fahrenheitContainer.appendChild(fahrenheitSwitch);
  let celsiusSwitch = document.createElement('p');
  celsiusSwitch.appendChild(document.createTextNode('C°'));
  celsiusContainer.appendChild(celsiusSwitch);
  unitSwitchContainer.appendChild(fahrenheitContainer);
  unitSwitchContainer.appendChild(celsiusContainer);
  unitSwitchContainer.addEventListener('click', function() {
    changeUnits(fahrenheitContainer, celsiusContainer, tempContainer, weatherInfo);
  });
  nameAndTempContainer.appendChild(locationName);
  // nameAndTempContainer.appendChild(createseparator());
  nameAndTempContainer.appendChild(tempContainer);
  // nameAndTempContainer.appendChild(createseparator());
  nameAndTempContainer.appendChild(unitSwitchContainer);

  let lineBreak = document.createElement('hr');
  lineBreak.style.width = '100%';

  let description = document.createElement('p');
  description.appendChild(document.createTextNode(weatherInfo.description));
  description.classList.add('description');
  // append all the info to infoContainer
  infoContainer.appendChild(nameAndTempContainer);
  infoContainer.appendChild(lineBreak);
  infoContainer.appendChild(description);
  // remove previous info container if it exists
  if (wrapper.querySelector('.info-container') != null) {
    wrapper.removeChild(wrapper.querySelector('.info-container'));
  }
  // append the new information container to the wrapper
  wrapper.appendChild(infoContainer);
}

async function handleSearch(e) {
  e.preventDefault();

  // collect user input and change spaces to '+' because the openweathermap api separates search terms with a '+'
  let userInput = searchBox.value.replace(' ', '+');
  // clear the searchBox
  searchBox.value = "";
  let weatherInfo = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_1__.default)(userInput);

  let searchError = wrapper.querySelector('#searchError');
  if (weatherInfo != 'error') {
    searchError.classList.add('hide-error-container');
    // make the body that will hold all the weather information and append it to the body so it displays on screen
    makeBody(weatherInfo);

    // change spaces to '-' because the unsplash api separates search terms with a '-'
    userInput = userInput.replace('+', '-');
    // call background.js function to make api call to get the weather at that location
    const status = await (0,_background_js__WEBPACK_IMPORTED_MODULE_2__.default)(userInput);
    let imageError = wrapper.querySelector('#imageError');
    if (status != 200) {
      // put out an error
      imageError.classList.remove('hide-error-container');
    } else {
      imageError.classList.add('hide-error-container');
    }
  } else {
    // display error message
    searchError.classList.remove('hide-error-container');
  }
}

createUI();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBYzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3dlYXRoZXItaWNvbnMuZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogcmdiKDU5LCA3MSwgODgsIC44KTtcXG4gIC8qIC0tYmctY29sb3I6IHJnYigwLCAwLCAwLCAuOCk7ICovXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJiMzM7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHRvIHZlcnRpY2FsbHkgY2VudGVyIHRoaW5ncywgeW91IG5lZWQgdG8gbWFrZSBhIHdyYXBwZXIgYXMgd2VsbCBhcyBzZXQgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgaHRtbCwgYm9keSwgYW5kIHRoZSB3cmFwcGVyIHRvIDEwMCUsIGV4dHJlbWVsZXkgY29udm9sdWRlZCwgQ1NTIG91Z2h0IHRvIGNoYW5nZSB0aGlzICovXFxuLndyYXBwZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnNlYXJjaC1ib3g6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJ1dHRvbi1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAwLCAwLCAuOCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmhpZGUtZXJyb3ItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5lcnJvci1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5uYW1lLWFuZC10ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmxvY2F0aW9uLW5hbWUge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmxvd2VzdC10ZW1wLCAuaGlnaGVzdC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi51bml0LXN3aXRjaC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udW5pdC1zd2l0Y2gtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXG59XFxuXFxuLnNlbGVjdGVkLXRlbXAge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYW1lLWFuZC10ZW1wLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQSx3TEFBd0w7QUFDeEw7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiByZ2IoNTksIDcxLCA4OCwgLjgpO1xcbiAgLyogLS1iZy1jb2xvcjogcmdiKDAsIDAsIDAsIC44KTsgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3dlYXRoZXItaWNvbnMuZ2lmJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmIzMztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogdG8gdmVydGljYWxseSBjZW50ZXIgdGhpbmdzLCB5b3UgbmVlZCB0byBtYWtlIGEgd3JhcHBlciBhcyB3ZWxsIGFzIHNldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiBodG1sLCBib2R5LCBhbmQgdGhlIHdyYXBwZXIgdG8gMTAwJSwgZXh0cmVtZWxleSBjb252b2x1ZGVkLCBDU1Mgb3VnaHQgdG8gY2hhbmdlIHRoaXMgKi9cXG4ud3JhcHBlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJveDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuOCk7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnV0dG9uLWljb24ge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDAsIDAsIC44KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaGlkZS1lcnJvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmVycm9yLWljb24ge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mby1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hbWUtYW5kLXRlbXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tbmFtZSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubG93ZXN0LXRlbXAsIC5oaWdoZXN0LXRlbXAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnVuaXQtc3dpdGNoLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi51bml0LXN3aXRjaC1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGVtcCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hbWUtYW5kLXRlbXAtY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBoYW5kbGUgbWFraW5nIGFwaSBjYWxscyB0byB1bnNwbGFzaCBhbmQgY2hhbmdpbmcgdGhlIGJhY2tncm91bmQgaW1hZ2Ugb2YgYm9keVxuY29uc3QgYXBpS2V5ID0gJ1I5UXE3VnNGTkNUd1FQdXdpYS1OeGFSSmljay1KU0lYQWNFdWNtbWFXTDQnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kSW1nKHNlYXJjaFRlcm0pIHtcbiAgY29uc3QgaW1nID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3F1ZXJ5PSR7c2VhcmNoVGVybX0mcGVyX3BhZ2U9MjAmY2xpZW50X2lkPSR7YXBpS2V5fWAsIHtcbiAgICBtb2RlOiAnY29ycydcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGltZyk7XG4gIGlmIChpbWcuc3RhdHVzICE9IDIwMCkge1xuICAgIC8vIHRoaXMgaXMgaWYgdGhlcmUgaXMgYW55IGtpbmQgb2YgZXJyb3IgbGlrZSBhIDQwNCB3aGVyZSBpdCBjYW4ndCBmaW5kIHRoZSBpbWFnZSBvciA0MDMgd2hlcmUgSSd2ZSBydW4gb3V0IG9mIGFwaSBjYWxsIHJlcXVlc3RzXG4gICAgLy8gY2hhbmdlIGJhY2tncm91bmQgaWFtZ2UgdG8gbm90aGluZyBhbmQgcmV0dXJuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZVsnYmFja2dyb3VuZC1pbWFnZSddPWB1cmwoJycpYDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgaW1nQXJyYXkgPSBhd2FpdCBpbWcuanNvbigpO1xuICAgIGltZ0FycmF5ID0gaW1nQXJyYXkucmVzdWx0cztcbiAgICAvLyBzZWxlY3QgYSByYW5kb20gaW1hZ2UgZnJvbSB0aGUgYXJyYXlcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltZ0FycmF5Lmxlbmd0aCk7XG4gICAgLy8gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGltYWdlIG9mIGRvY3VtZW50LmJvZHlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWdBcnJheVtyYW5kb21JbmRleF0udXJscy5yZWd1bGFyfSlgO1xuICAgIC8vIGFsc28gbWFrZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0YWtlIHVwIHRoZSB3aG9sZSBzY3JlZW4gbm93XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gIH1cbiAgcmV0dXJuIGltZy5zdGF0dXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJhY2tncm91bmRJbWc7XG4iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGhhbmRsZSBtYWtpbmcgYXBpIGNhbGxzIHRvIG9wZW53ZWF0aGVybWFwIGFuZCBjb2xsZWN0aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSB3ZWF0aGVyIGJhc2VkIG9uIHVzZXIgaW5wdXRcbmNvbnN0IGFwaUtleSA9ICdhNWIzZWRlZGY5NjE5MDExMTk3ZjZjNzljZDliYWFkZic7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7YXBpS2V5fWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGpzb25JbmZvID0gYXdhaXQgaW5mby5qc29uKCk7XG4gICAgY29uc3Qga2VsdmluVGVtcCA9IGpzb25JbmZvLm1haW4udGVtcDtcbiAgICBjb25zdCBrZWx2aW5Mb3dlc3QgPSBqc29uSW5mby5tYWluLnRlbXBfbWluO1xuICAgIGNvbnN0IGtlbHZpbkhpZ2hlc3QgPSBqc29uSW5mby5tYWluLnRlbXBfbWF4O1xuICAgIGNvbnNvbGUubG9nKGpzb25JbmZvKTtcbiAgICAvLyBidWlsZCBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIG5lY2Vzc2FyeSB3ZWF0aGVyIGluZm9ybWF0aW9uIGFuZCByZXR1cm4gaXRcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb25OYW1lOiBqc29uSW5mby5uYW1lLFxuICAgICAgY2Vsc2l1c1RlbXA6IE1hdGgudHJ1bmMoa2VsdmluVGVtcCAtIDI3My4xNSkudG9TdHJpbmcoKS5jb25jYXQoJ8KwJyksXG4gICAgICBmYWhyZW5oZWl0VGVtcDogTWF0aC50cnVuYygxLjggKiAoa2VsdmluVGVtcCAtIDI3My4xNSkgKyAzMikudG9TdHJpbmcoKS5jb25jYXQoJ8KwJyksXG4gICAgICBjZWxzaXVzTG93ZXN0OiBNYXRoLnRydW5jKGtlbHZpbkxvd2VzdCAtIDI3My4xNSkudG9TdHJpbmcoKS5jb25jYXQoJ8KwJyksXG4gICAgICBmYWhyZW5oZWl0TG93ZXN0OiBNYXRoLnRydW5jKDEuOCAqIChrZWx2aW5Mb3dlc3QgLSAyNzMuMTUpICsgMzIpLnRvU3RyaW5nKCkuY29uY2F0KCfCsCcpLFxuICAgICAgY2Vsc2l1c0hpZ2hlc3Q6IE1hdGgudHJ1bmMoa2VsdmluSGlnaGVzdCAtIDI3My4xNSkudG9TdHJpbmcoKS5jb25jYXQoJ8KwJyksXG4gICAgICBmYWhyZW5oZWl0SGlnaGVzdDogTWF0aC50cnVuYygxLjggKiAoa2VsdmluSGlnaGVzdCAtIDI3My4xNSkgKyAzMikudG9TdHJpbmcoKS5jb25jYXQoJ8KwJyksXG4gICAgICBkZXNjcmlwdGlvbjoganNvbkluZm8ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckluZm87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIGFwaSBrZXlzXG4vLyBvcGVud2VhdGhlcm1hcDogYTViM2VkZWRmOTYxOTAxMTE5N2Y2Yzc5Y2Q5YmFhZGZcbi8vIHVuc3BsYXNoOiBSOVFxN1ZzRk5DVHdRUHV3aWEtTnhhUkppY2stSlNJWEFjRXVjbW1hV0w0XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldFdlYXRoZXJJbmZvIGZyb20gJy4vd2VhdGhlci5qcyc7XG5pbXBvcnQgZ2V0QmFja2dyb3VuZEltZyBmcm9tICcuL2JhY2tncm91bmQuanMnO1xuXG5sZXQgd3JhcHBlcjtcbmxldCBzZWFyY2hCb3g7XG5sZXQgdW5pdDtcblxuZnVuY3Rpb24gY3JlYXRlVUkoKSB7XG4gIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gIC8vIHNldCBkZWZhdWx0IHVuaXQgdG8gYmUgZmFocmVuaGVpdFxuICB1bml0ID0gJ0YnO1xuICAvLyBtYWtlIHRoZSBzZWFyY2ggYmFyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgc2VhcmNoQ29udGFpbmVyLmFjdGlvbiA9IFwiI1wiO1xuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcicpO1xuICAvLyBjcmVhdGUgdGhlIHRleHRib3hcbiAgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnR5cGUgPSBcInRleHRcIjtcbiAgc2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJlbnRlciBhIGNpdHksIHN0YXRlLCBvciBjb3VudHJ5XCI7XG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYm94Jyk7XG4gIC8vIGNyZWF0ZSB0aGUgc2VhcmNoIGJ1dHRvblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcbiAgc2VhcmNoQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBidXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtc2VhcmNoJyk7XG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWljb24nKTtcbiAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuXG5cbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuICAvLyBhZGQgdGhlIHNlYXJjaCBiYXIgYW5kIHRoZSBpbmZvIGNvbnRhaW5lciB0b3QgdGhlIHdyYXBwZXJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVycm9yTXNnKCdDb3VsZCBub3QgZmluZCBsb2NhdGlvbiEnLCAncmdiKDI1NSwgMCwgMCwgLjgpJywgJ3NlYXJjaEVycm9yJykpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVycm9yTXNnKCdCYWNrZ3JvdW5kIGltYWdlIGZhaWxlZCB0byBsb2FkIScsICdyZ2IoMjUzLCAxMDYsIDIsLjgpJywgJ2ltYWdlRXJyb3InKSk7XG4gIC8vIGFkZCB0aGUgd3JhcHBlciB0byB0aGUgYm9keVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIC8vIGFkZCBldmVudGxpc3RlbmVyIHRvIHRoZSBzZWFyY2hib3hcbiAgc2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVNlYXJjaCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZXNlcGFyYXRvcigpIHtcbiAgbGV0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2VwYXJhdG9yLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd8JykpO1xuICBzZXBhcmF0b3IuY2xhc3NMaXN0LmFkZCgnc2VwYXJhdG9yJyk7XG4gIHJldHVybiBzZXBhcmF0b3I7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXRzKGZhaHJlbmhlaXRDb250YWluZXIsIGNlbHNpdXNDb250YWluZXIsIHRlbXBDb250YWluZXIsIHdlYXRoZXJJbmZvKSB7XG4gIGlmICh1bml0ID09ICdGJykge1xuICAgIC8vIGNoYW5nZSB0byBDXG4gICAgZmFocmVuaGVpdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10ZW1wJyk7XG4gICAgY2Vsc2l1c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10ZW1wJyk7XG4gICAgLy8gY2hhbmdlIHRoZSBhY3R1YWwgdGVtcGVyYXR1cmVzXG4gICAgdGVtcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJykuaW5uZXJIVE1MID0gd2VhdGhlckluZm8uY2Vsc2l1c1RlbXA7XG4gICAgdGVtcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubG93ZXN0LXRlbXAnKS5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby5jZWxzaXVzTG93ZXN0O1xuICAgIHRlbXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLmhpZ2hlc3QtdGVtcCcpLmlubmVySFRNTCA9IHdlYXRoZXJJbmZvLmNlbHNpdXNIaWdoZXN0O1xuICAgIHVuaXQgPSAnQyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gY2hhbmdlIHRvIEZcbiAgICBmYWhyZW5oZWl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRlbXAnKTtcbiAgICBjZWxzaXVzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRlbXAnKTtcbiAgICAvLyBjaGFuZ2UgdGhlIGFjdHVhbCB0ZW1wZXJhdHVyZXNcbiAgICB0ZW1wQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKS5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby5mYWhyZW5oZWl0VGVtcDtcbiAgICB0ZW1wQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5sb3dlc3QtdGVtcCcpLmlubmVySFRNTCA9IHdlYXRoZXJJbmZvLmZhaHJlbmhlaXRMb3dlc3Q7XG4gICAgdGVtcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGlnaGVzdC10ZW1wJykuaW5uZXJIVE1MID0gd2VhdGhlckluZm8uZmFocmVuaGVpdEhpZ2hlc3Q7XG4gICAgdW5pdCA9ICdGJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck1zZyhlcnJvclRleHQsIGJnQ29sb3IsIGVycm9ySUQpIHtcbiAgLy8gbWFrZSBlcnJvciBtZXNzYWdlXG4gIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLWNvbnRhaW5lcicpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlLWVycm9yLWNvbnRhaW5lcicpO1xuICBlcnJvckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmdDb2xvcjtcbiAgZXJyb3JDb250YWluZXIuaWQgPSBlcnJvcklEO1xuXG4gIGNvbnN0IGVycm9ySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZXJyb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XG4gIGVycm9ySWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1leGNsYW1hdGlvbi10cmlhbmdsZScpO1xuICBlcnJvckljb24uY2xhc3NMaXN0LmFkZCgnZXJyb3ItaWNvbicpO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVycm9yTWVzc2FnZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlcnJvclRleHQpKTtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JJY29uKTtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbiAgcmV0dXJuIGVycm9yQ29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIG1ha2VCb2R5KHdlYXRoZXJJbmZvKSB7XG4gIC8vIG1ha2UgdGhlIGNvbnRhaW5lciB0aGF0IHdpbGwgZGlzcGxheSBhbGwgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb25cbiAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJyk7XG4gIC8vIG1ha2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBpbmZvIGNvbnRhaW5lclxuICBsZXQgbmFtZUFuZFRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZUFuZFRlbXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmFtZS1hbmQtdGVtcC1jb250YWluZXInKTtcbiAgLy8gbWFrZSBsb2NhdGlvbiBkaXNwbGF5XG4gIGxldCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvY2F0aW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1uYW1lJyk7XG4gIGxvY2F0aW9uTmFtZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3ZWF0aGVySW5mby5sb2NhdGlvbk5hbWUpKTtcbiAgLy8gbWFrZSB0ZW1wZXJhdHVyZSBkaXNwbGF5XG4gIGxldCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGVtcC1jb250YWluZXInKTtcbiAgbGV0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjdXJyZW50VGVtcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3ZWF0aGVySW5mby5mYWhyZW5oZWl0VGVtcCkpO1xuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXRlbXAnKTtcbiAgbGV0IGxvd2VzdFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvd2VzdFRlbXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod2VhdGhlckluZm8uZmFocmVuaGVpdExvd2VzdCkpO1xuICBsb3dlc3RUZW1wLmNsYXNzTGlzdC5hZGQoJ2xvd2VzdC10ZW1wJyk7XG4gIGxldCBoaWdoZXN0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGlnaGVzdFRlbXAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod2VhdGhlckluZm8uZmFocmVuaGVpdEhpZ2hlc3QpKTtcbiAgaGlnaGVzdFRlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaGVzdC10ZW1wJyk7XG4gIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQobG93ZXN0VGVtcCk7XG4gIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hlc3RUZW1wKTtcbiAgLy8gbWFrZSB1bml0IHN3aXRjaGVyXG4gIGxldCB1bml0U3dpdGNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVuaXRTd2l0Y2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndW5pdC1zd2l0Y2gtY29udGFpbmVyJyk7XG4gIGxldCBmYWhyZW5oZWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZhaHJlbmhlaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmUtY29udGFpbmVyJyk7XG4gIGZhaHJlbmhlaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGVtcCcpO1xuICBsZXQgY2Vsc2l1c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxzaXVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlLWNvbnRhaW5lcicpO1xuICBsZXQgZmFocmVuaGVpdFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmFocmVuaGVpdFN3aXRjaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRsKwJykpO1xuICBmYWhyZW5oZWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRTd2l0Y2gpO1xuICBsZXQgY2Vsc2l1c1N3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY2Vsc2l1c1N3aXRjaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ8KwJykpO1xuICBjZWxzaXVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbHNpdXNTd2l0Y2gpO1xuICB1bml0U3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGZhaHJlbmhlaXRDb250YWluZXIpO1xuICB1bml0U3dpdGNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbHNpdXNDb250YWluZXIpO1xuICB1bml0U3dpdGNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2hhbmdlVW5pdHMoZmFocmVuaGVpdENvbnRhaW5lciwgY2Vsc2l1c0NvbnRhaW5lciwgdGVtcENvbnRhaW5lciwgd2VhdGhlckluZm8pO1xuICB9KTtcbiAgbmFtZUFuZFRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25OYW1lKTtcbiAgLy8gbmFtZUFuZFRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlc2VwYXJhdG9yKCkpO1xuICBuYW1lQW5kVGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgLy8gbmFtZUFuZFRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlc2VwYXJhdG9yKCkpO1xuICBuYW1lQW5kVGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bml0U3dpdGNoQ29udGFpbmVyKTtcblxuICBsZXQgbGluZUJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgbGluZUJyZWFrLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod2VhdGhlckluZm8uZGVzY3JpcHRpb24pKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgLy8gYXBwZW5kIGFsbCB0aGUgaW5mbyB0byBpbmZvQ29udGFpbmVyXG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUFuZFRlbXBDb250YWluZXIpO1xuICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmVCcmVhayk7XG4gIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAvLyByZW1vdmUgcHJldmlvdXMgaW5mbyBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gIGlmICh3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWNvbnRhaW5lcicpICE9IG51bGwpIHtcbiAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIucXVlcnlTZWxlY3RvcignLmluZm8tY29udGFpbmVyJykpO1xuICB9XG4gIC8vIGFwcGVuZCB0aGUgbmV3IGluZm9ybWF0aW9uIGNvbnRhaW5lciB0byB0aGUgd3JhcHBlclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gY29sbGVjdCB1c2VyIGlucHV0IGFuZCBjaGFuZ2Ugc3BhY2VzIHRvICcrJyBiZWNhdXNlIHRoZSBvcGVud2VhdGhlcm1hcCBhcGkgc2VwYXJhdGVzIHNlYXJjaCB0ZXJtcyB3aXRoIGEgJysnXG4gIGxldCB1c2VySW5wdXQgPSBzZWFyY2hCb3gudmFsdWUucmVwbGFjZSgnICcsICcrJyk7XG4gIC8vIGNsZWFyIHRoZSBzZWFyY2hCb3hcbiAgc2VhcmNoQm94LnZhbHVlID0gXCJcIjtcbiAgbGV0IHdlYXRoZXJJbmZvID0gYXdhaXQgZ2V0V2VhdGhlckluZm8odXNlcklucHV0KTtcblxuICBsZXQgc2VhcmNoRXJyb3IgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hFcnJvcicpO1xuICBpZiAod2VhdGhlckluZm8gIT0gJ2Vycm9yJykge1xuICAgIHNlYXJjaEVycm9yLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXJyb3ItY29udGFpbmVyJyk7XG4gICAgLy8gbWFrZSB0aGUgYm9keSB0aGF0IHdpbGwgaG9sZCBhbGwgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gYW5kIGFwcGVuZCBpdCB0byB0aGUgYm9keSBzbyBpdCBkaXNwbGF5cyBvbiBzY3JlZW5cbiAgICBtYWtlQm9keSh3ZWF0aGVySW5mbyk7XG5cbiAgICAvLyBjaGFuZ2Ugc3BhY2VzIHRvICctJyBiZWNhdXNlIHRoZSB1bnNwbGFzaCBhcGkgc2VwYXJhdGVzIHNlYXJjaCB0ZXJtcyB3aXRoIGEgJy0nXG4gICAgdXNlcklucHV0ID0gdXNlcklucHV0LnJlcGxhY2UoJysnLCAnLScpO1xuICAgIC8vIGNhbGwgYmFja2dyb3VuZC5qcyBmdW5jdGlvbiB0byBtYWtlIGFwaSBjYWxsIHRvIGdldCB0aGUgd2VhdGhlciBhdCB0aGF0IGxvY2F0aW9uXG4gICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgZ2V0QmFja2dyb3VuZEltZyh1c2VySW5wdXQpO1xuICAgIGxldCBpbWFnZUVycm9yID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcjaW1hZ2VFcnJvcicpO1xuICAgIGlmIChzdGF0dXMgIT0gMjAwKSB7XG4gICAgICAvLyBwdXQgb3V0IGFuIGVycm9yXG4gICAgICBpbWFnZUVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXJyb3ItY29udGFpbmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlRXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZS1lcnJvci1jb250YWluZXInKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAgc2VhcmNoRXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1lcnJvci1jb250YWluZXInKTtcbiAgfVxufVxuXG5jcmVhdGVVSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9