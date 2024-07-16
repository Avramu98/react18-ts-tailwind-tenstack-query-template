module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [
    {
      files: ['src/service-worker/**/*'],
      env: { serviceworker: true },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./src/service-worker/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'no-unused-vars': 'warn',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-classes-per-file': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
