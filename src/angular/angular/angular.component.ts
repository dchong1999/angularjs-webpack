import { Component } from '@angular/core';

@Component({
  selector: 'angular',
  template: require('./angular.component.html').default,
})
export class AngularComponent {
  message = 'Hello from Angular !';
}
