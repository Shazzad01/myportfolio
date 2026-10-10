const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1050 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000/demo...');
  await page.goto('http://localhost:3000/demo', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const types = [
    { num: '01', name: '01_chromatic_mesh', text: '01' },
    { num: '02', name: '02_linear_specular', text: '02' },
    { num: '03', name: '03_perspective_grid', text: '03' },
    { num: '04', name: '04_editorial_grain', text: '04' },
    { num: '05', name: '05_prismatic_caustic', text: '05' },
    { num: '06', name: '06_aurora_borealis', text: '06' },
    { num: '07', name: '07_topographic_contour', text: '07' },
    { num: '08', name: '08_neon_radar', text: '08' },
    { num: '09', name: '09_sunset_amber', text: '09' },
    { num: '10', name: '10_halftone_matrix', text: '10' }
  ];

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  for (const t of types) {
    console.log(`Clicking Type ${t.num}...`);
    try {
      // Find the tab button by text
      const btn = page.locator(`button[role="tab"]:has-text("${t.num}")`).first();
      await btn.click();
      await page.mouse.move(720, 420);
      await page.waitForTimeout(700);
      const filePath = path.join(screenshotsDir, `type_${t.name}.png`);
      await page.screenshot({ path: filePath });
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error capturing Type ${t.num}:`, e.message);
    }
  }

  await browser.close();
  console.log('All 10 distinct background types captured successfully.');
})();
