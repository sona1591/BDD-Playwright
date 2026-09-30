import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/inventory.page';

// Declare structural type typing endpoints for your framework fixtures 
type ContextFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

// Extend the core playwright-bdd wrapper initialization setup
export const test = base.extend<ContextFixtures>({
  loginPage: async ({ page }, use) => {
    // Automatically wraps and instantiates your POM login layout on initialization
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});
