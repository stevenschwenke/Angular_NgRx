import {Action} from '@ngrx/store';

export const SET_MY_NUMBER = 'SET_MY_NUMBER';

export class SetMyNumber implements Action {

  constructor(public payload: number) {
  }

  readonly type = SET_MY_NUMBER;
}

export type MyActions = SetMyNumber;
