import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // NEVER MANIPULATE STATE IN REDUX! Create a new one, and return.
      return [action.payload.data, ...state]; // ... takes out the entries from state and puts in new array
    default:
      return state;
  }
}
