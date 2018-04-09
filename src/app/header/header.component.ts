import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit,HostListener,ViewChild,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  navFixed = false;

  @HostListener('window:scroll', ['$event'])
  changeNav() {
     if (window.pageYOffset > 200){
       this.navFixed = true;
     } else {
       this.navFixed = false;
     }
  }

  cartItems: any = 0;



  navigate(div){
      this.scrollService.scrollToDiv(div);
  }

  constructor(private route:Router,private scrollService:ScrollService , private cartService:ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.products;
    console.log(this.cartItems.length );
  }

}
