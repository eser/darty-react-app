"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var AppModel_1 = require('./models/AppModel');
var AppComponent_1 = require('./components/AppComponent');
var model = new AppModel_1.AppModel();
ReactDOM.render(React.createElement(AppComponent_1.AppComponent, {model: model}), document.getElementsByTagName('app')[0]);
