import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BrandsComponent } from '../brands/brands.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:categorie/:subcategorie/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
