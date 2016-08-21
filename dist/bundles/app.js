webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var AppModel_ts_1 = __webpack_require__(172);
	var AppComponent_tsx_1 = __webpack_require__(173);
	var model = new AppModel_ts_1.AppModel();
	ReactDOM.render(React.createElement(AppComponent_tsx_1.AppComponent, {model: model}), document.getElementsByTagName('app')[0]);


/***/ },

/***/ 172:
/***/ function(module, exports) {

	"use strict";
	var AppModel = (function () {
	    function AppModel() {
	    }
	    return AppModel;
	}());
	exports.AppModel = AppModel;


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Constants = __webpack_require__(174);
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

/***/ 174:
/***/ function(module, exports) {

	"use strict";
	exports.APP_STATE_INITIAL = 'initial';


/***/ }

});
//# sourceMappingURL=app.js.map