import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { todoCompleted, todoRemove } from '../ducks/actions';
import { Todo } from '../types';

export const useTodoActions = () => {
  const dispatch = useDispatch();

  const onComplete = useCallback((todo: Todo) => {
    dispatch(todoCompleted({
      ...todo,
      completed: !todo.completed
    }))
  }, [dispatch]);

  const onRemove = useCallback((todoId: string) => {
    dispatch(todoRemove(todoId));
  }, [dispatch]);

  return {
    onComplete,
    onRemove
  };
}