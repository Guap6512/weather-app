import {UnitsActions} from './units-constants';
import {Units} from './units-types';
import {createAction} from '../../store';

export const setUnits = createAction<Units>(UnitsActions.SET_UNITS);
