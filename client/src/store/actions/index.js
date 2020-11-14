import axios from "axios";

export const signIn = (payload) => {
  return async (dispatch) => {
    var config = {
      method: "post",
      url: "http://localhost:8080/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };

    let response = await axios(config);

    if (response && response.data.response == true) {
      dispatch({
        type: "SIGN_IN",
        payload: response,
      });
    }
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
