import {createSelector, Selector} from 'reselect';
import {Units, UnitsState} from './units-types';
import {AppState} from '../../store';
import {UNITS_MODULE_NAME} from './units-constants';

const rootSelector: Selector<AppState, UnitsState> = (state: AppState) => state[UNITS_MODULE_NAME];

export const getSelectedUnits: Selector<AppState, Units> = createSelector(
    rootSelector,
    (state: UnitsState) => state.selectedUnit,
);
