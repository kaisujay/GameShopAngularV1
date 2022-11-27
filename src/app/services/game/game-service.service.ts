import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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
    return this.http.get(this.apiUrl+"SearchedGames?value="+name);
  }

  getGamesById(id:number)
  {
    return this.http.get(this.apiUrl+"SearchedGamesById/"+id);
  }
}
