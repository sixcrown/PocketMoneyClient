import { Component, OnInit, Input } from '@angular/core';
import { NameFloatForTableDTO} from '../../entities/NameFloatForTableDTO'
import { HttpClient } from '@angular/common/http';
import {educationLevels} from '../../entities/educationLevels'
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'level',
  templateUrl: './get-statistics-average-level.component.html',
  styleUrls: ['./get-statistics-average-level.component.css']
})
export class GetStatisticsAverageLevelComponent implements OnInit {
  
  province: string
  stats:NameFloatForTableDTO[];
  readonly url = 'http://localhost:8080/api/getStatisticsAverage/'
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.province = this.route.snapshot.paramMap.get('name')
    console.log(this.province)
    this.getStatAverageForLevel();
    
  }
  getStatAverageForLevel()
  {
    this.http.get(this.url + this.province)
    .subscribe(
      (data:any)=>{
      this.stats=data;
      console.log(this.stats)
    })

    
  }
  

}
