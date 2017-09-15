import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {

  @Input() champions: any;
  constructor() {
    // console.log('Got champions', this.champions)    
  }

  ngOnInit() {
  }


  logStuff(item) {
    console.log('Logged', item)
  }

  performSearch(searchTerm: HTMLInputElement) {
    console.log('performSearch on: ', `${searchTerm.value}`)
  }
}
