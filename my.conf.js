// Karma configuration
// Generated on Tue Apr 01 2014 15:51:26 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    plugins: [
        'karma-chrome-launcher', //need this to register chrome as browser
        'karma-ng-scenario'//,    //needed if we use 'ng-scenario' as our framework below.
//        'karma-chai'
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //replace this with your workspace path
    //basePath: '/Users/mkam1/michelle_sbm_workspace/',


    proxies : {
        //'/' : 'http://localhost:3000/showroom_cms/content/component/core/cta.html'
        '/' : 'http://localhost:3000/'
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['jasmine', 'requirejs'],
      //frameworks: ['ng-scenario', 'chai'],
    frameworks: ['ng-scenario'],


    // list of files / patterns to load in the browser
    files: [
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/lib/assets/javascripts/harmony/assets/base/js/jquery-1.8.3.js',
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/lib/assets/javascripts/harmony/assets/base/js/jquery.lazyloading.js',
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/lib/assets/javascripts/harmony/assets/core/js/core.js',
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/lib/assets/javascripts/harmony/assets/core/js/video.js',
      //'/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/app/assets/javascripts/youtube.js',
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/lib/assets/javascripts/harmony/assets/standard/js/youtube.js',
//      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/test/js/karma/video/node_modules/chai/lib/chai.js',
      '/Users/mkam1/michelle_sbm_workspace/CMT/harmony_cms/dev/spec/dummy/test/js/karma/video/video.js'
//      {pattern: '../../../../../spec/dummy/app/assets/javascripts/youtube.js', included: false},
//      {pattern: '**/video/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
