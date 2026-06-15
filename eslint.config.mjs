import next from "eslint-config-next";

const config = [
  // Ignore build artifacts + legacy bundles
  {
    ignores: [
      ".next/**",
      "dist/**",
      "node_modules/**",
      "archive/**",
    ],
  },
  ...next,
];

export default config;
