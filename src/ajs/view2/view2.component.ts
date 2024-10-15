import { view2Module } from "./view2.module";

class View2Controller {
  message: string;

  constructor() {
    this.message = 'This is View 2 (AngularJS Module and Component).';
  }
}

view2Module.
  component('view2', {
    template: require('./view2.html').default,
    controller: View2Controller,
  });
