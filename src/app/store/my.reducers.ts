import * as MyActions from './my.actions';
import {Beverage} from './beverage';

const initialState = {
  beverages: [new Beverage('Club Mate', 1)]
};

export function beverageReducer(state = initialState, action: MyActions.MyActions) {

  switch (action.type) {
    case MyActions.ADD_BEVERAGE:
      return {
        ...state,
        beverages: [...state.beverages, action.payload]
      };
    case MyActions.REMOVE_BEVERAGE:

      const beverages = [...state.beverages]; // get old beverages in an immutable way
      beverages.splice(action.payload, 1);

      return {
        ...state,
        beverages: beverages
      };
    default:
      return state;
  }
}
