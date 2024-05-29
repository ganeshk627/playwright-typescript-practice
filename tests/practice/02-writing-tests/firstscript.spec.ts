import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  await page.locator('//input[@name="username"]').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123')

  // await page.pause();

  // await page.getByText('Login').click();
  await page.locator('//button[normalize-space()="Login"]').click()
});
