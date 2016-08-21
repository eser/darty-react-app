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

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var AppModel_ts_1 = __webpack_require__(3);
	var AppComponent_tsx_1 = __webpack_require__(4);
	var model = new AppModel_ts_1.AppModel();
	ReactDOM.render(React.createElement(AppComponent_tsx_1.AppComponent, {model: model}), document.getElementsByTagName('app')[0]);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var AppModel = (function () {
	    function AppModel() {
	    }
	    return AppModel;
	}());
	exports.AppModel = AppModel;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Constants = __webpack_require__(5);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent(props) {
	        _super.call(this, props);
	        this.state = {
	            nowShowing: Constants.APP_STATE_INITIAL
	        };
	    }
	    AppComponent.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "ts-spa-boilerplate: ", this.state.nowShowing))));
	    };
	    return AppComponent;
	}(React.Component));
	exports.AppComponent = AppComponent;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	exports.APP_STATE_INITIAL = 'initial';


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map