const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve('C:/Users/User/.gemini/antigravity/brain/e0f4935c-bdec-49cd-8dbf-59da2a6615ee/screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  console.log('Navigating to live portfolio...');
  await page.goto('https://myportfolio-vert-one-80.vercel.app/', { waitUntil: 'networkidle' });

  // Scroll smoothly down the entire page to trigger all Framer Motion whileInView hooks
  console.log('Triggering in-view scroll observers...');
  await page.evaluate(async () => {
    const distance = 400;
    const delay = 100;
    while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
      document.scrollingElement.scrollBy(0, distance);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  });

  // Wait 1.5 seconds for all animations to settle
  await page.waitForTimeout(1500);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  const sections = [
    { id: '#hero', name: '01_hero.png' },
    { id: '#about', name: '02_about.png' },
    { id: '#pipeline', name: '03_pipeline.png' },
    { id: '#methodology', name: '04_methodology.png' },
    { id: '#skills', name: '05_skills.png' },
    { id: '#experience', name: '06_experience.png' },
    { id: '#frameworks', name: '07_frameworks.png' },
    { id: '#honors', name: '08_honors.png' },
    { id: '#resume', name: '09_resume.png' },
    { id: '#contact', name: '10_contact.png' },
  ];

  for (const sec of sections) {
    try {
      const el = await page.$(sec.id);
      if (el) {
        // Scroll element into view with margin
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(600);
        const filePath = path.join(OUTPUT_DIR, sec.name);
        await el.screenshot({ path: filePath });
        console.log(`Saved screenshot: ${sec.name}`);
      } else {
        console.warn(`Element not found: ${sec.id}`);
      }
    } catch (err) {
      console.error(`Error capturing ${sec.name}:`, err.message);
    }
  }

  // Also capture a fresh full page screenshot after scroll
  await page.screenshot({ path: path.join(OUTPUT_DIR, '00_full_page_scrolled.png'), fullPage: true });
  console.log('Saved scrolled full page screenshot.');

  await browser.close();
  console.log('Capture finished successfully.');
}

run().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
