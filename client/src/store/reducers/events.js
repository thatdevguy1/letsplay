const events = (state = [], action) => {
  switch (action.type) {
    case "getEvents":
      return action.payload.data.events;
    case "createEvent":
      return state;
    default:
      return state;
  }
};

export default events;
