import { test, expect } from '@playwright/test';

test('Select Dropdown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  await page.waitForTimeout(2000);
  await page.locator('#select-demo').selectOption({value: 'Monday'});
  await page.waitForTimeout(2000);
  await page.locator('#select-demo').selectOption({label: 'Wednesday'});
  await page.waitForTimeout(2000);
  await page.locator('#select-demo').selectOption({index: 6}); // Friday
  await page.waitForTimeout(2000);
  await page.locator('#select-demo').selectOption('Sunday');
  await page.waitForTimeout(2000);

});

test('Multi-Select Dropdown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  await page.waitForTimeout(2000);

  // Selecting last option
  await page.locator('select[name="States"]').selectOption({value: 'Florida'});
  await page.waitForTimeout(2000);
  await page.locator('select[name="States"]').selectOption({label: 'Texas'}); // last one only selected by 'selectOption'
  await page.waitForTimeout(2000);

  // Using control/command click
  // await page.keyboard.down('Meta'); //only for mac
  // await page.keyboard.down('Control'); //only for win
  await page.keyboard.down('ControlOrMeta'); // 'ControlOrMeta' resolves to Control on Windows and Linux and to Meta on macOS.
  await page.waitForTimeout(2000);
  await page.locator('option[value="New Jersey"]').click();
  await page.waitForTimeout(2000);
  await page.locator('option[value="Washington"]').click();
  await page.waitForTimeout(2000);
  // await page.keyboard.up('Meta'); // mac
  // await page.keyboard.up('Control'); // win
  await page.keyboard.up('ControlOrMeta'); // 'ControlOrMeta' resolves to Control on Windows and Linux and to Meta on macOS.


});

test('Search Dropdown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  await page.waitForTimeout(2000);
  await page.locator('//select[@id="country"]/../span').click();
  await page.waitForTimeout(2000);
  // await page.locator('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').fill('india'); // complete text
  await page.locator('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').fill('ind'); // partial text
  await page.waitForTimeout(2000);

  // await page.locator('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').press('Enter');
  //OR
  await page.locator('//li[text()="India"]').click();

});
