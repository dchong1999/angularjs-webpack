import { Component } from '@angular/core';
import './view3.component.css';

@Component({
  selector: 'view3',
  template: require('./view3.component.html').default,
})
export class View3Component {
  message = 'This is View 3';
}
