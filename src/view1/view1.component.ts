import angular from 'angular';
import './view1.css';

class View1Controller {
  message: string;

  constructor() {
    this.message = 'This is View 1';
  }
}

angular.
  module('view1', []).
  component('view1', {
    template: require('./view1.html').default,
    controller: View1Controller,
  });
