import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { game } from 'src/app/models/game.models';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  routeValue:number;
  game:game;

  constructor(private gameData:GameServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //console.warn(this.router.url);  //Kinda Both this and below works
    //console.warn(this.route.snapshot.paramMap.get('searchRoute')!);

    this.routeValue=Number(this.route.snapshot.paramMap.get('searchRoute')!);

    this.gameData.getGamesById(this.routeValue).subscribe((data)=>
    {
      this.game=data;          
    });
  }

}
