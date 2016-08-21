const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        postload: [ 'jquery/dist/jquery.js', 'react/react.js', 'react-dom/index.js' ],
        app: './src/scripts/app/index.tsx'
    },
    output: {
        path: './dist/bundles/',
        filename: '[name].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    postcss: function () {
        return [ require('postcss-cssnext') ];
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js' ]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: 'ts-loader' },
            // All files with a '.css' extension will be handled by 'postcss-loader'.
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true })
    ],

    devServer : {
        inline : true,
        port : 3030
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
