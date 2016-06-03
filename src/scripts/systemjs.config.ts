/// <reference path="../scripts.typings/browser/index.d.ts" />

/**
 * System configuration for TypeScript SPA Boilerplate
 * Adjust as necessary for your application needs.
 */
(function (global) {
    
    const config = {
        // map tells the System loader where to look for things
        map: {
            'app':                        'dist/scripts/app',
            'react':                      'node_modules/react/dist/react.js',
            'react-dom':                  'node_modules/react-dom/dist/react-dom.js'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app':                        { main: 'index.js', defaultExtension: 'js' }
        }
    };

    System.config(config);

})(this);
