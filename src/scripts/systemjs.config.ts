/**
 * System configuration for Snippet Desk Client
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    let map = {
        'app':                        'dist/scripts/app',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    let packages = {
        'app':                        { main: 'index.js', defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    let ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });

    let config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
