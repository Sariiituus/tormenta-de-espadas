export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUser = () => dispatch => {
    console.log('logout user');
    const action = {
      type: LOGOUT_USER
    }
  
    dispatch(action);
  };
  