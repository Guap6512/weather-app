import {CityActions} from './city-constants';
import {AppState, createAction, Dispatch} from '../../store';
import {fetchSuggestionsData} from './city-api';
import {getTemporaryCity} from './city-selectors';
import {formatLocationCoordinates} from './city-utils';

export const setTemporaryCity = createAction<string>(CityActions.SET_TEMPORARY_CITY);
export const setSelectedCity = createAction<string>(CityActions.SET_SELECTED_CITY);
const setSuggestions = createAction<string[]>(CityActions.SET_SUGGESTIONS);

export const loadSuggestions = () => async (dispatch: Dispatch, getState: () => AppState) => {
    const temporaryCity = getTemporaryCity(getState());

    const {data: suggestionData} = await fetchSuggestionsData(temporaryCity);

    const suggestions = suggestionData?.data.map(cityItem => cityItem.name);
    dispatch(setSuggestions(suggestions));
};

const findCityByCoordinates = (latitude: number, longitude: number) => async (dispatch: Dispatch) => {
    const {data: locationData} = await fetchSuggestionsData(
        '',
        formatLocationCoordinates(latitude, longitude),
        100,
    );

    const cityName = locationData.data?.[0]?.name;

    if (cityName) {
        dispatch(setSelectedCity(cityName));
    }
};

export const locateCity = () => async (dispatch: Dispatch) => {
    navigator.geolocation.getCurrentPosition(
        position => {
            dispatch(findCityByCoordinates(position.coords.latitude, position.coords.longitude));
        },
        error => console.error(error),
        {timeout: 3000, enableHighAccuracy: true},
    );
};
