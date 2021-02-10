import {AppState, createAction, Dispatch} from '../../store';
import {WeatherInfo} from './weather-types';
import {WeatherActions} from './weather-constants';
import {getSelectedCity} from '../city/city-selectors';
import {convertUnitsToSystem, getSelectedUnits} from '../units';
import {fetchWeatherData} from './weather-api';
import {processWeatherResponse} from './weather-utils';

const setWeatherData = createAction<WeatherInfo>(WeatherActions.SET_WEATHER_DATA);
const setWeatherError = createAction<string>(WeatherActions.SET_WEATHER_ERROR);

export const loadWeather = () => async (dispatch: Dispatch, getState: () => AppState) => {
    const selectedCity = getSelectedCity(getState());
    const selectedUnit = getSelectedUnits(getState());

    if (!selectedCity?.length) {
        return;
    }

    try {
        const {data: weatherResponse} = await fetchWeatherData(selectedCity, convertUnitsToSystem(selectedUnit));

        const weatherInfo = processWeatherResponse(weatherResponse);

        dispatch(setWeatherData(weatherInfo));
    } catch (e) {
        console.error(e);
        dispatch(setWeatherError('Ошибка загрузки погоды для данного города.'));
        dispatch(setWeatherData());
    }
};
