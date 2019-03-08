import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {barAndPubSupplierReducer} from './bar-and-pub-supplier/store/bar-and-pub-supplier-reducers';
import {barReducer} from './bar/store/bar-reducers';
import {StoreModule} from '@ngrx/store';
import {BarAndPubSupplierComponent} from './bar-and-pub-supplier/bar-and-pub-supplier';
import {BarComponent} from './bar/bar';

@NgModule({
  declarations: [
    BarAndPubSupplierComponent,
    BarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({barAndPubSupplierReducers: barAndPubSupplierReducer, barReducers: barReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
