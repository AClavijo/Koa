import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from '../rxjs';
import { KeyboardEngineService, TimerEngineService } from '../engine';

interface ApmTestInterface {
  runningTest: any;
  lunchTest(): void;
}

@Injectable()
export class ApmTestService implements ApmTestInterface {

  /**
   * Keyboard Event Reference
   */
  private _kL$: Subscription|null = null;

  /**
   * Timer Event Reference
   */
  private _timer$: Subscription;

  /**
   * Keys actions
   */
  private kea: BehaviorSubject<any>;

  /**
   * True if a test is running otherwise False
   */
  runningTest: any = false;

  constructor(private _keS: KeyboardEngineService, private _tS: TimerEngineService) {
    this.kea = new BehaviorSubject([]);
  }

  lunchTest(): [BehaviorSubject<any>, Subscription] {
    this._kL$ = this._keS.lunchEngine().subscribe(res => {
      this.kea.next(res);
    });
    this._timer$ = this._tS.startTimer().subscribe(res => {
    });
    this.runningTest = !this.runningTest;
    return [this.kea, this._timer$];
  }

  stopTest() {
    this._kL$.unsubscribe();
    this._timer$.unsubscribe();
    this.runningTest = !this.runningTest;
  }

  getKeyboardEvent() {
    return this._kL$;
  }

  getTimerEvent() {
    return this._timer$;
  }

  getKea(): BehaviorSubject<any> {
    return this.kea;
  }

}
