const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que o usuário acessa o site de automação', async function () {
  await this.page.goto('https://automationpratice.com.br/');
});

When('ele clica em Login e insere credenciais válidas', async function () {
  await this.page.getByRole('link', { name: ' Login' }).click();
  await this.page.locator('#user').fill('maiko123@gmail.com');
  await this.page.locator('#password').fill('23234345');
  await this.page.getByRole('button', { name: 'login' }).click();
});

Then('o login deve ser realizado com sucesso', async function () {
  const heading = this.page.getByRole('heading', { name: 'Login realizado' });
  await expect(heading).toBeVisible();
  await this.page.getByRole('button', { name: 'OK' }).click();
});

Then('o usuário deve conseguir acessar a seção de Orders', async function () {
  await this.page.getByRole('link', { name: ' Orders' }).click();
  await expect(this.page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});

Then('o usuário deve conseguir acessar a seção de Downloads', async function () {
  await this.page.getByRole('link', { name: ' Downloads' }).click();
  await expect(this.page.getByRole('heading', { name: 'Download Invoices' })).toBeVisible();
});

Then('o usuário deve conseguir acessar a seção de Addresses', async function () {
  await this.page.getByRole('link', { name: ' Addresses' }).click();
  await expect(this.page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();
});

Then('o usuário deve conseguir acessar a seção de Account details', async function () {
  await this.page.getByRole('link', { name: ' Account details' }).click();
  await expect(this.page.getByRole('heading', { name: 'Account details' })).toBeVisible();
});

Then('o usuário deve conseguir fazer logout', async function () {
  await this.page.getByRole('link', { name: ' logout' }).click();
});
