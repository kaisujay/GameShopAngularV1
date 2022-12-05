import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { displayPlayer } from 'src/app/models/player/display-player.models';
import { logInPlayer } from 'src/app/models/player/login-player.models';
import { registerPlayer } from 'src/app/models/player/register-player.models';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  registerPlayer:registerPlayer;
  logInPlayer:logInPlayer;
  displayPlayer:displayPlayer;

  constructor(private http:HttpClient) { }

  apiUrl:string="http://localhost:12969/api/player";

  getPlayerById(value:string){
    return this.http.get<displayPlayer>(this.apiUrl+"/byid/"+value);
  }

  getPlayerByUserName(value:string){
    return this.http.get<displayPlayer>(this.apiUrl+"/byusername/"+value);
  }

  signInPlayer(logInPlayer:logInPlayer){
    return this.http.post(this.apiUrl+"/login/",logInPlayer,{
      responseType:'text',  // If we don't use "responseType" we will get error, because API will return a toke and this Angular will not know what is the response
    });
  }

  registerNewPlayer(registerPlayer:registerPlayer){
    return this.http.post(this.apiUrl+"/Create",registerPlayer,{
      responseType:'text',  // If we don't use "responseType" we will get error, because API will return a toke and this Angular will not know what is the response
    });
  }
}
