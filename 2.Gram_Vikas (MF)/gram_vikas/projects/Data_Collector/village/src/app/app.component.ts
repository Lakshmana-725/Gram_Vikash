import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  interpolation: [`{[`, `]}`]
})
export class VillagesComponent {
  title = 'Village';
}
