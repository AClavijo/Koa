import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { ExerciceComponent } from './exercice/exercice.component';
import { LuncherComponent } from './luncher/luncher.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ListActionsComponent } from './list-actions/list-actions.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ExerciceComponent, LuncherComponent, KeyboardComponent, ListActionsComponent],
  exports: [ExerciceComponent]
})
export class ApmExerciceModule { }
