import * as fromBarAndPubSupplier from '../bar-and-pub-supplier/store/bar-and-pub-supplier-reducers';
import * as fromBar from '../bar/store/bar-reducers';

export interface AppState {
  barAndPubSupplier: fromBarAndPubSupplier.State;
  bar: fromBar.State;
}
