import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private routes:ActivatedRoute, private scrollService:ScrollService){
  }

  ngOnInit(){
  }
}
