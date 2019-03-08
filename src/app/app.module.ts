import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {BarAndPubSupplierComponent} from './bar-and-pub-supplier/bar-and-pub-supplier';
import {BarComponent} from './bar/bar';

import {reducers} from './store/app.reducers';

@NgModule({
  declarations: [
    BarAndPubSupplierComponent,
    BarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
