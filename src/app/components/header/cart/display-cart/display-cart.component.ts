import { Component, OnInit } from '@angular/core';
import { displayCart } from 'src/app/models/cart/display-cart.models';
import { CartServiceService } from 'src/app/services/cart/cart-service.service';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {

  constructor(private cartData:CartServiceService) { }

  playerId:string;
  displayCart:displayCart[]=[];

  ngOnInit(): void {

    this.playerId=localStorage.getItem('receivedPlayerId') || '';

    this.cartData.displayCart(this.playerId).subscribe((data)=>{
      this.displayCart=data;
      
    console.warn(this.displayCart);
    
    });
  }

}
