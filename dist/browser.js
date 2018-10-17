/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"browser": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"browser-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/src/appStack.tsx":
/*!*******************************!*\
  !*** ./core/src/appStack.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar appStackContainer_1 = __webpack_require__(/*! ./appStackContainer */ \"./core/src/appStackContainer.tsx\");\nvar AppStack = (function () {\n    function AppStack(appClasses) {\n        if (appClasses === void 0) { appClasses = []; }\n        this.appClasses = appClasses;\n    }\n    AppStack.prototype.add = function (path, appClass) {\n        this.appClasses[path] = appClass;\n        return this;\n    };\n    AppStack.prototype.addRange = function (appClasses) {\n        for (var path in appClasses) {\n            this.appClasses[path] = appClasses[path];\n        }\n        return this;\n    };\n    AppStack.prototype.wrapWith = function (wrapper) {\n        return wrapper(this.render());\n    };\n    AppStack.prototype.render = function () {\n        return (React.createElement(appStackContainer_1.default, { appStack: this }));\n    };\n    return AppStack;\n}());\nexports.default = AppStack;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3NyYy9hcHBTdGFjay50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3NyYy9hcHBTdGFjay50c3g/ZDM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcHBTdGFja0NvbnRhaW5lciBmcm9tICcuL2FwcFN0YWNrQ29udGFpbmVyJztcblxuY2xhc3MgQXBwU3RhY2sge1xuICAgIGFwcENsYXNzZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgICBjb25zdHJ1Y3RvcihhcHBDbGFzc2VzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gW10pIHtcbiAgICAgICAgdGhpcy5hcHBDbGFzc2VzID0gYXBwQ2xhc3NlcztcbiAgICB9XG5cbiAgICBhZGQocGF0aDogc3RyaW5nLCBhcHBDbGFzczogYW55KTogQXBwU3RhY2sge1xuICAgICAgICB0aGlzLmFwcENsYXNzZXNbcGF0aF0gPSBhcHBDbGFzcztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRSYW5nZShhcHBDbGFzc2VzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogQXBwU3RhY2sge1xuICAgICAgICBmb3IgKGNvbnN0IHBhdGggaW4gYXBwQ2xhc3Nlcykge1xuICAgICAgICAgICAgdGhpcy5hcHBDbGFzc2VzW3BhdGhdID0gYXBwQ2xhc3Nlc1twYXRoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdyYXBXaXRoKHdyYXBwZXI6IChjaGlsZHJlbjogUmVhY3QuUmVhY3RGcmFnbWVudCkgPT4gSlNYLkVsZW1lbnQpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB3cmFwcGVyKHRoaXMucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBwU3RhY2tDb250YWluZXIgYXBwU3RhY2s9e3RoaXN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIEFwcFN0YWNrIGFzIGRlZmF1bHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/src/appStack.tsx\n");

/***/ }),

/***/ "./core/src/appStackContainer.tsx":
/*!****************************************!*\
  !*** ./core/src/appStackContainer.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nvar AppStackContainer = (function (_super) {\n    __extends(AppStackContainer, _super);\n    function AppStackContainer() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    AppStackContainer.prototype.render = function () {\n        var _this = this;\n        var renderIndex = 0;\n        return (React.createElement(react_router_dom_1.Switch, { key: \"appStack-switch\" }, Object.keys(this.props.appStack.appClasses).map(function (itemKey) {\n            return React.createElement(react_router_dom_1.Route, { path: itemKey, component: _this.props.appStack.appClasses[itemKey], key: \"appStack-switch-app-\" + renderIndex++ });\n        })));\n    };\n    return AppStackContainer;\n}(React.Component));\nexports.default = AppStackContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3NyYy9hcHBTdGFja0NvbnRhaW5lci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3NyYy9hcHBTdGFja0NvbnRhaW5lci50c3g/MTBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBBcHBTdGFjayBmcm9tICcuL2FwcFN0YWNrJztcblxuaW50ZXJmYWNlIEFwcFN0YWNrQ29udGFpbmVyUHJvcHMge1xuICAgIGFwcFN0YWNrOiBBcHBTdGFjaztcbn1cblxuaW50ZXJmYWNlIEFwcFN0YWNrQ29udGFpbmVyU3RhdGUge1xufVxuXG5jbGFzcyBBcHBTdGFja0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBcHBTdGFja0NvbnRhaW5lclByb3BzLCBBcHBTdGFja0NvbnRhaW5lclN0YXRlPiB7XG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgbGV0IHJlbmRlckluZGV4ID0gMDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXRjaCBrZXk9XCJhcHBTdGFjay1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5hcHBTdGFjay5hcHBDbGFzc2VzKS5tYXAoKGl0ZW1LZXkpID0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtpdGVtS2V5fSBjb21wb25lbnQ9e3RoaXMucHJvcHMuYXBwU3RhY2suYXBwQ2xhc3Nlc1tpdGVtS2V5XX0ga2V5PXtgYXBwU3RhY2stc3dpdGNoLWFwcC0ke3JlbmRlckluZGV4Kyt9YH0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIEFwcFN0YWNrQ29udGFpbmVyIGFzIGRlZmF1bHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFBQTtBQUFBOztBQVlBO0FBWEE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/src/appStackContainer.tsx\n");

/***/ }),

