import { Component } from '@angular/core';

interface Conference {
  id: number;
  picture: string;
  title: string;
  date: string;
  address: string;
  availablePlaces: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  conferences: Conference[] = [
    {
      id: 1,
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      title: 'AI & Innovation 2026',
      date: '15/12/2026',
      address: 'Tunis, Tunisie',
      availablePlaces: 45,
    },
    {
      id: 2,
      picture: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      title: 'Cybersecurity Summit',
      date: '20/12/2026',
      address: 'Sousse, Tunisie',
      availablePlaces: 80,
    },
    {
      id: 3,
      picture: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
      title: 'Web Development Days',
      date: '10/01/2027',
      address: 'Sfax, Tunisie',
      availablePlaces: 25,
    },
  ];
}
