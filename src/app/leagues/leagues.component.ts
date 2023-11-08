import { Component, OnInit } from '@angular/core';
import { LeagueService } from './shared/services/leagues.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiStandingResponse } from './shared/models/standing.model';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  name : string = "";
  teams : string[] = [];
  leagues_map: Map<string, ApiStandingResponse> = new Map();

  constructor(private leagueService : LeagueService, private route: ActivatedRoute){
    
  }


  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.name = params["name"];

      this.leagueService.onGetLeagues(this.name);
      
      this.leagues_map = this.leagueService.getLeagueCache();
    });

    this.getValues();
  }

  ngOnChanges(){
    this.getValues();
  }

  getValues() {
    if(this.leagues_map.has(this.name)){
      const league = this.leagues_map.get(this.name)!;
      this.teams.push(this.name);
    }
  }

  ngOnDestroy(): void{
  }

}
