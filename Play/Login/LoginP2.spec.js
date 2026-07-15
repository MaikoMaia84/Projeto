const { test }  = require ('@playwright/test');
const {abrirSite, logarSucesso, verificarSeLogado, logarEmailVazio, mensagemEmailVazio } = require ('./loginPage')


test('Login com sucesso 2 ', async ({ page }) => {
    await abrirSite(page)
    await logarSucesso(page)
    await verificarSeLogado(page)
 })

 test('Login email vazio e mansagem ', async ({ page }) => {
    await abrirSite(page)
    await logarEmailVazio (page)
    await mensagemEmailVazio (page)
 });

