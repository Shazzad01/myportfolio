const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1050 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000/ (Main Portfolio)...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const screenshotsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\e0f4935c-bdec-49cd-8dbf-59da2a6615ee\\screenshots';

  // 1. Move mouse to (720, 360) in the hero section to see the specular spotlight across the hero
  await page.mouse.move(720, 360);
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotsDir, 'main_01_hero_monolithic.png') });
  console.log('Captured main_01_hero_monolithic.png');

  // 2. Scroll to Pipeline & Methodology
  await page.evaluate(() => window.scrollTo({ top: 1100, behavior: 'instant' }));
  await page.mouse.move(720, 450);
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(screenshotsDir, 'main_02_pipeline_specular.png') });
  console.log('Captured main_02_pipeline_specular.png');

  // 3. Scroll to Featured Projects
  const projectsElem = await page.$('#projects');
  if (projectsElem) {
    await projectsElem.scrollIntoViewIfNeeded();
    await page.mouse.move(720, 500);
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(screenshotsDir, 'main_03_projects_specular.png') });
    console.log('Captured main_03_projects_specular.png');
  }

  // 4. Scroll to Contact section
  const contactElem = await page.$('#contact');
  if (contactElem) {
    await contactElem.scrollIntoViewIfNeeded();
    await page.mouse.move(720, 500);
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(screenshotsDir, 'main_04_contact_specular.png') });
    console.log('Captured main_04_contact_specular.png');
  }

  await browser.close();
  console.log('All main site screenshots captured successfully.');
})();
