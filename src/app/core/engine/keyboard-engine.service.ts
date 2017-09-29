import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';

@Injectable()
export class KeyboardEngineService {
  lunchEngine(): Observable<any> {
    const keyDowns = Observable.fromEvent(document, 'keydown');
    const keyUps = Observable.fromEvent(document, 'keyup');

    return keyDowns
      .merge(keyUps)
      .groupBy((e: KeyboardEvent) => e.keyCode)
      .map(group => group.distinctUntilChanged(null, (e: KeyboardEvent) => e.type))
      .mergeAll()
      .scan((x: Array<KeyboardEvent>, y: KeyboardEvent) => {
        if (!x.length) {
          x.push(y);
        } else {
          let i = 0;
          if (x.reduce((a, b: KeyboardEvent, idx) => {
            if (b.code === y.code) {
              i = idx;
              return true;
            }
            return a;
          }, false)) {
            x.splice(i, 1);
          } else {
            x.push(y);
          }
        }
        return x;
      }, []).share();
  }
}
