import { CartModalComponent } from './../cart-modal/cart-modal.component';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:ShoppingCartService,private dialog:MatDialog) { }

  products : any;

  ngOnInit() {
    this.products = this.cartService.products;
  }

  removeFromCart(item){
    this.cartService.removeFromCart(item);
    this.products = this.cartService.products;
  }

  getSubtotal(){
    return this.products.map(product => product.quantity * product.item.price).reduce((prev, next) => prev + next);
  }
  openModal(){
    this.dialog.open(CartModalComponent, {
      width :'80%',
    })
  }

}
