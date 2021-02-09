import React from 'react';
import {connect} from 'react-redux';
import {CityFormButton} from './components/button';
import {CityFormInput} from './components/input';
import {AppState, Dispatch} from '../../store';
import {
    loadSuggestions as loadSuggestionsAction,
    setTemporaryCity as setTemporaryCityAction,
    setSelectedCity as setSelectedCityAction,
    getTemporaryCity,
} from '../../modules/city';
import './city-form.scss';
import {useDebouncedEffect} from '../../hooks/use-debounced-effect';
import {getCitySuggestions} from '../../modules/city/city-selectors';
import {CityFormSuggestions} from './components/suggestions';

interface CityFormProps {
    temporaryCityName: string;
    loadSuggestions: () => void;
    setTemporaryCity: (cityName: string) => void;
    setSelectedCity: (cityName: string) => void;
    suggestions: string[];
    onToggle: () => void;
}

const CityFormComponent: React.FunctionComponent<CityFormProps> = ({
    temporaryCityName,
    loadSuggestions,
    setTemporaryCity,
    setSelectedCity,
    onToggle,
    suggestions,
}: CityFormProps) => {
    useDebouncedEffect(() => {
        loadSuggestions();
    }, 1000, [temporaryCityName]);

    const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setTemporaryCity(value);
    const onSelect = (cityName: string) => {
        setSelectedCity(cityName);
        onToggle();
        setTemporaryCity('');
    };
    const onSubmit = () => temporaryCityName?.length && onSelect(temporaryCityName);

    const showSuggestions = temporaryCityName.length && suggestions.length;

    return (
        <div className="city-form">
            <CityFormInput
                onChange={onChange}
                value={temporaryCityName}
            />
            {showSuggestions && (
                <CityFormSuggestions
                    suggestions={suggestions}
                    onSelect={onSelect}
                />
            )}
            <CityFormButton onClick={onSubmit}>
                OK
            </CityFormButton>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    temporaryCityName: getTemporaryCity(state),
    suggestions: getCitySuggestions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadSuggestions: () => dispatch(loadSuggestionsAction()),
    setTemporaryCity: (cityName: string) => dispatch(setTemporaryCityAction(cityName)),
    setSelectedCity: (cityName: string) => dispatch(setSelectedCityAction(cityName)),
});

export const CityForm = connect(mapStateToProps, mapDispatchToProps)(CityFormComponent);
