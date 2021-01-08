import axios from 'axios';

import { rootApi } from '../../constants';
import { Todos } from './types';
import { ServerError } from '../../common/errors';

/**
 * Получение списка дел
 */
export const fetchTodos = async (): Promise<Todos> => {
  try {
    const response = await axios.get<Todos>(`${rootApi}/todos`, {
      params: {
        '_limit': 10
      }
    });

    return response.data as Todos;
  } catch (error) {
    throw new ServerError(
      error.response.status,
      error.message
    );
  }
};
