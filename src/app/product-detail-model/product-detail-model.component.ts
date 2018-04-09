import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-model',
  templateUrl: './product-detail-model.component.html',
  styleUrls: ['./product-detail-model.scss']
})
export class ProductDetailModelComponent implements OnInit {


  product: any;
  quantity = 1;
  error = false;
  addedToCart = false;
  constructor(public dialogRef: MatDialogRef<ProductDetailModelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private cartService:ShoppingCartService,
              private route:Router
  ) {

  }


  ngOnInit() {
    this.product = this.data.product;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(){
    this.cartService.addToCart(this.product,this.quantity);
    this.addedToCart = true;
  }

  navigateToCart(){
    window.scroll(0,0);
    this.route.navigate(['/cart']);
    this.onNoClick();
  }

}
