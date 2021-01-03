import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { middleware, sagaMiddleware } from './middleware';

export type { AppState } from './root-reducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middleware
    )
  )
);

sagaMiddleware.run(rootSaga);