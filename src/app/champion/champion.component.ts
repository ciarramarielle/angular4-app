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
  imgUrl: string;

  // @Input() id: number;

  constructor(private _dataService: DataService) {
    // this.champion = {
    //   id: 1,
    //   name: ''
    // }
    this.imgUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'
  }    
  
  ngOnInit() {
    // if (this.champion.id < 10) {
    this.championStatic = this.champion
      // this.championStatic = this.champion
    // }
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
