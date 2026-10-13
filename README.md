# SOGETI TEST AUTOMATION FRAMEWORK PRACTICE

## 1. Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js 18 or newer. Check with: `node --version`
- Git. Check with: `git --version`

Download links:

- https://nodejs.org
- https://git-scm.com

## 2. Download the project

```bash
git clone https://github.com/priyanka-gautamqa/sogeti-test-automation.git
cd sogeti-test-automation
```

## 3. Install dependencies

```bash
npm ci
npx playwright install
```

## 4. Execute the test cases

### 4.1 Run all tests (headless)

```bash
npx playwright test
```

### 4.2 Run with a visible browser

```bash
npx playwright test --headed --project=chromium
```

### 4.3 Run a single test file

```bash
npx playwright test tests/test-case-001.spec.ts --headed --project=chromium
```

### 4.4 View the report

```bash
npx playwright show-report
```

### Multilingual Support

The current test cases are implemented using the English version of the website.

To support multiple languages in the future, the framework can be extended by:

- Ask developers to add language-independent test IDs (e.g., `data-testid`)
- Use centralized translation files : This is useful when you want to verify the actual localized content rather than simply locate an element.
- Combination of the above suggested methods

This approach would improve reusability and maintainability without duplicating test logic.