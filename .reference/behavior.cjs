const {chromium}=require('C:/Users/usman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const assert=(ok,msg)=>{if(!ok)throw Error(msg);console.log('PASS',msg)};
 await page.goto('http://127.0.0.1:3000/',{waitUntil:'networkidle'});await page.locator('.scene-ready').waitFor();await page.waitForTimeout(1500);
 assert(await page.locator('canvas').count()===1,'one real-time canvas');assert(await page.locator('.equipment-stage').count()===0,'old equipment viewer removed');assert(await page.locator('video').count()===0,'hero is not a video');
 await page.getByRole('button',{name:'02 BEHIND THE MILES'}).click();await page.waitForTimeout(1800);
 const progress=Number(await page.locator('.journey-canvas').getAttribute('data-progress'));assert(progress>.3&&progress<.6,'chapter control advances 3D timeline');
 assert(Math.abs((await page.locator('.journey-stage').boundingBox()).y)<2,'hero remains pinned during camera transition');
 await page.getByRole('button',{name:'Pause ambient animation'}).click();await page.waitForTimeout(1200);const before=await page.locator('canvas').screenshot();await page.waitForTimeout(400);const after=await page.locator('canvas').screenshot();assert(before.equals(after),'pause holds rendered animation');
 await page.getByRole('link',{name:'Explore our services',exact:true}).click();await page.waitForTimeout(1300);assert((await page.locator('#about-section').boundingBox()).y<150,'skip exits pinned journey');
 await page.locator('#equipment').scrollIntoViewIfNeeded();assert(await page.locator('.equipment-type').count()===8,'equipment preserved as eight links');
 await page.locator('.equipment-type').first().click();assert(page.url().endsWith('/contact'),'equipment CTA reaches contact');assert(await page.locator('.pin-spacer').count()===0,'pin cleaned up on navigation');
 await page.goto('http://127.0.0.1:3000/');await page.locator('.scene-ready').waitFor();assert(await page.locator('canvas').count()===1,'no duplicate canvas after navigation');
 await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(1000);assert(await page.locator('.pin-spacer').count()===0,'reduced motion removes long pin');assert(await page.locator('.journey-reduced').count()===1,'reduced motion supported');
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile fits viewport');
 assert(errors.length===0,'no JavaScript errors');await browser.close();
})();
