import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApmState, ApmTestService } from '../../../core';

@Component({
  selector: 'app-apm-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  private _keyboard;

  constructor(private _store: Store<ApmState>, private _apmT: ApmTestService) {
    this._keyboard = this._store.select('keyboard');
  }

  ngOnInit() { }

  triggerTest(event) {
    if (event) {
      this._apmT.lunchTest();
    } else {
      this._apmT.stopTest();
    }
  }
}
