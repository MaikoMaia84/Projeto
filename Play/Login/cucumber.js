module.exports = {
  default: {
    require: [
      './steps/*.js',
      './support/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    paths: ['/features/*feature'],
    publishQuiet: true
  }
};
