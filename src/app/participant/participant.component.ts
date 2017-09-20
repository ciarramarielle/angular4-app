import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'participant',
	templateUrl: './participant.component.html',
	styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

	@Input() participant: any;
	constructor() { }

	ngOnInit() {
		console.log('Hello there: ', this.participant)
	}

	getChampionImg(championId) {
		console.log("GET /static-data/v3/champions/{id} .name", championId);
		return 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9048205/DHNaX_FXsAIu_Fj.jpg';
		// return "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_1.jpg"
	}
}