/***/ "./core/src/index.browser.tsx":
/*!************************************!*\
  !*** ./core/src/index.browser.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global, module) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nif (global.Promise === undefined) {\n    var es6promise = __webpack_require__(/*! es6-promise */ \"./node_modules/es6-promise/dist/es6-promise.js\");\n    es6promise.polyfill();\n}\nif (global.fetch === undefined) {\n    __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n}\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nvar appStack_1 = __webpack_require__(/*! ./appStack */ \"./core/src/appStack.tsx\");\nvar startup_1 = __webpack_require__(/*! ../../src/startup */ \"./src/startup.ts\");\nvar appStack = new appStack_1.default()\n    .addRange(startup_1.default);\nvar root = appStack.wrapWith(function (children) {\n    return React.createElement(react_router_dom_1.BrowserRouter, null, children);\n});\nvar targetElement = document.getElementsByTagName('app')[0];\nif (targetElement.childNodes.length > 0) {\n    ReactDOM.hydrate(root, targetElement);\n}\nelse {\n    ReactDOM.render(root, targetElement);\n}\nif (module.hot !== undefined) {\n    module.hot.accept(function (err) {\n        if (err) {\n            console.error('Cannot apply HMR update.', err);\n        }\n    }, function () { return ReactDOM.hydrate(root, targetElement); });\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3NyYy9pbmRleC5icm93c2VyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvcmUvc3JjL2luZGV4LmJyb3dzZXIudHN4PzJhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmRlY2xhcmUgdmFyIGRvY3VtZW50OiBhbnk7XG5cbi8vIHBvbHlmaWxsc1xuaWYgKGdsb2JhbC5Qcm9taXNlID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBlczZwcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKTtcblxuICAgIGVzNnByb21pc2UucG9seWZpbGwoKTtcbn1cblxuaWYgKGdsb2JhbC5mZXRjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG59XG5cbi8vIHJlYWN0LWRvbVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gZXhlY3V0ZSBzdGFydHVwXG5pbXBvcnQgQXBwU3RhY2sgZnJvbSAnLi9hcHBTdGFjayc7XG5pbXBvcnQgYXBwTWFwcGluZyBmcm9tICcuLi8uLi9zcmMvc3RhcnR1cCc7XG5cbmNvbnN0IGFwcFN0YWNrID0gbmV3IEFwcFN0YWNrKClcbiAgICAuYWRkUmFuZ2UoYXBwTWFwcGluZyk7XG5cbmNvbnN0IHJvb3QgPSBhcHBTdGFjay53cmFwV2l0aChcbiAgICBjaGlsZHJlbiA9PlxuICAgIDxCcm93c2VyUm91dGVyPntjaGlsZHJlbn08L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuXG5jb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FwcCcpWzBdO1xuaWYgKHRhcmdldEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgUmVhY3RET00uaHlkcmF0ZShyb290LCB0YXJnZXRFbGVtZW50KTtcbn1cbmVsc2Uge1xuICAgIFJlYWN0RE9NLnJlbmRlcihyb290LCB0YXJnZXRFbGVtZW50KTtcbn1cblxuLy8gd2VicGFja1xuaWYgKG1vZHVsZS5ob3QgIT09IHVuZGVmaW5lZCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGFwcGx5IEhNUiB1cGRhdGUuJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4gUmVhY3RET00uaHlkcmF0ZShyb290LCB0YXJnZXRFbGVtZW50KSxcbiAgICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/src/index.browser.tsx\n");

/***/ }),

