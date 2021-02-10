import {createSelector, Selector} from 'reselect';
import {WeatherInfo, WeatherState} from './weather-types';
import {AppState} from '../../store';
import {WEATHER_MODULE_NAME} from './weather-constants';

const rootSelector: Selector<AppState, WeatherState> = (state: AppState) => state[WEATHER_MODULE_NAME];

export const getWeatherInfo: Selector<AppState, WeatherInfo|undefined> = createSelector(
    rootSelector,
    (state: WeatherState) => state.data,
);

export const getWeatherError: Selector<AppState, string|undefined> = createSelector(
    rootSelector,
    (state: WeatherState) => state.error,
);
