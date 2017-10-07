import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import {ProductlistActions} from '../actions';
//import {Productlist} from '../../model';
import {CategoryService} from '../../services';
import {ActionWithPayload} from '../actions';


@Injectable()
export class ProductlistEffects {
    constructor (
        private actions$: Actions,
        private plistActions: ProductlistActions,
        private svc: CategoryService
    ) {}

    @Effect() 
    loadProductlist$ = this.actions$
        .ofType(ProductlistActions.LOAD_PRODUCTLIST)
        .map((action: ActionWithPayload<any>) => action.payload)        
        .switchMap((product) => this.svc.getProduct(product))
        .map((categories: any[]) => this.plistActions.loadProductlistSuccess(categories))
}
