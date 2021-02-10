import {MetricalSystems, Units} from './units-types';

export const UNITS_MODULE_NAME = 'UNITS_MODULE';

export const DefaultSelectedUnit = Units.CELSIUS;
export const UnitsActions = {
    SET_UNITS: 'SET_UNITS',
};

export const MetricalSystemsToUnits: Record<Units, string> = {
    [Units.CELSIUS]: MetricalSystems.METRIC,
    [Units.FAHRENHEIT]: MetricalSystems.IMPERIAL,
};
