// Generated from: features\login.feature
import { test } from "../../fixtures/bdd-fixtures.ts";

test.describe('Login functionality', () => {

  test('Successful login with valid credentials', { tag: ['@smoke'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I navigate to the login page', null, { loginPage }); 
    await When('I enter valid username and password', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should be successfully logged in', null, { page }); 
  });

  test('Login with invalid credentials', { tag: ['@regression'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('I navigate to the login page', null, { loginPage }); 
    await When('I enter invalid username and password', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an invalid credentials error', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter valid username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be successfully logged in","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":12,"tags":["@regression"],"steps":[{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I enter invalid username and password","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see an invalid credentials error","stepMatchArguments":[]}]},
]; // bdd-data-end