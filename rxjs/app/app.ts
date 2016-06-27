import 'rxjs/Rx';

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import { AsyncPipe} from '@angular/common';
import {Http, Headers} from '@angular/http';

import {ObserveComponent} from './observe.component';
import {SearchComponent} from './search.component';

import {ArtifactsComponent} from './artifacts.component';
import {ArtifactDetailComponent} from './artifactdetail.component';

@Component({
	pipes: [AsyncPipe],
	selector: 'my-app',
	providers: [], 
	directives:[ObserveComponent, SearchComponent, ArtifactsComponent, ArtifactDetailComponent], 
	template: `
	  	    <div class="container-fluid">
      <my-observer></my-observer><hr>
	  <my-artifacts *ngIf="!isAddingNewProject"  (edit)="switchMode($event)"></my-artifacts>
	  <my-artifact-detail  *ngIf="isAddingNewProject" (edit)="switchMode($event)"></my-artifact-detail>
	  <my-search></my-search><hr>
     </div>
	 `,
	
})


export class AppComponent {
	isAddingNewProject: boolean;

	constructor() {
		this.isAddingNewProject = false;
	}

	switchMode(mode: boolean) {
		this.isAddingNewProject = mode;
	}

}


