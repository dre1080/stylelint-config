const propertyOrder = require('stylelint-config-primer/property-order');
const browsers = require('stylelint-config-primer/browsers');

module.exports = {
  extends: ['stylelint-prettier/recommended'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-order',
  ],
  rules: {
    'prettier/prettier': true,
    'at-rule-name-case': 'lower',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': {
      '/^transition/': ['/all/'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/.+/': ['initial'],
    },
    'font-family-name-quotes': 'always-where-recommended',
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-missing-end-of-source-newline': true,
    'order/properties-order': propertyOrder,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        browsers,
      },
    ],
    'property-no-vendor-prefix': true,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,4,0',
    'selector-max-type': 0,
    'selector-no-qualifying-type': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-no-vendor-prefix': true,
  },
};
