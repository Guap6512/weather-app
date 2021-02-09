export const CITY_MODULE_NAME = 'CITY_MODULE';

export const CityActions = {
    SET_SELECTED_CITY: 'SET_SELECTED_CITY',
    SET_TEMPORARY_CITY: 'SET_TEMPORARY_CITY',
    SET_SUGGESTIONS: 'SET_SUGGESTIONS',
};

export const DefaultCityRequestParameters = {
    limit: 5,
    languageCode: 'ru',
    sort: '-population',
};

export const CitySuggestionsApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const DefaultSelectedCity = 'Москва';
