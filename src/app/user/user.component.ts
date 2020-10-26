import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/User';
import { orderBy } from 'lodash';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public userForm:FormGroup;
lstUser:User[]=[];
hideWhenNoStudent :boolean;
p: number = 1;   
  constructor(public fb: FormBuilder) { 

  }

  ngOnInit(): void {
  this.hideWhenNoStudent=false;
    this.userFormInit();
  }

  userFormInit() {
    this.userForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]],
      lastName:  [null, [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]],
      city:  [null, [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: [null, [Validators.required,Validators.minLength(10),Validators.maxLength(10),
         Validators.pattern('^[0-9]+$')]]
    })  
  }

 
  get firstName() {

    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }  

  get city() {
    return this.userForm.get('city');
  }

  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }

  
  ResetForm() {
    this.userForm.reset();
  }  
 
  submituserData() {
    debugger
    this.lstUser.push(this.userForm.value);
  this.hideWhenNoStudent=true;
    this.ResetForm(); 
  this.lstUser=  orderBy(this.lstUser,'lastName','asc');
   };

}
