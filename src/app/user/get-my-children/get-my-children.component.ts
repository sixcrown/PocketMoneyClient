import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service'
import {Children} from '../../entities/Children'
@Component({
  selector: 'app-get-my-children',
  templateUrl: './get-my-children.component.html',
  styleUrls: ['./get-my-children.component.css']
})
export class GetMyChildrenComponent implements OnInit {

  constructor(public authService: AuthService,private http: HttpClient) { }
  readonly url = 'http://localhost:8080/api/getMyChildren';
  Childrens:Children[]
  ngOnInit() {
    this.getMyChildren()
  }
  getMyChildren()
  {
    this.http.get(this.url).subscribe((data:any)=>{
      this.Childrens=data
      console.log(this.Childrens)
    });
  }

}
