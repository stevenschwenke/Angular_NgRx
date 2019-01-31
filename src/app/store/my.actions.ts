import {Action} from '@ngrx/store';
import {Beverage} from './beverage';

export const ADD_BEVERAGE = 'ADD_BEVERAGE';

export class AddBeverage implements Action {

  constructor(public payload: Beverage) {
  }

  readonly type = ADD_BEVERAGE;
}

export type MyActions = AddBeverage;
