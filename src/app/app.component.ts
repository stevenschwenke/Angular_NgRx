import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as MyActions from './store/my.actions';
import {Beverage} from './store/beverage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valueFromStore: Beverage[];

  constructor(private store: Store<Beverage>) {
  }

  onInputNewValue(form: NgForm) {

    const beverage = new Beverage(form.value.name, form.value.price);

    console.log('Writing to store:');
    console.log(beverage);

    this.store.dispatch(new MyActions.AddBeverage(beverage));

    console.log('Reading from store ...');

    this.store.select('beverageReducers').subscribe(stateObject => {
      this.valueFromStore = stateObject.beverage;
    });

  }
}
