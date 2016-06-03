"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var appModel_1 = require('./models/appModel');
var appComponent_1 = require('./components/appComponent');
var model = new appModel_1.appModel();
ReactDOM.render(React.createElement("appComponent_1.appComponent", {model: model}), document.getElementsByTagName('app')[0]);
console.log(appComponent_1.appComponent);
