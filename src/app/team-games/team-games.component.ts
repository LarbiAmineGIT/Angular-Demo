import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../leagues/shared/services/leagues.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiFixtureResponse } from '../leagues/shared/models/fixture.model';

@Component({
  selector: 'app-team-games',
  templateUrl: './team-games.component.html',
  styleUrls: ['./team-games.component.css']
})
export class TeamGamesComponent implements OnInit{

  team_id : string = "";
  games_map : Map<string, ApiFixtureResponse> = new Map();
  return_value : string ="";

  constructor(private leagueService : LeagueService, private route: ActivatedRoute){}
  

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.team_id = params["teamID"];
      this.return_value = params["name"];
      this.leagueService.getTeamGames(this.team_id);
      
      this.games_map = this.leagueService.getTeamCache();
      });
  }

}
