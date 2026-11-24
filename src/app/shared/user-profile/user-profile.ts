import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  user: User = new User();
  modifier: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      id: 1,
      name: 'Rahma',
      email: 'rahma@example.com',
    };
  }

  change(): void {
    this.modifier = !this.modifier;
  }
}
