import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app';
import {ArtifactDetailComponent} from './artifactdetail.component';
import { ArtifactsComponent} from './artifacts.component';
import {ObserveComponent} from './observe.component';
import {SearchComponent} from './search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpModule ], 
  declarations: [AppComponent,ArtifactsComponent,
  ArtifactDetailComponent, ObserveComponent,SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
