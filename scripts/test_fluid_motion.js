const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Measure transform at t=0
  const transform1 = await page.evaluate(() => {
    const el = document.querySelector('div[style*="translate3d"]');
    return el ? el.style.transform : 'NONE';
  });

  // Wait 1.5 seconds for harmonic idle breathing
  await page.waitForTimeout(1500);

  // Measure transform at t=1.5s
  const transform2 = await page.evaluate(() => {
    const el = document.querySelector('div[style*="translate3d"]');
    return el ? el.style.transform : 'NONE';
  });

  console.log('T0 Transform:', transform1);
  console.log('T1.5 Transform:', transform2);
  const isMoving = transform1 !== transform2;
  console.log('Continuously Moving When Idle (Never Stuck):', isMoving);

  await browser.close();
})();
