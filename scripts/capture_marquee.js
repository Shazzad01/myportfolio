const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const ticker = await page.$('#telemetry-ticker');
  if (ticker) {
    await ticker.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Capture the ticker standalone
    const tickerFilePath = path.join(screenshotsDir, 'telemetry_marquee_element.png');
    await ticker.screenshot({ path: tickerFilePath });
    console.log('Saved marquee element screenshot:', tickerFilePath);

    // Also capture full viewport showing context
    const fullFilePath = path.join(screenshotsDir, 'telemetry_marquee_context.png');
    await page.screenshot({ path: fullFilePath });
    console.log('Saved marquee context screenshot:', fullFilePath);
  } else {
    console.log('#telemetry-ticker not found');
  }

  await browser.close();
  console.log('Marquee capture complete.');
})();
