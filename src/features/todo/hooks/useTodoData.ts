import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Todos } from '../types';
import { selectors } from '../ducks/selectors';
import { todoFetchStart } from '../ducks/actions';

export const useTodoData = () => {
  const dispatch = useDispatch();
  const todos: Todos = useSelector(selectors.todosSelector);
  const isLoading: boolean = useSelector(selectors.todosIsLoading);

  useEffect(() => {
    dispatch(todoFetchStart());
  }, [dispatch]);

  return {
    todos,
    isLoading
  }
};
