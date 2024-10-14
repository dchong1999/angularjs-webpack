import angular from 'angular';
import 'angular-route';

import './app.css';

import './view1/view1.module';
import './view1/view1.component';

import './view2/view2.module';
import './view2/view2.component';

import './view3/view3.module';
import './../angular/view3/view3.component';

class AppCtrl {
  message: string = '';
  constructor() {
    this.message = 'Hello from AngularJS !';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute', 'view1', 'view2', 'view3'])
  .component('app', {
    template: require('./app.html').default,
    controller: AppCtrl,
  })
  .config(['$routeProvider',
    function config($routeProvider: any) {
      $routeProvider.
        when('/angularJS', {
          template: '<app></app>'
        }).
        when('/view1', {
          template: '<view1></view1>'
        }).
        when('/view2', {
          template: '<view2></view2>'
        }).
        when('/view3', {
          template: '<view3></view3>'
        });
    }
  ]);


export default MODULE_NAME;