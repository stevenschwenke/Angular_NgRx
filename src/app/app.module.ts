import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {beverageReducer} from './store/my.reducers';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({beverageReducers: beverageReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
