import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApmMaterialModule} from '../apm-material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ApmMaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
