import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
    getSelectedUnits,
    setUnits,
    Units,
} from '../../modules/units';
import {AppState, Dispatch} from '../../store';
import {loadWeather as loadWeatherAction} from '../../modules/weather';
import './units-toggle.scss';

interface UnitsToggleProps {
    selectedUnits: Units;
    loadWeather: () => void;
    selectUnits: (units: Units) => void;
}

const UnitsToggleComponent: React.FunctionComponent<UnitsToggleProps> = ({
    selectedUnits,
    loadWeather,
    selectUnits,
}: UnitsToggleProps) => {
    React.useEffect(() => {
        loadWeather();
    }, [selectedUnits]);

    const createOnSelect = (units: Units) => () => selectUnits(units);

    return (
        <div className="units-toggle">
            º
            <div className="units-toggle__controls">
                <button
                    onClick={createOnSelect(Units.CELSIUS)}
                    className={classNames(
                        'units-toggle__controls__button',
                        {'units-toggle__controls__button__active': selectedUnits === Units.CELSIUS},
                    )}
                >
                    C
                </button>
                <button
                    onClick={createOnSelect(Units.FAHRENHEIT)}
                    className={classNames(
                        'units-toggle__controls__button',
                        {'units-toggle__controls__button__active': selectedUnits === Units.FAHRENHEIT},
                    )}
                >
                    F
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    selectedUnits: getSelectedUnits(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadWeather: () => dispatch(loadWeatherAction()),
    selectUnits: (units: Units) => dispatch(setUnits(units)),
});

export const UnitsToggle = connect(mapStateToProps, mapDispatchToProps)(UnitsToggleComponent);
