import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent
   // AppRoutingModule,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'log-in',
        component: SigninComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent
      },
      { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
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
