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
	var EntriesByTag_tsx_1 = __webpack_require__(242);
	var Page_tsx_1 = __webpack_require__(243);
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
	var LinearTimeline_tsx_1 = __webpack_require__(240);
	var EntriesByCategory = (function (_super) {
	    __extends(EntriesByCategory, _super);
	    function EntriesByCategory(props) {
	        _super.call(this, props);
	        this.state = {
	            timeline: null
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateTimeline(this.props.params.key, this.props.params.value);
	    }
	    EntriesByCategory.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateTimeline(nextProps.params.key, nextProps.params.value);
	    };
	    EntriesByCategory.prototype.render = function () {
	        return (React.createElement("div", null, "Entries By Category: ", this.props.params.key, "=", this.props.params.value, React.createElement(LinearTimeline_tsx_1.LinearTimeline, {input: this.state.timeline})));
	    };
	    EntriesByCategory.prototype.updateTimeline = function (key, value) {
	        var _this = this;
	        this.model.getEntriesByCategory(key, value)
	            .then(function (response) { _this.setState({ timeline: response }); });
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
	var react_router_1 = __webpack_require__(172);
	var LinearTimelineItem_tsx_1 = __webpack_require__(241);
	var LinearTimeline = (function (_super) {
	    __extends(LinearTimeline, _super);
	    function LinearTimeline(props) {
	        _super.call(this, props);
	    }
	    LinearTimeline.prototype.render = function () {
	        var data = this.props.input;
	        if (data === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        var output = [];
	        var _loop_1 = function(year) {
	            var yearKey = "year." + encodeURIComponent(year);
	            output.push(React.createElement("h3", {key: yearKey + ".caption"}, React.createElement(react_router_1.Link, {key: yearKey + ".link", to: "/category/year/" + encodeURIComponent(year)}, year)));
	            output.push(React.createElement("ul", {key: yearKey + ".list"}, Object.keys(data[year]).forEach(function (event) {
	                if (event === '_items') {
	                    return;
	                }
	                var eventKey = "year." + year + ".event." + encodeURIComponent(event);
	                output.push(React.createElement("li", {key: eventKey}, React.createElement("h4", {key: eventKey + ".caption"}, React.createElement(react_router_1.Link, {key: eventKey + ".caption.link", to: "/category/event/" + encodeURIComponent(event)}, event)), React.createElement("ul", {key: eventKey + ".list"}, data[year][event]._items.map(function (item) {
	                    var entryKey = "entry." + encodeURIComponent(item.entry);
	                    return (React.createElement("li", {key: entryKey}, React.createElement(LinearTimelineItem_tsx_1.LinearTimelineItem, {key: entryKey + ".item", item: item})));
	                }))));
	            }), data[year]._items.map(function (item) {
	                var entryKey = "entry." + encodeURIComponent(item.entry);
	                return (React.createElement("li", {key: entryKey}, React.createElement(LinearTimelineItem_tsx_1.LinearTimelineItem, {key: entryKey + ".item", id: entryKey + ".item", item: item})));
	            })));
	        };
	        for (var year in data) {
	            _loop_1(year);
	        }
	        return (React.createElement("div", null, output));
	    };
	    return LinearTimeline;
	}(React.Component));
	exports.LinearTimeline = LinearTimeline;


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
	var react_router_1 = __webpack_require__(172);
	var LinearTimelineItem = (function (_super) {
	    __extends(LinearTimelineItem, _super);
	    function LinearTimelineItem(props) {
	        _super.call(this, props);
	    }
	    LinearTimelineItem.prototype.makeLinks = function (key, content) {
	        var parts = [];
	        var lastIndex = 0;
	        while (true) {
	            var pos = content.indexOf('[[', lastIndex);
	            if (pos === -1) {
	                parts.push(content.substring(lastIndex, content.length));
	                break;
	            }
	            var endPos = content.indexOf(']]', pos + 2);
	            if (endPos === -1) {
	                parts.push(content.substring(lastIndex, content.length));
	                break;
	            }
	            parts.push(content.substring(lastIndex, pos));
	            var tag = content.substring(pos + 2, endPos);
	            parts.push(React.createElement(react_router_1.Link, {key: key + ".link." + pos, to: "/tag/" + encodeURIComponent(tag)}, tag));
	            lastIndex = endPos + 2;
	        }
	        return parts;
	    };
	    LinearTimelineItem.prototype.render = function () {
	        return (React.createElement("span", null, this.makeLinks(this.props.id, this.props.item.content)));
	    };
	    return LinearTimelineItem;
	}(React.Component));
	exports.LinearTimelineItem = LinearTimelineItem;


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
	var AppModel_ts_1 = __webpack_require__(235);
	var LinearTimeline_tsx_1 = __webpack_require__(240);
	var EntriesByTag = (function (_super) {
	    __extends(EntriesByTag, _super);
	    function EntriesByTag(props) {
	        _super.call(this, props);
	        this.state = {
	            timeline: null
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateTimeline(this.props.params.tag);
	    }
	    EntriesByTag.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateTimeline(nextProps.params.tag);
	    };
	    EntriesByTag.prototype.render = function () {
	        return (React.createElement("div", null, "Entries By Tag: ", this.props.params.tag, React.createElement(LinearTimeline_tsx_1.LinearTimeline, {input: this.state.timeline})));
	    };
	    EntriesByTag.prototype.updateTimeline = function (tag) {
	        var _this = this;
	        this.model.getEntriesByTag(tag)
	            .then(function (response) { _this.setState({ timeline: response }); });
	    };
	    return EntriesByTag;
	}(React.Component));
	exports.EntriesByTag = EntriesByTag;


/***/ },

/***/ 243:
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