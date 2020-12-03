const defaultState = {
  events: [],
  selectedEvent: {},
  myEvents: [],
  toggleMyEvents: false,
  createEventLocation: {
    lat: 0,
    lng: 0,
  },
};

const eventsInfo = (state = defaultState, action) => {
  switch (action.type) {
    case "SETLATLNG":
      return {
        ...state,
        createEventLocation: { lat: action.payload[0], lng: action.payload[1] },
      };
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
