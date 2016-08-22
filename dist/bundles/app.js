var vendor =
webpackJsonpvendor([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var react_router_1 = __webpack_require__(172);
	var App_tsx_1 = __webpack_require__(235);
	var Home_tsx_1 = __webpack_require__(237);
	var EntriesByCategory_tsx_1 = __webpack_require__(238);
	var EntriesByTag_tsx_1 = __webpack_require__(242);
	var Pages_tsx_1 = __webpack_require__(243);
	var PageByName_tsx_1 = __webpack_require__(245);
	ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: App_tsx_1.App}, React.createElement(react_router_1.IndexRoute, {component: Home_tsx_1.Home}), React.createElement(react_router_1.Route, {path: "categories/:key/:value", component: EntriesByCategory_tsx_1.EntriesByCategory}), React.createElement(react_router_1.Route, {path: "tags/:tag", component: EntriesByTag_tsx_1.EntriesByTag}), React.createElement(react_router_1.Route, {path: "pages", component: Pages_tsx_1.Pages}), React.createElement(react_router_1.Route, {path: "pages/:name", component: PageByName_tsx_1.PageByName}))), document.getElementsByTagName('app')[0]);


/***/ },

/***/ 235:
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
	        return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "ts-spa-boilerplate: ", this.state.caption)), React.createElement("ul", null, React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/", activeClassName: "active"}, "Home")), React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/pages", activeClassName: "active"}, "Pages"))), React.createElement("hr", null), this.props.children));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


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

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppModel_ts_1 = __webpack_require__(239);
	var LinearTimeline_tsx_1 = __webpack_require__(240);
	var EntriesByCategory = (function (_super) {
	    __extends(EntriesByCategory, _super);
	    function EntriesByCategory(props) {
	        _super.call(this, props);
	        this.state = {
	            datasource: null,
	            error: false
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateDatasource(this.props.params.key, this.props.params.value);
	    }
	    EntriesByCategory.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateDatasource(nextProps.params.key, nextProps.params.value);
	    };
	    EntriesByCategory.prototype.render = function () {
	        if (this.state.error) {
	            return (React.createElement("div", null, "An error occurred"));
	        }
	        if (this.state.datasource === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        return (React.createElement("div", null, "Entries By Category: ", this.props.params.key, "=", this.props.params.value, React.createElement(LinearTimeline_tsx_1.LinearTimeline, {datasource: this.state.datasource, datakey: "entries"})));
	    };
	    EntriesByCategory.prototype.updateDatasource = function (key, value) {
	        var _this = this;
	        this.model.getEntriesByCategory(key, value)
	            .then(function (response) { _this.setState({ datasource: response, error: false }); })
	            .catch(function (err) { _this.setState({ error: true }); });
	    };
	    return EntriesByCategory;
	}(React.Component));
	exports.EntriesByCategory = EntriesByCategory;


/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Constants = __webpack_require__(236);
	var AppModel = (function () {
	    function AppModel() {
	    }
	    AppModel.prototype.processTimelineData = function (data) {
	        var output = {};
	        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	            var entry = data_1[_i];
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
	        return fetch(Constants.SERVICE_BASE_URL + "/entries/categories/" + key + "/" + value + ".json")
	            .then(function (response) { return response.json(); })
	            .then(function (response) {
	            response.entries = _this.processTimelineData(response.entries);
	            return response;
	        });
	    };
	    AppModel.prototype.getEntriesByTag = function (tag) {
	        var _this = this;
	        return fetch(Constants.SERVICE_BASE_URL + "/entries/tags/" + tag + ".json")
	            .then(function (response) { return response.json(); })
	            .then(function (response) {
	            response.entries = _this.processTimelineData(response.entries);
	            return response;
	        });
	    };
	    AppModel.prototype.getPages = function () {
	        return fetch(Constants.SERVICE_BASE_URL + "/pages/index.json")
	            .then(function (response) { return response.json(); });
	    };
	    AppModel.prototype.getPageByName = function (name) {
	        var _this = this;
	        return fetch(Constants.SERVICE_BASE_URL + "/pages/names/" + name + ".json")
	            .then(function (response) { return response.json(); })
	            .then(function (response) {
	            response.entries = _this.processTimelineData(response.entries);
	            return response;
	        });
	    };
	    return AppModel;
	}());
	exports.AppModel = AppModel;


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
	        var data = this.props.datasource[this.props.datakey];
	        var output = [];
	        var _loop_1 = function(year) {
	            var yearKey = "year." + encodeURIComponent(year);
	            output.push(React.createElement("h3", {key: yearKey + ".caption"}, React.createElement(react_router_1.Link, {key: yearKey + ".link", to: "/categories/year/" + encodeURIComponent(year)}, year)));
	            output.push(React.createElement("ul", {key: yearKey + ".list"}, Object.keys(data[year]).forEach(function (event) {
	                if (event === '_items') {
	                    return;
	                }
	                var eventKey = "year." + year + ".event." + encodeURIComponent(event);
	                output.push(React.createElement("li", {key: eventKey}, React.createElement("h4", {key: eventKey + ".caption"}, React.createElement(react_router_1.Link, {key: eventKey + ".caption.link", to: "/categories/event/" + encodeURIComponent(event)}, event)), React.createElement("ul", {key: eventKey + ".list"}, data[year][event]._items.map(function (item) {
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
	            var link = content.substring(pos + 2, endPos);
	            parts.push(React.createElement(react_router_1.Link, {key: key + ".link." + pos, to: "/pages/" + encodeURIComponent(link)}, link));
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
	var AppModel_ts_1 = __webpack_require__(239);
	var LinearTimeline_tsx_1 = __webpack_require__(240);
	var EntriesByTag = (function (_super) {
	    __extends(EntriesByTag, _super);
	    function EntriesByTag(props) {
	        _super.call(this, props);
	        this.state = {
	            datasource: null,
	            error: false
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateDatasource(this.props.params.tag);
	    }
	    EntriesByTag.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateDatasource(nextProps.params.tag);
	    };
	    EntriesByTag.prototype.render = function () {
	        if (this.state.error) {
	            return (React.createElement("div", null, "An error occurred"));
	        }
	        if (this.state.datasource === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        return (React.createElement("div", null, "Entries By Tag: ", this.props.params.tag, React.createElement(LinearTimeline_tsx_1.LinearTimeline, {datasource: this.state.datasource, datakey: "entries"})));
	    };
	    EntriesByTag.prototype.updateDatasource = function (tag) {
	        var _this = this;
	        this.model.getEntriesByTag(tag)
	            .then(function (response) { _this.setState({ datasource: response, error: false }); })
	            .catch(function (err) { _this.setState({ error: true }); });
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
	var AppModel_ts_1 = __webpack_require__(239);
	var PageList_tsx_1 = __webpack_require__(244);
	var Pages = (function (_super) {
	    __extends(Pages, _super);
	    function Pages(props) {
	        _super.call(this, props);
	        this.state = {
	            datasource: null,
	            error: false
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateDatasource();
	    }
	    Pages.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateDatasource();
	    };
	    Pages.prototype.render = function () {
	        if (this.state.error) {
	            return (React.createElement("div", null, "An error occurred"));
	        }
	        if (this.state.datasource === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        return (React.createElement("div", null, "Pages", React.createElement(PageList_tsx_1.PageList, {datasource: this.state.datasource, datakey: "pages"})));
	    };
	    Pages.prototype.updateDatasource = function () {
	        var _this = this;
	        this.model.getPages()
	            .then(function (response) { _this.setState({ datasource: response, error: false }); })
	            .catch(function (err) { _this.setState({ error: true }); });
	    };
	    return Pages;
	}(React.Component));
	exports.Pages = Pages;


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var PageList = (function (_super) {
	    __extends(PageList, _super);
	    function PageList(props) {
	        _super.call(this, props);
	    }
	    PageList.prototype.render = function () {
	        var data = this.props.datasource[this.props.datakey];
	        return (React.createElement("ul", null, data.map(function (page) {
	            var pageKey = "page." + encodeURIComponent(page.name);
	            return React.createElement("li", {key: "" + pageKey}, React.createElement(react_router_1.Link, {key: pageKey + ".link", to: "/pages/" + encodeURIComponent(page.name)}, page.name));
	        })));
	    };
	    return PageList;
	}(React.Component));
	exports.PageList = PageList;


/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppModel_ts_1 = __webpack_require__(239);
	var PageContent_tsx_1 = __webpack_require__(246);
	var LinearTimeline_tsx_1 = __webpack_require__(240);
	var PageByName = (function (_super) {
	    __extends(PageByName, _super);
	    function PageByName(props) {
	        _super.call(this, props);
	        this.state = {
	            datasource: null,
	            error: false
	        };
	        this.model = new AppModel_ts_1.AppModel();
	        this.updateDatasource(this.props.params.name);
	    }
	    PageByName.prototype.componentWillReceiveProps = function (nextProps) {
	        this.updateDatasource(nextProps.params.name);
	    };
	    PageByName.prototype.render = function () {
	        if (this.state.error) {
	            return (React.createElement("div", null, "An error occurred"));
	        }
	        if (this.state.datasource === null) {
	            return (React.createElement("div", null, "Loading..."));
	        }
	        return (React.createElement("div", null, "Page: ", this.props.params.name, React.createElement(PageContent_tsx_1.PageContent, {datasource: this.state.datasource, datakey: "page"}), "History:", React.createElement(LinearTimeline_tsx_1.LinearTimeline, {datasource: this.state.datasource, datakey: "entries"})));
	    };
	    PageByName.prototype.updateDatasource = function (name) {
	        var _this = this;
	        this.model.getPageByName(name)
	            .then(function (response) { _this.setState({ datasource: response, error: false }); })
	            .catch(function (err) { _this.setState({ error: true }); });
	    };
	    return PageByName;
	}(React.Component));
	exports.PageByName = PageByName;


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PageContent = (function (_super) {
	    __extends(PageContent, _super);
	    function PageContent(props) {
	        _super.call(this, props);
	    }
	    PageContent.prototype.render = function () {
	        var data = this.props.datasource[this.props.datakey];
	        return (React.createElement("div", null, data.content));
	    };
	    return PageContent;
	}(React.Component));
	exports.PageContent = PageContent;


/***/ }

});
//# sourceMappingURL=app.js.map