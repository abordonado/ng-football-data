import { Component, OnInit } from '@angular/core';
import {TeamService} from "../core/team.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  private team: any;

  constructor(
    private teamService: TeamService) { }

  ngOnInit() {
    this.team = {};
    this.teamService.getTeam().subscribe(
      team => this.team = team,
      error => console.log(error)
    );
  }

}
