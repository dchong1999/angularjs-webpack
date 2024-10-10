import angular from 'angular';
import './view1.css';

View1Controller.$inject = ['$scope'];
function View1Controller($scope: any) {
  $scope.message = 'This is View 1';
}

angular.
  module('view1', []).
  component('view1', {
    template: require('./view1.html').default,
    controller: View1Controller,
  });
