// Cucumber loads the TypeScript support code and creates the HTML report on every run.
module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["utils/world.ts", "step-definitions/**/*.ts", "hooks/**/*.ts"],
    format: ["progress", "html:reports/cucumber-report.html"],
  },
};