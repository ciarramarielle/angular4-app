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

}
