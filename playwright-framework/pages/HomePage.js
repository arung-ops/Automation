class HomePage {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async openCart() {
    await this.cartButton.click();
  }

  async verifyProductsVisible() {
    await this.productsTitle.waitFor({ state: 'visible' });
    return await this.productsTitle.textContent();
  }
}

module.exports = { HomePage };
