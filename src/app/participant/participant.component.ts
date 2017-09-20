import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
	selector: 'participant',
	templateUrl: './participant.component.html',
	styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

	@Input() participant: any;
	mastery: number;

	constructor(private _dataService: DataService) { }
	
	ngOnInit() {
		if (this.participant) {
			console.log('Hello there: ', this.participant)
			this._dataService.getChampionMastery(this.participant.summonerId, this.participant.championId)
			.subscribe((res) => {
				console.log('jfkdlja', res)
				this.mastery = res.data.championLevel
			})
		}
	}

	getChampionImg(championId) {
		console.log("GET /static-data/v3/champions/{id} .name", championId);
		return 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9048205/DHNaX_FXsAIu_Fj.jpg';
		// return "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_1.jpg"
	}
}
