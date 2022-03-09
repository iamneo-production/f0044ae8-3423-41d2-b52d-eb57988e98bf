const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_Signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      console.log('TESTCASE:FE_Login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      await page.click('#UserPlans');
      await page.waitForSelector('#popularPlansGrid1',{timeout:3000});
      await page.click('#popularPlansGrid1');
      await page.waitForSelector('#rechargeButton',{timeout:3000});
      console.log('TESTCASE:FE_UserPlansOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_UserPlansOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#UserAddons');
    await page.waitForSelector('#addOnsGrid1',{timeout:3000});
    await page.click('#addOnsGrid1');
    await page.waitForSelector('#rechargeButton',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_UserAddonsOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_UserAddonsOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminPrepaid');
    await page.waitForSelector('#searchPlan',{timeout:3000});
    await page.click('#adminPostpaid');
    await page.waitForSelector('#searchPlan',{timeout:3000});
    console.log('TESTCASE:FE_AdminSchemesOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminSchemesOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-cfcadfffcfafbeaabeccbbfbcafdeccaedae.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminAddOns');
    await page.waitForSelector('#searchPlan',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_AdminAddOnsOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminAddOnsOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();