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

  cartItems: any = 0;
  navFixed = false;

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

  constructor(private route:Router,private scrollService:ScrollService , private cartService:ShoppingCartService) { }

  ngOnInit() {
    this.cartService.productsRef.subscribe((items)=>{
      this.cartItems = items;
    })
  }

}
