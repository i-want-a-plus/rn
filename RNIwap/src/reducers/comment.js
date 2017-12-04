import * as types from '../actions/types';
import _ from 'lodash';

export function comment (state = {}, action) {
  if (!action.meta) return state;
  let id = `${action.meta.type}_${action.meta.id}`;
  switch (action.type) {
    case `${types.COMMENT_FETCH}_PENDING`:
      return Object.assign({}, state, { [id]: { isPending: true } });
    case `${types.COMMENT_FETCH}_FULFILLED`:
      return Object.assign({}, state, { [id]: { error: false, isPending: false, data: action.payload } });
    case `${types.COMMENT_FETCH}_REJECTED`:
      return Object.assign({}, state, { [id]: { error: action.payload, isPending: false } });
    default:
      return state;
  };
};