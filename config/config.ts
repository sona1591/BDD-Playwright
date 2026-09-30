import dotenv from "dotenv";
import path from "path";

const environment = (process.env.TEST_ENV ?? "qa").toLowerCase();
const environmentFile = path.join(__dirname, `.env.${environment}`);
const dotenvResult = dotenv.config({ path: environmentFile });

if (dotenvResult.error && !process.env.BASE_URL) {
  throw new Error(`Could not load environment file: ${environmentFile}`);
}

const requiredValue = (name: string, environmentOverride = name): string => {
  const value = process.env[environmentOverride] ?? dotenvResult.parsed?.[name] ?? process.env[name];
  if (!value) throw new Error(`Missing ${name}. Check ${environmentFile} or your environment.`);
  return value;
};

const browser = (process.env.BROWSER ?? "chromium").toLowerCase();
if (!(["chromium", "firefox", "webkit"] as string[]).includes(browser)) {
  throw new Error(`Unsupported BROWSER "${browser}". Use chromium, firefox, or webkit.`);
}

const headlessValue = (process.env.HEADLESS ?? "true").toLowerCase();
if (!["true", "false"].includes(headlessValue)) {
  throw new Error(`HEADLESS must be true or false; received "${headlessValue}".`);
}

const timeoutMs = Number(process.env.TIMEOUT ?? "15000");
if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
  throw new Error("TIMEOUT must be a positive number of milliseconds.");
}

export const testConfig = {
  environment,
  baseUrl: requiredValue("BASE_URL"),
  username: requiredValue("USERNAME", "TEST_USERNAME"),
  password: requiredValue("PASSWORD", "TEST_PASSWORD"),
  invalidUsername: requiredValue("INVALID_USERNAME"),
  invalidPassword: requiredValue("INVALID_PASSWORD"),
  browser,
  headless: headlessValue === "true",
  timeoutMs,
};