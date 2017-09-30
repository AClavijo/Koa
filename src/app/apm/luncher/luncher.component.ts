import { Component, OnInit } from '@angular/core';
import { Observable, ApmTestService } from '../../core';

@Component({
  selector: 'app-luncher',
  templateUrl: './luncher.component.html',
  styleUrls: ['./luncher.component.css']
})
export class LuncherComponent implements OnInit {
  /**
   * Key combinaison to display
   */
  private _kD;

  constructor(private _apmTS: ApmTestService ) { }

  ngOnInit() {
  }

  lunchKeyboardEngine() {
    this._apmTS.lunchTest();
  }

  stopKeyboardEngine() {
    this._apmTS.stopTest();
  }

}
