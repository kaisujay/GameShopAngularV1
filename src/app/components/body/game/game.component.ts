import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game/game-service.service';
import { Subscription } from 'rxjs'
import { game } from 'src/app/models/game.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games:game[]=[];
  clickEventSubscription:Subscription;
  text:string='';

  constructor(private gameData: GameServiceService) {
    
  }

  ngOnInit(): void {
    this.gameData.shareData.subscribe(x=>this.text=x);
    this.clickEventSubscription= this.gameData.getClickEvent().subscribe((data)=>{
      this.games=data;
    })
    console.warn(this.text);
    
  }
}
