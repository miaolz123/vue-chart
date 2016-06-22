/**
 * vue-chart v1.0.0
 * https://github.com/miaolz123/vue-chart
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chart.js"));
	else if(typeof define === 'function' && define.amd)
		define(["chart.js"], factory);
	else if(typeof exports === 'object')
		exports["VueChart"] = factory(require("chart.js"));
	else
		root["VueChart"] = factory(root["chart.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _chart = __webpack_require__(1);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  template: '<canvas></canvas>',
	  props: {
	    type: {
	      type: String,
	      default: 'line'
	    },
	    data: {
	      type: Object,
	      default: function _default() {
	        return {
	          labels: [],
	          datasets: []
	        };
	      }
	    },
	    options: {
	      type: Object
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    /* eslint-disable no-new */
	    new _chart2.default(this.$el, {
	      type: this.type,
	      data: this.data,
	      options: this.options
	    });
	    this.$watch('type', function () {
	      new _chart2.default(_this.$el, {
	        type: _this.type,
	        data: _this.data,
	        options: _this.options
	      });
	    });
	    this.$watch('data', function () {
	      new _chart2.default(_this.$el, {
	        type: _this.type,
	        data: _this.data,
	        options: _this.options
	      });
	    });
	    this.$watch('options', function () {
	      new _chart2.default(_this.$el, {
	        type: _this.type,
	        data: _this.data,
	        options: _this.options
	      });
	    });
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;