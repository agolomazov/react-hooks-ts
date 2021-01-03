export type Todo = {
  id?: string;
  title: string;
  completed: boolean;
  userId?: number;
};

export type Todos = Todo[];

export type TodoSearchType = {
  searchText: string;
};

export type TodoState = {
  todos: Todos;
  search: TodoSearchType;
  isLoading: boolean;
}

// ACTION TYPES
export const TODO_ADD = 'TODO_ADD';

export const TODO_CHANGE_START = 'TODO_CHANGE_START';
export const TODO_CHANGE = 'TODO_CHANGE';
export const TODO_CHANGE_STOP = 'TODO_CHANGE_STOP';

export const TODO_COMPLETED = 'TODO_COMPLETED';

export const TODO_REMOVE = 'TODO_REMOVE';

export const TODO_SEARCH = 'TODO_SEARCH';
export const TODO_SEARCH_CLEAR = 'TODO_SEARCH_CLEAR';

export const TODO_FILL = 'TODO_FILL';
export const TODO_FETCH_START = 'TODO_FETCH_START';
export const TODO_FETCH_STOP = 'TODO_FETCH_STOP';

export type TodoAdd = {
  type: typeof TODO_ADD;
  payload: Todo;
};

export type TodoCompleted = {
  type: typeof TODO_COMPLETED;
  payload: Todo;
};

export type TodoRemove = {
  type: typeof TODO_REMOVE;
  payload: string;
};

export type TodoSearch = {
  type: typeof TODO_SEARCH;
  payload: TodoSearchType;
};

export type TodoFill = {
  type: typeof TODO_FILL;
  payload: Todos;
};

export type TodoFetchStart = {
  type: typeof TODO_FETCH_START
};

export type TodoFetchStop = {
  type: typeof TODO_FETCH_STOP
}

export type TodoActionTypes = 
  | TodoAdd
  | TodoCompleted
  | TodoRemove
  | TodoFill
  | TodoFetchStart
  | TodoFetchStop
  | TodoSearch;