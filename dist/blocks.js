/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./resources/assets/scripts/blocks.js":
/*!********************************************!*\
  !*** ./resources/assets/scripts/blocks.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_donation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/donation */ "./resources/assets/scripts/blocks/donation/index.js");
/* harmony import */ var _blocks_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/form */ "./resources/assets/scripts/blocks/form/index.js");
/* harmony import */ var _blocks_emailSignup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/emailSignup */ "./resources/assets/scripts/blocks/emailSignup/index.js");
/* harmony import */ var _blocks_newsletter_newsletter_branding_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-branding/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-branding/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_featured_story_hero_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-featured-story-hero/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_featured_story_small_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-featured-story-small/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_footer_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-footer/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-footer/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_heading_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-heading/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-heading/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_hero_image_with_caption_editor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-hero-image-with-caption/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_inner_content_editor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-inner-content/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_inner_heading_editor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-inner-heading/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_inner_image_editor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-inner-image/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/editor.js");
/* harmony import */ var _blocks_newsletter_newsletter_inner_paragraph_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/newsletter/newsletter-inner-paragraph/editor.js */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/editor.js");
/**
 * Forms
 */



/**
 * Email builder
 */












/***/ }),

/***/ "./resources/assets/scripts/blocks/common/icons.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/blocks/common/icons.js ***!
  \*********************************************************/
/*! exports provided: DonationIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationIcon", function() { return DonationIcon; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var DonationIcon = function DonationIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
    height: "24",
    width: "24",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("g", {
    strokeLinecap: "square",
    strokeWidth: "1",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M12,6 c0-2.2,1.8000002-4,4-4c6,0,8,8,8,8s-5.7999992,0-8,0S12,8.1999998,12,6z",
    fill: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M36,6 c0-2.2-1.7999992-4-4-4c-6,0-8,8-8,8s5.7999992,0,8,0S36,8.1999998,36,6z",
    fill: "none"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    fill: "none",
    x1: "6",
    x2: "24",
    y1: "36",
    y2: "18"
  }, "fill", "currentColor")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    fill: "none",
    x1: "23.9999809",
    x2: "42.0000114",
    y1: "46.0000191",
    y2: "27.9999905"
  }, "fill", "currentColor")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("line", {
    fill: "none",
    x1: "10",
    x2: "38",
    y1: "46",
    y2: "18"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("polyline", {
    fill: "none",
    points: "42,18 42,46 6,46 6,18 ",
    stroke: "currentColor"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("rect", {
    height: "8",
    width: "44",
    fill: "none",
    stroke: "currentColor",
    x: "2",
    y: "10"
  })));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/donation/components/Edit.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/blocks/donation/components/Edit.js ***!
  \*********************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;


var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.state = {
      forms: ''
    };
    _this.onForm = _this.onForm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onToggle = _this.onToggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.fetchForms = _this.fetchForms.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.selectOptions = _this.selectOptions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.selectValue = _this.selectValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchForms();
    }
  }, {
    key: "fetchForms",
    value: function fetchForms() {
      var _this2 = this;

      fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: "{\n          actionNetworkDonationForm {\n            id\n            name\n            embed\n          }\n        }"
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          forms: res.data.actionNetworkDonationForm
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "onForm",
    value: function onForm(selectId) {
      this.props.setAttributes({
        form: this.state.forms.filter(function (form) {
          if (form.id == selectId) {
            return form;
          }
        })
      });
    }
  }, {
    key: "onToggle",
    value: function onToggle() {
      this.props.setAttributes({
        boxed: !this.props.attributes.boxed
      });
    }
  }, {
    key: "selectOptions",
    value: function selectOptions() {
      return [{
        label: 'None selected',
        value: 'undefined'
      }].concat(this.state.forms.map(function (form) {
        return {
          label: form.name,
          value: form.id
        };
      }));
    }
  }, {
    key: "selectValue",
    value: function selectValue() {
      return this.props.attributes.form && this.props.attributes.form[0] ? this.props.attributes.form[0].id : 'undefined';
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, this.state.forms && this.props.attributes.form ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Action Network Donation Form', 'tinypixel'),
        value: this.selectValue(),
        onChange: this.onForm,
        options: this.selectOptions()
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
        label: __('Boxed', 'tinypixel'),
        checked: this.props.attributes.boxed,
        onChange: this.onToggle
      })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, "Loading..."));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./resources/assets/scripts/blocks/donation/components/Save.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/blocks/donation/components/Save.js ***!
  \*********************************************************************/
