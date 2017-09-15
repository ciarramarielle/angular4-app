import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getChampions() {
    return this._http.get("/api/riot/getChampions")
      .map(result => this.result = (result.json()).champions);
  }

  getChampionStatic(id) {
    return this._http.get("/api/riot/champion/"+id+"/static")
      // .map(result => {
      //   console.log(result.json())
      //   this.result = ({data: result})
      // });
  }

  getChampionsStatic() {
    this.result = []
    return this._http.get("/api/riot/champions/static")
    // .then((data) => {})
    .map((result) => {
      // console.log('rtreter', result.json().data)
      // const champions = (result.json().data).json()
      const champions = Object.values(result.json().data)
      champions.forEach((champion) => {
        // console.log('champ', champion)
        this.result.push(champion);
      })
      return this.result
    });    
      // .map(result => {
      //   console.log(result.json())
      //   this.result = ({data: result})
      // });
  }

}