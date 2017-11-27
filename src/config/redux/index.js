import { createStore, applyMiddleware, compose } from 'redux';
import immutableTransform from 'redux-persist-transform-immutable';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import saga, { sagaRoot } from './sagas';
import reducers from './reducers';

export const store = createStore(
  reducers,
  compose(applyMiddleware(saga), autoRehydrate())
);

saga.run(sagaRoot);

export const persistor = persistStore(store, {
  storage: AsyncStorage,
  transforms: [immutableTransform()]
});
