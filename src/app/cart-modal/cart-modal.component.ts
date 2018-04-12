import { ShoppingCartService } from './../shopping-cart.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CartModalComponent>,private api:ApiService,private cartService:ShoppingCartService) { }

  ngOnInit() {
  }


  sendRequest(){
    const products = this.cartService.products;
    this.api.post('sendRequest', { products : JSON.stringify(products.map((e) =>  ({productID : e.item.productID , quantity : e.quantity}))),
                                   nom : 'sdds',
                                   email : 'sdds',
                                   comment : 'sdds' })
            .subscribe((data)=>{
                 console.log(data);
    });
  }


}
