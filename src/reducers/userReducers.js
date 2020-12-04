import { GET_USER, ERROR, LOADING } from "../userTypes/types";
const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload, loading: false };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
