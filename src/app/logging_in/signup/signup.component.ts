import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      username: [''],
      password: [''],
      email:[""],
      name:[""],
      surname:[""]
    })
  }

  ngOnInit() { }

  registerUser() {
    this.authService.signUp(this.signupForm.value)
    .subscribe(
      (response) => {
        this.signupForm.reset()
        console.log('res result ok teraz powinien pojsc navigate')
        this.router.navigate(['log-in']);
      },
      (error) =>{
        this.signupForm.reset();
        this.router.navigate(['sign-up']);
      }
    )
  }
}