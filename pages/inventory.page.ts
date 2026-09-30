import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  public readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  /**
   * Adds the product to cart from the inventory list by matching product name.
   */
  async addProductToCart(productName: string) {
    const productCard = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });

    await productCard.locator('button').click();
  }

  /**
   * Opens cart and returns a locator for the product name inside cart items.
   */
  async getCartItemByName(productName: string): Promise<Locator> {
    await this.page.locator('.shopping_cart_link').click();
    return this.page.locator('.cart_item .inventory_item_name', { hasText: productName });
  }
}
