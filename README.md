# [TypeScript SPA Boilerplate](https://github.com/eserozvataf/ts-spa-boilerplate)

TypeScript SPA Boilerplate is a front-end development stack for starting with a structured, scaleable and adaptable basecode.

This project is the product of many years of iterative development and combined
community knowledge. It does not impose a specific development philosophy or
framework, so you're free to architect your code in the way that you want.

* Source: [https://github.com/eserozvataf/ts-spa-boilerplate](https://github.com/eserozvataf/ts-spa-boilerplate)
* Preview: [http://eserozvataf.github.io/ts-spa-boilerplate/](http://eserozvataf.github.io/ts-spa-boilerplate/)
* Twitter: [@eserozvataf](http://twitter.com/eserozvataf)
* Homepage: [http://eser.ozvataf.com/](http://eser.ozvataf.com/)


## Features

* Transforms ES2015+Typescript files with .ts/.tsx extension into browser-compatible JavaScript code.
* Module bundling with webpack to pack everything into modules.
* SASS compilation of .scss files.
* Minification for stylesheets and scripts.
* Hot module reloading and continuous development environment.
* Isomorphic/Universal codebase between server and client.
* IntelliSense support on TypeScript.
* React DevTools support.
* Unit-testing-ready environment.
* ~~JavaScript and CSS linting.~~ (not ready yet)


## Architecture and Libraries

* React for rendering components.
* React Router for SPA routing.
* ~~Redux~~ [react-eventmanager](https://github.com/eserozvataf/react-eventmanager) for state management.
* bulma and Font-Awesome are included.
* Jest for tests, ESLint for linting.


## Quick start

Clone the git repo `git clone
   https://github.com/eserozvataf/ts-spa-boilerplate.git` - and checkout the [tagged
   release](https://github.com/eserozvataf/ts-spa-boilerplate/releases) you'd like to
   use.

Execute `npm install` to install dependencies for development environment.


## Jsmake Tasks

Ensure that `jsmake` is installed on your system first. It can be installed by typing the command below on command line:

```bash
$ npm install jsmake -g
```

Use `jsmake` command in project folder to execute tasks defined in `makefile.js`.

| Task                     | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `build`                  | Builds the project                                                                     |
| `serve`                  | Enables live development environment powered by hot module reloading and browser-sync  |


## Directory Structure

| Directory                                          | Description                                                  |
|----------------------------------------------------|--------------------------------------------------------------|
| `/src/`                                            | Bootstrap                                                    |
| `/src/app/`                                        | Main Application                                             |
| `/src/app/assets/`                                 | - Assets (images, fonts, stylesheets, etc.)                  |
| `/src/app/layouts/`                                | - Layouts / Templates                                        |
| `/src/app/pages/`                                  | - Pages                                                      |


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/ts-spa-boilerplate/projects) for more.


## Requirements

* node.js (https://nodejs.org/)
* jsmake (https://github.com/eserozvataf/jsmake)


## Notes and Credits

Uses [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/) for embedding webfonts.


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/ts-spa-boilerplate/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)
