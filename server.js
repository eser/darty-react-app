/* eslint-env node */
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

const bundler = webpack(webpackConfig);
const app = express();

console.log('Enabling Webpack dev middleware.');
app.use(webpackDevMiddleware(bundler, {
    noInfo: true,
    lazy: false,
    stats: Object.assign(
        {},
        webpackConfig.stats,
        {
            assets: false,
            chunks: false,
            modules: false,
        },
    ),
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
}));

console.log('Enabling Webpack Hot Module Replacement (HMR).');
app.use(webpackHotMiddleware(bundler));

const hostname = 'localhost';
const port = parseInt(process.env.PORT, 10);

app.listen(port, hostname, (err) => {
    if (err) {
        console.log(err);

        return;
    }

    console.log(`Server is now running at http://${hostname}:${port}.`);
});

app.use(
    express.static(
        path.join(__dirname, 'dist'),
        {
            index: 'index.html',
        },
    ),
);

app.use((req, res) => {
    // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;

    // res.send(
    //     appStack.renderToString(req.originalUrl)
    // );

    res.send(`path not found - ${req.originalUrl}`);
});
