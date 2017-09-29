import { Component, OnInit } from '@angular/core';
import { Observable, KeyboardEngineService } from '../../core';

@Component({
  selector: 'app-luncher',
  templateUrl: './luncher.component.html',
  styleUrls: ['./luncher.component.css']
})
export class LuncherComponent implements OnInit {

  /**
   * Keyboard Listener Reference
   */
  private _kL$ = null;
  /**
   * Key combinaison to display
   */
  private _kD;

  constructor(private _kE: KeyboardEngineService) { }

  ngOnInit() {
  }

  lunchKeyboardEngine() {
    this._kL$ = this._kE.lunchEngine().subscribe(keys => {
      console.log(keys);
    });
  }

  stopKeyboardEngine() {
    this._kL$.unsubscribe();
    this._kD = null;
    this._kL$ = null;
  }

}
