# RSM Homework (Nasa API)

## Project Goal
Create a simple web page application that allows user to look at aerial photography of any location on Earth. Data has to come from an API (https://api.nasa.gov/api.html#earth ), it is free to use though you should obtain a key (https://api.nasa.gov/index.html#apply-for-an-api-key ).

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)

## Requirements
```bash
  npm i -g yarn
```

## Install dependencies
```bash
  yarn
```

## Development

```bash

# install commitizen (conventional commits)
npm i -g commitizen

# run prettier watcher (run in another terminal)
yarn format:watch

# add all changes to repository and create new commit
yarn commit

# configure project to create new commit
git cz
```

## Running the app

```bash

# run in dev mode on port 3000
yarn start:dev

# generate production build
yarn build

# run generated content in dist folder on port 3000
yarn start:prod
```

## Linting

```bash
# run linter
yarn lint

# fix lint issues
yarn lint:fix
```