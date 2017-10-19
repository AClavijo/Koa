import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable, ApmTestService } from '../../../core';

@Component({
  selector: 'app-apm-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardComponent {
  @Input() keyboard;
}
