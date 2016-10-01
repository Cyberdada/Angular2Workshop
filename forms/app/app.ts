import {Component, OnInit} from '@angular/core';
import {BananaboxComponent} from './bananabox.component';



@Component({
  selector: 'my-app',
  template: `<div class="container">
               <h2 class="form-signin-heading">{{title}}</h2>
               <ul>
              <li *ngFor="let form of forms" (click)="onSelect(form)">
              <a href="#">{{form.name}}</a> 
              </li>
              </ul>
              <br /><br />
                 <my-form1 *ngIf="currentForm.id === 1"></my-form1>
                 <my-form2 *ngIf="currentForm.id === 2"></my-form2>
                 <my-form3 *ngIf="currentForm.id === 3"></my-form3>
                 <my-bananabox *ngIf="currentForm.id === 4"></my-bananabox>
                 <my-form4 *ngIf="currentForm.id === 5"></my-form4>
                 <my-form5 *ngIf="currentForm.id === 6"></my-form5>
            </div>
  `,
  styles: [`
    .xinvisible { display:none};
    li a {display:block; }
    li {float:left;padding: 8px; margin-right:10px;}
    ul {
    list-style-type: none;
}
  `]
})


export class AppComponent  {
  public title = 'Forms Galore!!!!';
 
  forms = [
    {name:"Simple Form", id: 1},
    {name:"Model Group", id: 2},
    {name:"Form with gravy", id: 3},
    {name:"[(Banana-box)]", id: 4},
    {name:"FormGroup", id: 5}, 
    {name:"Observing", id:6}];
  currentForm = this.forms[0];
 
  onSelect(itm:any){
    this.currentForm = itm;
  }

 
}


