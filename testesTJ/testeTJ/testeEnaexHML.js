
const { expect }  = require ('@playwright/test');


  const abrirSite = async (page) => {
    await page.goto('https://brightthml.enaex.com/login');
    await page.screenshot({ path: 'evidencias/login.png' });

  }
   const logar = async (page) => {
  
    await page.getByRole('textbox', { name: 'Usuário' }).click();
    await page.getByRole('textbox', { name: 'Usuário' }).fill('xbits.maiko@enaex.com');
    await page.getByRole('textbox', { name: 'Senha' }).fill('qwe123456');
    await page.getByRole('button', { name: 'Entrar' }).click({timeout: 10000});
    await page.getByRole('heading', { name: 'Bem-vindo(a)' }).click({timeout: 10000});
    await page.screenshot({ path: './testeTJ/evidencias/sprint1/CT-001-login-sucesso.png' });

  }

   const funcionalidades = async (page) => {
    await page.goto('https://brightthml.enaex.com/distribution-center');
    await expect(page.getByRole('heading', { name: 'Centro de Distribuição' })).toBeVisible();


    await page.goto('https://brightthml.enaex.com/factory');
    await expect(page.getByRole('heading', { name: 'Fábrica' })).toBeVisible();

    await page.goto('https://brightthml.enaex.com/unit-service');
    await expect(page.getByRole('heading', { name: 'Unidade de' })).toBeVisible();

    await page.goto('https://brightthml.enaex.com/time-line');
    await expect(page.getByRole('heading', { name: 'Linha do tempo' })).toBeVisible();

    await page.goto('https://brightthml.enaex.com/deployment');
    await expect(page.getByRole('heading', { name: 'Ferramentas de implantação' })).toBeVisible();

    await page.goto('https://brightthml.enaex.com/support');
    await expect(page.getByRole('heading', { name: 'Suporte' })).toBeVisible();
  }

  const logout = async (page) => {
    await page.locator('.sc-ixGGxD.sc-khLCKb > svg').click();
    await expect(page.getByRole('heading', { name: 'Acesse o Sistema' })).toBeVisible();
  }

  

  module.exports ={
    abrirSite,
    logar,
    funcionalidades,
    logout,
  
    
  }

  

