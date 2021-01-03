import React, { FC, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { TodoList } from './TodoList';

export const Todos: FC<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <TodoList />
    </>
  );
}