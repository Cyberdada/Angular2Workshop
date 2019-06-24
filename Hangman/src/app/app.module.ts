import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HangmanComponent } from './hangman.component';
import { WordService } from './word.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HangmanComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
