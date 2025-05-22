/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  endOfLine: 'lf',
  overrides: [
    {
      files: './**/(en|ko).json',
      options: {
        jsonRecursiveSort: true,
        parser: 'json',
        plugins: [require.resolve('prettier-plugin-sort-json')],
      },
    },
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
