module.exports = {
  // Eslint staged files
  '**/*.{js,jsx}': 'eslint',

  // Prettier-ify non-src files (eg: settings files)
  '**/*.{js,md}': 'prettier --write',
  '!(*package-lock).json': 'prettier --write',

  // Lint staged markdown files
  '**/*.md': 'markdownlint',
};
