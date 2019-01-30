import * as MyActions from './my.actions';

const initialState = {
  myNumber: 42
};

export function myReducer(state = initialState, action: MyActions.SetMyNumber) {

  switch (action.type) {
    case MyActions.SET_MY_NUMBER:
      return {
        ...state,
        myNumber: [action.payload]
      };
    default:
      return state;
  }
}
