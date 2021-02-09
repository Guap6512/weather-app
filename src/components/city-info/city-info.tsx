import React from 'react';
import './city-info.scss';
import {connect} from 'react-redux';
import {Button} from '../button';
import {CityForm} from '../city-form';
import {getSelectedCity} from '../../modules/city/city-selectors';
import {AppState} from '../../store';

interface CityInfoProps {
    selectedCity: string;
}

const CityInfoComponent: React.FunctionComponent<CityInfoProps> = ({selectedCity}: CityInfoProps) => {
    const [isEditable, setEditable] = React.useState<boolean>(false);

    const onToggleEditable = () => setEditable(!isEditable);

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

export const CityInfo = connect(mapStateToProps)(CityInfoComponent);
