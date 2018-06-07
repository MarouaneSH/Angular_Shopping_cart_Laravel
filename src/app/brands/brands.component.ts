import { ScrollService } from './../scroll.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [];

  constructor(private api:ApiService, private scroll:ScrollService) { }

  ngOnInit() {
    this.api.get('brands').subscribe((e)=>{
      this.brands =e.data.map((el) => el.image);
    })
  }

  navigateToHome(){
    this.scroll.scrollToDiv('retail');
  }
}
