const auth = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        authenticated: true,
        username: action.payload.username,
        userId: action.payload._id,
        events: action.payload.events,
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
