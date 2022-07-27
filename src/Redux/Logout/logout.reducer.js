import * as actions from "./logout.actions";

const INITIAL_STATE = {
  isLoggedIn: null,
//   isLoading: false,
  error: false,
};

const logoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOGOUT_USER: {
      return { ...state, isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
};

export default logoutReducer;
