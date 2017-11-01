export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      // NEVER MANIPULATE STATE IN REDUX! Create a new one, and return.
      return [action.payload.data, ...state]; // ... takes out the entries from state, flattens it out, and puts it in a new array
    default:
      return state;
  }
}
