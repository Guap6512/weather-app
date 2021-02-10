import React from 'react';
import './weather-details-item.scss';

interface WeatherDetailsItemProps {
    label: string;
    value: string;
}

export const WeatherDetailsItem: React.FunctionComponent<WeatherDetailsItemProps> = ({
    label,
    value,
}: WeatherDetailsItemProps) => (
    <div className="weather-details-item">
        <div className="weather-details-item__label">
            {label}
        </div>
        <div className="weather-details-item__value">
            {value}
        </div>
    </div>
);
