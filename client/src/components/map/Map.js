import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import EventMarker from "./EventMarker";
import CreateMarker from "./CreateMarker";
import EditMarker from "./EditMarker";
import ClusterMarker from "./ClusterMarker";

//Different Markers modify the functionality of the map in their respective components
const Map = ({ type }) => {
  const showMarker = () => {
    switch (type) {
      case "displayLocation":
        return <EventMarker />;
      case "setLocation":
        return <CreateMarker />;
      case "editLocation":
        return <EditMarker />;
      case "cluster":
        return <ClusterMarker />;
    }
  };

  return (
    <div className="map">
      <MapContainer center={[0, 0]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showMarker()}
      </MapContainer>
    </div>
  );
};

export default Map;
