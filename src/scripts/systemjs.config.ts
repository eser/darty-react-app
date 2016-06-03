/**
 * System configuration for TypeScript SPA Boilerplate
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    let map = {
        'app':                        'dist/scripts/app'
        // 'rxjs':                       'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    let packages = {
        'app':                        { main: 'index.js', defaultExtension: 'js' }
    };

    let config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
