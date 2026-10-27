import { When, Then } from '@wdio/cucumber-framework';
import inventoryPage from '../../pageobjects/inventoryPage.js';

When('Selecciono la opcion de ordenar de mas barato a mas caro', async () => {
    await inventoryPage.ordenarPorMenorPrecio();
});

Then('El primer producto debe costar {string}', async (precioEsperado) => {
    const precio = await inventoryPage.obtenerPrimerPrecio();
    expect(precio).toBe(precioEsperado);
});