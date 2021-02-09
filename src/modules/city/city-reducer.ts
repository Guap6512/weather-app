import {CityState} from './city-types';
import {createReducer} from '../../store';
import {CityActions} from './city-constants';
import {Action} from '../../store/store-types';

const cityInitialState: CityState = {
    temporaryCityName: '',
    selectedCityName: '',
    suggestions: [],
};

export const cityReducer = createReducer(cityInitialState, {
    [CityActions.SET_TEMPORARY_CITY]: (state: CityState, {payload: temporaryCityName}: Action<string>) => ({
        ...state,
        temporaryCityName,
    }),
    [CityActions.SET_SELECTED_CITY]: (state: CityState, {payload: selectedCityName}: Action<string>) => ({
        ...state,
        selectedCityName,
    }),
    [CityActions.SET_SUGGESTIONS]: (state: CityState, {payload: suggestions}: Action<string[]>) => ({
        ...state,
        suggestions,
    }),
});
