import { When, Then } from '@wdio/cucumber-framework';
import logoutPage from '../../pageobjects/logoutPage.js';

When('Navego a la barra de opciones', async () => {
    await logoutPage.abrirBarra();
});

Then('Realizo logout', async () => {
    await logoutPage.logout();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/');
});