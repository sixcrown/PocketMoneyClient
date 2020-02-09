import { Component, OnInit, Input } from '@angular/core';
import { NameFloatForTableDTO} from '../../entities/NameFloatForTableDTO'
import { HttpClient } from '@angular/common/http';
import {educationLevels} from '../../entities/educationLevels'

@Component({
  selector: 'app-get-statistics-average-level',
  templateUrl: './get-statistics-average-level.component.html',
  styleUrls: ['./get-statistics-average-level.component.css']
})
export class GetStatisticsAverageLevelComponent implements OnInit {
  @Input() province: string
  stats:NameFloatForTableDTO[];
  readonly url = 'http://localhost:8080/api/getStatisticsAverage'
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.stats= [];
    this.getStatAverageForLevel();
  }
  getStatAverageForLevel()
  {
    this.http.get(this.url)
    .subscribe(
      (data:any)=>{
      this.stats=data;
      console.log(this.stats)
    })
  }
  

}
