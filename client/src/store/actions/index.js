import axios from "axios";

const singIn = (payload) => {
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

    console.log(response);

    if (response && response.data.response == true) {
      dispatch({
        type: "SIGN_IN",
        action: response,
      });
    }
  };
};

export default singIn;