/***/ "./src/app/appContainer.tsx":
/*!**********************************!*\
  !*** ./src/app/appContainer.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nvar layoutContainer_1 = __webpack_require__(/*! ./layouts/default/layoutContainer */ \"./src/app/layouts/default/layoutContainer.tsx\");\nvar homeContainer_1 = __webpack_require__(/*! ./pages/home/homeContainer */ \"./src/app/pages/home/homeContainer.tsx\");\nvar dummyContainer_1 = __webpack_require__(/*! ./pages/dummy/dummyContainer */ \"./src/app/pages/dummy/dummyContainer.tsx\");\nvar notFoundContainer_1 = __webpack_require__(/*! ./pages/notFound/notFoundContainer */ \"./src/app/pages/notFound/notFoundContainer.tsx\");\nvar loadingView_1 = __webpack_require__(/*! ./pages/shared/loadingView */ \"./src/app/pages/shared/loadingView.tsx\");\n__webpack_require__(/*! ./assets/styles.scss */ \"./src/app/assets/styles.scss\");\n__webpack_require__(/*! ./assets/fonts.scss */ \"./src/app/assets/fonts.scss\");\nvar AppContainer = (function (_super) {\n    __extends(AppContainer, _super);\n    function AppContainer(props, context) {\n        var _this = _super.call(this, props, context) || this;\n        _this.state = {\n            initialized: false,\n        };\n        return _this;\n    }\n    AppContainer.prototype.init = function () {\n        return __awaiter(this, void 0, Promise, function () {\n            return __generator(this, function (_a) {\n                if (this.state.initialized) {\n                    return [2];\n                }\n                this.setState({\n                    initialized: true,\n                });\n                return [2];\n            });\n        });\n    };\n    AppContainer.prototype.componentDidMount = function () {\n        this.init();\n    };\n    AppContainer.prototype.render = function () {\n        if (this.state === null || !this.state.initialized) {\n            return (React.createElement(loadingView_1.default, null));\n        }\n        return (React.createElement(react_router_dom_1.Switch, null,\n            React.createElement(react_router_dom_1.Route, { path: \"/\", exact: true, strict: true, render: function () { return React.createElement(layoutContainer_1.default, null,\n                    React.createElement(homeContainer_1.default, null)); } }),\n            React.createElement(react_router_dom_1.Route, { path: \"/dummy/\", exact: true, strict: true, render: function () { return React.createElement(layoutContainer_1.default, null,\n                    React.createElement(dummyContainer_1.default, null)); } }),\n            React.createElement(react_router_dom_1.Route, { render: function () { return React.createElement(notFoundContainer_1.default, null); } })));\n    };\n    return AppContainer;\n}(React.Component));\nexports.default = AppContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcENvbnRhaW5lci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcENvbnRhaW5lci50c3g/OGMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBhcHBDb250ZXh0IGZyb20gJy4vYXBwQ29udGV4dCc7XG5cbmltcG9ydCBBdXRob3JpemF0aW9uRmlsdGVyIGZyb20gJy4vcGFnZXMvc2hhcmVkL2F1dGhvcml6YXRpb25GaWx0ZXInO1xuXG5pbXBvcnQgTGF5b3V0Q29udGFpbmVyIGZyb20gJy4vbGF5b3V0cy9kZWZhdWx0L2xheW91dENvbnRhaW5lcic7XG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZUNvbnRhaW5lcic7XG5pbXBvcnQgRHVtbXlDb250YWluZXIgZnJvbSAnLi9wYWdlcy9kdW1teS9kdW1teUNvbnRhaW5lcic7XG5pbXBvcnQgTm90Rm91bmRDb250YWluZXIgZnJvbSAnLi9wYWdlcy9ub3RGb3VuZC9ub3RGb3VuZENvbnRhaW5lcic7XG5cbmltcG9ydCBMb2FkaW5nVmlldyBmcm9tICcuL3BhZ2VzL3NoYXJlZC9sb2FkaW5nVmlldyc7XG5cbi8vIHN0eWxlc2hlZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAnLi9hc3NldHMvZm9udHMuc2Nzcyc7XG5cbmludGVyZmFjZSBBcHBDb250YWluZXJQcm9wcyB7XG59XG5cbmludGVyZmFjZSBBcHBDb250YWluZXJTdGF0ZSB7XG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBcHBDb250YWluZXJQcm9wcywgQXBwQ29udGFpbmVyU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQXBwQ29udGFpbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5ldmVudHMuZW1pdCgnYXBwSW5pdCcpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gbnVsbCB8fCAhdGhpcy5zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1ZpZXcgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdD17dHJ1ZX0gc3RyaWN0PXt0cnVlfSByZW5kZXI9eygpID0+IDxMYXlvdXRDb250YWluZXI+PEhvbWVDb250YWluZXIgLz48L0xheW91dENvbnRhaW5lcj59IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kdW1teS9cIiBleGFjdD17dHJ1ZX0gc3RyaWN0PXt0cnVlfSByZW5kZXI9eygpID0+IDxMYXlvdXRDb250YWluZXI+PER1bW15Q29udGFpbmVyIC8+PC9MYXlvdXRDb250YWluZXI+fSAvPlxuXG4gICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZXhhY3Q9e3RydWV9IHN0cmljdD17dHJ1ZX0gcmVuZGVyPXsoKSA9PiA8TG9naW5Db250YWluZXIgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2V0dGluZ3NcIiBleGFjdD17dHJ1ZX0gc3RyaWN0PXt0cnVlfSByZW5kZXI9eygpID0+IDxBdXRob3JpemF0aW9uRmlsdGVyPjxMYXlvdXRDb250YWluZXI+PFNldHRpbmdzQ29udGFpbmVyIC8+PC9MYXlvdXRDb250YWluZXI+PC9BdXRob3JpemF0aW9uRmlsdGVyPn0gLz4gKi99XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXsoKSA9PiA8Tm90Rm91bmRDb250YWluZXIgLz59IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQXBwQ29udGFpbmVyIGFzIGRlZmF1bHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBR0E7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/appContainer.tsx\n");

