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
    noInfo: true,
    lazy: false,
    stats: {
        assets: false,
        colors: true,
        chunks: false,
        modules: false
    },
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath
}));

console.log('Enabling Webpack Hot Module Replacement (HMR).');
app.use(webpackHotMiddleware(bundler));

const hostname = 'localhost',
    port = 8080;

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
            index: 'index.html'
        }
    )
);

app.use((req, res) => {
    // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;

    // res.send(
    //     appManager.renderToString(req.originalUrl)
    // );

    res.send(`path not found - ${req.originalUrl}`);
});
