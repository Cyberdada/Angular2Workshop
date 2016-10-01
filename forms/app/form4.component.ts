import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { ControlMessages } from './control-messages.component';
import { ValidationService } from './validation.service';

@Component({
    selector: 'my-form4',
    templateUrl: 'app/form4.component.html',
styles: [
        `
        .ng-invalid { border-left:5px solid #f00;}
        .ng-valid[required] { border-left:5px solid #0f0;}
  `]
})


export class Form4Component implements OnInit {
    userForm:FormGroup;
    formdata : string  = "";
    
    constructor() {}
        
    ngOnInit() {
        this.setForm();
    }
    
    setForm() {
        
        this.userForm =new FormGroup({
             name: new FormControl('', Validators.required),
             description: new FormControl('', Validators.nullValidator),
            contact: new FormGroup ({
                email1 : new FormControl('', [Validators.required, ValidationService.emailValidator]), 
                email2 : new FormControl('', ValidationService.emptyOrEmailValidator), 
                telephone : new FormControl ('', Validators.nullValidator), 
                telephone2 : new FormControl ('', Validators.nullValidator)       
            }) 
        })
        
        
    }
 
    onSubmit() {
        if (this.userForm.dirty && this.userForm.valid) {
            this.formdata = JSON.stringify(this.userForm.value);
            return false;
        }
    }
}