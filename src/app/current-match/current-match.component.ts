import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
	selector: 'current-match',
	templateUrl: './current-match.component.html',
	styleUrls: ['./current-match.component.css']
})
export class CurrentMatchComponent implements OnInit {

	@Input() summonerId: string;
	hello: any;
	participants: any;

	constructor(private _dataService: DataService) { }

	ngOnInit() {
		if (this.summonerId) {
			console.log('I got a summoner', this.summonerId)
			this._dataService.getCurrentMatch(this.summonerId)
			.subscribe((res) => {
				console.log(res)
				this.hello = Object.keys(res)
				this.participants = res.participants
			}, (err) => {
				console.log(err)
			})
		}
	}

}
