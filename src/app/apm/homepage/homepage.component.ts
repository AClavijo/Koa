import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BO_ACTIONS, KEY_ACTIONS, ApmState } from '../../core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _store: Store<ApmState>) { }

  ngOnInit() {
    this._store.select('bo').subscribe(bo => console.log(bo));
    this._store.dispatch({type: KEY_ACTIONS.GRID_CONFIG});
    this._store.dispatch({type: KEY_ACTIONS.GRID_CONFIG});
  }

  test(event: any) {
    console.log(event);
  }

  selectBo() {
    this._store.dispatch({type: BO_ACTIONS.BO_ADD});
  }
}
