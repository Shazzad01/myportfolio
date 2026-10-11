const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  // Capture navbar clip
  const header = await page.$('header nav');
  if (header) {
    const filePath = path.join(screenshotsDir, 'navbar_fixed_desktop.png');
    await header.screenshot({ path: filePath });
    console.log('Saved navbar screenshot:', filePath);
  }

  // Also test a 1280px laptop viewport to ensure zero overflow on smaller screens
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForTimeout(400);
  if (header) {
    const filePath1280 = path.join(screenshotsDir, 'navbar_fixed_1280.png');
    await header.screenshot({ path: filePath1280 });
    console.log('Saved 1280px navbar screenshot:', filePath1280);
  }

  await browser.close();
  console.log('Navbar captures completed.');
})();
