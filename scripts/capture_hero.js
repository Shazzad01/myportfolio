const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  console.log('Navigating to live portfolio...');
  await page.goto('https://myportfolio-vert-one-80.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const hero = await page.$('#hero');
  if (hero) {
    const heroFilePath = path.join(screenshotsDir, 'hero_with_portrait.png');
    await hero.screenshot({ path: heroFilePath });
    console.log('Saved hero portrait screenshot:', heroFilePath);
  } else {
    console.log('#hero not found');
  }

  await browser.close();
  console.log('Capture complete.');
})();
