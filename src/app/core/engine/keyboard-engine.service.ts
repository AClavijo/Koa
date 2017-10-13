import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';

@Injectable()
export class KeyboardEngineService {

  lunchEngine(): Observable<any> {
    /**
     * @Observable fromEvent
     */
    const keyDowns = Observable.fromEvent(document, 'keydown');

    /**
     * @Observable fromEvent
     */
    const keyUps = Observable.fromEvent(document, 'keyup');

    return keyDowns
      .merge(keyUps)
      .groupBy((e: KeyboardEvent) => e.keyCode)
      .map(group => group.distinctUntilChanged(null, (e: KeyboardEvent) => e.type))
      .mergeAll()
      .scan((x: Array<KeyboardEvent>, y: KeyboardEvent) => {
        return (!x.length) ? x.concat(y) : (x.find((val, i) => {
          if (val.code === y.code) {
            x.splice(i, 1);
            return true;
          }
        }, false)) ? x : x.concat(y);
      }, []).share();
  }
}
