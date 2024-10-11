import angular from 'angular';
import './view2.css';

class View2Controller {
  message: string;

  constructor() {
    this.message = 'This is View 2';
  }
}

angular.
  module('view2', []).
  component('view2', {
    template: require('./view2.html').default,
    controller: View2Controller,
  });
