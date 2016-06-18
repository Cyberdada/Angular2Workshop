import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DungeonService} from './dungeon.service';
import {RoomService} from './room.service';
import {ArtifactService} from './artifact.service';


@Component({
	selector: 'my-artifacts',
	templateUrl: 'app/artifacts.component.html',
    providers: [DungeonService, RoomService, ArtifactService]
})

export class ArtifactsComponent implements OnInit {
	@Output() edit: EventEmitter<boolean> = new EventEmitter();
	allRooms: any[];
	allDungeons: any[];
	allArtifacts: any[];
	hasDungeons = false;
	hasRooms = false;

	constructor(private dungeonService: DungeonService,
		private roomService: RoomService,
		private artifactService: ArtifactService) { }

	ngOnInit() {
		this.getDungeons();
		this.getRooms();
	}



	newArtifact() {
		this.edit.emit(true);
	}

	getDungeons() {
		this.dungeonService.getDungeon().subscribe((res: any) => {
			this.allDungeons = res;
			console.log("bing blong");
			this.hasDungeons = true;
			this.getArtifacts();
		});

	}

	getRooms() {
		this.roomService.getRooms().subscribe((res: any) => {
			this.allRooms = res;
			console.log("blong bling");
			this.hasRooms = true;
			this.getArtifacts();
		});
	}

	getArtifacts() {
		if (this.hasDungeons && this.hasRooms) {
			this.artifactService.getArtifacts().subscribe((res: any) => {
				this.allArtifacts = res;



				this.allArtifacts.forEach(element => {
					let d = this.allDungeons.find((itm: any) => itm._id == element.dungeonId);
					element.dungeon = d.name;
					let r = this.allRooms.find((itm: any) => itm._id == element.roomId);
					element.room = r.name;
				});

			});
		}
	}
}