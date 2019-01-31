import * as MyActions from './my.actions';
import {Beverage} from './beverage';

const initialState = {
  beverage: [new Beverage('Club Mate', 1)]
};

export function beverageReducer(state = initialState, action: MyActions.AddBeverage) {

  switch (action.type) {
    case MyActions.ADD_BEVERAGE:
      return {
        ...state,
        beverage: [...state.beverage, action.payload]
      };
    default:
      return state;
  }
}
