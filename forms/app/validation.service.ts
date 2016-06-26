//All validators must be static,otherwise this will not work. 
import {FormControl} from '@angular/forms';

export class ValidationService {
      
  static creditCardValidator(control: FormControl) {
         let CCARD_REGEXP = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return ValidationService.checkExp(control.value, CCARD_REGEXP, {'invalidCreditCard' : true });
    }

   static emailValidator(control: FormControl) {
        let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return ValidationService.checkExp(control.value, EMAIL_REGEXP, {'invalidEmailAddress' : true });
    }

  static  passwordValidator(control: FormControl) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        let PWD_REG_EXP = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
        return ValidationService.checkExp(control.value, PWD_REG_EXP, {'invalidPassword': true });
    }

  static   emptyOrEmailValidator(control:FormControl) {    
        if (control.value == '') {
            return null;
        } 
        else return ValidationService.emailValidator(control);
    }
    
           
   static checkExp(controlval: string, regexp: RegExp, prop: any) {
        return regexp.test(controlval) ? null : prop;
    }

   static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        return {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        }[validatorName];
    }
   
}