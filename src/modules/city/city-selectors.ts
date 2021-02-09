import {createSelector, Selector} from 'reselect';
import {AppState} from '../../store';
import {CityState} from './city-types';
import {CITY_MODULE_NAME} from './city-constants';

const rootSelector: Selector<AppState, CityState> = (state: AppState) => state[CITY_MODULE_NAME];

export const getTemporaryCity: Selector<AppState, string> = createSelector(
    rootSelector,
    (state: CityState) => state.temporaryCityName,
);

export const getSelectedCity: Selector<AppState, string> = createSelector(
    rootSelector,
    (state: CityState) => state.selectedCityName,
);

export const getCitySuggestions: Selector<AppState, string[]> = createSelector(
    rootSelector,
    (state: CityState) => state.suggestions,
);
