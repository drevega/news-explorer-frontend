import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2020,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    settings: { react: { version: "detect" } }, // Automatically detect React version
  },
  {
    plugins: { "react-hooks": pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },
  eslintConfigPrettier, // This must be the last one to override other configs
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with modern React/Vite
      "react/prop-types": "off", // Disables prop-types rule
    },
  },
];

// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])
