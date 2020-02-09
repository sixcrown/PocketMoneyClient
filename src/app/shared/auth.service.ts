import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  json;
  endpoint: string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser:User;

  constructor(
    private http: HttpClient,
    public router: Router,
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/addUser`
    return this.http.post<any>(api, user)
      .pipe(
        catchError(this.handleError)
      )
      
  }

  // Sign-in
  signIn(user: User){
    this.http.post<any>(`${this.endpoint}/authenticate`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        localStorage.token = Object.values(res)
        if(this.getToken()!==null){
          console.log("udalo sie zalogowac")
          let api = `${this.endpoint}/currentUser`;
          this.http.get(api, { headers: this.headers }).subscribe((data: any)=>{
            this.currentUser = data;
            if(this.currentUser.userGroup =='ADMIN') 
            {
              console.log('ustawiamy admina')
              localStorage.setItem('ADMIN', res.ADMIN)
            }
          }
          );
            this.router.navigate(['home'])}
      },error=>
      {
        window.alert('Nie udalo sie zalogowac')
      })

  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  getAdmin() {
    return localStorage.getItem('ADMIN');
  }
  getUserGroup()
  {
    return localStorage.getItem('user_group')
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  get isAdminLogged(): boolean {
    let authToken = localStorage.getItem('access_token');
    let admin = localStorage.getItem('ADMIN');
    return (authToken !== null&&admin!==null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    localStorage.removeItem('ADMIN')
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(): Observable<any> {
    let api = `${this.endpoint}/currentUser`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log("error u mnie")
      msg = error.error.message;
    } else {
      // server-side error
      console.log("error z serwera")
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}