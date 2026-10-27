import { Then } from '@wdio/cucumber-framework';
import inventoryPage from '../../pageobjects/inventoryPage.js';

Then('Deberian verse 6 productos en la tienda', async () => {
    const count = await inventoryPage.ProductosTotales();
    expect(count).toBe(6);
});