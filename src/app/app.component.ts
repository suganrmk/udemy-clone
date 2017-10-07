import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from './store/app-store';
import { Category }     from './model';

import{CategoryActions , ProductlistActions} from './store/actions';

import { CommonServices } from './providers/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private CommonServices: CommonServices , private categoryActions: CategoryActions,
    private store: Store<AppStore>, private productlistActions:ProductlistActions) {
  }
 ngOnInit () {
   let check = "web";
  this.store.dispatch(this.categoryActions.loadCategories());
  this.store.dispatch(this.productlistActions.loadProductlist('web'));
  
   
}

  loginGoogle() {
    this.CommonServices.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data)
    });
  }

}






