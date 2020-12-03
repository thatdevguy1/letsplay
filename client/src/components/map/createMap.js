import React, { useState, useEffect } from "react";
import {
  MapContainer,
  useMapEvent,
  useMap,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { geolocated } from "react-geolocated";
import { useDispatch } from "react-redux";
import { setLatLng } from "../../store/actions";
import { Icon } from "leaflet";
import "./map.css";

//MapModifier is needed to access and dynamically change the map which is a child component of MapContainer
const MapModifier = ({ coords }) => {
  const dispatch = useDispatch();
  const [coordsState, setCoordsState] = useState(coords);
  const map = useMap();

  const mapEvent = useMapEvent("click", async () => {
    const latlng = await mapEvent.getCenter();
    setCoordsState([latlng.lat, latlng.lng]);
  });

  useEffect(() => {
    positionMapView(coordsState);
    dispatch(setLatLng(coordsState));
  }, [coordsState]);

  const positionMapView = (coordsArray) => {
    map.setView(coordsArray, 16);
  };

  return <Marker position={coordsState} />;
};

//Consumes MapModifier to dynamically change the map location and zoom
const CreateMap = (props) => {
  const [coords, setCoords] = useState(false);
  useEffect(() => {
    props.coords && setCoords([props.coords.latitude, props.coords.longitude]);
  }, [props.coords]);
  return (
    <div className="map">
      <MapContainer center={[0, 0]} zoom={2}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {coords && <MapModifier coords={coords} />}
      </MapContainer>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 60000,
})(CreateMap);
