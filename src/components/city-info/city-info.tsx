import React from 'react';
import './city-info.scss';
import {connect} from 'react-redux';
import {Button} from '../button';
import {CityForm} from '../city-form';
import {getSelectedCity} from '../../modules/city/city-selectors';
import {AppState, Dispatch} from '../../store';
import {loadWeather as loadWeatherAction} from '../../modules/weather';

interface CityInfoProps {
    selectedCity: string;
    loadWeather: () => void;
}

const CityInfoComponent: React.FunctionComponent<CityInfoProps> = ({selectedCity, loadWeather}: CityInfoProps) => {
    const [isEditable, setEditable] = React.useState<boolean>(false);
    const onToggleEditable = () => setEditable(!isEditable);

    React.useEffect(() => {
        loadWeather();
    }, [selectedCity]);

    return isEditable
        ? (
            <div className="city-info">
                <CityForm onToggle={onToggleEditable} />
            </div>
        )
        : (
            <div className="city-info">
                <h3
                    className="city-info__current"
                    onClick={onToggleEditable}
                >
                    {selectedCity}
                </h3>
                <div className="city-info__controls">
                    <Button onClick={onToggleEditable}>
                        Сменить город
                    </Button>
                    <Button>
                        Моё местоположение
                    </Button>
                </div>
            </div>
        );
};

const mapStateToProps = (state: AppState) => ({
    selectedCity: getSelectedCity(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadWeather: () => dispatch(loadWeatherAction()),
});

export const CityInfo = connect(mapStateToProps, mapDispatchToProps)(CityInfoComponent);
