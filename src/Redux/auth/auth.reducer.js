import * as actions from "./auth.actions";

const INITIAL_STATE = {
  isLoggedIn: null,
  user: null,
  isLoading: false,
  error: false,
};

const logoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.LOGOUT_USER: {
      return { ...state, isLoggedIn: false, user: false };
    }
    case actions.LOGIN_USER: {
      return { ...state, isLoggedIn: true, user: payload };
    }
    default: {
      return state;
    }
  }
};

export default logoutReducer;
