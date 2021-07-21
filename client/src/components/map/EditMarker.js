import React, { useEffect } from "react";
import { useMap, Marker, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setLatLng } from "../../store/actions";
import markerStyles from "./CustomerMarker/CustomeMarker";

const CreateMarker = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector(
    (state) => state.eventsInfo.selectedEvent.location
  );
  const { lat, lng } = useSelector(
    (state) => state.eventsInfo.createEventLocation
  );
  const map = useMap();

  useMapEvents({
    click(e) {
      dispatch(setLatLng([e.latlng.lat, e.latlng.lng]));
      map.setView([e.latlng.lat, e.latlng.lng]);
    },
  });

  useEffect(() => {
    map.setView([latitude, longitude], 16);
    dispatch(setLatLng([latitude, longitude]));
  }, []);

  return <Marker position={[lat, lng]} icon={markerStyles.customMarkerIcon} />;
};

export default CreateMarker;
