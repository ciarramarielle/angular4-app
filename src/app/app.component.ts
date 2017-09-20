import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	champions: any;
	summoner: any;

	// Create an instance of the DataService through dependency injection
	constructor(private _dataService: DataService) {
		// this._dataService.getChampionsStatic()
		// 	.subscribe(res => {
		// 		this.champions = res
		// 	}, (err) => {
		// 		console.log('err', err);
		// 	});

		this._dataService.getSummoner('Dyrus')
			.subscribe(res => {
				this.summoner = res
			}, err => {
				console.log('Errr????', err)
			});
	}
}