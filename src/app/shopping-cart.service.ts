import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {


  productsRef = new BehaviorSubject<any>([]);

  products : any = [];

  constructor() {
      this.productsRef.next(this.products);
   }

   getCartProduct(){
     return this.products.asObservable;
   }

   addToCart(product,quantity){
    //Check if product already added to array
    if(this.products.filter(e => e.item.productID === product.productID).length > 0) {
       this.products.forEach((e)=>{
          if(e.item.productID == product.productID ) {
              e.quantity = quantity;
          }
       })
    } else {
      this.products.push({
          item : product,
          quantity : quantity
      });
    }

    this.productsRef.next(this.products);
   }

  removeFromCart(product){
    this.products =  this.products.filter(e => e.item.productID != product.item.productID);
    this.productsRef.next(this.products);
  }

}
