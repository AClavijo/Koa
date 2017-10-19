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
import { Store } from '@ngrx/store';
import { BO_ACTIONS } from '../../core';
var HomepageComponent = (function () {
    function HomepageComponent(store) {
        this.store = store;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.store.select('bo').subscribe(function (bo) { return console.log(bo); });
    };
    HomepageComponent.prototype.test = function (event) {
        console.log(event);
    };
    HomepageComponent.prototype.selectBo = function () {
        this.store.dispatch({ type: BO_ACTIONS.BO_ADD });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Component({
        selector: 'app-homepage',
        templateUrl: './homepage.component.html',
        styleUrls: ['./homepage.component.css']
    }),
    __metadata("design:paramtypes", [Store])
], HomepageComponent);
export { HomepageComponent };
//# sourceMappingURL=homepage.component.js.map