const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App": "Automation Practice",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": "Windows 10",
    "Executed": "Local"
  }
};

reporter.generate(options);
