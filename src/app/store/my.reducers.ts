import * as MyActions from './my.actions';
import {Beverage} from './beverage';

const initialState = {
  beverages: [new Beverage('Club Mate', 0)],
  totalPrice: 0
};

export function beverageReducer(state = initialState, action: MyActions.MyActions) {

  switch (action.type) {
    case MyActions.ADD_BEVERAGE:
      return {
        ...state,
        beverages: [...state.beverages, action.payload],
        totalPrice: <number>state.totalPrice + action.payload.price
      };
    case MyActions.REMOVE_BEVERAGE:


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
