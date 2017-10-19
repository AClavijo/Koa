var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ApmTestService } from '../../../core';
var LuncherComponent = (function () {
    function LuncherComponent(_apmTS) {
        this._apmTS = _apmTS;
    }
    LuncherComponent.prototype.ngOnInit = function () {
    };
    LuncherComponent.prototype.lunchKeyboardEngine = function () {
        this._apmTS.lunchTest();
    };
    LuncherComponent.prototype.stopKeyboardEngine = function () {
        this._apmTS.stopTest();
    };
    return LuncherComponent;
}());
LuncherComponent = __decorate([
    Component({
        selector: 'app-apm-luncher',
        templateUrl: './luncher.component.html',
        styleUrls: ['./luncher.component.css']
    }),
    __metadata("design:paramtypes", [ApmTestService])
], LuncherComponent);
export { LuncherComponent };
//# sourceMappingURL=luncher.component.js.map