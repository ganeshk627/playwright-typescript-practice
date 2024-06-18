import { test, expect } from '@playwright/test';

var moment = require('moment');

const dob1 = '05061999';
const dob2 = '05-06-1999';
const dob3 = '05/06/1999';
const dob4 = '1999-06-05'; // YYYY-MM-DD only applicable with playwright
const dob5 = '19990605';
const dob6 = '1999-06-05 T18:37:46.152Z';


test('Date Picker using fill', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

  await page.waitForTimeout(2000);
  await page.locator('#birthday').fill(dob4); // format should be YYYY-MM-DD
  await expect(page.locator('#birthday')).toHaveValue('1999-06-05');
});

test('Date Picker using pressSequentially', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

  await page.waitForTimeout(2000);
  await page.locator('#birthday').pressSequentially(dob2);
  await expect(page.locator('#birthday')).toHaveValue('1999-06-05');
});

test('Date Picker using multiple clicks', async ({ page }) => {

  let monthYear = 'June 2023';
  let day = 5;

  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.waitForTimeout(2000);


  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(1000);

  while (await page.locator('.datepicker-switch').first().textContent() != monthYear) {
    if (moment(monthYear, 'MMMM YYYY').isBefore()) {
      await page.locator('.prev').first().click();
    } else {
      await page.locator('.next').first().click();
    }
    await page.waitForTimeout(1000);
  }
  await page.locator('//td[@class="day"][text()="' + day + '"]').click();

  await expect(page.locator('input[placeholder="Start date"]')).toHaveValue('05/06/2023');
});

