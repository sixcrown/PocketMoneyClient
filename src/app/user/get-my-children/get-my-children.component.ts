import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service'
import {Children} from '../../entities/Children'
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-get-my-children',
  templateUrl: './get-my-children.component.html',
  styleUrls: ['./get-my-children.component.css']
})
export class GetMyChildrenComponent implements OnInit {
  signinForm: FormGroup;
  showDetails:boolean = false
  addChildrenClicker:boolean = false
  indexClicked:string
  childClicker:boolean = false
  sex = []
  constructor(public authService: AuthService,private http: HttpClient,    public fb: FormBuilder,) 
{    
    this.signinForm = this.fb.group(
      {
    pocketMoney: [''],
    description:[''],
    sex:[''],
    isLivingWithParents:false,
    administrationUnit:[''],
    educationLevel:['']
      })
    this.sex = this.getSexs()
    this.signinForm.controls.sex.patchValue(this.sex[0].id)
    // of(this.getSex()).subscribe(sex => {
    //     this.sex = sex;
    //     this.signinForm.controls.orders.patchValue(this.sex[0].id);
    //   });
}
  readonly urlGetChildren = 'http://localhost:8080/api/getMyChildren';
  readonly urlAddChild = 'http://localhost:8080/api/addChild';
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
  submitNewKid()
  {
    this.addChildrenClicker = false;
    //console.log(this.signinForm.value)
    //console.log(this.signinForm.get('isLivingWithParents'));
    this.http.post(this.urlAddChild,this.signinForm.value).subscribe((data:any)=>{
    (error)=>console.log(error)});
  }
  getSexs() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }

  
}
