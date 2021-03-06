import React, { FC, ReactElement,  memo } from 'react';
import classnames from 'classnames';

import type { Todo } from '../types';
import { useTodoActions } from '../hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo
}

const TodoItemComponent: FC<TodoItemProps> = ({ todo }): ReactElement => {
  const { onRemove, onComplete } = useTodoActions();

  return (
    <div>
      <p className={classnames({ completed: todo.completed })}>
        <label>
          <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo)} />
          { todo.title }
          {' '}
          <button onClick={() => onRemove(todo.id!)}>
            x
          </button>
        </label>
      </p>
    </div>
  );
};

export const TodoItem = memo(TodoItemComponent);