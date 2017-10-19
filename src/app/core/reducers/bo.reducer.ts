import { Action } from '@ngrx/store';
import { BO_ACTIONS } from '../actions';

export function BoReducer (state: any = [], action: Action ) {
    switch (action.type) {
        case BO_ACTIONS.BO_ADD:
        return [].concat(state, [
            'a', 'z', 'e', 'r', 'q', 's', 'd', 'f'
        ]);
        default:
            return state;
    }
}
