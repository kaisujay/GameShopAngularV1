import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { game } from 'src/app/models/game.models';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  apiUrl:string="http://localhost:12969/api/game/";

  getGames()
  {
    return this.http.get(this.apiUrl);
  }

  getGamesByName(name:string)
  {
    return this.http.get<any[]>(this.apiUrl+"SearchedGames?value="+name).pipe(
      map(o => o.map((sp): game => ({
        Name: sp.name,
        Price: sp.price,
          GameDetails: sp.gameDetails, // error here
      })))
    );    
  }

  getGamesById(id:number)
  {
    return this.http.get(this.apiUrl+"SearchedGamesById/"+id);
  }
}
