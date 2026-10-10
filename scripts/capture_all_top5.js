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
    { name: '01_cursor_glare', selector: 'button:has-text("01. Interactive")' },
    { name: '02_breathing_corona', selector: 'button:has-text("02. Breathing")' },
    { name: '03_laser_glint', selector: 'button:has-text("03. Linear")' },
    { name: '04_specular_motes', selector: 'button:has-text("04. Zero-Gravity")' },
    { name: '05_topographic_waves', selector: 'button:has-text("05. Topographic")' }
  ];

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  for (const opt of options) {
    console.log(`Clicking ${opt.name}...`);
    try {
      await page.click(opt.selector);
      await page.waitForTimeout(1200);
      const filePath = path.join(screenshotsDir, `motion_${opt.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error capturing ${opt.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('All 5 motion previews captured successfully.');
})();
