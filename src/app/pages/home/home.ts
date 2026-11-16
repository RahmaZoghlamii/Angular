import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string;
  state: boolean;

  constructor() {
    this.title = 'home_4das_10';
    this.state = false;
  }

  change() {
    this.title = 'Titre modifié avec succès !';
    this.state = true;
  }
}
