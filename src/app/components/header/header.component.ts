import { Component, OnInit } from '@angular/core';
import { game } from 'src/app/models/game.models';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  games:game[]=[];

  constructor(private gameData: GameServiceService) { }

  ngOnInit(): void {
  }

  getSearchedGames(value:string){
    this.gameData.getGamesByName(value).subscribe((data)=>
    {
      this.games=data; 
    }

    )
  }

}
