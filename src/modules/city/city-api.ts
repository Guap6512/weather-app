import {AxiosPromise} from 'axios';
import {performRequest} from '../../utils/perform-request';
import {CitySuggestionsApiUrl, DefaultCityRequestParameters} from './city-constants';
import {CitySuggestionsResponse} from './city-types';

export const fetchSuggestionsData = (cityName: string): AxiosPromise<CitySuggestionsResponse> => performRequest({
    url: CitySuggestionsApiUrl,
    params: {
        ...DefaultCityRequestParameters,
        namePrefix: cityName,
    },
});
