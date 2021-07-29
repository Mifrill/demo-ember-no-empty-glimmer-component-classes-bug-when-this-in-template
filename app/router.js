import EmberRouter from '@ember/routing/router';
import config from 'demo-ember-no-empty-glimmer-component-classes-bug-when-this-in-template/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
