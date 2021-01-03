import { uuidv4 } from '../../../common/utils';

import {
  TodoState,
  TodoActionTypes,
  TodoAdd,
  Todo,
  TodoCompleted,
  TodoRemove,
  Todos,
  TodoSearch,
  TODO_ADD,
  TODO_COMPLETED,
  TODO_REMOVE,
  TODO_SEARCH,
  TODO_FETCH_START,
  TODO_FETCH_STOP,
  TodoFill,
  TODO_FILL,
} from '../types';

export const initialState: TodoState = {
  todos: [],
  search: {
    searchText: ''
  },
  isLoading: false
};

const addTodo = (state: TodoState, { payload }: TodoAdd): TodoState => ({
  ...state,
  todos: [
    ...state.todos,
    {
      ...payload,
      id: uuidv4()
    }
  ]
});

const completedTodo = (state: TodoState, { payload }: TodoCompleted): TodoState => {
  const todos = state.todos;
  const newTodos = todos.map((todo: Todo): Todo => {
    if (todo.id === payload.id) {
      return {
        ...todo,
        completed: payload.completed
      };
    }

    return todo;
  });

  return {
    ...state,
    todos: newTodos
  };
};

const removeTodo = (state: TodoState, { payload }: TodoRemove): TodoState => {
  const { todos } = state;
  const newTodos: Todos = todos.filter((todo:Todo) => todo.id !== payload)

  return {
    ...state,
    todos: newTodos
  }
};

const searchTodo = (state: TodoState, { payload }: TodoSearch): TodoState => ({
  ...state,
  search: payload
});

const fetchStart = (state: TodoState): TodoState => ({
  ...state,
  isLoading: true,
});

const fetchStop = (state: TodoState): TodoState => ({
  ...state,
  isLoading: false,
});

const todoFill = (state: TodoState, { payload }: TodoFill): TodoState => ({
  ...state,
  todos: payload
});


export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch(action.type) {
    case TODO_ADD:
      return addTodo(state, action);
    case TODO_COMPLETED:
      return completedTodo(state, action);
    case TODO_REMOVE:
      return removeTodo(state, action);
    case TODO_SEARCH:
      return searchTodo(state, action);
    case TODO_FETCH_START:
      return fetchStart(state);
    case TODO_FETCH_STOP:
      return fetchStop(state);
    case TODO_FILL:
      return todoFill(state, action);
    default:
      return state;
  }
};
