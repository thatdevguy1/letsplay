import axios from "axios";
import { toast } from "react-toastify";

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
  return async (dispatch) => {
    const API_STRING = `/api/nominatim/getLatLng/${coords[0]}/${coords[1]}`;
    var config = {
      method: "get",
      url: API_STRING,
    };
    //make api call string
    console.log("string from setLATLNG ", API_STRING);
    try {
      //axios call
      let { data } = await axios(config);
      console.log(data);

      if (data.display_name) {
        let label = data.display_name.split(",");
        label.splice(4, 2);
        label.splice(2, 1);
        let finalLabelArr = label.map((word, idx) =>
          idx === 0 || idx === label.length - 1 ? word : word + ","
        );
        let finalLabel = finalLabelArr.join("");
        //disect data object returned for address
        dispatch({
          type: "SETLATLNG",
          payload: {
            coords,
            address: finalLabel,
          },
        });
      } else {
        dispatch({
          type: "SETLATLNG",
          payload: {
            coords,
            address: "",
          },
        });
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
};

export const findAndSetLatLng = (address) => {
  return async (dispatch) => {
    const API_STRING = `/api/nominatim/setLatLng/${address}`;
    var config = {
      method: "get",
      url: API_STRING,
    };

    try {
      //axios call

      let { data } = await axios(config);
      console.log(data);
      if (data[0].display_name) {
        let label = data[0].display_name.split(",");
        label.splice(4, 2);
        label.splice(2, 1);
        let finalLabelArr = label.map((word, idx) =>
          idx === 0 || idx === label.length - 1 ? word : word + ","
        );
        let finalLabel = finalLabelArr.join("");
        // disect data object returned for address
        dispatch({
          type: "SETLATLNG",
          payload: {
            coords: [data[0].lat, data[0].lon],
            address: finalLabel,
          },
        });
      } else {
        dispatch({
          type: "SETLATLNG",
          payload: {
            coords: [0, 0],
            address: "",
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
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
      toast.error(err.message);
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
      toast.error(err.message);
    }
  };
};

export const getMyEvents = (toggle) => {
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
      if (response && response.data.response === true) {
        dispatch({
          type: "toggleMyEvents",
          payload: { response, toggle },
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
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
      toast.error(err.message);
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

      if (response && response.data.response === true) {
        dispatch({
          type: "selectEvent",
          payload: response.data._doc,
        });
        toast.success(`You have joined this event as ${data.participantsName}`);
      } else {
        toast.warn(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again later");
    }
  };
};

export const removeParticipant = (data) => {
  return async (dispatch) => {
    var config = {
      method: "delete",
      url: process.env.REACT_APP_BASE_API + `/removeParticipant`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      let response = await axios(config);

      if (response && response.data.response === true) {
        dispatch({
          type: "selectEvent",
          payload: response.data.updatedEvent,
        });
        toast.success(`You have left this event`);
      } else {
        toast.warn(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again later");
    }
  };
};

export const deleteEvent = (data) => {
  return async (dispatch) => {
    var config = {
      method: "delete",
      url: process.env.REACT_APP_BASE_API + `/deleteEvent`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      let response = await axios(config);
      if (response && response.data.response === true) {
        dispatch({
          type: "deleteEvent",
          payload: response.data._doc,
        });
        toast.success(`You have deleted ${response.data.name}`);
      } else {
        toast.warn(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong! Please try again later");
    }
  };
};

export const selectEvent = (payload) => {
  return {
    type: "selectEvent",
    payload: payload,
  };
};

export const searchEvent = (searchTerm) => {
  return {
    type: "SEARCH_EVENT",
    payload: searchTerm.toLowerCase(),
  };
};
