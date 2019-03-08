import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {beverageReducer} from './bar-and-pub-supplier/store/bar-and-pub-supplier-reducers';
import {StoreModule} from '@ngrx/store';
import {BarAndPubSupplierComponent} from './bar-and-pub-supplier/bar-and-pub-supplier';

@NgModule({
  declarations: [
    BarAndPubSupplierComponent,
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
