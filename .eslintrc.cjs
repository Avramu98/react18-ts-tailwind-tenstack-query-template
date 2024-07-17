module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this to support Node.js environment
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js'],
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier', 'eslint-plugin-storybook'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-process-exit': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'object-shorthand': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
  },
};