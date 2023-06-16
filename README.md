# Who-NBA-Server

[![TypeScript version][ts-badge]][typescript-5-0]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

<img src="https://github.com/SDNA-Digital/Wiki-eagle-Server/blob/main/docs/img/jokic.gif" width="250" height="250"/>


👩🏻‍💻 Developer Ready: Hello dev! This project is a server that maintain the webservice from Who-NBA. Bellow we organize a simple presentation about the technologies presents at this project and how to setup your enviroment to start coding.

## 💻 About the project
This is a game for the top fans of NBA! Where you need to know who is the player by his blur photo, with some guesses.

## 🏃🏽 Technologies: All basic tools included and configured:

Dev enviroment:
- [Docker|DockerCompose](https://www.docker.com) Minimalist docker image generation.
- [Express](https://expressjs.com) Web framework for Node.js.
- [Jest][jest] for fast unit testing and code coverage. Type definitions for Node.js and Jest.
- [Nodemon](https://nodemon.io) Autimatic restarting of application.
- [Prisma](https://www.prisma.io) Node.js and TypeScript ORM.
- [TypeScript][typescript] [5.0][typescript-5-0].
- [Zod](https://zod.dev) TypeScript-first schema validation with static type inference.

Code editor:
- [ESM][esm].
- [ESLint][eslint] with some initial rules recommendation.
- [Prettier][prettier] to enforce consistent code style.
- NPM [scripts](#available-scripts) for common operations.
- [EditorConfig][editorconfig] for consistent coding style.

Others:
- CI configuration on [GitHub Actions][gh-actions].

## 🚀 Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/SDNA-Digital/Wiki-eagle-Server.git
cd wiki-server
npm install
```

### 🎲 Run the project

#### local

```sh
# activate the prisma on project
npx prisma generate

npm run dev
```
#### docker

```sh
# activate the prisma on project
npx prisma generate

make up
```


## Available Scripts

- `start` - start the build project,
- `dev` - run the dev enviroment,
- `build` - transpile TypeScript to ES6,
- `build:clean` - clean the non-usable folders and files,
- `clean` - remove coverage data, Jest cache and transpiled files,
- `lint` - lint source files and tests,
- `format` - reformat files,
- `format:check` - verify all the format files,
- `test` - run tests,
- `test:ci` - run CI tests,
- `prisma` - run prisma migrate,
- `db` - run database prisma visualizer.

## Additional Information


[ts-badge]: https://img.shields.io/badge/TypeScript-5.0-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2018.12-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v18.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-0]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#esm-nodejs
[editorconfig]: https://editorconfig.org
