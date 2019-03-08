import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as BarActions from './store/bar-actions';
import * as fromApp from './../store/app.reducers';
import {Observable} from 'rxjs';
import {Beverage} from '../shared/beverage';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.html',
  styleUrls: ['./bar.css']
})
export class BarComponent {

  private totalPrice: number;
  valueFromStore: Beverage[];

  constructor(private store: Store<fromApp.AppState>) {
  }

  onInputNewValue(form: NgForm) {

    const beverage = new Beverage(form.value.name, form.value.price);

    console.log('Writing to store:');
    console.log(beverage);

    this.store.dispatch(new BarActions.AddBeverage(beverage));

    console.log('Reading from store ...');

    this.store.select('bar').subscribe(stateObject => {
      this.valueFromStore = stateObject.beverages;
      this.totalPrice = stateObject.totalPrice;
    });

  }

  onRemoveBeverage(index: number) {
    this.store.dispatch(new BarActions.RemoveBeverage(index));
  }

  refresh() {
    this.store.select('bar').subscribe(stateObject => {
      this.valueFromStore = stateObject.beverages;
      this.totalPrice = stateObject.totalPrice;
    });
  }
}
