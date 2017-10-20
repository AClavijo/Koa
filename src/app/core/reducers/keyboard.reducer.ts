import { Action } from '@ngrx/store';
import { KEY_ACTIONS } from '../actions';

export function KeyboardReducer(state: any[] = [], action: Action) {
    switch (action.type) {
        case KEY_ACTIONS.GRID_CONFIG:
            return [
                // tslint:disable-next-line:max-line-length
                {key: 'a', text: 'A', cols: 1, rows: 1, color: 'lightblue'}, {key: 'z', text: 'Z', cols: 1, rows: 1, color: 'lightblue'}, {key: 'e', text: 'E', cols: 1, rows: 1, color: 'lightblue'}, {key: 'r', text: 'R', cols: 1, rows: 1, color: 'lightblue'},
                {key: 'q', text: 'Q', cols: 1, rows: 1, color: 'lightblue'}, {key: 's', text: 'S', cols: 1, rows: 1, color: 'lightblue'}, {key: 'd', text: 'D', cols: 1, rows: 1, color: 'lightblue'}, {key: 'f', text: 'F', cols: 1, rows: 1, color: 'lightblue'},
                // tslint:disable-next-line:max-line-length
                {key: 'w', text: 'W', cols: 1, rows: 1, color: 'lightblue'}, {key: 'x', text: 'X', cols: 1, rows: 1, color: 'lightblue'}, {key: 'c', text: 'C', cols: 1, rows: 1, color: 'lightblue'}, {key: 'v', text: 'V', cols: 1, rows: 1, color: 'lightblue'}
            ];
        default:
            return state;
    }
}
