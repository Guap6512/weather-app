import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './store/configure-store';
import {Layout} from './components/layout';
import {CityInfo} from './components/city-info';
import {WeatherWidget} from './components/weather-widget-main';
import {WeatherDetails} from './components/weather-details';

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <Layout>
            <CityInfo />
            <WeatherWidget />
            <WeatherDetails />
        </Layout>
    </Provider>
);
