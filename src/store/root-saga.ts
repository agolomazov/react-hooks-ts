import { all, call, fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { todosWatcher } from '../features/todo';

function* consoleSaga(): Generator {
  yield call(
    console.log,
    'Root saga started'
  );
}

export function* rootSaga(): SagaIterator {
  yield all([
    consoleSaga,
    todosWatcher
  ].map(fork));
}