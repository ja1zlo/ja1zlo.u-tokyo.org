/** @type {import('prettier').Config} */
module.exports = {
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
      files: "*.md",
      options: {
        parser: "markdown-nocjsp",
      },
    },
    {
      files: "*.mdx",
      options: {
        parser: "mdx-nocjsp",
      },
    },
  ],
};
