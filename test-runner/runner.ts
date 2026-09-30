// This runner wraps the Cucumber CLI so `npm run test:bdd` behaves consistently
// across machines, without requiring a separate cucumber.js config file.
//
// It explicitly runs Cucumber (NOT the Playwright Test runner) against all
// .feature files, loads the TypeScript step definitions and hooks via ts-node,
// and produces a readable HTML report.
//
// Optional tag filter: `ts-node test-runner/runner.ts @smoke`
import { spawnSync } from 'child_process';
const tagArg = process.argv[2]; // e.g. "@smoke" or "@regression"
const args = [
'cucumber-js',
'features/**/*.feature',

'--require-module', 'ts-node/register',
'--require', 'step-definitions/**/*.ts',
'--require', 'hooks/**/*.ts',
'--format', 'progress-bar',
'--format', 'html:reports/cucumber-report.html',
'--format', 'json:reports/cucumber-report.json',
];
if (tagArg) {
args.push('--tags', tagArg);
}
const result = spawnSync('npx', args, { stdio: 'inherit', shell: true });
process.exit(result.status ?? 1);