import chalk from "chalk";
import puppeteer from 'puppeteer'



//PUPPETEER START
(async () => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    //URL ALVO
    await page.goto('https://www.instagram.com/p/Cd5tiVMj_AM/');
    // await page.waitForSelector('.L3NKy');
    // await page.click('.L3NKy')
    
    // //AGUARDANDO A PÁGINA CARREGAR
    // await page.waitForNavigation()
    await page.waitForSelector('input[name="username"]');

    //PREENCHENDO CAMPO DE LOGIN
    await page.type('input[name="username"]', 'isaqueamorim25@gmail.com', { delay: 50 });
    await page.type('input[name="password"]', '13082003', { delay: 70 });
    await page.click('button[type="submit"]');
    //AGUARDANDO E PULANDO POPUP
    await page.waitForNavigation();
    await page.click('.yWX7d');

    const loop = async () => {
        await page.waitForSelector('textarea');
        await page.type('textarea', 'MEU DEUS MEU SENHOR, ME AJUDA POR FAVOR', { delay: 200 });
        await page.click('button[type="submit"]');

        console.log('COMENTÁRIO ')

    }
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(7000)
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(4000)
    await loop();
    await page.waitForTimeout(4000)
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(6000)
    await loop();
    await page.waitForTimeout(7000)
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(5000)
    await loop();
    await page.waitForTimeout(4000)
    await loop();
    await page.waitForTimeout(7000)
    await loop();
    await page.waitForTimeout(3000)
    await loop();
    
    await page.waitForTimeout(5000)
    await browser.close()

})();


