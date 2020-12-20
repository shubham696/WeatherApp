import {
  ON_ERROR,
  ON_SUCCESSFULL_REQUEST,
  REQUEST_BEGIN,
} from '../helpers/actionType';

let initialState = {
  temperatures: [],
  isLoading: false,
  error: null,
  city: '',
};

export default temperature = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BEGIN:
      return Object.assign({}, state, {isLoading: true});
    case ON_SUCCESSFULL_REQUEST:
      return Object.assign({}, state, {
        temperatures: [...initialState.temperatures, action.payload.list],
        isLoading: false,
        city: action.payload.city.name,
      });
    case ON_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};
