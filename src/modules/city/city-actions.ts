import {CityActions} from './city-constants';
import {AppState, createAction, Dispatch} from '../../store';
import {fetchSuggestionsData} from './city-api';
import {getTemporaryCity} from './city-selectors';

export const setTemporaryCity = createAction<string>(CityActions.SET_TEMPORARY_CITY);
export const setSelectedCity = createAction<string>(CityActions.SET_SELECTED_CITY);
const setSuggestions = createAction<string[]>(CityActions.SET_SUGGESTIONS);

export const loadSuggestions = () => async (dispatch: Dispatch, getState: () => AppState) => {
    const temporaryCity = getTemporaryCity(getState());

    const {data: suggestionData} = await fetchSuggestionsData(temporaryCity);

    const suggestions = suggestionData?.data.map(cityItem => cityItem.name);
    dispatch(setSuggestions(suggestions));
};
