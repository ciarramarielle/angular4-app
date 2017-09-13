import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  champion: any;
  constructor(private _dataService: DataService) {
  
  }    
  
  ngOnInit() {
    this._dataService.getChampionStatic("266")
    .subscribe(res => {
      console.log('I got ', res.json())
      this.champion = res.json().name || [{
        id: 'UOououoouou'
      }]
    }, (err) => {
      console.log('err', err);
    });
  }

}
