import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CommonServices } from '../../providers/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { Category }     from '../../model';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html'
})
export class ProductlistComponent implements OnInit {

  productData: any;
  ProductTitle: string;
  cities: SelectItem[];

  productlistObs: Observable<any[]>;
  productlist: any[];

  selectedCities: string[];
  constructor(private CommonServices: CommonServices ,private route: ActivatedRoute, private _router: Router,  private store: Store<AppStore>) {
    this.cities = [];
    this.cities.push({ label: 'New York', value: 'New York' });


    this.productlistObs = store.select(s => s.productlist);
  }

  ngOnInit() {

  //   let id = this.route.snapshot.paramMap.get('id');
  //  console.log(id)
  //   this.CommonServices.getProduct(id).subscribe((res) => {
  //     this.productData = res[0].results;
  //    })


     this.productlistObs.subscribe(productData =>{  this.productData = productData[0].results, console.log(productData[0])});

  }

}
