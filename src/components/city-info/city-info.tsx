import React from 'react';
import './city-info.scss';
import {connect} from 'react-redux';
import {Button} from '../button';
import {CityForm} from '../city-form';
import {AppState, Dispatch} from '../../store';
import {loadWeather as loadWeatherAction} from '../../modules/weather';
import {UnitsToggle} from '../units-toggle';
import {locateCity as locateCityAction, getSelectedCity} from '../../modules/city';

interface CityInfoProps {
    selectedCity: string;
    loadWeather: () => void;
    locateCity: () => void;
}

const CityInfoComponent: React.FunctionComponent<CityInfoProps> = ({
    selectedCity,
    loadWeather,
    locateCity,
}: CityInfoProps) => {
    const [isEditable, setEditable] = React.useState<boolean>(false);
    const onToggleEditable = () => setEditable(!isEditable);

    React.useEffect(() => {
        loadWeather();
    }, [selectedCity]);

    return isEditable
        ? (
            <header className="city-info">
                <CityForm onToggle={onToggleEditable} />
            </header>
        )
        : (
            <header className="city-info">
                <h3 className="city-info__current">
                    {selectedCity}
                    <UnitsToggle />
                </h3>
                <div className="city-info__controls">
                    <Button onClick={onToggleEditable}>
                        Сменить город
                    </Button>
                    <Button onClick={locateCity}>
                        Моё местоположение
                    </Button>
                </div>
            </header>
        );
};

const mapStateToProps = (state: AppState) => ({
    selectedCity: getSelectedCity(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadWeather: () => dispatch(loadWeatherAction()),
    locateCity: () => dispatch(locateCityAction()),
});

export const CityInfo = connect(mapStateToProps, mapDispatchToProps)(CityInfoComponent);
