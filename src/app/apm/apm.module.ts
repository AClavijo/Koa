import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomepageComponent } from './homepage/homepage.component';
import { ApmExerciceModule } from './apm-exercice';

@NgModule({
  imports: [
    SharedModule,
    ApmExerciceModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent]
})
export class ApmModule { }
