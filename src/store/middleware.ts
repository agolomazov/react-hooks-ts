import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import { history } from './history';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware, routerMiddleware(history)];

export { middleware, sagaMiddleware };