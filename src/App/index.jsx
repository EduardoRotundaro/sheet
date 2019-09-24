import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/reacts';

import { persistor, store } from '../storage';

import Router from './Router';

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router/>
        </PersistGate>
    </Provider>
);