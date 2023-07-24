const { chromium } = require('playwright');
require('dotenv').config();

async function getUnreadEmailCount() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Авторизація на Gmail з використанням змінних середовища
  const email = process.env.GMAIL_EMAIL;
  const password = process.env.GMAIL_PASSWORD;

  await page.goto('https://mail.google.com/');
  await page.fill('input[type="email"]', email);
  await page.click('span[jsname="V67aGc"]');
  await page.waitForTimeout(2000);
  await page.fill('input[type="password"]', password);
  await page.click('span[jsname="V67aGc"]');

  // Зачекайте, поки сторінка Gmail повністю завантажиться
  await page.waitForLoadState('networkidle');

  // Отримайте кількість непрочитаних листів
  const unreadCountElement = await page.waitForSelector('[aria-label="Непрочитаних"]');
  const unreadCount = await unreadCountElement.innerText();
  console.log(`Кількість непрочитаних листів: ${unreadCount}`);

  // Закрийте браузер
  await browser.close();
}

getUnreadEmailCount();
