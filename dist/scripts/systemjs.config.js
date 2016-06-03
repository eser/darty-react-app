(function (global) {
    var config = {
        map: {
            'app': 'dist/scripts/app',
            'react': 'node_modules/react/dist/react.js',
            'react-dom': 'node_modules/react-dom/dist/react-dom.js'
        },
        packages: {
            'app': { main: 'index.js', defaultExtension: 'js' }
        }
    };
    System.config(config);
})(this);
