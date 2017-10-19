import { Injectable } from '@angular/core';

@Injectable()
export class KeyboardMappingService {
   getKeyboardMapping(keys: KeyboardEvent[]) {
    const keysAcc: any[] = [];
    if (keys.length > 0) {
      keys.map((key: KeyboardEvent) => {
        this.keyboard.map((x, idx) => {
          if (x.key === key.key) {
            keysAcc.push(x);
            this.keyboard[idx].color = 'lightgreen';
          } else {
            if (!keysAcc.find(e => x.key === e.key)) {
              this.keyboard[idx].color = 'lightblue';
            }
          }
        });
      });
    } else {
      this.keyboard.map((x, idx) => {
        this.keyboard[idx].color = 'lightblue';
      });
    }
  }
}
