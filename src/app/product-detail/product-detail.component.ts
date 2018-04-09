import { ProductDetailModelComponent } from './../product-detail-model/product-detail-model.component';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products;
  categorie;
  subcategorie;
  subcategoryID;
  loading = true;

  constructor(private route:ActivatedRoute,
              private scroll:ScrollService,
              private api:ApiService,
              private dialog:MatDialog) { }

  ngOnInit() {
    this.route.params.forEach((param)=>{
     this.categorie = param['categorie'].split('-').join(' ');
     this.subcategorie = param['subcategorie'].split('-').join(' ');
     this.subcategoryID = param['id'];
     this.api.get(`products/${this.subcategoryID}`).subscribe((products)=>{
       this.products = products.data;
       this.loading = false;
     })
    })
  }

  navigateToHome(){
    this.scroll.scrollToDiv('retail');
  }


  openModal(product){
    this.dialog.open(ProductDetailModelComponent, {
      width :'80%',
      data : {product : product }
    })
  }
}
