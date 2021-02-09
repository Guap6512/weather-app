import React, {InputHTMLAttributes} from 'react';
import './city-form-input.scss';

interface CityFormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const CityFormInput: React.FunctionComponent<CityFormInputProps> = ({...props}: CityFormInputProps) => (
    <input
        className="city-form-input"
        {...props}
    />
);
