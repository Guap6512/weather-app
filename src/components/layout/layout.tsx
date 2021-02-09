import React from 'react';
import './layout.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}: LayoutProps) => <div className="layout">{children}</div>;
