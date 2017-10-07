import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { router, routes } from './main/router.component';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { AccordionModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import {RatingModule} from 'primeng/primeng';
import { CommonServices } from './providers/common.service';
import { FooterComponent } from './template/footer/footer.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CategoryActions , ProductlistActions} from './store/actions';
import {CategoryEffects , ProductlistEffects} from './store/effects';

import {CategoryService} from './services/category.service';

import {  reducer } from './store/app-store';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA26j7fHG_-cc6yINmbOCKL9URrlC11LFg",
  authDomain: "fir-curd-937e6.firebaseapp.com",
  databaseURL: "https://fir-curd-937e6.firebaseio.com",
  projectId: "fir-curd-937e6",
  storageBucket: "",
  messagingSenderId: "651093725674"
};


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductdetailComponent,
    FooterComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    HttpModule,
    FormsModule,
    RatingModule,
  
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(router, { useHash: false }),

    StoreModule.forRoot(reducer),

     //ngrx effects
     EffectsModule.forRoot([CategoryEffects , ProductlistEffects])
    
  ],
  providers: [
    CommonServices,
    CategoryService,
    CategoryActions,
    ProductlistActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
