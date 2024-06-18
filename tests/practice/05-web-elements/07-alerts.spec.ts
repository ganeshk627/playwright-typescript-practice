import { test, expect } from '@playwright/test';

test('Simple Alert - No Handle', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

  await page.waitForTimeout(1000);
  await page.locator('//p[text()="JavaScript Alerts"]/button').click();

});

test('Simple Alert', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

  page.on('dialog', async dialog => {
    console.log(dialog.message())
    console.log(dialog.type())
    expect(dialog.message()).toContain('I am an alert boxes!')
    await dialog.accept();
  });

  await page.waitForTimeout(1000);
  await page.locator('//p[text()="JavaScript Alerts"]/button').click();

  await page.waitForTimeout(1000);

});


test('Confirm Alert - Ok', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

  page.on('dialog', async dialog => {
    console.log(dialog.message())
    console.log(dialog.type())
    // expect(dialog.message()).toContain('I am an alert boxes!')
    await dialog.accept();
  });

  await page.waitForTimeout(1000);
  await page.locator('//p[text()="Confirm box:"]/button').click();


});


test('Confirm Alert - Cancel', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


  page.on('dialog', async dialog => {
    console.log(dialog.message())
    console.log(dialog.type())
    // expect(dialog.message()).toContain('I am an alert boxes!')
    await dialog.dismiss();
  });

  await page.waitForTimeout(1000);
  await page.locator('//p[text()="Confirm box:"]/button').click();

});

test('Prompt Alert', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    console.log(dialog.type())
    // expect(dialog.message()).toContain('I am an alert boxes!')
    await dialog.accept('Harry!');
  });

  await page.waitForTimeout(1000);
  await page.locator('//p[text()="Prompt box:"]/button').click();


});
