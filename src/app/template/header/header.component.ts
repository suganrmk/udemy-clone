import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { Category }     from '../../model';
import{CategoryActions , ProductlistActions} from '../../store/actions';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  categoriesObs: Observable<Category[]>;
  categories: Category[];

  productlistObs: Observable<any[]>;
  productlist: any[];
  sub: any;
  

  constructor(private _router: Router,  private store: Store<AppStore>, private productlistActions:ProductlistActions) {
    this.categoriesObs = store.select(s => s.categories);
    this.productlistObs = store.select(s => s.productlist);
    
   }

  ngOnInit() {
    
    this.sub = this.categoriesObs.subscribe(categories => {this.categories = categories});
    
    
  }

  onSelect(selectedCategory): void {
    this.store.dispatch(this.productlistActions.loadProductlist(selectedCategory));
     this._router.navigate(["/productlist", selectedCategory]);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
