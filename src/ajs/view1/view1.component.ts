import angular from 'angular';

class View1Controller {
  message: string;

  constructor() {
    this.message = 'This is View 1 (AngularJS Module and Component).';
  }
}

angular.
  module('view1', []).
  component('view1', {
    template: require('./view1.html').default,
    controller: View1Controller,
  });
