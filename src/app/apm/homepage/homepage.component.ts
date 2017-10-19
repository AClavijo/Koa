import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BO_ACTIONS, ApmState } from '../../core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private store: Store<ApmState>) { }

  ngOnInit() {
    this.store.select('bo').subscribe(bo => console.log(bo));
  }

  test(event: any) {
    console.log(event);
  }

  selectBo() {
    this.store.dispatch({type: BO_ACTIONS.BO_ADD});
  }
}
