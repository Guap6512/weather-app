import {Units, UnitsState} from './units-types';
import {DefaultSelectedUnit, UnitsActions} from './units-constants';
import {createReducer, Action} from '../../store';

const initialState: UnitsState = {
    selectedUnit: DefaultSelectedUnit,
};

export const unitsReducer = createReducer(initialState, {
    [UnitsActions.SET_UNITS]: (state: UnitsState, {payload: unit}: Action<Units>) => ({
        ...state,
        selectedUnit: unit,
    }),
});
