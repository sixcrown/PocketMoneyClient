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
  httpOptions? ={
    'Content-type': 'application/json',
  }
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router,
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/addUser`

    let body = JSON.stringify(user);
    console.log(body)
    // console.log(body)
    // this.http.post<any>(api, body).toPromise().then((data:any) =>{
    //   console.log(data)
    //   console.log(data.json.test)
    //   this.json = JSON.stringify(data.json)

    // });
    return this.http.post<any>(api, user)
      .pipe(
        catchError(this.handleError)
      )
      
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/authenticate`, user)
      .subscribe((res: any) => {
        //console.log("wchodzimy tutaj")
        localStorage.setItem('access_token', res.token)
        localStorage.token = Object.values(res)
        // this.getUserProfile(res._id).subscribe((res) => {
        //   this.currentUser = res;
        //   //this.router.navigate(['user-profile/' + res.msg._id]);
        // })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
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