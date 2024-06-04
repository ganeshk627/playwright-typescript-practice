import { test, expect } from '@playwright/test';

test('Radio Button', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo');

  await page.waitForTimeout(1000)
  console.log(await page.locator("//input[@value='Male' and @name='optradio']").isEnabled())
  console.log(await page.locator("//input[@value='Male' and @name='optradio']").isChecked())
  await page.locator("//input[@value='Male' and @name='optradio']").click()
  await page.waitForTimeout(1000)
  console.log(await page.locator("//input[@value='Male' and @name='optradio']").isChecked())


  // disabled radio button
  console.log(await page.locator('//input[@value="RadioButton3"]').isEnabled())
  console.log(await page.locator('//input[@value="RadioButton3"]').isChecked())
  // await page.locator('//input[@value="RadioButton3"]').click();
  // console.log(await page.locator('//input[@value="RadioButton3"]').isChecked())

});
