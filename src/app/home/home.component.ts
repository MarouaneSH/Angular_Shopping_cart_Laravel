import { Router } from '@angular/router';
import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['assets/img/1.jpg',
            'assets/img/2.jpg',
            'assets/img/3.jpg',
            'assets/img/1.jpg'];

  firstCarouselOption = {
      nav: false,
      dots: false,
      loop: true,
      items: 3,
      stagePadding: 20,
  };

  brands = ['assets/img/brand2.png',
            'assets/img/brand2.png'];
  brandCarouselOption = {
      nav: false,
      dots: false,
      loop: true,
      items: 1,
      stagePadding: 0,
  };



  constructor(private router:Router) { }


  ngOnInit() {

  }


  navigateTo(url){
     window.scrollTo(0,0);
     this.router.navigate([url]);
  }


}
