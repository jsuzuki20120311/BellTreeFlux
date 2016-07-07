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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BellTreeFlux = BellTreeFlux || {};
	BellTreeFlux.Dispatcher = _Dispatcher2.default;
	
	exports.default = BellTreeFlux;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Dispatcher = function () {
		_createClass(Dispatcher, null, [{
			key: 'getDispatcher',
			value: function getDispatcher() {
				if (!Dispatcher.instance) {
					Dispatcher.instance = new Dispatcher();
				}
				return Dispatcher.instance;
			}
		}]);
	
		function Dispatcher() {
			_classCallCheck(this, Dispatcher);
	
			this.handlers = {};
		}
	
		_createClass(Dispatcher, [{
			key: 'setStore',
			value: function setStore(store) {
				if (!store || !store.emit) {
					throw new Error('illegal argument.');
				}
				this.store = store;
			}
		}, {
			key: 'register',
			value: function register(actionType, callback) {
				if (!this.handlers[actionType]) {
					this.handlers[actionType] = [];
				}
				this.handlers[actionType].push(callback);
			}
		}, {
			key: 'remove',
			value: function remove(actionType, callback) {
				var index = this.handlers[actionType].indexOf();
				if (index === -1) {
					return;
				}
				this.handlers[actionType].splice(index, callback);
			}
		}, {
			key: 'dispatch',
			value: function dispatch(payload) {
				if (!this.handlers[payload.actionType]) {
					return;
				}
				for (var i = 0; i < this.handlers[payload.actionType].length; i++) {
					var handler = this.handlers[payload.actionType][i];
					this.store.emit(handler);
				}
			}
		}]);
	
		return Dispatcher;
	}();
	
	exports.default = Dispatcher;
	;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map