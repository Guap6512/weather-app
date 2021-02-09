import {Units} from './units-types';

export const UNITS_MODULE_NAME = 'UNITS_MODULE';

export const DefaultSelectedUnit = Units.CELSIUS;
export const UnitsActions = {
    SET_UNITS: 'SET_UNITS',
};

export const MetricalSystems: Record<Units, string> = {
    [Units.CELSIUS]: 'metric',
    [Units.FAHRENHEIT]: 'imperial',
};
