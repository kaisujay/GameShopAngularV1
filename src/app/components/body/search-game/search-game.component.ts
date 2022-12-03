import { Component, OnInit } from '@angular/core';
import { game } from 'src/app/models/game.models';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {

  games:game[]=[];
  searchRoute:string;
  
  constructor(private gameData: GameServiceService) { }

  ngOnInit(): void {        
  }

  getSearchedGames(value:string){    
    // this.router.navigate(['/Games',value]);
    // this.searchRoute=this.route.snapshot.paramMap.get('searchRoute')!;
        
    this.searchRoute=value!;
    if(this.searchRoute.length > 0){
      this.gameData.getGamesByName(this.searchRoute).subscribe((data)=>
      {
        this.games=data;
        //console.warn(this.games);
        
      });
    }
    else{
      this.gameData.getGames().subscribe((data)=>
      {
        this.games=data;
        //console.warn(this.games);
      });
    }
    this.gameData.sendClickEvent(this.games);
  }

}
