import { view1Module } from './view1.module';

class View1Controller {
  message: string;

  constructor() {
    this.message = 'This is View 1 (AngularJS Module and Component).';
  }
}

view1Module.
  component('view1', {
    template: require('./view1.html').default,
    controller: View1Controller,
  });
