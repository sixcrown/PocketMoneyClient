import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';
//import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  money
  isLogged:boolean = false
  readonly url = 'http://localhost:8080/api/getAveragePocketMoney'
  constructor(private http: HttpClient,
    public authService: AuthService,
    //public router: Router, 
  ){}
  ngOnInit() {

    this.getAllAvaregePocketMoney();

  }
  getAllAvaregePocketMoney()
  {
    
    this.isLogged=this.authService.isLoggedIn
    this.http.get(this.url)
    .subscribe(
      (data:any)=>{
      this.money=data;
      console.log(data)
    })
    
  }
}
