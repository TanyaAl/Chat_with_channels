import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    ignores: ['node_modules/', 'dist', 'build'],
  },
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js, '@stylistic': stylistic },
    extends: ['js/recommended'],

    rules: {
      indent: ['error', 2],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      '@stylistic/jsx-one-expression-per-line': 'error',
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-empty': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
])
