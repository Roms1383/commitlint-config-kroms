# commitlint-config-kroms

Custom preset for [commitlint](https://github.com/conventional-changelog/commitlint).

## Installation

If used as a dev dependency :

Yarn :
```sh
yarn add commitlint-config-kroms --dev
```

NPM :
```sh
npm install commitlint-config-kroms --save-dev
```

## Usage

Add a `.commitlintrc` at the root of your project with :
```json
{
  "extends": "commitlint-config-kroms"
}
```

More informations available [here](https://github.com/conventional-changelog/commitlint).

## Update

This package's emojis list (based on [gitmoji](https://gitmoji.carloscuesta.me)) can be updated easily by calling :
```sh
yarn generate
```