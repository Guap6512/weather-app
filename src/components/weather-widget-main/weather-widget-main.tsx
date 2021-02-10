import React from 'react';
import {connect} from 'react-redux';
import {getWeatherError, getWeatherInfo, WeatherInfo} from '../../modules/weather';
import './weather-widget-main.scss';
import {WeatherIcon} from '../weather-icon';
import {AppState} from '../../store';

interface WeatherWidgetMainProps {
    info: WeatherInfo|undefined;
    error: string|undefined;
}

const WeatherWidgetComponent: React.FunctionComponent<WeatherWidgetMainProps> = ({
    info,
    error,
}: WeatherWidgetMainProps) => {
    if (!info) {
        return <>Loading...</>;
    }

    if (error) {
        return <>{error}</>;
    }

    return (
        <div className="weather-widget-main">
            <h1 className="weather-widget-main__temperature">
                <WeatherIcon icon={info.icon} />
                {info.temperature}º
            </h1>
            <h4 className="weather-widget-main__description">
                {info.description}
            </h4>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    info: getWeatherInfo(state),
    error: getWeatherError(state),
});

export const WeatherWidget = connect(mapStateToProps)(WeatherWidgetComponent);
