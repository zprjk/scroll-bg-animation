module.exports = {
  hooks: {
    // execute linting(ESlint, Prettier, ..) before commiting
    // See ./.lintstagedrc.js
    'pre-commit': 'lint-staged --concurrent true',
  },
};
