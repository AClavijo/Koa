import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';

@Injectable()
export class KeyboardMappingService {

    getKeyboard(_keyboardConfig: any[], keys) {
        const keysAcc: any[] = [];
        if (keys.length > 0) {
            keys.map((key: KeyboardEvent) => {
            _keyboardConfig.map((x: any, idx: any) => {
                if (x.key === key.key) {
                keysAcc.push(x);
                _keyboardConfig[idx].color = 'lightgreen';
                } else {
                if (!keysAcc.find(e => x.key === e.key)) {
                    _keyboardConfig[idx].color = 'lightblue';
                }
                }
            });
            });
        } else {
            _keyboardConfig.map((x: any, idx: any) => {
            _keyboardConfig[idx].color = 'lightblue';
            });
        }

        return _keyboardConfig;
    }
}
