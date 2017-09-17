import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
@Input() ProductTitle: string; 
@Input() ProductPrice: any; 
@Input() ProductImage: string; 
@Input() ProductHeadline: string; 
@Input() ProductRating: any; 
@Input() Productlectures: any; 
@Input() ProductDuration: any; 


  constructor() { }

  ngOnInit() {
  }

}
