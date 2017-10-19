import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ApmModule } from './apm';
import { StoreModule } from '@ngrx/store';
import { BoReducer, KeyboardReducer } from './core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bo: BoReducer,
      keyboard: KeyboardReducer
    }),
    CoreModule,
    ApmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
