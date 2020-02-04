import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  currentUser: User;

  constructor(
    public authService: AuthService
  ) {
    this.authService.getUserProfile().subscribe(res => {
      console.log(res)
      this.currentUser = res;
    })
  }

  ngOnInit() { }
}