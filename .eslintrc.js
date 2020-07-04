module.exports = {
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'react/prop-types': [0, { customValidators: 'children' }],
        'import/order': [
          2,
          {
            groups: ['external'],
          },
        ],
        'import/no-unresolved': 0,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
