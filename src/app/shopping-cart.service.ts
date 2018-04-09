import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {


  products : any = [];

  constructor() { }

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

    console.log(this.products);

  }

  removeFromCart(item){
    this.products.filter((el)=>{
     // return
    })
  }

}