/*! exports provided: Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var embedCode = function embedCode(form) {
  return form && form[0] ? {
    __html: form[0].embed
  } : null;
};

var classes = function classes(props) {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, props.attributes.boxed);
};

var Save = function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes(props)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: embedCode(props.attributes.form)
  }));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/donation/index.js":
/*!***********************************************************!*\
  !*** ./resources/assets/scripts/blocks/donation/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Edit */ "./resources/assets/scripts/blocks/donation/components/Edit.js");
/* harmony import */ var _components_Save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Save */ "./resources/assets/scripts/blocks/donation/components/Save.js");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/icons */ "./resources/assets/scripts/blocks/common/icons.js");

var registerBlockType = wp.blocks.registerBlockType;



registerBlockType('action-network/donation-form', {
  title: 'Donation Form',
  description: 'Add an Action Network donation form',
  icon: {
    src: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_common_icons__WEBPACK_IMPORTED_MODULE_3__["DonationIcon"], null)
  },
  category: 'action-network',
  attributes: {
    form: {
      type: 'array',
      "default": [{}]
    },
    boxed: {
      type: 'Boolean',
      "default": 0
    }
  },
  edit: _components_Edit__WEBPACK_IMPORTED_MODULE_1__["Edit"],
  save: _components_Save__WEBPACK_IMPORTED_MODULE_2__["Save"]
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/emailSignup/components/Edit.js":
/*!************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/emailSignup/components/Edit.js ***!
  \************************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);







// wordpress
var __ = wp.i18n.__;
var Component = wp.element.Component;
 // packages

 // exports

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.onToggle = _this.onToggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onButtonText = _this.onButtonText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onButtonText",
    value: function onButtonText(buttonText) {
      this.props.setAttributes({
        buttonText: buttonText
      });
    }
  }, {
    key: "onToggle",
    value: function onToggle() {
      this.props.setAttributes({
        boxed: !this.props.attributes.boxed
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(this.props.className)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        action: "/wp-json/can/person/add",
        method: "GET"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
        "for": "email"
      }, "Email"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        type: "email",
        placeholder: "myemail@google.com",
        name: "email"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        type: "submit",
        disabled: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        "default": "sign-up",
        value: this.props.attributes.buttonText && this.props.attributes.buttonText,
        onChange: this.onButtonText
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
        label: __('Boxed', 'tinypixel'),
        checked: this.props.attributes.boxed && this.props.attributes.boxed,
        onChange: this.onToggle
      }));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./resources/assets/scripts/blocks/emailSignup/components/Save.js":
/*!************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/emailSignup/components/Save.js ***!
  \************************************************************************/
/*! exports provided: Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

// packages


var classes = function classes(props) {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, props.attributes.boxed);
};

var Save = function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes(props)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    action: "/wp-json/can/person/add",
    method: "GET"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    "for": "email_address"
  }, "Email"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "email",
    name: "email_address"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "submit"
  }, props.attributes.buttonText ? props.attributes.buttonText : 'Sign up')));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/emailSignup/index.js":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/blocks/emailSignup/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Edit */ "./resources/assets/scripts/blocks/emailSignup/components/Edit.js");
/* harmony import */ var _components_Save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Save */ "./resources/assets/scripts/blocks/emailSignup/components/Save.js");
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('action-network/email-signup', {
  title: 'Email Signup',
  description: 'Add a lightweight email signup form',
  icon: {
    src: 'admin-site'
  },
  category: 'action-network',
  attributes: {
    buttonText: {
      type: 'string',
      "default": ''
    },
    boxed: {
      type: 'Boolean',
      "default": 0
    }
  },
  edit: _components_Edit__WEBPACK_IMPORTED_MODULE_0__["Edit"],
  save: _components_Save__WEBPACK_IMPORTED_MODULE_1__["Save"]
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/form/components/Edit.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/blocks/form/components/Edit.js ***!
  \*****************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);







var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;


var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.state = {
      forms: ''
    };
    _this.onForm = _this.onForm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onToggle = _this.onToggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.fetchForms = _this.fetchForms.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.selectOptions = _this.selectOptions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.selectValue = _this.selectValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchForms();
    }
  }, {
    key: "fetchForms",
    value: function fetchForms() {
      var _this2 = this;

      fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: "{\n          actionNetworkForm {\n            id\n            name\n            embed\n          }\n        }"
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          forms: res.data.actionNetworkForm
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "onForm",
    value: function onForm(selectId) {
      this.props.setAttributes({
        form: this.state.forms.filter(function (form) {
          if (form.id == selectId) {
            return form;
          }
        })
      });
    }
  }, {
    key: "onToggle",
    value: function onToggle() {
      this.props.setAttributes({
        boxed: !this.props.attributes.boxed
      });
    }
  }, {
    key: "selectOptions",
    value: function selectOptions() {
      return this.state.forms.map(function (form) {
        return {
          label: form.name,
          value: form.id
        };
      }).concat([{
        label: 'None selected',
        value: 'undefined'
      }]);
    }
  }, {
    key: "selectValue",
    value: function selectValue() {
      return this.props.attributes.form && this.props.attributes.form[0] ? this.props.attributes.form[0].id : 'undefined';
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, this.state.forms && this.props.attributes.form ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Action Network Form', 'tinypixel'),
        value: this.selectValue(),
        onChange: this.onForm,
        options: this.selectOptions()
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
        label: __('Boxed', 'tinypixel'),
        checked: this.props.attributes.boxed,
        onChange: this.onToggle
      })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, "Loading..."));
    }
  }]);

  return Edit;
}(Component);



