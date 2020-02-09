import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import {administrationUnits} from '../../entities/administrationUnits'
import {educationLevels} from '../../entities/educationLevels'
import {Children} from '../../entities/Children'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-edit-children',
  templateUrl: './edit-children.component.html',
  styleUrls: ['./edit-children.component.css']
})
export class EditChildrenComponent implements OnInit {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  signinForm: FormGroup;
  Childrens:Children[] = null
  id: number;
  sex = []
  options =[]
  selectedChildren: Children
  readonly urlGetChildren = 'http://localhost:8080/api/getMyChildren';
  readonly urlEditChildren = 'http://localhost:8080/api/editChild/';
  readonly ulrGetAdministrationUnits = 'http://localhost:8080/api/getAdministrationUnits'
  readonly urlGetEducationLevels = 'http://localhost:8080/api/getEducationLevels'
  administrationUnit:administrationUnits[]
  educationLevel:educationLevels[]
  constructor(private route: ActivatedRoute, private http: HttpClient,public fb: FormBuilder,public router: Router) 
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
      this.getEducationLevels()
      this.sex = this.getSexs()
      this.signinForm.controls.sex.patchValue(this.sex[0].name)
      this.options = this.getOption();
      
      this.signinForm.controls.isLivingWithParents.patchValue(this.options[0].id)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = +param.get('id');
      this.getMyChildren()
      
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
  });
}
getEducationLevels()
{
  this.http.get(this.urlGetEducationLevels).subscribe((data:any)=>{
    this.educationLevel = data;
  });
}
getMyChildren()
{
  this.http.get(this.urlGetChildren).subscribe((data:any)=>{
    this.Childrens=data
    this.selectChild()
    console.log(this.selectedChildren)
    this.signinForm.controls.pocketMoney.patchValue(this.selectedChildren.pocketMoney)
    this.signinForm.controls.description.patchValue(this.selectedChildren.description)
    this.signinForm.controls.sex.patchValue(this.selectedChildren.sex)
    this.signinForm.controls.isLivingWithParents.patchValue(this.selectedChildren.isLivingWithParents)
    this.signinForm.controls.administrationUnit.patchValue(this.selectedChildren.administrationUnit)
    this.signinForm.controls.educationLevel.patchValue(this.selectedChildren.educationLevel)
  });
}
selectChild()
{
  if(this.Childrens!==null)
  {
    for(let child of this.Childrens)
    {
      if(child.id == this.id) 
      {
        this.selectedChildren = child
      }
    }
  }
  }
  submit()
  {
    let tmp = JSON.parse(JSON.stringify(this.signinForm.value))
    console.log(tmp)
    this.http.put(this.urlEditChildren + this.id, tmp, {responseType: 'text'})
    .subscribe((res: any) =>
     {
      console.log(res)
      this.router.navigate(['myChildren'])
     }
     ,
     error=>{
       window.alert("Nie udala sie edycja dziecka")
     }
     )
  }


}
