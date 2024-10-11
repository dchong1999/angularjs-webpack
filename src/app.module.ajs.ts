import angular from 'angular';
import 'angular-route';

import './app.css';

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

angular.module(MODULE_NAME, ['ngRoute'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(['$routeProvider',
    function config($routeProvider: any) {
      $routeProvider.
        when('/', {
          template: '<app></app>'
        }).
        otherwise('/');
    }
  ]);


export default MODULE_NAME;