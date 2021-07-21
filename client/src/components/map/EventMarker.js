import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMap, Marker } from "react-leaflet";
import {} from "react-redux";
import markerStyles from "./CustomerMarker/CustomeMarker";

const EventMarker = () => {
  const map = useMap();
  const { latitude, longitude } = useSelector(
    (state) => state.eventsInfo.selectedEvent.location
  );

  useEffect(() => {
    map.setView([latitude, longitude], 14);
  });

  return (
    <Marker
      position={[latitude, longitude]}
      icon={markerStyles.customMarkerIcon}
    />
  );
};

export default EventMarker;
