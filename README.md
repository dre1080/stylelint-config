# stylelint-config

[![npm (scoped)](https://img.shields.io/npm/v/@dre1080/stylelint-config)](https://www.npmjs.org/package/@dre1080/stylelint-config)

> A sharable stylelint config object. Inspired by [stylelint-config-primer](https://github.com/primer/stylelint-config-primer).

## Install

Install [stylelint](https://stylelint.io/), [prettier](https://prettier.io/) and `@dre1080/stylelint-config`:

**With Yarn**

```sh
$ yarn add --dev stylelint prettier @dre1080/stylelint-config
```

**With npm**

```sh
$ npm install stylelint prettier @dre1080/stylelint-config --save-dev
```

## Usage

Within your [stylelint config object](http://stylelint.io/user-guide/configuration/#extends) You can extend this configuration. This will serve as a base for your config, then you can make overrides in your own config object:

```json
{
  "extends": "@dre1080/stylelint-config"
}
```

Add a prettier config in `package.json`:

```json
"prettier": "@dre1080/prettier-config"
```
