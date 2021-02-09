import {Action} from './store-types';

export type HandlersMap = Record<string, Function>;

export const createReducer = (
    initialState: object,
    handlers: HandlersMap,
) => (state = initialState, action: Action) => {
    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    }
    return state;
};
