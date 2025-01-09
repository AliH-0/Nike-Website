import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist", ".eslintrc.cjs"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { browser: true, es2020: true },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      reactHooks: require("eslint-plugin-react-hooks"),
      reactRefresh,
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": "off",
    },
  },
];
