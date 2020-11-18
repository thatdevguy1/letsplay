const defaultState = {
  events: [],
  selectedEvent: {},
};

const eventsInfo = (state = defaultState, action) => {
  switch (action.type) {
    case "getEvents":
      return { ...state, events: action.payload.data.events };
    case "selectEvent":
      return { ...state, selectedEvent: action.payload };
    default:
      return state;
  }
};

export default eventsInfo;
