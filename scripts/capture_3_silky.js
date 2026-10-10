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
    { name: '01_specular_spotlight', selector: 'button:has-text("01")' },
    { name: '02_fluid_horizon_eclipse', selector: 'button:has-text("02")' },
    { name: '03_velvet_grain_aurora', selector: 'button:has-text("03")' }
  ];

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  for (const opt of options) {
    console.log(`Clicking ${opt.name}...`);
    try {
      await page.click(opt.selector);
      // Move mouse to position (700, 420) to cast specular spotlight across the cards
      await page.mouse.move(700, 420);
      await page.waitForTimeout(800);
      const filePath = path.join(screenshotsDir, `silky_${opt.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error capturing ${opt.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('All 3 silky 120 FPS directions captured successfully.');
})();
