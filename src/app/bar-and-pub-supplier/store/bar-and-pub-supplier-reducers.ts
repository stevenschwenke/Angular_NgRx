import * as BarAndPubSupplierActions from './bar-and-pub-supplier-actions';
import {Beverage} from './beverage';

export interface AppState {
  beverageModule: State;
}

export interface State {
  beverages: Beverage[];
  totalPrice: number;
}

const initialState: State = {
  beverages: [new Beverage('Complimentary Club Mate', 0)],
  totalPrice: 0
};

export function beverageReducer(state = initialState, action: BarAndPubSupplierActions.BarAndPubSupplierActions) {

  switch (action.type) {
    case BarAndPubSupplierActions.ADD_BEVERAGE:
      return {
        ...state,
        beverages: [...state.beverages, action.payload],
        totalPrice: <number>state.totalPrice + action.payload.price
      };
    case BarAndPubSupplierActions.REMOVE_BEVERAGE:

      const beverages = [...state.beverages]; // get old beverages in an immutable way
      const newPrice = state.totalPrice - beverages[action.payload].price;
      beverages.splice(action.payload, 1);

      return {
        ...state,
        beverages: beverages,
        totalPrice: newPrice
      };
    default:
      return state;
  }
}
