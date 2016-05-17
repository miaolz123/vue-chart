/**
 * vue-chart v0.1.0
 * https://github.com/miaolz123/vue-chart
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/core-js/object/assign"), require("chart.js"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/core-js/object/assign", "chart.js"], factory);
	else if(typeof exports === 'object')
		exports["VueChart"] = factory(require("babel-runtime/core-js/object/assign"), require("chart.js"));
	else
		root["VueChart"] = factory(root["babel-runtime/core-js/object/assign"], root["chart.js"]);
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

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _chart = __webpack_require__(2);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  template: '<canvas :width="width" :height="height"></canvas>',
	  props: {
	    width: {
	      type: Number,
	      default: 400
	    },
	    height: {
	      type: Number,
	      default: 250
	    },
	    title: {
	      type: Object
	    }
	  },
	  data: function data() {
	    return {
	      defaultTitle: {
	        display: true,
	        text: 'My VueChart'
	      }
	    };
	  },
	  ready: function ready() {
	    /* eslint-disable no-new */
	    var thisChart = new _chart2.default(this.$el, {
	      type: 'bar',
	      data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	          label: '# of Votes',
	          data: [12, 19, 3, 5, 2, 3]
	        }]
	      },
	      options: {
	        responsive: false,
	        title: (0, _assign2.default)({}, this.defaultTitle, this.title),
	        scales: {
	          yAxes: [{
	            ticks: {
	              beginAtZero: true
	            }
	          }]
	        }
	      }
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