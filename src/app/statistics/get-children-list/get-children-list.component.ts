import { Component, OnInit, Input } from '@angular/core';
import { Children} from '../../entities/Children'
import { HttpClient } from '@angular/common/http';
import {educationLevels} from '../../entities/educationLevels'
import {  Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-get-children-list',
  templateUrl: './get-children-list.component.html',
  styleUrls: ['./get-children-list.component.css']
})
export class GetChildrenListComponent implements OnInit {

  provinceName: string
  eduLevel: string
  stats:Children[];
  readonly url = 'http://localhost:8080/api/getStatisticsAverage/'
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.provinceName = this.route.snapshot.paramMap.get('province')
    this.eduLevel = this.route.snapshot.paramMap.get('name')
    console.log(this.provinceName)
    this.getStatAverageForLevel();
    
  }
  getStatAverageForLevel()
  {
    this.http.get(this.url + this.provinceName + '/' + this.eduLevel)
    .subscribe(
      (data:any)=>{
      this.stats=data;
      console.log(this.stats)
    })
}

}

  
  
  

