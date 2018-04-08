import { productsDetails } from './productsDetails';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products;
  categorie;
  subcategorie;
  constructor(private route:ActivatedRoute,private scroll:ScrollService) { }

  ngOnInit() {
    this.route.params.forEach((param)=>{
     this.products = productsDetails.filter((item)=>item.categorie === param['subcategorie']);
     this.categorie = param['categorie'];
     this.subcategorie = param['subcategorie'];
    })
  }

  getUrl(url){
    return `assets/img/retail/${this.categorie}/${this.subcategorie}/${url}`;
  }
  navigateToHome(){
    this.scroll.scrollToDiv('retail');
  }

}
