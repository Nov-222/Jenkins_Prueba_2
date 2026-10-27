import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/loginPage.js';

Given('Estoy en la pagina del login', async () => {
    await loginPage.open();
});

When('Ingreso los datos correctos, user={string} y password={string}', async (username, password) => {
    await loginPage.login(username, password);
});

Then('Login Exitoso', async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});