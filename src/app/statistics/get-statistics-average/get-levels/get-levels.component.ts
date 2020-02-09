import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-levels',
  templateUrl: './get-levels.component.html',
  styleUrls: ['./get-levels.component.css']
})
export class GetLevelsComponent implements OnInit {

  @Input() x
  constructor() { }

  ngOnInit() {
  }

}
