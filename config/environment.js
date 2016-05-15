/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'modernweb',
    environment: environment,
    contentSecurityPolicy: {
      'style-src':   "'self' 'unsafe-inline'",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com http://gdata.youtube.com",
      'frame-src':   "'self' https://w.soundcloud.com https://www.youtube.com",
      'img-src':     "'self' http://img.youtube.com",
      'script-src': "'self' https://www.youtube.com https://s.ytimg.com"
    },
    firebase: 'https://modern-web-site.firebaseio.com/',
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
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
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
