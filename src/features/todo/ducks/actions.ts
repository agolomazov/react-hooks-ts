import {
  TodoAdd,
  TodoCompleted,
  TodoRemove,
  TodoSearch,
  TODO_ADD,
  TODO_COMPLETED,
  TODO_REMOVE,
  TODO_SEARCH,
  TODO_FILL,
  Todo,
  TodoSearchType,
  Todos,
  TodoFill,
  TodoFetchStart,
  TODO_FETCH_START,
  TodoFetchStop,
  TODO_FETCH_STOP,
} from '../types';

export const todoAdd = (todo: Todo): TodoAdd => ({
  type: TODO_ADD,
  payload: todo
});

export const todoCompleted = (todo: Todo): TodoCompleted => ({
  type: TODO_COMPLETED,
  payload: todo
});

export const todoRemove = (todoId: string): TodoRemove => ({
  type: TODO_REMOVE,
  payload: todoId
});

export const todoSearch = (search: TodoSearchType): TodoSearch => ({
  type: TODO_SEARCH,
  payload: search
});

export const todoFill = (todos: Todos): TodoFill => ({
  type: TODO_FILL,
  payload: todos
});

export const todoFetchStart = (): TodoFetchStart => ({
  type: TODO_FETCH_START
});

export const todoFetchStop = (): TodoFetchStop => ({
  type: TODO_FETCH_STOP
});