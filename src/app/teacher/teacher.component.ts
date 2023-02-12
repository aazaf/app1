import {Component} from "@angular/core";

@Component({
  selector:'app-teacher',
  template:'<h1>Hello from Teacher {{name}}</h1>',
  styles:['h1{font-size: 50px; color: blue;}']
})
export class TeacherComponent{
  name='amal';
}
