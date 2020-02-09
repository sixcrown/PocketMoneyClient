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
    this.show = true
  }
  getStatAverageForCity()
  {
    this.http.get(this.url)
    .subscribe(
      (data:any)=>{
      this.stats=data;
      console.log(this.stats)
    })
  }

  getProvince(province:string) {
    this.provinceName = province
    console.log(this.provinceName)
    this.show=false
  }
 
}
