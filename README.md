# Playwright BDD Framework

A TypeScript browser automation framework for SauceDemo. Cucumber is the BDD test runner; Playwright is used as the browser automation library and does not run the scenarios through Playwright Test.

## Project Architecture

```text
features/                 Gherkin behavior scenarios
step-definitions/         Cucumber step implementations
pages/                    Page Object Model and UI interactions
hooks/                    Per-scenario browser lifecycle and failure screenshots
config/                   Environment loading and QA/UAT variables
test-runner/              Cucumber process launcher
utils/                    Typed Cucumber World for browser objects
reports/                  Generated Cucumber HTML report
screenshots/              Screenshots from failed scenarios
cucumber.js               Cucumber paths, TypeScript loader, and formatter
playwright.config.ts      Shared browser defaults
```

The feature file uses Gherkin, a readable Given/When/Then language. Step definitions bind each phrase to TypeScript code. The Page Object Model keeps selectors and interactions inside `LoginPage`. A Cucumber World stores each scenario's Playwright `Browser`, `BrowserContext`, and `Page`; hooks create and close these objects around every scenario.

## Installation

From the project root:

```sh
npm install
npx playwright install chromium
```

Install `firefox` or `webkit` instead if selecting those browser engines in the environment file.

## Environment Files

Select an environment with `TEST_ENV=qa` (the default) or `TEST_ENV=uat`. The framework loads `config/.env.<environment>`. Update `BASE_URL`, `USERNAME`, and `PASSWORD` for the target environment; invalid-credential values are also configured there. To override credentials from the shell or CI, use `TEST_USERNAME` and `TEST_PASSWORD` (these names avoid collisions with Windows' built-in `USERNAME` variable). Browser settings can be overridden with `BROWSER`, `HEADLESS`, and `TIMEOUT`.

The included QA and UAT files both point to the supplied SauceDemo test account so the examples run immediately. Keep real environment secrets out of version control.

## Run Tests

Run every feature:

```sh
npm run test:bdd
```

Run a specific feature:

```sh
npm run test:bdd -- features/login.feature
```

Run by tag:

```sh
npm run test:bdd -- --tags "@smoke"
```

Run a single scenario by name:

```sh
npm run test:bdd -- --name "Successful login with valid credentials"
```

Run in headed mode:

```sh
npm run test:bdd:headed
```

Choose UAT in PowerShell with:

```powershell
$env:TEST_ENV = "uat"
npm run test:bdd
```

The Cucumber CLI can also be run directly and accepts the same tags and feature paths:

```sh
npx cucumber-js --tags "@smoke"
```

## HTML Reporting and Failure Screenshots

The Cucumber HTML formatter writes `reports/cucumber-report.html` on each run. It includes feature and scenario results, step statuses, execution durations, and failure details. When a scenario fails, the `After` hook saves a full-page PNG under `screenshots/` and attaches the image to that scenario; the Cucumber HTML report renders attached media when supported by the formatter version.

The `test:bdd:html` script also runs the complete suite and generates the same report. A failed step remains a failed scenario, but Cucumber continues to later scenarios by default. Browser resources are closed in the `After` hook even if screenshot capture fails.

## End-to-End Flow

1. Cucumber reads a scenario from the feature file.
2. Before hooks start the configured browser and create a new BrowserContext and Page.
3. Cucumber matches each Gherkin step to a step definition.
4. Step definitions call reusable methods on `LoginPage`.
5. The page object uses Playwright to interact with the SauceDemo application in the browser.
6. Then steps verify the resulting page or error message.
7. After hooks capture and attach a screenshot on failure, then close the Page, BrowserContext, and Browser.
8. Cucumber writes scenario results, step details, durations, and attachments to the HTML report.

```text
Feature File
     ↓
Cucumber
     ↓
Step Definition
     ↓
Page Object
     ↓
Playwright
     ↓
Browser
     ↓
Application
     ↓
Cucumber Report
```