/***/ }),

/***/ "./resources/assets/scripts/blocks/form/components/Save.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/scripts/blocks/form/components/Save.js ***!
  \*****************************************************************/
/*! exports provided: Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var embed = function embed(form) {
  return form && form[0] ? {
    __html: form[0].embed
  } : null;
};

var classes = function classes(props) {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, props.attributes.boxed);
};

var Save = function Save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes(props)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: embed(props.attributes.form)
  }));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/form/index.js":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/blocks/form/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Edit */ "./resources/assets/scripts/blocks/form/components/Edit.js");
/* harmony import */ var _components_Save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Save */ "./resources/assets/scripts/blocks/form/components/Save.js");
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('action-network/form', {
  title: 'Form',
  description: 'Add an Action Network form',
  icon: {
    src: 'megaphone'
  },
  category: 'action-network',
  attributes: {
    form: {
      type: 'array',
      "default": [{}]
    },
    boxed: {
      type: 'Boolean',
      "default": 0
    }
  },
  edit: _components_Edit__WEBPACK_IMPORTED_MODULE_0__["Edit"],
  save: _components_Save__WEBPACK_IMPORTED_MODULE_1__["Save"]
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-branding/components/edit.js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-branding/components/edit.js ***!
  \*******************************************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);







// @wordpress

 // exports

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.onYear = _this.onYear.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onIssueNumber = _this.onIssueNumber.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onYear",
    value: function onYear(issueYear) {
      this.props.setAttributes({
        issueYear: issueYear
      });
    }
  }, {
    key: "onIssueNumber",
    value: function onIssueNumber(issueNumber) {
      this.props.setAttributes({
        issueNumber: issueNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          margin: '0px, auto',
          maxWidth: '600px',
          backgroundColor: '#101820'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
        src: "https://ndncollective.org/app/uploads/2019/02/ndn-red-bg.png"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          color: 'white',
          textAlign: 'center'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "font-sans flex flex-row justify-outside w-32 mx-auto text-center"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "text-white"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: this.onIssueNumber,
        placeholder: "ISSUE #01",
        value: this.props.attributes.issueNumber
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "text-white"
      }, "\xA0/\xA0"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "text-white"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        onChange: this.onYear,
        placeholder: "2019",
        value: this.props.attributes.issueYear
      })))));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-branding/editor.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-branding/editor.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-branding/components/edit.js");
// @wordpress

 // components


