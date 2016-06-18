import {Component} from '@angular/core';


@Component({
    selector: 'my-form3',
    templateUrl: 'app/form3.component.html', 
styles: [
        `
        .ng-invalid { border-left:5px solid #f00;}
        .ng-valid[required] { border-left:5px solid #0f0;}
  `]
})


export class Form3Component {
 formdata : string  = "";
 namer:string ="the name";
    onSubmit(v:any) {
        this.formdata = JSON.stringify(v);
        return false;
    }
}