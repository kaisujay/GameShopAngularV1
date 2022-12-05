import { Component, OnInit } from '@angular/core';
import { displayPlayer } from 'src/app/models/player/display-player.models';
import { PlayerServiceService } from 'src/app/services/player/player-service.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  constructor(private playerData:PlayerServiceService) { }

  displayPlayer:displayPlayer;

  ngOnInit(): void {
    this.playerData.getPlayerByUserName("sujaym").subscribe((data)=>{
      this.displayPlayer=data;
      console.warn(this.displayPlayer);
      
    });
  }

}
