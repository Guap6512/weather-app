import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './store/configure-store';
import {Layout} from './components/layout';
import {CityInfo} from './components/city-info';

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <Layout>
            <CityInfo />
        </Layout>
    </Provider>
);
