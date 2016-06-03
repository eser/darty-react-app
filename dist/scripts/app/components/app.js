"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var constants = require('../constants');
var appComponent = (function (_super) {
    __extends(appComponent, _super);
    function appComponent(props) {
        _super.call(this, props);
        this.state = {
            nowShowing: constants.APP_STATE_INITIAL
        };
    }
    appComponent.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "ts-spa-boilerplate"))));
    };
    return appComponent;
}(React.Component));
exports.appComponent = appComponent;
