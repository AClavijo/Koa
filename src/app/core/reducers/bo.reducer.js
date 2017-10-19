export var BO_ACTIONS = {
    BO_ADD: 'BO_ADD'
};
export function boReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case BO_ACTIONS.BO_ADD:
            return [].concat(state, [
                'a', 'z', 'e', 'r', 'q', 's', 'd', 'f'
            ]);
        default:
            return state;
    }
}
;
//# sourceMappingURL=bo.reducer.js.map