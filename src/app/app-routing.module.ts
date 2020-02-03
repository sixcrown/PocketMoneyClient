import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './logging_in/signin/signin.component';
import { SignupComponent } from './logging_in/signup/signup.component';
import { UserProfileComponent } from './logging_in/user-profile/user-profile.component';

import { AuthGuard } from "./shared/auth.guard";


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/sign-up', 
    pathMatch: 'full' },
  { 
    path: 'log-in',
    component: SigninComponent 
    },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }