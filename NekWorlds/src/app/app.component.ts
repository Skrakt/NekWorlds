import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NekWorlds';
  static elHeight: number;
}

  // var el = document.querySelector('body');

  // var elHeight = 0;
  // elHeight += parseInt(window.getComputedStyle(el).getPropertyValue('height'));
