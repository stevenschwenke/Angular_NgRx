import * as fromBarAndPubSupplier from '../bar-and-pub-supplier/store/bar-and-pub-supplier-reducers';
import * as fromBar from '../bar/store/bar-reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  bar: fromBar.State;
  barAndPubSupplier: fromBarAndPubSupplier.State;
}

export const reducers: ActionReducerMap<AppState> = {
  bar: fromBar.barReducer,
  barAndPubSupplier: fromBarAndPubSupplier.barAndPubSupplierReducer
};
