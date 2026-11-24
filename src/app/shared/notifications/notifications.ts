import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit {
  messages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.messages = [
      'Bienvenue sur notre plateforme',
      'Nouvelle conférence disponible',
      'Les inscriptions sont ouvertes',
    ];
  }

  supprimer(index: number): void {
    this.messages.splice(index, 1);
  }

  toutSupprimer(): void {
    this.messages = [];
  }
}
