import angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

import './app.css';
import { angularJSState, view1State, view2State, view3State } from './app.states';

import { angularjsModule } from './angularjs/angularjs.module';
import { view1Module } from './view1/view1.module';
import { view2Module } from './view2/view2.module';
import { view3Module } from './view3/view3.module';
import './angularjs/angularjs.component';
import './view1/view1.component';
import './view2/view2.component';
import './../angular/view3/view3.component';

export const appJSModule = angular
  .module('app', [uiRouter, upgradeModule.name, angularjsModule.name, view1Module.name, view2Module.name, view3Module.name])
  .config(['$stateProvider', ($stateProvider: any) => {
    $stateProvider.state(angularJSState);
    $stateProvider.state(view1State);
    $stateProvider.state(view2State);
    $stateProvider.state(view3State);
  }])
  .config(['$urlRouterProvider', ($urlRouterProvider: any) => {
    $urlRouterProvider.otherwise("/angularjs");
  }]);
