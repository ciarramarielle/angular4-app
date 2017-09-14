import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Champion } from './champion'

@Component({
  selector: 'champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})

export class ChampionComponent implements OnInit {

  // champion: Champion;
  @Input() champion: Champion;
  championStatic: Champion;

  // @Input() id: number;

  constructor(private _dataService: DataService) {
    // this.champion = {
    //   id: 1,
    //   name: ''
    // }
  }    
  
  ngOnInit() {
    if (this.champion.freeToPlay) {
      // this._dataService.getChampionStatic(this.champion.id)
      // .subscribe(res => {
      //   // console.log('I got ', res.json())
      //   this.championStatic = res.json() || [{
      //     id: 'UOououoouou'
      //   }]
      //   console.log(this.championStatic)
      // }, (err) => {
      //   console.log('err', err);
      // });
      this.championStatic = this.champion
    }
    // if (this.champion.freeToPlay) {
    //   // console.log('I got here', this.champion)
    //   this._dataService.getChampionStatic(this.champion.id)
    //   .subscribe(res => {
    //     console.log('I got ', res.json())
    //     this.champion = res.json() || [{
    //       id: 'UOououoouou'
    //     }]
    //   }, (err) => {
    //     console.log('err', err);
    //   });
    // }
    // // console.log('Hello', this.champion)    
  }
}
