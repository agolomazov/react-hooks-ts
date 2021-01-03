import React, { FC, ReactElement } from 'react';

import { useTodoData } from '../hooks/useTodoData';
import { TodoItem } from './TodoItem';

export const TodoList: FC = (): ReactElement => {
  const { todos, isLoading } = useTodoData();

  let content;
  const isLoadingContent = isLoading ? <p>Loading data...</p> : null;

  if (!todos.length && !isLoading) {
    content = <p>Todo list is empty!</p>
  } else {
    content = todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }

  return (
    <div>
      { isLoadingContent }
      { content }
    </div>
  );
}