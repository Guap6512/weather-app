import {Units} from './units-types';
import {MetricalSystems} from './units-constants';

export const convertUnitToSystem = (unit: Units) => MetricalSystems[unit];
