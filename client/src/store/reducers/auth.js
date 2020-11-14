const auth = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        authenticated: true,
        username: action.payload.data.user.username,
        userId: action.payload.data.user._id,
      };
    case "SIGN_OUT":
      return {
        authenticated: false,
        username: "",
        userId: "",
      };
    default:
      return state;
  }
};

export default auth;
