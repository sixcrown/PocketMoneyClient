import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service'
import {Children} from '../../entities/Children'
import { FormBuilder, FormGroup } from "@angular/forms";
import {administrationUnits} from '../../entities/administrationUnits'
import {educationLevels} from '../../entities/educationLevels'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {AuthInterceptor} from '../../shared/authconfig.interceptor'
@Component({
  selector: 'app-get-my-children',
  templateUrl: './get-my-children.component.html',
  styleUrls: ['./get-my-children.component.css']
})

export class GetMyChildrenComponent implements OnInit {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  signinForm: FormGroup;
  showDetails:boolean = false
  addChildrenClicker:boolean = false
  indexClicked:string
  childClicker:boolean = false
  sex = []
  options =[]
  administrationUnit:administrationUnits[]
  educationLevel:educationLevels[]
  selectedChildren: Children
 

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
} 
  readonly urlGetChildren = 'http://localhost:8080/api/getMyChildren';
  readonly urlAddChild = 'http://localhost:8080/api/addChild';
  readonly ulrGetAdministrationUnits = 'http://localhost:8080/api/getAdministrationUnits'
  readonly urlGetEducationLevels = 'http://localhost:8080/api/getEducationLevels'
  readonly urlDeleteChild = 'http://localhost:8080/api/deleteChild'
  Childrens:Children[]
  ngOnInit() {
    this.getMyChildren()
    this.getAdministrationUnits();
    this.getEducationLevels();
    this.signinForm.controls.administrationUnit.patchValue('dolnoslaskie')
    this.signinForm.controls.educationLevel.patchValue('Podstawowka')
  }
  getMyChildren()
  {
    this.http.get(this.urlGetChildren).subscribe((data:any)=>{
      this.Childrens=data
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
  ChildDelete(id)
  {
    console.log(id)
    this.http.delete(this.urlDeleteChild + '/' + id, { headers: this.headers })
    .subscribe((res: any) =>
     {
      this.getMyChildren()
     })

  }
  onSelect(Children:Children)
  {
    this.selectedChildren = Children;
  }
  submitNewKid()//:Observable<any>
  {
    this.addChildrenClicker = false;
    this.http.post(this.urlAddChild,this.signinForm.value).subscribe((data:any)=>{    
    this.getMyChildren()
    }, error => {
      window.alert("Nie udalo sie dodac dziecka")
    });

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
getEducationLevels()
{
  this.http.get(this.urlGetEducationLevels).subscribe((data:any)=>{
    this.educationLevel = data;
  });
}
  
}
