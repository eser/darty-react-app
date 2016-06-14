"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Constants = require('../Constants');
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
