import { Component, OnInit } from '@angular/core';
import { CurrentUser } from './cuurent-user.model';

@Component({
  selector: 'app-root',
  template: `<div class="container">
      <h2 class="form-signin-heading">{{title}}</h2>
   <my-login (userLoggedIn)=updateUser($event) *ngIf="!user.isAuthed" [parent]='title'></my-login>
  	<div *ngIf="user.isAuthed" class="container-fluid"> 
    I know you, {{user.extId}} of course :)  </div>
   </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'Meanwhile in Anthonys galaxy...';
  appClass: string;
  loginClass: string;
  user: CurrentUser;


  ngOnInit() {
    this.user  = {isAuthed:false, extId:""}
   
    if (localStorage.getItem('user') != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  updateUser(user: CurrentUser) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(this.user));
  }
}