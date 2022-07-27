export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";

export const logoutUser = () => (dispatch) => {
  console.log("logout user");
  const action = {
    type: LOGOUT_USER,
  };

  dispatch(action);
};

export const loginUser = (user) => dispatch => {
  const action = {
    type: LOGIN_USER,
    payload: user,
  }

  dispatch(action);
}