import {WeatherInfo, WeatherState} from './weather-types';
import {createReducer, Action} from '../../store';
import {WeatherActions} from './weather-constants';

const weatherInitialState: WeatherState = {};

export const weatherReducer = createReducer(weatherInitialState, {
    [WeatherActions.SET_WEATHER_DATA]: (state: WeatherState, {payload: data}: Action<WeatherInfo>) => ({
        ...state,
        data,
    }),
    [WeatherActions.SET_WEATHER_ERROR]: (state: WeatherState, {payload: error}: Action<string>) => ({
        ...state,
        error,
    }),
});
