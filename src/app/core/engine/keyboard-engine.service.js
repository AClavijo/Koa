var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';
var KeyboardEngineService = (function () {
    function KeyboardEngineService() {
    }
    KeyboardEngineService.prototype.lunchEngine = function () {
        /**
         * @Observable fromEvent
         */
        var keyDowns = Observable.fromEvent(document, 'keydown');
        /**
         * @Observable fromEvent
         */
        var keyUps = Observable.fromEvent(document, 'keyup');
        return keyDowns
            .merge(keyUps)
            .groupBy(function (e) { return e.keyCode; })
            .map(function (group) { return group.distinctUntilChanged(null, function (e) { return e.type; }); })
            .mergeAll()
            .scan(function (x, y) {
            return (!x.length || !x.find(function (val, i) {
                if (val.code === y.code) {
                    x.splice(i, 1);
                    return true;
                }
            }, false)) ? x.concat(y) : x;
        }, []).share();
    };
    return KeyboardEngineService;
}());
KeyboardEngineService = __decorate([
    Injectable()
], KeyboardEngineService);
export { KeyboardEngineService };
//# sourceMappingURL=keyboard-engine.service.js.map