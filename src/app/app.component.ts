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

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    // this._dataService.getChampions()
    // .subscribe(res => {
    //   console.log('Get all the champions ', res)
    //   this.champions = res || [{
    //     id: 'UOououoouou'
    //   }]
    // }, (err) => {
    //   console.log('err', err);
    // });

    this._dataService.getChampionsStatic()
      .subscribe(res => {
        // console.log('res is ', res)
        this.champions = res
        // this.champions = res || [{
        //   id: 'UOououoouou'
        // }]
      }, (err) => {
        console.log('err', err);
      });
  }
}