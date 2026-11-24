import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListConf } from '../list-conf/list-conf';
import { conferences } from '../../model/conference';
import { UserProfile } from '../../shared/user-profile/user-profile';
import { FriendsList } from '../../shared/friends-list/friends-list';
import { Notifications } from '../../shared/notifications/notifications';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, ListConf, UserProfile, FriendsList, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Liste des conférences
  list: conferences[] = [];

  // Recherche par titre
  searchtitle: string = '';

  // Variables de la page Home
  title: string = 'home_4das_10';
  state: boolean = false;

  constructor() {}

  // Initialisation des conférences
  ngOnInit(): void {
    this.list = [
      {
        title: 'conference angular',
        description: 'web dev conference',
        date: '2026-08-12',
        nbmax: 20,
        nbReservation: 19,
        picture:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      },
      {
        title: 'conference Java',
        description: 'Spring Boot conference',
        date: '2026-09-15',
        nbmax: 30,
        nbReservation: 10,
        picture: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      },
      {
        title: 'conference Python',
        description: 'Python programming conference',
        date: '2026-10-20',
        nbmax: 25,
        nbReservation: 25,
        picture:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
    ];
  }

  // Modifier le titre et désactiver le bouton
  change(): void {
    this.title = 'Titre modifié avec succès !';
    this.state = true;
  }

  // Inscription à une conférence
  participate(conf: conferences): void {
    if (conf.nbReservation < conf.nbmax) {
      conf.nbReservation++;
    }
  }

  // Filtrer les conférences par titre
  get filteredConferences(): conferences[] {
    return this.list.filter((conf) =>
      conf.title.toLowerCase().includes(this.searchtitle.trim().toLowerCase()),
    );
  }
}
