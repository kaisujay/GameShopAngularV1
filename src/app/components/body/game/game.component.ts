import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game/game-service.service';
import { Subscription } from 'rxjs'
import { game } from 'src/app/models/game.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games:game[]=[];

  constructor(private gameData: GameServiceService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.gameData.shareData.subscribe((data : game[])=>      
        this.games=data        
      );  
  }

  showGameDetails(value:number){
    this.router.navigate(['/Games',value]);    
  }
}
