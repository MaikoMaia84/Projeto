import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('maiko123@gmail.com');
  await page.locator('#password').click();
  await page.locator('#user').fill('maiko123@gmail.com1');
  await page.locator('#password').fill('23234345');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' Orders' }).click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.getByRole('link', { name: ' Downloads' }).click();
  await page.getByRole('heading', { name: 'Download Invoices' }).click();
  await page.getByRole('link', { name: ' Addresses' }).click();
  await page.getByRole('heading', { name: 'Billing Address' }).click();
  await page.getByRole('link', { name: ' Account details' }).click();
  await page.getByRole('heading', { name: 'Account details' }).click();
  await page.getByRole('link', { name: ' logout' }).click();

});