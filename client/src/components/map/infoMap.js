import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { geolocated } from "react-geolocated";
import { Icon } from "leaflet";
import "./map.css";

const InfoMap = (props) => {
  const [eventInfo, setEventInfo] = useState(false);

  console.log(props.coords);
  useEffect(() => {
    waitForEvent();
  }, [props.selectedEvent]);

  const waitForEvent = async () => {
    await setEventInfo(props.selectedEvent);
  };

  return (
    <div className="map">
      {eventInfo && (
        <MapContainer
          center={[eventInfo.location.latitude, eventInfo.location.longitude]}
          zoom={16}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker
            position={[
              eventInfo.location.latitude,
              eventInfo.location.longitude,
            ]}
          />
        </MapContainer>
      )}
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 60000,
})(InfoMap);
