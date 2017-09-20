import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'
import * as _ from 'underscore';

@Component({
	selector: 'current-match',
	templateUrl: './current-match.component.html',
	styleUrls: ['./current-match.component.css']
})
export class CurrentMatchComponent implements OnInit {

	@Input() summonerId: string;
	currentMatch: any;
	participants: any;
	summonerTeamParticipants: any;
	enemyTeamParticipants: any;

	constructor(private _dataService: DataService) { }

	ngOnInit() {
		if (this.summonerId) {
			this._dataService.getCurrentMatch(this.summonerId)
				.subscribe((res) => {
					this.currentMatch = res
					this.participants = res.participants

					let summonerParticipantData = _.findWhere(this.participants, {
						summonerId: this.summonerId
					})

					const summonerTeamId = summonerParticipantData['teamId']
					// Separate into teams
					this.summonerTeamParticipants = _.filter(this.participants, (participant) => {
						return participant['teamId'] === summonerTeamId
					})

					this.enemyTeamParticipants = _.filter(this.participants, (participant) => {
						return participant['teamId'] != summonerTeamId
					})
				}, (err) => {
					console.log(err)
				})
		}
	}
}
