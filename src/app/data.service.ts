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

}