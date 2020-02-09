import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './logging_in/signin/signin.component';
import { SignupComponent } from './logging_in/signup/signup.component';
import { UserProfileComponent } from './logging_in/user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";
import { AuthAdminGuard} from "./shared/auth-admin.guard"
import { HomeComponent } from './homescreen/home/home.component';
//import { AddChildComponent } from './user/add-child/add-child.component';
import { GetMyChildrenComponent } from './user/get-my-children/get-my-children.component';
import {GetStatisticsAverageComponent} from './statistics/get-statistics-average/get-statistics-average.component';
import { GetChildrenComponent } from './admin/get-children/get-children.component';
import { GetUsersComponent } from './admin/get-users/get-users.component';
<<<<<<< HEAD
import { GetStatisticsAverageLevelComponent } from './statistics/get-statistics-average-level/get-statistics-average-level.component'
=======
import { EditChildrenComponent } from './user/edit-children/edit-children.component'
>>>>>>> 96b8b72c960717494a6d55f93567cb6aee0dd438

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    HomeComponent,
    GetMyChildrenComponent,
    UserProfileComponent,
    GetStatisticsAverageComponent,
    GetChildrenComponent,
    GetUsersComponent,
<<<<<<< HEAD
    GetStatisticsAverageLevelComponent
=======
    EditChildrenComponent
>>>>>>> 96b8b72c960717494a6d55f93567cb6aee0dd438
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'log-in',
        component: SigninComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent
      },
      { 
        path: 'user-profile', 
        component: UserProfileComponent, canActivate: [AuthGuard] 
      },
      {
        path: 'home',
        component: HomeComponent, canActivate :[AuthGuard]
      },
      {
      path: 'myChildren',
      component: GetMyChildrenComponent, canActivate:[AuthGuard]
      },
      {
      path: 'GetStatisticsAverage',
      component:GetStatisticsAverageComponent, canActivate:[AuthGuard]
      },
      {
        path: 'GetStatisticsAverageLevel',
        component:GetStatisticsAverageLevelComponent, canActivate:[AuthGuard]
      },
      {
        path: "getChildren",
        component:GetChildrenComponent, canActivate:[AuthAdminGuard]
      },
      {
        path: 'getUsers',
        component:GetUsersComponent, canActivate:[AuthAdminGuard]
      },
      {
        path: "editChildren/:id",
        component:EditChildrenComponent, canActivate:[AuthGuard]
      }
    ]),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
