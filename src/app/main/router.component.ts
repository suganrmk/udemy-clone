import { Component , ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductlistComponent } from '../product/productlist/productlist.component';
import { ProductdetailComponent } from '../product/productdetail/productdetail.component';
import { CheckoutComponent } from '../cart/checkout/checkout.component';


export const router: Routes = [
  { path: 'productlist/:id', component: ProductlistComponent }, 
  { path: 'productdetail', component: ProductdetailComponent },
  { path: 'checkout', component: CheckoutComponent },   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


