import { SET_TITLE } from '../actions/types';

const initialState = 'Dashboard';

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TITLE:
        state= payload;
        return state;
    default:
        return state;
  }
}
