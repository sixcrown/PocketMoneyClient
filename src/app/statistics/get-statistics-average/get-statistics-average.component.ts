import { Component, OnInit } from '@angular/core';
import { NameFloatForTableDTO} from '../../entities/NameFloatForTableDTO'
import { HttpClient } from '@angular/common/http';
import { Button } from 'protractor';

@Component({
  selector: 'app-get-statistics-average',
  templateUrl: './get-statistics-average.component.html',
  styleUrls: ['./get-statistics-average.component.css']
})
export class GetStatisticsAverageComponent implements OnInit {
  stats:NameFloatForTableDTO[];
  readonly url = 'http://localhost:8080/api/getStatisticsAverage/'
  constructor(private http: HttpClient) { }

  provinceName: string =""
  show: boolean

  ngOnInit() {
    this.stats= [];
    this.getStatAverageForCity();

  }
  getStatAverageForCity()
  {
    this.http.get(this.url)
    .subscribe(
      (data:any)=>{
      this.stats=data;
      console.log(this.stats)
      this.sortByName()
    })
  }

  getProvince(province:string) {
    this.provinceName = province
    console.log(this.provinceName)
    this.show=false
  }
 
 // tslint:disable-next-line: ban-types
 name2: String;
 bul1:boolean = true;
 bul2:boolean=true;
 // tslint:disable-next-line: ban-types
 value2: Number;
sortByName(){
  if(this.bul1==true)
  {
  this.bul1=false;
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
    else{
      this.bul1=true
      for(let j = 0; j < this.stats.length - 1 ; ++j) {
        for(let i = 0; i < this.stats.length - 1 ; ++i) {
          if(this.stats[i].name.toLowerCase() < this.stats[i + 1].name.toLowerCase()){
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
  sortByValue(){
    if(this.bul2==true)
    {this.bul2=false
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
    else
    {
      this.bul2=true
      for(let j = 0; j < this.stats.length - 1 ; ++j) {
        for(let i = 0; i < this.stats.length - 1 ; ++i) {
          if(this.stats[i].value < this.stats[i + 1].value){
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

}
