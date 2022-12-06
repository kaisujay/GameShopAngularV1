import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createCart } from 'src/app/models/cart/create-cart.models';
import { game } from 'src/app/models/game.models';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  routeValue:number;
  game:game;
  createCartModel:createCart={};

  constructor(
    private gameData:GameServiceService, 
    private router:Router, 
    private route:ActivatedRoute,
    private cartData:CartServiceService) { }

  ngOnInit(): void {
    //console.warn(this.router.url);  //Kinda Both this and below works
    //console.warn(this.route.snapshot.paramMap.get('searchRoute')!);

    this.routeValue=Number(this.route.snapshot.paramMap.get('searchRoute')!);

    this.gameData.getGamesById(this.routeValue).subscribe((data)=>
    {
      this.game=data;          
    },
    (error)=>{
      this.router.navigate(['/error']);
    });
  }

  addingToCart(){    
    this.createCartModel.gameId=Number(this.game.id);
    this.createCartModel.playerId=localStorage.getItem('receivedPlayerId') || '';

    this.cartData.createCart(this.createCartModel).subscribe((data)=>{
      console.warn("Added to Cart");      
    });    
  }
}
