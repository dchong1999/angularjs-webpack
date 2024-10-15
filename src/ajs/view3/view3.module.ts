import { downgradeComponent } from '@angular/upgrade/static';
import angular from 'angular';
import { View3Component } from '../../angular/view3/view3.component';

export const view3Module = angular.module('view3', ['ui.router'])
    .directive('view3', downgradeComponent({
        component: View3Component
    }))
  