/***/ }),

/***/ "./src/app/appContext.ts":
/*!*******************************!*\
  !*** ./src/app/appContext.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar servicemanager_1 = __webpack_require__(/*! servicemanager */ \"./node_modules/servicemanager/lib/index.js\");\nvar dummyService_1 = __webpack_require__(/*! ./pages/dummy/dummyService */ \"./src/app/pages/dummy/dummyService.ts\");\nvar appContext = new servicemanager_1.ServiceManager();\nexports.default = appContext;\nappContext.set('dummyService', function () { return new dummyService_1.default(); }, servicemanager_1.ServiceLifetime.Transient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcENvbnRleHQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcENvbnRleHQudHM/NjUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlTGlmZXRpbWUsIFNlcnZpY2VNYW5hZ2VyIH0gZnJvbSAnc2VydmljZW1hbmFnZXInO1xuXG5pbXBvcnQgRHVtbXlTZXJ2aWNlIGZyb20gJy4vcGFnZXMvZHVtbXkvZHVtbXlTZXJ2aWNlJztcblxuY29uc3QgYXBwQ29udGV4dCA9IG5ldyBTZXJ2aWNlTWFuYWdlcigpO1xuXG5hcHBDb250ZXh0LnNldCgnZHVtbXlTZXJ2aWNlJywgKCkgPT4gbmV3IER1bW15U2VydmljZSgpLCBTZXJ2aWNlTGlmZXRpbWUuVHJhbnNpZW50KTtcblxuZXhwb3J0IHtcbiAgICBhcHBDb250ZXh0IGFzIGRlZmF1bHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFFQTtBQUtBO0FBSEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/appContext.ts\n");

/***/ }),

/***/ "./src/app/assets/fonts.scss":
/*!***********************************!*\
  !*** ./src/app/assets/fonts.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2Fzc2V0cy9mb250cy5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hc3NldHMvZm9udHMuc2Nzcz9iZDUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/assets/fonts.scss\n");

/***/ }),

/***/ "./src/app/assets/styles.scss":
/*!************************************!*\
  !*** ./src/app/assets/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2Fzc2V0cy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXNzZXRzL3N0eWxlcy5zY3NzPzQzZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/assets/styles.scss\n");

/***/ }),

