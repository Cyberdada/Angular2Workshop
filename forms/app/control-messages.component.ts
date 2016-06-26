import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector: 'control-messages',
    inputs: ['controlName: control'],
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {
    controlName: string;
    @Input() control: FormControl;
    constructor() { }

    get errorMessage() {
        //Control can sometimes be part of a nested controlgroup
        //therefore we need to do some searching before checking the errors
        //our convention being that a control within a control group 
        // will have dot notation  ie. controlgroup.control or controlgroup.controlgroup.control etc etc 

  //      let c:any = null;
  //      let ctrl = this.controlName.split(".");
  //      let grp = this._formDir.form;
  //      for(let i = 0; i < ctrl.length; i++) 
 //       {
  //         c = grp.find(ctrl[i]);
  //         grp = c;
  //      }        
        

         for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
    }
