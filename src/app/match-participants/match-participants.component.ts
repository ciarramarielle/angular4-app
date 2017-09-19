import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'match-participants',
	templateUrl: './match-participants.component.html',
	styleUrls: ['./match-participants.component.css']
})
export class MatchParticipantsComponent implements OnInit {

	@Input() participants: any;
	constructor() { }

	ngOnInit() {
	}

}
