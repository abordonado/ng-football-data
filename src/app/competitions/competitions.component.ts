import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../core/competition.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  private competitions: any = [];

  constructor(
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competitions = [];
    this.competitionService.getAllCompetitions().subscribe(
      competitions => this.competitions = competitions,
      error => console.log(error)
    );
  }

}
