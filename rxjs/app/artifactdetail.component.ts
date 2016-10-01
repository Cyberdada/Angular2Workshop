import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DungeonService} from './dungeon.service';
import {RoomService} from './room.service';
import {ArtifactService} from './artifact.service';


@Component({
	selector: 'my-artifact-detail',
	templateUrl: 'app/artifactdetail.component.html',
    providers: [DungeonService, RoomService, ArtifactService]
})

export class ArtifactDetailComponent implements OnInit {
	@Output() edit: EventEmitter<boolean> = new EventEmitter<boolean>();
	allRooms: any[];
	allDungeons: any[];
	allArtifacts:any[];
	myArtifact: {};
	hasDungeons = false;
	hasRooms = false;

	constructor(private dungeonService: DungeonService, 
				private roomService: RoomService, 
				private artifactService:ArtifactService) {}

	ngOnInit() {
		this.getDungeons();
		this.getRooms();
		this.myArtifact =  {name:"",type:"",dungeonId:"",roomId:""};
		this.allDungeons = new Array<any>();
		this.allRooms = new Array<any>();
		this.allArtifacts = new Array<any>();
	}



    saveArtifact() {
		this.artifactService.post(this.myArtifact).subscribe((res:any) =>  {
        console.log(res);
		this.edit.emit(false);
		});
	} 
	
	cancelSave() {this.edit.emit(false);}
	
	getDungeons() {
		this.dungeonService.getDungeon().subscribe((res: any) => {
			this.allDungeons = res;
			console.log("bing blong");
		});
	}

	getRooms() {
		this.roomService.getRooms().subscribe((res: any) => {
			this.allRooms = res;
			console.log("blong bling");
		});
	}
}