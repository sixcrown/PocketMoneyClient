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

  showDetails:boolean = false
  addChildrenClicker:boolean = false
  indexClicked:string
  childClicker:boolean = false
  constructor(public authService: AuthService,private http: HttpClient) { }
  readonly urlGetChildren = 'http://localhost:8080/api/getMyChildren';
  Childrens:Children[]
  ngOnInit() {
    this.getMyChildren()
  }
  getMyChildren()
  {
    this.http.get(this.urlGetChildren).subscribe((data:any)=>{
      this.Childrens=data
      console.log(this.Childrens)
    });
  }
  addChildrenClick()
  {
    if(this.addChildrenClicker) this.addChildrenClicker = false
    else this.addChildrenClicker=true
    this.getMyChildren()
  }
  ChildClick(id)
  {
    this.childClicker=true;
    console.log("UGABUGA");
    this.indexClicked = id
    console.log(this.indexClicked)
  }
  ChildDelete()
  {

  }
  submit()
  {

  }

}
