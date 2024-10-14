import angular from 'angular';

class AppCtrl {
  message: string;

  constructor() {
    this.message = 'Hello from AngularJS !';
  }
}

angular.
  module('app', []).
  component('app', {
    template: require('./app.html').default,
    controller: AppCtrl,
  });
