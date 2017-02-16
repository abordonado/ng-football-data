import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

const BASE_URL = 'http://api.football-data.org/v1/teams';

@Injectable()
export class TeamService {

  constructor(
    private http: Http) { }


  //TODO: Remove default value
  getTeam(idTeam = 55){
    let options = this.configureHeaders();
    let url = `${BASE_URL}/${idTeam}`
    return this.http.get(url, options)
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
