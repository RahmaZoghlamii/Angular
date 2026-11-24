import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList implements OnInit {
  friends: string[] = [];
  newFriend: string = '';

  constructor() {}

  ngOnInit(): void {
    this.friends = ['Ahmed', 'Sarra', 'Mohamed'];
  }

  ajouter(): void {
    if (this.newFriend.trim() != '') {
      this.friends.push(this.newFriend.trim());
      this.newFriend = '';
    }
  }

  supprimer(index: number): void {
    this.friends.splice(index, 1);
  }
}
