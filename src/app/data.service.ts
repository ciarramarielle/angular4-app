import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

    getUsers() {
      return this._http.get("/api/ciarra")
        .map(result => {
          console.log('Helloe', result.json());
          this.result = result.json()}
        );
      
    }
  // }

}
