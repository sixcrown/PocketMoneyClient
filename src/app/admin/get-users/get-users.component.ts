import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from '../../shared/user'
import { from } from 'rxjs';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users:User[]
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  readonly urlGetUsers = 'http://localhost:8080/api/getDefaultUsers';
  readonly urlDeleteUser = 'http://localhost:8080/api/deleteUser'
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.userGet()
  }
  userGet()
  {
    this.http.get(this.urlGetUsers).subscribe((data:any)=>
    {
      console.log(data)
      this.users = data;
    })
  }
  Userdelete(id)
  { 
      console.log(id)
      this.http.delete(this.urlDeleteUser + '/' + id, { headers: this.headers })
      .subscribe((res: any) =>
       {
        this.userGet()
       })
  
    
  }
}
