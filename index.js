import  puppeteer  from "puppeteer";

//CREDENTIALS LOGIN
const user = 'example@example.com';
const password = '12345678'; // BEST PASS EVER :)
const message = 'MEU DEUS MEU SENHOR, ME AJUDA POR FAVOR';
const postLink = 'https://www.instagram.com/p/examplepost/';
const amountComents = 50;
let countComment = 0;

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();


(async ()=>{


    // OPEN BROWSER AND OPEN PAGE
    await page.goto('https://www.instagram.com/accounts/login/');
    
    //LOGIN
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', user, { delay: 150 });
    await page.type('input[name="password"]', password, { delay: 170 });
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    //GO TO POST
    await page.goto(postLink);

    while(countComment <= amountComents){

        //Random Number Interval
        let intervals = [4000,5000,6000,7000];
        let randomInterval = Math.random()*intervals.length;

        //Comment
        await page.waitForSelector('textarea')
        await page.type('textarea',message,{delay:200})
        await page.click('button[type="submit"]');
        
        countComment++
        //Log number of comments
        console.log(`COMENTÁRIO ${countComment}`);

        //Interval
        await page.waitForTimeout(intervals[randomInterval])  
    }
   

})();



    


    
