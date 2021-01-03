import { createSelector } from 'reselect';

import { AppState } from '../../../store';
import { Todo, Todos, TodoSearchType, TodoState } from '../types';

const todoSelector = (state: AppState): TodoState => state.todo;

const todosSelector = createSelector(
  todoSelector,
  (todoState: TodoState): Todos => todoState.todos
);

const todoSearchSelector = createSelector(
  todoSelector,
  (todoState: TodoState): TodoSearchType => todoState.search
);

const todosIsLoading = createSelector(
  todoSelector,
  (todo) => todo.isLoading
);

const searchedTodos = createSelector(
  todosSelector,
  todoSearchSelector,
  (
    todos: Todos,
    filter: TodoSearchType
  ): Todos => {
    return todos.filter((todo: Todo): boolean => {
      if (todo.title.includes(filter.searchText)) {
        return true;
      }

      return false;
    });
  }
);

export const selectors = {
  todosSelector,
  todoSearchSelector,
  searchedTodos,
  todosIsLoading
};