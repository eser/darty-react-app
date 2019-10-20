# 🎯 [Darty React App](https://github.com/eserozvataf/darty-react-app)

[![build status][build-image]][build-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]

## README

Darty is a front-end development system to allow developers to start their projects immediately. By Darty's convention over configuration mindset, webpack and typescript compiler configurations are handled by darty's itself.

Darty React App is a front-end development template for [Darty](https://github.com/eserozvataf/darty).

* Source: [https://github.com/eserozvataf/darty-react-app](https://github.com/eserozvataf/darty-react-app)
* Preview: [https://dartyreactapp.herokuapp.com/](https://dartyreactapp.herokuapp.com/)


## Features (inherited from Darty)

* Transforms ES2015+Typescript files with .ts/.tsx extension into browser-compatible JavaScript code.
* Module bundling for packing everything into modules with their sourcemaps.
* Dynamic code splitting.
* SASS/LESS compilation of .scss, .sass and .less files.
* CSS Modules.
* Minification for stylesheets and scripts.
* Hot module reloading and continuous development environment.
* Isomorphic/Universal codebase between server and client.
* Server-side rendering.
* IntelliSense support on TypeScript.
* Unit-testing setup and TDD-ready environment.
* JavaScript and TypeScript linting.
* Autoprefixed CSS to avoid adding vendor prefixes.
* Containerization-ready for continuous integration/deployment environments.


## Architecture and Libraries

* React with Hooks for rendering UI components, with DevTools support.
* React Router for SPA routing.
* Semantic UI and Font-Awesome are included.
* Jest and Enzyme for tests, ESLint for linting.
* Webpack module bundling.
* express for server-side rendering.


## Quick start

Ensure that `node.js` is installed on your system first.

### Alternative 1
- Use the GitHub template on [https://github.com/eserozvataf/darty-react-app/generate](https://github.com/eserozvataf/darty-react-app/generate).
- Clone your generated repository afterwards.
- Finally, use the following commands:

```sh
yarn install
yarn dev
```

### Alternative 2
Use the following command to create app with [create-darty-app](https://github.com/eserozvataf/create-darty-app):

```sh
yarn create darty-app react app
cd app
yarn dev
```

### Alternative 3
Clone the git repo and execute install dependencies from npm to get ready:

```sh
git clone --branch=master https://github.com/eserozvataf/darty-react-app.git app
cd app
yarn install
yarn dev
```

## NPM Tasks

Use `yarn <task>` command in project folder to execute tasks defined in `package.json`.

| Task                     | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `bundle`                 | Builds the project, generates required files                                           |
| `bundle:prod`            | Builds the project, generates required files (production)                              |
| `start`                  | Starts SSR-enabled express server                                                      |
| `dev`                    | Enables live development environment powered by hot module reloading                   |
| `lint`                   | Executes linter to check codebase against linting errors                               |
| `lint:fix`               | Executes linter to check and *FIX* codebase against linting errors                     |
| `test`                   | Runs tests to check codebase against unit testing scenerios                            |
| `test:coverage`          | Runs tests with calculating coverage stats                                             |
| `containerize`           | Creates containerization files and gives instructions for docker                       |


## Directory Structure

| Path.                                           | Description                                                     |
|-------------------------------------------------|-----------------------------------------------------------------|
| `/src/`                                         | The folder for your source files                                |
| `/src/app/`                                     | Main Application                                                |
| `/src/app/assets/`                              | - Assets (images, fonts, stylesheets, etc.)                     |
| `/src/app/layouts/`                             | - Layouts / Templates                                           |
| `/src/app/pages/`                               | - Pages                                                         |
| `/src/app/appContainer.tsx`                     | - Main application router                                       |
| `/src/startup.ts`                               | The list and configuration of your mapped applications          |
| `/src/index.html`                               | The index file                                                  |
| `/public/`                                      | The folder for your static files will be on your webroot        |


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/darty-react-app/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## Notes and Credits

Uses [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/) for embedding webfonts.


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/darty-react-app/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)


[build-image]: https://github.com/eserozvataf/darty-react-app/workflows/CI/badge.svg
[build-url]: https://github.com/eserozvataf/darty-react-app/actions?workflow=CI
[dep-image]: https://img.shields.io/david/eserozvataf/darty-react-app.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/darty-react-app
[coverage-image]: https://img.shields.io/codecov/c/gh/eserozvataf/darty-react-app/master.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/darty-react-app
[license-image]: https://img.shields.io/github/license/eserozvataf/darty-react-app.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/darty-react-app/blob/master/LICENSE
