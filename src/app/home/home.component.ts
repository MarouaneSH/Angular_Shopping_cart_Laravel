import { Router } from '@angular/router';
import { Component, OnInit,HostListener } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lattitude = 43.519730;
  longitude = -79.70151;
  zoom = 14;
  serviceDescription : '';

  images = [];

  firstCarouselOption = {
    autoplay :true,
      nav: false,
      dots : false,

      loop: true,
      items: 1,
  };

  brands = [] ;
  brandCarouselOption = {
      nav: false,
      autoplay :true,
      dots: false,
      autoplayTimeout : 2000,
      loop: true,
      items: 5,
      stagePadding: 0,
  };


  constructor(private router:Router,private api:ApiService) { }


  ngOnInit() {
    this.api.get('sliders').subscribe((e)=>{
      this.images =e.data.map((el) => el.image);
    })

    this.api.get('brands').subscribe((e)=>{
      this.brands =e.data.map((el) => el.image);
    })

    this.api.get('getSettings/service').subscribe((e)=>{
     this.serviceDescription = e;
    })
  }


  navigateTo(url){
     window.scrollTo(0,0);
     this.router.navigate([url]);
  }


}