/***/ "./src/app/layouts/default/layoutContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/app/layouts/default/layoutContainer.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nvar LayoutContainer = (function (_super) {\n    __extends(LayoutContainer, _super);\n    function LayoutContainer(props, context) {\n        var _this = _super.call(this, props, context) || this;\n        _this.state = {};\n        return _this;\n    }\n    LayoutContainer.prototype.clickHandler = function (ev) {\n        var target = ev.target;\n        if (target.tagName === 'A') {\n            var url = target.getAttribute('href');\n            if (url !== null) {\n            }\n        }\n    };\n    LayoutContainer.prototype.render = function () {\n        return (React.createElement(\"div\", { className: \"hero is-fullheight\" },\n            React.createElement(\"header\", { className: \"header hero-head\" },\n                React.createElement(\"nav\", { className: \"navbar is-transparent\", role: \"navigation\", \"aria-label\": \"main navigation\" },\n                    React.createElement(\"div\", { className: \"container\" },\n                        React.createElement(\"div\", { className: \"navbar-brand\" },\n                            React.createElement(\"span\", { className: \"navbar-burger burger\", role: \"button\", \"aria-label\": \"menu\", \"aria-expanded\": \"false\", \"data-target\": \"navbarMenu\" },\n                                React.createElement(\"span\", { \"aria-hidden\": \"true\" }),\n                                React.createElement(\"span\", { \"aria-hidden\": \"true\" }),\n                                React.createElement(\"span\", { \"aria-hidden\": \"true\" }))),\n                        React.createElement(\"div\", { id: \"navbarMenu\", className: \"navbar-menu\" },\n                            React.createElement(\"div\", { className: \"navbar-start\" },\n                                React.createElement(react_router_dom_1.NavLink, { exact: true, to: \"/\", className: \"navbar-item\", activeClassName: \"is-active\" }, \"Home\"),\n                                React.createElement(react_router_dom_1.NavLink, { to: \"/dummy/\", className: \"navbar-item\", activeClassName: \"is-active\" }, \"Dummy\")),\n                            React.createElement(\"div\", { className: \"navbar-end\" },\n                                React.createElement(\"a\", { className: \"navbar-item\", href: \"https://github.com/eserozvataf/ts-spa-boilerplate\" },\n                                    React.createElement(\"span\", { className: \"icon\" },\n                                        React.createElement(\"i\", { className: \"fa fa-code-fork fa-fw\", \"aria-hidden\": \"true\" })),\n                                    \"GitHub\")))))),\n            React.createElement(\"main\", { className: \"section hero-body\" },\n                React.createElement(\"div\", { className: \"container\" },\n                    React.createElement(\"div\", { className: \"content\", onClick: this.clickHandler.bind(this) }, this.props.children))),\n            React.createElement(\"footer\", { className: \"footer hero-foot\" },\n                React.createElement(\"div\", { className: \"container\" },\n                    React.createElement(\"div\", { className: \"content has-text-centered\" },\n                        \"TypeScript SPA Boilerplate is a front-end development stack for starting with a structured, scaleable and adaptable basecode.\",\n                        React.createElement(\"br\", null),\n                        \"Visit \",\n                        React.createElement(\"a\", { href: \"https://github.com/eserozvataf/ts-spa-boilerplate\" }, \"GitHub page\"),\n                        \" for details. Apache License, Version 2.0\")))));\n    };\n    return LayoutContainer;\n}(React.Component));\nexports.default = LayoutContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2xheW91dHMvZGVmYXVsdC9sYXlvdXRDb250YWluZXIudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvbGF5b3V0Q29udGFpbmVyLnRzeD9iMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmludGVyZmFjZSBMYXlvdXRDb250YWluZXJQcm9wcyB7XG59XG5cbmludGVyZmFjZSBMYXlvdXRDb250YWluZXJTdGF0ZSB7XG59XG5cbmNsYXNzIExheW91dENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRDb250YWluZXJQcm9wcywgTGF5b3V0Q29udGFpbmVyU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogTGF5b3V0Q29udGFpbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlcihldik6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSBldi50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKHVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG5hdmlnYXRpb25JdGVtID0gYXBwLm5hdmlnYXRpb25NYW5hZ2VyLmlkZW50aWZ5KHVybCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAobmF2aWdhdGlvbkl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgYXBwLmhpc3RvcnkucHVzaChuYXZpZ2F0aW9uSXRlbS5nZXRVcmwoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgSlNYIHN5bnRheCBpcyBxdWl0ZSBpbnR1aXRpdmUgYnV0IGNoZWNrIG91dFxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWxcbiAgICAvLyBpZiB5b3UgbmVlZCBhZGRpdGlvbmFsIGhlbHBcbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBoZXJvLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtdHJhbnNwYXJlbnRcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRzLXNwYS1ib2lsZXJwbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci1idXJnZXIgYnVyZ2VyXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJtZW51XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS10YXJnZXQ9XCJuYXZiYXJNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyTWVudVwiIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBleGFjdD17dHJ1ZX0gdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIj5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZHVtbXkvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIj5EdW1teTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VzZXJvenZhdGFmL3RzLXNwYS1ib2lsZXJwbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2RlLWZvcmsgZmEtZndcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uIGhlcm8tYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGhlcm8tZm9vdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZVNjcmlwdCBTUEEgQm9pbGVycGxhdGUgaXMgYSBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgc3RhY2sgZm9yIHN0YXJ0aW5nIHdpdGggYSBzdHJ1Y3R1cmVkLCBzY2FsZWFibGUgYW5kIGFkYXB0YWJsZSBiYXNlY29kZS48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VzZXJvenZhdGFmL3RzLXNwYS1ib2lsZXJwbGF0ZVwiPkdpdEh1YiBwYWdlPC9hPiBmb3IgZGV0YWlscy4gQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgTGF5b3V0Q29udGFpbmVyIGFzIGRlZmF1bHQsXG4gICAgTGF5b3V0Q29udGFpbmVyUHJvcHMsXG4gICAgTGF5b3V0Q29udGFpbmVyU3RhdGUsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/layouts/default/layoutContainer.tsx\n");

/***/ }),

