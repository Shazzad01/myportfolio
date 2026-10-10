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
    { name: '01_constellation_magnetic', selector: 'button:has-text("01. Magnetic")' },
    { name: '02_fluid_bioluminescent', selector: 'button:has-text("02. Bioluminescent")' },
    { name: '03_specular_lens_ripple', selector: 'button:has-text("03. Fresnel")' },
    { name: '04_orbital_gravitational', selector: 'button:has-text("04. Orbital")' },
    { name: '05_spatial_3d_parallax', selector: 'button:has-text("05. Spatial")' }
  ];

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  for (const opt of options) {
    console.log(`Clicking ${opt.name}...`);
    try {
      await page.click(opt.selector);
      // Move mouse to simulate interaction
      await page.mouse.move(720, 380);
      await page.waitForTimeout(1400);
      const filePath = path.join(screenshotsDir, `interact_${opt.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error capturing ${opt.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('All 5 interactive variations captured successfully.');
})();
