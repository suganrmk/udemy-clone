import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// import {} '../../../../rxjs-extensions';


import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/timer';

// Observable operators
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';



import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { 
  }

  getCategories(): Observable<any[]> {
    return this.db.list('/udemy/category');
  }

  getProduct(category){
    return this.db.list('/udemy/productlist/'+ category);
}
  
}

