import { test, expect } from '@playwright/test';

test('Checkbox', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');

  await page.waitForTimeout(1000)
  console.log(await page.locator("#isAgeSelected").isEnabled())
  console.log(await page.locator("#isAgeSelected").isChecked())
  await page.locator("#isAgeSelected").click()
  await page.waitForTimeout(1000)
  console.log(await page.locator("#isAgeSelected").isChecked())


  // disabled check button
  console.log(await page.locator('//label[@for="ex1-check2"][normalize-space()="Option 3"]/../input').isEnabled())
  console.log(await page.locator('//label[@for="ex1-check2"][normalize-space()="Option 3"]/../input').isChecked())
  await page.locator('//label[@for="ex1-check2"][normalize-space()="Option 3"]/../input').click();
  console.log(await page.locator('//label[@for="ex1-check2"][normalize-space()="Option 3"]/../input').isChecked())

});
