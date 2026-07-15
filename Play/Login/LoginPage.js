const { expect }  = require ('@playwright/test');

//LoginPage.js crio as funções/ações que serão usadas no teste 
  const abrirSite = async (page) => {
      // as ações de abrir o site ficam aqui 
    await page.goto('https://automationpratice.com.br/');
  }
  const logarSucesso = async (page) => {
       // as ações do login com sucesso ficam aqui
     await page.getByRole('link', { name: ' Login' }).click();
     await page.locator('#user').click();
     await page.locator('#user').fill('234@wer.com.br23');
     await page.locator('#password').click();
     await page.locator('#password').fill('43234234');

  }
  const verificarSeLogado = async (page) => {
        //as ações de verificar com sucesso ficam aqui
     await page.getByRole('button', { name: 'login' }).click();
     await page.getByRole('heading', { name: 'Login realizado' }).click();
     await page.getByRole('button', { name: 'OK' }).click();
     await page.getByRole('link', { name: ' Dashboard' }).click();
  }
  const logarEmailVazio = async (page) => {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.getByRole('button', { name: 'login' }).click();
  }
    const mensagemEmailVazio = async (page) => {
    await expect(page.getByText('E-mail inválido')).toBeVisible({timeout: 10000})
  }
  

  module.exports ={
    abrirSite,
    logarSucesso,
    verificarSeLogado,
    logarEmailVazio,
    mensagemEmailVazio
  }