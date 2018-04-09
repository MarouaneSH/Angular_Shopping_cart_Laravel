import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {


  productsRef = new BehaviorSubject<any>([]);

  products : any = [{
    item : {
      productID: "ML-8879",
      name: "GW Rice",
      price : '50',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "http://localhost:8000/storage/products/March2018/jGpZzWev6COAKTZOG0is.jpg"
    },
    quantity : 20
  },{
    item : {
      productID: "ML-770",
      name: "GW Rice",
      price : '50',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "http://localhost:8000/storage/products/March2018/jGpZzWev6COAKTZOG0is.jpg"
    },
    quantity : 20
  }];

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