/***/ "./src/app/pages/dummy/dummyContainer.tsx":
/*!************************************************!*\
  !*** ./src/app/pages/dummy/dummyContainer.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar appContext_1 = __webpack_require__(/*! ../../appContext */ \"./src/app/appContext.ts\");\nvar summaryResultView_1 = __webpack_require__(/*! ./summaryResultView */ \"./src/app/pages/dummy/summaryResultView.tsx\");\nvar loadingView_1 = __webpack_require__(/*! ../shared/loadingView */ \"./src/app/pages/shared/loadingView.tsx\");\nvar errorView_1 = __webpack_require__(/*! ../shared/errorView */ \"./src/app/pages/shared/errorView.tsx\");\nvar DummyContainer = (function (_super) {\n    __extends(DummyContainer, _super);\n    function DummyContainer(props, context) {\n        var _this = _super.call(this, props, context) || this;\n        _this.state = {\n            isCompleted: false,\n            firstNumber: 4,\n            secondNumber: 7,\n            summary: null,\n            error: false,\n        };\n        return _this;\n    }\n    DummyContainer.prototype.componentDidMount = function () {\n        this.update();\n    };\n    DummyContainer.prototype.update = function () {\n        return __awaiter(this, void 0, Promise, function () {\n            var dummyService, summary, ex_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        dummyService = appContext_1.default.get('dummyService');\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4, dummyService.getSummary(this.state.firstNumber, this.state.secondNumber)];\n                    case 2:\n                        summary = _a.sent();\n                        this.setState({ isCompleted: true, summary: summary });\n                        return [3, 4];\n                    case 3:\n                        ex_1 = _a.sent();\n                        this.setState({ isCompleted: true, error: ex_1 });\n                        return [3, 4];\n                    case 4: return [2];\n                }\n            });\n        });\n    };\n    DummyContainer.prototype.render = function () {\n        if (!this.state.isCompleted) {\n            return (React.createElement(loadingView_1.default, null));\n        }\n        if (this.state.error !== false) {\n            return (React.createElement(errorView_1.default, { message: \"An error occurred\" }));\n        }\n        return (React.createElement(\"div\", null,\n            React.createElement(\"h1\", { className: \"title\" }, \"Dummy\"),\n            React.createElement(summaryResultView_1.default, { firstNumber: this.state.firstNumber, secondNumber: this.state.secondNumber, summary: this.state.summary })));\n    };\n    return DummyContainer;\n}(React.Component));\nexports.default = DummyContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL2R1bW15L2R1bW15Q29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvZHVtbXkvZHVtbXlDb250YWluZXIudHN4P2QzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgYXBwQ29udGV4dCBmcm9tICcuLi8uLi9hcHBDb250ZXh0JztcblxuaW1wb3J0IFN1bW1hcnlSZXN1bHRWaWV3IGZyb20gJy4vc3VtbWFyeVJlc3VsdFZpZXcnO1xuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gJy4uL3NoYXJlZC9sb2FkaW5nVmlldyc7XG5pbXBvcnQgRXJyb3JWaWV3IGZyb20gJy4uL3NoYXJlZC9lcnJvclZpZXcnO1xuXG5pbnRlcmZhY2UgRHVtbXlDb250YWluZXJQcm9wcyB7XG59XG5cbmludGVyZmFjZSBEdW1teUNvbnRhaW5lclN0YXRlIHtcbiAgICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbiAgICBmaXJzdE51bWJlcjogbnVtYmVyO1xuICAgIHNlY29uZE51bWJlcjogbnVtYmVyO1xuICAgIHN1bW1hcnk/OiBudW1iZXI7XG4gICAgZXJyb3I6IHN0cmluZyB8IGZhbHNlO1xufVxuXG5jbGFzcyBEdW1teUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEdW1teUNvbnRhaW5lclByb3BzLCBEdW1teUNvbnRhaW5lclN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IER1bW15Q29udGFpbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyOiA0LFxuICAgICAgICAgICAgc2Vjb25kTnVtYmVyOiA3LFxuICAgICAgICAgICAgc3VtbWFyeTogbnVsbCxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGR1bW15U2VydmljZSA9IGFwcENvbnRleHQuZ2V0KCdkdW1teVNlcnZpY2UnKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGR1bW15U2VydmljZS5nZXRTdW1tYXJ5KHRoaXMuc3RhdGUuZmlyc3ROdW1iZXIsIHRoaXMuc3RhdGUuc2Vjb25kTnVtYmVyKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ29tcGxldGVkOiB0cnVlLCBzdW1tYXJ5OiBzdW1tYXJ5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ29tcGxldGVkOiB0cnVlLCBlcnJvcjogZXggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExvYWRpbmdWaWV3IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxFcnJvclZpZXcgbWVzc2FnZT1cIkFuIGVycm9yIG9jY3VycmVkXCIgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5EdW1teTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8U3VtbWFyeVJlc3VsdFZpZXcgZmlyc3ROdW1iZXI9e3RoaXMuc3RhdGUuZmlyc3ROdW1iZXJ9IHNlY29uZE51bWJlcj17dGhpcy5zdGF0ZS5zZWNvbmROdW1iZXJ9IHN1bW1hcnk9e3RoaXMuc3RhdGUuc3VtbWFyeX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBEdW1teUNvbnRhaW5lciBhcyBkZWZhdWx0LFxuICAgIER1bW15Q29udGFpbmVyUHJvcHMsXG4gICAgRHVtbXlDb250YWluZXJTdGF0ZSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7OztBQUNBOzs7O0FBR0E7O0FBQUE7QUFFQTs7OztBQUdBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/pages/dummy/dummyContainer.tsx\n");

/***/ }),

