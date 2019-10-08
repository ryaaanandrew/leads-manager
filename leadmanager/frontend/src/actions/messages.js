import { CREATE_MESSAGE, GET_MESSAGES } from './types';

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
