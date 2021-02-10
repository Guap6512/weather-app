import {WeatherForecastResponse, WeatherInfo} from './weather-types';
import {WindDirections} from './weather-constants';

export const findDirection = (windDirectionDeg: number): string => {
    const windDirectionIndex = windDirectionDeg / 22.5;

    return WindDirections[Number(windDirectionIndex.toFixed(0))];
};

export const processWeatherResponse = (weatherResponse: WeatherForecastResponse): WeatherInfo => {
    const currentWeatherResponse = weatherResponse.list[0];
    const currentDescription = currentWeatherResponse.weather[0];

    const descriptionText = currentDescription.description[0].toUpperCase()
        + currentDescription.description.substring(1);
    const temperature = currentWeatherResponse.main.temp.toFixed();

    return ({
        temperature,
        description: descriptionText,
        icon: currentDescription.icon,
        windSpeed: currentWeatherResponse.wind.speed,
        windDirection: findDirection(currentWeatherResponse.wind.deg),
        pressure: currentWeatherResponse.main.pressure,
        humidity: currentWeatherResponse.main.humidity,
        probabilityOfRain: currentWeatherResponse.pop,
    });
};
