import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CommonServices } from '../../providers/common.service';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html'
})
export class ProductlistComponent implements OnInit {
  productData: any;
  ProductTitle: string;
  cities: SelectItem[];

  selectedCities: string[];
  constructor(private CommonServices: CommonServices) {
    this.cities = [];
    this.cities.push({ label: 'New York', value: 'New York' });
    this.cities.push({ label: 'Rome', value: 'Rome' });
    this.cities.push({ label: 'London', value: 'London' });
    this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
    this.cities.push({ label: 'Paris', value: 'Paris' });
  }

  ngOnInit() {

    this.CommonServices.get('https://raw.githubusercontent.com/suganrmk/udemy-clone/master/src/assets/json/productlist.json').subscribe(
      (res) => {
        this.productData = res.results;
       }
    )

  }

}
