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

export const setUser = (payload) => {
  return {
    type: "SIGN_IN",
    payload: payload,
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

//NOT NEEDED RIGHT NOW... CREATING AN EVENT DOESN'T NEED TO CHANGE STATE
// export const createEvent = () => {
//   return async (dispatch) => {
//     var config = {
//       method: "post",
//       url: process.env.REACT_APP_BASE_API + "/createEvent",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       let response = await axios(config);

//       if (response && response.data.response === true) {
//         console.log(response);
//         dispatch({
//           type: "createEvent",
//           payload: response,
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
