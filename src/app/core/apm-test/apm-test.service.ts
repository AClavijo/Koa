import { Injectable } from '@angular/core';
import { Observable, Subject } from '../rxjs';
import { KeyboardEngineService, TimerEngineService } from '../engine';

interface ApmTestInterface {
  runningTest;
  lunchTest();
}

@Injectable()
export class ApmTestService implements ApmTestInterface {

  /**
   * Keyboard Event Reference
   */
  private _kL$ = null;

  private KeyB;

  /**
   * Timer Event Reference
   */
  private _timer$;

  private kea: Subject<any>;

  /**
   * True if a test is running otherwise False
   */
  runningTest = false;

  constructor(private _keS: KeyboardEngineService, private _tS: TimerEngineService) {
    this.kea = new Subject();
  }

  lunchTest() {
    this._kL$ = this._keS.lunchEngine().subscribe(res => {
      this.kea.next(res);
    });
    this._timer$ = this._tS.startTimer().subscribe(res => {
    });
    this.runningTest = true;
  }

  stopTest() {
    this._kL$.unsubscribe();
    this._timer$.unsubscribe();
    this.runningTest = false;
  }

  getKeyboardEvent() {
    return this._kL$;
  }

  getTimerEvent() {
    return this._timer$;
  }

  getKea(): Subject<any> {
    return this.kea;
  }

}
