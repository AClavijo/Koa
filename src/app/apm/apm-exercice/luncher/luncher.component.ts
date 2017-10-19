import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, ApmTestService } from '../../../core';

@Component({
  selector: 'app-apm-luncher',
  templateUrl: './luncher.component.html',
  styleUrls: ['./luncher.component.css']
})
export class LuncherComponent implements OnInit {
  /**
   * Key combinaison to display
   */
  _kD: Subscription;

  constructor(public _apmTS: ApmTestService ) { }

  ngOnInit() {
  }

  lunchKeyboardEngine() {
    this._apmTS.lunchTest();
  }

  stopKeyboardEngine() {
    this._apmTS.stopTest();
  }

}
