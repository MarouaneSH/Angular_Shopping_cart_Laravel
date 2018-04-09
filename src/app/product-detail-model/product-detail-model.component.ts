import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-product-detail-model',
  templateUrl: './product-detail-model.component.html',
  styleUrls: ['./product-detail-model.scss']
})
export class ProductDetailModelComponent implements OnInit {


  product: any;
  quantity = 1;
  error = false;

  constructor(public dialogRef: MatDialogRef<ProductDetailModelComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }


  ngOnInit() {
    this.product = this.data.product;
    console.log(this.data.product);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
