import { Component } from '@angular/core';
import { DATA } from './data-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   datas= DATA;

}
 