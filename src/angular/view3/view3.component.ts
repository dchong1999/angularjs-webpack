import { Component } from '@angular/core';

@Component({
  selector: 'view3',
  template: require('./view3.component.html').default,
})
export class View3Component {
  message = 'This is View 3 (AngularJS Module and Angular Component).';
}
