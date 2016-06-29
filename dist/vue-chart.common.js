/**
 * vue-chart v1.1.0
 * https://github.com/miaolz123/vue-chart
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chart.js"), require("lodash.assign"));
	else if(typeof define === 'function' && define.amd)
		define(["chart.js", "lodash.assign"], factory);
	else if(typeof exports === 'object')
		exports["VueChart"] = factory(require("chart.js"), require("lodash.assign"));
	else
		root["VueChart"] = factory(root["chart.js"], root["lodash.assign"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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

	var _lodash = __webpack_require__(2);

	var _lodash2 = _interopRequireDefault(_lodash);

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
	  data: function data() {
	    return {
	      chart: null
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    this.chart = new _chart2.default(this.$el, {
	      type: this.type,
	      data: this.data,
	      options: this.options
	    });
	    this.$watch('data', function () {
	      if (_this.data.datasets && _this.data.datasets.length > 0) {
	        _this.data.datasets.map(function (dataset, i) {
	          if (i === _this.chart.config.data.datasets.length) return;
	          _this.data.datasets[i] = (0, _lodash2.default)(_this.chart.config.data.datasets[i], dataset);
	        });
	      }
	      _this.chart.config.data = (0, _lodash2.default)(_this.chart.config.data, _this.data);
	      _this.$nextTick(function () {
	        _this.chart.update();
	      });
	    });
	    this.$watch('options', function () {
	      _this.chart.config.options = (0, _lodash2.default)(_this.chart.config.options, _this.options);
	      _this.$nextTick(function () {
	        _this.chart.update();
	      });
	    });
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;