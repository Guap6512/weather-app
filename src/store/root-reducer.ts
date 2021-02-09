import {combineReducers} from 'redux';
import {CITY_MODULE_NAME, cityReducer} from '../modules/city';

export const rootReducer = combineReducers({
    [CITY_MODULE_NAME]: cityReducer,
});
