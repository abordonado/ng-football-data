import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';

const BASE_URL = 'http://api.football-data.org/v1/competitions';

@Injectable()
export class CompetitionService {

  constructor(private http: Http) { }

  getAllCompetitions() {
    let options = this.configureHeaders();
    return this.http.get(BASE_URL, options)
      .map(response => response.json());
  }


  configureHeaders() {
    let headers = new Headers({
      'X-Auth-Token': localStorage['X-Auth-Token']
    });
    let options = new RequestOptions({ headers: headers })
    return options;
  }


  //TODO: Handle error

}
