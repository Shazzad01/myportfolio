const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2600 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/#experience', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const section = await page.$('#experience');
  if (section) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    const filePath = path.join(screenshotsDir, 'experience_redesigned.png');
    await section.screenshot({ path: filePath });
    console.log('Saved experience screenshot:', filePath);
  } else {
    console.log('#experience section not found');
  }

  await browser.close();
  console.log('Experience capture complete.');
})();
