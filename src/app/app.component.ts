import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  social = [];
  constructor(private routes:ActivatedRoute, private scrollService:ScrollService, private api:ApiService){
  }

  ngOnInit(){
    this.api.get('getSettings/social').subscribe((e)=>{
      this.social =e;
    })
  }
}
