import { Component, OnInit } from '@angular/core';
import {FixtureService} from "../core/fixture.service";

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  private fixtures: any = [];

  constructor(
    private fixtureService: FixtureService) { }

  ngOnInit() {
    this.fixtures = [];
    this.fixtureService.getAllFixtures().subscribe(
      fixtures => this.fixtures = fixtures,
      error => console.log(error)
    );
  }

}
