import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended-type-checked',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
      unicorn: unicorn,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },

    rules: {
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreVoid: false },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      eqeqeq: ['error', 'smart'],
      curly: 'error',
      'func-style': ['error', 'expression'],
      'react-hooks/exhaustive-deps': 'error',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',

      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'unicorn/no-negated-condition': 'error',
      'unicorn/switch-case-braces': ['error', 'always'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['src/utils/cn.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['clsx'],
              message:
                'Use cn() from from lib/utils instead of clsx()-next-line',
            },
          ],
        },
      ],
    },
  },
];
