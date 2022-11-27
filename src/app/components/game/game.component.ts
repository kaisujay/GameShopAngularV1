import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../../services/game/game-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games:any;

  constructor(private gameData: GameServiceService) { 
    gameData.getGames().subscribe((data)=>
    {
      console.warn("Games : ",data);      
    });
  }

  ngOnInit(): void {
  }

}
