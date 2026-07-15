import { test, expect } from '@playwright/test';
import { CredenciaisHelper } from '../Play/CredenciaisHelper';

test('teste de login', async ({ page }) => {
  const credenciais = CredenciaisHelper.usuarioPadrao();

  await page.goto('/');
  await page.fill('#Usuário', credenciais.usuario);
  await page.fill('#Senha', credenciais.senha);
  await page.click('#Entrar');
  
  await expect(page.getByText('Bem-vindo ao')).toBeVisible();
   

});

test('test', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('234@wer.com.br23');
  await page.locator('#password').click();
  await page.locator('#password').fill('43234234');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' Dashboard' }).click();
});
