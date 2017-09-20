import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	result: any;

	constructor(private _http: Http) { }

	getChampions() {
		return this._http.get("/api/riot/getChampions")
			.map(result => this.result = (result.json()).champions);
	}

	getSummoner(name) {
		return this._http.get("/api/riot/getSummoner/" + name)
			.map(result => {
				this.result = (result.json().data)
				return this.result
			});
	}

	getChampionStatic(id) {
		return this._http.get("/api/riot/champion/" + id + "/static")
		// .map(result => {
		//   this.result = ({data: result})
		// });
	}

	getChampionsStatic() {
		this.result = []
		return this._http.get("/api/riot/champions/static")
			.map((result) => {
				const champions = Object.values(result.json().data)
				champions.forEach((champion) => {
					this.result.push(champion);
				})
				return this.result
			});
	}

	//   /riot/getCurrentMatch/:summonerId
	getCurrentMatch(summonerId) {
		// console.log('query for ', summonerId)
		return this._http.get(`/api/riot/getCurrentMatch/${summonerId}`)
			.map((result) => {
				this.result = (result.json()).data
				return this.result
			});
	}

	getChampionMastery(summonerId, championId) {
		return this._http.get(
			`/api/riot/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}`
		).map((res) => {
			// console.log('masteries', res)
			this.result = (res.json())
			return this.result
		})
	}

	getRecentMatches(accountId) {
		return this._http.get(`/api/riot/matchlist/${accountId}/recent`)
			.map((res) => {
				console.log('matches', res)
				this.result = res.json()
				return this.result
			})
	}
}