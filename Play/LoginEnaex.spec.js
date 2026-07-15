import { test, expect } from '@playwright/test';
import { CredenciaisHelper } from './CredenciaisHelper';
import { BASE_URL } from './config';

test('Login com sucesso', async ({ page }) => {
 const credenciais = CredenciaisHelper.getCredenciaisPadrao();
  await page.goto(BASE_URL);
  await page.getByRole('heading', { name: 'Bem-vindo ao' }).click();
  await page.getByRole('textbox', { name: 'Usuário' }).fill(credenciais.usuario);
  await page.getByRole('textbox', { name: 'Senha' }).fill(credenciais.senha);
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByRole('heading', { name: 'Bem-vindo(a)' }).click();
});

test('Login com sucesso 2 ', async ({ page }) => {
  const credenciais = CredenciaisHelper.getCredenciaisPadrao();
  await page.goto(BASE_URL);
  await page.getByRole('heading', { name: 'Bem-vindo ao' }).click();;
  await page.getByRole('textbox', { name: 'Usuário' }).fill(credenciais.usuario);
  await page.getByRole('textbox', { name: 'Senha' }).fill(credenciais.senha);
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.getByRole('heading', { name: 'Bem-vindo(a)' }).click();
});




