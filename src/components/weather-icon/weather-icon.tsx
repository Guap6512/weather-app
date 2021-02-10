import React from 'react';
import {createWeatherIconUrl} from './weather-icon-utils';
import './weather-icon.scss';

interface WeatherIconProps {
    icon: string;
}

export const WeatherIcon: React.FunctionComponent<WeatherIconProps> = ({icon}: WeatherIconProps) => {
    const iconUrl = createWeatherIconUrl(icon);

    return (
        <img
            src={iconUrl}
            className="weather-icon"
            alt="Weather icon"
        />
    );
};
