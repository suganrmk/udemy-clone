import { User, Category, Question, Game, SearchResults } from '../model';

import { categories, categoryDictionary , productlist} from './reducers';

import { compose, ActionReducerMap } from '@ngrx/store';

export interface AppStore {
  categories: Category[];
  categoryDictionary: {[key: number]: Category};
  productlist: any;
}

export const reducer: ActionReducerMap<AppStore> = {
  categories: categories,
  categoryDictionary: categoryDictionary,
  productlist: productlist
};
