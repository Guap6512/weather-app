import {Units} from './units-types';
import {MetricalSystemsToUnits} from './units-constants';

export const convertUnitsToSystem = (unit: Units) => MetricalSystemsToUnits[unit];
