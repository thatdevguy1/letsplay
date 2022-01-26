const auth = (state = { username: "", signedUp: false, id: "" }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        username: action.payload.username,
        id: action.payload._id,
        signedUp: action.payload.signedUp,
      };
    case "SIGN_OUT":
      return {
        signedUp: false,
        username: "",
        id: "",
      };
    default:
      return state;
  }
};

export default auth;
