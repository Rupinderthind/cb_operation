import types from "../types";

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.authenticated
      };

    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };

    default:
      return state;
  }
};
