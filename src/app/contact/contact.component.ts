import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators , FormBuilder} from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactForm : FormGroup;
  loading = false;
  sendSuccess = false;
  requestError = false;


  constructor( private fb:FormBuilder,private api:ApiService ) { }

  ngOnInit() {
    this.createContactForm();
  }


  createContactForm(){
     this.contactForm = this.fb.group({
        'name' : ['' , Validators.required],
        'email' : ['' , [Validators.required, Validators.email]],
        'comment' : ['' , [Validators.maxLength(200)]],
        'phone' : ['' , [Validators.required, Validators.minLength(8)]],
     })
  }


  sendRequest(){
    this.loading = true;
    this.api.post('contact', {nom : this.contactForm.controls['name'].value,
                              email : this.contactForm.controls['email'].value,
                              comment : this.contactForm.controls['comment'].value,
                              phone : this.contactForm.controls['phone'].value, })
            .subscribe((data)=>{
                this.loading = false;
                this.sendSuccess = true;
            },
           err => this.requestError = true)
  }

}
