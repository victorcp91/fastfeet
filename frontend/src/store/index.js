import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from 'store/createStore';
import rootReducer from 'store/modules/rootReducer';
import rootSaga from 'store/modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? // eslint-disable-next-line no-console
      console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
