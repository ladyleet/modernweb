import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('modern-web-ui');
  this.route('modern-web-podcast');
  this.route('beginners');
  this.route('welcome');
  this.route('friends');
  this.route('signup-page');
  this.route('sign-up', function() {
    this.route('new');
  });
  this.route('about');
  this.route('signup');
  this.route('games');
  this.route('game', { path: '/games/:game_id' });
});

export default Router;
