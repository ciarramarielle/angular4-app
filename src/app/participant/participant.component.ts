import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'
import * as _ from 'underscore';

@Component({
	selector: 'participant',
	templateUrl: './participant.component.html',
	styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

	@Input() participant: any;
	mastery: number;
	matches: any;
	bestRole: any;

	constructor(private _dataService: DataService) { }
	
	ngOnInit() {
		if (this.participant) {
			// console.log('Hello there: ', this.participant)
			this._dataService.getChampionMastery(this.participant.summonerId, this.participant.championId)
			.subscribe((res) => {
				// console.log('jfkdlja', res)
				this.mastery = res.data.championLevel
			})

			// this.participants.forEach((p) => {
			this._dataService.getSummoner(this.participant.summonerId)
				.subscribe(res => {
					// this.summoner = res
					this._dataService.getRecentMatches(res.accountId)
					.subscribe((matches) => {
						console.log('participant', res.accountId)

						this.matches = matches.data.matches
						console.log('matches', this.matches)						
						// Group by win or loss


						const byRoles = _.groupBy(matches.data.matches, 'role')
						const maxRole = _.max(byRoles, (grouped) => {
							return grouped.length || 0
						})
						this.bestRole = maxRole[0]['role'] || null
						// console.log('roles', )
						
					})
				}, err => {
					console.log('Errr????', err)
				});
			// })
		}
	}

	getChampionImg(championId) {
		// console.log("GET /static-data/v3/champions/{id} .name", championId);
		return 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9048205/DHNaX_FXsAIu_Fj.jpg';
		// return "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_1.jpg"
	}
}
