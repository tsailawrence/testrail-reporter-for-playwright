# testrail-reporter-for-playwright

**testrail-reporter-for-playwright** is an extension built upon the excellent work of the contributors to [playwright-testrail-reporter](https://github.com/niche-tester/playwright-testrail-reporter). It enhances certain areas, such as test result reporting, providing a more robust integration with TestRail. This custom reporter for Playwright Test seamlessly integrates with TestRail by automatically creating TestRail Runs and adding test results through matching test case IDs.

## Installation

```bash
npm install @testrail-reporter-for-playwright
```
## Prerequisites

To use TestRail Reporter, you will need to set up the following environment variables:

```
TESTRAIL_HOST: TestRail instance domain name e.g ```https://testrail.instance.io```
TESTRAIL_USERNAME: TestRail email 
TESTRAIL_PASSWORD: TestRail API key (Generate this or use an existing one from the 'My Settings' page on your TestRail instance)
TESTRAIL_PROJECT_ID: TestRail project ID where test runs and results will be added
TESTRAIL_SUITE_ID: The TestRail suite ID associated with the test cases
TESTRAIL_RUN_NAME: The name of the TestRail test run. (the execution time will be appended to this name on when created on TestRail)
````

Additionally, you may provide the TESTRAIL_RUN_ID environment variable to use an existing TestRail test run instead of creating a new one.

## Usage

1. Add the TestRailReporter instance to the reporters array in your Playwright Test configuration file ```playwright.config.ts```

*Example*:
```
const config: PlaywrightTestConfig = {
 reporter: [
    ["list"],
    ["testrail-reporter-for-playwright"]
   ]
  // ...
};

export default config;
````

2. In your test files, add TestRail test case IDs to the test case names using the following format: C12345. 

*Example:*

```
test("C12345: Login with valid credentials should succeed", async ({ page }) => {
    // ...
});
```

or if you need to pass multiple case ids:

```
test("C12345 C12346 C12347 Login with valid credentials should succeed", async ({ page }) => {
  // ...
});
```

4. When you execute your tests, you should see this output logs on your terminal:

```
[testrail-reporter-for-playwright]: No Existing 'TESTRAIL_RUN_ID' provided by user... 
[testrail-reporter-for-playwright]: Automatically creating a run... (If you did not provide a run ID)
[testrail-reporter-for-playwright]: New TestRail run has been created: https://<testrail-host>/index.php?/runs/view/<run-id>
[testrail-reporter-for-playwright]: Matched Test Case ID: 12345
[testrail-reporter-for-playwright]: Updating test status for the following TestRail Run ID: <run-id>
[testrail-reporter-for-playwright]: Updated test results for Test Run: https://<testrail-host>/index.php?/runs/view/<run-id>

```
5. Test Run and test case results should be updated

Note:
The default behaviour is to include all test cases in the automatically generate test run. If you prefer to select specific tests cases, then manually create the run on TestRail, select the relevant test cases and pass the run id to the ```TESTRAIL_RUN_ID``` environment variable

## License
This project is licensed under the [MIT License](/LICENSE)
