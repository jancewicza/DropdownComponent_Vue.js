const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browserConsoleLogOptions: {
            terminal: true,
            level: 'error'
        },

        client: {
            captureConsole: true
        },

        logLevel: config.LOG_ERROR,

        webpackMiddleware: {
            noInfo: true
        },

        colors: true,

        frameworks: ['jasmine'],

        files: ['tests/**/*.spec.js'],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        port: 9876,

        reporters: ['spec', 'progress'],

        browsers: ['Chrome_headless'],

        autoWatch: true,

        customLaunchers: {
            Chrome_headless: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222',
                    '--no-sandbox'
                ]
            }
        }
    })
};