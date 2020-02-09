import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { User } from '../../shared/user';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  signupForm: FormGroup;
  currentUser: User;
  readonly url = 'http://localhost:8080/api/editCurrentUser'
  click:boolean = true
  constructor(
    private http: HttpClient,
    public authService: AuthService,
    public fb: FormBuilder
  ) {
    this.authService.getUserProfile().subscribe(res => {
      console.log(res)
      this.currentUser = res;
    })
    this.signupForm = this.fb.group({
      password: ['']
    })
  }
  Click()
  {
    if(this.click) this.click = false
    else this.click = true
  }
  submit()
  {
    //this.currentUser.password = this.signupForm.password
    let user = this.currentUser
    user.password = this.signupForm.controls.password.value
    this.http.put(this.url,user).subscribe((data:any)=>{ 
      console.log(user.password)
      this.currentUser = user
      this.signupForm.reset() 
      this.click = true
    }, error => {
      this.click = false
      this.signupForm.reset()
      window.alert("Nie udalo sie zmienic hasla")
    });
  }
  ngOnInit() { }
}