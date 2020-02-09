import { Component, OnInit } from '@angular/core';
import {Children} from '../../entities/Children'
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-get-children',
  templateUrl: './get-children.component.html',
  styleUrls: ['./get-children.component.css']
})
export class GetChildrenComponent implements OnInit {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  Childrens:Children[]
  readonly urlGetChildren = 'http://localhost:8080/api/getAllChildren';
  readonly urlDeleteChild = 'http://localhost:8080/api/deleteChild';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMyChildren()
  }
  getMyChildren()
  {
    this.http.get(this.urlGetChildren).subscribe((data:any)=>{
      this.Childrens=data
    });
  }
  ChildDelete(id)
  {
    console.log(id)
    this.http.delete(this.urlDeleteChild + '/' + id, { headers: this.headers })
    .subscribe((res: any) =>
     {
      this.getMyChildren()
     })

  }
}
