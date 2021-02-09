import {performRequest} from '../../utils/perform-request';
import {DefaultWeatherRequestParameters, WeatherApiUrl} from './weather-constants';

export const fetchWeatherData = (cityName: string, units: string) => performRequest({
    url: WeatherApiUrl,
    params: {
        ...DefaultWeatherRequestParameters,
        units,
        q: cityName,
    },
});