var attributes = {
  issueNumber: {
    type: 'string'
  },
  issueYear: {
    type: 'string'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-branding', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Branding', 'tinypixel'),
  category: 'layout',
  attributes: attributes,
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/edit.js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/edit.js ***!
  \******************************************************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/parts.js");







// @wordpress

 // exports

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.onImage = _this.onImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onHeadingUrl = _this.onHeadingUrl.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onHeadingText = _this.onHeadingText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onExcerptText = _this.onExcerptText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onButtonText = _this.onButtonText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onButtonUrl = _this.onButtonUrl.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onHeadingText",
    value: function onHeadingText(headingText) {
      this.props.setAttributes({
        headingText: headingText
      });
    }
  }, {
    key: "onHeadingUrl",
    value: function onHeadingUrl(headingUrl) {
      this.props.setAttributes({
        headingUrl: headingUrl
      });
    }
  }, {
    key: "onExcerptText",
    value: function onExcerptText(excerptText) {
      this.props.setAttributes({
        excerptText: excerptText
      });
    }
  }, {
    key: "onImage",
    value: function onImage(image) {
      this.props.setAttributes({
        imageUrl: image.url
      });
    }
  }, {
    key: "onButtonText",
    value: function onButtonText(buttonText) {
      this.props.setAttributes({
        buttonText: buttonText
      });
    }
  }, {
    key: "onButtonUrl",
    value: function onButtonUrl(buttonUrl) {
      this.props.setAttributes({
        buttonUrl: buttonUrl
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_parts__WEBPACK_IMPORTED_MODULE_7__["HeaderImage"], {
        onImage: this.onImage,
        imageUrl: this.props.attributes.imageUrl,
        isSelected: this.props.isSelected
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_parts__WEBPACK_IMPORTED_MODULE_7__["ArticleExcerpt"], {
        onHeadingText: this.onHeadingText,
        onHeadingUrl: this.onHeadingUrl,
        headingText: this.props.attributes.headingText,
        onExcerptText: this.onExcerptText,
        excerptText: this.props.attributes.excerptText,
        onButtonText: this.onButtonText,
        onButtonUrl: this.onButtonUrl,
        buttonText: this.props.attributes.buttonText,
        buttonUrl: this.props.attributes.buttonUrl,
        isSelected: this.props.isSelected
      }));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/parts.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/parts.js ***!
  \*******************************************************************************************************/
/*! exports provided: HeaderImage, ArticleExcerpt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleExcerpt", function() { return ArticleExcerpt; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var fonts = {
  systemSans: "\n    -apple-system,\n    BlinkMacSystemFont,\n    'avenir next',\n    avenir,\n    'helvetica neue',\n    helvetica,\n    ubuntu,\n    roboto,\n    noto,\n    'segoe ui',\n    arial,\n    sans-serif\n  ",
  systemSerif: "\n    athelas,\n    'Bodoni MT',\n    'Calisto MT',\n    garamond,\n    baskerville,\n    georgia,\n    times,\n    serif\n  "
};

var HeaderImage = function HeaderImage(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: "0 auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
    style: {
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      background: "url(".concat(props.imageUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      padding: "0px",
      verticalAlign: "top"
    },
    height: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mj-hero-content",
    style: {
      margin: "0px, auto"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%",
      margin: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%",
      margin: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    style: {
      fontSize: "0px",
      padding: "40px 40px 40px 40px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tinyblocks-dropzone",
    style: {
      fontFamily: "Helvetica",
      fontSize: "25px",
      fontWeight: "900",
      lineHeight: "190px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#ffffff"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    onSelect: props.onImage
  }))))))))))))))));
};

var ArticleExcerpt = function ArticleExcerpt(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      background: "white",
      backgroundColor: "white",
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      background: "white",
      backgroundColor: "white",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "20px 0",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "0px",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mj-column-per-100', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      verticalAlign: "top",
      paddingBottom: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      paddingBottom: 0,
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: fonts.systemSans,
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "24px",
      textAlign: "left",
      color: "#616161"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    style: {
      fontWeight: 700
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    style: {
      color: "#c31425",
      textDecoration: "none"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "span",
    onChange: props.onHeadingText,
    value: props.headingText,
    placeholder: "Featured story callout headline"
  }))), props.isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["URLInput"], {
    value: props.buttonUrl,
    onChange: props.onButtonUrl
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    className: "ndn-serif",
    style: {
      fontFamily: fonts.systemSerif,
      fontSize: "0px",
      padding: "10px 25px",
      paddingTop: "0",
      paddingBottom: "10px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: fonts.systemSans,
      fontSize: "16px",
      fontWeight: "100",
      lineHeight: "24px",
      textAlign: "left",
      color: "#616161"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    className: "ndn-serif",
    onChange: props.onExcerptText,
    value: props.excerptText,
    placeholder: "Pipelines like this don\u2019t build up the economy at all. They only make a few people rich, create very few, temporary jobs and contribute to climate change, which is a problem not only for the Indigenous Peoples of this region but for humanity as a whole. We don\u2019t want to see that happen. That\u2019s why we plan on organizing our communities and encouraging people to try to stop the pipeline through peaceful protest, non-violent direct action and advocacy strategies.",
    style: {
      fontFamily: fonts.systemSerif
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    verticalalign: "middle",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      borderCollapse: "separate",
      lineHeight: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    bgcolor: "#c31425",
    role: "presentation",
    valign: "middle",
    style: {
      border: "none",
      borderRadius: 0,
      cursor: "auto",
      padding: "10px 25px",
      background: "#c31425"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "span",
    className: "ndn-serif",
    onChange: props.onButtonText,
    value: props.buttonText,
    placeholder: "Learn more",
    style: {
      background: "#c31425",
      color: "white",
      fontFamily: "Helvetica",
      fontSize: "13px",
      fontWeight: "normal",
      lineHeight: "120%",
      margin: "0",
      textDecoration: "none",
      textTransform: "none"
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, props.isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["URLInput"], {
    value: props.buttonUrl,
    onChange: props.onButtonUrl
  }))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      fontSize: "0px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      height: "20px"
    }
  }, "\xA0"))))))))))))))))))));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/editor.js":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/editor.js ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-hero/components/edit.js");
// @wordpress

 // components


var attributes = {
  imageUrl: {
    type: 'string'
  },
  headingText: {
    type: 'string'
  },
  headingUrl: {
    type: 'string'
  },
  excerptText: {
    type: 'string'
  },
  buttonText: {
    type: 'string'
  },
  buttonUrl: {
    type: 'string'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-featured-story-hero', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Featured Story', 'tinypixel'),
  category: 'layout',
  attributes: attributes,
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/edit.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/edit.js ***!
  \*******************************************************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/parts.js");







// @wordpress
 // components

 // exports

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.onImage = _this.onImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onHeading = _this.onHeading.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onExcerpt = _this.onExcerpt.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onUrl = _this.onUrl.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onHeading",
    value: function onHeading(heading) {
      this.props.setAttributes({
        heading: heading
      });
    }
  }, {
    key: "onUrl",
    value: function onUrl(url) {
      this.props.setAttributes({
        url: url
      });
    }
  }, {
    key: "onExcerpt",
    value: function onExcerpt(excerpt) {
      this.props.setAttributes({
        excerpt: excerpt
      });
    }
  }, {
    key: "onImage",
    value: function onImage(image) {
      this.props.setAttributes({
        image: image.url
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          background: "white",
          backgroundColor: "white",
          margin: "0px auto",
          maxWidth: "600px"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("table", {
        align: "center",
        border: "0",
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        style: {
          width: "100%"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("td", {
        style: {
          direction: "ltr",
          fontSize: "0px",
          padding: "0px",
          textAlign: "center",
          verticalAlign: "top"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_parts__WEBPACK_IMPORTED_MODULE_7__["ArticleExcerpt"], {
        onHeading: this.onHeading,
        heading: this.props.attributes.heading,
        onExcerpt: this.onExcerpt,
        excerpt: this.props.attributes.excerpt,
        url: this.props.attributes.url,
        onUrl: this.onUrl,
        isSelected: this.props.isSelected
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_parts__WEBPACK_IMPORTED_MODULE_7__["ArticleImage"], {
        onImage: this.onImage,
        image: this.props.attributes.image
      }))))));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/parts.js":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/parts.js ***!
  \********************************************************************************************************/
/*! exports provided: ArticleImage, ArticleExcerpt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleImage", function() { return ArticleImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleExcerpt", function() { return ArticleExcerpt; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var fonts = {
  systemSans: "\n    -apple-system,\n    BlinkMacSystemFont,\n    'avenir next',\n    avenir,\n    'helvetica neue',\n    helvetica,\n    ubuntu,\n    roboto,\n    noto,\n    'segoe ui',\n    arial,\n    sans-serif\n  ",
  systemSerif: "\n    athelas,\n    'Bodoni MT',\n    'Calisto MT',\n    garamond,\n    baskerville,\n    georgia,\n    times,\n    serif\n  "
};

var ArticleImage = function ArticleImage(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mj-column-per-50', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      verticalAlign: "top"
    },
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      borderCollapse: "collapse",
      borderSpacing: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      width: "250px"
    }
  }, props.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    style: {
      border: 0,
      display: "block",
      outline: "none",
      textDecoration: "none",
      height: "auto",
      width: "100%"
    },
    width: "250",
    src: props.image
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    style: {
      border: 0,
      display: "block",
      outline: "none",
      textDecoration: "none",
      height: "auto",
      width: "100%"
    },
    width: "250",
    onSelect: props.onImage
  }))))))))));
};

var ArticleExcerpt = function ArticleExcerpt(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mj-column-per-50', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      verticalAlign: "top"
    },
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: fonts.systemSans,
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "24px",
      textAlign: "left",
      color: "#616161"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    style: {
      fontWeight: "bold",
      marginTop: 0,
      marginBottom: 0,
      color: "#c31425",
      textDecoration: "none"
    },
    placeholder: "Bringing Truth to the American Narrative: Indigenous Voices are Rising",
    value: props.heading,
    onChange: props.onHeading
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    style: {
      fontSize: "14px"
    },
    placeholder: "When you see a group as subhuman, it\u2019s easier to harm them. It\u2019s easier to cast them off to the margins of society, to be colonized, brutalized, and silenced. This is the Indigenous experience.",
    value: props.excerpt,
    onChange: props.onExcerpt
  }), props.isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInput"], {
    label: "Set the URL for this block's links",
    value: props.url,
    onChange: props.onUrl
  })))))));
};



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/editor.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/editor.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-featured-story-small/components/edit.js");
// @wordpress

 // components


var attributes = {
  image: {
    type: 'string'
  },
  heading: {
    type: 'string'
  },
  excerpt: {
    type: 'string'
  },
  url: {
    type: 'string'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-featured-story-small', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Featured Story (Two Column)', 'tinypixel'),
  category: 'layout',
  attributes: attributes,
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-footer/components/edit.js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-footer/components/edit.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var logoImage = "https://ndncollective.org/app/uploads/2019/02/NDN-horizontal.png",
    logoLinkUrl = "https://ndncollective.org/february-2019-program-updates/",
    systemSans = "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif";

var Logo = function Logo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mj-column-per-100', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: 0,
    cellPadding: 0,
    cellSpacing: 0,
    role: "presentation",
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      verticalAlign: "top",
      paddingBottom: "4px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: 0,
    cellPadding: 0,
    cellSpacing: 0,
    role: "presentation",
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      fontSize: "0px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      height: "30px"
    }
  }, "\xA0"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: 0,
    cellPadding: 0,
    cellSpacing: 0,
    role: "presentation",
    style: {
      borderCollapse: "collapse",
      borderSpacing: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      width: "200px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: logoLinkUrl,
    target: "_blank"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    height: "auto",
    src: logoImage,
    style: {
      border: 0,
      display: "block",
      outline: "none",
      textDecoration: "none",
      height: "auto",
      width: "100%"
    },
    width: "200"
  })))))))))))))));
};

var CallToActionRow = function CallToActionRow(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mj-column-per-100', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: 0,
    cellPadding: 0,
    cellSpacing: 0,
    role: "presentation",
    style: {
      verticalAalign: "top"
    },
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: systemSans,
      fontSize: "10px",
      fontWeight: 300,
      lineHeight: "24px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "white"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "div",
    style: {
      fontFamily: systemSans,
      color: "#fff",
      textTransform: "uppercase"
    },
    placeholder: "Fund our work",
    value: props.callToActionText,
    onChange: props.onCallToActionText
  }), props.displayUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["URLInput"], {
    value: props.callToActionUrl,
    onChange: props.onCallToActionUrl
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      fontSize: "0px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      height: "5px"
    }
  }, "\xA0"))))));
};

var edit = function edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      background: "#c31425",
      backgroundColor: "#c31425",
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: 0,
    cellPadding: 0,
    cellSpacing: 0,
    role: "presentation",
    style: {
      background: "#c31425",
      backgroundColor: "#c31425",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "0px",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Logo, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CallToActionRow, {
    displayUrl: props.isSelected && true,
    callToActionText: props.attributes.callToActionText,
    callToActionUrl: props.attributes.callToActionUrl,
    onCallToActionText: function onCallToActionText(callToActionText) {
      props.setAttributes({
        callToActionText: callToActionText
      });
    },
    onCallToActionUrl: function onCallToActionUrl(callToActionUrl) {
      props.setAttributes({
        callToActionUrl: callToActionUrl
      });
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-footer/editor.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-footer/editor.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-footer/components/edit.js");
// @wordpress

 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-footer', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Footer', 'tinypixel'),
  category: 'layout',
  attributes: {
    callToActionText: {
      type: 'string'
    },
    callToActionUrl: {
      type: 'string'
    }
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-heading/components/edit.js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-heading/components/edit.js ***!
  \******************************************************************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);







// @wordpress

 // exports

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.onHeading = _this.onHeading.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSubheading = _this.onSubheading.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "onHeading",
    value: function onHeading(heading) {
      this.props.setAttributes({
        heading: heading
      });
    }
  }, {
    key: "onSubheading",
    value: function onSubheading(subheading) {
      this.props.setAttributes({
        subheading: subheading
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          margin: '0px auto',
          maxWidth: '600px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("table", {
        align: "center",
        border: "0",
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        style: {
          width: '100%'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("td", {
        style: {
          direction: 'ltr',
          fontSize: '0',
          padding: '20px 0',
          textAlign: 'center',
          verticalAlign: 'top'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          margin: '0px, auto',
          maxWidth: '600px'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("table", {
        align: "center",
        border: "0",
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        style: {
          width: "100%"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("td", {
        style: {
          direction: "ltr",
          fontSize: "0px",
          padding: "0px",
          textAlign: "center",
          verticalAlign: "top"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "mj-column-per-100 outlook-group-fix ndn-serif",
        style: {
          fontFamily: "athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif",
          fontSize: "13px",
          textAlign: "left",
          direction: "ltr",
          display: "inline-block",
          verticalAlign: "top",
          width: "100%"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("table", {
        border: "0",
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        width: "100%"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("td", {
        style: {
          verticalAlign: "top",
          paddingTop: "0px"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("table", {
        border: "0",
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        width: "100%"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("td", {
        align: "center",
        style: {
          fontSize: "0px",
          padding: "10px 25px",
          wordBreak: "break-word"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: {
          fontFamily: "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
          fontSize: "14px",
          fontWeight: "300",
          lineHeight: "24px",
          textAlign: "center",
          color: "#ffffff"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        tagName: "h2",
        style: {
          textColor: '#FFFFFF',
          fontWeight: 700
        },
        value: this.props.attributes.heading,
        placeholder: "Heading line for Newsletter Main Title",
        onChange: this.onHeading
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
        tagName: "p",
        style: {
          fontFamily: "athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif"
        },
        className: "text-white",
        value: this.props.attributes.subheading,
        placeholder: "Subheading line for Newsletter Main Title to provide additional context",
        onChange: this.onSubheading
      })))))))))))))))))))));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-heading/editor.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-heading/editor.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-heading/components/edit.js");
// @wordpress

 // components


var attributes = {
  heading: {
    type: 'string'
  },
  subheading: {
    type: 'string'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-heading', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Heading', 'tinypixel'),
  category: 'layout',
  attributes: attributes,
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/components/edit.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/components/edit.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var systemSans = "\n  -apple-system,\n  BlinkMacSystemFont,\n  'avenir next',\n  avenir,\n  'helvetica neue',\n  helvetica,\n  ubuntu,\n  roboto,\n  noto,\n  'segoe ui',\n  arial,\n  sans-serif\n";

var HeroImage = function HeroImage(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: "0 auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
    style: {
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      background: "url(".concat(props.imageUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      padding: "0px",
      verticalAlign: "top"
    },
    height: "0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mj-hero-content",
    style: {
      margin: "0px, auto"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%",
      margin: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%",
      margin: "0px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "center",
    style: {
      fontSize: "0px",
      padding: "40px 40px 40px 40px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tinyblocks-dropzone",
    style: {
      fontFamily: "Helvetica",
      fontSize: "25px",
      fontWeight: "900",
      lineHeight: "190px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#ffffff"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    onSelect: props.onImage
  }))))))))))))))));
};

var HeroCaption = function HeroCaption(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      background: 'white',
      backgroundColor: 'white',
      margin: '0px, auto',
      maxWidth: '600px'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      background: 'white',
      backgroundColor: 'white',
      width: '100%'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "20px 0",
      paddingBottom: "0",
      paddingTop: "0",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    style: {
      width: "100%"
    },
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "0px",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mj-column-per-100', 'outlook-group-fix')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      verticalAlign: "top"
    },
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      paddingTop: "0",
      paddingBottom: "0",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: systemSans,
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: "14px",
      textAlign: "left",
      color: "#616161"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    "class": "ndn-sans",
    "font-size": "12px",
    placeholder: "Image caption text",
    value: props.captionText,
    onChange: props.onCaptionText
  })))))))))))))))));
};

var edit = function edit(_ref) {
  var setAttributes = _ref.setAttributes,
      _ref$attributes = _ref.attributes,
      imageUrl = _ref$attributes.imageUrl,
      captionText = _ref$attributes.captionText;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HeroImage, {
    imageUrl: imageUrl,
    onImage: function onImage(image) {
      setAttributes({
        imageUrl: image.url
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HeroCaption, {
    captionText: captionText,
    onCaptionText: function onCaptionText(captionText) {
      setAttributes({
        captionText: captionText
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/editor.js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/editor.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-hero-image-with-caption/components/edit.js");
// @wordpress

 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-hero-image-with-caption', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Hero Image (with Caption)', 'tinypixel'),
  category: 'layout',
  attributes: {
    captionText: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    }
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/components/edit.js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/components/edit.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var ALLOWED_BLOCKS = ['action-network/newsletter-inner-heading', 'action-network/newsletter-inner-paragraph', 'action-network/newsletter-inner-image'];

var edit = function edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      background: "white",
      backgroundColor: "white",
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      background: "white",
      backgroundColor: "white",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "20px 0",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      margin: "0px auto",
      maxWidth: "600px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    align: "center",
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    style: {
      direction: "ltr",
      fontSize: "0px",
      padding: "0px",
      paddingTop: "0",
      textAlign: "center",
      verticalAlign: "top"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mj-column-per-100', 'outlook-group-fix'),
    style: {
      fontSize: "13px",
      textAlign: "left",
      direction: "ltr",
      display: "inline-block",
      verticalAlign: "top",
      width: "100%"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    border: "0",
    cellPadding: "0",
    cellSpacing: "0",
    role: "presentation",
    style: {
      verticalAlign: "top"
    },
    width: "100%"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].DefaultBlockAppender, null);
    },
    allowedBlocks: ALLOWED_BLOCKS,
    templateLock: false
  }))))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/editor.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/editor.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-content/components/edit.js");

// @wordpress


 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('action-network/newsletter-inner-content', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Newsletter Inner Content', 'tinypixel'),
  category: 'layout',
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/components/edit.js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/components/edit.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var systemSans = "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif";

var edit = function edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "10px 25px",
      paddingBottom: "0",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "h2",
    style: {
      fontFamily: systemSans,
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "28px",
      textAlign: "left",
      color: "#616161"
    },
    placeholder: "Enter heading here..",
    value: props.attributes.headingText,
    onChange: function onChange(headingText) {
      props.setAttributes({
        headingText: headingText
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/editor.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/editor.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-heading/components/edit.js");
// @wordpress

 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-inner-heading', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Heading', 'tinypixel'),
  category: 'common',
  attributes: {
    headingText: {
      type: 'string'
    }
  },
  parent: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('action-network/newsletter-inner-content'),
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/components/edit.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/components/edit.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var edit = function edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "0px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "24px",
      textAlign: "left",
      color: "#616161"
    }
  }, props.attributes.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: props.attributes.image,
    width: "100%",
    style: {
      width: "100%"
    }
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    onSelect: function onSelect(image) {
      return props.setAttributes({
        image: image.url
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/editor.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/editor.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-image/components/edit.js");
// @wordpress

 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-inner-image', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'tinypixel'),
  category: 'common',
  attributes: {
    image: {
      type: 'string'
    }
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/components/edit.js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/components/edit.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var systemSans = "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif";
var systemSerif = "athelas, 'Bodoni MT', 'Calisto MT', garamond, baskerville, georgia, times, serif";

var edit = function edit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
    align: "left",
    style: {
      fontSize: "0px",
      padding: "0px 25px",
      wordBreak: "break-word"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      fontFamily: systemSans,
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "24px",
      textAlign: "left",
      color: "#616161"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "p",
    className: "ndn-serif",
    "font-weight": "100",
    "padding-top": "0",
    "padding-bottom": "10px",
    "line-height": "24px",
    "font-size": "16px",
    style: {
      fontFamily: systemSerif
    },
    placeholder: "Every great epic begins with a single character..",
    value: props.attributes.paragraphText,
    onChange: function onChange(paragraphText) {
      props.setAttributes({
        paragraphText: paragraphText
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/editor.js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/editor.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./resources/assets/scripts/blocks/newsletter/newsletter-inner-paragraph/components/edit.js");
// @wordpress

 // components


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('action-network/newsletter-inner-paragraph', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Newsletter Paragraph', 'tinypixel'),
  category: 'common',
  attributes: {
    paragraphText: {
      type: 'string'
    }
  },
  parent: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('action-network/newsletter-inner-content'),
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ 1:
/*!**************************************************!*\
  !*** multi ./resources/assets/scripts/blocks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kellymears/code/sites/ndncollective.org/ndncollective.org/web/app/plugins/action-network/resources/assets/scripts/blocks.js */"./resources/assets/scripts/blocks.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/editor":
/*!****************************!*\
  !*** external "wp.editor" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ }),

/***/ "@wordpress/element":
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ })

/******/ });