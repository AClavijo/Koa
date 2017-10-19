var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from '../rxjs';
import { KeyboardEngineService, TimerEngineService } from '../engine';
var ApmTestService = (function () {
    function ApmTestService(_keS, _tS) {
        this._keS = _keS;
        this._tS = _tS;
        /**
         * Keyboard Event Reference
         */
        this._kL$ = null;
        /**
         * True if a test is running otherwise False
         */
        this.runningTest = false;
        this.kea = new Subject();
    }
    ApmTestService.prototype.lunchTest = function () {
        var _this = this;
        this._kL$ = this._keS.lunchEngine().subscribe(function (res) {
            _this.kea.next(res);
        });
        this._timer$ = this._tS.startTimer().subscribe(function (res) {
        });
        this.runningTest = true;
    };
    ApmTestService.prototype.stopTest = function () {
        this._kL$.unsubscribe();
        this._timer$.unsubscribe();
        this.runningTest = false;
    };
    ApmTestService.prototype.getKeyboardEvent = function () {
        return this._kL$;
    };
    ApmTestService.prototype.getTimerEvent = function () {
        return this._timer$;
    };
    ApmTestService.prototype.getKea = function () {
        return this.kea;
    };
    return ApmTestService;
}());
ApmTestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [KeyboardEngineService, TimerEngineService])
], ApmTestService);
export { ApmTestService };
//# sourceMappingURL=apm-test.service.js.map