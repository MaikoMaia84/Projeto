
const { test }  = require ('@playwright/test');
const {abrirSite, logar,  funcionalidades,  logout } = require ('./testeEnaexHML')

test('Login com sucesso 2 ', async ({ page }) => {
   await abrirSite(page)
   await logar(page)
   
  
 })
 test('Funcionalidades pagina principal', async ({ page }) => {
    await abrirSite(page)
    await logar(page)
    await funcionalidades(page)
  
 })
  
 test('Logout', async ({ page }) => {
    await abrirSite(page)
    await logar(page)
    await logout (page)
 });




