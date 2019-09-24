import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

import { DEV_MODE } from '../constants/utilities';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [
    ],
    whitelist: [
    ]
}

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore( persistedReducers, DEV_MODE);
const persistor = persistStore(store);

export { store, persistor };