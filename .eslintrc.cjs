module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'unicorn',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Mejores prácticas y principios SOLID
    'unicorn/prevent-abbreviations': 'warn',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-null': 'warn',
    'unicorn/explicit-length-check': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-top-level-await': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    // Puedes agregar más reglas específicas para SOLID aquí
  },
  ignorePatterns: ['node_modules/', 'dist/', '*.config.js', '*.config.cjs', '*.config.mjs'],
}; 