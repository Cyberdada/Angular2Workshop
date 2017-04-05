
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: 'app/appswitch.component/appswitch.component.html',
  styleUrls: ['app/appswitch.component/appswitch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() label = 'switch';
  @Input('value') _value = false;
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  registerOnTouched(fn:any) { 
    this.onTouched = fn;
  }

  writeValue(value:any) {
    if (value) {
      this.value = value;
    }
  }

  switch() {
    this.value = !this.value;
  }
}


