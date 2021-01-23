import React, { useState, useEffect } from "react";
import { useMap, Marker, useMapEvents, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import useSupercluster from "react-supercluster";

const ClusterMarker = () => {
  const events = useSelector((state) => state.eventsInfo.events);
  const [bounds, setBounds] = useState([0, 0, 0, 0]);

  const map = useMap();

  const mapEvent = useMapEvents({
    locationfound(e) {
      map.setView([e.latlng.lat, e.latlng.lng], 16);
    },
    // move(e) {
    //   const { _southWest, _northEast } = map.getBounds();
    //   setBounds([
    //     _southWest.lat,
    //     _southWest.lng,
    //     _northEast.lat,
    //     _northEast.lng,
    //   ]);
    //   console.log(`Moved! new bounds: ${bounds}`);
    // },
  });

  useEffect(() => {
    mapEvent.locate();
  }, []);

  return (
    <>
      {Array.isArray(events) &&
        events.map((event, index) => {
          if (event) {
            return (
              <Marker
                key={`event-${index}`}
                position={[event.location.latitude, event.location.longitude]}
              >
                <Popup>{event.name}</Popup>
              </Marker>
            );
          }
        })}
    </>
  );
};

export default ClusterMarker;
