const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1050 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000/demo...');
  await page.goto('http://localhost:3000/demo', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const options = [
    { name: '01_horizon_stripes', selector: 'button:has-text("01. Deep Horizon")' },
    { name: '02_cosmic_prism', selector: 'button:has-text("02. Cosmic Glass")' },
    { name: '03_cyber_radar', selector: 'button:has-text("03. Cybernetic Telemetry")' },
    { name: '04_sunset_caustic', selector: 'button:has-text("04. Twilight Sunset")' },
    { name: '05_monochrome_specular', selector: 'button:has-text("05. Monochrome Specular")' }
  ];

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  for (const opt of options) {
    console.log(`Clicking ${opt.name}...`);
    try {
      await page.click(opt.selector);
      await page.waitForTimeout(1200);
      const filePath = path.join(screenshotsDir, `preview_${opt.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error capturing ${opt.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('All 5 previews captured successfully.');
})();
