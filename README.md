SOGETI TEST AUTOMATION FRAMEWORK PRACTICE

1. Prerequisites

Node.js 18 or newer (check with node --version). Download: https://nodejs.org
Git (check with git --version). Download: https://git-scm.com

2. Download the project

git clone https://github.com/priyanka-gautamqa/sogeti-test-automation.git
cd sogeti-test-automation

3. Install

npm ci
npx playwright install

4. Execute the test cases

4.1. Run all tests (headless):

    npx playwright test

4.2. Run with a visible browser:

    npx playwright test --headed --project=chromium

4.3. Run a single test file:

    npx playwright test tests/test-case-001.spec.ts --headed --project=chromium

4.4. View the report

    npx playwright show-report

