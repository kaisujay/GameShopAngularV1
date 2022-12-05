import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { logInPlayer } from 'src/app/models/player/login-player.models';
import { PlayerServiceService } from 'src/app/services/player/player-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private playerData:PlayerServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  logInPlayerModel:logInPlayer={};
  loggedInPlayer:string='';

  userLogInForm=new FormGroup({
    txtBoxUserName:new FormControl(''),
    txtBoxPassword:new FormControl('')
  });
  
  getFormValue()
  {
    this.loggedInPlayer='';
    this.logInPlayerModel.userName=this.userLogInForm.value.txtBoxUserName?.toString();
    this.logInPlayerModel.password=this.userLogInForm.value.txtBoxPassword?.toString();

    this.loggedInPlayer=this.logInPlayerModel.userName?.toUpperCase() || '';
    this.playerData.signInPlayer(this.logInPlayerModel).subscribe((data)=>{      
      
      localStorage.setItem("receivedToken",data);
      localStorage.setItem("loggedInPlayer",this.loggedInPlayer);
      console.warn("LogIn Successful ");      
      this.router.navigate(['/Games']);

    },(error)=>{
      localStorage.removeItem('receivedToken');
      localStorage.removeItem('loggedInPlayer');
      console.warn(error.error);      

    });
  }
  
  gotoRegister(){
    this.router.navigate(['/Register']);
  }
}
