import React, { FC, ReactElement, memo } from 'react';

import { useTodoData } from '../hooks/useTodoData';
import { TodoItem } from './TodoItem';

const TodoListComponent: FC = (): ReactElement => {
  const { todos, isLoading } = useTodoData();

  return (
    <div>
      { isLoading && <p>Loading data...</p> }
      { todos.map(todo => <TodoItem key={todo.id} todo={todo} />) }
    </div>
  );
};

export const TodoList = memo(TodoListComponent);