import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardEngineService, TimerEngineService } from './engine';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    KeyboardEngineService,
    TimerEngineService
  ]
})
export class CoreModule { }
