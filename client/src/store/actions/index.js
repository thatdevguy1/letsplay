import axios from "axios";

export const signIn = (payload) => {
  return async (dispatch) => {
    var config = {
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/login",
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

export const register = (payload) => {
  return async (dispatch) => {
    var config = {
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };

    let response = await axios(config);

    signIn(response);
  };
};

export const setUser = (payload) => {
  return {
    type: "SIGN_IN",
    payload: payload,
  };
};

export const setLatLng = (coords) => {
  return {
    type: "SETLATLNG",
    payload: coords,
  };
};

export const signOut = () => {
  return async (dispatch) => {
    var config = {
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/logout",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);

      if (response && response.data.response === true) {
        dispatch({
          type: "SIGN_OUT",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getEvents = () => {
  return async (dispatch) => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_BASE_API + "/getEvents",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);
      console.log("getEvents res: ", response);
      if (response && response.data.response === true) {
        dispatch({
          type: "getEvents",
          payload: response,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMyEvents = () => {
  return async (dispatch) => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_BASE_API + "/getMyEvents",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);
      console.log("Myevents are: ", response);
      if (response && response.data.response === true) {
        dispatch({
          type: "toggleMyEvents",
          payload: response,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getEvent = (id) => {
  return async (dispatch) => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_BASE_API + `/getEvent?id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);

      if (response && response.data.response === true) {
        dispatch({
          type: "selectEvent",
          payload: response.data._doc,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const joinEvent = (data) => {
  return async (dispatch) => {
    var config = {
      method: "put",
      url: process.env.REACT_APP_BASE_API + `/joinEvent`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      let response = await axios(config);
      console.log("response from join event: ", response);
      if (response && response.data.response === true) {
        dispatch({
          type: "selectEvent",
          payload: response.data._doc,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const selectEvent = (payload) => {
  return {
    type: "selectEvent",
    payload: payload,
  };
};
