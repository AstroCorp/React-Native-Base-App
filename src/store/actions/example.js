import { INCREMENT, DECREMENT, GET_REPOS } from './actionTypes';

export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        value: value
    };
};

export function listRepos() {
  return {
        type: GET_REPOS,
        payload: {
            request: {
                url: ''
            }
        }
    };
}