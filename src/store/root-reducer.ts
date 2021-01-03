import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from './history';

import { todoReducer } from '../features/todo';

export const rootReducer = combineReducers({
  todo: todoReducer,
  router: connectRouter(history)
});

export type AppState = ReturnType<typeof rootReducer>;