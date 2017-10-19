var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { ExerciceComponent } from './exercice/exercice.component';
import { LuncherComponent } from './luncher/luncher.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
var ApmExerciceModule = (function () {
    function ApmExerciceModule() {
    }
    return ApmExerciceModule;
}());
ApmExerciceModule = __decorate([
    NgModule({
        imports: [
            SharedModule
        ],
        declarations: [ExerciceComponent, LuncherComponent, KeyboardComponent],
        exports: [ExerciceComponent]
    })
], ApmExerciceModule);
export { ApmExerciceModule };
//# sourceMappingURL=apm-exercice.module.js.map