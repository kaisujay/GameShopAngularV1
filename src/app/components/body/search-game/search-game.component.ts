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
  errorMessage:string='';

  constructor(private gameData: GameServiceService, private router:Router) { }

  ngOnInit(): void {    
    this.gameData.getGames().subscribe((data)=>
      {
        this.errorMessage='';
        this.games=data;
        this.gameData.updateData(this.games);

        this.router.navigate(['/Games']);
      });
  }

  getSearchedGames(value:string){    
    // this.router.navigate(['/Games',value]);
    // this.searchRoute=this.route.snapshot.paramMap.get('searchRoute')!;    

    if(value.length <= 0){
      this.gameData.getGames().subscribe((data)=>
      {
        this.errorMessage='';
        this.games=data;
        this.gameData.updateData(this.games);

        this.router.navigate(['/Games']);
      });
    }
    else{
      this.gameData.getGamesByName(value).subscribe((data)=>
      {
        this.errorMessage='';
        this.games=data;
        this.gameData.updateData(this.games);

        this.router.navigate(['/Games']);
      },(error)=>{
        this.games=[];
        this.gameData.updateData(this.games);
        this.errorMessage=error.error;                   
      });
    }      
  }
}
