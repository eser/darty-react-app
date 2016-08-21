var vendor =
webpackJsonpvendor([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var react_router_1 = __webpack_require__(172);
	var AppModel_ts_1 = __webpack_require__(235);
	var App_tsx_1 = __webpack_require__(237);
	var Home_tsx_1 = __webpack_require__(238);
	var EntriesByCategory_tsx_1 = __webpack_require__(239);
	var EntriesByTag_tsx_1 = __webpack_require__(241);
	var Page_tsx_1 = __webpack_require__(242);
	var model = new AppModel_ts_1.AppModel();
	ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: App_tsx_1.App}, React.createElement(react_router_1.IndexRoute, {component: Home_tsx_1.Home}), React.createElement(react_router_1.Route, {path: "category/:key/:value", component: EntriesByCategory_tsx_1.EntriesByCategory}), React.createElement(react_router_1.Route, {path: "tag/:tag", component: EntriesByTag_tsx_1.EntriesByTag}), React.createElement(react_router_1.Route, {path: "page/:page", component: Page_tsx_1.Page}))), document.getElementsByTagName('app')[0]);


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Constants = __webpack_require__(236);
	var AppModel = (function () {
	    function AppModel() {
	    }
	    AppModel.prototype.processTimelineData = function (data) {
	        var output = {};
	        for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
	            var entry = _a[_i];
	            if (output[entry.categories.year] === undefined) {
	                output[entry.categories.year] = { _items: [] };
	            }
	            if (entry.categories.event === undefined) {
	                output[entry.categories.year]._items.push(entry);
	                continue;
	            }
	            if (output[entry.categories.year][entry.categories.event] === undefined) {
	                output[entry.categories.year][entry.categories.event] = { _items: [] };
	            }
	            output[entry.categories.year][entry.categories.event]._items.push(entry);
	        }
	        return output;
	    };
	    AppModel.prototype.processTimelineEntryContent = function (content) {
	    };
	    AppModel.prototype.getEntriesByCategory = function (key, value) {
	        var _this = this;
	        return fetch(Constants.SERVICE_BASE_URL + "/entries/category/" + key + "/" + value + ".json")
	            .then(function (response) { return response.json(); })
	            .then(function (response) { return _this.processTimelineData(response); });
	    };
	    AppModel.prototype.getEntriesByTag = function (tag) {
	        var _this = this;
	        return fetch(Constants.SERVICE_BASE_URL + "/entries/tag/" + tag + ".json")
	            .then(function (response) { return response.json(); })
	            .then(function (response) { return _this.processTimelineData(response); });
	    };
	    return AppModel;
	}());
	exports.AppModel = AppModel;


/***/ },

/***/ 236:
/***/ function(module, exports) {

	"use strict";
	exports.SERVICE_BASE_URL = 'http://web.hexajans.com:3012';
	exports.APP_STATE_INITIAL = 'initial';


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var Constants = __webpack_require__(236);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App(props) {
	        _super.call(this, props);
	        this.state = {
	            caption: Constants.APP_STATE_INITIAL
	        };
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "ts-spa-boilerplate: ", this.state.caption)), React.createElement("ul", null, React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/", activeClassName: "active"}, "Home")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/category/era/Ortacag", activeClassName: "active"}, "Entries By Category")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/tag/Purifiers", activeClassName: "active"}, "Entries By Tag")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/page/X-Factor", activeClassName: "active"}, "Page"))), React.createElement("hr", null), this.props.children));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home(props) {
	        _super.call(this, props);
	    }
	    Home.prototype.render = function () {
	        return (React.createElement("div", null, "Home"));
	    };
	    return Home;
	}(React.Component));
	exports.Home = Home;


/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppModel_ts_1 = __webpack_require__(235);
	var TimelineOutput_tsx_1 = __webpack_require__(240);
	var EntriesByCategory = (function (_super) {
	    __extends(EntriesByCategory, _super);
	    function EntriesByCategory(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.state = {
	            timeline: null
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.model.getEntriesByCategory(this.props.params.key, this.props.params.value)
	            .then(function (response) { _this.setState({ timeline: response }); });
	    }
	    EntriesByCategory.prototype.render = function () {
	        return (React.createElement("div", null, "Entries By Category: ", this.props.params.key, "=", this.props.params.value, React.createElement(TimelineOutput_tsx_1.TimelineOutput, {input: this.state.timeline})));
	    };
	    return EntriesByCategory;
	}(React.Component));
	exports.EntriesByCategory = EntriesByCategory;


/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TimelineOutput = (function (_super) {
	    __extends(TimelineOutput, _super);
	    function TimelineOutput(props) {
	        _super.call(this, props);
	    }
	    TimelineOutput.prototype.render = function () {
	        var data = this.props.input;
	        if (data === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        console.log(this.props.input);
	        var output = [];
	        for (var year in data) {
	            output.push(React.createElement("h3", null, year));
	            for (var event_1 in data[year]) {
	                if (event_1 === '_items') {
	                    continue;
	                }
	                output.push(React.createElement("h4", null, event_1));
	                output.push(React.createElement("ul", null, data[year][event_1]._items.map(function (item) { return React.createElement("li", null, item.content); })));
	            }
	            output.push(React.createElement("ul", null, data[year]._items.map(function (item) { return React.createElement("li", null, item.content); })));
	        }
	        return (React.createElement("div", null, output));
	    };
	    return TimelineOutput;
	}(React.Component));
	exports.TimelineOutput = TimelineOutput;


/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppModel_ts_1 = __webpack_require__(235);
	var TimelineOutput_tsx_1 = __webpack_require__(240);
	var EntriesByTag = (function (_super) {
	    __extends(EntriesByTag, _super);
	    function EntriesByTag(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.state = {
	            timeline: null
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.model.getEntriesByTag(this.props.params.tag)
	            .then(function (response) { _this.setState({ timeline: response }); });
	    }
	    EntriesByTag.prototype.render = function () {
	        return (React.createElement("div", null, "Entries By Tag: ", this.props.params.tag, React.createElement(TimelineOutput_tsx_1.TimelineOutput, {input: this.state.timeline})));
	    };
	    return EntriesByTag;
	}(React.Component));
	exports.EntriesByTag = EntriesByTag;


/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Page = (function (_super) {
	    __extends(Page, _super);
	    function Page(props) {
	        _super.call(this, props);
	    }
	    Page.prototype.render = function () {
	        return (React.createElement("div", null, "Page: ", this.props.params.page));
	    };
	    return Page;
	}(React.Component));
	exports.Page = Page;


/***/ }

});
//# sourceMappingURL=app.js.map