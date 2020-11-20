const defaultState = {
  events: [],
  selectedEvent: {},
  myEvents: [],
  toggleMyEvents: false,
};

const eventsInfo = (state = defaultState, action) => {
  switch (action.type) {
    case "getEvents":
      return { ...state, events: action.payload.data.events };
    case "selectEvent":
      return { ...state, selectedEvent: action.payload };
    case "toggleMyEvents":
      return {
        ...state,
        toggleMyEvents: !state.toggleMyEvents,
        myEvents: action.payload.data.myEvents,
      };
    default:
      return state;
  }
};

export default eventsInfo;
