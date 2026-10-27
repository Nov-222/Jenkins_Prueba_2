export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-infobars',
                '--disable-extensions',
                '--start-maximized',
                '--disable-blink-features=AutomationControlled',
                '--headless'
            ]
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    cucumberOpts: {
        require: ['./features/step_definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterScenario: async function (world, result) {
        if (result.passed === false) {
            await browser.takeScreenshot();
        }
    }
};