import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Observable} from "rxjs/Observable";


@Injectable()
export class ArtifactService {	
	
	constructor(private http:Http) {
	 console.log("artifact service is born");
	}
	
    getArtifacts() {return  this.http.get('http://adv1.azurewebsites.net/api/artifacts')
    .map((res:any) =>res.json());  }
  
   post(artifact:any):any  {
      console.log("saving artifact");
     return this.http.post('http://adv1.azurewebsites.net/api/artifacts', JSON.stringify(artifact), 
     		{headers: new Headers({'Content-Type':'application/json'})
     		}).map(res =>res.json());
     }

}