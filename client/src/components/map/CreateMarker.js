import React, { useEffect } from "react";
import { useMap, Marker, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setLatLng } from "../../store/actions";

const CreateMarker = () => {
  const dispatch = useDispatch();
  const { lat, lng } = useSelector(
    (state) => state.eventsInfo.createEventLocation
  );
  const map = useMap();

  const mapEvent = useMapEvents({
    click(e) {
      dispatch(setLatLng([e.latlng.lat, e.latlng.lng]));
      map.setView([e.latlng.lat, e.latlng.lng]);
    },
    locationfound(e) {
      dispatch(setLatLng([e.latlng.lat, e.latlng.lng]));
      map.setView([e.latlng.lat, e.latlng.lng], 16);
    },
  });

  useEffect(() => {
    mapEvent.locate();
  }, []);

  return <Marker position={[lat, lng]} />;
};

export default CreateMarker;
