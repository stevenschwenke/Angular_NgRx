import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as BarAndPubSupplierActions from './store/bar-and-pub-supplier-actions';
import * as fromApp from './../store/app.reducers';
import {Beverage} from '../shared/beverage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bar-and-pub-supplier',
  templateUrl: './bar-and-pub-supplier.html',
  styleUrls: ['./bar-and-pub-supplier.css']
})
export class BarAndPubSupplierComponent {

  private totalPrice: number;
  valueFromStore: Beverage[];

  constructor(private store: Store<fromApp.AppState>) {
  }

  onInputNewValue(form: NgForm) {

    const beverage = new Beverage(form.value.name, form.value.price);

    console.log('Writing to store:');
    console.log(beverage);

    this.store.dispatch(new BarAndPubSupplierActions.AddBeverage(beverage));

    console.log('Reading from store ...');

    this.store.select('barAndPubSupplier').subscribe(stateObject => {
      this.valueFromStore = stateObject.beverages;
      this.totalPrice = stateObject.totalPrice;
    });

  }

  onRemoveBeverage(index: number) {
    this.store.dispatch(new BarAndPubSupplierActions.RemoveBeverage(index));
  }

  refresh() {
    this.store.select('barAndPubSupplier').subscribe(stateObject => {
      this.valueFromStore = stateObject.beverages;
      this.totalPrice = stateObject.totalPrice;
    });
  }
}
