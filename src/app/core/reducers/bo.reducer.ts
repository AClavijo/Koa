import { Action } from '@ngrx/store';

export const BO_ACTIONS = {
    BO_ADD: 'BO_ADD'
};

export function boReducer (state: any = [], action: Action ) {
     switch (action.type) {
         case BO_ACTIONS.BO_ADD:
            return [].concat(state, [
                'a', 'z', 'e', 'r', 'q', 's', 'd', 'f'
            ]);
        default:
            return state;
     }
};
