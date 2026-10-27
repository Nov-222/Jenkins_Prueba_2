import { When, Then } from '@wdio/cucumber-framework';
import inventoryPage from '../../pageobjects/inventoryPage.js';

When('Agrego un producto y voy al carrito', async () => {
    await inventoryPage.agregarProductoYIrAlCarrito();
});

Then('Deberia estar en la pagina del carrito {string}', async (urlEsperada) => {
    await expect(browser).toHaveUrl(urlEsperada);
});