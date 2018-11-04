# 🎯 [Darty React App](https://github.com/eserozvataf/darty-react-app)

Darty is a front-end development system to allow developers to start their projects immediately. By Darty's convention over configuration mindset, webpack and typescript compiler configurations are handled by darty's itself.

Darty React App is a front-end development template for [Darty](https://github.com/eserozvataf/darty).

* Source: [https://github.com/eserozvataf/darty-react-app](https://github.com/eserozvataf/darty-react-app)
* Preview: [http://darty-react-app.s3-website-eu-west-1.amazonaws.com](http://darty-react-app.s3-website-eu-west-1.amazonaws.com)


## Features (inherited from Darty)

* Transforms ES2015+Typescript files with .ts/.tsx extension into browser-compatible JavaScript code.
* Module bundling for packing everything into modules with their sourcemaps.
* Dynamic code splitting.
* SASS compilation of .scss files.
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

* React for rendering UI components, with DevTools support.
* React Router for SPA routing.
* Redux for state management, with thunk and logger middlewares.
* bulma and Font-Awesome are included.
* Jest and Enzyme for tests, ESLint for linting.
* Webpack module bundling.
* express for server-side rendering.


## Quick start

Ensure that `node.js` is installed on your system first.

### Alternative 1
Use the following command to create app with [create-darty-app](https://github.com/eserozvataf/create-darty-app):

```sh
npx create-darty-app react app
cd app
npm run dev
```

### Alternative 2
Clone the git repo and execute install dependencies from npm to get ready:

```sh
git clone --branch=master https://github.com/eserozvataf/darty-react-app.git app
cd app
npm install
npm run dev
```

## NPM Tasks

Use `npm run <task>` command in project folder to execute tasks defined in `package.json`.

| Task                     | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `bundle`                 | Builds the project, generates required files                                           |
| `bundle:prod`            | Builds the project, generates required files (production)                              |
| `start`                  | Starts SSR-enabled express server                                                      |
| `dev`                    | Enables live development environment powered by hot module reloading                   |
| `lint`                   | Executes linter to check codebase against linting errors                               |
| `test`                   | Runs tests to check codebase against unit testing scenerios                            |
| `containerize`           | Creates containerization files and gives instructions for docker                       |


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
| `/src/index.html`                                  | The index file                                               |
| `/public/`                                         | The folder for your static files will be on your webroot     |


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