/***/ "./src/app/pages/dummy/dummyService.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/dummy/dummyService.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DummyService = (function () {\n    function DummyService() {\n    }\n    DummyService.prototype.getSummary = function (firstNumber, secondNumber) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () { return resolve(firstNumber + secondNumber); }, 1000);\n        });\n    };\n    return DummyService;\n}());\nexports.default = DummyService;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL2R1bW15L2R1bW15U2VydmljZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvZHVtbXkvZHVtbXlTZXJ2aWNlLnRzP2U5NjMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHVtbXlTZXJ2aWNlIHtcbiAgICBnZXRTdW1tYXJ5KGZpcnN0TnVtYmVyOiBudW1iZXIsIHNlY29uZE51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgKCkgPT4gcmVzb2x2ZShmaXJzdE51bWJlciArIHNlY29uZE51bWJlciksXG4gICAgICAgICAgICAgICAgMTAwMCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBEdW1teVNlcnZpY2UgYXMgZGVmYXVsdCxcbn07XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQTtBQVNBO0FBUkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFHQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/pages/dummy/dummyService.ts\n");

/***/ }),

/***/ "./src/app/pages/dummy/summaryResultView.tsx":
/*!***************************************************!*\
  !*** ./src/app/pages/dummy/summaryResultView.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar SummaryResultView = (function (_super) {\n    __extends(SummaryResultView, _super);\n    function SummaryResultView(props, context) {\n        return _super.call(this, props, context) || this;\n    }\n    SummaryResultView.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            this.props.firstNumber,\n            \" + \",\n            this.props.secondNumber,\n            \" = \",\n            this.props.summary));\n    };\n    return SummaryResultView;\n}(React.PureComponent));\nexports.default = SummaryResultView;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL2R1bW15L3N1bW1hcnlSZXN1bHRWaWV3LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvZHVtbXkvc3VtbWFyeVJlc3VsdFZpZXcudHN4PzY1YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU3VtbWFyeVJlc3VsdFZpZXdQcm9wcyB7XG4gICAgZmlyc3ROdW1iZXI6IG51bWJlcjtcbiAgICBzZWNvbmROdW1iZXI6IG51bWJlcjtcbiAgICBzdW1tYXJ5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTdW1tYXJ5UmVzdWx0Vmlld1N0YXRlIHtcbn1cblxuY2xhc3MgU3VtbWFyeVJlc3VsdFZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFN1bW1hcnlSZXN1bHRWaWV3UHJvcHMsIFN1bW1hcnlSZXN1bHRWaWV3U3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogU3VtbWFyeVJlc3VsdFZpZXdQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5maXJzdE51bWJlcn0gKyB7dGhpcy5wcm9wcy5zZWNvbmROdW1iZXJ9ID0ge3RoaXMucHJvcHMuc3VtbWFyeX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBTdW1tYXJ5UmVzdWx0VmlldyBhcyBkZWZhdWx0LFxuICAgIFN1bW1hcnlSZXN1bHRWaWV3UHJvcHMsXG4gICAgU3VtbWFyeVJlc3VsdFZpZXdTdGF0ZSxcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUFBOztBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/pages/dummy/summaryResultView.tsx\n");

/***/ }),

/***/ "./src/app/pages/home/homeContainer.tsx":
/*!**********************************************!*\
  !*** ./src/app/pages/home/homeContainer.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar HomeContainer = (function (_super) {\n    __extends(HomeContainer, _super);\n    function HomeContainer(props, context) {\n        return _super.call(this, props) || this;\n    }\n    HomeContainer.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            React.createElement(\"h1\", { className: \"title\" }, \"Home\"),\n            \"...and there is a dummy content\"));\n    };\n    return HomeContainer;\n}(React.Component));\nexports.default = HomeContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZUNvbnRhaW5lci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZUNvbnRhaW5lci50c3g/YTJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBIb21lQ29udGFpbmVyUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSG9tZUNvbnRhaW5lclN0YXRlIHtcbn1cblxuY2xhc3MgSG9tZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIb21lQ29udGFpbmVyUHJvcHMsIEhvbWVDb250YWluZXJTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBIb21lQ29udGFpbmVyUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SG9tZTwvaDE+XG5cbiAgICAgICAgICAgICAgICAuLi5hbmQgdGhlcmUgaXMgYSBkdW1teSBjb250ZW50XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgSG9tZUNvbnRhaW5lciBhcyBkZWZhdWx0LFxuICAgIEhvbWVDb250YWluZXJQcm9wcyxcbiAgICBIb21lQ29udGFpbmVyU3RhdGUsXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/pages/home/homeContainer.tsx\n");

/***/ }),

