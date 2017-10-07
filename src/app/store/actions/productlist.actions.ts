import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ActionWithPayload} from './action-with-payload';

import {Category} from '../../model';

@Injectable()
export class ProductlistActions {

  static LOAD_PRODUCTLIST = 'LOAD_PRODUCTLIST';
  loadProductlist(product: string): ActionWithPayload<any> {
    console.log('action'+ product);
    return {
      type: ProductlistActions.LOAD_PRODUCTLIST,
      payload: product
    };
  }

  static LOAD_PRODUCTLIST_SUCCESS = 'LOAD_PRODUCTLIST_SUCCESS';
  loadProductlistSuccess(productlist: any[]): ActionWithPayload<any[]> {
    console.log( 'action'+ productlist);
    
    return {
      type: ProductlistActions.LOAD_PRODUCTLIST_SUCCESS,
      payload: productlist
    };
  }

}
