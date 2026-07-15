import { test as setup } from "@playwright/test";
import fs from "fs";

const TOKEN_FILEPATH = "playwright/.auth/user.json";
setup('authenticate', async ({ page }) => {

  await page.goto('https://brightthml.enaex.com/login');
  await page.getByRole('heading', { name: 'Bem-vindo ao' }).click();
  await page.getByRole('textbox', { name: 'Usuário' }).click();
  await page.getByRole('textbox', { name: 'Usuário' }).fill('xbits.');
  await page.getByRole('textbox', { name: 'Usuário' }).click();
  await page.getByRole('textbox', { name: 'Usuário' }).fill('xbits.maiko@enaex.com');
  await page.getByText('Senha').click();
  await page.getByRole('textbox', { name: 'Senha' }).click();
  await page.getByRole('textbox', { name: 'Senha' }).fill('qwe123456');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: TOKEN_FILEPATH });

});