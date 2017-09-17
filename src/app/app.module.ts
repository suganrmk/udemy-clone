import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { AccordionModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import {RatingModule} from 'primeng/primeng';
import { CommonServices } from './providers/common.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    SharedComponent,
    HeaderComponent,
    ProductComponent,
    ProductdetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    HttpModule,
    FormsModule,
    RatingModule
  ],
  providers: [
    CommonServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
