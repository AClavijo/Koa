import { Component, Input } from '@angular/core';
import { Observable, ApmTestService } from '../../../core';

@Component({
  selector: 'app-apm-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {

  private KeyEvent$: Observable<any>;

  constructor() { }

  @Input() Keyboard;
}