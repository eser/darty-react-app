const express = require('express'),
    path = require('path'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js'),
    bundler = webpack(webpackConfig);

const app = express();

console.log('Enabling Webpack dev middleware.');
app.use(webpackDevMiddleware(bundler, {
    lazy: false,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    stats: webpackConfig.compiler.stats
}));

console.log('Enabling Webpack Hot Module Replacement (HMR).');
app.use(webpackHotMiddleware(bundler));

const hostname = 'localhost',
    port = 3000;

app.listen(port, hostname, (err) => {
    if (err) {
        console.log(err);

        return;
    }

    console.log(`Server is now running at http://${hostname}:${port}.`);
});

app.use(express.static(__dirname, {
    index: 'dev/index.html'
}));

app.get('*', (req, res) => {
    res.json('still in testing');
});
