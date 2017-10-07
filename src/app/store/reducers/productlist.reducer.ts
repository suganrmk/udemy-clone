import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {ActionWithPayload, ProductlistActions} from '../actions';
import { Category } from '../../model';

export function productlist(state: any = [], action: ActionWithPayload<any[]>): any[] {
  console.log(action);
  switch (action.type) {
    case ProductlistActions.LOAD_PRODUCTLIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

// export function categoryDictionary (state: any = {}, action: ActionWithPayload<Category[]>): {[key: number]: Category} {
//   switch (action.type) {
//     case CategoryActions.LOAD_CATEGORIES_SUCCESS:
//       let categories: Category[] = action.payload;
//       let categoryDict: {[key: number]: Category} = {};
//       categories.forEach(category => {
//         categoryDict[category.id] = category;
//       });
//       return categoryDict;
//     default:
//       return state;
//   }
// };
