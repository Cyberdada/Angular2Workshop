import {Component, OnInit} from '@angular/core';
import {FormGroup,FormBuilder,FormArray, FormControl,Validators} from '@angular/forms';
import { ControlMessages } from './control-messages.component';
import { ValidationService } from './validation.service';
import {EmailValidator} from './emailvalidator.directive';

@Component({
    selector: 'my-form6',
    templateUrl: 'app/form6.component.html',
styles: [
        `
        .ng-invalid { border-left:5px solid #f00;}
        .ng-valid[required] { border-left:5px solid #0f0;}
  `]
})


export class Form6Component implements OnInit {
    userForm:FormGroup;
    formdata : string  = "";
    
    constructor(private fb: FormBuilder) {}
        
    ngOnInit() {
        this.setForm();
    };
    
    setForm() {
        this.userForm = this.fb.group ({
           name:['',Validators.required],
           description: ['',Validators.nullValidator], 
           contact:this.fb.group({
               emails: this.fb.array([]),
               telephone: '',
               telephone2: ''
                })
        });
        this.addEmail();
    };

 get emails(): FormArray {
    return this.userForm.get('contact.emails') as FormArray;
  };
 
    onSubmit() {
        if (this.userForm.dirty && this.userForm.valid) {
            this.formdata = JSON.stringify(this.userForm.value);
            return false;
        }
    };

    addEmail()  {
        this.emails.push(this.fb.group({email: ['', Validators.required, EmailValidator]})) 
    };
}