import {combineReducers} from 'redux';
import {CITY_MODULE_NAME, cityReducer} from '../modules/city';
import {WEATHER_MODULE_NAME, weatherReducer} from '../modules/weather';
import {UNITS_MODULE_NAME, unitsReducer} from '../modules/units';

export const rootReducer = combineReducers({
    [CITY_MODULE_NAME]: cityReducer,
    [WEATHER_MODULE_NAME]: weatherReducer,
    [UNITS_MODULE_NAME]: unitsReducer,
});
