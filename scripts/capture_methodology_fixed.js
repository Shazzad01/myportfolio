const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2400 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/#methodology', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const section = await page.$('#methodology');
  if (section) {
    const filePath = path.join(screenshotsDir, 'qa_matrix_redesigned.png');
    await section.screenshot({ path: filePath });
    console.log('Saved QA matrix screenshot:', filePath);
  } else {
    console.log('#methodology section not found');
  }

  await browser.close();
  console.log('QA matrix capture complete.');
})();
