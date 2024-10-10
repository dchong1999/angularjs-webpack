import angular from 'angular';
import './view2.css';

View2Controller.$inject = ['$scope'];
function View2Controller($scope: any) {
  $scope.message = 'This is View 2';
}

angular.
  module('view2', []).
  component('view2', {
    template: require('./view2.html').default,
    controller: View2Controller,
  });
