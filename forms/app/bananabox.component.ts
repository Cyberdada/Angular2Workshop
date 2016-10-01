import {Component } from '@angular/core';
import {BananaBox, SmallStuff} from './bananabox.model';


@Component({
    selector: 'my-bananabox',
    templateUrl: 'app/bananabox.component.html'

})


export class BananaboxComponent {
    model: BananaBox;
    formdata: string = "";
   
    onSubmit(v: any) {
        this.formdata = JSON.stringify(v);
       // this.bananastring = JSON.stringify(this.model);
    }

    constructor() {
        this.model = new BananaBox("bongo", "bongo bongo bongo", new SmallStuff("nr1", "nr2", "nr3"));
    }
    
    get bananastring() { return JSON.stringify(this.model); }

}