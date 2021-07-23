const defaultState = {
  events: [],
  selectedEvent: {},
  myEvents: [],
  toggleMyEvents: false,
  createEventLocation: {
    lat: 0,
    lng: 0,
  },
  searchEvent: "",
};

const eventsInfo = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH_EVENT":
      return {
        ...state,
        searchEvent: action.payload,
      };
    case "SETLATLNG":
      return {
        ...state,
        createEventLocation: { lat: action.payload[0], lng: action.payload[1] },
      };
    case "getEvents":
      return { ...state, events: action.payload.data.events };
    case "selectEvent":
      return { ...state, selectedEvent: action.payload };
    case "deleteEvent":
      return { ...state };
    case "toggleMyEvents":
      return {
        ...state,
        toggleMyEvents: action.payload.toggle,
        myEvents: action.payload.response.data.myEvents,
      };
    default:
      return state;
  }
};

export default eventsInfo;
