import React, { useState, useEffect } from "react";
import { useMap, Marker, useMapEvents, Tooltip } from "react-leaflet";
import { selectEvent } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import "react-leaflet-markercluster/dist/styles.min.css";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "./Map.css";
moment().format();

const ClusterMarker = () => {
  const eventsInfo = useSelector((state) => state.eventsInfo);
  const [bounds, setBounds] = useState([0, 0, 0, 0]);
  const dispatch = useDispatch();

  const markerHtmlStyles = `
  background-color: #3F51B4;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 1.5rem 1.5rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

  const selectedMarkerHtmlStyles = `
  background-color: #2bb437;
  border: solid 2px black;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 2.5rem 2.5rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

  const customMarkerIcon = divIcon({
    html: `<span style="${markerHtmlStyles}">`,
  });
  const selectedCustomMarkerIcon = divIcon({
    html: `<span style="${selectedMarkerHtmlStyles}">`,
  });

  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();
    console.log(cluster.getAllChildMarkers());
    let selectedInCluster = cluster
      .getAllChildMarkers()
      .map((marker) => marker.options.isSelected);
    console.log(selectedInCluster);
    if (selectedInCluster.includes("true")) {
      console.log("its a match");
      return divIcon({
        html: `<div>
              <span>${count}</span>
            </div>`,
        className: "marker-cluster selected",
      });
    } else {
      return divIcon({
        html: `<div>
              <span>${count}</span>
            </div>`,
        className: "marker-cluster",
      });
    }
  };

  const map = useMap();

  const mapEvent = useMapEvents({
    locationfound(e) {
      map.setView([e.latlng.lat, e.latlng.lng], 16);
    },
  });

  useEffect(() => {
    console.log("rerender");
  });

  useEffect(() => {
    mapEvent.locate();
  }, []);

  useEffect(() => {
    Object.keys(eventsInfo.selectedEvent) > 0 &&
      map.setView(
        [
          eventsInfo.selectedEvent.location.latitude,
          eventsInfo.selectedEvent.location.longitude,
        ],
        17
      );
  }, [eventsInfo.selectedEvent]);

  return (
    <>
      <MarkerClusterGroup
        key={uuidv4()}
        iconCreateFunction={createClusterCustomIcon}
        spiderLegPolylineOptions={{
          weight: 0,
          opacity: 0,
        }}
      >
        {Array.isArray(eventsInfo.events) &&
          eventsInfo.events.map((event, index) => {
            if (event) {
              return (
                <Marker
                  key={`event-${index}`}
                  data-id={event._id}
                  icon={
                    event._id === eventsInfo.selectedEvent._id
                      ? selectedCustomMarkerIcon
                      : customMarkerIcon
                  }
                  isSelected={
                    event._id === eventsInfo.selectedEvent._id
                      ? "true"
                      : "false"
                  }
                  position={[event.location.latitude, event.location.longitude]}
                  eventHandlers={{
                    click: () => {
                      dispatch(selectEvent(event));
                    },
                  }}
                >
                  <Tooltip>
                    <span>{event.name}</span>
                    <br />
                    <span>
                      {moment(event.date).format("dddd, MMMM Do YYYY")}
                    </span>
                    <br />
                    <span>{event.startTime}</span>
                  </Tooltip>
                </Marker>
              );
            }
          })}
      </MarkerClusterGroup>
    </>
  );
};

export default ClusterMarker;
