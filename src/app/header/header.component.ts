import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, HostListener, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ScrollService } from '../scroll.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItems: any = 0;
  navFixed = false;
  navHome : boolean;
  test : 'red';
  collapse = true;

  @Input() social;

  @HostListener('window:scroll', ['$event'])
  changeNav() {
     if (window.pageYOffset > 200){
       this.navFixed = true;
     } else {
       this.navFixed = false;
     }
  }



  navigate(div){
      this.scrollService.scrollToDiv(div);
  }
  navigateToCart(){
    window.scroll(0,0);
    this.route.navigate(["/cart"]);
  }

  constructor(private route:Router,private scrollService:ScrollService , private cartService:ShoppingCartService) {
    this.route.events.filter(event => event instanceof NavigationStart).subscribe((val)=>{
        this.navHome =  (val['url'] === '/');
        this.collapse = false;
    });


  }

  ngOnInit() {
    this.cartService.productsRef.subscribe((items)=>{
      this.cartItems = items;
    });
    //toggle navbar
    $('.nav-link').click(function(){ $('.navbar-collapse').toggleClass('show') });
  }

}
