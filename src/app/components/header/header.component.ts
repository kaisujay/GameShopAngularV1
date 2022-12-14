import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from 'src/app/models/game.models';
import { GameServiceService } from 'src/app/services/game/game-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private route:Router) { }

  isPlayerLoggedIn:boolean=false;
  playerUserName:string='';

  ngOnInit(): void {
    
    this.route.events.subscribe((data)=>{
      if(data){
        if(sessionStorage.getItem('receivedToken') && sessionStorage.getItem('loggedInPlayer')){
        // if(localStorage.getItem('receivedToken') && localStorage.getItem('loggedInPlayer')){
          this.isPlayerLoggedIn=true;
          this.playerUserName=sessionStorage.getItem('loggedInPlayer') || '';
          // this.playerUserName=localStorage.getItem('loggedInPlayer') || '';
        }
        else{
          this.isPlayerLoggedIn=false;
          this.playerUserName='';
        }
      }
    });        
  }


}
