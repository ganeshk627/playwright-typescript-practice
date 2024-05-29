import { test, expect } from '@playwright/test';

test('Login test - Hard assert', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  console.log(await page.locator('//input[@name="username"]').isEditable());
  await page.locator('//input[@name="username"]').fill('admin');

  console.log(await page.getByPlaceholder('Password').isEditable());
  await page.getByPlaceholder('Password').fill('admin123')

  console.log(await page.locator('//button[normalize-space()="Login"]').isEnabled())
  await page.locator('//button[normalize-space()="Login"]').click()

  // page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page).toHaveURL(/web\/index.php\/dashboard\/index/);
  await expect(page).not.toHaveURL(/auth\/login/)
  // await expect(page).toHaveURL(/auth\/login/)
  await expect(page).toHaveURL(/dashboard/);
  await expect(page).toHaveTitle('OrangeHRM');


  // locator
  const header = page.locator('h6');
  await expect(header).toHaveText('Dashboard', {timeout: 10000});
  // await expect(header).toHaveText('Dashboar', {timeout: 10000});
  await expect(header).toContainText('Dashb', {timeout: 10000});

  // object - autowaiting wont take place here before failing
  const url = await page.url();
  console.log(url);
  await expect(url).toMatch(/web\/index.php\/dashboard\/index/);
  await expect(url).not.toMatch(/auth\/login/);
  const header_text = await header.textContent();
  await expect(header_text).toMatch('Dashboard');

});


test('Login test - Soft assert', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  console.log(await page.locator('//input[@name="username"]').isEditable());
  await page.locator('//input[@name="username"]').fill('admin');

  console.log(await page.getByPlaceholder('Password').isEditable());
  await page.getByPlaceholder('Password').fill('admin123')

  console.log(await page.locator('//button[normalize-space()="Login"]').isEnabled())
  await page.locator('//button[normalize-space()="Login"]').click()

  // page
  await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect.soft(page).toHaveURL(/web\/index.php\/dashboard\/index/);
  // await expect.soft(page).not.toHaveURL(/auth\/login/)
  await expect.soft(page).toHaveURL(/auth\/login/); // fail
  await expect.soft(page).toHaveURL(/dashboard/);
  await expect.soft(page).toHaveTitle('OrangeHRMM'); // fail


  // locator
  const header = page.locator('h6');
  await expect.soft(header).toHaveText('Dashboard', {timeout: 10000});
  await expect.soft(header).toHaveText('Dashboar', {timeout: 10000}); // fail
  await expect.soft(header).toContainText('Dashb', {timeout: 10000});

  // object - autowaiting wont take place here before failing
  const url = await page.url();
  console.log(url);
  await expect.soft(url).toMatch(/web\/index.php\/dashboard\/index/);
  await expect(url).not.toMatch(/auth\/login/);
  const header_text = await header.textContent();
  await expect(header_text).toMatch('Dashboard');

});
