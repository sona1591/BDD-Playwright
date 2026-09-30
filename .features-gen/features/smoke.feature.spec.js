// Generated from: features\smoke.feature
import { test } from "../../fixtures/bdd-fixtures.ts";

test.describe('Authentication Checks', () => {

  test('Verify error message for locked out user', { tag: ['@smoke'] }, async ({ Given, When, Then, loginPage }) => { 
    await Given('I navigate to the login view', null, { loginPage }); 
    await When('I execute login with "locked_out_user" and "secret_sauce"', null, { loginPage }); 
    await Then('I see the authentication error message', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\smoke.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I execute login with \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"locked_out_user\"","children":[{"start":22,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"secret_sauce\"","children":[{"start":44,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I see the authentication error message","stepMatchArguments":[]}]},
]; // bdd-data-end