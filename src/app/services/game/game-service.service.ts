import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable, Subject, BehaviorSubject } from 'rxjs';
import { game } from 'src/app/models/game.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  games:game[]=[];
  private behaviorSubject = new BehaviorSubject<game[]>({} as game[]);
  public shareData = this.behaviorSubject.asObservable();

  constructor(private http: HttpClient) { }

  apiUrl:string=environment.apiUrl+"game/";

  getGames()
  {
    return this.http.get<game[]>(this.apiUrl);
  }

  getGamesByName(name:string) : Observable<game[]>
  {
    return this.http.get<game[]>(this.apiUrl+"SearchedGames?value="+name);
    //This also Works
    // return this.http.get<any[]>(this.apiUrl+"SearchedGames?value="+name).pipe(
    //   map(o => o.map((sp): game => ({
    //     Name: sp.name,
    //     Price: sp.price,
    //       GameDetails: sp.gameDetails,
    //   })))
    // );    
  }

  getGamesById(id:number)
  {
    return this.http.get<game>(this.apiUrl+"SearchedGamesById/"+id);
  }
  
  updateData(games:game[]){        
    this.behaviorSubject.next(games);  
  }
}
