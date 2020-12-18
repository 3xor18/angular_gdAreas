import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    'usuario1',
    'usuario2',
    'usuario3',
    'usuario4',
    'usuario5',
    'usuario6',
    'usuario7',
    'usuario8',
    'usuario9',
    'usuario10',
  ];
  title = 'responsiveApp';
}
