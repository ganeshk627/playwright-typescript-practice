import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  console.log(await page.locator('//input[@name="username"]').isVisible());
  await page.locator('//input[@name="username"]').fill('admin');
  console.log(await page.locator('//input[@name="username"]').isVisible());
  console.log(await page.locator('//input[@name="username"]').isEnabled());
  console.log(await page.locator('//input[@name="username"]').isEditable());


  // await page.getByPlaceholder('Password').fill('admin123')

  // await page.pause();

  // await page.getByText('Login').click();
  console.log(await page.locator('//button[normalize-space()="Login"]').isEnabled())
  await page.locator('//button[normalize-space()="Login"]').click()
});
