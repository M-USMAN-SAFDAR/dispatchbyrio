const {chromium}=require('C:/Users/usman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:900}}); const errors=[]; page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(['error','warning'].includes(m.type()))errors.push(m.text())});
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'networkidle'});await page.waitForTimeout(1800);
 console.log('ready',await page.locator('.rio-journey').getAttribute('class'),'canvas',await page.locator('canvas').count());
 await page.screenshot({path:'.reference/three-start.png'});
 await page.evaluate(()=>scrollTo(0,1300));await page.waitForTimeout(1800);await page.screenshot({path:'.reference/three-yard.png'});
 await page.evaluate(()=>scrollTo(0,2600));await page.waitForTimeout(1800);await page.screenshot({path:'.reference/three-network.png'});
 console.log('progress',await page.locator('.journey-canvas').getAttribute('data-progress'),'errors',errors);
 await browser.close();
})();
