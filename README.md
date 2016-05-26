# [TypeScript SPA Boilerplate](https://github.com/eserozvataf/ts-spa-boilerplate)

JS Boilerplate is a front-end development setup for starting with a structured,
scaleable and adaptable basecode.

This project is the product of many years of iterative development and combined
community knowledge. It does not impose a specific development philosophy or
framework, so you're free to architect your code in the way that you want.

* Source: [https://github.com/eserozvataf/ts-spa-boilerplate](https://github.com/eserozvataf/ts-spa-boilerplate)
* Twitter: [@eserozvataf](http://twitter.com/eserozvataf)
* Homepage: [http://eser.ozvataf.com/](http://eser.ozvataf.com/)


## Features

* Transforms ES2015 into browser-compatible Javascript code (with Babel).
* CommonJS implementation for modularity (with Browserify).
* LESS to CSS compilation.
* CSS and JavaScript minifier.
* JavaScript and CSS hinter and coding style checker.
* Unit-testing-ready environment.


## Quick start

Clone the git repo — `git clone
   https://github.com/eserozvataf/ts-spa-boilerplate.git` - and checkout the [tagged
   release](https://github.com/eserozvataf/ts-spa-boilerplate/releases) you'd like to
   use.

Execute `npm install` to install gulp taskmaster and its dependencies.


## Gulp Tasks

Use `gulp` command in project folder to execute tasks defined in `gulpfile.js`.


## Directory Structure

| Directory                | Description                                                                         |
|--------------------------|-------------------------------------------------------------------------------------|
| `/client/src/css/`       | CSS sources                                                                         |
| `/client/src/js/`        | Javascript sources                                                                  |
| `/client/src/less/`      | LESS sources                                                                        |
| `/client/src/tag/`       | riot.js tag files                                                                   |
| `/client/tests/`         | Test code for Jasmine                                                               |
| `/etc/config/`           | Config files                                                                        |
| `/etc/tasks/`            | Gulp tasks                                                                          |
| `/etc/utils/`            | Gulp utils                                                                          |
| `/client/build/reports/` | Generated build reports                                                             |
| `/client/build/temp/`    | Temporary files generated during compilation                                        |
| `/assets/scripts/`       | Output directory for javascripts (generated by babel, browserify and js processors) |
| `/assets/scripts/view/`  | Output directory for javascript views (generated by riot.js)                        |
| `/assets/styles/`        | Output directory for stylesheets (generated by less, css comb and css processors)   |


### Todo List

See [GitHub Issues](https://github.com/eserozvataf/ts-spa-boilerplate/issues).


### Requirements

* node.js (https://nodejs.org/)
* gulp (http://gulpjs.com)

## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using GitHub issues.
* To support: [![Donate](https://img.shields.io/gratipay/eserozvataf.svg)](https://gratipay.com/eserozvataf/)
