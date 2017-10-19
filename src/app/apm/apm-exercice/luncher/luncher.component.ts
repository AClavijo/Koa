import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apm-luncher',
  templateUrl: './luncher.component.html',
  styleUrls: ['./luncher.component.css']
})
export class LuncherComponent {
  /**
   * Key combinaison to display
   */
  private trigger = false;
  @Output() isTrigger = new EventEmitter();

  constructor() { }

  lunchKeyboardEngine() {
    this.isTrigger.emit(this.trigger = !this.trigger);
  }
}
