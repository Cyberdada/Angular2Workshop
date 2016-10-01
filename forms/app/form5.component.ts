import {Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ControlMessages } from './control-messages.component';
import { ValidationService } from './validation.service';


@Component({
    selector: 'my-form5',
    templateUrl: 'app/form5.component.html',
    styles: [
        `
        .ng-invalid { border-left:5px solid #f00;}
        .ng-valid[required] { border-left:5px solid #0f0;}
  `]
})


export class Form5Component implements OnInit {
    userForm: any;
    formdata: string = "";
    eventEmitterData: string = "";
    cgroupData: string = "";
    email1Data: string = "";

    constructor() { }

    ngOnInit() {
        this.setForm();
    }

    setForm() {
        this.userForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.nullValidator),
            contact: new FormGroup({
                email1: new FormControl('', [Validators.required, ValidationService.emailValidator]),
                email2: new FormControl('', ValidationService.emptyOrEmailValidator),
                telephone: new FormControl('', Validators.nullValidator),
                telephone2: new FormControl('', Validators.nullValidator)
            })
        })

        this.userForm.valueChanges.subscribe((value: string) => { this.eventEmitterData = JSON.stringify(value) });
        this.userForm.controls['contact'].valueChanges.subscribe((value: string) => { this.cgroupData = JSON.stringify(value) });
        this.userForm.controls['contact'].controls['email1'].valueChanges.subscribe((value: string) => { this.email1Data = JSON.stringify(value) });
    }

    onSubmit() {
        if (this.userForm.dirty && this.userForm.valid) {
            this.formdata = JSON.stringify(this.userForm.value);
            //   this.setForm();
            return false;
        }
    }
}