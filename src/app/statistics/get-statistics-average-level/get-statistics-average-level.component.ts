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
    this.sortByValue()
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
  
// tslint:disable-next-line: ban-types
 name2: String;
 // tslint:disable-next-line: ban-types
 value2: Number;
sortByName(){
    for(let j = 0; j < this.stats.length - 1 ; ++j) {
      for(let i = 0; i < this.stats.length - 1 ; ++i) {
        if(this.stats[i].name.toLowerCase() > this.stats[i + 1].name.toLowerCase()){
         this.name2 = this.stats[i].name;
         this.value2 = this.stats[i].value;
         this.stats[i].name = this.stats[i + 1].name;
         this.stats[i].value = this.stats[i + 1].value;
         this.stats[i + 1].name = this.name2;
         this.stats[i + 1].value = this.value2;
        }
       }
     }
  }
  sortByValue(){
    for(let j = 0; j < this.stats.length - 1 ; ++j) {
      for(let i = 0; i < this.stats.length - 1 ; ++i) {
        if(this.stats[i].value > this.stats[i + 1].value){
         this.name2 = this.stats[i].name;
         this.value2 = this.stats[i].value;
         this.stats[i].name = this.stats[i + 1].name;
         this.stats[i].value = this.stats[i + 1].value;
         this.stats[i + 1].name = this.name2;
         this.stats[i + 1].value = this.value2;
        }
       }
     }
  }

}
