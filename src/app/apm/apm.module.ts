import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomepageComponent } from './homepage/homepage.component';
import { LuncherComponent } from './luncher/luncher.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HomepageComponent, LuncherComponent, KeyboardComponent],
  exports: [HomepageComponent]
})
export class ApmModule { }
