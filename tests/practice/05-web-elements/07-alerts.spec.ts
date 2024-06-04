import { test, expect } from '@playwright/test';

test('Simple Alert - No Handle', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


});

test('Simple Alert', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


});


test('Confirm Alert - Ok', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


});


test('Confirm Alert - Cancel', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


});

test('Prompt Alert', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');


});
