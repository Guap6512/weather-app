export interface CityState {
    selectedCityName: string;
    temporaryCityName: string;
    suggestions: string[];
}

export interface CitySuggestionsResponse {
    data: CityResponse[];
}

export interface CityResponse {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}
