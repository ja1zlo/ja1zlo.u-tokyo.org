/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    "prettier-plugin-astro",
  ],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  // jsxBracketSameLine: false,
  arrowParens: "always",

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
