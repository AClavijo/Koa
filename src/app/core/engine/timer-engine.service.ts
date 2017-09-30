import { Injectable } from '@angular/core';
import { Observable } from '../rxjs';

@Injectable()
export class TimerEngineService {

  constructor() { }

  startTimer(): Observable<any> {
    return Observable.timer(0, 1000);
  }

}
