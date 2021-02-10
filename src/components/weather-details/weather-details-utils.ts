import {WeatherInfo} from '../../modules/weather';
import {convertUnitsToSystem, MetricalSystems, Units} from '../../modules/units';

export const formatWindSpeed = ({windSpeed, windDirection}: WeatherInfo, units: Units) => {
    const system = convertUnitsToSystem(units);
    const windSpeedUnits = system === MetricalSystems.METRIC ? 'м/с' : 'миль/ч';

    return (
        `${windSpeed} ${windSpeedUnits}, ${windDirection}`
    );
};

export const formatPressure = ({pressure}: WeatherInfo) => (
    `${pressure} мм рт. ст.`
);

export const formatHumidity = ({humidity}: WeatherInfo) => (
    `${humidity}%`
);

export const formatProbabilityOfRain = ({probabilityOfRain}: WeatherInfo) => (
    `${probabilityOfRain}%`
);
