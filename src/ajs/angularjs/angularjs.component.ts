import { angularjsModule } from "./angularjs.module";

class AngularjsCtrl {
  message: string;

  constructor() {
    this.message = 'Hello from AngularJS !';
  }
}

angularjsModule.
  component('angularjs', {
    template: require('./angularjs.html').default,
    controller: AngularjsCtrl,
  });
