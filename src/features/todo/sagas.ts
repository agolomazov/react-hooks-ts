import { all, call, put, takeEvery, delay } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { fetchTodos } from './api';
import { ServerError } from '../../common/errors';
import { TODO_FETCH_START } from './types';
import { todoFetchStop, todoFill } from './ducks/actions';

/**
 * Получение списка задач
 */
export function* fetchTodosSaga(): SagaIterator {
  try {
    yield delay(3000);
    const data = yield call(fetchTodos);
    yield put(todoFill(data));
  } catch (error) {
    if (error instanceof ServerError) {
      yield call(console.log, `[SERVER-ERROR]: ${error.code}`);
    } else {
      yield call(console.log, 'Unknown error');
    }
  } finally {
    yield put(todoFetchStop());
  }
}

export function* todosWatcher(): SagaIterator {
  yield all([
    takeEvery(TODO_FETCH_START, fetchTodosSaga)
  ]);
}