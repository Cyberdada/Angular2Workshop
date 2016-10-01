import 'rxjs/Rx';

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import { Http, Headers} from '@angular/http';
import {Component} from '@angular/core';
import {  AsyncPipe} from '@angular/common';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';

//import {PubSubService} from './project/current.project.evenEmitter';

@Component({

	selector: 'my-search',
	template: `
	  	    <div class="container-fluid">
        <div class="row somemarging">
        <div class="col-xs-4">
        <h4>Incremental searh via reddit API</h4>
        </div>
        <div class="col-xs-4">
			 <form #f="ngForm">
         <div class="input-group somemarging">
      <input type="text" class="form-control"  [formControl]="searchField" placeholder="Search..." aria-describedby="basic-x">
          <span class="input-group-addon" id="basic-x"><span class="glyphicon glyphicon-search"></span></span>
    </div>
	  </form>
    </div>
	<div class="col-xs-4"></div>
     </div>
	 	  <div class="row somemarging">
	  code stolen from :
	  <a href="https://www.youtube.com/watch?v=JPuqluYYa-o">
	  https://www.youtube.com/watch?v=JPuqluYYa-o
	  </a><br />
	  Based on  - Angular 2 Data Flow – Jeff Cross, Rob Wormald and Alex Rickabaugh
	  available here : <a href="https://www.youtube.com/watch?v=KOOT7BArVHQ">https://www.youtube.com/watch?v=KOOT7BArVHQ</a>
	  </div>
	 <div class="somemarging">
	 Results:
	 </div>
     <div class="box" *ngFor="let r of results | async">
     <small> {{r.title }} </small>
     <img *ngIf="r.url" [src]="r.url" />
     </div>

     </div>
	 `
	,
	styles: [`
	      .somemarging {margin-top:20px;}
		  .box {float:left;width:140px;height:140px;padding: 5px;}
`],

})

export class SearchComponent {
	searchForm: FormGroup;
	searchField: FormControl = new FormControl("");
	results: Observable<any[]>;

	constructor(private http: Http, fb: FormBuilder) {
		this.searchForm = fb.group({ "searchField": this.searchField });

		this.results = this.searchField.valueChanges
			.debounceTime(500)
			.flatMap((val: string) => {
				return this.searhRedditPics(val);
			});
	}

	searhRedditPics(search: string) {
		let baseUrl = "https://www.reddit.com/r/pics/search.json?restrict_sr=on&q=";
		return this.http.get(baseUrl + search)
			.map((res:any) => res.json())
			.map(this.translateRedditResults);
	}

	translateRedditResults(items: any) {
		let x = items.data.children;
		return x.map((item:any) => {
			if (item && item.data && item.data.thumbnail) {
				let thumb: string = item.data.thumbnail;
				if (thumb.startsWith("http")) {
					return { url: thumb };
				}
			}
			return { title: item.data.title };
		})
	}
}
