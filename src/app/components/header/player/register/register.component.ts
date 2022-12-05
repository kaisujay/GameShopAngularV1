import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { registerPlayer } from 'src/app/models/player/register-player.models';
import { PlayerServiceService } from 'src/app/services/player/player-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private playerData:PlayerServiceService) { }

  ngOnInit(): void {
  }

  registerPlayerModel:registerPlayer={};

  userRegisterForm=new FormGroup({
    txtBoxName:new FormControl(''),
    txtBoxUserName:new FormControl(''),
    txtBoxEmail:new FormControl(''),
    txtBoxPassword:new FormControl(''),
    txtBoxConfirmPassword:new FormControl(''),    
    txtBoxDateOfBirth:new FormControl(''),
  });

  getFormValue(){
    this.registerPlayerModel.name=this.userRegisterForm.value.txtBoxName?.toString();
    this.registerPlayerModel.userName=this.userRegisterForm.value.txtBoxUserName?.toString();
    this.registerPlayerModel.email=this.userRegisterForm.value.txtBoxEmail?.toString();
    this.registerPlayerModel.password=this.userRegisterForm.value.txtBoxPassword?.toString();
    this.registerPlayerModel.confirmedPassword=this.userRegisterForm.value.txtBoxConfirmPassword?.toString();
    this.registerPlayerModel.dateOfBirth=this.userRegisterForm.value.txtBoxDateOfBirth?.toString();

    console.warn(this.registerPlayerModel);
    
    this.playerData.registerNewPlayer(this.registerPlayerModel).subscribe((data)=>{
      console.warn("Created Successfully");
      
    },(error)=>{
      console.warn(error.error); 
    });
  }
}
