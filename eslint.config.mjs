// eslint.config.mjs
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  // Исключаем папки, которые не нужно проверять
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      'out/**',
      '*.config.js',
      '*.config.mjs',
      'tailwind.config.js',
      'postcss.config.mjs',
    ],
  },

  // Базовые правила JS от ESLint
  js.configs.recommended,

  // Конфиг Next.js и Core Web Vitals
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Отключаем правила, которые конфликтуют с Prettier
  prettierConfig,

  // Конфиг TypeScript ESLint
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Общие правила и плагины
  {
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    languageOptions: {
      globals: {
        // Браузерные глобалы
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // Node.js глобалы
        process: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        // React глобалы
        React: 'readonly',
        // Другие
        NodeJS: 'readonly',
        trustedTypes: 'readonly',
        self: 'readonly',
      },
    },
    rules: {
      // ❌ Отключаем устаревшие правила для React 17+
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // ❗ Обязательная проверка на наличие и корректность импортов
      'import/no-unresolved': 'error',

      // ❗ Ошибка, если Prettier что-то не отформатировал
      'prettier/prettier': 'error',

      // ❗ Удалять неиспользуемые импорты автоматически
      'unused-imports/no-unused-imports': 'error',

      // ⚠️ Предупреждение о неиспользуемых переменных, но игнорируем, если начинаются с "_"
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // ❗ Запрещаем использование any — лучше избегать его вообще
      '@typescript-eslint/no-explicit-any': 'error',

      // 🔕 Отключаем import/order, так как используем Prettier-плагин для сортировки импортов
      'import/order': 'off',

      // 🔠 Читаемость: добавляем пустые строки между логическими блоками кода
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: ['if', 'for', 'while'], next: '*' },
      ],

      // React правила
      'react/prop-types': 'off', // Отключаем, так как используем TypeScript
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
