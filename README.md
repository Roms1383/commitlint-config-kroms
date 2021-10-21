# commitlint-config-kroms

[![Latest Release](https://badgen.net/npm/v/commitlint-config-kroms)](https://www.npmjs.com/package/commitlint-config-kroms) [![License](https://badgen.net/badge/license/MIT/blue)](LICENSE) [![Build Status](https://travis-ci.org/Roms1383/commitlint-config-kroms.svg?branch=master)](https://travis-ci.org/Roms1383/commitlint-config-kroms) [![Renovate](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg)](https://renovatebot.com) [![Dependencies](https://david-dm.org/Roms1383/commitlint-config-kroms.svg)](https://david-dm.org/) [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://github.com/carloscuesta/gitmoji)

Custom preset for commitlint

*****

Learn about commitlint [here](https://github.com/conventional-changelog/commitlint).

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

Add a `.commitlintrc.yml` at the root of your project with :
```yml
extends:
  - kroms
```

More informations available [here](https://github.com/conventional-changelog/commitlint).

## Update

This package's emojis list (based on [gitmoji](https://gitmoji.carloscuesta.me)) can be updated easily by calling :
```sh
yarn generate
```

*****

_Romain KELIFA - MIT - 2019-2021_
