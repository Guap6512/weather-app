import React, {ButtonHTMLAttributes} from 'react';
import './city-form-button.scss';

interface CityFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const CityFormButton: React.FunctionComponent<CityFormButtonProps> = ({
    children,
    ...props
}: CityFormButtonProps) => (
    <button
        className="city-form-button"
        {...props}
    >
        {children}
    </button>
);
