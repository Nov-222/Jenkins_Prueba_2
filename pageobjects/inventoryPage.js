class inventoryPage {
    get inventoryContainer() { return $('[data-test="inventory-list"]'); }
    get inventario() { return $$('[data-test="inventory-item"]'); }
    get selectSort() { return $('[data-test="product-sort-container"]'); }
    get firstItemPrice() { return $('[data-test="inventory-item-price"]'); }
    get btnAddToCart() { return $('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get btnCartLink() { return $('[data-test="shopping-cart-link"]'); }

    async ProductosTotales() {
        await this.inventoryContainer.waitForDisplayed({ timeout: 5000 });
        const items = await this.inventario;
        return items.length;
    }

    async ordenarPorMenorPrecio() {
        await this.selectSort.waitForDisplayed();
        // 'lohi' es el valor para 'Price (low to high)'
        await this.selectSort.selectByAttribute('value', 'lohi');
    }

    async obtenerPrimerPrecio() {
        await this.firstItemPrice.waitForDisplayed();
        return await this.firstItemPrice.getText();
    }

    async agregarProductoYIrAlCarrito() {
        await this.btnAddToCart.waitForClickable();
        await this.btnAddToCart.click();
        await this.btnCartLink.waitForClickable();
        await this.btnCartLink.click();
    }
}

export default new inventoryPage();