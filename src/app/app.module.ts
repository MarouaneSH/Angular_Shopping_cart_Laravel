import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    })
  ],
  providers: [ScrollService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
