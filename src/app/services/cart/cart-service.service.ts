import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createCart } from 'src/app/models/cart/create-cart.models';
import { displayCart } from 'src/app/models/cart/display-cart.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

  apiUrl:string=environment.apiUrl+"Cart";

  createCart(createCartModel:createCart){
    return this.http.post(this.apiUrl+"/Create",createCartModel,{
      responseType:'text',
    });
  }

  displayCart(playerId:string){
    return this.http.get<displayCart[]>(this.apiUrl+"/SearchedCarts/"+playerId);
  }
}
