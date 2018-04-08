import { Router,NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';




@Injectable()
export class ScrollService {

  constructor(private route:Router) { }



  public scrollToDiv(div){

     if(this.route.url == '/'){
     //  this.scrolling.unsubscribe();
      const element = document.getElementById(div);
      element.scrollIntoView({behavior:'smooth',block: "start",inline:'start'});
     } else {
       this.route.navigate(['/']).then((e)=>{
          setTimeout(e => this.scrollToDiv(div),500);
       });
     }

  }
}
