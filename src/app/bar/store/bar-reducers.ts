import * as BarActions from './bar-actions';
import {Beverage} from '../../shared/beverage';

export interface State {
  beverages: Beverage[];
  totalPrice: number;
}

const initialState: State = {
  beverages: [new Beverage('Complimentary Club Mate', 0)],
  totalPrice: 0
};

export function barReducer(state = initialState, action: BarActions.BarActions) {

  switch (action.type) {
    case BarActions.ADD_BEVERAGE:
      return {
        ...state,
        beverages: [...state.beverages, action.payload],
        totalPrice: <number>state.totalPrice + action.payload.price
      };
    case BarActions.REMOVE_BEVERAGE:

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
