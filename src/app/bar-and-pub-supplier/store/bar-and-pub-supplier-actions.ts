import {Action} from '@ngrx/store';
import {Beverage} from './beverage';

export const ADD_BEVERAGE = 'ADD_BEVERAGE';
export const REMOVE_BEVERAGE = 'REMOVE_BEVERAGE';

export class AddBeverage implements Action {

  constructor(public payload: Beverage) {
  }

  readonly type = ADD_BEVERAGE;
}

export class RemoveBeverage implements Action {

  constructor(public payload: number) {
  }

  readonly type = REMOVE_BEVERAGE;
}

export type BarAndPubSupplierActions =
  AddBeverage |
  RemoveBeverage;
