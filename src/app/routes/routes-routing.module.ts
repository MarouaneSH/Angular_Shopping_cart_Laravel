import { ProductComponent } from './../product/product.component';
import { CartComponent } from './../cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BrandsComponent } from '../brands/brands.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:categorie/:subcategorie/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
