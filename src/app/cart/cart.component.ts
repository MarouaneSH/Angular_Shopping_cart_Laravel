import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:ShoppingCartService) { }

  products : any;

  ngOnInit() {
    this.products = this.cartService.products;
  }

  removeFromCart(item){
    this.cartService.removeFromCart(item);
    this.products = this.cartService.products;
  }

}
