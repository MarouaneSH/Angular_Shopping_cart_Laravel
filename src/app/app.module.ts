import { ShoppingCartService } from './shopping-cart.service';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageZoomModule} from 'angular2-image-zoom';


import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { ScrollService } from './scroll.service';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AgmCoreModule } from '@agm/core';
import { LoadingComponent } from './loading/loading.component';
import { ProductDetailModelComponent } from './product-detail-model/product-detail-model.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { CartComponent } from './cart/cart.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    ProductComponent,
    BrandsComponent,
    ContactComponent,
    ProductDetailComponent,
    LoadingComponent,
    ProductDetailModelComponent,
    CartComponent,
    CartModalComponent,
    AboutUsComponent,
  ],
  entryComponents : [
    ProductDetailModelComponent,
    CartModalComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    BrowserAnimationsModule,
    RoutesRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACz_KexpPKtIUVFd9-YUOqt0qhjeyIWx8'
    }),
    ReactiveFormsModule,
    ImageZoomModule
  ],
  providers: [
    ScrollService,
    ApiService ,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
