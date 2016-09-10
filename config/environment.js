/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'modernweb',
    environment: environment,
    contentSecurityPolicy: {
      'style-src':   "'self' 'unsafe-inline'",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com http://gdata.youtube.com",
      'frame-src':   "'self' https://w.soundcloud.com https://www.youtube.com",
      'img-src':     "'self' http://img.youtube.com"
    },
    firebase: {
      apiKey: "AIzaSyBD8cyaIXvo7_ewQ7SDu8_CiqkW2z_hpwo",
      authDomain: "modern-web-5eb9f.firebaseapp.com",
      databaseURL: "https://modern-web-5eb9f.firebaseio.com",
      storageBucket: "",
    },
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
  }

  return ENV;
};
