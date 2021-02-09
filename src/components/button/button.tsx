import React, {ButtonHTMLAttributes} from 'react';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = ({children, ...props}: ButtonProps) => (
    <button
        className="button"
        {...props}
    >
        {children}
    </button>
);
