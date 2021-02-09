import React from 'react';
import './city-form-suggestions.scss';

interface CityFormSuggestionsProps {
    suggestions: string[];
    onSelect: (cityName: string) => void;
}

export const CityFormSuggestions: React.FunctionComponent<CityFormSuggestionsProps> = ({
    suggestions,
    onSelect,
}: CityFormSuggestionsProps) => {
    const createOnSelect = (cityName: string) => () => onSelect(cityName);

    return (
        <div
            className="city-form-suggestions"
            role="list"
        >
            {suggestions.map(cityName => (
                <div
                    className="city-form-suggestions__item"
                    onClick={createOnSelect(cityName)}
                    key={cityName}
                    role="listitem"
                >
                    {cityName}
                </div>
            ))}
        </div>
    );
};
