import React from 'react';
import {connect} from 'react-redux';
import {getWeatherInfo, WeatherInfo} from '../../modules/weather';
import {WeatherDetailsItem} from './weather-details-item';
import {
    formatHumidity,
    formatPressure,
    formatProbabilityOfRain,
    formatWindSpeed,
} from './weather-details-utils';
import {AppState} from '../../store';
import './weather-details.scss';
import {getSelectedUnits, Units} from '../../modules/units';

interface WeatherDetailsProps {
    info: WeatherInfo|undefined;
    units: Units;
}

const WeatherDetailsComponent: React.FunctionComponent<WeatherDetailsProps> = ({info, units}: WeatherDetailsProps) => {
    if (!info) {
        return null;
    }

    return (
        <div className="weather-details">
            <WeatherDetailsItem
                label="Ветер"
                value={formatWindSpeed(info, units)}
            />
            <WeatherDetailsItem
                label="Давление"
                value={formatPressure(info)}
            />
            <WeatherDetailsItem
                label="Влажность"
                value={formatHumidity(info)}
            />
            <WeatherDetailsItem
                label="Вероятность дождя"
                value={formatProbabilityOfRain(info)}
            />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    info: getWeatherInfo(state),
    units: getSelectedUnits(state),
});

export const WeatherDetails = connect(mapStateToProps)(WeatherDetailsComponent);
