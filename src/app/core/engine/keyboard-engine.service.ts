import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';

@Injectable()
export class KeyboardEngineService {
  lunchEngine(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const keyUps = Observable.fromEvent(document, 'keyup').distinctUntilChanged((x: KeyboardEvent, y: KeyboardEvent) => x.code === y.code);
    const keyDowns = Observable.fromEvent(document, 'keydown').distinctUntilChanged((x: KeyboardEvent, y: KeyboardEvent) => x.code === y.code);
    /*return Observable.fromEvent(document, 'keydown').distinctUntilChanged((x: KeyboardEvent, y: KeyboardEvent) => x.code === y.code)
    .reduce((x: Array<KeyboardEvent>, y: KeyboardEvent) => {
      if (!x.length) {
        x.push(y);
      } else {
        if (x.find(v => v.code !== y.code)) {
          x.push(y);
        }
      }

      console.log(x);
      return x;
    }, []).combineLatest(keyUps, (x, y) => {
      console.log(x);
      console.log(y);
    });*/
    return Observable.merge(keyDowns, keyUps).reduce((x: Array<KeyboardEvent>, y: KeyboardEvent) => {
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
          console.log(x);
          console.log(i);
          x.splice(i, 1);
        } else {
          x.push(y);
        }
      }

      console.log(x);
      return x;
    }, []).share();
  }
}
