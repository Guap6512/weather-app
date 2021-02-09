import {WeatherForecastResponse, WeatherInfo} from './weather-types';
import {WindDirections} from './weather-constants';

export const findDirection = (windDirectionDeg: number): string => {
    const windDirectionIndex = windDirectionDeg / 22.5;

    return WindDirections[Number(windDirectionIndex.toFixed(0))];
};

export const processWeatherResponse = (weatherResponse: WeatherForecastResponse): WeatherInfo => {
    const currentWeatherResponse = weatherResponse.list[0];
    const currentDescription = currentWeatherResponse.weather[0];

    return ({
        description: currentDescription.description,
        icon: currentDescription.icon,
        temperature: currentWeatherResponse.main.temp,
        windSpeed: currentWeatherResponse.wind.speed,
        windDirection: findDirection(currentWeatherResponse.wind.deg),
        pressure: currentWeatherResponse.main.pressure,
        humidity: currentWeatherResponse.main.humidity,
        probabilityOfRain: currentWeatherResponse.pop,
    });
};
