import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  lattitude = 43.519730;
  longitude = -79.70151;
  zoom = 14;

  constructor() { }

  ngOnInit() {
  }

}
