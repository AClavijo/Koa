import { Component, OnInit } from '@angular/core';
import { Observable, ApmTestService } from '../../core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  private KeyEvent$: Observable<any>;

  private keyboard = [
    // tslint:disable-next-line:max-line-length
    {key: 'a', text: 'A', cols: 1, rows: 1, color: 'lightblue'}, {key: 'z', text: 'Z', cols: 1, rows: 1, color: 'lightblue'}, {key: 'e', text: 'E', cols: 1, rows: 1, color: 'lightblue'}, {key: 'r', text: 'R', cols: 1, rows: 1, color: 'lightblue'},
    {key: 'q', text: 'Q', cols: 1, rows: 1, color: 'lightblue'}, {key: 's', text: 'S', cols: 1, rows: 1, color: 'lightblue'}, {key: 'd', text: 'D', cols: 1, rows: 1, color: 'lightblue'}, {key: 'f', text: 'F', cols: 1, rows: 1, color: 'lightblue'},
    // tslint:disable-next-line:max-line-length
    {key: 'w', text: 'W', cols: 1, rows: 1, color: 'lightblue'}, {key: 'x', text: 'X', cols: 1, rows: 1, color: 'lightblue'}, {key: 'c', text: 'C', cols: 1, rows: 1, color: 'lightblue'}, {key: 'v', text: 'V', cols: 1, rows: 1, color: 'lightblue'}
  ];

  constructor(private ApmTS: ApmTestService) { }

  ngOnInit() {
    this.ApmTS.getKea().subscribe((keys: KeyboardEvent[]) => {
      const keysAcc = [];
      if (keys.length > 0) {
        keys.map((key: KeyboardEvent) => {
          this.keyboard.map((x, idx) => {
            if (x.key === key.key) {
              keysAcc.push(x);
              this.keyboard[idx].color = 'lightgreen';
            } else {
              if (!keysAcc.find(e => x.key === e.key)) {
                this.keyboard[idx].color = 'lightblue';
              }
            }
          });
        });
      } else {
        this.keyboard.map((x, idx) => {
          this.keyboard[idx].color = 'lightblue';
        });
      }
    });
  }

}
