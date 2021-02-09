import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {isProduction} from '../utils/is-production';
import {rootReducer} from './root-reducer';

const initialState = {};

export const configureStore = () => {
    const devToolsCompose = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const composeEnhancer: typeof compose = isProduction() ? compose : devToolsCompose;

    return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
};
