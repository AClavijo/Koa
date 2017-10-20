import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, ApmState, ApmTestService, KeyboardMappingService } from '../../../core';

@Component({
  selector: 'app-apm-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  _keyboardConfig: any;
  _keyboard;
  kea: Subject<any>;
  timer$: any;

  constructor(private _store: Store<ApmState>, private _apmT: ApmTestService, private _keyMapS: KeyboardMappingService) {
    this._store.select('keyboard').subscribe(keyboadConfig => {
      this._keyboardConfig = keyboadConfig;
    });
  }

  triggerTest(event: boolean): void {
    if (event) {
      [this.kea, this.timer$] = this._apmT.lunchTest();
      this._keyboard = this.kea.map(keys => this._keyMapS.getKeyboard(this._keyboardConfig, keys));
    } else {
      this._apmT.stopTest();
    }
  }
}
