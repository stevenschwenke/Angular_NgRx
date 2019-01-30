import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as MyActions from './store/my.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valueFromStore: number;

  constructor(private store: Store<number>) {
  }

  onInputNewValue(form: NgForm) {

    console.log('Writing to store:' + form.value.inputValue);

    this.store.dispatch(new MyActions.SetMyNumber(form.value.inputValue));

    console.log('Reading from store ...');

    this.store.select('myReducers').subscribe(stateObject => {
      this.valueFromStore = stateObject.myNumber;
    });

  }
}
