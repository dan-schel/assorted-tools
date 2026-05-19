import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";

const customRules = [
  {
    rules: {
      // Ignore unused variables if they start with underscores.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Require === and !==, except when comparing to null.
      "eqeqeq": ["warn", "always", { null: "ignore" }],

      // Warn about prettier violations.
      "prettier/prettier": "warn",

      // Warn about non-null assertions.
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Warn about relying on truthy/falsy values.
      "@typescript-eslint/strict-boolean-expressions": [
        "warn",
        { allowString: false, allowNumber: false, allowNullableObject: false },
      ],

      // These errors are often just symptoms of another error, and obscure the
      // actual error, so downngrade them to warnings.
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",

      "@typescript-eslint/require-await": "warn",
    },
  },
  {
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
      // Only allow console.warn in src/.
      "no-console": ["warn", { allow: ["warn"] }],
    },
  },
];

const reactConfig = [
  {
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react,
    languageOptions: {
      ...react.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Not needed with new JSX transform.
      "react/react-in-jsx-scope": "off",

      // TypeScript handles prop types.
      "react/prop-types": "off",

      // Preact uses `class` instead of `className`.
      "react/no-unknown-property": "off",

      // Warn if <Thing></Thing> can be changed to <Thing />.
      "react/self-closing-comp": "warn",
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "coverage", "eslint.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettier,
  ...customRules,
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
  },
);