/***/ "./src/app/pages/notFound/notFoundContainer.tsx":
/*!******************************************************!*\
  !*** ./src/app/pages/notFound/notFoundContainer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar NotFoundContainer = (function (_super) {\n    __extends(NotFoundContainer, _super);\n    function NotFoundContainer(props, context) {\n        return _super.call(this, props, context) || this;\n    }\n    NotFoundContainer.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            React.createElement(\"h1\", { className: \"title\" }, \"Not Found\"),\n            \"Page not found\"));\n    };\n    return NotFoundContainer;\n}(React.Component));\nexports.default = NotFoundContainer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL25vdEZvdW5kL25vdEZvdW5kQ29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbm90Rm91bmQvbm90Rm91bmRDb250YWluZXIudHN4PzFiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgTm90Rm91bmRDb250YWluZXJQcm9wcyB7XG59XG5cbmludGVyZmFjZSBOb3RGb3VuZENvbnRhaW5lclN0YXRlIHtcbn1cblxuY2xhc3MgTm90Rm91bmRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Tm90Rm91bmRDb250YWluZXJQcm9wcywgTm90Rm91bmRDb250YWluZXJTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOb3RGb3VuZENvbnRhaW5lclByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPk5vdCBGb3VuZDwvaDE+XG5cbiAgICAgICAgICAgICAgICBQYWdlIG5vdCBmb3VuZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIE5vdEZvdW5kQ29udGFpbmVyIGFzIGRlZmF1bHQsXG4gICAgTm90Rm91bmRDb250YWluZXJQcm9wcyxcbiAgICBOb3RGb3VuZENvbnRhaW5lclN0YXRlLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFHQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/pages/notFound/notFoundContainer.tsx\n");

/***/ }),

/***/ "./src/app/pages/shared/errorView.tsx":
/*!********************************************!*\
  !*** ./src/app/pages/shared/errorView.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ErrorView = (function (_super) {\n    __extends(ErrorView, _super);\n    function ErrorView(props, context) {\n        return _super.call(this, props, context) || this;\n    }\n    ErrorView.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            \"Error: \",\n            this.props.message));\n    };\n    return ErrorView;\n}(React.Component));\nexports.default = ErrorView;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL3NoYXJlZC9lcnJvclZpZXcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9zaGFyZWQvZXJyb3JWaWV3LnRzeD8xZjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEVycm9yVmlld1Byb3BzIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBFcnJvclZpZXdTdGF0ZSB7XG59XG5cbmNsYXNzIEVycm9yVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFcnJvclZpZXdQcm9wcywgRXJyb3JWaWV3U3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRXJyb3JWaWV3UHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+RXJyb3I6IHt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIEVycm9yVmlldyBhcyBkZWZhdWx0LFxuICAgIEVycm9yVmlld1Byb3BzLFxuICAgIEVycm9yVmlld1N0YXRlLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/pages/shared/errorView.tsx\n");

/***/ }),

/***/ "./src/app/pages/shared/loadingView.tsx":
/*!**********************************************!*\
  !*** ./src/app/pages/shared/loadingView.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar LoadingView = (function (_super) {\n    __extends(LoadingView, _super);\n    function LoadingView(props, context) {\n        return _super.call(this, props, context) || this;\n    }\n    LoadingView.prototype.render = function () {\n        return (React.createElement(\"div\", null, \"Loading...\"));\n    };\n    return LoadingView;\n}(React.Component));\nexports.default = LoadingView;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3BhZ2VzL3NoYXJlZC9sb2FkaW5nVmlldy50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3NoYXJlZC9sb2FkaW5nVmlldy50c3g/NTRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBMb2FkaW5nVmlld1Byb3BzIHtcbn1cblxuaW50ZXJmYWNlIExvYWRpbmdWaWV3U3RhdGUge1xufVxuXG5jbGFzcyBMb2FkaW5nVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2FkaW5nVmlld1Byb3BzLCBMb2FkaW5nVmlld1N0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IExvYWRpbmdWaWV3UHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBMb2FkaW5nVmlldyBhcyBkZWZhdWx0LFxuICAgIExvYWRpbmdWaWV3UHJvcHMsXG4gICAgTG9hZGluZ1ZpZXdTdGF0ZSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFHQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/pages/shared/loadingView.tsx\n");

/***/ }),

/***/ "./src/startup.ts":
/*!************************!*\
  !*** ./src/startup.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar appContainer_1 = __webpack_require__(/*! ./app/appContainer */ \"./src/app/appContainer.tsx\");\nvar appMapping = {\n    '/': appContainer_1.default,\n};\nexports.default = appMapping;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhcnR1cC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFydHVwLnRzPzRiNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2FwcC9hcHBDb250YWluZXInO1xuXG5jb25zdCBhcHBNYXBwaW5nID0ge1xuICAgICcvJzogQXBwQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IHtcbiAgICBhcHBNYXBwaW5nIGFzIGRlZmF1bHQsXG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/startup.ts\n");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./core/src/index.browser.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./core/src/index.browser.tsx */"./core/src/index.browser.tsx");


/***/ })

/******/ });