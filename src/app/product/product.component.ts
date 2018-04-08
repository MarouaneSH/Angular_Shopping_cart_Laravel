import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit,ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
  animateChild
} from '@angular/animations';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations:[

    trigger('filter',[
      transition('* => *', [
        query('.card',[
          animate(300,keyframes([
            style({opacity: 0, transform: 'scale(0.1)', offset: 0}),
            style({opacity: 0.75, transform: 'scale(0.5)',  offset: 0.3}),
            style({opacity: 1, transform: 'scale(1)',     offset: 1.0})
          ]))
        ],{ optional: true })
      ]),
  ])]
})
export class ProductComponent implements OnInit {

  filter = false;
  categories;
  subcategories;
  currentCategory = 'all';
  loading = true;

  constructor(private router:Router,private api:ApiService) { }

  ngOnInit() {

    this.api.get('categories').subscribe((e)=>{
      this.categories =e.data;
    })
    this.api.get('subcategory').subscribe((e)=>{
      this.subcategories =e.data;
      this.loading = false;
    })


  }


  filterItem(category) {
    this.filter = !this.filter;
    this.currentCategory = category;
  }

  isActive(categorie){
    return this.currentCategory === categorie;
  }


  navigateTo(categorie,subcategorie,ID){
    window.scrollTo(0,0);
    categorie = categorie.split(' ').join('-').replace('&','and');
    subcategorie = subcategorie.split(' ').join('-').replace('&','and');
    this.router.navigate(['/products',categorie,subcategorie,ID]);
  }


}
