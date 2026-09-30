// Generated from: features\add-to-cart.feature
import { test } from "../../fixtures/bdd-fixtures.ts";

test.describe('Cart Actions', () => {

  test('Add a product to cart from inventory page', { tag: ['@smoke'] }, async ({ Given, When, Then, And, inventoryPage, loginPage }) => { 
    await Given('I navigate to the login view', null, { loginPage }); 
    await When('I execute login with "standard_user" and "secret_sauce"', null, { loginPage }); 
    await And('I add "Sauce Labs Backpack" to the cart', null, { inventoryPage }); 
    await Then('I see cart badge count as "1"', null, { inventoryPage }); 
    await And('I see "Sauce Labs Backpack" in the cart', null, { inventoryPage }); 
  });

  test('Do the Payment', { tag: ['@smoke', '@Regression'] }, async ({ Given, When, Then, And, inventoryPage, loginPage, page }) => { 
    await Given('I navigate to the login view', null, { loginPage }); 
    await When('I execute login with "standard_user" and "secret_sauce"', null, { loginPage }); 
    await And('I add "Sauce Labs Backpack" to the cart', null, { inventoryPage }); 
    await Then('I see cart badge count as "1"', null, { inventoryPage }); 
    await When('I proceed to checkout', null, { page }); 
    await And('I fill in checkout information with "John" "Doe" "12345"', null, { page }); 
    await And('I finish the checkout', null, { page }); 
    await Then('I see the order confirmation page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\add-to-cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I execute login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I see cart badge count as \"1\"","stepMatchArguments":[{"group":{"start":26,"value":"\"1\"","children":[{"start":27,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I see \"Sauce Labs Backpack\" in the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":["@smoke","@Regression"],"steps":[{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I execute login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I see cart badge count as \"1\"","stepMatchArguments":[{"group":{"start":26,"value":"\"1\"","children":[{"start":27,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I fill in checkout information with \"John\" \"Doe\" \"12345\"","stepMatchArguments":[{"group":{"start":36,"value":"\"John\"","children":[{"start":37,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"Doe\"","children":[{"start":44,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"12345\"","children":[{"start":50,"value":"12345","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I finish the checkout","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I see the order confirmation page","stepMatchArguments":[]}]},
]; // bdd-data-end