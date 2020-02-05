import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service'
import {Children} from '../../entities/Children'
import { FormBuilder, FormGroup } from "@angular/forms";
import {administrationUnits} from '../../entities/administrationUnits'
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
  options =[]
  administrationUnit:administrationUnits[]

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
    this.getAdministrationUnits()
    this.sex = this.getSexs()
    this.signinForm.controls.sex.patchValue(this.sex[0].name)
    this.options = this.getOption();
    this.signinForm.controls.isLivingWithParents.patchValue(this.options[0].id)
   // this.signinForm.controls.administrationUnit.patchValue(this.administrationUnit.id)
    // of(this.getSex()).subscribe(sex => {
    //     this.sex = sex;
    //     this.signinForm.controls.orders.patchValue(this.sex[0].id);
    //   });
} 
  readonly urlGetChildren = 'http://localhost:8080/api/getMyChildren';
  readonly urlAddChild = 'http://localhost:8080/api/addChild';
  readonly ulrGetAdministrationUnits = 'http://localhost:8080/api/getAdministrationUnits'
  Childrens:Children[]
  ngOnInit() {
    this.getMyChildren()
    this.getAdministrationUnits();
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
    this.http.post(this.urlAddChild,this.signinForm.value).subscribe((data:any)=>{    
    (error)=>console.log(data)});
    this.getMyChildren()
  }
  getSexs() {
    return [
      { id: 'Mężczyzna', name: 'Mężczyzna' },
      { id: 'Kobieta', name: 'Kobieta' }
    ];
  }
  getOption()
  {
    return [
      { id: 'false', name: 'nie' },
      { id: 'true', name: 'tak' }]
  }
getAdministrationUnits()
{
  this.http.get(this.ulrGetAdministrationUnits).subscribe((data:any)=>{
    this.administrationUnit=data
    console.log(this.administrationUnit)
  });
}
  
}
