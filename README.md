# playwright-typescript-practice

# 00. Installation
## 0.1. Install NodeJs
https://nodejs.org/en/download

## 0.2. Install Vscode
https://code.visualstudio.com/download

## 0.3. Install "Playwright Test for VS Code" extension in VS Code
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

## 0.4. Install Git
https://git-scm.com/downloads

# 01. Creating Playwright project

```bash
npm init playwright@latest
```

# 02. Installing browsers

```bash
npx playwright install
```

# 03. Running the Tests
## Running all the tests in headless mode with all configured  browsers
    npx playwright test

## Running all the tests in headed mode with configured all browsers
    npx playwright test --headed

## Running all the tests only in mytest.spec.ts with configured all browsers in headed mode
    npx playwright test mytest.spec.ts --headed

## Running all the tests only in mytest.spec.ts with specified browser in headed mode
    npx playwright test mytest.spec.ts --project=chromium --headed

# 04. Viewing Playwright Report
1. Opening index.html under folder 'playwright-report'
2. Opening through CLI
```bash
npx playwright show-report
```
# 05. Include/ Exclude tests
1. To run only few tests 
```javascript
test.only('test', async ({ page }) => {
 ...
});
```

2. To skip some tests 
```javascript
test.skip('test', async ({ page }) => {
  ...
});
```

3. To run particular file 
```bash
npx playwright test filename.spec.ts
```

4. To run particular test in file 
```bash
npx playwright test filename.spec.ts:11
```
#### Note:- '11' is the line number

5. Execute through 'Playwright Test for VSCode' plugin

# 06. Debugging the Tests

1. Running all the tests only in mytest.spec.ts with specified browser in headed mode and debug mode
```bash
npx playwright test mytest.spec.ts --project=chromium --headed --debug
```

2. Pausing at specific line by adding below line
```javascript
await page.pause();
```

3. Pausing at specific line by adding breakpoints using 'Playwright Test for VSCode' Plugin

# 07. Locator Strategies
https://playwright.dev/docs/locators



# 0. Creating Own Tests
naming convention: mytest.spec.ts