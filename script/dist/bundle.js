/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	
	var _Dispatcher = __webpack_require__(1);
	
	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);
	
	var _Store = __webpack_require__(2);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BellTreeFlux = BellTreeFlux || {};
	BellTreeFlux.Dispatcher = _Dispatcher2.default;
	BellTreeFlux.Store = _Store2.default;
	
	exports.default = BellTreeFlux;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Dispatcher = function () {
		function Dispatcher() {
			_classCallCheck(this, Dispatcher);
		}
	
		_createClass(Dispatcher, [{
			key: "register",
			value: function register(fn) {
	
				this.fn = fn;
			}
		}, {
			key: "dispatch",
			value: function dispatch(payload) {
	
				this.fn(payload);
			}
		}], [{
			key: "getDispatcher",
			value: function getDispatcher() {
	
				if (!Dispatcher.instance) {
	
					Dispatcher.instance = new Dispatcher();
				}
	
				return Dispatcher.instance;
			}
		}]);
	
		return Dispatcher;
	}();
	
	exports.default = Dispatcher;
	;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Store = function () {
		function Store() {
			var _this = this;
	
			var eventNameArray = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
			_classCallCheck(this, Store);
	
			this.events = {};
			eventNameArray.reduce(function (eventName) {
				_this.events[eventName] = [];
			});
		}
	
		_createClass(Store, [{
			key: "on",
			value: function on(eventName, callback) {
				this.events[eventName].push(callback);
			}
		}, {
			key: "remove",
			value: function remove(eventName, callback) {
				var index = this.events[eventName].indexOf();
				if (index === -1) {
					return;
				}
				this.events[eventName].splice(index, callback);
			}
		}, {
			key: "addEvent",
			value: function addEvent(eventName) {
				this.events[eventName] = [];
			}
		}, {
			key: "deleteEvent",
			value: function deleteEvent(eventName) {
				delete this.events[eventName];
			}
		}, {
			key: "emit",
			value: function emit(eventName) {
				if (!this.events[eventName]) {
					return;
				}
				this.events[eventName].reduce(function (fn) {
					fn();
				});
			}
		}]);
	
		return Store;
	}();
	
	exports.default = Store;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map