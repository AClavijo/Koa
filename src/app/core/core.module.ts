import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardEngineService, TimerEngineService } from './engine';
import { ApmTestService } from './apm-test';
import { KeyboardMappingService } from './keyboard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    KeyboardEngineService,
    TimerEngineService,
    ApmTestService,
    KeyboardMappingService
  ]
})
export class CoreModule { }
