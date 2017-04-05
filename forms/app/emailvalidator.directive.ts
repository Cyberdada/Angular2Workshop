
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

function validateEmailFactory() {
  return (c: FormControl) => {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  };
}


@Directive({
  selector: '[validateEmail]',
  providers: [
    { provide: NG_VALIDATORS, useExisting:  EmailValidator, multi: true }
  ]
})
export class EmailValidator implements Validator, OnChanges {

  validator: Function;

  constructor() {
    this.validator = validateEmailFactory();
  }
  private valFn = Validators.nullValidator;
  validate(c: AbstractControl):{[key: string]: any} {
    return this.validator(c);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['validateEmail'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      this.valFn = validateEmailFactory();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }
}





/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    const no = nameRe.test(name);
    return no ? {'forbiddenName': {name}} : null;
  };
}

@Directive({
  selector: '[forbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator, OnChanges {
  @Input() forbiddenName: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['forbiddenName'];
    if (change) {
      const val: string | RegExp = change.currentValue;
      const re = val instanceof RegExp ? val : new RegExp(val, 'i');
      this.valFn = forbiddenNameValidator(re);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}


