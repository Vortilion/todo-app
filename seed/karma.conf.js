// Karma configuration
// Generated on Tue Aug 14 2018 14:16:09 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'js/libs/angular.js',
            'tests/angular-mocks.js',
            'js/**/*.js',
            'tests/*.spec.js'
        ],
        exclude: [],
        plugins: [
            require('karma-chrome-launcher'),
            require('karma-jasmine'),
            require('karma-spec-reporter')
        ],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    });
};
