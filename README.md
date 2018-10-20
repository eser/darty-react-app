# [Dart App](https://github.com/eserozvataf/dart-app)

Dart App is a front-end development template for [Dart](https://github.com/eserozvataf/dart).

* Source: [https://github.com/eserozvataf/dart-app](https://github.com/eserozvataf/dart-app)
* Preview: [http://dart-app.s3-website-eu-west-1.amazonaws.com](http://dart-app.s3-website-eu-west-1.amazonaws.com)


## Features (inherited from Dart)

* Transforms ES2015+Typescript files with .ts/.tsx extension into browser-compatible JavaScript code.
* Module bundling with webpack to pack everything into modules.
* SASS compilation of .scss files.
* CSS Modules.
* Minification for stylesheets and scripts.
* Hot module reloading and continuous development environment.
* Isomorphic/Universal codebase between server and client.
* IntelliSense support on TypeScript.
* React DevTools support.
* Redux-enabled with thunk and logger middlewares.
* Unit-testing-ready environment.
* JavaScript and TypeScript linting.
* Containerization-ready for continuous integration/deployment environments.


## Architecture and Libraries

* React for rendering components.
* React Router for SPA routing.
* Redux for state management.
* bulma and Font-Awesome are included.
* Jest for tests, ESLint for linting.
* Webpack bundling with code splitting enabled.
* express for server-side rendering.


## Quick start

Clone the git repo `git clone
   https://github.com/eserozvataf/dart-app.git` - and checkout the [tagged
   release](https://github.com/eserozvataf/dart-app/releases) you'd like to
   use.

Execute `npm install` to install dependencies for development environment.


## NPM Tasks

Ensure that `node.js` is installed on your system first.
```bash
$ node --version
```

Use `npm run <task>` command in project folder to execute tasks defined in `package.json`.

| Task                     | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `init`                   | Initializes codebase.                                                                  |
| `bundle`                 | Builds the project, generates required files for clients                               |
| `bundle:prod`            | Builds the project, generates required files for clients (production)                  |
| `bundleServer`           | Builds the project, generates required files for SSR                                   |
| `bundleServer:prod`      | Builds the project, generates required files for SSR (production)                      |
| `start`                  | Starts SSR-enabled express server                                                      |
| `dev`                    | Enables live development environment powered by hot module reloading                   |
| `lint`                   | Executes linter to check codebase against linting errors                               |
| `test`                   | Runs tests to check codebase against unit testing scenerios                            |
| `containerize`           | Build and runs container image for docker                                              |


## Directory Structure

| Path.                                              | Description                                                  |
|----------------------------------------------------|--------------------------------------------------------------|
| `/src/`                                            | The folder for your source files                             |
| `/src/app/`                                        | Main Application                                             |
| `/src/app/actions/`                                | - Actions (coded UI actions for redux)                       |
| `/src/app/assets/`                                 | - Assets (images, fonts, stylesheets, etc.)                  |
| `/src/app/layouts/`                                | - Layouts / Templates                                        |
| `/src/app/pages/`                                  | - Pages                                                      |
| `/src/app/reducers/`                               | - Reducers (coded state logic for redux)                     |
| `/src/app/appContainer.tsx`                        | - Main application router                                    |
| `/src/app/appStore.tsx`                            | - Main application store for redux state management          |
| `/src/startup.ts`                                  | The list and configuration of your mapped applications       |
| `/public/`                                         | The folder for your static files will be on your webroot     |


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/dart-app/projects) for more.


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
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/dart-app/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)
