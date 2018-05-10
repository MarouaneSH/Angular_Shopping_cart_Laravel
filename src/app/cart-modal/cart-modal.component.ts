import { ShoppingCartService } from './../shopping-cart.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { ApiService } from '../api.service';
import {  FormGroup, Validators , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  requestForm : FormGroup;
  loading = false;
  sendSuccess = false;
  requestError = false;

  constructor(  public dialogRef: MatDialogRef<CartModalComponent>,
                private api:ApiService,
                private cartService:ShoppingCartService,
                private fb:FormBuilder ) { }

  ngOnInit() {
    this.createRequestForm();
  }


  createRequestForm(){
     this.requestForm = this.fb.group({
        'name' : ['' , Validators.required],
        'email' : ['' , [Validators.required, Validators.email]],
        'comment' : ['' , [Validators.maxLength(200)]],
        'phone' : ['' , [Validators.required, Validators.minLength(8)]],
        'store' : ['' , [Validators.required]],
        'address' : ['' , [Validators.required]],
        'city' : ['' , [Validators.required]],
     })
  }

  sendRequest(){
    this.loading = true;
    const products = this.cartService.products;
    this.api.post('sendRequest', { products : JSON.stringify(products.map((e) =>  ({productID : e.item.productID , quantity : e.quantity}))),
                                   nom : this.requestForm.controls['name'].value,
                                   email : this.requestForm.controls['email'].value,
                                   comment : this.requestForm.controls['comment'].value,
                                   phone : this.requestForm.controls['phone'].value,
                                   store : this.requestForm.controls['store'].value,
                                   address : this.requestForm.controls['address'].value,
                                   city : this.requestForm.controls['city'].value,
                                  })
            .subscribe((data)=>{
                this.loading = false;
                this.sendSuccess = true;
            },
           err => this.requestError = true)
  }


}
