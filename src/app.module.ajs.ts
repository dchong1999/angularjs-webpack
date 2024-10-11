import angular from 'angular';
import 'angular-route';

import './app.css';

import './ajs/view1/view1.module';
import './ajs/view1/view1.component';

import './ajs/view2/view2.module';
import './ajs/view2/view2.component';

import './ajs/view3/view3.module';
import './angular/view3/view3.component';

let app = () => {
  return {
    template: require('./app.html').default,
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  url: string = '';
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute', 'view1', 'view2', 'view3'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(['$routeProvider',
    function config($routeProvider: any) {
      $routeProvider.
        when('/', {
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
        }).
        otherwise('/');
    }
  ]);


export default MODULE_NAME;