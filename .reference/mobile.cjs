const {chromium}=require('C:/Users/usman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'networkidle'});await page.locator('.scene-ready').waitFor();await page.waitForTimeout(1600);
 await page.screenshot({path:'.reference/start-final.png'});
 await page.setViewportSize({width:390,height:844});await page.reload({waitUntil:'networkidle'});await page.locator('.scene-ready').waitFor();await page.waitForTimeout(1600);
 await page.screenshot({path:'.reference/mobile-start.png'});
 await page.evaluate(()=>scrollTo(0,1100));await page.waitForTimeout(1500);await page.screenshot({path:'.reference/mobile-yard.png'});
 console.log('overflow',await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth));await browser.close();
})();
