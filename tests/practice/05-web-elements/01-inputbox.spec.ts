import { test, expect } from '@playwright/test';

test('Input box', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.waitForTimeout(1000)

  await page.locator('//input[@name="username"]').fill('admin'); // clear existing and add our string
  await page.waitForTimeout(1000)
  await page.locator('//input[@name="username"]').type('ADMIN'); // update with existing string
  await page.waitForTimeout(1000)
  await page.locator('//input[@name="username"]').clear(); 
  await page.waitForTimeout(1000)
  await page.locator('//input[@name="username"]').pressSequentially('admin', {timeout: 2000}); // update with existing by typing letter by letter
  await page.waitForTimeout(1000)


  await page.getByPlaceholder('Password').fill('admin123')
  await page.waitForTimeout(1000)

  await page.getByPlaceholder('Password').pressSequentially('admin123')

});
