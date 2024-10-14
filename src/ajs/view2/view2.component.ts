import angular from 'angular';

class View2Controller {
  message: string;

  constructor() {
    this.message = 'This is View 2 (AngularJS Module and Component).';
  }
}

angular.
  module('view2', []).
  component('view2', {
    template: require('./view2.html').default,
    controller: View2Controller,
  });
