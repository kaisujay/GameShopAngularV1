import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from 'src/app/models/game.models';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {

  games:game[]=[];

  constructor(private gameData: GameServiceService, private router:Router) { }

  ngOnInit(): void {    
  }

  getSearchedGames(value:string){    
    // this.router.navigate(['/Games',value]);
    // this.searchRoute=this.route.snapshot.paramMap.get('searchRoute')!;    

    if(value.length <= 0){
      this.gameData.getGames().subscribe((data)=>
      {
        this.games=data;
        this.gameData.updateData(this.games);

        this.router.navigate(['/Games']);
      });
    }
    else{
      this.gameData.getGamesByName(value).subscribe((data)=>
      {
        this.games=data;
        this.gameData.updateData(this.games);

        this.router.navigate(['/Games']);
      });
    }      
  }
}
