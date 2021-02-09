import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {CITY_MODULE_NAME, CityState} from '../modules/city';
import {WEATHER_MODULE_NAME, WeatherState} from '../modules/weather';
import {UNITS_MODULE_NAME, UnitsState} from '../modules/units';

export type AppState = {
    [CITY_MODULE_NAME]: CityState;
    [WEATHER_MODULE_NAME]: WeatherState;
    [UNITS_MODULE_NAME]: UnitsState;
};

export type Dispatch = ThunkDispatch<any, undefined, AnyAction>;

export type Action<P = void> = P extends void
    ? Readonly<{type: string}>
    : Readonly<{type: string; payload: P}>;
