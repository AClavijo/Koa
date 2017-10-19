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
var KeyboardComponent = (function () {
    function KeyboardComponent(ApmTS) {
        this.ApmTS = ApmTS;
        this.keyboard = [
            // tslint:disable-next-line:max-line-length
            { key: 'a', text: 'A', cols: 1, rows: 1, color: 'lightblue' }, { key: 'z', text: 'Z', cols: 1, rows: 1, color: 'lightblue' }, { key: 'e', text: 'E', cols: 1, rows: 1, color: 'lightblue' }, { key: 'r', text: 'R', cols: 1, rows: 1, color: 'lightblue' },
            { key: 'q', text: 'Q', cols: 1, rows: 1, color: 'lightblue' }, { key: 's', text: 'S', cols: 1, rows: 1, color: 'lightblue' }, { key: 'd', text: 'D', cols: 1, rows: 1, color: 'lightblue' }, { key: 'f', text: 'F', cols: 1, rows: 1, color: 'lightblue' },
            // tslint:disable-next-line:max-line-length
            { key: 'w', text: 'W', cols: 1, rows: 1, color: 'lightblue' }, { key: 'x', text: 'X', cols: 1, rows: 1, color: 'lightblue' }, { key: 'c', text: 'C', cols: 1, rows: 1, color: 'lightblue' }, { key: 'v', text: 'V', cols: 1, rows: 1, color: 'lightblue' }
        ];
    }
    KeyboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApmTS.getKea().subscribe(function (keys) {
            var keysAcc = [];
            if (keys.length > 0) {
                keys.map(function (key) {
                    _this.keyboard.map(function (x, idx) {
                        if (x.key === key.key) {
                            keysAcc.push(x);
                            _this.keyboard[idx].color = 'lightgreen';
                        }
                        else {
                            if (!keysAcc.find(function (e) { return x.key === e.key; })) {
                                _this.keyboard[idx].color = 'lightblue';
                            }
                        }
                    });
                });
            }
            else {
                _this.keyboard.map(function (x, idx) {
                    _this.keyboard[idx].color = 'lightblue';
                });
            }
        });
        this.ApmTS.getKea().bufferCount(3, 3).subscribe(function (val) { return console.log("Val buffer: " + val); });
    };
    return KeyboardComponent;
}());
KeyboardComponent = __decorate([
    Component({
        selector: 'app-apm-keyboard',
        templateUrl: './keyboard.component.html',
        styleUrls: ['./keyboard.component.css']
    }),
    __metadata("design:paramtypes", [ApmTestService])
], KeyboardComponent);
export { KeyboardComponent };
//# sourceMappingURL=keyboard.component.js.map