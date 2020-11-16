const events = (state = [], action) => {
  switch (action.type) {
    case "getEvents":
      return action.payload.data.events;
    default:
      return state;
  }
};

export default events;
