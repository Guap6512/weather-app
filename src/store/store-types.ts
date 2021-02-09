import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {CITY_MODULE_NAME} from '../modules/city/city-constants';
import {CityState} from '../modules/city/city-types';

export type AppState = {
    [CITY_MODULE_NAME]: CityState;
};

export type Dispatch = ThunkDispatch<any, undefined, AnyAction>;

export type Action<P = void> = P extends void
    ? Readonly<{type: string}>
    : Readonly<{type: string; payload: P}>;
